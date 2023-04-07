import { execSync } from "child_process";
import { Component, javascript, JsonFile, ObjectFile, Project, Task, YamlFile } from "projen";

export interface YarnOptions {
  readonly private?: boolean;
  readonly version?: string;
}

export interface PackageJsonOptions {
  readonly name: string;
  readonly version?: string;
  readonly private?: string;
}

const defaultOptions: YarnOptions = {
  version: "3.5.0",
  private: true,
};

export class PackageJsonFile extends JsonFile {
  static readonly FILENAME = "package.json" as const;

  constructor(project: Project, options: PackageJsonOptions = { name: project.name }) {
    super(project, PackageJsonFile.FILENAME, {
      readonly: false,
      omitEmpty: true,
      committed: true,
      obj: {
        "//": "This file is automatically generated by projen. DO NOT EDIT DIRECTLY",
        name: options.name,
        version: options.version ?? "0.0.0",
        scripts: {
          projen: "projen",
        },
      },
    });
  }
}

export class YarnConfigFile extends YamlFile {
  static readonly FILENAME = ".yarnrc.yml" as const;

  constructor(project: Project, options?: YarnOptions) {
    super(project, YarnConfigFile.FILENAME, {
      readonly: false,
      omitEmpty: true,
      committed: true,
      obj: {
        enableGlobalCache: true,
        enableTelemetry: false,
        enableTimers: true,
        nodeLinker: "node-modules",
        npmPublishAccess: options?.private ? javascript.NpmAccess.RESTRICTED : javascript.NpmAccess.PUBLIC,
        preferAggregateCacheInfo: true,
        yarnPath: `.yarn/releases/yarn-${options?.version ?? defaultOptions.version}.cjs`,
        logFilters: [
          { code: "YN0002", level: "discard" },
          { code: "YN0032", level: "discard" },
          { code: "YN0060", level: "discard" },
          { code: "YN0061", level: "discard" },
          { code: "YN0062", level: "discard" },
        ],
      },
    });
  }
}

export class Yarn extends Component {
  readonly options: YarnOptions;
  readonly packageJson: ObjectFile;
  readonly defaultTask: Task;

  constructor(project: Project, options?: YarnOptions) {
    super(project);
    this.options = { ...defaultOptions, ...options };
    this.defaultTask =
      this.project.tasks.tryFind("yarn") ??
      this.project.addTask("yarn", {
        steps: [
          { say: "Downloading dependencies from NPM registry", name: "install", exec: "yarn" },
          { say: "Optimizing dependencies duplicates", name: "optimize", exec: "yarn dedupe" },
        ],
      });
    this.project.tasks.removeTask("install");
    this.project.addTask("install", {
      description: "Install dependencies",
      exec: "npx projen yarn",
    });

    if (!this.project.parent && !this.project.tryFindObjectFile(YarnConfigFile.FILENAME)) {
      this.project.gitignore.addPatterns(".yarn/*", "!.yarn/releases", "!.yarn/plugins", "!.yarn/sdks", "!.yarn/versions", ".pnp.*");
      execSync(`yarn set version ${this.options.version} --only-if-needed`);
    }
    this.packageJson = this.project.tryFindObjectFile("package.json") ?? new PackageJsonFile(project);
  }

  get configFile(): ObjectFile {
    return this.project.tryFindObjectFile(".yarnrc.yml") ?? new YarnConfigFile(this.project, this.options);
  }

  override preSynthesize() {
    if (!this.project.parent) {
      this.packageJson.addOverride("packageManager", `yarn@${this?.options?.version}`);
      this.packageJson.addOverride("workspaces", ["packages/*"]);
    }
    this.packageJson.addOverride("private", this.options?.private);
    this.packageJson.addOverride("license", this.options.private ? "UNLICENSED" : "MIT");

    super.preSynthesize();
  }

  override postSynthesize() {
    super.postSynthesize();
    this.configFile.changed && execSync("yarn");
  }
}
