import { linear } from "./linear";
import { typescript } from "projen";

export namespace bndigital {
  declare interface ProjectOptions extends typescript.TypeScriptProjectOptions {
    linear?: linear.ComponentOptions;
    defaultReleaseBranch?: string;
    name?: string;
  }

  const defaults: ProjectOptions = {
    defaultReleaseBranch: "latest",
  };

  class Project extends typescript.TypeScriptProject {
    linear: linear.ComponentOptions;
    constructor(options: bndigital.ProjectOptions) {
      super(options);
      if (options.linear) this._addComponent(new linear.Component(this));
      this.package.addField("private", true);
    }
  }
}
