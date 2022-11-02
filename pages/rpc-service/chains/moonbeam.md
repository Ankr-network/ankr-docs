import { Callout } from "components";
import { Tabs, Tab } from "nextra-theme-docs";

# Moonbeam

Moonbeam combines the easy-to-use tooling of Ethereum and the scalable, interoperable architecture of Polkadot.
Moonbeam is EVM compatible to an extent but there are important Moonbeam differences that developers should know and understand in terms of the Ethereum API JSON-RPC support.

## Quick links

[**Moonbeam**](https://moonbeam.foundation/)

[**Docs**](https://docs.moonbeam.network/)

[**Github**](https://github.com/PureStake/moonbeam)

---

## Connect wallet

You can set up your **MetaMask wallet** to connect to Moonbeam RPC. You can then perform transactions and interact with the network.

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.
2. Select '_**Custom RPC**_'.
3. Enter the settings for the required project as follows in the table below:


| **Chain** | **Custom RPC Category** | **Details**                                            |
| --------- | ----------------------- | ------------------------------------------------------ |
| Celo      | NETWORK NAME:           | Moonbeam RPC                                               |
|           | NEW RPC URL:            | https://rpc.ankr.com/moonbeam/                             |
|           | CHAIN ID:               | 1284 (hex: 0x504)                                                 |
|           | SYMBOL:                 | GLMR                                                  |
|           | BLOCK EXPLORER URL:     | [https://moonscan.io/](https://moonscan.io/) |

## Get Started

### Using Ethereum API Libraries

The Moonbeam API is very similar to the Ethereum API and is compatible with the majority of Ethereum-style JSON-RPC methods. Developers can leverage this compatibility and use the [**web3.js library**](https://web3js.readthedocs.io/en/v1.7.3/), [**ethers.js library**](https://docs.ethers.io/) and the [**web3.py library**](https://web3py.readthedocs.io/) to interact with a Moonbeam node as if they were doing so on Ethereum.

<Callout type="warning">
However, not all Ethereum JSON RPC methods are supported, and some of the supported ones return default values. 

The following methods are supported on the Moonbeam RPC. 

 - **[eth_protocolVersion](https://eth.wiki/json-rpc/API#eth_protocolversion)** — Returns `1` by default
 - **[eth_syncing](https://eth.wiki/json-rpc/API#eth_syncing)** — Returns an object with data about the sync status or `false`
 - **[eth_hashrate](https://eth.wiki/json-rpc/API#eth_hashrate)** — Not supported
 - **[eth_coinbase](https://eth.wiki/json-rpc/API#eth_coinbase)** — Returns the latest block author. Not necessarily a finalized block
 - **[eth_mining](https://eth.wiki/json-rpc/API#eth_mining)** — Not supported
 - **[eth_chainId](https://eth.wiki/json-rpc/API#eth_chainid)** — Returns the chain ID used for signing at the current block
 - **[eth_gasPrice](https://eth.wiki/json-rpc/API#eth_gasprice)** — Returns the current gas price
 - **[eth_accounts](https://eth.wiki/json-rpc/API#eth_accounts)** — Returns a list of addresses owned by the client
 - **[eth_blockNumber](https://eth.wiki/json-rpc/API#eth_blocknumber)** — Returns the highest available block number
 - **[eth_getBalance](https://eth.wiki/json-rpc/API#eth_getbalance)** — Returns the balance of the given address
 - **[eth_getStorageAt](https://eth.wiki/json-rpc/API#eth_getstorageat)** — Returns content of the storage at a given address
 - **[eth_getBlockByHash](https://eth.wiki/json-rpc/API#eth_getblockbyhash)** — Returns the block of the given hash
 - **[eth_getBlockByNumber](https://eth.wiki/json-rpc/API#eth_getblockbynumber)** — Returns the block of the given block number
 - **[eth_getTransactionCount](https://eth.wiki/json-rpc/API#eth_gettransactioncount)** — Returns the number of transactions sent from the given address (nonce)
 - **[eth_getBlockTransactionCountByHash](https://eth.wiki/json-rpc/API#eth_getblocktransactioncountbyhash)** — Returns the number of transactions in a block with a given block hash
 - **[eth_getBlockTransactionCountByNumber](https://eth.wiki/json-rpc/API#eth_getblocktransactioncountbynumber)** — Returns the number of transactions in a block with a given block number
 - **[eth_getUncleCountByBlockHash](https://eth.wiki/json-rpc/API#eth_getunclecountbyblockhash)** —  Returns `"0x0"` by default
 - **[eth_getUncleCountByBlockNumber](https://eth.wiki/json-rpc/API#eth_getunclecountbyblocknumber)** — Returns `"0x0"` by default
 - **[eth_getCode](https://eth.wiki/json-rpc/API#eth_getcode)** — Returns the code at given address at given block number
 - **[eth_sendTransaction](https://eth.wiki/json-rpc/API#eth_sendtransaction)** — Creates new message call transaction or a contract creation, if the data field contains code. Returns the transaction hash, or the zero hash if the transaction is not yet available
 - **[eth_sendRawTransaction](https://eth.wiki/json-rpc/API#eth_sendrawtransaction)** — Creates new message call transaction or a contract creation for signed transactions. Returns the transaction hash, or the zero hash if the transaction is not yet available
 - **[eth_call](https://eth.wiki/json-rpc/API#eth_call)** — Executes a new message call immediately without creating a transaction on the block chain, returning the value of the executed call
 - **[eth_estimateGas](https://eth.wiki/json-rpc/API#eth_estimategas)** — Returns an estimate amount of how much gas is necessary for a given transaction to succeed
 - **[eth_getTransactionByHash](https://eth.wiki/json-rpc/API#eth_gettransactionbyhash)** — Returns the information about a transaction with a given hash
 - **[eth_getTransactionByBlockHashAndIndex](https://eth.wiki/json-rpc/API#eth_gettransactionbyblockhashandindex)** — Returns information about a transaction at a given block hash, and a given index position
 - **[eth_getTransactionByBlockNumberAndIndex](https://eth.wiki/json-rpc/API#eth_gettransactionbyblocknumberandindex)** — Returns information about a transaction at a given block number, and a given index position
 - **[eth_getTransactionReceipt](https://eth.wiki/json-rpc/API#eth_gettransactionreceipt)** — Returns the transaction receipt of a given transaction hash
 - **[eth_getUncleByBlockHashAndIndex](https://eth.wiki/json-rpc/API#eth_getunclebyblockhashandindex)** — Returns `"null"` by default
 - **[eth_getUncleByBlockNumberAndIndex](https://eth.wiki/json-rpc/API#eth_getunclebyblocknumberandindex)** — Returns `null` by default
 - **[eth_getLogs](https://eth.wiki/json-rpc/API#eth_getlogs)** — Returns the transaction receipt of a given transaction hash
 - **[eth_getWork](https://eth.wiki/json-rpc/API#eth_getwork)** — Returns `["0x0","0x0","0x0"]` by default
 - **[eth_submitWork](https://eth.wiki/json-rpc/API#eth_submitwork)** — Not supported
 - **[eth_submitHashrate](https://eth.wiki/json-rpc/API#eth_submithashrate)** — Not supported
</Callout>

### How to integrate with Moonbeam

If you're using the Public RPCs, your endpoint is `https://rpc.ankr.com/moonbeam`.

If you're using the Premium Plan, you can copy your two endpoints for HTTPS and WSS from [Ankr Protocol](https://www.ankr.com/protocol/public/)

<Callout>
In the code samples below, use **EITHER** the public endpoint **OR** the premium endpoint (if you have signed up to the Premium Plan)
</Callout>

<Tabs
  items={[
    "Web3",
    "Ethers.js",
  ]}
>
  <Tab>
```
const Web3 = require('web3'); //Load Web3 library

// Create local Web3 instance - set Moonbeam as provider
const web3 = new Web3("https://rpc.ankr.com/moonbeam"); // Public RPC URL

const web3 = new Web3("https://rpc.ankr.com/moonbeam/YOUR-API-KEY"); // Premium RPC URL

```
  </Tab>
  <Tab>
```
const ethers = require('ethers');

const providerURL = "https://rpc.ankr.com/moonbeam"; // Public RPC URL

const providerURL = "https://rpc.ankr.com/moonbeam/YOUR-API-KEY"; // Premium RPC URL

// Define Provider
const provider = new ethers.providers.StaticJsonRpcProvider(providerURL, {
    chainId: 1284,
    name: 'moonbeam'
});
```
  </Tab>
</Tabs>



### Using Substrate API libraries

[Polkadot.js API](https://polkadot.js.org/docs/api/) library allows application developers to query a Moonbeam node and interact with the node's Polkadot or Substrate interfaces using JavaScript. 

1. **Install node.js (if not already installed)**

    ```bash
    # homebrew (https://docs.brew.sh/Installation)
    brew install node

    # nvm (https://github.com/nvm-sh/nvm)
    nvm install node
    ```

2. **Install Polkadot.js API library**

    You can install this through a package manager such as `yarn`. Install it in your project directory with the following command:

    ```
    yarn add @polkadot/api

    ```

3. **Install Moonbeam Types Bundle**

    To decode Moonbeam custom events and types, you need to include the [Moonbeam Types Bundle](https://www.npmjs.com/package/moonbeam-types-bundle) into your project by adding the following package information to your `package.json`:

    ```
    "@polkadot/api": "^6.9.1",
    "moonbeam-types-bundle": "^2.0.1",
    "typescript": "4.3.2"
    ```

4. **Add this `import` statement**

    Add this statement to the start of your project file. 

    ```
    import { typesBundlePre900 } from "moonbeam-types-bundle"
    ```




