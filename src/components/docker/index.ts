import { join } from "path";
import { Component, Project, SampleFile } from "projen";

import { DockerIgnoreFile } from "./dockerignore";

export interface DockerOptions {
  readonly path?: string;
  readonly tag?: string;
}

export interface DockerProjectOptions {
  readonly docker?: DockerOptions;
}

export class Docker extends Component {
  static readonly FILENAME = "Dockerfile";

  constructor(project: Project, options: DockerOptions) {
    super(project);
    options = { ...defaultOptions, ...options };
    new SampleFile(project, options.path ?? defaultOptions.path, {
      sourcePath: join(__dirname, "..", "..", "..", "assets", "docker", Docker.FILENAME),
    });
    new DockerIgnoreFile(project);
  }
}

const defaultOptions: Required<DockerOptions> = { path: Docker.FILENAME, tag: "3.0.0" };
