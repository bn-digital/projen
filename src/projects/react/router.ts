import { Component, DependencyType, Project } from 'projen'

export class Router extends Component {
  constructor(project: Project) {
    super(project)
    project.deps.addDependency('react-router@6.6.1', DependencyType.BUILD)
    project.deps.addDependency('react-router-dom@6.6.1', DependencyType.BUILD)
  }
}
