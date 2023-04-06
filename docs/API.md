# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### AntDesignOptions <a name="AntDesignOptions" id="@bn-digital/projen.AntDesignOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.AntDesignOptions.Initializer"></a>

```typescript
import { AntDesignOptions } from '@bn-digital/projen'

const antDesignOptions: AntDesignOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.AntDesignOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.AntDesignOptions.property.version">version</a></code> | <code><a href="#@bn-digital/projen.AntDesignVersion">AntDesignVersion</a></code> | *No description.* |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@bn-digital/projen.AntDesignOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="@bn-digital/projen.AntDesignOptions.property.version"></a>

```typescript
public readonly version: AntDesignVersion;
```

- *Type:* <a href="#@bn-digital/projen.AntDesignVersion">AntDesignVersion</a>

---

### BrandNewProjectOptions <a name="BrandNewProjectOptions" id="@bn-digital/projen.BrandNewProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.BrandNewProjectOptions.Initializer"></a>

```typescript
import { BrandNewProjectOptions } from '@bn-digital/projen'

const brandNewProjectOptions: BrandNewProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.DockerOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.LintersOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.IdeOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.GraphqlOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.helm">helm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.helmOptions">helmOptions</a></code> | <code>@bn-digital/projen.helm.HelmOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BrandNewProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@bn-digital/projen.BrandNewProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@bn-digital/projen.BrandNewProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@bn-digital/projen.BrandNewProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@bn-digital/projen.BrandNewProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@bn-digital/projen.BrandNewProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.BrandNewProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@bn-digital/projen.BrandNewProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@bn-digital/projen.BrandNewProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@bn-digital/projen.BrandNewProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@bn-digital/projen.BrandNewProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@bn-digital/projen.BrandNewProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.BrandNewProjectOptions.property.docker"></a>

```typescript
public readonly docker: DockerOptions;
```

- *Type:* @bn-digital/projen.docker.DockerOptions

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.BrandNewProjectOptions.property.linters"></a>

```typescript
public readonly linters: LintersOptions;
```

- *Type:* @bn-digital/projen.ide.LintersOptions

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.BrandNewProjectOptions.property.ide"></a>

```typescript
public readonly ide: IdeOptions;
```

- *Type:* @bn-digital/projen.ide.IdeOptions

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.BrandNewProjectOptions.property.graphql"></a>

```typescript
public readonly graphql: GraphqlOptions;
```

- *Type:* @bn-digital/projen.graphql.GraphqlOptions

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.BrandNewProjectOptions.property.helm"></a>

```typescript
public readonly helm: boolean;
```

- *Type:* boolean

---

##### `helmOptions`<sup>Optional</sup> <a name="helmOptions" id="@bn-digital/projen.BrandNewProjectOptions.property.helmOptions"></a>

```typescript
public readonly helmOptions: HelmOptions;
```

- *Type:* @bn-digital/projen.helm.HelmOptions

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@bn-digital/projen.BrandNewProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@bn-digital/projen.BrandNewProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.BrandNewProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.BrandNewProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

### DatabaseOptions <a name="DatabaseOptions" id="@bn-digital/projen.DatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.DatabaseOptions.Initializer"></a>

```typescript
import { DatabaseOptions } from '@bn-digital/projen'

const databaseOptions: DatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.DatabaseOptions.property.client">client</a></code> | <code>string</code> | *No description.* |

---

##### `client`<sup>Required</sup> <a name="client" id="@bn-digital/projen.DatabaseOptions.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

### DockerOptions <a name="DockerOptions" id="@bn-digital/projen.docker.DockerOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.docker.DockerOptions.Initializer"></a>

```typescript
import { docker } from '@bn-digital/projen'

const dockerOptions: docker.DockerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.docker.DockerOptions.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.docker.DockerOptions.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.docker.DockerOptions.property.tag">tag</a></code> | <code>string</code> | *No description.* |

---

##### `image`<sup>Optional</sup> <a name="image" id="@bn-digital/projen.docker.DockerOptions.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `path`<sup>Optional</sup> <a name="path" id="@bn-digital/projen.docker.DockerOptions.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@bn-digital/projen.docker.DockerOptions.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

### DockerProjectOptions <a name="DockerProjectOptions" id="@bn-digital/projen.docker.DockerProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.docker.DockerProjectOptions.Initializer"></a>

```typescript
import { docker } from '@bn-digital/projen'

const dockerProjectOptions: docker.DockerProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.docker.DockerProjectOptions.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.DockerOptions</code> | *No description.* |

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.docker.DockerProjectOptions.property.docker"></a>

```typescript
public readonly docker: DockerOptions;
```

- *Type:* @bn-digital/projen.docker.DockerOptions

---

### EmailOptions <a name="EmailOptions" id="@bn-digital/projen.EmailOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.EmailOptions.Initializer"></a>

```typescript
import { EmailOptions } from '@bn-digital/projen'

const emailOptions: EmailOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.EmailOptions.property.provider">provider</a></code> | <code>string</code> | *No description.* |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@bn-digital/projen.EmailOptions.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

### FullStackProjectOptions <a name="FullStackProjectOptions" id="@bn-digital/projen.FullStackProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.FullStackProjectOptions.Initializer"></a>

```typescript
import { FullStackProjectOptions } from '@bn-digital/projen'

const fullStackProjectOptions: FullStackProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.DockerOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.LintersOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.IdeOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.GraphqlOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.helm">helm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.helmOptions">helmOptions</a></code> | <code>@bn-digital/projen.helm.HelmOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.dockerCompose">dockerCompose</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.react">react</a></code> | <code><a href="#@bn-digital/projen.ReactOptions">ReactOptions</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProjectOptions.property.strapi">strapi</a></code> | <code><a href="#@bn-digital/projen.StrapiOptions">StrapiOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.FullStackProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@bn-digital/projen.FullStackProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@bn-digital/projen.FullStackProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@bn-digital/projen.FullStackProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@bn-digital/projen.FullStackProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@bn-digital/projen.FullStackProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.FullStackProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@bn-digital/projen.FullStackProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@bn-digital/projen.FullStackProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@bn-digital/projen.FullStackProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@bn-digital/projen.FullStackProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@bn-digital/projen.FullStackProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.FullStackProjectOptions.property.docker"></a>

```typescript
public readonly docker: DockerOptions;
```

- *Type:* @bn-digital/projen.docker.DockerOptions

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.FullStackProjectOptions.property.linters"></a>

```typescript
public readonly linters: LintersOptions;
```

- *Type:* @bn-digital/projen.ide.LintersOptions

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.FullStackProjectOptions.property.ide"></a>

```typescript
public readonly ide: IdeOptions;
```

- *Type:* @bn-digital/projen.ide.IdeOptions

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.FullStackProjectOptions.property.graphql"></a>

```typescript
public readonly graphql: GraphqlOptions;
```

- *Type:* @bn-digital/projen.graphql.GraphqlOptions

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.FullStackProjectOptions.property.helm"></a>

```typescript
public readonly helm: boolean;
```

- *Type:* boolean

---

##### `helmOptions`<sup>Optional</sup> <a name="helmOptions" id="@bn-digital/projen.FullStackProjectOptions.property.helmOptions"></a>

```typescript
public readonly helmOptions: HelmOptions;
```

- *Type:* @bn-digital/projen.helm.HelmOptions

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@bn-digital/projen.FullStackProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@bn-digital/projen.FullStackProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.FullStackProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.FullStackProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `dockerCompose`<sup>Optional</sup> <a name="dockerCompose" id="@bn-digital/projen.FullStackProjectOptions.property.dockerCompose"></a>

```typescript
public readonly dockerCompose: boolean;
```

- *Type:* boolean

---

##### `react`<sup>Optional</sup> <a name="react" id="@bn-digital/projen.FullStackProjectOptions.property.react"></a>

```typescript
public readonly react: ReactOptions;
```

- *Type:* <a href="#@bn-digital/projen.ReactOptions">ReactOptions</a>

---

##### `strapi`<sup>Optional</sup> <a name="strapi" id="@bn-digital/projen.FullStackProjectOptions.property.strapi"></a>

```typescript
public readonly strapi: StrapiOptions;
```

- *Type:* <a href="#@bn-digital/projen.StrapiOptions">StrapiOptions</a>

---

### GraphqlOptions <a name="GraphqlOptions" id="@bn-digital/projen.GraphqlOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.GraphqlOptions.Initializer"></a>

```typescript
import { GraphqlOptions } from '@bn-digital/projen'

const graphqlOptions: GraphqlOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.GraphqlOptions.property.apolloServer">apolloServer</a></code> | <code>boolean</code> | *No description.* |

---

##### `apolloServer`<sup>Optional</sup> <a name="apolloServer" id="@bn-digital/projen.GraphqlOptions.property.apolloServer"></a>

```typescript
public readonly apolloServer: boolean;
```

- *Type:* boolean

---

### GraphqlOptions <a name="GraphqlOptions" id="@bn-digital/projen.graphql.GraphqlOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.graphql.GraphqlOptions.Initializer"></a>

```typescript
import { graphql } from '@bn-digital/projen'

const graphqlOptions: graphql.GraphqlOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.graphql.GraphqlOptions.property.codegen">codegen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.graphql.GraphqlOptions.property.config">config</a></code> | <code>boolean</code> | *No description.* |

---

##### `codegen`<sup>Optional</sup> <a name="codegen" id="@bn-digital/projen.graphql.GraphqlOptions.property.codegen"></a>

```typescript
public readonly codegen: boolean;
```

- *Type:* boolean

---

##### `config`<sup>Optional</sup> <a name="config" id="@bn-digital/projen.graphql.GraphqlOptions.property.config"></a>

```typescript
public readonly config: boolean;
```

- *Type:* boolean

---

### GraphqlProjectOptions <a name="GraphqlProjectOptions" id="@bn-digital/projen.graphql.GraphqlProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.graphql.GraphqlProjectOptions.Initializer"></a>

```typescript
import { graphql } from '@bn-digital/projen'

