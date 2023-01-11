import { javascript } from 'projen'
import { Template } from './src'

const project = new Template({
  author: 'bn-digital',
  authorAddress: 'https://bndigital.co',
  repositoryUrl: 'https://github.com/bn-digital/projen',
  authorOrganization: true,
  defaultReleaseBranch: 'latest',
  description: `Set of tools for building projects in bndigital`,
  name: 'projen',
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageName: `@bn-digital/projen`,
  releaseToNpm: true,
  sampleCode: false,
  dependabot: true,
})
project.packageTask.reset('npx projen package-all')

project.synth()
