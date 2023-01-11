import { BrandNewProject, BrandNewProjectOptions } from '../brand-new'
import { AntDesign } from './antd'
import { Router } from './router'

export interface ReactOptions {
  readonly antd?: boolean
  readonly router?: boolean
  readonly version?: string
}
export interface ReactProjectOptions extends BrandNewProjectOptions {
  readonly reactOptions?: ReactOptions
}

const defaultOptions: Readonly<ReactOptions> = {
  antd: true,
  router: true,
  version: '18.2.0',
} as const
/**
 * @pjid react
 */
export class ReactProject extends BrandNewProject {
  readonly reactOptions?: ReactOptions
  constructor(options: ReactProjectOptions) {
    const reactOptions: ReactOptions = {
      ...defaultOptions,
      ...options.reactOptions,
    }
    super(options)
    this.addDevDeps('@types/react@18', '@types/react-dom@18')
    reactOptions?.antd && new AntDesign(this)
    reactOptions?.router && new Router(this)
  }
}
