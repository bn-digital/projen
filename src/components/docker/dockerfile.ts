import { FileBase, FileBaseOptions, Project } from 'projen'

import { DockerOptions } from './index'

const nodejsDockerfile = ({ tag, image }: DockerOptions) => `# syntax=docker/dockerfile:latest
ARG version=${tag}
FROM ${image}:$version
COPY . .
`

export interface DockerFileOptions extends FileBaseOptions {
  readonly path: string
}

export class Dockerfile extends FileBase {
  readonly options: DockerOptions

  constructor(project: Project, options: DockerOptions) {
    super(project, options?.path ?? 'Dockerfile')
    this.options = options
  }

  protected synthesizeContent(): string | undefined {
    return nodejsDockerfile({ image: this.options.image, tag: this.options.tag })
  }
}
