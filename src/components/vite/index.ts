import { Component, DependencyType, Project } from "projen"
import { RemoteSourceFile } from "../../files/remote"

export interface ViteOptions {
  readonly version?: string
  readonly enabled?: boolean
}

const defaultOptions: ViteOptions = { version: "2.2.77" }

export class Vite extends Component {
  static readonly FILENAME = "vite.config.ts" as const
  readonly options: ViteOptions

  constructor(project: Project, options: ViteOptions = defaultOptions) {
    options = { ...defaultOptions, ...options }
    super(project)
    this.options = options
    this.deps.map(it => this.project.deps?.addDependency(`${it}@${this.options.version}`, DependencyType.DEVENV))
    if (!this.project.tryFindFile(Vite.FILENAME)) {
      new RemoteSourceFile(project, Vite.FILENAME, { sourcePath: `packages/website/${Vite.FILENAME}` })
    }
  }

  get deps() {
    return ["@bn-digital/vite"]
  }
}
