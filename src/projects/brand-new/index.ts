import { DependencyType, javascript, ObjectFile, Project, ProjectOptions, Task } from "projen"

import { docker, graphql, helm, ide, node } from "../../components"
import { PackageJsonFile } from "../../components/node"

export interface BrandNewProjectOptions
  extends ProjectOptions,
    docker.DockerProjectOptions,
    ide.LintersProjectOptions,
    ide.IdeProjectOptions,
    helm.HelmProjectOptions {
  readonly graphql?: graphql.GraphqlOptions
  readonly deps?: string[]
  readonly devDeps?: string[]
  readonly packageManager?: javascript.NodePackageManager
  readonly packageName?: string
}

/**
 * @pjid brand-new
 */
export class BrandNewProject extends Project {
  /**
   * @default {}
   */
  readonly docker: docker.Docker | undefined
  readonly ide: ide.Ide | undefined
  readonly helm: helm.Helm | undefined
  readonly graphql: graphql.Graphql | undefined
  readonly linters: ide.Linters | undefined
  /**
   * @default "yarn2"
   */
  readonly packageManager?: javascript.NodePackageManager
  readonly yarn: node.Yarn | undefined

  constructor(options: BrandNewProjectOptions) {
    options = BrandNewProject._withDefaults(options)
    super(options)

    this.yarn = new node.Yarn(this, { private: true })
    this.packageJson?.addOverride("name", this.packageName)

    options.deps?.forEach(it => this.deps.addDependency(it, DependencyType.RUNTIME))
    options.devDeps?.forEach(it => this.deps.addDependency(it, DependencyType.DEVENV))
    if (options.linters) this.linters = new ide.Linters(this, options.linters)
    if (options.docker) this.docker = new docker.Docker(this)
    if (options.ide) this.ide = new ide.Ide(this, options.ide)
    if (options.helm) this.helm = new helm.Helm(this, options.helm)
    if (options.graphql) this.graphql = new graphql.Graphql(this, options.graphql)

    this.defaultTask?.prependExec("npx projen install")
  }

  get packageName(): string {
    return this.parent ? `@${this.parent.name}/${this.name}` : this.name
  }

  get packageJson(): ObjectFile | undefined {
    return this.tryFindObjectFile(PackageJsonFile.FILENAME)
  }

  get installTask(): Task | undefined {
    return this.tasks.tryFind("install")
  }

  /**
   * @internal
   */
  protected static _withDefaults<T extends BrandNewProjectOptions>(options: T): T {
    const { name, packageName = name, parent } = options
    return {
      ...options,
      name,
      commitGenerated: options.commitGenerated ?? false,
      projenrcJson: true,
      packageManager: options.packageManager ?? javascript.NodePackageManager.YARN2,
      packageName:
        packageName ??
        (parent
          ? [`@${parent?.name}`, name].map(it => BrandNewProject._slugify(it)).join("/")
          : BrandNewProject._slugify(name)),
    }
  }

  private static _slugify(string: string): string {
    return string
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase()
  }

  /**
   * @inheritDoc
   */
  preSynthesize() {
    super.preSynthesize()
    this.packageJson?.addOverride("dependencies", this._dependencyMap(DependencyType.RUNTIME, DependencyType.BUILD))
    this.packageJson?.addOverride("devDependencies", this._dependencyMap(DependencyType.DEVENV))
    this.packageJson?.addOverride("peerDependencies", this._dependencyMap(DependencyType.PEER))
    this.packageJson?.addOverride("bundledDependencies", this._dependencyMap(DependencyType.BUNDLED))
  }

  /**
   * @inheritDoc
   */
  synth() {
    super.synth()
  }

  /**
   * @param {DependencyType[]} deps
   * @internal
   */
  private _dependencyMap(...deps: DependencyType[]): Record<string, string> {
    return this.deps.all
      .filter(it => deps.some(that => that === it.type))
      .map(value => ({ [value.name]: value.version ?? "*" }))
      .reduce((each, all) => ({ ...all, ...each }), {})
  }
}