const graphqlProjectOptions: graphql.GraphqlProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.graphql.GraphqlProjectOptions.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.GraphqlOptions</code> | *No description.* |

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.graphql.GraphqlProjectOptions.property.graphql"></a>

```typescript
public readonly graphql: GraphqlOptions;
```

- *Type:* @bn-digital/projen.graphql.GraphqlOptions

---

### HelmChartRepositoryOptions <a name="HelmChartRepositoryOptions" id="@bn-digital/projen.helm.HelmChartRepositoryOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.helm.HelmChartRepositoryOptions.Initializer"></a>

```typescript
import { helm } from '@bn-digital/projen'

const helmChartRepositoryOptions: helm.HelmChartRepositoryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.helm.HelmChartRepositoryOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.HelmChartRepositoryOptions.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.helm.HelmChartRepositoryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@bn-digital/projen.helm.HelmChartRepositoryOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

### HelmOptions <a name="HelmOptions" id="@bn-digital/projen.helm.HelmOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.helm.HelmOptions.Initializer"></a>

```typescript
import { helm } from '@bn-digital/projen'

const helmOptions: helm.HelmOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.helm.HelmOptions.property.chart">chart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.HelmOptions.property.chartVersion">chartVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.HelmOptions.property.release">release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.HelmOptions.property.repository">repository</a></code> | <code>@bn-digital/projen.helm.HelmChartRepositoryOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.HelmOptions.property.values">values</a></code> | <code>@bn-digital/projen.helm.NodejsHelmChartValues</code> | *No description.* |

---

##### `chart`<sup>Required</sup> <a name="chart" id="@bn-digital/projen.helm.HelmOptions.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

---

##### `chartVersion`<sup>Required</sup> <a name="chartVersion" id="@bn-digital/projen.helm.HelmOptions.property.chartVersion"></a>

```typescript
public readonly chartVersion: string;
```

- *Type:* string

---

##### `release`<sup>Required</sup> <a name="release" id="@bn-digital/projen.helm.HelmOptions.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@bn-digital/projen.helm.HelmOptions.property.repository"></a>

```typescript
public readonly repository: HelmChartRepositoryOptions;
```

- *Type:* @bn-digital/projen.helm.HelmChartRepositoryOptions

---

##### `values`<sup>Required</sup> <a name="values" id="@bn-digital/projen.helm.HelmOptions.property.values"></a>

```typescript
public readonly values: NodejsHelmChartValues;
```

- *Type:* @bn-digital/projen.helm.NodejsHelmChartValues

---

### HelmProjectOptions <a name="HelmProjectOptions" id="@bn-digital/projen.helm.HelmProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.helm.HelmProjectOptions.Initializer"></a>

```typescript
import { helm } from '@bn-digital/projen'

const helmProjectOptions: helm.HelmProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.helm.HelmProjectOptions.property.helm">helm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.HelmProjectOptions.property.helmOptions">helmOptions</a></code> | <code>@bn-digital/projen.helm.HelmOptions</code> | *No description.* |

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.helm.HelmProjectOptions.property.helm"></a>

```typescript
public readonly helm: boolean;
```

- *Type:* boolean

---

##### `helmOptions`<sup>Optional</sup> <a name="helmOptions" id="@bn-digital/projen.helm.HelmProjectOptions.property.helmOptions"></a>

```typescript
public readonly helmOptions: HelmOptions;
```

- *Type:* @bn-digital/projen.helm.HelmOptions

---

### HtmlOptions <a name="HtmlOptions" id="@bn-digital/projen.HtmlOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.HtmlOptions.Initializer"></a>

```typescript
import { HtmlOptions } from '@bn-digital/projen'

const htmlOptions: HtmlOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.HtmlOptions.property.stylesPreprocessor">stylesPreprocessor</a></code> | <code>string</code> | *No description.* |

---

##### `stylesPreprocessor`<sup>Optional</sup> <a name="stylesPreprocessor" id="@bn-digital/projen.HtmlOptions.property.stylesPreprocessor"></a>

```typescript
public readonly stylesPreprocessor: string;
```

- *Type:* string

---

### HtmlProjectOptions <a name="HtmlProjectOptions" id="@bn-digital/projen.HtmlProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.HtmlProjectOptions.Initializer"></a>

```typescript
import { HtmlProjectOptions } from '@bn-digital/projen'

const htmlProjectOptions: HtmlProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.DockerOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.LintersOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.IdeOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.GraphqlOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.helm">helm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.helmOptions">helmOptions</a></code> | <code>@bn-digital/projen.helm.HelmOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProjectOptions.property.htmlOptions">htmlOptions</a></code> | <code><a href="#@bn-digital/projen.HtmlOptions">HtmlOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.HtmlProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@bn-digital/projen.HtmlProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@bn-digital/projen.HtmlProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@bn-digital/projen.HtmlProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@bn-digital/projen.HtmlProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@bn-digital/projen.HtmlProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.HtmlProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@bn-digital/projen.HtmlProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@bn-digital/projen.HtmlProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@bn-digital/projen.HtmlProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@bn-digital/projen.HtmlProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@bn-digital/projen.HtmlProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.HtmlProjectOptions.property.docker"></a>

```typescript
public readonly docker: DockerOptions;
```

- *Type:* @bn-digital/projen.docker.DockerOptions

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.HtmlProjectOptions.property.linters"></a>

```typescript
public readonly linters: LintersOptions;
```

- *Type:* @bn-digital/projen.ide.LintersOptions

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.HtmlProjectOptions.property.ide"></a>

```typescript
public readonly ide: IdeOptions;
```

- *Type:* @bn-digital/projen.ide.IdeOptions

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.HtmlProjectOptions.property.graphql"></a>

```typescript
public readonly graphql: GraphqlOptions;
```

- *Type:* @bn-digital/projen.graphql.GraphqlOptions

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.HtmlProjectOptions.property.helm"></a>

```typescript
public readonly helm: boolean;
```

- *Type:* boolean

---

##### `helmOptions`<sup>Optional</sup> <a name="helmOptions" id="@bn-digital/projen.HtmlProjectOptions.property.helmOptions"></a>

```typescript
public readonly helmOptions: HelmOptions;
```

- *Type:* @bn-digital/projen.helm.HelmOptions

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@bn-digital/projen.HtmlProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@bn-digital/projen.HtmlProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.HtmlProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.HtmlProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `htmlOptions`<sup>Required</sup> <a name="htmlOptions" id="@bn-digital/projen.HtmlProjectOptions.property.htmlOptions"></a>

```typescript
public readonly htmlOptions: HtmlOptions;
```

- *Type:* <a href="#@bn-digital/projen.HtmlOptions">HtmlOptions</a>

---

### IdeOptions <a name="IdeOptions" id="@bn-digital/projen.ide.IdeOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.ide.IdeOptions.Initializer"></a>

```typescript
import { ide } from '@bn-digital/projen'

const ideOptions: ide.IdeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.IdeOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | *No description.* |

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@bn-digital/projen.ide.IdeOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean

---

### IdeProjectOptions <a name="IdeProjectOptions" id="@bn-digital/projen.ide.IdeProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.ide.IdeProjectOptions.Initializer"></a>

```typescript
import { ide } from '@bn-digital/projen'

const ideProjectOptions: ide.IdeProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.IdeProjectOptions.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.IdeOptions</code> | *No description.* |

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.ide.IdeProjectOptions.property.ide"></a>

```typescript
public readonly ide: IdeOptions;
```

- *Type:* @bn-digital/projen.ide.IdeOptions

---

### ImageOptions <a name="ImageOptions" id="@bn-digital/projen.helm.ImageOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.helm.ImageOptions.Initializer"></a>

```typescript
import { helm } from '@bn-digital/projen'

const imageOptions: helm.ImageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.helm.ImageOptions.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.ImageOptions.property.tag">tag</a></code> | <code>string</code> | *No description.* |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@bn-digital/projen.helm.ImageOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@bn-digital/projen.helm.ImageOptions.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

### LintersOptions <a name="LintersOptions" id="@bn-digital/projen.ide.LintersOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.ide.LintersOptions.Initializer"></a>

```typescript
import { ide } from '@bn-digital/projen'

const lintersOptions: ide.LintersOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.LintersOptions.property.eslint">eslint</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ide.LintersOptions.property.prettier">prettier</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ide.LintersOptions.property.stylelint">stylelint</a></code> | <code>boolean</code> | *No description.* |

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@bn-digital/projen.ide.LintersOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@bn-digital/projen.ide.LintersOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* true

---

##### `stylelint`<sup>Optional</sup> <a name="stylelint" id="@bn-digital/projen.ide.LintersOptions.property.stylelint"></a>

```typescript
public readonly stylelint: boolean;
```

- *Type:* boolean
- *Default:* true

---

### LintersProjectOptions <a name="LintersProjectOptions" id="@bn-digital/projen.ide.LintersProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.ide.LintersProjectOptions.Initializer"></a>

```typescript
import { ide } from '@bn-digital/projen'

const lintersProjectOptions: ide.LintersProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.LintersProjectOptions.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.LintersOptions</code> | *No description.* |

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.ide.LintersProjectOptions.property.linters"></a>

```typescript
public readonly linters: LintersOptions;
```

- *Type:* @bn-digital/projen.ide.LintersOptions

---

### NextOptions <a name="NextOptions" id="@bn-digital/projen.NextOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.NextOptions.Initializer"></a>

