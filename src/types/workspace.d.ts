import { bndigital } from "@bn-digital/projen";

export namespace workspace {
  export interface ProjectOptions extends bndigital.ProjectOptions {
    defaultReleaseBranch?: string;
  }
  export declare class Project extends bndigital.Project {
    constructor(options: workspace.ProjectOptions);
  }
}
