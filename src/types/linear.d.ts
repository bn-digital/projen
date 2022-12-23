import { Component as ProjectComponent } from "projen";
import { bndigital } from "./project";

export namespace linear {
  interface ComponentOptions {
    slug: string;
  }

  class Component extends ProjectComponent {
    readonly slug: string;

    constructor(project: bndigital.Project) {
      this.slug = project.linear.slug;
    }
  }
}
