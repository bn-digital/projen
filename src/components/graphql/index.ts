import * as path from "path"
import { Component, DependencyType, Project, SampleFile } from "projen"

export interface GraphqlOptions {
  readonly codegen?: boolean
  readonly config?: boolean
}

export interface GraphqlProjectOptions {
  readonly graphql?: GraphqlOptions
}

export class Graphql extends Component {
  constructor(project: Project, options: GraphqlOptions = {}) {
    super(project)
    const mergedOptions = Graphql.withDefaults(options)
    if (mergedOptions.codegen) {
      project.deps.addDependency("@bn-digital/graphql-config", DependencyType.DEVENV)
      new SampleFile(project, "codegen.yml", {
        sourcePath: path.join(process.cwd(), "assets", "graphql", "codegen.yml"),
      })
    }
    if (mergedOptions.config) {
      new SampleFile(project, ".graphqlconfig", {
        sourcePath: path.join(process.cwd(), "assets", "graphql", ".graphqlconfig"),
      })
    }
  }

  private static withDefaults(options: GraphqlOptions): GraphqlOptions {
    return {
      codegen: false,
      config: false,
      ...options,
    }
  }
}
