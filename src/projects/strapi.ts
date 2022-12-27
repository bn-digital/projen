import { javascript, JsonPatch, typescript } from "projen";
import { mergeDeep, resolveOutDir, resolvePackageName } from "../utils";

const defaultProjectOptions: Partial<typescript.TypeScriptProjectOptions> = {
  defaultReleaseBranch: "latest",
  docgen: false,
  eslint: false,
  gitignore: ["/.tmp", "/.cache", "/.strapi-updater.json", "/build", "/dist"],
  jest: false,
  licensed: false,
  npmignoreEnabled: false,
  publishTasks: false,
  package: false,
  clobber: false,
  commitGenerated: false,
  releaseToNpm: false,
  workflowRunsOn: ["self-hosted"],
  githubOptions: {
    pullRequestLint: false,
    mergify: false,
    workflows: false,
  },
  packageManager: javascript.NodePackageManager.PNPM,
};

const defaultOptions: strapi.Options = {
  version: "4.5.4",
  users: {
    enabled: true,
  },
  database: {
    client: "sqlite",
  },
  graphql: {
    enabled: true,
  },
};

/**
 * @pjid strapi
 */
export class StrapiProject extends typescript.TypeScriptProject {
  strapiOptions: strapi.Options;

  constructor({
    strapiOptions: strapiOverrides = {},
    defaultReleaseBranch = "latest",
    ...options
  }: strapi.ProjectOptions) {
    const strapiOptions: strapi.Options = mergeDeep(
      strapiOverrides,
      defaultOptions
    );
    super({
      ...defaultProjectOptions,
      ...options,
      defaultReleaseBranch,
      packageName: resolvePackageName(options),
      outdir: resolveOutDir(options),
      disableTsconfig: true,
      projenrcTs: !options.parent,
    });
    this.strapiOptions = strapiOptions;

    const deps = [
      `@strapi/strapi@${strapiOptions.version}`,
      `@strapi/database@${strapiOptions.version}`,
      `@strapi/plugin-graphql@${strapiOptions.version}`,
      `@strapi/plugin-content-manager@${strapiOptions.version}`,
      `@strapi/plugin-content-type-builder@${strapiOptions.version}`,
      `@strapi/typescript-utils@${strapiOptions.version}`,
      `strapi-plugin-config-sync`,
    ]
      .concat(...this.resolveEmailDeps())
      .concat(...this.resolveDatabaseDeps())
      .concat(...this.resolveUsersDeps());
    this.addDeps(...deps);
    this.addDevDeps(`typescript`, `@types/node`, `@bn-digital/strapi-types`);
    this.removeScript("clobber");
    this.removeScript("compile");
    this.removeScript("package");
    this.removeScript("upgrade");
    this.removeScript("watch");
    this.removeScript("test");
    this.removeScript("pre-compile");
    this.removeScript("post-compile");
    this.removeScript("post-upgrade");
    this.removeScript("default");
    this.removeScript("eject");
    this.setScript("build", "pnpm exec strapi build");
    this.setScript("start", "pnpm exec strapi start");
    this.setScript("dev", "pnpm exec strapi develop");
  }

  private resolveEmailDeps(): string[] {
    switch (this.strapiOptions.email?.provider) {
      case "sendgrid":
      case "mailgun":
      case "nodemailer":
        return [
          `@strapi/provider-email-${this.strapiOptions.email?.provider}@${this.strapiOptions.version}`,
          `@bn-digital/strapi-plugin-email-emitter`,
        ];
      default:
        return [];
    }
  }
  private resolveUsersDeps(): string[] {
    return this.strapiOptions.users?.enabled
      ? [`@strapi/plugin-users-permissions@${this.strapiOptions.version}`]
      : [];
  }

  private resolveDatabaseDeps(): string[] {
    switch (this.strapiOptions.database?.client) {
      case "sqlite":
        return ["better-sqlite3"];
      case "postgres":
        return ["pg"];
      case "mysql":
        return ["mysql"];
      default:
        return [];
    }
  }

  synth() {
    super.synth();
    this.tryFindObjectFile("tsconfig.json")?.patch(
      JsonPatch.replace("/", {
        extends: "@strapi/typescript-utils/tsconfigs/server",
        compilerOptions: {
          types: [
            "@bn-digital/strapi-types",
            "@bn-digital/strapi-plugin-email-emitter",
          ],
          baseUrl: ".",
          outDir: "dist",
        },
        include: ["./src/**/*.json", "./"],
        exclude: [
          "node_modules/",
          "build/",
          "public",
          "dist/",
          ".cache/",
          ".tmp/",
          "src/admin/",
          "**/*.test.ts",
          "src/plugins/**",
        ],
      })
    );
  }
}
