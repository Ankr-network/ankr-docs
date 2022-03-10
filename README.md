This documentation is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Prerequisites:

* GitHub account. Sign up [GitHub.com](https://github.com/).
* Markdown editor e.g. [Visual Studio Code](https://code.visualstudio.com/download).
* Installed and set up [Docusaurus 2](https://docusaurus.io/).

### Installation

1. Clone the repo.
2. `cd` to it and run `yarn` to install the required modules. 

### Local Development

From the cloned repo directory, run `yarn start` to fire up a local dev server and auto-open up the built docs instance in your default browser.

Most changes are reflected live, as soon as you present them, without having to restart the server.

### Build

To generate static content in the `build` directory, run `yarn build`. You can then serve the content using any static contents hosting service.

### Deployment

To deploy:
1. Navigate to the Actions tab on the repo page.
2. Under `All wokflows`, on the left, click `Deploy`.
3. Click the `Run wokflow` button on the right, then choose the branch and environment to deploy to.
   1. Deploy to `STAGE` to view and test your doc updates in a safe environment.
   2. When tested and ready, deploy to `PROD` available to general public. 
4. Click the green `Run workflow` button right below the chosen values.

## GitFlow

Currently, we're using the following GitFlow:

1. Create a feature branch from the `develop` folder.
2. Work on the documentation for the feature.
3. When done, test your documentation deploying it to `STAGE`.
4. When tested, create a pull request to the `develop` branch and add colleagues as reviews, at your discretion.
5. When merged, test the `develop` branch deploying it to `STAGE`.
6. When ready, create a pull request to the `main` branch.
7. When merged, test the `main` branch deploying it to `STAGE`.
8. When tested, deploy the `main` branch to `PROD`.

## How to add a new page

1. Create a new markdown file in a related folder that lives under the `docs` folder, e.g. `staking.md` should live somewhere in `docs/Earn`, as it's related to ANKR Earn.
2. At the beginning of the file, insert ***yaml front matter*** with the page **title** and a unique **id** (emphasis on the word **unique**). For example:

```
---
title: About StakeFi
id: about-stakefi
---
```
3. Add content using the standard Markdown flavor. Adding admonitions, follow this syntax:

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