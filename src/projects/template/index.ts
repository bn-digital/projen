import { basename } from "path";
import { cdk, javascript, YamlFile } from "projen";
import { GithubCredentials } from "projen/lib/github";

import { ide } from "../../components";

export interface TemplateProjectOptions extends cdk.JsiiProjectOptions {
  readonly ide?: ide.IdeProjectOptions;
  readonly linters?: ide.LintersOptions;
}

/**
 * @pjid template
 */
export class Template extends cdk.JsiiProject {
  readonly ide: ide.Ide | undefined;
  readonly linters: ide.Linters | undefined;

  constructor(options: TemplateProjectOptions) {
    super(Template.withDefaults(options));

    if (options.ide) this.ide = new ide.Ide(this, options.ide);
    if (options.linters) this.linters = new ide.Linters(this, options.linters);
  }

  preSynthesize() {
    super.preSynthesize();
    this.addPackageIgnore("!/assets/**");
    // Tasks will be prepended in opposite order of declaration

    this.package.addField(
      "private",
      this.package.npmAccess !== javascript.NpmAccess.PUBLIC
    );
    this.packageTask.reset("npx projen package-all");

    if (this.package.packageManager === javascript.NodePackageManager.YARN2) {
      const yarnVersion = "4.0.0-rc.39";
      this.defaultTask?.prependExec(`yarn set version ${yarnVersion}`);
      this.files.push(
        new YamlFile(this, ".yarnrc.yml", {
          readonly: false,
          obj: {
            nodeLinker: "node-modules",
            preferAggregateCacheInfo: true,
            enableGlobalCache: true,
            nmHoistingLimits: "workspaces",
            enableTelemetry: false,
            yarnPath: `.yarn/releases/yarn-${yarnVersion}.cjs`,
            logFilters: [
              { code: "YN0002", level: "discard" },
              { code: "YN0061", level: "discard" },
              { code: "YN0062", level: "discard" },
            ],
          },
        })
      );
      this.package.addField("workspaces", ["packages/*"]);
    }
  }

  private static withDefaults({
    name,
    eslint = true,
    prettier = false,
    repositoryUrl = "",
    projenrcTs = true,
    author = "bn-digital",
    authorAddress = `https://github.com/bn-digital/${name}`,
    defaultReleaseBranch = "latest",
    packageName = `@${author}/${name}`,
    npmAccess = javascript.NpmAccess.RESTRICTED,
    dependabot,
    devDeps = [],
    ...options
  }: TemplateProjectOptions): TemplateProjectOptions {
    const openSourced = npmAccess === javascript.NpmAccess.PUBLIC;
    return {
      author,
      authorAddress,
      authorOrganization: true,
      clobber: false,
      commitGenerated: false,
      defaultReleaseBranch,
      dependabot: openSourced && dependabot,
      depsUpgrade: openSourced && !dependabot,
      devDeps: [
        "@bn-digital/prettier-config",
        "@bn-digital/eslint-config",
        "@bn-digital/typescript-config",
        "lint-staged",
        "ts-node",
        "typescript",
        "projen",
        ...devDeps,
      ],
      docgen: openSourced,
      ide: { editorconfig: true, ...options.ide },
      eslint: false,
      linters: { eslint, prettier },
      eslintOptions: { dirs: ["src"] },
      github: true,
      githubOptions: {
        pullRequestLint: openSourced,
        mergify: openSourced,
        workflows: openSourced,
        projenCredentials: GithubCredentials.fromPersonalAccessToken({
          secret: "GH_TOKEN",
        }),
        ...options.githubOptions,
      },
      jest: false,
      licensed: openSourced,
      license: openSourced ? "MIT" : undefined,
      stale: false,
      minNodeVersion: "16.0.0",
      name: name ?? basename(process.cwd()),
      npmignoreEnabled: openSourced,
      packageName,
      package: options.package,
      packageManager: javascript.NodePackageManager.YARN2,
      prettier,
      peerDeps: ["projen"],
      projenrcTs,
      publishTasks: openSourced,
      pullRequestTemplate: false,
      releaseToNpm: openSourced,
      repositoryUrl,
      sampleCode: false,
      typescriptVersion: "latest",
      projenVersion: "0.67.70",
      workflowRunsOn: [!openSourced ? "self-hosted" : "ubuntu-latest"],
      ...options,
    };
  }
}
