# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

Navigate to your local installation e.g.

```
$ cd my-website
```

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Collaboration

## Prerequisites:

* GitHub account. Sign up [GitHub.com](https://github.com/)
* Markdown editor e.g. [Visual Studio Code](https://code.visualstudio.com/download)

## Set up

1. Fork this project or clone it (download **GitHub Desktop** to make this easier)

2. Create a new branch off ***develop*** to add new content. e.g. develop/content-polkadot

3. Open VS Code or other Markdown Editor. 

## How to add a new page

1. Simply create a new markdown file in a related folder e.g. staking.md should go in docs/Earn

2. Insert ***yaml front matter*** as below with the **title** and a unique **id** for the document. (It is important that the **id** is unique).

---
title: About StakeFi
id: about-stakefi
---

3. Add content using standard markdown. Be aware that admonitions can be added as follows:
```
:::note

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::
```
