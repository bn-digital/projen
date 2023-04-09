import { cdk, github, javascript } from "projen"
import { NodePackageManager } from "projen/lib/javascript"

import { ide, node } from "../../components"

export interface TemplateProjectOptions
  extends cdk.JsiiProjectOptions,
    ide.IdeProjectOptions,
    ide.LintersProjectOptions {
  readonly visibility?: javascript.NpmAccess
}

/**
 * @pjid template
 */
export class Template extends cdk.JsiiProject {
  readonly ide: ide.Ide | undefined
  readonly linters: ide.Linters | undefined
  readonly yarn: node.Yarn | undefined

  constructor(options: TemplateProjectOptions) {
    options = Template._withDefaults(options)
    super(options)
    if (options.ide) this.ide = new ide.Ide(this, options.ide)
    this.linters = new ide.Linters(this, { ...options.linters })
    if (this.package.packageManager == javascript.NodePackageManager.YARN2) {
      this.yarn = new node.Yarn(this, { private: options.visibility === javascript.NpmAccess.RESTRICTED })
    }
    !this.parent && this.package.addDevDeps("@bn-digital/typescript-config", "ts-node", "projen", "typescript")
  }

  /**
   * @internal
   */
  protected static _withDefaults({
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
    linters = { eslint, prettier },
    workflowRunsOn,
    packageManager = NodePackageManager.YARN2,
    githubOptions = {},
    ...options
  }: TemplateProjectOptions): TemplateProjectOptions {
    const openSourced = options.visibility === javascript.NpmAccess.PUBLIC
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
      bundledDeps: ["comment-json"],
      docgen: openSourced,
      ide: { editorconfig: true, ...options.ide },
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
      licensed: openSourced,
      license: openSourced ? "MIT" : undefined,
      linters: { eslint, prettier, ...linters },
      stale: false,
      compat: false,
      autoMerge: false,
      mutableBuild: false,
      minNodeVersion: "16.0.0",
      name,
      npmAccess: options.visibility,
      npmignoreEnabled: openSourced,
      packageName,
      prettier: false,
      peerDeps: ["projen"],
      projenrcTs: true,
      publishTasks: openSourced,
      pullRequestTemplate: false,
      releaseToNpm: openSourced,
      sampleCode: false,
      package: true,
      projenVersion: "0.71.6",
      workflowRunsOn: workflowRunsOn ?? [!openSourced ? "self-hosted" : "ubuntu-latest"],
      packageManager,
      repositoryUrl,
      ...options,
    }
  }

  preSynthesize() {
    super.preSynthesize()
    this.addPackageIgnore("!/assets/**")
    this.packageTask.reset("npx projen package-all")
    this.tasks.removeTask("eject")
    this.tasks.removeTask("compat")
    this.tasks.removeTask("watch")
  }
}
