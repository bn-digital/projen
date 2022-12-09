import { typescript } from 'projen'

export interface BndigitalProjectOptions extends typescript.TypeScriptProjectOptions {}
const defaultOptions: Partial<BndigitalProjectOptions> = {
  defaultReleaseBranch: 'latest',
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
}

/**
 * @pjid project
 */
export class BndigitalProject extends typescript.TypeScriptProject {
  constructor(options: BndigitalProjectOptions) {
    super({
      ...defaultOptions,
      ...options,
    })
  }
}
