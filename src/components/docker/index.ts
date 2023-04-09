import { Component, IgnoreFile, Project, SampleFile } from "projen"
import { RemoteSourceFile } from "../../files/remote"

import { DockerIgnoreFile } from "./dockerignore"

export interface DockerOptions {
  readonly path?: string
  readonly tag?: string
}

export interface DockerProjectOptions {
  readonly docker?: DockerOptions
}

export class Docker extends Component {
  static readonly DOCKERFILE_FILENAME = "Dockerfile"
  static readonly SKAFFOLD_FILENAME = "skaffold.yaml"
  readonly ignoreFile: IgnoreFile
  readonly dockerFile: SampleFile
  readonly skaffoldFile: SampleFile

  constructor(project: Project) {
    super(project)
    this.dockerFile = new RemoteSourceFile(project, Docker.DOCKERFILE_FILENAME, {
      sourcePath: Docker.DOCKERFILE_FILENAME,
    })
    this.skaffoldFile = new RemoteSourceFile(project, Docker.SKAFFOLD_FILENAME, {
      sourcePath: Docker.SKAFFOLD_FILENAME,
    })
    this.ignoreFile = new DockerIgnoreFile(project)
  }
}
