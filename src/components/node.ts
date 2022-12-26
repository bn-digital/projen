import { javascript } from "projen";
import { Project } from "projen/lib/project";
import { NodePackageOptions } from "projen/lib/javascript/node-package";

export class NodePackage extends javascript.NodePackage {
  constructor(project: Project, options?: NodePackageOptions) {
    super(project, options);
  }

  get installCommand(): string {
    return super.installCommand.replace("--check-files", "");
  }
}
