namespace bndigital {
  import {
    TypeScriptProject,
    TypeScriptProjectOptions,
  } from "projen/lib/typescript";
  type ProjectOptions = Partial<TypeScriptProjectOptions> & {
    linear?: linear.ComponentOptions;
    defaultReleaseBranch?: string;
    name?: string;
  };

  export const defaults: ProjectOptions = {
    defaultReleaseBranch: "latest",
  };

  declare class Project extends TypeScriptProject {
    constructor(options: ProjectOptions);
    linear: linear.ComponentOptions;
  }
}
