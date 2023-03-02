import { basename } from 'node:path'

import { javascript, typescript } from 'projen'
import { NodePackageManager } from 'projen/lib/javascript'

import { docker, graphql, helm, ide } from '../../components'

export interface BrandNewProjectOptions
  extends typescript.TypeScriptProjectOptions,
    ide.IdeProjectOptions,
    graphql.GraphqlProjectOptions,
    docker.DockerProjectOptions,
    helm.HelmProjectOptions {
  readonly private?: boolean
}

/**
 * @pjid brand-new
 */
export class BrandNewProject extends typescript.TypeScriptProject {
  readonly docker: docker.Docker | undefined
  readonly ide: ide.Ide | undefined
  readonly helm: helm.Helm | undefined
  readonly graphql: graphql.Graphql | undefined

  constructor(options: BrandNewProjectOptions) {
    super(BrandNewProject._withDefaults(options))

    this.package.addField('prettier', `@bn-digital/prettier-config`)
    this.package.addField('eslintConfig', {
      extends: `@bn-digital/eslint-config/typescript`,
    })
    this.package.addField('lint-staged', {
      '*.{js,jsx,ts,tsx,md,less,graphql}': ['prettier --write'],
      '*.{js,jsx,ts,tsx}': ['eslint --fix'],
      '*.less': ['stylelint --fix'],
    })
    this.package.addField('private', options.private)

    if (options.docker) this.docker = new docker.Docker(this)
    if (options.editorconfig) this.ide = new ide.Ide(this, { editorconfig: options.editorconfig })
    if (options.helm) this.helm = new helm.Helm(this, options.helmOptions)
    if (options.graphql) this.graphql = new graphql.Graphql(this, options.graphqlOptions)
  }

  /**
   * @internal
   */
  protected static readonly _withDefaults: (options: Partial<BrandNewProjectOptions>) => BrandNewProjectOptions = ({
    name,
    eslint = false,
    defaultReleaseBranch = 'latest',
    devDeps = [],
    ...options
  }) => {
    return {
      clobber: false,
      commitGenerated: false,
      defaultReleaseBranch,
      dependabot: false,
      depsUpgrade: false,
      package: false,
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
      peerDeps: ['projen@0.67.66'],
      prettier: false,
      projenVersion: '0.67.66',
      projenrcTs: true,
      publishTasks: false,
      pullRequestTemplate: false,
      releaseToNpm: false,
      sampleCode: true,
      stale: false,
      typescriptVersion: '4.9.5',
      workflowRunsOn: ['self-hosted'],
      ...options,
    }
  }

  preSynthesize() {
    super.preSynthesize()
    if (this.package.packageManager === NodePackageManager.YARN2) {
      this.gitignore.addPatterns(
        '.yarn/*',
        '!.yarn/releases',
        '!.yarn/plugins',
        '!.yarn/sdks',
        '!.yarn/versions',
        '.pnp.*'
      )
      this.package.addField('workspaces', ['packages/*'])
      const yarnrc = this.tryFindObjectFile('.yarnrc')
      yarnrc?.addOverride('nodeLinker', 'node-modules')
      yarnrc?.addOverride('enableGlobalCache', true)
      yarnrc?.addOverride('preferAggregateCacheInfo', true)
      yarnrc?.addOverride('nmHoistingLimits', 'workspaces')
    }
    this.preCompileTask.prependExec('npx eslint --fix src/**/*.{js,jsx,ts,tsx}')
    this.preCompileTask.prependExec('npx prettier --write src/**/*.{js,jsx,ts,tsx,json,md,less,graphql}')

    this.package.removeScript('watch')
    this.package.removeScript('test')
    this.package.removeScript('eject')
  }

  postSynthesize() {
    if (this.parent) {
      this.logger.info("Skipping 'yarn install' as it is managed by parent project")
    } else {
      super.postSynthesize()
    }
  }
}
