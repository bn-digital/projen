import { Component, DependencyType, Project } from 'projen'

export class AntDesign extends Component {
  constructor(project: Project) {
    super(project)
    project.deps.addDependency('antd@latest-4', DependencyType.RUNTIME)
    project.deps.addDependency('@bn-digital/stylelint-config', DependencyType.DEVENV)
  }
}
