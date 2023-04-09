import { Component, DependencyType, Project } from "projen"

export interface StorybookOptions {
  readonly version?: string
}

const defaultOptions: StorybookOptions = { version: "7.0.2" }

export class Storybook extends Component {
  readonly options: StorybookOptions

  constructor(project: Project, options: StorybookOptions = defaultOptions) {
    super(project)
    this.options = { ...defaultOptions, ...options }

    this.deps.map(it => this.project.deps?.addDependency(`${it}@${options.version}`, DependencyType.DEVENV))
  }

  get deps() {
    return [
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-links",
      "@storybook/blocks",
      "@storybook/react",
      "@storybook/react-vite",
    ]
  }
}