```typescript
import { NextOptions } from '@bn-digital/projen'

const nextOptions: NextOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.NextOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Optional</sup> <a name="version" id="@bn-digital/projen.NextOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### NodejsHelmChartValues <a name="NodejsHelmChartValues" id="@bn-digital/projen.helm.NodejsHelmChartValues"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.helm.NodejsHelmChartValues.Initializer"></a>

```typescript
import { helm } from '@bn-digital/projen'

const nodejsHelmChartValues: helm.NodejsHelmChartValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.helm.NodejsHelmChartValues.property.image">image</a></code> | <code>@bn-digital/projen.helm.ImageOptions</code> | *No description.* |

---

##### `image`<sup>Required</sup> <a name="image" id="@bn-digital/projen.helm.NodejsHelmChartValues.property.image"></a>

```typescript
public readonly image: ImageOptions;
```

- *Type:* @bn-digital/projen.helm.ImageOptions

---

### ReactOptions <a name="ReactOptions" id="@bn-digital/projen.ReactOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.ReactOptions.Initializer"></a>

```typescript
import { ReactOptions } from '@bn-digital/projen'

const reactOptions: ReactOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ReactOptions.property.antd">antd</a></code> | <code><a href="#@bn-digital/projen.AntDesignOptions">AntDesignOptions</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactOptions.property.i18n">i18n</a></code> | <code><a href="#@bn-digital/projen.I18nOptions">I18nOptions</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactOptions.property.router">router</a></code> | <code><a href="#@bn-digital/projen.RouterOptions">RouterOptions</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `antd`<sup>Optional</sup> <a name="antd" id="@bn-digital/projen.ReactOptions.property.antd"></a>

```typescript
public readonly antd: AntDesignOptions;
```

- *Type:* <a href="#@bn-digital/projen.AntDesignOptions">AntDesignOptions</a>

---

##### `i18n`<sup>Optional</sup> <a name="i18n" id="@bn-digital/projen.ReactOptions.property.i18n"></a>

```typescript
public readonly i18n: I18nOptions;
```

- *Type:* <a href="#@bn-digital/projen.I18nOptions">I18nOptions</a>

---

##### `router`<sup>Optional</sup> <a name="router" id="@bn-digital/projen.ReactOptions.property.router"></a>

```typescript
public readonly router: RouterOptions;
```

- *Type:* <a href="#@bn-digital/projen.RouterOptions">RouterOptions</a>

---

##### `version`<sup>Optional</sup> <a name="version" id="@bn-digital/projen.ReactOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### ReactProjectOptions <a name="ReactProjectOptions" id="@bn-digital/projen.ReactProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.ReactProjectOptions.Initializer"></a>

```typescript
import { ReactProjectOptions } from '@bn-digital/projen'

const reactProjectOptions: ReactProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.DockerOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.LintersOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.IdeOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.GraphqlOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.helm">helm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.helmOptions">helmOptions</a></code> | <code>@bn-digital/projen.helm.HelmOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProjectOptions.property.react">react</a></code> | <code><a href="#@bn-digital/projen.ReactOptions">ReactOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ReactProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@bn-digital/projen.ReactProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@bn-digital/projen.ReactProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@bn-digital/projen.ReactProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@bn-digital/projen.ReactProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@bn-digital/projen.ReactProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.ReactProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@bn-digital/projen.ReactProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@bn-digital/projen.ReactProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@bn-digital/projen.ReactProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@bn-digital/projen.ReactProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@bn-digital/projen.ReactProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.ReactProjectOptions.property.docker"></a>

```typescript
public readonly docker: DockerOptions;
```

- *Type:* @bn-digital/projen.docker.DockerOptions

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.ReactProjectOptions.property.linters"></a>

```typescript
public readonly linters: LintersOptions;
```

- *Type:* @bn-digital/projen.ide.LintersOptions

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.ReactProjectOptions.property.ide"></a>

```typescript
public readonly ide: IdeOptions;
```

- *Type:* @bn-digital/projen.ide.IdeOptions

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.ReactProjectOptions.property.graphql"></a>

```typescript
public readonly graphql: GraphqlOptions;
```

- *Type:* @bn-digital/projen.graphql.GraphqlOptions

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.ReactProjectOptions.property.helm"></a>

```typescript
public readonly helm: boolean;
```

- *Type:* boolean

---

##### `helmOptions`<sup>Optional</sup> <a name="helmOptions" id="@bn-digital/projen.ReactProjectOptions.property.helmOptions"></a>

```typescript
public readonly helmOptions: HelmOptions;
```

- *Type:* @bn-digital/projen.helm.HelmOptions

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@bn-digital/projen.ReactProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@bn-digital/projen.ReactProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.ReactProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.ReactProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `react`<sup>Optional</sup> <a name="react" id="@bn-digital/projen.ReactProjectOptions.property.react"></a>

```typescript
public readonly react: ReactOptions;
```

- *Type:* <a href="#@bn-digital/projen.ReactOptions">ReactOptions</a>

---

### RouterOptions <a name="RouterOptions" id="@bn-digital/projen.RouterOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.RouterOptions.Initializer"></a>

```typescript
import { RouterOptions } from '@bn-digital/projen'

const routerOptions: RouterOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.RouterOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@bn-digital/projen.RouterOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

### StrapiOptions <a name="StrapiOptions" id="@bn-digital/projen.StrapiOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.StrapiOptions.Initializer"></a>

```typescript
import { StrapiOptions } from '@bn-digital/projen'

const strapiOptions: StrapiOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.StrapiOptions.property.database">database</a></code> | <code><a href="#@bn-digital/projen.DatabaseOptions">DatabaseOptions</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiOptions.property.email">email</a></code> | <code><a href="#@bn-digital/projen.EmailOptions">EmailOptions</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiOptions.property.graphql">graphql</a></code> | <code><a href="#@bn-digital/projen.GraphqlOptions">GraphqlOptions</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiOptions.property.users">users</a></code> | <code><a href="#@bn-digital/projen.UsersOptions">UsersOptions</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `database`<sup>Optional</sup> <a name="database" id="@bn-digital/projen.StrapiOptions.property.database"></a>

```typescript
public readonly database: DatabaseOptions;
```

- *Type:* <a href="#@bn-digital/projen.DatabaseOptions">DatabaseOptions</a>

---

##### `email`<sup>Optional</sup> <a name="email" id="@bn-digital/projen.StrapiOptions.property.email"></a>

```typescript
public readonly email: EmailOptions;
```

- *Type:* <a href="#@bn-digital/projen.EmailOptions">EmailOptions</a>

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.StrapiOptions.property.graphql"></a>

```typescript
public readonly graphql: GraphqlOptions;
```

- *Type:* <a href="#@bn-digital/projen.GraphqlOptions">GraphqlOptions</a>

---

##### `users`<sup>Optional</sup> <a name="users" id="@bn-digital/projen.StrapiOptions.property.users"></a>

```typescript
public readonly users: UsersOptions;
```

- *Type:* <a href="#@bn-digital/projen.UsersOptions">UsersOptions</a>

---

##### `version`<sup>Optional</sup> <a name="version" id="@bn-digital/projen.StrapiOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### StrapiProjectOptions <a name="StrapiProjectOptions" id="@bn-digital/projen.StrapiProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.StrapiProjectOptions.Initializer"></a>

```typescript
import { StrapiProjectOptions } from '@bn-digital/projen'

const strapiProjectOptions: StrapiProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.DockerOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.LintersOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.IdeOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.GraphqlOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.helm">helm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.helmOptions">helmOptions</a></code> | <code>@bn-digital/projen.helm.HelmOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProjectOptions.property.strapi">strapi</a></code> | <code><a href="#@bn-digital/projen.StrapiOptions">StrapiOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.StrapiProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@bn-digital/projen.StrapiProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@bn-digital/projen.StrapiProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@bn-digital/projen.StrapiProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@bn-digital/projen.StrapiProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@bn-digital/projen.StrapiProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.StrapiProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@bn-digital/projen.StrapiProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@bn-digital/projen.StrapiProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@bn-digital/projen.StrapiProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@bn-digital/projen.StrapiProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@bn-digital/projen.StrapiProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.StrapiProjectOptions.property.docker"></a>

```typescript
public readonly docker: DockerOptions;
```

- *Type:* @bn-digital/projen.docker.DockerOptions

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.StrapiProjectOptions.property.linters"></a>

```typescript
public readonly linters: LintersOptions;
```

- *Type:* @bn-digital/projen.ide.LintersOptions

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.StrapiProjectOptions.property.ide"></a>

```typescript
public readonly ide: IdeOptions;
```

- *Type:* @bn-digital/projen.ide.IdeOptions

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.StrapiProjectOptions.property.graphql"></a>

```typescript
public readonly graphql: GraphqlOptions;
```

- *Type:* @bn-digital/projen.graphql.GraphqlOptions

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.StrapiProjectOptions.property.helm"></a>

```typescript
public readonly helm: boolean;
```

- *Type:* boolean

---

##### `helmOptions`<sup>Optional</sup> <a name="helmOptions" id="@bn-digital/projen.StrapiProjectOptions.property.helmOptions"></a>

```typescript
public readonly helmOptions: HelmOptions;
```

- *Type:* @bn-digital/projen.helm.HelmOptions

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@bn-digital/projen.StrapiProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@bn-digital/projen.StrapiProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.StrapiProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.StrapiProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `strapi`<sup>Optional</sup> <a name="strapi" id="@bn-digital/projen.StrapiProjectOptions.property.strapi"></a>

```typescript
public readonly strapi: StrapiOptions;
```

- *Type:* <a href="#@bn-digital/projen.StrapiOptions">StrapiOptions</a>

---

### TemplateProjectOptions <a name="TemplateProjectOptions" id="@bn-digital/projen.TemplateProjectOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.TemplateProjectOptions.Initializer"></a>

```typescript
import { TemplateProjectOptions } from '@bn-digital/projen'

