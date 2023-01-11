import { NpmAccess } from 'projen/lib/javascript'

import { BrandNewProject, BrandNewProjectOptions } from '../brand-new'
import { ReactOptions, ReactProject } from '../react'
import { StrapiOptions, StrapiProject } from '../strapi'

export interface FullStackProjectOptions extends BrandNewProjectOptions {
  readonly dockerCompose?: boolean
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
  readonly packagesDir: string

  constructor(options: FullStackProjectOptions) {
    super({
      repository: `https://bn-digital/bn-digital/${options.name}`,
      docker: true,
      dockerOptions: { image: 'dcr.bndigital.dev/library/nodejs', tag: '2.12.0' },
      packageName: options.name,
      sampleCode: false,
      eslint: false,
      prettier: false,
      jest: false,
      ...options,
    })
    const { name, ...commonOptions } = options
    this.packagesDir = options.packagesDir ?? 'packages'
    if (options.react !== false) {
      new ReactProject({
        ...commonOptions,
        parent: this,
        outdir: `${this.packagesDir}/website`,
        editorconfig: false,
        name: 'website',
        npmAccess: NpmAccess.RESTRICTED,
        packageName: `@${name}/website`,
        reactOptions: { ...options.reactOptions, version: '18.2.0' },
      })
    }
    if (options.strapi !== false) {
      new StrapiProject({
        ...commonOptions,
        parent: this,
        outdir: `${this.packagesDir}/cms`,
        name: 'cms',
        npmAccess: NpmAccess.RESTRICTED,
        packageName: `@${options.name}/cms`,
        strapiOptions: options.strapiOptions ?? {},
        editorconfig: false,
      })
    }
  }

  synth() {
    this.tryFindObjectFile('pnpm-workspace.yaml')?.addOverride('packages', [`${this.packagesDir}/*`])
    super.synth()
  }
}
