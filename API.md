# API Reference <a name="API Reference" id="api-reference"></a>



## Classes <a name="Classes" id="Classes"></a>

### BndigitalProject <a name="BndigitalProject" id="@bn-digital/projen.BndigitalProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.BndigitalProject.Initializer"></a>

```typescript
import { BndigitalProject } from '@bn-digital/projen'

new BndigitalProject(options: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.BndigitalProject.Initializer.parameter.options">options</a></code> | <code>any</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.BndigitalProject.Initializer.parameter.options"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.BndigitalProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.BndigitalProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@bn-digital/projen.BndigitalProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.BndigitalProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.BndigitalProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.BndigitalProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.BndigitalProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.BndigitalProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.BndigitalProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.BndigitalProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@bn-digital/projen.BndigitalProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@bn-digital/projen.BndigitalProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.BndigitalProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@bn-digital/projen.BndigitalProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@bn-digital/projen.BndigitalProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@bn-digital/projen.BndigitalProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.BndigitalProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.BndigitalProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.BndigitalProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.BndigitalProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.BndigitalProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.BndigitalProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.BndigitalProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BndigitalProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.BndigitalProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.BndigitalProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.BndigitalProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.BndigitalProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@bn-digital/projen.BndigitalProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.BndigitalProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.BndigitalProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.BndigitalProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BndigitalProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.BndigitalProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.BndigitalProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.BndigitalProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.BndigitalProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.BndigitalProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.BndigitalProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.BndigitalProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.BndigitalProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.BndigitalProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.BndigitalProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.BndigitalProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@bn-digital/projen.BndigitalProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@bn-digital/projen.BndigitalProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@bn-digital/projen.BndigitalProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.BndigitalProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@bn-digital/projen.BndigitalProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.BndigitalProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@bn-digital/projen.BndigitalProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.BndigitalProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@bn-digital/projen.BndigitalProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.BndigitalProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@bn-digital/projen.BndigitalProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@bn-digital/projen.BndigitalProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@bn-digital/projen.BndigitalProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@bn-digital/projen.BndigitalProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@bn-digital/projen.BndigitalProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.BndigitalProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@bn-digital/projen.BndigitalProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.BndigitalProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### `hasScript` <a name="hasScript" id="@bn-digital/projen.BndigitalProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BndigitalProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@bn-digital/projen.BndigitalProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BndigitalProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@bn-digital/projen.BndigitalProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.BndigitalProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@bn-digital/projen.BndigitalProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BndigitalProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@bn-digital/projen.BndigitalProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this pacakge. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.BndigitalProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.BndigitalProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.BndigitalProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.BndigitalProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.BndigitalProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.BndigitalProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.BndigitalProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.BndigitalProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.BndigitalProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.BndigitalProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BndigitalProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.BndigitalProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.BndigitalProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.BndigitalProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.BndigitalProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.BndigitalProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.BndigitalProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.BndigitalProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.BndigitalProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.BndigitalProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.BndigitalProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.BndigitalProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.BndigitalProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@bn-digital/projen.BndigitalProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@bn-digital/projen.BndigitalProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@bn-digital/projen.BndigitalProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@bn-digital/projen.BndigitalProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@bn-digital/projen.BndigitalProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@bn-digital/projen.BndigitalProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@bn-digital/projen.BndigitalProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@bn-digital/projen.BndigitalProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@bn-digital/projen.BndigitalProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@bn-digital/projen.BndigitalProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@bn-digital/projen.BndigitalProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@bn-digital/projen.BndigitalProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `package`<sup>Required</sup> <a name="package" id="@bn-digital/projen.BndigitalProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@bn-digital/projen.BndigitalProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@bn-digital/projen.BndigitalProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@bn-digital/projen.BndigitalProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@bn-digital/projen.BndigitalProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@bn-digital/projen.BndigitalProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@bn-digital/projen.BndigitalProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@bn-digital/projen.BndigitalProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@bn-digital/projen.BndigitalProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@bn-digital/projen.BndigitalProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@bn-digital/projen.BndigitalProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@bn-digital/projen.BndigitalProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@bn-digital/projen.BndigitalProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@bn-digital/projen.BndigitalProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@bn-digital/projen.BndigitalProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@bn-digital/projen.BndigitalProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@bn-digital/projen.BndigitalProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@bn-digital/projen.BndigitalProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@bn-digital/projen.BndigitalProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@bn-digital/projen.BndigitalProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@bn-digital/projen.BndigitalProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@bn-digital/projen.BndigitalProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@bn-digital/projen.BndigitalProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@bn-digital/projen.BndigitalProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.BndigitalProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.BndigitalProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### DockerComponent <a name="DockerComponent" id="@bn-digital/projen.docker.DockerComponent"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.docker.DockerComponent.Initializer"></a>

```typescript
import { docker } from '@bn-digital/projen'

