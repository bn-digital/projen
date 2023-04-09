import { Component, Project } from "projen"
import { RemoteSourceFile } from "../../files/remote"

export interface HelmChartRepositoryOptions {
  readonly name: string
  readonly url: string
}

export interface ImageOptions {
  readonly repository: string
  readonly tag: string
}

export interface NodejsHelmChartValues {
  readonly image: ImageOptions
}

export interface HelmOptions {
  readonly helmfile?: boolean
  readonly chart?: boolean
}

export interface HelmProjectOptions {
  readonly helm?: HelmOptions
}

export class Helm extends Component {
  static readonly HELMFILE_FILENAME = "helmfile.yaml"
  readonly options: HelmOptions

  constructor(project: Project, options: HelmOptions = {}) {
    super(project)
    this.options = options
    if (this.options.helmfile) {
      if (!this.project.tryFindFile(Helm.HELMFILE_FILENAME)) {
        new RemoteSourceFile(project, Helm.HELMFILE_FILENAME, { sourcePath: Helm.HELMFILE_FILENAME })
      }
      this.project.tasks.tryFind("install")?.steps.push({ say: "Updating Helm repositories", exec: `helmfile deps` })
    }
  }
}
