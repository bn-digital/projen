import { basename } from 'path'
import { cdk, javascript } from 'projen'

import { ide } from '../../components'

export interface TemplateProjectOptions extends cdk.JsiiProjectOptions, ide.IdeProjectOptions {
  readonly private?: boolean
}

/**
 * @pjid template
 */
export class Template extends cdk.JsiiProject {
  constructor(options: TemplateProjectOptions) {
    const mergedOptions = Template.withDefaults(options)
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

    if (options.editorconfig) new ide.Editorconfig(this)
  }

  private static withDefaults({
    name,
    eslint = false,
    repositoryUrl = '',
    author = 'bn-digital',
    authorAddress = `https://github.com/bn-digital/${name}`,
    defaultReleaseBranch = 'latest',
    devDeps = [],
    ...options
  }: TemplateProjectOptions): TemplateProjectOptions {
    return {
      author,
      authorAddress,
      authorOrganization: true,
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
      repositoryUrl,
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
  }
}
