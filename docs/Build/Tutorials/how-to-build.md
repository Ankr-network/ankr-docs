---
title: How to build a simple project
id: build-project
---

# How to Create a Simple Project with Truffle

Truffle is a development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)

This guide walks you through setting up a simple project with [Truffle](https://www.trufflesuite.com/docs/truffle/overview)

## 00 Prerequisites

* Windows, Linux or Mac OS X
* Node.js > v8.9.4 [Install](https://nodejs.org/en/)
* Ethereum Client that supports standard JSON RPC API e.g. [Go Ethereum](https://geth.ethereum.org/) 
  
:::note  
  Truffle also requires that you have a running Ethereum client that supports standard JSON RPC API (which is nearly all of them). See [Choosing an Ethereum Client](http://trufflesuite.com/docs/truffle/reference/choosing-an-ethereum-client)
:::

## 01 Setting up 
**1. Install Truffle**

Truffle allows you to compile, debug, test and deploy smart contracts. 

```bash
npm install -g truffle
```

**2. Install webpack**

​[Webpack](https://webpack.js.org/) is a static module bundler for modern JavaScript applications.

```bash
npm install -g webpack
```

## 02 Create a Project

To use most Truffle commands, you need to run them against an existing Truffle project. So the first step is to create a bare metal Truffle project.

**1 Create a new directory for your Truffle project**

```bash
mkdir Truffle-project
cd Truffle-project2. 
```

**2 Set up the truffle project**

```bash
truffle unbox webpack
```
Once completed, you'll have a project structure with the following items:

```app/``` : Directory for UI Front end files

```contracts/``` : Directory for Solidity contracts

```migrations/```: Directory for scriptable deployment files

```test/```: Directory for test files for testing your application and contracts

```truffle-config.js```: Truffle configuration file

## 03 Create a Contract
Contracts are written in [Solidity](https://solidity.readthedocs.io/en/develop/), all files containing contracts will have a file extension of ```.sol```

**Create a new .sol file in the contracts folder**

```js
## Example contract file

pragma solidity >=0.4.21 <0.7.0;
​
contract newContract{
    function multiply(uint a) returns(uint d){
        return a * 7;
    }
}
```
## 04 Set up Contract Deployment

These files are responsible for staging your deployment tasks. They are written under the assumption that your deployment needs will change over time.

**Create a new file in the migrations folder**

A simple migration file looks like this:

Filename: ```2_deploy_contracts.js```

:::info
The filename is prefixed with a number and is suffixed by a description. 
The numbered **prefix** is required in order to determine the order in which to run migrations as well as to record whether the migration ran successfully. 
The **suffix** is purely for human readability and comprehension. Your migration function also may be async  in order to use the await keyword to await your deployments.
:::

```js
## Example migration file
const newContract = artifacts.require("newContract");
module.exports = async function(deployer) {
    await deployer.deploy(newContract);
};
```

## 05. Create a wallet to sign transactions

Set up a HD Wallet-enabled Web3 provider. Use it to sign transactions for addresses derived from a 12-word mnemonic.

Install ```truffle-hdwallet-provider``` and ```babel-register``` using npm

```js
npm init
npm install babel-register truffle-hdwallet-provider --save
```

## 06. Create an API on Ankr

Create an API in https://app.ankr.com/ and get your API keys. 

Use 
You can view your successfully created APIs inside , as well as the:
 
* Project name of each API, 
* Network type of the API,
* Maximum number of API requests per day, 
* The display of the API upgrade plan 
* Status of the API.

## 07. Configure your Truffle Project

Modify the ```truffle-config.js``` file to configure your truffle project. It's seeded with some common settings for different networks and features like migrations, compilation and testing.

```
## Example configuration file
​
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim(); //.secret   Mnemonic Phrase
var HDWalletProvider = require("truffle-hdwallet-provider");
require('babel-register')
​
module.exports = {
   
​
    networks: {
    
​
        networkName: {
            provider: () => new HDWalletProvider(mnemonic, `https://apis.ankr.com/xxxxx/xxxxx/eth/archive/main`),
            network_id: 1, // network's Chain id
            gas: 4612388, // Chain has a lower block limit than mainnet
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
        },
​```

​
8. Compile the contract
To compile a Truffle project, change to the root of the directory where the project is located and then type the following into a terminal:
truffle compile
Upon first run, all contracts will be compiled. Upon subsequent runs, Truffle will compile only the contracts that have been changed since the last compile. If you'd like to override this behavior, run the above command with the --all option.
9. Deploy to network
truffle migrate --network networkName
​