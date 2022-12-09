import {cdk, javascript} from 'projen';

const project = new cdk.JsiiProject({
  name: 'projen',
  deps: ["projen@^0.65.50"],
  peerDeps: ["projen@^0.65.50"],
  description: 'Set of tools for building projects in bndigital',
  author: 'bndigital',
  authorAddress: 'dev@bndigital.co', authorOrganization: true,
  defaultReleaseBranch: 'latest',
  eslint: false,
  pullRequestTemplate: false,
  githubOptions: { mergify: false, pullRequestLint: false, workflows: false},
  jest: false,
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageName: '@bn-digital/projen',
  prettier: false,
  projenrcTs: true,
  repository: 'https://github.com/bndigital/projen.git',
  repositoryUrl: 'https://github.com/vlad.volkov/projen.git',
  sampleCode: false,
});
project.synth();
