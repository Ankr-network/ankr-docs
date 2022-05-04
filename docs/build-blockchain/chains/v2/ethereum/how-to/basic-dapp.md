---
title: Build a basic project
id: build-eth-project
---

Let's get started with a super simple project using node and truffle. It is a good idea to start off with a local blockchain before connecting to testnets or the mainnet. This gives you the opportunity to demonstrate that everything works.

## Before you start

Make sure you have Node installed. 
    
```bash
$ node --version
v14.16.1
```

If it isn't installed, [download](https://nodejs.org/en/download/) it or use a [package manager](https://nodejs.org/en/download/package-manager/). 

## Create a project

In your terminal or command prompt do the following:

1) Let's create a folder for our super simple project

```bash
mkdir eth-project && cd eth-project
```

2) Now initialize it

```bash
npm init -y
```

## Add truffle

1) Install [Truffle](https://trufflesuite.com/). 

This will allow you to deploy a smart contract to a blockchain. Truffle can be installed locally inside your project using `npx` to install an executable. This makes it easier to manage versions for each project you build. 

:::tip
Make sure you are in your project directory first. e.g. eth-project

:::

```bash
npm install --save-dev truffle
```

2) Initialize a truffle project inside your folder.

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
  
3) Open your project in your preferred code editor e.g Visual Studio Code Editor to view the newly created folders - **contracts**, **migrations** and **test**. You can also see a new **truffle-config.js** file containing default code. 

<img src={require('/img/truffle-project-folders.png').default} alt="Truffle folders" width="300" />

## Write a simple contract

This `Storage` contract is very straightforward. It stores an integer on the blockchain that can be retrieved by running the `retrieve` function. It is the same file used in [Remix](https://remix.ethereum.org/)

1) Create a new file in your **Contracts** folder and paste the code below into it. 

2) Save it as **Storage.sol**.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
 Store & retrieve value in a variable
 */
