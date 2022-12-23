import {
  Component,
  FileBase,
  FileBaseOptions,
  IgnoreFile,
  Project,
} from "projen";

class Dockerfile extends FileBase {
  constructor(
    project: Project,
    filePath = "Dockerfile",
    options?: FileBaseOptions
  ) {
    super(project, filePath, { ...options, editGitignore: false });
  }

  protected synthesizeContent(): string | undefined {
    return "FROM node:14.17.0-alpine3.13";
  }
}

class DockerIgnoreFile extends IgnoreFile {
  constructor(project: Project) {
    super(project, ".dockerignore");

    this.addPatterns(".git", "Dockerfile", ".dockerignore");
  }
}

export class DockerComponent extends Component {
  constructor(project: Project) {
    super(project);
    project.files.push(
      new Dockerfile(this.project),
      new DockerIgnoreFile(this.project)
    );
  }
}
