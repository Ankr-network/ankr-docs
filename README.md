# Ankr Docs
Ankr is the leading Web3 infrastructure company. It provides all the necessary blockchain infrastructure and services for companies to build new and bring their existing projects to Web3.

Ankr Docs contain information on Ankr, from general product information to user guides, SDK documentation, API references, RPC methods, Web3 tutorials, developer guides, and more.
The docs are targeted at existing and potential Ankr users and explain what different products do and how to use them, both as an end-user or developer.  

The docs are built on [Nextra](https://nextra.vercel.app/) — a Next.js based static site generator.


## Contribute to the project as an end-user

As an ever-developing company, we welcome you to contribute to Ankr Docs — via feedback raising an issue or a pull request adding/updating content.

As raising an issue and describing a problem is pretty self-explanatory, let's jump straight to adding/updating content.


### Adding/updating content
Adding/updating content is done via pull requests to this repo.
If you're in the mood to improve our content:
1. Understand the pull request policy.
2. Work with the content either via the GitHub web interface or clone-commit-push. 


#### Pull request policy
We do not pose a strict policy on pull requests. 


#### Work with the content
If you're an Ankr user, use the GitHub web interface:
1. Go to the **pages** folder and either see what subfolder you need to add a new .md file or navigate to the .md file that you want to edit. 
2. Click **Add file** to add a new file or click the pencil icon to edit an existing file.
3. Fill the newly created file with content or edit the content in the existing file you opened.
4. When done, commit the changes **to a new branch**. A pull request will be created automatically.


## Contribute to the project as an Ankr employee 
Now, if you're with us, you know to uphold our standards. 

If you are new to them, here are the guidelines:
1. Get acquainted with Ankr Docs gitflow.
2. Get acquainted with Ankr Docs deploying routine.
3. Remember our internal branch naming and pull request policy.
4. Clone the repo.
5. Create a new branch branching off from **stage**.
6. Get acquainted with the file folder structure. 
7. Install dependencies for the docs.
8. Run a local dev env.
9. Work with the content and resources in your favorite IDE.
10. Commit, push.
11. Test your work, deploying it to a staging server and seeing if everything is as smooth on web as it was locally.
12. Merge your changes, following the gitflow and pull request policy.


### Gitflow
Currently, we're using the following Gitflow:
1. Create a feature branch from the `stage` branch. Use the branch naming format described further in this doc.
2. Work on the documentation for the feature.
3. When done, test your documentation deploying it to `STAGE`.
4. When tested, create a pull request to the `stage` branch and add colleagues as reviews, at your discretion. Use the pull request naming format described further in this doc.
5. When merged, test the `stage` branch deploying it to `STAGE`.
6. When ready, create a pull request to the `main` branch.
7. When merged, test the `main` branch deploying it to `STAGE`.
8. When tested, deploy the `main` branch to `PROD`.


### Deploying routine
To deploy:
1. Navigate to the Actions tab on the repo page.
2. Under `All wokflows`, on the left, click `Deploy`.
3. Click the `Run workflow` button on the right, then choose the branch and environment to deploy to.
   1. Deploy to `STAGE` or any other staging server from the drop-down list to view and test your doc updates in a safe environment.
   2. When tested and ready, deploy to `PROD` available to general public. 
4. Click the green `Run workflow` button right below the chosen values.


### Internal branch and pull request policy
1. Branch off from **stage**.

2. Follow the **branch naming format**. 

   The common pattern for a branch name `<type>/<JIRA-TASK-NUMBER-description>`.

   Types: 
   * `feature` — tasks and stories
   * `bugfix` — bugs such as typos
   * `hotfix` — on-the-spot updates

   Naming examples:
   * `feature/FOOBAR-1-create-ankr-staking-docs`
   * `bugfix/FOOBAR-2-fix-typos`
   * `hotfix/FOOBAR-3-update-sc-addresses-for-staking`

3. Follow the **pull request naming format**.

   The common pattern for a pull request title or commit message is `<type>[optional scope]: <TASK-000 description>`.

   Naming examples:
   * `feat: FOOBAR-555 add docs for Ankr Protocol`
   * `fix(Fantom staking): FOOBAR-666 fix typos`
   * `chore: FOOBAR-777 update smart contract addresses for Ankr Staking`
   
4. Make sure the **Assignee** is you and there are two **labels** — **documentation** and a section-specific label (e.g. **staking**). 


### Clone the repo

```shell
git clone git@github.com:Ankr-network/ankr-docs.git && cd ankr-docs
```

### Create a new branch off **stage**

```shell
git checkout stage && git checkout -b `<type>/<JIRA-TASK-NUMBER-description>`
```

## Get acquainted with the file and folder structure
```
┌ ○ .github 
├     ○ worflows 
├         deploy.yml — workflows for deploying the project via GitHub Actions.
├ ○ components — custom React components to import and use in the project.
├ ○ icons — icons to use in the metainfo.
├ ○ pages — source files with the content to generate static HTML files from.
├ ○ public — images to use in the docs.
├ ○ styles — custom CSS styles overwriting the default Nextra styles.
├   .gitignore — list of intentionally untracked files and folders to skip when committing. 
├   next.config.js — configuration file for the Next.js framework, which powers Nextra.
├   postcss.config.js — configuration file listing additional packages to import to Nextra.
├   README.md — readme of the project.
├   redirects.js — redirects solution.
├   redirects.json — map of redirects for the redirects solution.
├   tailwind.config.js — additional CSS framework (imported in postcss.config.js).
├   theme.config.js — configuration file for Nextra with the essential project parameters.
└   yarn.lock — lock file to ensure the same environment across devices.
```
## Install dependencies for the docs
```shell
yarn install
```

## Run a local dev env
```shell
yarn dev
```

FYI, it's `http://localhost:3000/docs/`.


### Work with the content and resources in your favorite IDE.
Yeah, work that sweet content!


### Test your work, deploying it to a staging server
Remember that deploying routine above? Follow it.


### Merge your changes
Remember that pull request policy above?
Let's sum it up:
1. For the love of code, follow the pull request policy, or I will come to you in your dreams! 
2. Merge your branch to **stage**.
3. If stage doesn't have any other unfinished work and is ready for prod, merge **stage** into **main**.
4. Have a cookie.


