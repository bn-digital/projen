import { javascript } from 'projen'
import { Template } from './src'

const ORGANIZATION = 'bn-digital' as const
const PROJECT = 'projen' as const

const project = new Template({
  author: ORGANIZATION,
  authorAddress: `https://github.com/${ORGANIZATION}`,
  defaultReleaseBranch: 'latest',
  description: 'Set of tools for building projects in bndigital',
  name: PROJECT,
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageName: `@${ORGANIZATION}/${PROJECT}`,
  repositoryUrl: `https://github.com/${ORGANIZATION}/${PROJECT}`,
  sampleCode: false,
})

project.synth()
