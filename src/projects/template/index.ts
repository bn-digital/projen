import { cdk, github, javascript } from "projen"

import { ide, node } from "../../components"

export interface TemplateProjectOptions extends cdk.JsiiProjectOptions, ide.LintersProjectOptions {
  /**
   * @default "latest"
   */
  readonly stylelint?: boolean
}

/**
 * @pjid template
 */
export class Template extends cdk.JsiiProject {
  readonly linters: ide.Linters | undefined
  readonly yarn: node.Yarn | undefined

  constructor(options: TemplateProjectOptions) {
    const { linters, ...defaultOptions } = Template._withDefaults(options)
    super(defaultOptions)
    this.linters = new ide.Linters(this, { ...linters })
    if (this.package.packageManager == javascript.NodePackageManager.YARN2) {
      this.yarn = new node.Yarn(this, { private: options.npmAccess !== javascript.NpmAccess.PUBLIC })
    }
    !this.parent && this.package.addDevDeps(...this._defaultDevDeps)
  }

  private get _defaultDevDeps() {
    return [
      "@bn-digital/typescript-config",
      "ts-node",
      "projen",
      "typescript",
      "lodash.template",
      "@types/lodash.template",
    ]
  }

  /**
   * @internal
   */
  protected static _withDefaults<T extends cdk.JsiiProjectOptions & ConstructorParameters<typeof this>[0]>({
    name,
    defaultReleaseBranch = "latest",
    author = "bn-digital",
    authorOrganization = true,
    authorAddress = `https://github.com/${author}`,
    description = `Projen base project template for ${author}`,
    repositoryUrl = `https://github.com/${author}/${name}`,
    packageName = `@${author}/${name}`,
    prettier = false,
    eslint = false,
    deps = [],
    devDeps = [],
    bundledDeps = [],
    stylelint = false,
    npmAccess = javascript.NpmAccess.PUBLIC,
    linters = {
      eslint,
      prettier,
      stylelint,
      editorconfig: true,
    },
    workflowRunsOn,
    packageManager = javascript.NodePackageManager.YARN2,
    githubOptions = {},
    ...options
  }: T): T {
    const isPublic = npmAccess === (javascript.NpmAccess.PUBLIC as const)
    return {
      author,
      authorAddress,
      description,
      authorOrganization,
      clobber: false,
      codeCov: false,
      commitGenerated: false,
      defaultReleaseBranch,
      dependabot: false,
      deps: ["comment-json", "lodash.template"].concat(...deps),
      devDeps: ["@types/lodash.template"].concat(...devDeps),
      bundledDeps: ["comment-json", "lodash.template"].concat(...bundledDeps),
      docgen: isPublic,
      github: true,
      eslint: false,
      jsiiVersion: "5.x",
      typescriptVersion: "5.x",
      githubOptions: {
        pullRequestLint: false,
        mergify: false,
        workflows: false,
        projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
          secret: "GH_TOKEN",
        }),
        ...githubOptions,
      },
      gitignore: [".env", ...(options.gitignore ?? [])],
      jest: false,
      licensed: isPublic,
      license: isPublic ? "MIT" : undefined,
      linters,
      stale: false,
      compat: false,
      autoMerge: false,
      mutableBuild: false,
      minNodeVersion: "18.0.0",
      name,
      npmAccess,
      npmignoreEnabled: isPublic,
      packageName,
      prettier: false,
      peerDeps: ["projen"],
      projenrcTs: true,
      publishTasks: isPublic,
      pullRequestTemplate: false,
      releaseToNpm: isPublic,
      sampleCode: false,
      package: true,
      projenVersion: "0.71.7",
      workflowRunsOn: workflowRunsOn ?? [isPublic ? "ubuntu-latest" : "self-hosted"],
      packageManager,
      repositoryUrl,
      ...options,
    } as T & cdk.JsiiProjectOptions
  }

  preSynthesize() {
    super.preSynthesize()
    this.tasks.tryFind("package")?.reset("npx projen package:js")
    this.tasks.removeTask("eject")
    this.tasks.removeTask("compat")
    this.tasks.removeTask("watch")
  }
}
