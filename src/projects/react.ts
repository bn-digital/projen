import { BrandNewProject, BrandNewProjectOptions } from './brand-new'

export interface ReactOptions {
  readonly version?: string
}
export interface ReactProjectOptions extends BrandNewProjectOptions {
  readonly reactOptions?: ReactOptions
}
/**
 * @pjid react
 */
export class ReactProject extends BrandNewProject {
  readonly reactOptions?: ReactOptions
  constructor(options: ReactProjectOptions) {
    super(options)
    this.reactOptions = options.reactOptions ?? {}
  }
}
