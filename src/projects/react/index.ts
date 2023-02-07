import { Graphql } from '../../components/graphql'
import { BrandNewProject, BrandNewProjectOptions } from '../brand-new'
import { AntDesign } from './antd'
import { Router } from './router'

export interface ReactOptions {
  readonly antd?: boolean
  readonly router?: boolean
  readonly i18n?: boolean
  readonly graphql?: boolean
  readonly version?: string
}

export interface ReactProjectOptions extends BrandNewProjectOptions {
  readonly reactOptions?: ReactOptions
}

export class ReactProject extends BrandNewProject {
  readonly reactOptions?: ReactOptions

  constructor(options: ReactProjectOptions) {
    super(options)
    const mergedOptions: ReactOptions = this.withDefaults(options.reactOptions ?? {})
    this.addDevDeps('@types/react', '@types/react-dom')
    mergedOptions?.antd && new AntDesign(this)
    mergedOptions?.router && new Router(this)
    mergedOptions?.graphql && new Graphql(this, { codegen: true })
  }

  private readonly withDefaults = (options: ReactOptions) => {
    return {
      ...BrandNewProject.withDefaults({}),
      antd: true,
      router: true,
      version: '18.2.0',
      ...options,
    }
  }
}
