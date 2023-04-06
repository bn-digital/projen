import { Component, DependencyType, Project } from "projen"

export interface AntDesignOptions {
  readonly enabled?: boolean
  readonly version?: AntDesignVersion
}

export enum AntDesignVersion {
  V4 = "latest-4",
  V5 = "^5.3.3",
}

export class AntDesign extends Component {
  constructor(project: Project, options: AntDesignOptions = { version: AntDesignVersion.V4 }) {
    super(project)
    project.deps.addDependency(`antd@${options.version}`, DependencyType.RUNTIME)
  }
}