const templateProjectOptions: TemplateProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with @codeCovTokenSecret. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use github workflows to handle dependency upgrades. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.IdeOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.LintersOptions</code> | *No description.* |
| <code><a href="#@bn-digital/projen.TemplateProjectOptions.property.visibility">visibility</a></code> | <code>projen.javascript.NpmAccess</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.TemplateProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@bn-digital/projen.TemplateProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@bn-digital/projen.TemplateProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@bn-digital/projen.TemplateProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@bn-digital/projen.TemplateProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@bn-digital/projen.TemplateProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.TemplateProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@bn-digital/projen.TemplateProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@bn-digital/projen.TemplateProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@bn-digital/projen.TemplateProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@bn-digital/projen.TemplateProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@bn-digital/projen.TemplateProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@bn-digital/projen.TemplateProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@bn-digital/projen.TemplateProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@bn-digital/projen.TemplateProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@bn-digital/projen.TemplateProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@bn-digital/projen.TemplateProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@bn-digital/projen.TemplateProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@bn-digital/projen.TemplateProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@bn-digital/projen.TemplateProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@bn-digital/projen.TemplateProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@bn-digital/projen.TemplateProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@bn-digital/projen.TemplateProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@bn-digital/projen.TemplateProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@bn-digital/projen.TemplateProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@bn-digital/projen.TemplateProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@bn-digital/projen.TemplateProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@bn-digital/projen.TemplateProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@bn-digital/projen.TemplateProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@bn-digital/projen.TemplateProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@bn-digital/projen.TemplateProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@bn-digital/projen.TemplateProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@bn-digital/projen.TemplateProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@bn-digital/projen.TemplateProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@bn-digital/projen.TemplateProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@bn-digital/projen.TemplateProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@bn-digital/projen.TemplateProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@bn-digital/projen.TemplateProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@bn-digital/projen.TemplateProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@bn-digital/projen.TemplateProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@bn-digital/projen.TemplateProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@bn-digital/projen.TemplateProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@bn-digital/projen.TemplateProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@bn-digital/projen.TemplateProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@bn-digital/projen.TemplateProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@bn-digital/projen.TemplateProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@bn-digital/projen.TemplateProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@bn-digital/projen.TemplateProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@bn-digital/projen.TemplateProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@bn-digital/projen.TemplateProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@bn-digital/projen.TemplateProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@bn-digital/projen.TemplateProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@bn-digital/projen.TemplateProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@bn-digital/projen.TemplateProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.TemplateProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.TemplateProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@bn-digital/projen.TemplateProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@bn-digital/projen.TemplateProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@bn-digital/projen.TemplateProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@bn-digital/projen.TemplateProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@bn-digital/projen.TemplateProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@bn-digital/projen.TemplateProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="@bn-digital/projen.TemplateProjectOptions.property.scripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@bn-digital/projen.TemplateProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@bn-digital/projen.TemplateProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@bn-digital/projen.TemplateProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@bn-digital/projen.TemplateProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@bn-digital/projen.TemplateProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@bn-digital/projen.TemplateProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@bn-digital/projen.TemplateProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@bn-digital/projen.TemplateProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@bn-digital/projen.TemplateProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@bn-digital/projen.TemplateProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@bn-digital/projen.TemplateProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@bn-digital/projen.TemplateProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@bn-digital/projen.TemplateProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@bn-digital/projen.TemplateProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@bn-digital/projen.TemplateProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@bn-digital/projen.TemplateProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@bn-digital/projen.TemplateProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@bn-digital/projen.TemplateProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@bn-digital/projen.TemplateProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@bn-digital/projen.TemplateProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@bn-digital/projen.TemplateProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@bn-digital/projen.TemplateProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@bn-digital/projen.TemplateProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@bn-digital/projen.TemplateProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@bn-digital/projen.TemplateProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@bn-digital/projen.TemplateProjectOptions.property.buildWorkflowTriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@bn-digital/projen.TemplateProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@bn-digital/projen.TemplateProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@bn-digital/projen.TemplateProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@bn-digital/projen.TemplateProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@bn-digital/projen.TemplateProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@bn-digital/projen.TemplateProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@bn-digital/projen.TemplateProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@bn-digital/projen.TemplateProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@bn-digital/projen.TemplateProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@bn-digital/projen.TemplateProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@bn-digital/projen.TemplateProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@bn-digital/projen.TemplateProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="@bn-digital/projen.TemplateProjectOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@bn-digital/projen.TemplateProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@bn-digital/projen.TemplateProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@bn-digital/projen.TemplateProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@bn-digital/projen.TemplateProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@bn-digital/projen.TemplateProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@bn-digital/projen.TemplateProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@bn-digital/projen.TemplateProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@bn-digital/projen.TemplateProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@bn-digital/projen.TemplateProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@bn-digital/projen.TemplateProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@bn-digital/projen.TemplateProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@bn-digital/projen.TemplateProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@bn-digital/projen.TemplateProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@bn-digital/projen.TemplateProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@bn-digital/projen.TemplateProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@bn-digital/projen.TemplateProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@bn-digital/projen.TemplateProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@bn-digital/projen.TemplateProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@bn-digital/projen.TemplateProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@bn-digital/projen.TemplateProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@bn-digital/projen.TemplateProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@bn-digital/projen.TemplateProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@bn-digital/projen.TemplateProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@bn-digital/projen.TemplateProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@bn-digital/projen.TemplateProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@bn-digital/projen.TemplateProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@bn-digital/projen.TemplateProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@bn-digital/projen.TemplateProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@bn-digital/projen.TemplateProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@bn-digital/projen.TemplateProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@bn-digital/projen.TemplateProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@bn-digital/projen.TemplateProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@bn-digital/projen.TemplateProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@bn-digital/projen.TemplateProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@bn-digital/projen.TemplateProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="@bn-digital/projen.TemplateProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="@bn-digital/projen.TemplateProjectOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@bn-digital/projen.TemplateProjectOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="@bn-digital/projen.TemplateProjectOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="@bn-digital/projen.TemplateProjectOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="@bn-digital/projen.TemplateProjectOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="@bn-digital/projen.TemplateProjectOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="@bn-digital/projen.TemplateProjectOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="@bn-digital/projen.TemplateProjectOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns.

Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="@bn-digital/projen.TemplateProjectOptions.property.jsiiVersion"></a>

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "1.x"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="@bn-digital/projen.TemplateProjectOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="@bn-digital/projen.TemplateProjectOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="@bn-digital/projen.TemplateProjectOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="@bn-digital/projen.TemplateProjectOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="@bn-digital/projen.TemplateProjectOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="@bn-digital/projen.TemplateProjectOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.TemplateProjectOptions.property.ide"></a>

```typescript
public readonly ide: IdeOptions;
```

- *Type:* @bn-digital/projen.ide.IdeOptions

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.TemplateProjectOptions.property.linters"></a>

```typescript
public readonly linters: LintersOptions;
```

- *Type:* @bn-digital/projen.ide.LintersOptions

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@bn-digital/projen.TemplateProjectOptions.property.visibility"></a>

```typescript
public readonly visibility: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess

---

### UsersOptions <a name="UsersOptions" id="@bn-digital/projen.UsersOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.UsersOptions.Initializer"></a>

```typescript
import { UsersOptions } from '@bn-digital/projen'

const usersOptions: UsersOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.UsersOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@bn-digital/projen.UsersOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

### YarnOptions <a name="YarnOptions" id="@bn-digital/projen.node.YarnOptions"></a>

#### Initializer <a name="Initializer" id="@bn-digital/projen.node.YarnOptions.Initializer"></a>

```typescript
import { node } from '@bn-digital/projen'

const yarnOptions: node.YarnOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.node.YarnOptions.property.private">private</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.node.YarnOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `private`<sup>Optional</sup> <a name="private" id="@bn-digital/projen.node.YarnOptions.property.private"></a>

```typescript
public readonly private: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="@bn-digital/projen.node.YarnOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### AntDesign <a name="AntDesign" id="@bn-digital/projen.AntDesign"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.AntDesign.Initializer"></a>

```typescript
import { AntDesign } from '@bn-digital/projen'

new AntDesign(project: Project, options?: AntDesignOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.AntDesign.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.AntDesign.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.AntDesignOptions">AntDesignOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.AntDesign.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.AntDesign.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.AntDesignOptions">AntDesignOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.AntDesign.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.AntDesign.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.AntDesign.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.AntDesign.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.AntDesign.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.AntDesign.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.AntDesign.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.AntDesign.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### BrandNewProject <a name="BrandNewProject" id="@bn-digital/projen.BrandNewProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.BrandNewProject.Initializer"></a>

```typescript
import { BrandNewProject } from '@bn-digital/projen'

