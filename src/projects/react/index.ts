import { BrandNewProject, BrandNewProjectOptions } from "../brand-new"
import { AntDesign, AntDesignOptions, AntDesignVersion } from "./antd"
import { I18n, I18nOptions } from "./i18n"
import { Router, RouterOptions } from "./router"

export interface ReactOptions {
  readonly antd?: AntDesignOptions
  readonly i18n?: I18nOptions
  readonly router?: RouterOptions
  readonly version?: string
}

export interface ReactProjectOptions extends BrandNewProjectOptions {
  readonly react?: ReactOptions
}

const defaultOptions: ReactOptions = {
  version: "18.2.0",
  antd: { enabled: true, version: AntDesignVersion.V4 },
  i18n: { enabled: false },
  router: { enabled: true },
}

/**
 * @pjid react
 */
export class ReactProject extends BrandNewProject {
  readonly antd?: AntDesign
  readonly router?: Router
  readonly i18n?: I18n

  constructor(options: ReactProjectOptions) {
    const mergedOptions = BrandNewProject._withDefaults<ReactProjectOptions>({
      ...options,
      deps: (options?.deps ?? []).concat("react", "react-dom"),
      devDeps: (options?.devDeps ?? []).concat("@types/react", "@types/react-dom", "@bn-digital/vite"),
      react: {
        ...defaultOptions,
        ...options.react,
      },
    })
    super(mergedOptions)
    if (mergedOptions?.react?.antd?.enabled) this.antd = new AntDesign(this, mergedOptions.react.antd)
    if (mergedOptions?.react?.router?.enabled) this.router = new Router(this)
    if (mergedOptions?.react?.i18n?.enabled) this.i18n = new I18n(this, mergedOptions.react?.i18n)
  }

  preSynthesize() {
    this.tryFindObjectFile("package.json")?.addOverride("scripts", {
      start: "yarn vite serve",
      build: "yarn vite build",
    })
    super.preSynthesize()
  }
}

export * from "./antd"
export * from "./i18n"
export * from "./router"
