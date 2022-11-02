import { Callout } from "components";

# Syscoin
Syscoin is a Proof-of-Work blockchain. It uses merged-mining - a technique whereby PoW blockchain miners can merge several cryptocurrencies with mining at the same time. Syscoin currently has around 20% of the hashpower that goes into mining Bitcoin. SysCoin utilizes [Chainlocks](https://docs.syscoin.org/docs/tech/chainlocks) to securely mitigate against <a href="https://www.ankr.com/docs/learn/extra/51-attacks">51% attacks</a>

Syscoin has a modular blockchain architecture with multiple specialized layers. This represents their approach to solving the scalability trilemma. 

## 1. Execution layer - NEVM

[NEVM](https://docs.syscoin.org/docs/tech/nevm). This layer is where day-to-day smart contract transactions take place.  NEVM is a fork of Ethereum. 

## 2. Settlement layer - Z-Dag

[Z-DAG](https://docs.syscoin.org/docs/tech/z-dag) (Zero-Confirmation Directed Acyclic Graph) is an instant settlement protocol used alongside proof-of-work (PoW) to enable the swift confirmation of Syscoin transactions. A Z-DAG is a directed acyclic graph (DAG) where validating nodes verify the sequential ordering of transactions received in their memory pools. 

## 3. Data availability layer 

This is where the data from the blockchain is stored. ZK-rollups on Syscoin store data on-chain whilst Validium roll-ups store data off-chain in decentralized storage or with trusted entitites. Validium is scheduled for later in the year.

<Callout>
What is Validium?

Validium is a Layer-2 scaling solution that enforces the validity of all transactions using zero-knowledge proofs whilst data is kept off-chain. This means that assets cannot be accessed without explicit authorization from the account owner. 
</Callout>

## Quick links

[**Syscoin**](https://syscoin.org/)

[**Docs**](https://docs.syscoin.org/)

[**Github**](https://github.com/syscoin)

## Connect Wallet

You can set up your **MetaMask wallet** to connect to Syscoin RPC. You can then perform transactions and interact with the network.

1. Open your **Metamask Extension** and click the '**Network**' drop down menu at the top.
2. Select '**Add Network**'.
3. Enter the settings for the required project as follows in the table below:



|        Chain        | Custom RPC Category |                           Details                          |
| :-----------------: | :-----------------: | :--------------------------------------------------------: |
| Syscoin              |    NETWORK NAME:    |                         Syscoin Mainnet                       |
|                     |     NEW RPC URL:    | [https://rpc.ankr.com/syscoin](https://rpc.ankr.com/sycoin) |
|                     |      CHAIN ID:      |                             57                             |
|                     |       SYMBOL:       |                             SYS                           |
|                     |   BLOCK EXPLORER:   |         [https://explorer.syscoin.org/](https://explorer.syscoin.org/)         |


## Get Started

### Orientation

**1. Signing and Sending transactions**

*Syscoinjs-lib* provides general functions for signing and sending transactions, creating, issuing and sending tokens.

**2. Reading data** 

*Util.js* provides utility functions to return information related to user accounts, addresses and tokens etc. 

**3. Authorizing transactions**

*HDSigner* and *TrezorSigner* can be used with hot and cold wallets to sign transactions.

### Faucets

Transactions on the Syscoin Mainnet require the use of **SYS** as a gas fee.

*Mainnet (SYS) Faucets*

https://faucet.syscoin.org/

## Supported requests

The following <a href="https://www.ankr.com/docs/build-blockchain/guides/json-methods">EVM Supported Requests</a> are available on Ankr Syscoin RPC.

### 1. Get the latest block number example

```bash
curl https://rpc.ankr.com/syscoin \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'

```

### 2. Example latest block number response

```bash
{"jsonrpc":"2.0","id":67,"result":"0x14eeb"}
```

### 3. Convert `hex` result to `decimal`

```bash
echo $((0x14eeb))

85739
```

### 4. Verify on explorer

Check the latest block at [https://explorer.syscoin.org/](https://explorer.syscoin.org/)  

<img src="/docs/verify-latest-block.png" alt="Verify latest block" class="responsive-pic" width="1000" />








