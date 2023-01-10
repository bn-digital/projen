import { javascript } from 'projen'
import { BrandNewProject } from './src'

const projenVersion = '0.66.10' as const

const project = new BrandNewProject({
  authorOrganization: true,
  defaultReleaseBranch: 'latest',
  description: `Set of tools for building projects in bndigital`,
  devDeps: [`projen@${projenVersion}`, 'vite'],
  majorVersion: 0,
  name: 'projen',
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageName: `@bn-digital/projen`,
  tsconfig: {
    compilerOptions: { baseUrl: '.', allowSyntheticDefaultImports: true },
    include: ['./resources/**/*.ejs'],
  },
  releaseToNpm: true,
  dependabot: true,
})
project.addPackageIgnore('!/resources/')
project.packageTask.reset('npx projen package-all')

project.synth()
