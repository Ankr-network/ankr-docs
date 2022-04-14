----
title: How to use Truffle to Deploy contracts to both Avalanche Fuji and Mainnet
id: truffle-fuji-mainnet
---

# How to use Truffle to deploy contracts to both Avalanche Fuji and Mainnet

The Truffle Suite is a set of tools for dApp development. Truffle allows you to compile, test, debug and deploy Smart Contracts on the EVM.

Avalanche C-Chain is an instance of the EVM powered by Avalanche’s Snowman consensus protocol. 

Here at Ankr we needed to find a secure method to deploy the same contract securely to both Avalanche Fuji Testnet and Avalanche Mainnet. To solve this problem, we took an innovative approach using HDWallet to securely pass the private keys for the deployment. 

This tutorial walks you through using Truffle to deploy contracts to the Avalanche Network. 


## 00 Before you start



* Node.js v8+ LTS and npm (comes with Node)
* Truffle, which you can install with 

```npm install -g truffle```



* Install HDWalletProvider

```npm install @truffle/hdwallet-provider```


## 01 Get endpoints for Avalanche node 

Ankr Protocol offers a selection of Multi-Chain RPCs as both free and public offerings as well as premium.

The great thing about Public Ankr RPCs is that you can start using them on the fly without even needing to sign up for an account. All you need is the URL. If you want prioritized requests at times of network congestion or a durable low-latency websocket endpoint you can easily sign up for Ankr Premium RPCs. [Find out more](https://www.ankr.com/protocol/plan/)


### Avalanche RPC


```
https://rpc.ankr.com/avalanche
```



### Avalanche Fuji Testnet RPC


```
https://rpc.ankr.com/fuji
```


There is a possibility that Avalanche Fuji Testnet RPC may not be available. \



## 03 Configure your Truffle project

The next step is to edit your `truffle-config.js` file to use `HDWalletProvider` and provide all the necessary configuration for deploying to the Avalanche network. 

STEP ONE: Define the HDWalletProvider object in your configuration file.  \
 \
Define HDWalletProvider, privateKey and mainnetProvider 


```
    const HDWalletProvider = require("truffle-hdwallet-provider"); 
    const privateKey       = process.env.DEPLOYMENT_KEY;
    ​const mainnetProvider = process.env.MAINNET_PROVIDER
```


STEP TWO: Define Fuji Testnet Network Provider



1. Specify the Fuji Testnet for deployment as well as parameters. 
2. Pass the deployerPrivateKey. 
3. Specify your Fuji Testnet node URL.

Peer-to-peer communication between nodes uses the network ID, while the transaction signature process uses the chain ID.



4. Specify the chainId, networkId and parameters e.g. gasPrice. 

    ```
    module.exports = {
     networks: {
         // avalanche testnet
         fujitestnet: {
           provider: () => new HDWalletProvider({
             privateKeys: [
               deployerPrivateKey
             ],
             providerOrUrl: `https://<your fujitest node>`,
             chainId: {
               chainId: 43113,
               networkId: 43113,
               genesis: {},
               hardforks: [],
               bootstrapNodes: [],
             },
           }),
           network_id: '*',
           chain_id: 43113,
           gas: 5000000,
           gasPrice: gasPrice,
           timeoutBlocks: 60,
           skipDryRun: true,
         },

    ```


STEP THREE: Define Avalanche Mainnet Network Provider

Here you specify the Avalanche Mainnet for deployment as well as the parameters. 



1. Pass the deployerPrivateKey. 
2. Specify the Avalanche RPC URL.Peer-to-peer communication between nodes uses the network ID, while the transaction signature process uses the chain ID.
3. Specify the chainId and networkId parameters including number of confirmations, gasPrice. 


```
// avalanche mainnet
         avalanche: {
           provider: () => new HDWalletProvider({
             privateKeys: [
               deployerPrivateKey
             ],
             providerOrUrl: `https://rpc.ankr.com/avalanche`,
             chainId: {
               chainId: 43114,
               networkId: 43114,
               genesis: {},
               hardforks: [],
               bootstrapNodes: [],
             },
           }),
           network_id: '*',
           chain_id: 43114,
           gas: 8000000,
           confirmations: 1,
           gasPrice: gasPrice,
           timeoutBlocks: 50,
           skipDryRun: true,
           networkCheckTimeout: 10000000
         },
       }
     },
```


STEP FOUR: Configure your Compilers



* Here the version of Solidity is specified and its settings. 
* Snowtrace API keys are passed to allow the transaction to be viewed on Snowtrace.io. 
* Truffle-plugin-verify to verify the smart contracts' source code on Etherscan. 

    ```
    compilers: {
       solc: {
         version:  "0.7.6",
         settings: {
           optimizer: {
             enabled: true,
             runs:    200
           }
         }
       }
     },
     api_keys: {
       snowtrace: process.env.ETHERSCAN_APIKEY
     },
     plugins: [
       'truffle-plugin-verify'
     ]
    };

    ```



## 04 View full truffle.config file 

Here is the complete truffle.config file


```
    require("dotenv").config();//loads environment variables
    ​
    const HDWalletProvider = require("truffle-hdwallet-provider"); 
    const privateKey       = process.env.DEPLOYMENT_KEY;
    ​
    const mainnetProvider = process.env.MAINNET_PROVIDER
    ​
    module.exports = {
     networks: {
         // avalanche
         fujitestnet: {
           provider: () => new HDWalletProvider({
             privateKeys: [
               deployerPrivateKey
             ],
             providerOrUrl: `https://<your fujitest node>`,
             chainId: {
               chainId: 43113,
               networkId: 43113,
               genesis: {},
               hardforks: [],
               bootstrapNodes: [],
             },
           }),
           network_id: '*',
           chain_id: 43113,
           gas: 5000000,
           gasPrice: gasPrice,
           timeoutBlocks: 60,
           skipDryRun: true,
         },
         avalanche: {
           provider: () => new HDWalletProvider({
             privateKeys: [
               deployerPrivateKey
             ],
             providerOrUrl: `https://rpc.ankr.com/avalanche`,
             chainId: {
               chainId: 43114,
               networkId: 43114,
               genesis: {},
               hardforks: [],
               bootstrapNodes: [],
             },
           }),
           network_id: '*',
           chain_id: 43114,
           gas: 8000000,
           confirmations: 1,
           gasPrice: gasPrice,
           timeoutBlocks: 50,
           skipDryRun: true,
           networkCheckTimeout: 10000000
         },
       }
     },
     // Configure your compilers
     compilers: {
       solc: {
         version:  "0.7.6",
         settings: {
           optimizer: {
             enabled: true,
             runs:    200
           }
         }
       }
     },
     api_keys: {
       snowtrace: process.env.ETHERSCAN_APIKEY
     },
     plugins: [
       'truffle-plugin-verify'
     ]
    };
