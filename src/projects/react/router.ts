import { Component, DependencyType, Project } from "projen"

export interface RouterOptions {
  readonly enabled?: boolean
}

export class Router extends Component {
  constructor(project: Project) {
    super(project)
    project.deps.addDependency("react-router", DependencyType.RUNTIME)
    project.deps.addDependency("react-router-dom", DependencyType.RUNTIME)
  }
}
