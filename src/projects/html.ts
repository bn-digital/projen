import { DockerComponent } from "../components/docker";
import { bndigital } from "../types";

export interface HtmlProjectOptions extends bndigital.Project {}

/**
 * @pjid html
 */
export class HtmlProject extends bndigital.Project {
  constructor(options: bndigital.ProjectOptions) {
    super(options);
    this._addComponent(new DockerComponent(this));
  }
}