new BrandNewProject(options: BrandNewProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.BrandNewProject.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.BrandNewProjectOptions">BrandNewProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.BrandNewProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.BrandNewProjectOptions">BrandNewProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.BrandNewProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.BrandNewProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.BrandNewProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.BrandNewProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.BrandNewProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.BrandNewProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@bn-digital/projen.BrandNewProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.BrandNewProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.BrandNewProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.BrandNewProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.BrandNewProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.BrandNewProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.BrandNewProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.BrandNewProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.BrandNewProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.BrandNewProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.BrandNewProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.BrandNewProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.BrandNewProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.BrandNewProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@bn-digital/projen.BrandNewProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.BrandNewProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BrandNewProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.BrandNewProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.BrandNewProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.BrandNewProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.BrandNewProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@bn-digital/projen.BrandNewProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.BrandNewProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.BrandNewProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.BrandNewProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BrandNewProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.BrandNewProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.BrandNewProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.BrandNewProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.BrandNewProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.BrandNewProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.BrandNewProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.BrandNewProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.BrandNewProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.BrandNewProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.BrandNewProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.BrandNewProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.installTask">installTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.Docker</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.Graphql</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.helm">helm</a></code> | <code>@bn-digital/projen.helm.Helm</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.Ide</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.Linters</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.packageJson">packageJson</a></code> | <code>projen.ObjectFile</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.yarn">yarn</a></code> | <code>@bn-digital/projen.node.Yarn</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.BrandNewProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.BrandNewProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.BrandNewProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.BrandNewProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.BrandNewProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.BrandNewProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.BrandNewProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.BrandNewProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.BrandNewProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.BrandNewProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.BrandNewProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.BrandNewProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.BrandNewProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.BrandNewProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.BrandNewProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.BrandNewProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.BrandNewProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.BrandNewProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.BrandNewProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.BrandNewProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.BrandNewProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.BrandNewProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.BrandNewProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `installTask`<sup>Required</sup> <a name="installTask" id="@bn-digital/projen.BrandNewProject.property.installTask"></a>

```typescript
public readonly installTask: Task;
```

- *Type:* projen.Task

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.BrandNewProject.property.docker"></a>

```typescript
public readonly docker: Docker;
```

- *Type:* @bn-digital/projen.docker.Docker

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.BrandNewProject.property.graphql"></a>

```typescript
public readonly graphql: Graphql;
```

- *Type:* @bn-digital/projen.graphql.Graphql

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.BrandNewProject.property.helm"></a>

```typescript
public readonly helm: Helm;
```

- *Type:* @bn-digital/projen.helm.Helm

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.BrandNewProject.property.ide"></a>

```typescript
public readonly ide: Ide;
```

- *Type:* @bn-digital/projen.ide.Ide

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.BrandNewProject.property.linters"></a>

```typescript
public readonly linters: Linters;
```

- *Type:* @bn-digital/projen.ide.Linters

---

##### `packageJson`<sup>Optional</sup> <a name="packageJson" id="@bn-digital/projen.BrandNewProject.property.packageJson"></a>

```typescript
public readonly packageJson: ObjectFile;
```

- *Type:* projen.ObjectFile

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.BrandNewProject.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.BrandNewProject.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `yarn`<sup>Optional</sup> <a name="yarn" id="@bn-digital/projen.BrandNewProject.property.yarn"></a>

```typescript
public readonly yarn: Yarn;
```

- *Type:* @bn-digital/projen.node.Yarn

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.BrandNewProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.BrandNewProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Docker <a name="Docker" id="@bn-digital/projen.docker.Docker"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.docker.Docker.Initializer"></a>

```typescript
import { docker } from '@bn-digital/projen'

new docker.Docker(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.docker.Docker.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.docker.Docker.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.docker.Docker.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.docker.Docker.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.docker.Docker.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.docker.Docker.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.docker.Docker.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.docker.Docker.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.docker.Docker.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.docker.Docker.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Editorconfig <a name="Editorconfig" id="@bn-digital/projen.ide.Editorconfig"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.ide.Editorconfig.Initializer"></a>

```typescript
import { ide } from '@bn-digital/projen'

new ide.Editorconfig(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.ide.Editorconfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.ide.Editorconfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.ide.Editorconfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.ide.Editorconfig.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addDeletionOverride` <a name="addDeletionOverride" id="@bn-digital/projen.ide.Editorconfig.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@bn-digital/projen.ide.Editorconfig.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="@bn-digital/projen.ide.Editorconfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="@bn-digital/projen.ide.Editorconfig.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@bn-digital/projen.ide.Editorconfig.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="@bn-digital/projen.ide.Editorconfig.addToArray"></a>

```typescript
public addToArray(path: string, values: any): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2019", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="@bn-digital/projen.ide.Editorconfig.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="@bn-digital/projen.ide.Editorconfig.addToArray.parameter.values"></a>

- *Type:* any

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="@bn-digital/projen.ide.Editorconfig.patch"></a>

```typescript
public patch(patches: JsonPatch): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `patches`<sup>Required</sup> <a name="patches" id="@bn-digital/projen.ide.Editorconfig.patch.parameter.patches"></a>

- *Type:* projen.JsonPatch

The patch operations to apply.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.property.path">path</a></code> | <code>string</code> | The file path, relative to the project root. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#@bn-digital/projen.ide.Editorconfig.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.ide.Editorconfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@bn-digital/projen.ide.Editorconfig.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="@bn-digital/projen.ide.Editorconfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project root.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="@bn-digital/projen.ide.Editorconfig.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@bn-digital/projen.ide.Editorconfig.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="@bn-digital/projen.ide.Editorconfig.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@bn-digital/projen.ide.Editorconfig.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="@bn-digital/projen.ide.Editorconfig.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---


### FullStackProject <a name="FullStackProject" id="@bn-digital/projen.FullStackProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.FullStackProject.Initializer"></a>

```typescript
import { FullStackProject } from '@bn-digital/projen'

new FullStackProject(options: FullStackProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.FullStackProject.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.FullStackProjectOptions">FullStackProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.FullStackProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.FullStackProjectOptions">FullStackProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.FullStackProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.FullStackProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.FullStackProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.FullStackProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.FullStackProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.FullStackProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@bn-digital/projen.FullStackProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.FullStackProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.FullStackProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.FullStackProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.FullStackProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.FullStackProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.FullStackProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.FullStackProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.FullStackProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.FullStackProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.FullStackProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.FullStackProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.FullStackProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.FullStackProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@bn-digital/projen.FullStackProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.FullStackProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.FullStackProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.FullStackProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.FullStackProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.FullStackProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.FullStackProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@bn-digital/projen.FullStackProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.FullStackProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.FullStackProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.FullStackProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.FullStackProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.FullStackProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.FullStackProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.FullStackProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.FullStackProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.FullStackProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.FullStackProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.FullStackProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.FullStackProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.FullStackProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.FullStackProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.FullStackProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.FullStackProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.FullStackProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.FullStackProject.property.installTask">installTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.Docker</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.Graphql</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.helm">helm</a></code> | <code>@bn-digital/projen.helm.Helm</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.Ide</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.Linters</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.packageJson">packageJson</a></code> | <code>projen.ObjectFile</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.FullStackProject.property.yarn">yarn</a></code> | <code>@bn-digital/projen.node.Yarn</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.FullStackProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.FullStackProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.FullStackProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.FullStackProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.FullStackProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.FullStackProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.FullStackProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.FullStackProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.FullStackProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.FullStackProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.FullStackProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.FullStackProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.FullStackProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.FullStackProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.FullStackProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.FullStackProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.FullStackProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.FullStackProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.FullStackProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.FullStackProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.FullStackProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.FullStackProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.FullStackProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `installTask`<sup>Required</sup> <a name="installTask" id="@bn-digital/projen.FullStackProject.property.installTask"></a>

```typescript
public readonly installTask: Task;
```

- *Type:* projen.Task

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.FullStackProject.property.docker"></a>

```typescript
public readonly docker: Docker;
```

- *Type:* @bn-digital/projen.docker.Docker

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.FullStackProject.property.graphql"></a>

```typescript
public readonly graphql: Graphql;
```

- *Type:* @bn-digital/projen.graphql.Graphql

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.FullStackProject.property.helm"></a>

```typescript
public readonly helm: Helm;
```

- *Type:* @bn-digital/projen.helm.Helm

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.FullStackProject.property.ide"></a>

```typescript
public readonly ide: Ide;
```

- *Type:* @bn-digital/projen.ide.Ide

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.FullStackProject.property.linters"></a>

```typescript
public readonly linters: Linters;
```

- *Type:* @bn-digital/projen.ide.Linters

---

##### `packageJson`<sup>Optional</sup> <a name="packageJson" id="@bn-digital/projen.FullStackProject.property.packageJson"></a>

```typescript
public readonly packageJson: ObjectFile;
```

- *Type:* projen.ObjectFile

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.FullStackProject.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.FullStackProject.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `yarn`<sup>Optional</sup> <a name="yarn" id="@bn-digital/projen.FullStackProject.property.yarn"></a>

```typescript
public readonly yarn: Yarn;
```

- *Type:* @bn-digital/projen.node.Yarn

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.FullStackProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.FullStackProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Graphql <a name="Graphql" id="@bn-digital/projen.graphql.Graphql"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.graphql.Graphql.Initializer"></a>

```typescript
import { graphql } from '@bn-digital/projen'

new graphql.Graphql(project: Project, options?: GraphqlOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.graphql.Graphql.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.graphql.Graphql.Initializer.parameter.options">options</a></code> | <code>@bn-digital/projen.graphql.GraphqlOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.graphql.Graphql.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.graphql.Graphql.Initializer.parameter.options"></a>

- *Type:* @bn-digital/projen.graphql.GraphqlOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.graphql.Graphql.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.graphql.Graphql.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.graphql.Graphql.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.graphql.Graphql.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.graphql.Graphql.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.graphql.Graphql.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.graphql.Graphql.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.graphql.Graphql.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Helm <a name="Helm" id="@bn-digital/projen.helm.Helm"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.helm.Helm.Initializer"></a>

```typescript
import { helm } from '@bn-digital/projen'

new helm.Helm(project: Project, options?: HelmOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.helm.Helm.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.Helm.Initializer.parameter.options">options</a></code> | <code>@bn-digital/projen.helm.HelmOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.helm.Helm.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.helm.Helm.Initializer.parameter.options"></a>

- *Type:* @bn-digital/projen.helm.HelmOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.helm.Helm.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.helm.Helm.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.helm.Helm.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@bn-digital/projen.helm.Helm.defaultOptions">defaultOptions</a></code> | *No description.* |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.helm.Helm.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.helm.Helm.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.helm.Helm.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `defaultOptions` <a name="defaultOptions" id="@bn-digital/projen.helm.Helm.defaultOptions"></a>

```typescript
public defaultOptions(): HelmOptions
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.helm.Helm.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.helm.Helm.property.options">options</a></code> | <code>@bn-digital/projen.helm.HelmOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.helm.Helm.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.helm.Helm.property.options"></a>

```typescript
public readonly options: HelmOptions;
```

- *Type:* @bn-digital/projen.helm.HelmOptions

---


### HtmlProject <a name="HtmlProject" id="@bn-digital/projen.HtmlProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.HtmlProject.Initializer"></a>

```typescript
import { HtmlProject } from '@bn-digital/projen'

new HtmlProject(options: HtmlProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.HtmlProject.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.HtmlProjectOptions">HtmlProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.HtmlProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.HtmlProjectOptions">HtmlProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.HtmlProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.HtmlProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.HtmlProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.HtmlProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.HtmlProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.HtmlProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@bn-digital/projen.HtmlProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.HtmlProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.HtmlProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.HtmlProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.HtmlProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.HtmlProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.HtmlProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.HtmlProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.HtmlProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

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
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@bn-digital/projen.HtmlProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

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
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@bn-digital/projen.HtmlProject.annotateGenerated.parameter._glob"></a>

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

By default, this is `npx projen@<version> <task>`

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
| <code><a href="#@bn-digital/projen.HtmlProject.property.installTask">installTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.Docker</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.Graphql</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.helm">helm</a></code> | <code>@bn-digital/projen.helm.Helm</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.Ide</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.Linters</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.packageJson">packageJson</a></code> | <code>projen.ObjectFile</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.HtmlProject.property.yarn">yarn</a></code> | <code>@bn-digital/projen.node.Yarn</code> | *No description.* |

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

##### `installTask`<sup>Required</sup> <a name="installTask" id="@bn-digital/projen.HtmlProject.property.installTask"></a>

```typescript
public readonly installTask: Task;
```

- *Type:* projen.Task

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.HtmlProject.property.docker"></a>

```typescript
public readonly docker: Docker;
```

- *Type:* @bn-digital/projen.docker.Docker

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.HtmlProject.property.graphql"></a>

```typescript
public readonly graphql: Graphql;
```

- *Type:* @bn-digital/projen.graphql.Graphql

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.HtmlProject.property.helm"></a>

```typescript
public readonly helm: Helm;
```

- *Type:* @bn-digital/projen.helm.Helm

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.HtmlProject.property.ide"></a>

```typescript
public readonly ide: Ide;
```

- *Type:* @bn-digital/projen.ide.Ide

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.HtmlProject.property.linters"></a>

```typescript
public readonly linters: Linters;
```

- *Type:* @bn-digital/projen.ide.Linters

---

##### `packageJson`<sup>Optional</sup> <a name="packageJson" id="@bn-digital/projen.HtmlProject.property.packageJson"></a>

```typescript
public readonly packageJson: ObjectFile;
```

- *Type:* projen.ObjectFile

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.HtmlProject.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.HtmlProject.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `yarn`<sup>Optional</sup> <a name="yarn" id="@bn-digital/projen.HtmlProject.property.yarn"></a>

```typescript
public readonly yarn: Yarn;
```

- *Type:* @bn-digital/projen.node.Yarn

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

### I18n <a name="I18n" id="@bn-digital/projen.I18n"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.I18n.Initializer"></a>

```typescript
import { I18n } from '@bn-digital/projen'

new I18n(project: Project, options?: I18nOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.I18n.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.I18n.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.I18nOptions">I18nOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.I18n.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.I18n.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.I18nOptions">I18nOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.I18n.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.I18n.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.I18n.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.I18n.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.I18n.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.I18n.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.I18n.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.I18n.property.options">options</a></code> | <code><a href="#@bn-digital/projen.I18nOptions">I18nOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.I18n.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.I18n.property.options"></a>

```typescript
public readonly options: I18nOptions;
```

- *Type:* <a href="#@bn-digital/projen.I18nOptions">I18nOptions</a>

---


### Ide <a name="Ide" id="@bn-digital/projen.ide.Ide"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.ide.Ide.Initializer"></a>

```typescript
import { ide } from '@bn-digital/projen'

new ide.Ide(project: Project, options: IdeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.Ide.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ide.Ide.Initializer.parameter.options">options</a></code> | <code>@bn-digital/projen.ide.IdeOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.ide.Ide.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.ide.Ide.Initializer.parameter.options"></a>

- *Type:* @bn-digital/projen.ide.IdeOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.ide.Ide.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.ide.Ide.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.ide.Ide.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.ide.Ide.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.ide.Ide.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.ide.Ide.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.Ide.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.ide.Ide.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Linters <a name="Linters" id="@bn-digital/projen.ide.Linters"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.ide.Linters.Initializer"></a>

```typescript
import { ide } from '@bn-digital/projen'

new ide.Linters(project: Project, options: LintersOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.Linters.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ide.Linters.Initializer.parameter.options">options</a></code> | <code>@bn-digital/projen.ide.LintersOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.ide.Linters.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.ide.Linters.Initializer.parameter.options"></a>

- *Type:* @bn-digital/projen.ide.LintersOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.ide.Linters.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.ide.Linters.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.ide.Linters.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.ide.Linters.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.ide.Linters.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.ide.Linters.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ide.Linters.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ide.Linters.property.eslint">eslint</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ide.Linters.property.prettier">prettier</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ide.Linters.property.stylelint">stylelint</a></code> | <code>boolean</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.ide.Linters.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@bn-digital/projen.ide.Linters.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@bn-digital/projen.ide.Linters.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean

---

##### `stylelint`<sup>Optional</sup> <a name="stylelint" id="@bn-digital/projen.ide.Linters.property.stylelint"></a>

```typescript
public readonly stylelint: boolean;
```

- *Type:* boolean

---


### NextProject <a name="NextProject" id="@bn-digital/projen.NextProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.NextProject.Initializer"></a>

```typescript
import { NextProject } from '@bn-digital/projen'

new NextProject(options: BrandNewProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.NextProject.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.BrandNewProjectOptions">BrandNewProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.NextProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.BrandNewProjectOptions">BrandNewProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.NextProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.NextProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.NextProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.NextProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.NextProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.NextProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@bn-digital/projen.NextProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.NextProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.NextProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.NextProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.NextProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.NextProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.NextProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.NextProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.NextProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.NextProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.NextProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.NextProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.NextProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.NextProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@bn-digital/projen.NextProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.NextProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.NextProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.NextProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.NextProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.NextProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.NextProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@bn-digital/projen.NextProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.NextProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.NextProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.NextProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.NextProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.NextProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.NextProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.NextProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.NextProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.NextProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.NextProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.NextProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.NextProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.NextProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.NextProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.NextProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.NextProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.NextProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.NextProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.NextProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.NextProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.NextProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.NextProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.NextProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.NextProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.NextProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.NextProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.NextProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.NextProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.NextProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.NextProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.NextProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.NextProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.NextProject.property.installTask">installTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.Docker</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.Graphql</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.helm">helm</a></code> | <code>@bn-digital/projen.helm.Helm</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.Ide</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.Linters</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.packageJson">packageJson</a></code> | <code>projen.ObjectFile</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.NextProject.property.yarn">yarn</a></code> | <code>@bn-digital/projen.node.Yarn</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.NextProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.NextProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.NextProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.NextProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.NextProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.NextProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.NextProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.NextProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.NextProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.NextProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.NextProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.NextProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.NextProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.NextProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.NextProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.NextProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.NextProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.NextProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.NextProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.NextProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.NextProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.NextProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.NextProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `installTask`<sup>Required</sup> <a name="installTask" id="@bn-digital/projen.NextProject.property.installTask"></a>

```typescript
public readonly installTask: Task;
```

- *Type:* projen.Task

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.NextProject.property.docker"></a>

```typescript
public readonly docker: Docker;
```

- *Type:* @bn-digital/projen.docker.Docker

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.NextProject.property.graphql"></a>

```typescript
public readonly graphql: Graphql;
```

- *Type:* @bn-digital/projen.graphql.Graphql

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.NextProject.property.helm"></a>

```typescript
public readonly helm: Helm;
```

- *Type:* @bn-digital/projen.helm.Helm

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.NextProject.property.ide"></a>

```typescript
public readonly ide: Ide;
```

- *Type:* @bn-digital/projen.ide.Ide

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.NextProject.property.linters"></a>

```typescript
public readonly linters: Linters;
```

- *Type:* @bn-digital/projen.ide.Linters

---

##### `packageJson`<sup>Optional</sup> <a name="packageJson" id="@bn-digital/projen.NextProject.property.packageJson"></a>

```typescript
public readonly packageJson: ObjectFile;
```

- *Type:* projen.ObjectFile

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.NextProject.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.NextProject.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `yarn`<sup>Optional</sup> <a name="yarn" id="@bn-digital/projen.NextProject.property.yarn"></a>

```typescript
public readonly yarn: Yarn;
```

- *Type:* @bn-digital/projen.node.Yarn

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.NextProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.NextProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Pulumi <a name="Pulumi" id="@bn-digital/projen.pulumi.Pulumi"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.pulumi.Pulumi.Initializer"></a>

```typescript
import { pulumi } from '@bn-digital/projen'

new pulumi.Pulumi(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.pulumi.Pulumi.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.pulumi.Pulumi.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.pulumi.Pulumi.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.pulumi.Pulumi.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.pulumi.Pulumi.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.pulumi.Pulumi.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.pulumi.Pulumi.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.pulumi.Pulumi.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.pulumi.Pulumi.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.pulumi.Pulumi.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### ReactProject <a name="ReactProject" id="@bn-digital/projen.ReactProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.ReactProject.Initializer"></a>

```typescript
import { ReactProject } from '@bn-digital/projen'

new ReactProject(options: ReactProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ReactProject.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.ReactProjectOptions">ReactProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.ReactProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.ReactProjectOptions">ReactProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.ReactProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.ReactProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.ReactProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.ReactProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.ReactProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.ReactProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@bn-digital/projen.ReactProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.ReactProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.ReactProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.ReactProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.ReactProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.ReactProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.ReactProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.ReactProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.ReactProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.ReactProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.ReactProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.ReactProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.ReactProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.ReactProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@bn-digital/projen.ReactProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.ReactProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ReactProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.ReactProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.ReactProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.ReactProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.ReactProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@bn-digital/projen.ReactProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.ReactProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.ReactProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.ReactProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ReactProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.ReactProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.ReactProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.ReactProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.ReactProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.ReactProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.ReactProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.ReactProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.ReactProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.ReactProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.ReactProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.ReactProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ReactProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.ReactProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.ReactProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.ReactProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.ReactProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.ReactProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.ReactProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.ReactProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.ReactProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.ReactProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.ReactProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.ReactProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.ReactProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.ReactProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.ReactProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.ReactProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.ReactProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.ReactProject.property.installTask">installTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.Docker</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.Graphql</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.helm">helm</a></code> | <code>@bn-digital/projen.helm.Helm</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.Ide</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.Linters</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.packageJson">packageJson</a></code> | <code>projen.ObjectFile</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.yarn">yarn</a></code> | <code>@bn-digital/projen.node.Yarn</code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.antd">antd</a></code> | <code><a href="#@bn-digital/projen.AntDesign">AntDesign</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.i18n">i18n</a></code> | <code><a href="#@bn-digital/projen.I18n">I18n</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.ReactProject.property.router">router</a></code> | <code><a href="#@bn-digital/projen.Router">Router</a></code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.ReactProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.ReactProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.ReactProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.ReactProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.ReactProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.ReactProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.ReactProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.ReactProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.ReactProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.ReactProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.ReactProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.ReactProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.ReactProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.ReactProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.ReactProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.ReactProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.ReactProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.ReactProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.ReactProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.ReactProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.ReactProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.ReactProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.ReactProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `installTask`<sup>Required</sup> <a name="installTask" id="@bn-digital/projen.ReactProject.property.installTask"></a>

```typescript
public readonly installTask: Task;
```

- *Type:* projen.Task

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.ReactProject.property.docker"></a>

```typescript
public readonly docker: Docker;
```

- *Type:* @bn-digital/projen.docker.Docker

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.ReactProject.property.graphql"></a>

```typescript
public readonly graphql: Graphql;
```

- *Type:* @bn-digital/projen.graphql.Graphql

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.ReactProject.property.helm"></a>

```typescript
public readonly helm: Helm;
```

- *Type:* @bn-digital/projen.helm.Helm

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.ReactProject.property.ide"></a>

```typescript
public readonly ide: Ide;
```

- *Type:* @bn-digital/projen.ide.Ide

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.ReactProject.property.linters"></a>

```typescript
public readonly linters: Linters;
```

- *Type:* @bn-digital/projen.ide.Linters

---

##### `packageJson`<sup>Optional</sup> <a name="packageJson" id="@bn-digital/projen.ReactProject.property.packageJson"></a>

```typescript
public readonly packageJson: ObjectFile;
```

- *Type:* projen.ObjectFile

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.ReactProject.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.ReactProject.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `yarn`<sup>Optional</sup> <a name="yarn" id="@bn-digital/projen.ReactProject.property.yarn"></a>

```typescript
public readonly yarn: Yarn;
```

- *Type:* @bn-digital/projen.node.Yarn

---

##### `antd`<sup>Optional</sup> <a name="antd" id="@bn-digital/projen.ReactProject.property.antd"></a>

```typescript
public readonly antd: AntDesign;
```

- *Type:* <a href="#@bn-digital/projen.AntDesign">AntDesign</a>

---

##### `i18n`<sup>Optional</sup> <a name="i18n" id="@bn-digital/projen.ReactProject.property.i18n"></a>

```typescript
public readonly i18n: I18n;
```

- *Type:* <a href="#@bn-digital/projen.I18n">I18n</a>

---

##### `router`<sup>Optional</sup> <a name="router" id="@bn-digital/projen.ReactProject.property.router"></a>

```typescript
public readonly router: Router;
```

- *Type:* <a href="#@bn-digital/projen.Router">Router</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.ReactProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.ReactProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Router <a name="Router" id="@bn-digital/projen.Router"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.Router.Initializer"></a>

```typescript
import { Router } from '@bn-digital/projen'

new Router(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.Router.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.Router.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.Router.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.Router.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.Router.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.Router.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.Router.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.Router.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.Router.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.Router.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### StrapiProject <a name="StrapiProject" id="@bn-digital/projen.StrapiProject"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.StrapiProject.Initializer"></a>

```typescript
import { StrapiProject } from '@bn-digital/projen'

new StrapiProject(options: StrapiProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.StrapiProject.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.StrapiProjectOptions">StrapiProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.StrapiProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.StrapiProjectOptions">StrapiProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.StrapiProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.StrapiProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.StrapiProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.StrapiProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.StrapiProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.StrapiProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@bn-digital/projen.StrapiProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.StrapiProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.StrapiProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.StrapiProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.StrapiProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.StrapiProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.StrapiProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.StrapiProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.StrapiProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

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
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@bn-digital/projen.StrapiProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

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
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@bn-digital/projen.StrapiProject.annotateGenerated.parameter._glob"></a>

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

By default, this is `npx projen@<version> <task>`

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
| <code><a href="#@bn-digital/projen.StrapiProject.property.installTask">installTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.docker">docker</a></code> | <code>@bn-digital/projen.docker.Docker</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.graphql">graphql</a></code> | <code>@bn-digital/projen.graphql.Graphql</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.helm">helm</a></code> | <code>@bn-digital/projen.helm.Helm</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.Ide</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.Linters</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.packageJson">packageJson</a></code> | <code>projen.ObjectFile</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.StrapiProject.property.yarn">yarn</a></code> | <code>@bn-digital/projen.node.Yarn</code> | *No description.* |

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

##### `installTask`<sup>Required</sup> <a name="installTask" id="@bn-digital/projen.StrapiProject.property.installTask"></a>

```typescript
public readonly installTask: Task;
```

- *Type:* projen.Task

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@bn-digital/projen.StrapiProject.property.docker"></a>

```typescript
public readonly docker: Docker;
```

- *Type:* @bn-digital/projen.docker.Docker

---

##### `graphql`<sup>Optional</sup> <a name="graphql" id="@bn-digital/projen.StrapiProject.property.graphql"></a>

```typescript
public readonly graphql: Graphql;
```

- *Type:* @bn-digital/projen.graphql.Graphql

---

##### `helm`<sup>Optional</sup> <a name="helm" id="@bn-digital/projen.StrapiProject.property.helm"></a>

```typescript
public readonly helm: Helm;
```

- *Type:* @bn-digital/projen.helm.Helm

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.StrapiProject.property.ide"></a>

```typescript
public readonly ide: Ide;
```

- *Type:* @bn-digital/projen.ide.Ide

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.StrapiProject.property.linters"></a>

```typescript
public readonly linters: Linters;
```

- *Type:* @bn-digital/projen.ide.Linters

---

##### `packageJson`<sup>Optional</sup> <a name="packageJson" id="@bn-digital/projen.StrapiProject.property.packageJson"></a>

```typescript
public readonly packageJson: ObjectFile;
```

- *Type:* projen.ObjectFile

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@bn-digital/projen.StrapiProject.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@bn-digital/projen.StrapiProject.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `yarn`<sup>Optional</sup> <a name="yarn" id="@bn-digital/projen.StrapiProject.property.yarn"></a>

```typescript
public readonly yarn: Yarn;
```

- *Type:* @bn-digital/projen.node.Yarn

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

### Template <a name="Template" id="@bn-digital/projen.Template"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.Template.Initializer"></a>

```typescript
import { Template } from '@bn-digital/projen'

new Template(options: TemplateProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.Template.Initializer.parameter.options">options</a></code> | <code><a href="#@bn-digital/projen.TemplateProjectOptions">TemplateProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.Template.Initializer.parameter.options"></a>

- *Type:* <a href="#@bn-digital/projen.TemplateProjectOptions">TemplateProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.Template.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@bn-digital/projen.Template.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@bn-digital/projen.Template.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@bn-digital/projen.Template.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@bn-digital/projen.Template.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@bn-digital/projen.Template.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@bn-digital/projen.Template.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@bn-digital/projen.Template.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@bn-digital/projen.Template.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@bn-digital/projen.Template.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@bn-digital/projen.Template.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@bn-digital/projen.Template.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@bn-digital/projen.Template.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@bn-digital/projen.Template.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@bn-digital/projen.Template.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@bn-digital/projen.Template.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@bn-digital/projen.Template.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.Template.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@bn-digital/projen.Template.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@bn-digital/projen.Template.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@bn-digital/projen.Template.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@bn-digital/projen.Template.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@bn-digital/projen.Template.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@bn-digital/projen.Template.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@bn-digital/projen.Template.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@bn-digital/projen.Template.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@bn-digital/projen.Template.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@bn-digital/projen.Template.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@bn-digital/projen.Template.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@bn-digital/projen.Template.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@bn-digital/projen.Template.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.Template.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@bn-digital/projen.Template.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@bn-digital/projen.Template.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@bn-digital/projen.Template.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.Template.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@bn-digital/projen.Template.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@bn-digital/projen.Template.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@bn-digital/projen.Template.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@bn-digital/projen.Template.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@bn-digital/projen.Template.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.Template.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.Template.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@bn-digital/projen.Template.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.Template.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@bn-digital/projen.Template.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@bn-digital/projen.Template.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@bn-digital/projen.Template.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@bn-digital/projen.Template.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.Template.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@bn-digital/projen.Template.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.Template.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@bn-digital/projen.Template.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.Template.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@bn-digital/projen.Template.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@bn-digital/projen.Template.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@bn-digital/projen.Template.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@bn-digital/projen.Template.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@bn-digital/projen.Template.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.Template.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@bn-digital/projen.Template.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.Template.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@bn-digital/projen.Template.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.Template.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@bn-digital/projen.Template.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.Template.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@bn-digital/projen.Template.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@bn-digital/projen.Template.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@bn-digital/projen.Template.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@bn-digital/projen.Template.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@bn-digital/projen.Template.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.Template.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@bn-digital/projen.Template.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@bn-digital/projen.Template.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@bn-digital/projen.Template.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@bn-digital/projen.Template.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### `hasScript` <a name="hasScript" id="@bn-digital/projen.Template.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.Template.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@bn-digital/projen.Template.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.Template.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@bn-digital/projen.Template.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.Template.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@bn-digital/projen.Template.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.Template.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@bn-digital/projen.Template.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.Template.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@bn-digital/projen.Template.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@bn-digital/projen.Template.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@bn-digital/projen.Template.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@bn-digital/projen.Template.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@bn-digital/projen.Template.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@bn-digital/projen.Template.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@bn-digital/projen.Template.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@bn-digital/projen.Template.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@bn-digital/projen.Template.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@bn-digital/projen.Template.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@bn-digital/projen.Template.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@bn-digital/projen.Template.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@bn-digital/projen.Template.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@bn-digital/projen.Template.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@bn-digital/projen.Template.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@bn-digital/projen.Template.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@bn-digital/projen.Template.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@bn-digital/projen.Template.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@bn-digital/projen.Template.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@bn-digital/projen.Template.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@bn-digital/projen.Template.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@bn-digital/projen.Template.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@bn-digital/projen.Template.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@bn-digital/projen.Template.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@bn-digital/projen.Template.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@bn-digital/projen.Template.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@bn-digital/projen.Template.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@bn-digital/projen.Template.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@bn-digital/projen.Template.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@bn-digital/projen.Template.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@bn-digital/projen.Template.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@bn-digital/projen.Template.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@bn-digital/projen.Template.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@bn-digital/projen.Template.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@bn-digital/projen.Template.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@bn-digital/projen.Template.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@bn-digital/projen.Template.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@bn-digital/projen.Template.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@bn-digital/projen.Template.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@bn-digital/projen.Template.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@bn-digital/projen.Template.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@bn-digital/projen.Template.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.ide">ide</a></code> | <code>@bn-digital/projen.ide.Ide</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.linters">linters</a></code> | <code>@bn-digital/projen.ide.Linters</code> | *No description.* |
| <code><a href="#@bn-digital/projen.Template.property.yarn">yarn</a></code> | <code>@bn-digital/projen.node.Yarn</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@bn-digital/projen.Template.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@bn-digital/projen.Template.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@bn-digital/projen.Template.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@bn-digital/projen.Template.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@bn-digital/projen.Template.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@bn-digital/projen.Template.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@bn-digital/projen.Template.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@bn-digital/projen.Template.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@bn-digital/projen.Template.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@bn-digital/projen.Template.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@bn-digital/projen.Template.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@bn-digital/projen.Template.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@bn-digital/projen.Template.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@bn-digital/projen.Template.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@bn-digital/projen.Template.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@bn-digital/projen.Template.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@bn-digital/projen.Template.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@bn-digital/projen.Template.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@bn-digital/projen.Template.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@bn-digital/projen.Template.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@bn-digital/projen.Template.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@bn-digital/projen.Template.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@bn-digital/projen.Template.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@bn-digital/projen.Template.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@bn-digital/projen.Template.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@bn-digital/projen.Template.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@bn-digital/projen.Template.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@bn-digital/projen.Template.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@bn-digital/projen.Template.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@bn-digital/projen.Template.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@bn-digital/projen.Template.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@bn-digital/projen.Template.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@bn-digital/projen.Template.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@bn-digital/projen.Template.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@bn-digital/projen.Template.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `package`<sup>Required</sup> <a name="package" id="@bn-digital/projen.Template.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@bn-digital/projen.Template.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@bn-digital/projen.Template.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@bn-digital/projen.Template.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@bn-digital/projen.Template.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@bn-digital/projen.Template.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@bn-digital/projen.Template.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@bn-digital/projen.Template.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@bn-digital/projen.Template.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@bn-digital/projen.Template.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@bn-digital/projen.Template.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@bn-digital/projen.Template.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@bn-digital/projen.Template.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@bn-digital/projen.Template.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@bn-digital/projen.Template.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@bn-digital/projen.Template.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@bn-digital/projen.Template.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@bn-digital/projen.Template.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@bn-digital/projen.Template.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@bn-digital/projen.Template.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@bn-digital/projen.Template.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@bn-digital/projen.Template.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@bn-digital/projen.Template.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@bn-digital/projen.Template.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `ide`<sup>Optional</sup> <a name="ide" id="@bn-digital/projen.Template.property.ide"></a>

```typescript
public readonly ide: Ide;
```

- *Type:* @bn-digital/projen.ide.Ide

---

##### `linters`<sup>Optional</sup> <a name="linters" id="@bn-digital/projen.Template.property.linters"></a>

```typescript
public readonly linters: Linters;
```

- *Type:* @bn-digital/projen.ide.Linters

---

##### `yarn`<sup>Optional</sup> <a name="yarn" id="@bn-digital/projen.Template.property.yarn"></a>

```typescript
public readonly yarn: Yarn;
```

- *Type:* @bn-digital/projen.node.Yarn

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.Template.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@bn-digital/projen.Template.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Vite <a name="Vite" id="@bn-digital/projen.vite.Vite"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.vite.Vite.Initializer"></a>

```typescript
import { vite } from '@bn-digital/projen'

new vite.Vite(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.vite.Vite.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.vite.Vite.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.vite.Vite.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.vite.Vite.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.vite.Vite.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.vite.Vite.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.vite.Vite.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.vite.Vite.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.vite.Vite.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.vite.Vite.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Yarn <a name="Yarn" id="@bn-digital/projen.node.Yarn"></a>

#### Initializers <a name="Initializers" id="@bn-digital/projen.node.Yarn.Initializer"></a>

```typescript
import { node } from '@bn-digital/projen'

new node.Yarn(project: Project, options?: YarnOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.node.Yarn.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.node.Yarn.Initializer.parameter.options">options</a></code> | <code>@bn-digital/projen.node.YarnOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.node.Yarn.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@bn-digital/projen.node.Yarn.Initializer.parameter.options"></a>

- *Type:* @bn-digital/projen.node.YarnOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.node.Yarn.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@bn-digital/projen.node.Yarn.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@bn-digital/projen.node.Yarn.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@bn-digital/projen.node.Yarn.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@bn-digital/projen.node.Yarn.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@bn-digital/projen.node.Yarn.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.node.Yarn.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@bn-digital/projen.node.Yarn.property.options">options</a></code> | <code>@bn-digital/projen.node.YarnOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@bn-digital/projen.node.Yarn.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@bn-digital/projen.node.Yarn.property.options"></a>

```typescript
public readonly options: YarnOptions;
```

- *Type:* @bn-digital/projen.node.YarnOptions

---


## Protocols <a name="Protocols" id="Protocols"></a>

### I18nOptions <a name="I18nOptions" id="@bn-digital/projen.I18nOptions"></a>

- *Implemented By:* <a href="#@bn-digital/projen.I18nOptions">I18nOptions</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bn-digital/projen.I18nOptions.property.defaultLocale">defaultLocale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bn-digital/projen.I18nOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@bn-digital/projen.I18nOptions.property.locales">locales</a></code> | <code>string[]</code> | *No description.* |

---

##### `defaultLocale`<sup>Optional</sup> <a name="defaultLocale" id="@bn-digital/projen.I18nOptions.property.defaultLocale"></a>

```typescript
public readonly defaultLocale: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@bn-digital/projen.I18nOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `locales`<sup>Optional</sup> <a name="locales" id="@bn-digital/projen.I18nOptions.property.locales"></a>

```typescript
public readonly locales: string[];
```

- *Type:* string[]

---

## Enums <a name="Enums" id="Enums"></a>

### AntDesignVersion <a name="AntDesignVersion" id="@bn-digital/projen.AntDesignVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bn-digital/projen.AntDesignVersion.V4">V4</a></code> | *No description.* |
| <code><a href="#@bn-digital/projen.AntDesignVersion.V5">V5</a></code> | *No description.* |

---

##### `V4` <a name="V4" id="@bn-digital/projen.AntDesignVersion.V4"></a>

---


##### `V5` <a name="V5" id="@bn-digital/projen.AntDesignVersion.V5"></a>

---

