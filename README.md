This documentation is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Prerequisites:

* GitHub account. 
* Markdown editor. For example, [Visual Studio Code](https://code.visualstudio.com/download).
* Installed and set up [Docusaurus 2](https://docusaurus.io/).

### Install

1. Clone the repo.
2. `cd` to it and run `yarn` to install the required modules. 

### Develop locally

From the cloned repo directory, run `yarn start` to fire up a local dev server and auto-open up the built docs instance in your default browser.

Most changes are reflected live, as soon as you present them, without having to restart the server.

### Build

If you need to, generate static content in the `build` directory running `yarn build`. 

You can then serve the content using any static contents hosting service.

### Deploy

To deploy:
1. Navigate to the Actions tab on the repo page.
2. Under `All wokflows`, on the left, click `Deploy`.
3. Click the `Run wokflow` button on the right, then choose the branch and environment to deploy to.
   1. Deploy to `STAGE` to view and test your doc updates in a safe environment.
   2. When tested and ready, deploy to `PROD` available to general public. 
4. Click the green `Run workflow` button right below the chosen values.

## Gitflow

Currently, we're using the following Gitflow:

1. Create a feature branch from the `stage` branch. Use the branch naming format described farther in this doc.
2. Work on the documentation for the feature.
3. When done, test your documentation deploying it to `STAGE`.
4. When tested, create a pull request to the `stage` branch and add colleagues as reviews, at your discretion. Use the pull request naming format described farther in this doc.
5. When merged, test the `stage` branch deploying it to `STAGE`.
6. When ready, create a pull request to the `main` branch.
7. When merged, test the `main` branch deploying it to `STAGE`.
8. When tested, deploy the `main` branch to `PROD`.

### Branch naming format 

The common pattern for a branch name `<type>/<JIRA-TASK-NUMBER-description>`.

Types: 

* `feature` — tasks and stories

* `bugfix` — bugs such as typos

* `hotfix` — on-the-spot updates

Naming examples:

* `feature/FOOBAR-1-create-ankr-earn-docs`

* `bugfix/FOOBAR-2-fix-typos`

* `hotfix/FOOBAR-3-update-sc-addresses-for-earn`

### Pull request naming format

The common pattern for a pull request title or commit message is `<type>[optional scope]: <TASK-000 description>`.

Naming examples:

* `feat: FOOBAR-555 add docs for Ankr Protocol`

* `fix(Fantom staking): FOOBAR-666 fix typos`

* `chore: FOOBAR-777 update smart contract addresses for Ankr Earn`

## How to add a new page

1. Create a new markdown file in a related folder that lives under the `docs` folder, e.g. `staking.md` should live somewhere in `docs/Earn`, as it's related to ANKR Earn.
2. At the beginning of the file, insert ***yaml front matter*** with the page **title** and a unique **id** (emphasis on the word **unique**). For example:

## Search

[The job](https://github.com/Ankr-network/ankr-docs/actions/workflows/scrape.yml) must be triggered manually when [https://www.ankr.com/docs/](https://www.ankr.com/docs/) updated.