import {Component, DependencyType, IniFile, IResolver, Project, Task} from "projen";

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
ij_typescript_file_name_style = mixed`;

export interface IdeOptions {
    readonly editorconfig?: boolean;
}

export interface IdeProjectOptions {
    readonly ide?: IdeOptions;
}

export interface LintersProjectOptions {
    readonly linters?: LintersOptions;
}

const eslintConfig = {
    overrides: [
        {
            files: ["**/*.ts"],
            extends: "@bn-digital/eslint-config/typescript",
        },
        {
            files: ["packages/cloud/src/**/*.ts"],
            extends: "@bn-digital/eslint-config/typescript",
        },
        {
            files: ["packages/cms/**/*.ts"],
            extends: "@bn-digital/eslint-config/strapi",
        },
        {
            files: ["packages/**/src/**/*.tsx"],
            extends: "@bn-digital/eslint-config/react",
        },
    ],
};

export interface LintersOptions {
    /**
     * @default true
     */
    readonly eslint?: boolean;
    /**
     * @default true
     */
    readonly stylelint?: boolean;
    /**
     * @default true
     */
    readonly prettier?: boolean;
}

export class Editorconfig extends IniFile {
    constructor(project: Project) {
        super(project, ".editorconfig", {
            omitEmpty: true,
            editGitignore: false,
            marker: true,
        });
    }

    protected synthesizeContent(resolver: IResolver): string | undefined {
        return resolver.resolve(DEFAULT_CONTENT);
    }
}

export class Ide extends Component {
    constructor(project: Project, options: IdeOptions) {
        super(project);
        if (options.editorconfig) new Editorconfig(project);
    }
}

export class Linters extends Component {
    readonly options: LintersOptions;
    readonly task: Task;

    constructor(project: Project, options: LintersOptions) {
        super(project);
        this.options = options;
        this.task = this.project.tasks.tryFind("lint") ?? this.project.addTask("lint");
        this.project.deps.addDependency("lint-staged", DependencyType.DEVENV);
        this.project.deps.addDependency("husky", DependencyType.DEVENV);
        const packageFile = this.project.tryFindObjectFile("package.json");

        if (this.options.eslint) {
            packageFile?.addOverride("eslintConfig", eslintConfig);
            this.project.deps.addDependency("@bn-digital/eslint-config", DependencyType.DEVENV);
            this.task.steps.push({
                say: "Lint TS and JS files",
                exec: "npx eslint --fix --cache **/src/**/*.{ts,tsx}",
            });
        }
        if (this.options.prettier) {
            packageFile?.addOverride("prettier", "@bn-digital/prettier-config");
            this.project.deps.addDependency("@bn-digital/prettier-config@2.3.7", DependencyType.DEVENV);
            this.task.steps.push({
                say: "Format all files",
                exec: "npx prettier --write **/*.{js,jsx,json,ts,tsx,graphql,md,yaml}",
            });
        }

        if (this.options.stylelint) {
            this.task.steps.push({
                say: "Format all style files",
                exec: "npx stylelint --cache **/src/**/*.{scss,sass,less,css}",
            });
            this.project.deps.addDependency("@bn-digital/stylelint-config@*", DependencyType.DEVENV);
            packageFile?.addOverride("stylelint", {extends: "@bn-digital/stylelint-config"});
        }

        this.project.preCompileTask.prependExec(`npx projen lint`);
    }
}
