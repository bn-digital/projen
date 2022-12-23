import { typescript } from "projen";

export namespace vite {
  interface ProjectOptions extends typescript.TypeScriptProjectOptions {}
  class Project extends typescript.TypeScriptProject {
    constructor(options: ProjectOptions);
  }
}
