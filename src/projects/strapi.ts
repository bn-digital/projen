import { javascript, Project } from 'projen'
import { NodeProject } from 'projen/lib/javascript'

import { BrandNewProject, BrandNewProjectOptions } from './brand-new'

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

/**
 * @jsii.implements IStrapiProject
 */
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

export class Strapi extends javascript.NodePackage {
  readonly options: StrapiOptions

  constructor(project: Project, options: StrapiOptions) {
    super(project)
    this.options = options
  }

  preSynthesize() {
    super.preSynthesize()
    if (this.project instanceof NodeProject) {
      this.project.addDeps(
        `@strapi/strapi@${this.options.version}`,
        `@strapi/database@${this.options.version}`,
        `@strapi/plugin-graphql@${this.options.version}`,
        `@strapi/plugin-content-manager@${this.options.version}`,
        `@strapi/plugin-content-type-builder@${this.options.version}`,
        `@strapi/typescript-utils@${this.options.version}`,
        `strapi-plugin-config-sync`,
        ...this.resolveEmailDeps(),
        ...this.resolveDatabaseDeps(),
        ...this.resolveUsersDeps()
      )
      this.project.addDevDeps(`typescript`, `@types/node`, `@bn-digital/strapi-types`)
      this.project.package.setScript('build', 'pnpm exec strapi build')
      this.project.package.setScript('start', 'pnpm exec strapi start')
      this.project.package.setScript('dev', 'pnpm exec strapi develop')
    }

    this.project.gitignore.addPatterns('/.tmp', '/.cache', '/.strapi-updater.json', '/build', '/dist')
  }

  private resolveEmailDeps(): string[] {
    switch (this.options.email?.provider) {
      case 'sendgrid':
      case 'mailgun':
      case 'nodemailer':
        return [
          `@strapi/provider-email-${this.options.email?.provider}@${this.options.version}`,
          `@bn-digital/strapi-plugin-email-emitter`,
        ]
      default:
        return []
    }
  }

  private resolveUsersDeps(): string[] {
    return this.options.users?.enabled ? [`@strapi/plugin-users-permissions@${this.options.version}`] : []
  }

  private resolveDatabaseDeps(): string[] {
    switch (this.options.database?.client) {
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
}

/**
 * @pjid strapi
 */
export class StrapiProject extends BrandNewProject {
  constructor(options: StrapiProjectOptions) {
    super(options)
    new Strapi(this, {
      ...defaultOptions,
      ...options.strapiOptions,
    })
  }
}
