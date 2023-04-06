import { Component, Project } from "projen"

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
  readonly chart: string
  readonly chartVersion: string
  readonly release: string
  readonly repository: HelmChartRepositoryOptions
  readonly values: NodejsHelmChartValues
}

export interface HelmProjectOptions {
  readonly helm?: boolean
  readonly helmOptions?: HelmOptions
}

export class Helm extends Component {
  readonly options: HelmOptions

  constructor(project: Project, options?: HelmOptions) {
    super(project)
    this.options = { ...this.defaultOptions(), ...options }
  }

  defaultOptions(): HelmOptions {
    return {
      chart: "bn-digital/app",
      release: this.project.name,
      chartVersion: "2.1.0",
      repository: {
        name: "bn-digital",
        url: "https://bn-digital.github.io/helm",
      },
      values: {
        image: {
          tag: "latest",
          repository: `dcr.bndigital.dev/${this.project.name}/app`,
        },
      },
    } as const
  }

  postSynthesize() {
    super.postSynthesize()
    this.project.packageTask.exec(`helm repo add ${this.options?.repository.name} ${this.options?.repository.url}`)
  }
}
