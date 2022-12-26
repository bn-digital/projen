import { typescript } from "projen";

const defaultOptions: bndigital.ProjectOptions = {
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
};

/**
 * @pjid project
 */
export class BndigitalProject extends typescript.TypeScriptProject {
  constructor(options: bndigital.ProjectOptions) {
    super({
      ...defaultOptions,
      ...options,
    });
    this.package.addField("private", true);
  }
}
