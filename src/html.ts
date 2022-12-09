import {
  TypeScriptProject,
  TypeScriptProjectOptions,
} from 'projen/lib/typescript';

export interface HtmlProjectOptions extends TypeScriptProjectOptions {

}

/**
 * Closed source CDK App, Typescript
 *
 * @pjid html
 */
export class HtmlProject extends TypeScriptProject {
  constructor(options: HtmlProjectOptions) {
    super({
      licensed: false,
      dependabot: false,
      eslint: false,
      githubOptions:{...options.githubOptions, mergify: false, pullRequestLint: false, workflows: false},
      ...options,
    });
  }
}
