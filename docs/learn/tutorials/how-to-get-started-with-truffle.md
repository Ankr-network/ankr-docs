---
title:  Create a Simple Project with Truffle
id: simple-truffle
---

# Create a simple project with Truffle

**By Staff Writers**
<br/>

Truffle is a development environment, testing framework and asset pipeline for
blockchains using the Ethereum Virtual Machine (EVM)

This guide walks you through setting up a simple project with [Truffle](https://www.trufflesuite.com/docs/truffle/overview)

## Prerequisites

* [NodeJS v8.9.4 or later](https://nodejs.org/en/)
* Windows, Linux or Mac OS X
* Ethereum Client that supports standard JSON RPC API

Truffle also requires that you have a running Ethereum client which supports standard JSON RPC API (which is nearly all of them).

See [Choosing an Ethereum Client ](https://www.trufflesuite.com/docs/truffle/reference/choosing-an-ethereum-client)(External Link)

## 01 - Setting up

### 1. Install Truffle

Truffle allows you to compile, debug, test and deploy smart contracts.

```
npm install -g truffle
```

### 2. Install webpack

[Webpack](https://webpack.js.org) is a _static module bundler_ for modern JavaScript applications.

```
npm install -g webpack
```

## 02 - Create a project

To use most Truffle commands, you need to run them against an existing Truffle project. So the first step is to create a bare metal Truffle project.

### 1. Create a new directory for your Truffle project:

```
mkdir Truffle-project
cd Truffle-project2. 
```

### 2. Set up the Truffle project

```java
truffle unbox webpack
```

Once completed, you'll have a project structure with the following items:

* `app/ : `Directory for UI Front end files
* `contracts/`: Directory for Solidity contracts
* `migrations/`: Directory for scriptable deployment files
* `test/`: Directory for test files for testing your application and contracts
* `truffle-config.js`: Truffle configuration file

## 03 - Create a contract

Contracts are written in [Solidity](https://solidity.readthedocs.io/en/develop/), all files containing contracts will have a file extension of `.sol`

### 1. Create a new .`sol` file in the _contracts_ folder.

**Example contract file**

```javascript
pragma solidity >=0.4.21 <0.7.0;

contract newContract{
    function multiply(uint a) returns(uint d){
        return a * 7;
    }
}
```

## 04 - Set up contract deployment

These files are responsible for staging your deployment tasks. They are written under the assumption that your deployment needs will change over time.

### 1. Create a new file in the _migrations_ folder

A simple migration file looks like this:

Filename: `2_deploy_contracts.js`

:::info note

The filename is prefixed with a number and is suffixed by a description.

The numbered **prefix** is required in order to determine the order in which to run migrations as well as to record whether the migration ran successfully.

The **suffix** is purely for human readability and comprehension. Your migration function also may be `async`  in order to use the `await` keyword to await your deployments.
:::

**Example migration file**

```
const newContract = artifacts.require("newContract");
module.exports = async function(deployer) {
    await deployer.deploy(newContract);
};
```

## 05 - Create a wallet to sign transactions

Set up a HD Wallet-enabled Web3 provider. Use it to sign transactions for addresses derived from a 12-word mnemonic.

Install `truffle-hdwallet-provider` and `babel-register` using npm

```
npm init

npm install babel-register truffle-hdwallet-provider --save
```

## 06 - Create an API on Ankr

Check out [app.ankr.com](https://app.ankr.com/api) to **Create an API **and get your API keys.

You can view your successfully created APIs inside [app.ankr.com](https://app.ankr.com/api), as well as the:

* Project name of each API, 
* Network type of the API,
* Maximum number of API requests per day, 
* The display of the API upgrade plan (please refer to the [upgrade plan](https://ankr-network.github.io/faq-hugo-source/basics/view\_api/#plan-settings))
* Status of the API.

## 07 - Configure your Truffle project

Modify the `truffle-config.js` file to configure your truffle project. It's seeded with some common settings for different networks and features like migrations, compilation and testing.

**Example configuration file**

```javascript
   /**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWallet = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim(); //.secret   Mnemonic Phrase
var HDWalletProvider = require("truffle-hdwallet-provider");
require('babel-register')

module.exports = {
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */

    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal
        // tab if you use this network and you must also set the `host`, `port` and `network_id`
        // options below to some value.
        //
        // development: {
        //  host: "127.0.0.1",     // Localhost (default: none)
        //  port: 8545,            // Standard Ethereum port (default: none)
        //  network_id: "*",       // Any network (default: none)
        // },
        
        // develop: {
        //   port: 8545
        // },

        networkName: {
            provider: () => new HDWalletProvider(mnemonic, `https://apis.ankr.com/xxxxx/xxxxx/eth/archive/main`),
            network_id: 1, // network's Chain id
            gas: 4612388, // Chain has a lower block limit than mainnet
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
        },

        // Another network with more advanced options...
        // advanced: {
        // port: 8777,             // Custom port
        // network_id: 1342,       // Custom network
        // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
        // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
        // from: <address>,        // Account to send txs from (default: accounts[0])
        // websockets: true        // Enable EventEmitter interface for web3 (default: false)
        // },

        // Useful for deploying to a public network.
        // NB: It's important to wrap the provider as a function.
        // ropsten: {
        // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
        // network_id: 3,       // Ropsten's id
        // gas: 5500000,        // Ropsten has a lower block limit than mainnet
        // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        // },

        // Useful for private networks
        // private: {
        // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
        // network_id: 2111,   // This network is yours, in the cloud.
        // production: true    // Treats this network as if it was a public net. (default: false)
        // }
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

  // Configure your compilers
    compilers: {
        solc: {
        // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
        // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        // settings: {          // See the solidity docs for advice about optimization and evmVersion
        //  optimizer: {
        //    enabled: false,
        //    runs: 200
        //  },
        //  evmVersion: "byzantium"
        // }
        }
    }
}

```

## 08 - Compile the contract

To compile a Truffle project, change to the root of the directory where the project is located and then type the following into a terminal:

```
truffle compile
```

Upon first run, all contracts will be compiled. Upon subsequent runs, Truffle will compile only the contracts that have been changed since the last compile. If you'd like to override this behavior, run the above command with the `--all` option.

## 09 - Deploy to network

```
truffle migrate --network networkName
```

