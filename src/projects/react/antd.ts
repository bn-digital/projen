import { Component, DependencyType, Project } from 'projen'

export enum AntDesignVersion {
  V4 = 'latest-4',
  V5 = '^5.2.0',
}

export interface AntDesignOptions {
  readonly version?: AntDesignVersion
}

export class AntDesign extends Component {
  constructor(project: Project, options: AntDesignOptions = { version: AntDesignVersion.V4 }) {
    super(project)
    project.deps.addDependency(`antd@${options.version}`, DependencyType.RUNTIME)
  }
}
