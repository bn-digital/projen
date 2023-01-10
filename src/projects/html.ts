import { BrandNewProject, BrandNewProjectOptions } from './brand-new'

export interface HtmlOptions {
  readonly stylesPreprocessor?: string
}

export interface HtmlProjectOptions extends BrandNewProjectOptions {
  readonly htmlOptions: HtmlOptions
}
/**
 * @pjid html
 */
export class HtmlProject extends BrandNewProject {
  constructor(options: HtmlProjectOptions) {
    super(options)
  }
}
