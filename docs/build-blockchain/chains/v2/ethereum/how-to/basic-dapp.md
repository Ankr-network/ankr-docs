---
title: Build a basic dapp
id: build-eth-dapp
---

Let's get started with a super simple project using node and truffle

## 00 Before you start

1. Make sure you have Node installed. 
    
    ```bash
    $ node --version
    v14.16.1
    ```

If it isn't installed, [download](https://nodejs.org/en/download/) it or use a [package manager](https://nodejs.org/en/download/package-manager/). 

## 01 Create a project

In your terminal or command prompt do the following:

1. Let's create a folder for our super simple project

    ```bash
    mkdir eth-project && cd eth-project
    ```

2. Now initialize it

    ```bash
    npm init -y
    ```

## 02 Add truffle

3. Install [Truffle](https://trufflesuite.com/). This will allow us to deploy a smart contract to a blockchain. Truffle can be installed locally inside your project using `npx` to install an executable. This makes it easier to manage versions for each project you build. 

    ```tip

    Make sure you are in your project directory first. 

    ```

    ```bash
    npm install --save-dev truffle
    ```

4. Initialize a truffle project inside your folder.

    ```bash
    npx truffle init

    Starting init...
    ================

    > Copying project files to /home/eth-project

    Init successful, sweet!

    Try our scaffold commands to get started:
    $ truffle create contract YourContractName # scaffold a contract
    $ truffle create test YourTestName         # scaffold a test

    http://trufflesuite.com/docs

    ```
  
