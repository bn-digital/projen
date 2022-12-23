import { bndigital } from "@bn-digital/projen";

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
export class BndigitalProject extends bndigital.Project {
  constructor(options: bndigital.ProjectOptions) {
    super({
      ...defaultOptions,
      ...options,
    });
  }
}
