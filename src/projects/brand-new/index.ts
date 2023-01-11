import { basename } from 'path'
import { javascript, typescript } from 'projen'

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
export class BrandNewProject extends typescript.TypeScriptProject {
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
  }: BrandNewProjectOptions): BrandNewProjectOptions {
    return {
      clobber: false,
      commitGenerated: false,
      defaultReleaseBranch,
      dependabot: false,
      depsUpgrade: false,
      devDeps: [
        '@bn-digital/prettier-config',
        '@bn-digital/eslint-config',
        'lint-staged',
        'ts-node',
        'typescript',
        'projen',
        ...devDeps,
      ],
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
      peerDeps: ['projen'],
      prettier: false,
      projenVersion: '0.66.11',
      projenrcTs: true,
      publishTasks: false,
      pullRequestTemplate: false,
      releaseToNpm: false,
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