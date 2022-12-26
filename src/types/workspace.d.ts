declare namespace workspace {
  type ProjectOptions = bndigital.ProjectOptions & {
    defaultReleaseBranch?: string;
  };
  class Project extends bndigital.Project {
    constructor(options: ProjectOptions);
  }
}
