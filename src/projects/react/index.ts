import { Vite, ViteOptions } from "../../components/vite"
import { BrandNewProject, BrandNewProjectOptions } from "../brand-new"
import { AntDesign, AntDesignOptions, AntDesignVersion } from "./antd"
import { I18n, I18nOptions } from "./i18n"
import { Router, RouterOptions } from "./router"

export interface ReactOptions {
  readonly vite?: ViteOptions
  readonly antd?: AntDesignOptions
  readonly i18n?: I18nOptions
  readonly router?: RouterOptions
  readonly version?: string
}

export interface ReactProjectOptions extends BrandNewProjectOptions {
  readonly react?: ReactOptions
}

export const defaultReactOptions: ReactOptions = {
  version: "18.2.0",
  vite: { enabled: true },
  antd: { enabled: true, version: AntDesignVersion.V4 },
  i18n: { enabled: false },
  router: { enabled: true, version: "6.10.0" },
}

/**
 * @pjid react
 */
export class ReactProject extends BrandNewProject {
  readonly antd?: AntDesign
  readonly router?: Router
  readonly i18n?: I18n
  readonly vite?: Vite

  constructor(options: ReactProjectOptions) {
    options = BrandNewProject._withDefaults<ReactProjectOptions>({
      ...options,
      deps: (options?.deps ?? []).concat(
        `react@^${options.react?.version ?? defaultReactOptions.version}`,
        `react-dom@^${options.react?.version ?? defaultReactOptions.version}`
      ),
      devDeps: ["@types/react", "@types/react-dom", ...(options?.devDeps ?? [])],
      react: {
        ...defaultReactOptions,
        ...options.react,
      },
    })
    super(options)
    if (options?.react?.antd?.enabled) this.antd = new AntDesign(this, options.react.antd)
    if (options?.react?.router?.enabled) this.router = new Router(this)
    if (options?.react?.i18n?.enabled) this.i18n = new I18n(this, options.react.i18n)
    if (options?.react?.vite?.enabled) this.vite = new Vite(this)
  }

  preSynthesize() {
    this.tryFindObjectFile("package.json")?.addOverride("scripts.start", "npx vite serve")
    this.tryFindObjectFile("package.json")?.addOverride("scripts.build", "npx vite build")
    super.preSynthesize()
  }
}

export * from "./antd"
export * from "./i18n"
export * from "./router"
