import { cdk, github, javascript } from "projen"
import { NodePackageManager } from "projen/lib/javascript"

import { ide, node } from "../../components"
import { slugify } from "../../utils"

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
    super(Template._withDefaults(options))
    if (options.ide) this.ide = new ide.Ide(this, options.ide)
    if (options.linters) this.linters = new ide.Linters(this, options.linters)
    if (this.package.packageManager == javascript.NodePackageManager.YARN2)
      this.yarn = new node.Yarn(this, { private: options.visibility === javascript.NpmAccess.RESTRICTED })
  }

  /**
   * @internal
   */
  protected static _withDefaults({
    name,
    author,
    defaultReleaseBranch,
    authorAddress,
    devDeps = [],
    ...options
  }: TemplateProjectOptions): TemplateProjectOptions {
    const openSourced = options.visibility === javascript.NpmAccess.PUBLIC
    return {
      author: author ?? "bn-digital",
      authorAddress: authorAddress ?? `https://github.com/${author}`,
      description: "Projen base project template for bn-digital",
      authorOrganization: true,
      clobber: false,
      codeCov: false,
      commitGenerated: false,
      defaultReleaseBranch: defaultReleaseBranch ?? "latest",
      dependabot: false,
      depsUpgrade: false,
      devDeps: [
        ...(!options.parent
          ? [
              "@bn-digital/prettier-config",
              "@bn-digital/eslint-config",
              "@bn-digital/typescript-config",
              "lint-staged",
              "husky",
              "ts-node",
              "typescript",
              "projen",
            ]
          : []),
        ...devDeps,
      ],
      docgen: openSourced,
      ide: { editorconfig: true, ...options.ide },
      eslint: false,
      linters: { prettier: true, eslint: true },
      github: true,
      jsiiVersion: "5.x",
      typescriptVersion: "5.x",
      githubOptions: {
        pullRequestLint: false,
        mergify: false,
        workflows: false,
        projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
          secret: "GH_TOKEN",
        }),
      },
      gitignore: [".env", ...(options.gitignore ?? [])],
      jest: false,
      licensed: openSourced,
      license: openSourced ? "MIT" : undefined,
      stale: false,
      compat: false,
      autoMerge: false,
      mutableBuild: false,
      minNodeVersion: "16.0.0",
      name,
      npmAccess: options.visibility,
      npmignoreEnabled: openSourced,
      packageName: `@${author}/${slugify(name)}`,
      prettier: false,
      peerDeps: ["projen"],
      projenrcTs: true,
      publishTasks: openSourced,
      pullRequestTemplate: false,
      releaseToNpm: openSourced,
      sampleCode: false,
      package: true,
      projenVersion: "0.71.0",
      workflowRunsOn: [!openSourced ? "self-hosted" : "ubuntu-latest"],
      ...options,
      packageManager: NodePackageManager.YARN2,
      repositoryUrl: `https://github.com/${author}/${slugify(name)}`,
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
