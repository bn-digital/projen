import { readFileSync } from 'fs'
import { template } from 'lodash'
import { join } from 'path'
import { FileBase, FileBaseOptions, Project } from 'projen'

import { DockerOptions } from './index'

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
    return template(readFileSync(join(__dirname, '..', '..', '..', 'resources', 'Dockerfile.ejs'), 'utf8').toString())(
      this.options
    )
  }
}
