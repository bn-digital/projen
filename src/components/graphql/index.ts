import { Component, DependencyType, JsonFile, Project, YamlFile } from "projen"

export enum GraphqlDeps {
  APOLLO_CLIENT = "apollo-client",
}

export interface GraphqlOptions {
  readonly codegen?: boolean
  readonly config?: boolean
  readonly type?: GraphqlDeps
}

export interface GraphqlProjectOptions {
  readonly graphql?: GraphqlOptions
}

export class Graphql extends Component {
  constructor(project: Project, options: GraphqlOptions = {}) {
    super(project)
    options = Graphql.withDefaults(options)
    if (options.codegen) {
      project.root.deps.addDependency("@bn-digital/graphql-config", DependencyType.DEVENV)
      new YamlFile(project, "codegen.yml", {
        obj: {
          schema: ["http://localhost:8080/graphql"],
          documents: ["src/graphql/*/*.graphql"],
          config: {
            namingConvention: {
              transformUnderscore: true,
            },
            maybeValue: "T | null | undefined",
            inputMaybeValue: "T | null | undefined",
            experimentalFragmentVariables: true,
            scalars: {
              Date: "string",
              DateTime: "Date",
              I18NLocaleCode: "string",
              JSON: "object|any[]",
              Long: "number",
              Time: "string",
              Upload: "unknown",
            },
          },
          generates: {
            "src/graphql/index.tsx": {
              plugins: [
                {
                  "fragment-matcher": {
                    useExplicitTyping: true,
                  },
                },
                {
                  "typescript-react-apollo": {
                    addDocBlocks: false,
                    withComponent: true,
                    withHooks: true,
                    withMutationOptionsType: false,
                  },
                },
              ],
            },
            "src/types/graphql.d.ts": {
              config: {
                noExport: true,
                skipTypename: true,
                enumsAsTypes: true,
              },
              plugins: ["typescript", "typescript-operations"],
            },
          },
        },
      })
    }
    if (options.config) {
      new JsonFile(project, ".graphqlconfig", {
        obj: {
          schemaPath: `../cms/src/graphql/schema.graphql`,
          documents: ["**/src/graphql/fragments/*.graphql"],
          include: ["**/src/graphql/queries/*.graphql", "**/src/graphql/mutations/*.graphql"],
          extensions: {
            endpoints: {
              development: {
                url: "http://127.0.0.1:8080/graphql",
              },
            },
          },
        },
      })
    }
    switch (options.type) {
      case GraphqlDeps.APOLLO_CLIENT:
        this.project.deps.addDependency("@apollo/client", DependencyType.RUNTIME)
        break
      default:
        break
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
