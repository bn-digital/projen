import { Component, IniFile, IResolver, Project } from 'projen'
import { NodeProject } from 'projen/lib/javascript'

// language=Editorconfig
const DEFAULT_CONTENT = `
root = true

[*]
indent_size = tab
tab_width = 2
max_line_length = 160
insert_final_newline = false
indent_style = space
charset = utf-8
trim_trailing_whitespace = true

[*.{tsx,ts}]
ij_typescript_align_imports = true
ij_typescript_import_use_node_resolution = true
ij_typescript_spaces_within_imports = true
ij_typescript_blank_lines_after_imports = 2
ij_typescript_import_sort_members = true
ij_typescript_import_sort_module_name = true
ij_typescript_import_merge_members = true
ij_typescript_file_name_style = mixed`

export interface IdeProjectOptions {
  readonly editorconfig?: boolean
}
export interface LintersOptions {
  readonly eslint?: boolean
  readonly stylelint?: boolean
  readonly prettier?: boolean
}
export class Editorconfig extends IniFile {
  constructor(project: Project) {
    super(project, '.editorconfig', { omitEmpty: true, editGitignore: false, marker: true })
  }

  protected synthesizeContent(resolver: IResolver): string | undefined {
    return resolver.resolve(DEFAULT_CONTENT)
  }
}

export class Ide extends Component {
  constructor(project: Project, options: IdeProjectOptions) {
    super(project)
    if (options.editorconfig) new Editorconfig(project)
  }
}

export class Linters extends Component {
  readonly eslint?: boolean
  readonly prettier?: boolean
  constructor(project: NodeProject, options: LintersOptions) {
    super(project)
    this.eslint = options.eslint
    this.prettier = options.prettier
  }

  preSynthesize() {
    super.preSynthesize()
    if (this.eslint) {
      this.project
        .tryFindObjectFile('package.json')
        ?.addOverride('eslintConfig', { extends: '@bn-digital/eslint-config/typescript' })
      this.project.preCompileTask.prependExec('npx eslint --fix --cache src/**/*.{js,jsx,ts,tsx}')
      this.project.testTask?.prependExec('npx eslint --cache src/**/*.{js,jsx,ts,tsx}')
    }
    if (this.prettier) {
      this.project.tryFindObjectFile('package.json')?.addOverride('prettier', '@bn-digital/prettier-config')
      this.project.preCompileTask.prependExec('npx prettier --write src/**/*')
    }
  }
}
