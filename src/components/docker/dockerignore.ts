import { IgnoreFile, Project } from 'projen'

import { DockerFileOptions } from './dockerfile'

export class DockerIgnoreFile extends IgnoreFile {
  constructor(
    project: Project,
    options: DockerFileOptions = {
      path: '.dockerignore',
      editGitignore: false,
      readonly: true,
    }
  ) {
    const { path } = options
    super(project, path)
    this.addPatterns('.git', 'Dockerfile', '.dockerignore')
  }
}