contract Storage {

    uint256 number;

    /**
     * function - Stores value in variable
     * parameter - num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * Return value 
     * return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}
```

## Compile the contract

The Ethereum Virtual Machine (EVM) executes the logic defined in the smart contracts but it doesn't understand high level languages. Instead, the solidity contract needs to be compiled into executable bytecode.

1) Let's check the solidity version of our contract. It uses any version from 0.7.0 to 0.8.9. So let's ensure our `truffle-config.js` file to match. 

2) Locate the `Compilers` section, specify a compatible version and toggle the comment into code. 

```sol

// Configure your compilers
compilers: {
    solc: {
    version: "^0.8.0",  
``` 

3) Now you can compile with a single command:

```npx truffle compile```

The contract is compiled and a new **build/contracts** directory is created.

## Deploy contract

With our project setup complete all is ready to deploy **Storage.sol** to the blockchain. 

Truffle uses **migrations** to deploy contracts. Migrations consist of JavaScript files and a special Migrations contract to track migrations on-chain.

Prior to using a testnet it is better to run a local blockchain on your machine. Doing this provides you with all the ETH you need, and mines blocks instantly.

[Ganache](https://trufflesuite.com/docs/ganache/) allows you to run a blockchain locally with ease.

1) Install Ganache

```js
npm install --save-dev ganache-cli
```

2) Start Ganache in deterministic mode:

```js
npx ganache-cli --deterministic
```

You get a response with a list of available accounts, private keys and some blockchain config values. It also displays an address to connect to it. `127.0.0.1:8545`.

```js
Ganache CLI v6.12.2 (ganache-core: 2.13.2)

Available Accounts
==================
(0) 0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1 (100 ETH)
(1) 0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0 (100 ETH)
(2) 0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b (100 ETH)
(3) 0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d (100 ETH)
(4) 0xd03ea8624C8C5987235048901fB614fDcA89b117 (100 ETH)
(5) 0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC (100 ETH)
(6) 0x3E5e9111Ae8eB78Fe1CC3bb8915d5D461F3Ef9A9 (100 ETH)
(7) 0x28a8746e75304c0780E011BEd21C72cD78cd535E (100 ETH)
(8) 0xACa94ef8bD5ffEE41947b4585a84BdA5a3d3DA6E (100 ETH)
(9) 0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e (100 ETH)

Private Keys
==================
(0) 0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d
(1) 0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1
(2) 0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c
(3) 0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913
(4) 0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743
(5) 0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd
(6) 0xe485d098507f54e7733a205420dfddbe58db035fa577fc294ebd14db90767a52
(7) 0xa453611d9419d0e56f499079478fd72c37b251a94bfde4d19872c44cf65386e3
(8) 0x829e924fdf021ba3dbbc4225edfece9aca04b929d6e75613329ca6f1d31c0bb4
(9) 0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773

HD Wallet
==================
Mnemonic:      myth like bonus scare over problem client lizard pioneer submit female collect
Base HD Path:  m/44'/60'/0'/0/{account_index}

Gas Price
==================
20000000000

Gas Limit
==================
6721975

Call Gas Limit
==================
9007199254740991

Listening on 127.0.0.1:8545
```

Every time you run Ganache, it creates a new local blockchain. This means that if you want to maintain an instance, you should keep a window open running Ganache.
Alternatively, you can run Ganache with the `--db` option, providing a directory to store data in between runs.

Let's create a JavaScript migration to deploy our Storage contract. 

1) Inside the **migrations** folder, create a file called **2_deploy_storage.js**.

2) Add the code below:

```solidity
const Storage = artifacts.require('Storage');

module.exports = async function (deployer) {
  await deployer.deploy(Storage);
};
```

## Configure connection to ganache

1) Set up a development network for localhost and port 8545 - which is what our local blockchain is using.

2) Open **truffle.config.js** and toggle the comments off for the following settings:

```js

// truffle-config.js
module.exports = {
...
  networks: {
...
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
...
```
3) Deploy the **Storage** contract to the development network using the `migrate` command.

```js
npx truffle migrate --network development
```

You should get a response similar to below:

```js

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      1651588514857
> Block gas limit: 6721975 (0x6691b7)

2_deploy_storage.js
===================

   Deploying 'Storage'
   -------------------
   > transaction hash:    0xd87e16319b5e9bdce7a4c6ccc1df60a54aec263866347a63ae08d252b7cdb7f6
   > Blocks: 0            Seconds: 0
   > contract address:    0xCfEB869F69431e42cdB54A4F4f105C19C080A601
   > block number:        3
   > block timestamp:     1651598421
   > account:             0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
   > balance:             99.99165912
   > gas used:            125677 (0x1eaed)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00251354 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00251354 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.00749062 ETH
```

:::tip

## Great work!
You can now start interacting with your local blockchain

:::

## Interact with your contract

1) Install a Truffle console to make it easy to interact with your contract

```js
npx truffle console --network development
```

2) A command line appears `truffle(development)>`

We can use the console to interact with the deployed **storage** contract. 

```js

truffle(development)> const storage = await Storage.deployed();
undefined

```

## Sending transactions

The **Storage** contract has a first function `store` that receives an integer value and stores it in the contract `Storage`. This function modifies the blockchain state, so a transaction must be sent to the contract to execute it.

1) Lets call the first function to store the number **189**.

```js
truffle(development)> await storage.store(189)
```

Your response should be something like this:

```js
{
  tx: '0xc08101e1c1ddef8977b60bca6a5d360076fdd13fb063d2cf7c7841292e59c1a0',
  receipt: {
    transactionHash: '0xc08101e1c1ddef8977b60bca6a5d360076fdd13fb063d2cf7c7841292e59c1a0',
    transactionIndex: 0,
    blockHash: '0x132b5070975a85c8cc6e7ae2144043533452c2e389bf03e2aecf1899bc1c472c',
    blockNumber: 5,
    from: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1',
    to: '0xcfeb869f69431e42cdb54a4f4f105c19c080a601',
    gasUsed: 41624,
    cumulativeGasUsed: 41624,
    contractAddress: null,
    logs: [],
    status: true,
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    rawLogs: []
  },
  logs: []
}
```

2) Now let's retrieve the stored number using the `retrieve` function.

As this is a read only transaction, no gas is incurred. Our contract returns `uint256` which is too large a number for JavaScript so instead we get returned a big number object. We can display the big number as a string using (await box.retrieve()).toString().

```js
truffle(development)> (await storage.retrieve()).toString()
'189'
```