new docker.DockerComponent(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.docker.DockerComponent.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.docker.DockerComponent.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.docker.DockerComponent.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.docker.DockerComponent.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.docker.DockerComponent.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.docker.DockerComponent.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.docker.DockerComponent.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.docker.DockerComponent.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.docker.DockerComponent.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.docker.DockerComponent.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### HtmlProject <a name="HtmlProject" id="@bn-digital/projen.HtmlProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.HtmlProject.Initializer"></a>

```typescript
import { HtmlProject } from '@bn-digital/projen'

new HtmlProject(options: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.HtmlProject.Initializer.parameter.options">options</a></code> | <code>any</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.HtmlProject.Initializer.parameter.options"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.HtmlProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.HtmlProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.HtmlProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.HtmlProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.HtmlProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.HtmlProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@bn-digital/projen.HtmlProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.HtmlProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.HtmlProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.HtmlProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.HtmlProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.HtmlProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.HtmlProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.HtmlProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.HtmlProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@bn-digital/projen.HtmlProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@bn-digital/projen.HtmlProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.HtmlProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@bn-digital/projen.HtmlProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@bn-digital/projen.HtmlProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@bn-digital/projen.HtmlProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@bn-digital/projen.HtmlProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@bn-digital/projen.HtmlProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.HtmlProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@bn-digital/projen.HtmlProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@bn-digital/projen.HtmlProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@bn-digital/projen.HtmlProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.HtmlProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.HtmlProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.HtmlProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.HtmlProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.HtmlProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.HtmlProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.HtmlProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.HtmlProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.HtmlProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.HtmlProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.HtmlProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.HtmlProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@bn-digital/projen.HtmlProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.HtmlProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.HtmlProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.HtmlProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.HtmlProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.HtmlProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.HtmlProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.HtmlProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.HtmlProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.HtmlProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.HtmlProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.HtmlProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.HtmlProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.HtmlProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.HtmlProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.HtmlProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@bn-digital/projen.HtmlProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@bn-digital/projen.HtmlProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@bn-digital/projen.HtmlProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.HtmlProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@bn-digital/projen.HtmlProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.HtmlProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@bn-digital/projen.HtmlProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.HtmlProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@bn-digital/projen.HtmlProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.HtmlProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@bn-digital/projen.HtmlProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@bn-digital/projen.HtmlProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@bn-digital/projen.HtmlProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@bn-digital/projen.HtmlProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@bn-digital/projen.HtmlProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.HtmlProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@bn-digital/projen.HtmlProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.HtmlProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### `hasScript` <a name="hasScript" id="@bn-digital/projen.HtmlProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.HtmlProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@bn-digital/projen.HtmlProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.HtmlProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@bn-digital/projen.HtmlProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.HtmlProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@bn-digital/projen.HtmlProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.HtmlProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@bn-digital/projen.HtmlProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.HtmlProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.HtmlProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@bn-digital/projen.HtmlProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@bn-digital/projen.HtmlProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@bn-digital/projen.HtmlProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@bn-digital/projen.HtmlProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this pacakge. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@bn-digital/projen.HtmlProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@bn-digital/projen.HtmlProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.HtmlProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.HtmlProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.HtmlProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.HtmlProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.HtmlProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.HtmlProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.HtmlProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.HtmlProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.HtmlProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.HtmlProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.HtmlProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.HtmlProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.HtmlProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.HtmlProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.HtmlProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.HtmlProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.HtmlProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.HtmlProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.HtmlProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.HtmlProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.HtmlProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.HtmlProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.HtmlProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@bn-digital/projen.HtmlProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@bn-digital/projen.HtmlProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@bn-digital/projen.HtmlProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@bn-digital/projen.HtmlProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@bn-digital/projen.HtmlProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@bn-digital/projen.HtmlProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@bn-digital/projen.HtmlProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@bn-digital/projen.HtmlProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@bn-digital/projen.HtmlProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@bn-digital/projen.HtmlProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@bn-digital/projen.HtmlProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@bn-digital/projen.HtmlProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `package`<sup>Required</sup> <a name="package" id="@bn-digital/projen.HtmlProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@bn-digital/projen.HtmlProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@bn-digital/projen.HtmlProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@bn-digital/projen.HtmlProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@bn-digital/projen.HtmlProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@bn-digital/projen.HtmlProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@bn-digital/projen.HtmlProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@bn-digital/projen.HtmlProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@bn-digital/projen.HtmlProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@bn-digital/projen.HtmlProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@bn-digital/projen.HtmlProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@bn-digital/projen.HtmlProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@bn-digital/projen.HtmlProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@bn-digital/projen.HtmlProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@bn-digital/projen.HtmlProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@bn-digital/projen.HtmlProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@bn-digital/projen.HtmlProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@bn-digital/projen.HtmlProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@bn-digital/projen.HtmlProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@bn-digital/projen.HtmlProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@bn-digital/projen.HtmlProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@bn-digital/projen.HtmlProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@bn-digital/projen.HtmlProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@bn-digital/projen.HtmlProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.HtmlProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.HtmlProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### NodePackage <a name="NodePackage" id="@bn-digital/projen.node.NodePackage"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.node.NodePackage.Initializer"></a>

```typescript
import { node } from '@bn-digital/projen'

new node.NodePackage(project: Project, options?: NodePackageOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.node.NodePackage.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.node.NodePackage.Initializer.parameter.options">options</a></code> | <code>projen.javascript.NodePackageOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.node.NodePackage.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.node.NodePackage.Initializer.parameter.options"></a>

- *Type:* projen.javascript.NodePackageOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.node.NodePackage.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.node.NodePackage.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.node.NodePackage.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@bn-digital/projen.node.NodePackage.addBin">addBin</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.node.NodePackage.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@bn-digital/projen.node.NodePackage.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@bn-digital/projen.node.NodePackage.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@bn-digital/projen.node.NodePackage.addEngine">addEngine</a></code> | Adds an `engines` requirement to your package. |
| <code><a href="#@bn-digital/projen.node.NodePackage.addField">addField</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@bn-digital/projen.node.NodePackage.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@bn-digital/projen.node.NodePackage.addPackageResolutions">addPackageResolutions</a></code> | Defines resolutions for dependencies to change the normally resolved version of a dependency to something else. |
| <code><a href="#@bn-digital/projen.node.NodePackage.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@bn-digital/projen.node.NodePackage.addVersion">addVersion</a></code> | Sets the package version. |
| <code><a href="#@bn-digital/projen.node.NodePackage.hasScript">hasScript</a></code> | Indicates if a script by the given name is defined. |
| <code><a href="#@bn-digital/projen.node.NodePackage.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@bn-digital/projen.node.NodePackage.renderUpgradePackagesCommand">renderUpgradePackagesCommand</a></code> | Render a package manager specific command to upgrade all requested dependencies. |
| <code><a href="#@bn-digital/projen.node.NodePackage.setScript">setScript</a></code> | Override the contents of an npm package.json script. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.node.NodePackage.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.node.NodePackage.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.node.NodePackage.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addBin` <a name="addBin" id="@bn-digital/projen.node.NodePackage.addBin"></a>

```typescript
public addBin(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@bn-digital/projen.node.NodePackage.addBin.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@bn-digital/projen.node.NodePackage.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.node.NodePackage.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@bn-digital/projen.node.NodePackage.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.node.NodePackage.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@bn-digital/projen.node.NodePackage.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.node.NodePackage.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addEngine` <a name="addEngine" id="@bn-digital/projen.node.NodePackage.addEngine"></a>

```typescript
public addEngine(engine: string, version: string): void
```

Adds an `engines` requirement to your package.

###### `engine`<sup>Required</sup> <a name="engine" id="@bn-digital/projen.node.NodePackage.addEngine.parameter.engine"></a>

- *Type:* string

The engine (e.g. `node`).

---

###### `version`<sup>Required</sup> <a name="version" id="@bn-digital/projen.node.NodePackage.addEngine.parameter.version"></a>

- *Type:* string

The semantic version requirement (e.g. `^10`).

---

##### `addField` <a name="addField" id="@bn-digital/projen.node.NodePackage.addField"></a>

```typescript
public addField(name: string, value: any): void
```

Directly set fields in `package.json`.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.node.NodePackage.addField.parameter.name"></a>

- *Type:* string

field name.

---

###### `value`<sup>Required</sup> <a name="value" id="@bn-digital/projen.node.NodePackage.addField.parameter.value"></a>

- *Type:* any

field value.

---

##### `addKeywords` <a name="addKeywords" id="@bn-digital/projen.node.NodePackage.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@bn-digital/projen.node.NodePackage.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPackageResolutions` <a name="addPackageResolutions" id="@bn-digital/projen.node.NodePackage.addPackageResolutions"></a>

```typescript
public addPackageResolutions(resolutions: string): void
```

Defines resolutions for dependencies to change the normally resolved version of a dependency to something else.

###### `resolutions`<sup>Required</sup> <a name="resolutions" id="@bn-digital/projen.node.NodePackage.addPackageResolutions.parameter.resolutions"></a>

- *Type:* string

Names resolutions to be added.

Specify a version or
range with this syntax:
`module@^7`.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@bn-digital/projen.node.NodePackage.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.node.NodePackage.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addVersion` <a name="addVersion" id="@bn-digital/projen.node.NodePackage.addVersion"></a>

```typescript
public addVersion(version: string): void
```

Sets the package version.

###### `version`<sup>Required</sup> <a name="version" id="@bn-digital/projen.node.NodePackage.addVersion.parameter.version"></a>

- *Type:* string

Package version.

---

##### ~~`hasScript`~~ <a name="hasScript" id="@bn-digital/projen.node.NodePackage.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the given name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.node.NodePackage.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@bn-digital/projen.node.NodePackage.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.node.NodePackage.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderUpgradePackagesCommand` <a name="renderUpgradePackagesCommand" id="@bn-digital/projen.node.NodePackage.renderUpgradePackagesCommand"></a>

```typescript
public renderUpgradePackagesCommand(exclude: string[], include?: string[]): string
```

Render a package manager specific command to upgrade all requested dependencies.

###### `exclude`<sup>Required</sup> <a name="exclude" id="@bn-digital/projen.node.NodePackage.renderUpgradePackagesCommand.parameter.exclude"></a>

- *Type:* string[]

---

###### `include`<sup>Optional</sup> <a name="include" id="@bn-digital/projen.node.NodePackage.renderUpgradePackagesCommand.parameter.include"></a>

- *Type:* string[]

---

##### `setScript` <a name="setScript" id="@bn-digital/projen.node.NodePackage.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Override the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.node.NodePackage.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@bn-digital/projen.node.NodePackage.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow project to take library dependencies. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.entrypoint">entrypoint</a></code> | <code>string</code> | The module's entrypoint (e.g. `lib/index.js`). |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.installAndUpdateLockfileCommand">installAndUpdateLockfileCommand</a></code> | <code>string</code> | Renders `yarn install` or `npm install` with lockfile update (not frozen). |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.installCommand">installCommand</a></code> | <code>string</code> | Returns the command to execute in order to install all dependencies (always frozen). |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.lockFile">lockFile</a></code> | <code>string</code> | The name of the lock file. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | npm package access level. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The npm registry host (e.g. `registry.npmjs.org`). |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | npm registry (e.g. `https://registry.npmjs.org`). Use `npmRegistryHost` to get just the host name. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.packageName">packageName</a></code> | <code>string</code> | The name of the npm package. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command which executes "projen". |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.license">license</a></code> | <code>string</code> | The SPDX license of this module. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this pacakge. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@bn-digital/projen.node.NodePackage.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.node.NodePackage.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `allowLibraryDependencies`<sup>Required</sup> <a name="allowLibraryDependencies" id="@bn-digital/projen.node.NodePackage.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

Allow project to take library dependencies.

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@bn-digital/projen.node.NodePackage.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

The module's entrypoint (e.g. `lib/index.js`).

---

##### `installAndUpdateLockfileCommand`<sup>Required</sup> <a name="installAndUpdateLockfileCommand" id="@bn-digital/projen.node.NodePackage.property.installAndUpdateLockfileCommand"></a>

```typescript
public readonly installAndUpdateLockfileCommand: string;
```

- *Type:* string

Renders `yarn install` or `npm install` with lockfile update (not frozen).

---

##### `installCommand`<sup>Required</sup> <a name="installCommand" id="@bn-digital/projen.node.NodePackage.property.installCommand"></a>

```typescript
public readonly installCommand: string;
```

- *Type:* string

Returns the command to execute in order to install all dependencies (always frozen).

---

##### `lockFile`<sup>Required</sup> <a name="lockFile" id="@bn-digital/projen.node.NodePackage.property.lockFile"></a>

```typescript
public readonly lockFile: string;
```

- *Type:* string

The name of the lock file.

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@bn-digital/projen.node.NodePackage.property.manifest"></a>

- *Deprecated:* use `addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmAccess`<sup>Required</sup> <a name="npmAccess" id="@bn-digital/projen.node.NodePackage.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess

npm package access level.

---

##### `npmRegistry`<sup>Required</sup> <a name="npmRegistry" id="@bn-digital/projen.node.NodePackage.property.npmRegistry"></a>

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The npm registry host (e.g. `registry.npmjs.org`).

---

##### `npmRegistryUrl`<sup>Required</sup> <a name="npmRegistryUrl" id="@bn-digital/projen.node.NodePackage.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string

npm registry (e.g. `https://registry.npmjs.org`). Use `npmRegistryHost` to get just the host name.

---

##### `packageManager`<sup>Required</sup> <a name="packageManager" id="@bn-digital/projen.node.NodePackage.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@bn-digital/projen.node.NodePackage.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The name of the npm package.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.node.NodePackage.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command which executes "projen".

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@bn-digital/projen.node.NodePackage.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `license`<sup>Optional</sup> <a name="license" id="@bn-digital/projen.node.NodePackage.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

The SPDX license of this module.

`undefined` if this package is not licensed.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@bn-digital/projen.node.NodePackage.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum.

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@bn-digital/projen.node.NodePackage.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum

Minimum node.js version required by this package.

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@bn-digital/projen.node.NodePackage.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@bn-digital/projen.node.NodePackage.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* undefined

Options for privately hosted scoped packages.

---


### StrapiProject <a name="StrapiProject" id="@bn-digital/projen.StrapiProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.StrapiProject.Initializer"></a>

```typescript
import { StrapiProject } from '@bn-digital/projen'

new StrapiProject(__0: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.StrapiProject.Initializer.parameter.__0">__0</a></code> | <code>any</code> | *No description.* |

---

##### `__0`<sup>Required</sup> <a name="__0" id="@bn-digital/projen.StrapiProject.Initializer.parameter.__0"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.StrapiProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.StrapiProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.StrapiProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.StrapiProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.StrapiProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.StrapiProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@bn-digital/projen.StrapiProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.StrapiProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.StrapiProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.StrapiProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.StrapiProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.StrapiProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.StrapiProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.StrapiProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.StrapiProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@bn-digital/projen.StrapiProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@bn-digital/projen.StrapiProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.StrapiProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@bn-digital/projen.StrapiProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@bn-digital/projen.StrapiProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@bn-digital/projen.StrapiProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@bn-digital/projen.StrapiProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@bn-digital/projen.StrapiProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.StrapiProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@bn-digital/projen.StrapiProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@bn-digital/projen.StrapiProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@bn-digital/projen.StrapiProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.StrapiProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.StrapiProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.StrapiProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.StrapiProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.StrapiProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.StrapiProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.StrapiProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.StrapiProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.StrapiProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.StrapiProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.StrapiProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.StrapiProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@bn-digital/projen.StrapiProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.StrapiProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.StrapiProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.StrapiProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.StrapiProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.StrapiProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.StrapiProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.StrapiProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.StrapiProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.StrapiProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.StrapiProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.StrapiProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.StrapiProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.StrapiProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.StrapiProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.StrapiProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@bn-digital/projen.StrapiProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@bn-digital/projen.StrapiProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@bn-digital/projen.StrapiProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.StrapiProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@bn-digital/projen.StrapiProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.StrapiProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@bn-digital/projen.StrapiProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.StrapiProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@bn-digital/projen.StrapiProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.StrapiProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@bn-digital/projen.StrapiProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@bn-digital/projen.StrapiProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@bn-digital/projen.StrapiProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@bn-digital/projen.StrapiProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@bn-digital/projen.StrapiProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.StrapiProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@bn-digital/projen.StrapiProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.StrapiProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### `hasScript` <a name="hasScript" id="@bn-digital/projen.StrapiProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.StrapiProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@bn-digital/projen.StrapiProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.StrapiProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@bn-digital/projen.StrapiProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.StrapiProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@bn-digital/projen.StrapiProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.StrapiProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@bn-digital/projen.StrapiProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.StrapiProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.StrapiProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@bn-digital/projen.StrapiProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@bn-digital/projen.StrapiProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@bn-digital/projen.StrapiProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@bn-digital/projen.StrapiProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this pacakge. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@bn-digital/projen.StrapiProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@bn-digital/projen.StrapiProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.StrapiProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.StrapiProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.StrapiProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.StrapiProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.StrapiProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.StrapiProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.StrapiProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.StrapiProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.StrapiProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.StrapiProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.StrapiProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.StrapiProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.StrapiProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.StrapiProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.StrapiProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.StrapiProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.StrapiProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.StrapiProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.StrapiProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.StrapiProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.StrapiProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.StrapiProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.StrapiProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@bn-digital/projen.StrapiProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@bn-digital/projen.StrapiProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@bn-digital/projen.StrapiProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@bn-digital/projen.StrapiProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@bn-digital/projen.StrapiProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@bn-digital/projen.StrapiProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@bn-digital/projen.StrapiProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@bn-digital/projen.StrapiProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@bn-digital/projen.StrapiProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@bn-digital/projen.StrapiProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@bn-digital/projen.StrapiProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@bn-digital/projen.StrapiProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `package`<sup>Required</sup> <a name="package" id="@bn-digital/projen.StrapiProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@bn-digital/projen.StrapiProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@bn-digital/projen.StrapiProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@bn-digital/projen.StrapiProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@bn-digital/projen.StrapiProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@bn-digital/projen.StrapiProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@bn-digital/projen.StrapiProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@bn-digital/projen.StrapiProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@bn-digital/projen.StrapiProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@bn-digital/projen.StrapiProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@bn-digital/projen.StrapiProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@bn-digital/projen.StrapiProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@bn-digital/projen.StrapiProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@bn-digital/projen.StrapiProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@bn-digital/projen.StrapiProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@bn-digital/projen.StrapiProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@bn-digital/projen.StrapiProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@bn-digital/projen.StrapiProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@bn-digital/projen.StrapiProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@bn-digital/projen.StrapiProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@bn-digital/projen.StrapiProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@bn-digital/projen.StrapiProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@bn-digital/projen.StrapiProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@bn-digital/projen.StrapiProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.StrapiProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.StrapiProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### ViteProject <a name="ViteProject" id="@bn-digital/projen.ViteProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.ViteProject.Initializer"></a>

```typescript
import { ViteProject } from '@bn-digital/projen'

new ViteProject(options: TypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ViteProject.Initializer.parameter.options">options</a></code> | <code>projen.typescript.TypeScriptProjectOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.ViteProject.Initializer.parameter.options"></a>

- *Type:* projen.typescript.TypeScriptProjectOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.ViteProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.ViteProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.ViteProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.ViteProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.ViteProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.ViteProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@bn-digital/projen.ViteProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.ViteProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.ViteProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.ViteProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.ViteProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.ViteProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.ViteProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.ViteProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.ViteProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@bn-digital/projen.ViteProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@bn-digital/projen.ViteProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.ViteProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@bn-digital/projen.ViteProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@bn-digital/projen.ViteProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@bn-digital/projen.ViteProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@bn-digital/projen.ViteProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@bn-digital/projen.ViteProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.ViteProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@bn-digital/projen.ViteProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@bn-digital/projen.ViteProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@bn-digital/projen.ViteProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.ViteProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.ViteProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.ViteProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.ViteProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.ViteProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.ViteProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.ViteProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ViteProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.ViteProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.ViteProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.ViteProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.ViteProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@bn-digital/projen.ViteProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.ViteProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.ViteProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.ViteProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ViteProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.ViteProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.ViteProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.ViteProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.ViteProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.ViteProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.ViteProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.ViteProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.ViteProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.ViteProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.ViteProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.ViteProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@bn-digital/projen.ViteProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@bn-digital/projen.ViteProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@bn-digital/projen.ViteProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.ViteProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@bn-digital/projen.ViteProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.ViteProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@bn-digital/projen.ViteProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.ViteProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@bn-digital/projen.ViteProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.ViteProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@bn-digital/projen.ViteProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@bn-digital/projen.ViteProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@bn-digital/projen.ViteProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@bn-digital/projen.ViteProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@bn-digital/projen.ViteProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.ViteProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@bn-digital/projen.ViteProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.ViteProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### `hasScript` <a name="hasScript" id="@bn-digital/projen.ViteProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ViteProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@bn-digital/projen.ViteProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ViteProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@bn-digital/projen.ViteProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.ViteProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@bn-digital/projen.ViteProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ViteProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@bn-digital/projen.ViteProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ViteProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.ViteProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.ViteProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.ViteProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.ViteProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.ViteProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.ViteProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.ViteProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.ViteProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.ViteProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.ViteProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.ViteProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.ViteProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.ViteProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.ViteProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.ViteProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.ViteProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.ViteProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@bn-digital/projen.ViteProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@bn-digital/projen.ViteProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@bn-digital/projen.ViteProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@bn-digital/projen.ViteProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@bn-digital/projen.ViteProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@bn-digital/projen.ViteProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@bn-digital/projen.ViteProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@bn-digital/projen.ViteProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@bn-digital/projen.ViteProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@bn-digital/projen.ViteProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@bn-digital/projen.ViteProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@bn-digital/projen.ViteProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@bn-digital/projen.ViteProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@bn-digital/projen.ViteProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this pacakge. |
| <code><a href="#@bn-digital/projen.ViteProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@bn-digital/projen.ViteProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@bn-digital/projen.ViteProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@bn-digital/projen.ViteProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@bn-digital/projen.ViteProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@bn-digital/projen.ViteProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@bn-digital/projen.ViteProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@bn-digital/projen.ViteProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@bn-digital/projen.ViteProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@bn-digital/projen.ViteProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@bn-digital/projen.ViteProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ViteProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.ViteProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.ViteProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.ViteProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.ViteProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.ViteProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.ViteProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.ViteProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.ViteProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.ViteProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.ViteProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ViteProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.ViteProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.ViteProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.ViteProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.ViteProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.ViteProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.ViteProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.ViteProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.ViteProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.ViteProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.ViteProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.ViteProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.ViteProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@bn-digital/projen.ViteProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@bn-digital/projen.ViteProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@bn-digital/projen.ViteProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@bn-digital/projen.ViteProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@bn-digital/projen.ViteProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@bn-digital/projen.ViteProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@bn-digital/projen.ViteProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@bn-digital/projen.ViteProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@bn-digital/projen.ViteProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@bn-digital/projen.ViteProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@bn-digital/projen.ViteProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@bn-digital/projen.ViteProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `package`<sup>Required</sup> <a name="package" id="@bn-digital/projen.ViteProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@bn-digital/projen.ViteProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@bn-digital/projen.ViteProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@bn-digital/projen.ViteProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@bn-digital/projen.ViteProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@bn-digital/projen.ViteProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@bn-digital/projen.ViteProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@bn-digital/projen.ViteProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@bn-digital/projen.ViteProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@bn-digital/projen.ViteProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@bn-digital/projen.ViteProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@bn-digital/projen.ViteProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@bn-digital/projen.ViteProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@bn-digital/projen.ViteProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@bn-digital/projen.ViteProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@bn-digital/projen.ViteProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@bn-digital/projen.ViteProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@bn-digital/projen.ViteProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@bn-digital/projen.ViteProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@bn-digital/projen.ViteProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@bn-digital/projen.ViteProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@bn-digital/projen.ViteProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@bn-digital/projen.ViteProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@bn-digital/projen.ViteProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ViteProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.ViteProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


