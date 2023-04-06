import { Component, javascript, Project, YamlFile } from "projen"export interface YarnOptions {  readonly private?: boolean  readonly version?: string}const defaultOptions: YarnOptions = {  version: "3.5.0",  private: true,}class YarnConfigFile extends YamlFile {  constructor(project: Project, options?: YarnOptions) {    super(project, ".yarnrc.yml", {      readonly: false,      omitEmpty: true,      committed: true,      obj: {        enableGlobalCache: true,        enableTelemetry: false,        enableTimers: true,        nodeLinker: "node-modules",        npmPublishAccess: options?.private ? javascript.NpmAccess.RESTRICTED : javascript.NpmAccess.PUBLIC,        preferAggregateCacheInfo: true,        yarnPath: `.yarn/releases/yarn-${options?.version ?? defaultOptions.version}.cjs`,        logFilters: [          { code: "YN0002", level: "discard" },          { code: "YN0061", level: "discard" },          { code: "YN0062", level: "discard" },        ],      },    })  }}export class Yarn extends Component {  readonly options: YarnOptions  constructor(project: Project, options?: YarnOptions) {    super(project)    this.options = { ...defaultOptions, ...options }  }  preSynthesize() {    this.project.tasks      .tryFind("install")      ?.steps.push(        { name: "setup", exec: `yarn set version ${this.options.version} --only-if-needed` },        { name: "install", exec: "yarn install" },        { name: "dedupe", exec: "yarn dedupe" }      )    this.project.gitignore.addPatterns(      ".yarn/*",      "!.yarn/releases",      "!.yarn/plugins",      "!.yarn/sdks",      "!.yarn/versions",      ".pnp.*"    )    this.project.tryFindObjectFile("package.json")?.addOverride("packageManager", `yarn@${this?.options?.version}`)    this.project.tryFindObjectFile("package.json")?.addOverride("packageManager", `yarn@${this?.options?.version}`)    this.project.tryFindObjectFile("package.json")?.addOverride("workspaces", ["packages/*"])    this.project.tryFindObjectFile("package.json")?.addOverride("private", this.options?.private)    this.project.files?.push(new YarnConfigFile(this.project, this.options))    super.preSynthesize()  }}