import { Component, DependencyType, Project } from "projen"

export interface RouterOptions {
  readonly enabled?: boolean
  readonly version?: string
}

const defaultRouterOptions: RouterOptions = { version: "6.10.0", enabled: true }

export class Router extends Component {
  constructor(project: Project, options: RouterOptions = defaultRouterOptions) {
    super(project)
    project.deps.addDependency(
      `react-router@^${options.version ?? defaultRouterOptions.version}`,
      DependencyType.RUNTIME
    )
    project.deps.addDependency(
      `react-router-dom@^${options.version ?? defaultRouterOptions.version}`,
      DependencyType.RUNTIME
    )
  }
}
