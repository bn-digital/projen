import { BrandNewProject, BrandNewProjectOptions } from "../brand-new"

export const defaultStrapiOptions: StrapiOptions = {
  version: "4.9.0",
  users: {
    enabled: true,
  },
  database: {
    client: "postgres",
  },
  graphql: {
    apolloServer: true,
  },
}

export interface GraphqlOptions {
  readonly apolloServer?: boolean
}

export interface DatabaseOptions {
  readonly client: string
}

export interface EmailOptions {
  readonly provider: string
}

export interface UsersOptions {
  readonly enabled: boolean
}

export interface StrapiOptions {
  readonly database?: DatabaseOptions
  readonly email?: EmailOptions
  readonly graphql?: GraphqlOptions
  readonly users?: UsersOptions
  readonly version?: string
}

export interface StrapiProjectOptions extends BrandNewProjectOptions {
  readonly strapi?: StrapiOptions
}

/**
 * @pjid strapi
 */
export class StrapiProject extends BrandNewProject {
  constructor(options: StrapiProjectOptions) {
    const strapiOptions: StrapiOptions = {
      ...defaultStrapiOptions,
      ...options.strapi,
    }

    super({
      ...options,
      deps: [
        ...(options?.deps ?? []),
        ...StrapiProject._resolveDefaultDeps().map(it => `${it}@^${strapiOptions.version}`),
        ...StrapiProject._resolveUsersDeps(strapiOptions).map(it => `${it}@^${strapiOptions.version}`),
        ...StrapiProject._resolveEmailDeps(strapiOptions.email),
        ...StrapiProject._resolveDatabaseDeps(strapiOptions.database),
      ],
      devDeps: [
        ...(options?.devDeps ?? []),
        ...StrapiProject._resolveDefaultDevDeps(),
        ...StrapiProject._resolveDatabaseDeps(),
      ],
    })
  }

  private static _resolveDefaultDeps(): string[] {
    return [
      `@strapi/strapi`,
      `@strapi/database`,
      `@strapi/plugin-graphql`,
      `@strapi/plugin-content-manager`,
      `@strapi/plugin-content-type-builder`,
    ]
  }

  private static _resolveDefaultDevDeps(): string[] {
    return [`@bn-digital/strapi-types`]
  }

  private static _resolveEmailDeps(options: StrapiOptions["email"]): string[] {
    switch (options?.provider) {
      case "sendgrid":
      case "mailgun":
      case "nodemailer":
        return [`@strapi/provider-email-${options?.provider}`, `@bn-digital/strapi-plugin-email-emitter`]
      default:
        return []
    }
  }

  private static _resolveUsersDeps(options: StrapiOptions): string[] {
    return options?.users?.enabled ? [`@strapi/plugin-users-permissions`] : []
  }

  private static _resolveDatabaseDeps(options: StrapiOptions["database"] = { client: "sqlite" }): string[] {
    switch (options?.client) {
      case "postgres":
        return ["pg"]
      case "mysql":
        return ["mysql"]
      case "sqlite":
      default:
        return ["better-sqlite3"]
    }
  }

  preSynthesize() {
    this.packageJson?.addOverride("scripts.start", "npx strapi develop")
    super.preSynthesize()
  }

  postSynthesize() {
    super.postSynthesize()
  }
}
