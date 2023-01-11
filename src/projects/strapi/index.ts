import { javascript, Project } from 'projen'

import { BrandNewProject, BrandNewProjectOptions } from '../brand-new'

const defaultOptions: StrapiOptions = {
  version: '4.5.4',
  users: {
    enabled: true,
  },
  database: {
    client: 'sqlite',
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
  readonly strapi?: boolean
  readonly strapiOptions?: StrapiOptions
}

export class Index extends javascript.NodePackage {
  readonly options: StrapiOptions

  constructor(project: Project, options: StrapiOptions) {
    super(project)
    this.options = options
  }

  preSynthesize() {
    super.preSynthesize()
  }
}

/**
 * @pjid strapi
 */
export class StrapiProject extends BrandNewProject {
  constructor(options: StrapiProjectOptions) {
    const strapiOptions: StrapiOptions = {
      ...defaultOptions,
      ...options.strapiOptions,
      version: options.strapiOptions?.version ?? defaultOptions.version,
    }

    super({
      ...options,
      deps: [
        ...(options?.deps ?? []),
        ...StrapiProject._resolveDefaultDeps(strapiOptions),
        ...StrapiProject._resolveEmailDeps(strapiOptions),
        ...StrapiProject._resolveDatabaseDeps(strapiOptions),
        ...StrapiProject._resolveUsersDeps(strapiOptions),
      ],
      devDeps: [...(options?.devDeps ?? []), ...StrapiProject._resolveDefaultDevDeps()],
      gitignore: ['.tmp', '.cache', '.strapi-updater.json', 'build', 'dist'],
    })
  }

  private static _resolveDefaultDeps(options: StrapiOptions): string[] {
    return [
      `@strapi/strapi@${options?.version}`,
      `@strapi/database@${options?.version}`,
      `@strapi/plugin-graphql@${options?.version}`,
      `@strapi/plugin-content-manager@${options?.version}`,
      `@strapi/plugin-content-type-builder@${options?.version}`,
      `@strapi/typescript-utils@${options?.version}`,
      `strapi-plugin-config-sync`,
    ]
  }

  private static _resolveDefaultDevDeps(): string[] {
    return [`@bn-digital/strapi-types`]
  }

  private static _resolveEmailDeps(options: StrapiOptions): string[] {
    switch (options?.email?.provider) {
      case 'sendgrid':
      case 'mailgun':
      case 'nodemailer':
        return [
          `@strapi/provider-email-${options.email?.provider}@${options?.version}`,
          `@bn-digital/strapi-plugin-email-emitter`,
        ]
      default:
        return []
    }
  }

  private static _resolveUsersDeps(options: StrapiOptions): string[] {
    return options?.users?.enabled ? [`@strapi/plugin-users-permissions@${options?.version}`] : []
  }

  private static _resolveDatabaseDeps(options: StrapiOptions): string[] {
    switch (options?.database?.client) {
      case 'sqlite':
        return ['better-sqlite3']
      case 'postgres':
        return ['pg']
      case 'mysql':
        return ['mysql']
      default:
        return []
    }
  }

  preSynthesize() {
    super.preSynthesize()
  }

  postSynthesize() {
    super.postSynthesize()
    this.package.setScript('build', 'strapi build')
    this.package.setScript('start', 'strapi start')
    this.package.setScript('dev', 'strapi develop')
  }
}
