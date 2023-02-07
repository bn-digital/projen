import {basename} from 'path';
import {cdk, javascript} from 'projen';

import {ide} from '../../components';

export interface TemplateProjectOptions extends cdk.JsiiProjectOptions, ide.IdeProjectOptions {
  readonly private?: boolean;
}

/**
 * @pjid template
 */
export class Template extends cdk.JsiiProject {
  readonly editorconfig: ide.Editorconfig | undefined;

  constructor(options: TemplateProjectOptions) {
    const mergedOptions = Template.withDefaults(options);
    super(mergedOptions);
    this.addPackageIgnore('!/assets/**');
    this.preCompileTask.prependExec(
        'npx eslint --fix src/**/*.{js,jsx,ts,tsx}');
    this.preCompileTask.prependExec(
        'npx prettier --write src/**/*.{js,jsx,ts,tsx,json,md,less,graphql}');

    this.package.addField('private', true);
    this.package.addField('prettier', `@bn-digital/prettier-config`);
    this.package.addField('eslintConfig', {
      extends: `@bn-digital/eslint-config/typescript`,
    });
    this.package.addField('workspaces', ['packages/*']);

    if (options.editorconfig) this.editorconfig = new ide.Editorconfig(this);
  }

  private static withDefaults({
                                name,
                                eslint = false,
                                repositoryUrl = '',
                                author = 'bn-digital',
                                authorAddress = `https://github.com/bn-digital/${name}`,
                                defaultReleaseBranch = 'latest',
                                packageName = `@${author}/${name}`,
                                devDeps = [],
                                ...options
                              }: TemplateProjectOptions): TemplateProjectOptions {
    return {
      author,
      authorAddress,
      authorOrganization: true,
      clobber: false,
      commitGenerated: false,
      defaultReleaseBranch,
      dependabot: false,
      depsUpgrade: true,
      devDeps: [
        '@bn-digital/prettier-config',
        '@bn-digital/eslint-config',
        'lint-staged',
        'ts-node',
        'typescript',
        'projen',
        ...devDeps,
      ],
      disableTsconfig: true,
      docgen: false,
      editorconfig: true,
      eslint,
      github: true,
      githubOptions: {
        pullRequestLint: false,
        mergify: false,
        workflows: false,
        ...options.githubOptions,
      },
      jest: false,
      licensed: false,
      stale: true,
      minNodeVersion: '18.0.0',
      name: name ?? basename(process.cwd()),
      npmignoreEnabled: false,
      packageName,
      packageManager: javascript.NodePackageManager.PNPM,
      peerDeps: ['projen'],
      prettier: false,
      projenVersion: '0.67.32',
      projenrcTs: true,
      publishTasks: false,
      pullRequestTemplate: false,
      releaseToNpm: false,
      repositoryUrl,
      sampleCode: false,
      typescriptVersion: '4.9.5',
      workflowRunsOn: ['self-hosted'],
      ...options,
    };
  }

}
