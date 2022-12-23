import { cdk, javascript } from "projen";

const project = new cdk.JsiiProject({
  author: "bndigital",
  authorAddress: "dev@bndigital.co",
  authorOrganization: true,
  defaultReleaseBranch: "latest",
  description: "Set of tools for building projects in bndigital",
  devDeps: ["projen@0.65.71", "@bn-digital/prettier-config"],
  docgenFilePath: "docs/API.md",
  eslint: false,
  jest: false,
  majorVersion: 0,
  name: "projen",
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.YARN,
  packageName: "@bn-digital/projen",
  peerDeps: ["projen@0.65.71"],
  projenrcTs: true,
  release: false,
  buildWorkflow: true,
  releaseToNpm: true,
  gitignore: [".yarn/install-state.gz"],
  repositoryUrl: "https://github.com/bn-digital/projen.git",
});
project.synth();
