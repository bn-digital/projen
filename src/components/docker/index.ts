import { Component, Project } from 'projen'

import { Dockerfile } from './dockerfile'
import { DockerIgnoreFile } from './dockerignore'

export interface DockerOptions {
  readonly image?: string
  readonly path?: string
  readonly tag?: string
}

export interface DockerProjectOptions {
  readonly docker?: boolean
  readonly dockerOptions?: DockerOptions
}

export class Docker extends Component {
  readonly options: DockerOptions
  constructor(project: Project, options: DockerOptions = { path: 'Dockerfile' }) {
    super(project)
    this.options = { ...this.defaultOptions, ...options }
    project.files.push(new Dockerfile(this.project, this.options), new DockerIgnoreFile(this.project))
  }

  get defaultOptions(): DockerOptions {
    return {
      image: 'node',
    }
  }
}
