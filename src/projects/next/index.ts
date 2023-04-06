import { BrandNewProject, BrandNewProjectOptions } from "../brand-new"

export interface NextOptions {
  readonly version?: string
}
/**
 * @pjid next
 */
export class NextProject extends BrandNewProject {
  constructor(options: BrandNewProjectOptions) {
    super(options)
  }
}
