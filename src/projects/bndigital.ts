import { javascript, typescript } from "projen";
import { mergeDeep } from "../utils";

const defaultOptions: Partial<typescript.TypeScriptProjectOptions> = {
  defaultReleaseBranch: "latest",
  releaseToNpm: false,
  dependabot: false,
  depsUpgrade: false,
  eslint: false,
  githubOptions: {
    mergify: false,
    pullRequestLint: false,
    workflows: false,
  },
  jest: false,
  licensed: false,
  npmignoreEnabled: false,
  prettier: false,
  projenrcTs: true,
  docgen: false,
  pullRequestTemplate: false,
  sampleCode: false,
  packageManager: javascript.NodePackageManager.PNPM,
};

/**
 * @pjid project
 */
export class BndigitalProject extends typescript.TypeScriptProject {
  constructor(
    options: Omit<typescript.TypeScriptProjectOptions, "defaultReleaseBranch">
  ) {
    super(mergeDeep(options, defaultOptions));
    this.package.addField("private", true);
  }
}
