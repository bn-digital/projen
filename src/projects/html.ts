import { BndigitalProject } from "./bndigital";

export type HtmlProjectOptions = bndigital.ProjectOptions;
/**
 * @pjid html
 */
export class HtmlProject extends BndigitalProject {
  constructor(options: HtmlProjectOptions) {
    super(options);
  }
}
