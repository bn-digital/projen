import { IgnoreFile, Project } from 'projen'

export class DockerIgnoreFile extends IgnoreFile {
  constructor(project: Project) {
    super(project, '.dockerignore')
    this.readonly = true
    this.addPatterns(
      '**/*.md',
      '*-tests.yaml',
      '*.gradle',
      '*/*.iml',
      '*/schema.graphqls',
      '.do',
      '.dockerignore',
      '.editorconfig',
      '.git',
      '.git',
      '.gradle',
      '.graphqlconfig',
      '.husky',
      '.idea',
      '.scannerwork',
      '.skaffold',
      '.strapi-updater.json',
      'Dockerfile',
      'LICENSE',
      'docker-compose.yml',
      'docs',
      'gradle',
      'gradlew*',
      'helmfile.*',
      'node_modules',
      'node_modules',
      'packages/*/*.iml',
      'packages/*/.cache',
      'packages/*/.tmp',
      'packages/*/build',
      'packages/*/dist',
      'packages/*/node_modules',
      'packages/cloud'
    )
  }
}
