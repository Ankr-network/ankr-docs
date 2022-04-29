---
title: Start making requests
id: ethereum-requests
---

In this section, we'll create a simple script using Ethereum Mainnet RPC and Web3.js library to make requests. 

1. Create a new project directory

    ```bash

    mkdir eth-requests && cd eth-requests

    ```

2. Install [web3.js](https://web3js.readthedocs.io/en/v1.2.7/index.html) library
* Libraries simplify connecting an application to the Ethereum blockchain. You need to connect to Ethereum in order to read blockchain data and/or send transactions to the network.

    ```bash

    npm install web3

    ```

3. Create a landing page for your file and open it in your preferred code editor.

    ```bash
    touch index.js 
    ```

4. Now add the script below to `index.js`. The script does the following:
    - Creates a web3 instance,     
    - Sets the provider to an Ankr RPC
    - Makes a request to get the latest Block Number. 

    ```js
    
    const Web3 = require('web3');
    const web3 = new Web3("https://rpc.ankr.com/eth"); // For Premium endpoints append API key to url "https://rpc.ankr.com/eth/APIKEY"
    web3.eth.getBlockNumber()
    .then(console.log);

    ```

5. Run the script in your code editor or in terminal/command-line as below:

    ````js
    node index.js
    14679276
    ```

6. You should see the latest Block Number!

:::tip

## 🎉 Nice work!!

:::





Let's get started with a super simple project.

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
  
