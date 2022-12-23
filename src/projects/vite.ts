import { vite } from "@bn-digital/projen";

/**
 * @pjid vite
 */
export class ViteProject extends vite.Project {
  constructor(options: vite.ProjectOptions) {
    options.devDeps?.push("@bn-digital/vite");
    super(options);
  }
}
