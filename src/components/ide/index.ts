import { Component, Project } from 'projen'

import { Editorconfig } from './editorconfig'

export { Editorconfig } from './editorconfig'

export interface IdeProjectOptions {
  readonly editorconfig?: boolean
}

export class Ide extends Component {
  constructor(project: Project, options: IdeProjectOptions) {
    super(project)
    if (options.editorconfig) new Editorconfig(project)
  }
}
