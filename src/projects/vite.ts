import { typescript } from "projen";

/**
 * @pjid vite
 */
export class ViteProject extends typescript.TypeScriptProject {
  constructor(options: typescript.TypeScriptProjectOptions) {
    super(options);
    this.addDevDeps("@bn-digital/vite");
  }
}
