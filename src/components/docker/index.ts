import { join } from 'path'
import { Component, Project, SampleFile } from 'projen'

import { FullStackProject, ReactProject, StrapiProject } from '../../projects'
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
  constructor(project: Project) {
    super(project)
    const dockerfile = 'Dockerfile'
    if (project instanceof FullStackProject) dockerfile.concat('.full-stack')
    if (project instanceof StrapiProject) dockerfile.concat('.cms')
    if (project instanceof ReactProject) dockerfile.concat('.website')
    new SampleFile(project, 'Dockerfile', {
      sourcePath: join(__dirname, '..', '..', '..', 'assets', 'docker', dockerfile),
    })
    new DockerIgnoreFile(project)
  }
}
