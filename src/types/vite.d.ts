import { typescript } from "projen";

declare namespace vite {
  interface ProjectOptions extends typescript.TypeScriptProjectOptions {}
  class Project extends typescript.TypeScriptProject {
    constructor(options: ProjectOptions);
  }
}
