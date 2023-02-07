import * as path from 'node:path'

import { javascript, SampleFile } from 'projen'

import { BrandNewProject, BrandNewProjectOptions } from '../brand-new'
import { NextOptions, NextProject } from '../next'
import { ReactOptions, ReactProject } from '../react'
import { StrapiOptions, StrapiProject } from '../strapi'

export interface FullStackProjectOptions extends BrandNewProjectOptions {
  readonly dockerCompose?: boolean
  readonly next?: boolean
  readonly nextOptions?: NextOptions
  readonly packagesDir?: string
  readonly react?: boolean
  readonly reactOptions?: ReactOptions
  readonly strapi?: boolean
  readonly strapiOptions?: StrapiOptions
}

/**
 * @pjid full-stack
 */
export class FullStackProject extends BrandNewProject {
  constructor(options: FullStackProjectOptions) {
    super({
      repository: `https://bn-digital/bn-digital/${options.name}`,
      docker: true,
      packageName: options.name,
      sampleCode: false,
      eslint: false,
      prettier: false,
      jest: false,
      graphql: true,
      graphqlOptions: { config: true },
      ...options,
    })
    if (this.package.packageManager === javascript.NodePackageManager.PNPM) {
      new SampleFile(this, 'pnpm-workspace.yaml', {
        sourcePath: path.join(__dirname, '..', '..', '..', 'assets', 'pnpm-workspace.yaml'),
      }).synthesize()
    }
    const { name, ...commonOptions } = options
    if (options.react !== false) {
      new ReactProject({
        ...commonOptions,
        parent: this,
        outdir: `packages/website`,
        editorconfig: false,
        package: false,
        name: 'website',
        npmAccess: javascript.NpmAccess.RESTRICTED,
        packageName: `@${name}/website`,
        reactOptions: { ...options.reactOptions, version: '18.2.0' },
        graphql: true,
        graphqlOptions: { codegen: true },
      })
    } else if (options.next !== false) {
      new NextProject({
        ...commonOptions,
        parent: this,
        package: false,
        outdir: `packages/website`,
        editorconfig: false,
        name: 'website',
        npmAccess: javascript.NpmAccess.RESTRICTED,
        packageName: `@${name}/website`,
      })
    }
    if (options.strapi !== false) {
      new StrapiProject({
        ...commonOptions,
        parent: this,
        outdir: `packages/cms`,
        package: false,
        name: 'cms',
        npmAccess: javascript.NpmAccess.RESTRICTED,
        packageName: `@${options.name}/cms`,
        strapiOptions: options.strapiOptions ?? {},
        editorconfig: false,
      })
    }
  }
}
