import { basename } from 'path'
import { cdk, javascript, typescript } from 'projen'

import { docker, helm, ide } from '../../components'

export interface BrandNewProjectOptions
  extends typescript.TypeScriptProjectOptions,
    ide.IdeProjectOptions,
    docker.DockerProjectOptions,
    helm.HelmProjectOptions {
  readonly private?: boolean
}

/**
 * @pjid brand-new
 */
export class BrandNewProject extends cdk.JsiiProject {
  constructor(options: BrandNewProjectOptions) {
    const mergedOptions = BrandNewProject.withDefaults(options)
    super(mergedOptions)

    this.preCompileTask.prependExec('eslint --fix src')
    this.preCompileTask.prependExec('prettier --write src')

    this.package.addField('prettier', `@bn-digital/prettier-config`)
    this.package.addField('eslintConfig', {
      extends: `@bn-digital/eslint-config/typescript`,
    })
    this.package.addField('lint-staged', {
      '*.{js,jsx,ts,tsx,md,less,graphql}': ['prettier --write'],
      '*.{js,jsx,ts,tsx}': ['eslint --fix'],
      '*.less': ['stylelint --fix'],
    })

    if (options?.docker) new docker.Docker(this, options.dockerOptions)
    if (options.editorconfig) new ide.Editorconfig(this)
    if (options.helm) new helm.Helm(this, options.helmOptions)
  }

  private static withDefaults({
    name,
    eslint = false,

    defaultReleaseBranch = 'latest',
    devDeps = [],
    ...options
  }: BrandNewProjectOptions): cdk.JsiiProjectOptions {
    return {
      author: 'bn-digital',
      authorAddress: 'https://bndigital.co',
      authorOrganization: true,
      clobber: false,
      commitGenerated: false,
      defaultReleaseBranch,
      dependabot: false,
      depsUpgrade: false,
      devDeps: [
        '@bn-digital/prettier-config',
        '@bn-digital/eslint-config',
        'lodash',
        'lint-staged',
        '@types/lodash',
        'projen',
        ...devDeps,
      ],
      peerDeps: ['projen'],
      disableTsconfig: true,
      docgen: false,
      docker: false,
      editorconfig: true,
      eslint,
      github: true,
      githubOptions: {
        pullRequestLint: false,
        mergify: false,
        workflows: false,
        ...options.githubOptions,
      },
      jest: false,
      licensed: false,
      minNodeVersion: '18.0.0',
      name: name ?? basename(process.cwd()),
      npmignoreEnabled: false,
      packageManager: javascript.NodePackageManager.PNPM,
      prettier: false,
      projenrcTs: true,
      publishTasks: false,
      pullRequestTemplate: false,
      releaseToNpm: false,
      repositoryUrl: `https://github.com/bn-digital/${name}`,
      sampleCode: false,
      typescriptVersion: '4.9.4',
      workflowRunsOn: ['self-hosted'],
      ...options,
    }
  }

  preSynthesize() {
    super.preSynthesize()
  }

  postSynthesize() {
    super.postSynthesize()
    this.tryFindObjectFile('tsconfig.json')?.addOverride('compilerOptions', {
      skipDefaultLibCheck: true,
      noUnusedParameters: false,
      noUnusedLocals: false,
      allowJs: false,
    })
    this.package.removeScript('compile')
    this.package.removeScript('watch')
    this.package.removeScript('test')
    this.package.removeScript('eject')
    this.package.addField('private', true)
  }
}
