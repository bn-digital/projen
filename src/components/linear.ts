import { bndigital, linear } from "@bn-digital/projen";

export class LinearComponent extends linear.Component {
  constructor(project: bndigital.Project) {
    super(project);
    project.package.addField(
      "bugs",
      `https://linear.app/bndigital/project/${this.slug}`
    );
  }
}
