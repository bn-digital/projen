# Projen

Projen is a project generator used to initialize and bootstrap new projects withing the Node.js ecosystem. It gives you out-of-the-box support and configuration
options for the most common project types, includingReact, Strapi, Next.JS, as well as big number of other popular frameworks and tools.

<p align="center">
<b>One tool to rule them all</b>
<br/>
<br/>
  <img alt="Typescript" height="20" width="20" src="docs/icons/typescript.svg" />&nbsp;
  <img alt="React" height="20" width="20" src="docs/icons/react.svg" />&nbsp;
  <img alt="React Router" height="20" width="20" src="docs/icons/reactrouter.svg" /> &nbsp;
  <img alt="Ant Design" height="20" width="20" src="docs/icons/antdesign.svg" />&nbsp;
  <img alt="Vite" height="20" width="20" src="docs/icons/vite.svg" />&nbsp;
  <img alt="Strapi" height="20" width="20" src="docs/icons/strapi.svg" />&nbsp;
  <img alt="GraphQL" height="20" width="20" src="docs/icons/graphql.svg" />&nbsp;
  <img alt="Apollo Graphql" height="20" width="20" src="docs/icons/apollographql.svg" />&nbsp;
  <img alt="SQLite" height="20" width="20" src="docs/icons/sqlite.svg" />&nbsp;
  <img alt="Postgres" height="20" width="20" src="docs/icons/postgresql.svg" />&nbsp;
  <img alt="ESlint" height="20" width="20" src="docs/icons/eslint.svg" />&nbsp;
  <img alt="Stylelint" height="20" width="20" src="docs/icons/stylelint.svg" />&nbsp;
  <img alt="Prettier" height="20" width="20" src="docs/icons/prettier.svg" />&nbsp;
</p>

## Getting Started

To get started, you can use the `npx` command to run the `projen` command line interface (CLI) and generate a new project specifying the project type:

```bash
npx projen new --from=@bn-digital/projen@0.8.11 full-stack
```

This will generate a new project in the current directory. You can also specify a directory name to generate the project in a different directory:

```bash
npx projen new --from=@bn-digital/projen@0.8.11 full-stack custom-directory
```