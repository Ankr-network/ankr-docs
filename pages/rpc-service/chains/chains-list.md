import { Tabs, Tab } from "nextra-theme-docs";
import { Callout } from "components";

## Chains list

This docs section provides the list of all chains available on [RPC Service](https://www.ankr.com/rpc/). Each chain in the list contains a short overview and the networks supported. Moreover, it outlines the most popular API methods to interact with the network as well as the methods we don't support entirely for either [Public or Premium service plans](/rpc-service/service-plans/#service-plans-comparison). And the cherry on top, each chain contains code snippets with basic requests in various languages and the corresponding JSON responses.

<img src="/docs/build/chain-info.png" alt="Chain info" class="responsive-pic" width="800" />

**Chains supported**:

<table width="800">
  <tr>
    <th></th>
  </tr>
  <tr>
    <td>[Aptos](/rpc-service/chains/chains-list/#aptos)</td>
    <td>[Celo](/rpc-service/chains/chains-list/#celo)</td>
    <td>[HECO Chain](/rpc-service/chains/chains-list/#huobi-eco-chain)</td>
    <td>[Near](/rpc-service/chains/chains-list/#near)</td>
    <td>[Solana](/rpc-service/chains/chains-list/#solana)</td>
  </tr>
  <tr>
    <td>[Arbitrum](/rpc-service/chains/chains-list/#arbitrum)</td>
    <td>[Ethereum](/rpc-service/chains/chains-list/#ethereum)</td>
    <td>[IoTeX](/rpc-service/chains/chains-list/#iotex)</td>
    <td>[Nervos](/rpc-service/chains/chains-list/#nervos)</td>
    <td>[Sui](/rpc-service/chains/chains-list/#sui)</td>
  </tr>
  <tr>
    <td>[Avalanche](/rpc-service/chains/chains-list/#avalanche)</td>
    <td>[Fantom](/rpc-service/chains/chains-list/#fantom)</td>
    <td>[Klaytn](/rpc-service/chains/chains-list/#klaytn)</td>
    <td>[Optimism](/rpc-service/chains/chains-list/#optimism)</td>
    <td>[Syscoin](/rpc-service/chains/chains-list/#syscoin)</td>
  </tr>
  <tr>
    <td>[BNB Smart Chain](/rpc-service/chains/chains-list/#bnb-smart-chain)</td>
    <td>[Gnosis](/rpc-service/chains/chains-list/#gnosis)</td>
    <td>[Kusama](/rpc-service/chains/chains-list/#kusama)</td>
    <td>[Polkadot](/rpc-service/chains/chains-list/#polkadot)</td>
    <td>[Tron](/rpc-service/chains/chains-list/#tron)</td>
  </tr>
  <tr>
    <td>[BitTorrent Chain](/rpc-service/chains/chains-list/#bittorrent-chain)</td>
    <td>[Harmony](/rpc-service/chains/chains-list/#harmony)</td>
    <td>[Moonbeam](/rpc-service/chains/chains-list/#moonbeam)</td>
    <td>[Polygon](/rpc-service/chains/chains-list/#polygon)</td>
    <td></td>
  </tr>
</table>


## Aptos

The Aptos blockchain, designed with scalability, safety, reliability, and upgradeability as key principles, to address blockchain challenges, such as frequent outages, high costs, low throughput limits, and security concerns. The Aptos blockchain has been developed over the past three years by over 350+ developers across the globe. It offers new and novel innovations in consensus, smart contract design, system security, performance, and decentralization. The combination of these technologies will provide a fundamental building block to bring web3 to the masses.

Official quick links:  [Website](https://aptoslabs.com/), [Docs](https://aptos.dev/), [GitHub](https://github.com/aptos-labs/)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS`)
  * Testnet (`HTTPS`)
</div>

### API methods

For Aptos, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`/v1/spec`, `/v1/-/healthy`

---

## Arbitrum

Arbitrum is a side chain that runs parallel to Ethereum Mainnet. Also known as a Layer 2 (L2) scaling solution, Arbitrum improves transaction speeds and cost compared to the mainnet, making it an excellent solution for Ethereum developers.

Official quick links: [Website](https://arbitrum.io/), [Docs](https://developer.offchainlabs.com/), [GitHub](https://github.com/OffchainLabs)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### API methods

For Arbitrum, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`, `debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/arbitrum \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/arbitrum"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/arbitrum'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/arbitrum'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x2484729"
}
```

---

## Avalanche

Avalanche is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem. Avalanche is the first decentralized smart contracts platform built for the scale of global finance, with near-instant transaction finality. Ethereum developers can quickly build on Avalanche as Solidity works out-of-the-box.

Avalanche is an ecosystem that features three built-in blockchains: [Exchange Chain (X-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform#exchange-chain-x-chain), [Platform Chain (P-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform#platform-chain-p-chain), and [Contract Chain (C-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform#contract-chain-c-chain).

Official quick links: [Website](https://www.avax.network/), [Docs](https://docs.avax.network/), [GitHub](https://github.com/ava-labs)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet / Fuji Testnet:
    * X-Chain (`HTTPS`)
    * P-Chain (`HTTPS`)
    * C-Chain (`HTTPS`):
      * Standard EVM API (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Avalanche through Ankr's infrastructure, add a required Avalanche network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Avalanche Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Avalanche Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/avalanche/`.
      * **Chain ID**: `43114`.
      * **Currency symbol**: `AVAX`.
      * **Block explorer URL**: `https://snowtrace.io/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Avalanche Mainnet.

### API methods

For Avalanche, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`, `eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`,

`avm.createAddress`, `avm.exportKey`, `avm.importKey`, `avm.export`, `avm.import`, `avm.mint`, `avm.createFixedCapAsset`, `avm.createVariableCapAsset`, `avm.createNFTAsset`, `avm.mintNFT`, `avm.listAddresses`, `avm.send`, `avm.sendMultiple`, `avm.sendNFT`, `wallet.send`, `wallet.sendMultiple`, `wallet.issueTx`, `avax.export`, `avax.exportAVAX`, `avax.exportKey`, `avax.import`, `avax.importAVAX`, `avax.importKey`,

`platform.addDelegator`, `platform.addValidator`, `platform.addSubnetValidator`, `platform.createAddress`, `platform.createBlockchain`, `platform.createSubnet`, `platform.exportAVAX`, `platform.exportKey`, `platform.importAVAX`, `platform.importKey`, `platform.listAddresses`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/avalanche \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/avalanche"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/avalanche'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/avalanche'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "result":"0x155ea63",
  "id":1
}
```

---

## BNB Smart Chain

BNB Smart Chain (BSC) (previously Binance Smart Chain) is an innovative solution to bring programmability and interoperability to Beacon Chain. BNB Smart Chain relies on a system of 21 active validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality.

To the EVM compatibility that permits support for Ethereum tools and DApps, BNB Smart Chain adds smart contract functionality to the chain. The dual-chain architecture alongside Binance Chain enables sending and receiving of BNB and BEP2 tokens cross-chain.

Official quick links: [Website](https://www.bnbchain.org/en/smartChain), [Docs](https://docs.bnbchain.org/docs/learn/intro), [GitHub](https://github.com/bnb-chain)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Chapel Testnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with BNB Smart Chain through Ankr's infrastructure, add a required BNB Smart Chain network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add BNB Smart Chain Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `BNB Smart Chain Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/bsc/`.
      * **Chain ID**: `56`.
      * **Currency symbol**: `BNB`.
      * **Block explorer URL**: `https://bscscan.com/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with BNB Smart Chain Mainnet.

### API methods

For BNB Smart Chain, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/bsc \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/bsc"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/bsc'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/bsc'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x1601d3a"
}
```

---

## BitTorrent Chain

Bittorrent-Chain (BTTC) is a layer 2 scaling solution, BTTC strives to solve scalability and usability issues without compromising decentralization, and can make full use of the existing Ethereum developer community and ecosystem. BTTC is fully compatible with Ethereum, and existing applications on Ethereum can be easily migrated to this BTTC. In addition to the same experience as Ethereum, users can also enjoy ultra-high throughput and extremely low fees.

Users can conduct fast, low-cost, and safe transactions on BTTC, and assets on BTTC can be easily transferred between Ethereum, TRON, and BNB Smart Chain.

Official quick links: [Website](https://official.bt.io/?language=EN), [Docs](https://doc.bt.io/), [GitHub](https://github.com/bttcprotocol)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### API methods

For BitTorrent Chain, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/bttc \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/bttc"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/bttc'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/bttc'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0xd91939"
}
```

---

## Celo

Celo is a mobile-first blockchain designed to make decentralized financial (DeFi) tools and services accessible to anyone with a mobile phone.

Celo is a layer 1 protocol and blockchain platform. The Celo Mainnet is entirely separate from the Ethereum network. The Celo client originated as a fork of Ethereum Go language client, [go-ethereum](https://geth.ethereum.org/docs/) (or geth). Celo has several significant differences, including a Proof-of-Stake-based Practical Byzantine Fault Tolerance (PBFT) consensus mechanism.

All the crypto assets on Celo have ERC-20 compliant interfaces, meaning that while they are not ERC-20 tokens on the Ethereum Mainnet, all familiar tooling and code that support ERC-20 tokens can be easily adapted for Celo assets, including Celo Native Asset (CELO) and Celo Dollar (cUSD).

Official quick links: [Website](https://celo.org/), [Docs](https://docs.celo.org/), [GitHub](https://github.com/celo-org)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Celo through Ankr's infrastructure, add a required Celo network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Celo Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Celo Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/celo/`.
      * **Chain ID**: `42220`.
      * **Currency symbol**: `CELO`.
      * **Block explorer URL**: `https://explorer.celo.org/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Celo Mainnet.

### API methods

For Celo, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`, `debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/celo \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/celo"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/celo'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/celo'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0xf6b842"
}
```

---

## Ethereum

Ethereum is a blockchain with a computer embedded in it. It is the foundation for building apps and organizations in a decentralized, permissionless, censorship-resistant way. Ethereum uses a [proof-of-stake-based consensus mechanism](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/).

Official quick links: [Website](https://ethereum.org/en/), [Docs](https://ethereum.org/en/developers/docs/), [GitHub](https://github.com/ethereum)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Testnet:
    * Goerli (`HTTPS` and `WSS`)
    * Rinkeby (`HTTPS` and `WSS`)
    * Ropsten (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Ethereum through Ankr's infrastructure, add a required Ethereum network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Ethereum Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Ethereum Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/eth/`.
      * **Chain ID**: `1`.
      * **Currency symbol**: `ETH`.
      * **Block explorer URL**: `https://etherscan.io/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Ethereum Mainnet.

### API methods

For Ethereum, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

[//]: # (#### Popular)

[//]: # ()
[//]: # (`eth_blockNumber`, `txpool_content`, `txpool_inspect`, `txpool_status`, `net_version`, `eth_chainId`, `eth_gasPrice`, `eth_call`, `eth_getBalance`, `eth_getTransactionCount`, `eth_getBlockByNumber`, `eth_getBlockByHash`, `eth_getBlockTransactionCountByHash`, `eth_getBlockTransactionCountByNumber`, `eth_getTransactionByHash`, `eth_getTransactionByBlockHashAndIndex`, `eth_getTransactionByBlockNumberAndIndex`, `eth_getTransactionReceipt`)

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/eth"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/eth'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/eth'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0xf3c34b"
}
```

---

## Fantom

Fantom is a fast, scalable, and secure layer-1 platform built on an aBFT consensus protocol. Fantom is permissionless, decentralized, open-source, and fully compatible with Ethereum.

Lachesis, its revolutionary aBFT consensus mechanism, allows Fantom to be much faster and cheaper than previous technologies, yet extremely secure.

Official quick links: [Website](https://fantom.foundation/), [Docs](https://docs.fantom.foundation/), [GitHub](https://github.com/Fantom-Foundation)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Testnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Fantom through Ankr's infrastructure, add a required Fantom network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Fantom Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Fantom Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/fantom/`.
      * **Chain ID**: `250`.
      * **Currency symbol**: `FTM`.
      * **Block explorer URL**: `https://ftmscan.com/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Fantom Mainnet.

### API methods

For Fantom, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`, `debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/gnosis \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/gnosis"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/gnosis'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/gnosis'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "result":"0x17d5c3d",
  "id":1
}
```

---

## Gnosis

Gnosis Chain (formerly xDai Chain) provides stability, scalability and an extendable beacon chain framework.

Development on Gnosis Chain is straightforward for Ethereum developers as it is an EVM compatible chain. Smart contracts can be written and deployed in the same way as for Ethereum just by setting a different RPC endpoint.

Any contract that works on the Ethereum mainnet can be redeployed to the Gnosis chain. Transaction costs are minimized, and all fees and transactions are paid with a single token (xDai). Many tools supporting Ethereum development are compatible with Gnosis Chain.

Official quick links: [Website](https://gnosis.io/), [Docs](https://developers.gnosischain.com/), [GitHub](https://github.com/gnosis)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Gnosis Chain through Ankr's infrastructure, add a required Gnosis Chain network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Gnosis Chain Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Gnosis Chain Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/gnosis/`.
      * **Chain ID**: `100`.
      * **Currency symbol**: `xDai`.
      * **Block explorer URL**: `https://blockscout.com/xdai/mainnet/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Gnosis Chain Mainnet.

### API methods

For Gnosis, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/gnosis \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/gnosis"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/gnosis'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/gnosis'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "result":"0x17d5c3d",
  "id":1
}
```

---

## Harmony

Harmony is a fast and secure blockchain for decentralized applications. Production mainnet is expected to support 4 shards of 1000 nodes, producing blocks in 2 seconds with finality.

An Effective Proof-of-Stake (EPoS) reduces centralization while supporting stake delegation, reward compounding and double-sign slashing.

Official quick links: [Website](https://www.harmony.one/), [Docs](https://docs.harmony.one/home/), [GitHub](https://github.com/harmony-one)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Testnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Harmony through Ankr's infrastructure, add a required Harmony network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Harmony Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Harmony Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/harmony/`.
      * **Chain ID**: `1666600000`.
      * **Currency symbol**: `ONE`.
      * **Block explorer URL**: `https://explorer.harmony.one/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Harmony Mainnet.

### API methods

For Harmony, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`,

`hmyv2_getCurrentBadBlocks`, `hmyv2_getNodeMetadata`, `hmy_getFilterLogs`, `hmy_newFilter`, `eth_newPendingTransactionFilter`, `eth_newBlockFilter`, `hmy_getFilterChanges`, `hmy_syncing`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/harmony \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/harmony"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/harmony'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/harmony'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x206a48d"
}
```

---

## Huobi ECO Chain

> Available for [Premium](/rpc-service/service-plans/#service-plans-comparison) users only.

Huobi ECO Chain (HECO) is a decentralized, high-efficiency and energy-saving public chain. It is compatible
with smart contracts and supports high- performance transactions. The endogenous token of Heco is HT
and it adopts the HPoS consensus mechanism. Heco will continue to improve the efficiency of Ethereum
by Layer2, which will supplement and empower the Ethereum ecosystem.

Official quick links: [Website](https://www.hecochain.com/en-us/), [Docs](https://docs.hecochain.com/#/), [GitHub](https://github.com/stars-labs/)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Testnet (`HTTPS` and `WSS`)
</div>

### API methods

For HECO, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`, `debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

---

## IoTeX

IoTeX Network is the lightning-fast, ultra-secure, and highly scalable blockchain platform that connects real world data to on-chain Dapps.

Official quick links: [Website](https://iotex.io/), [Docs](https://docs.iotex.io/), [GitHub](https://github.com/iotexproject)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Testnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with IoTeX through Ankr's infrastructure, add a required IoTeX network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add IoTeX Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `IoTeX Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/iotex/`.
      * **Chain ID**: `4689`.
      * **Currency symbol**: `IOTX`.
      * **Block explorer URL**: `https://iotexscan.io/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with IoTeX Mainnet.

### API methods

For IoTeX, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  `eth_newFilter`,
  `eth_getFilterChanges`,
  `eth_syncing`,
  `eth_coinbase`,
  `eth_hashrate`,
  `eth_mining`,
  `eth_getWork`,
  `eth_submitWork`,
  `eth_submitHashrate`,
  `eth_accounts`,
  `eth_getStorageAt`,
  `eth_getUncleCountByBlockHash`,
  `eth_getUncleCountByBlockNumber`,
  `eth_sign`,
  `eth_signTransaction`,
  `eth_sendTransaction`,
  `eth_getUncleByBlockHashAndIndex`,
  `eth_getUncleByBlockNumberAndIndex`,
  `eth_newBlockFilter`,
  `eth_newPendingTransactionFilter`,
  `eth_uninstallFilter`,
  `eth_getFilterLogs`,
  `eth_pendingTransactions`,

  `debug_*`,
  `personal_*`,
  `admin_*`,
  `clique_*`,
  `les_*`,
  `miner_*`,
  `db_*`,
  `shh_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/iotex \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/iotex"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/iotex'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/iotex'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "id":1,
  "jsonrpc":"2.0",
  "result":"0x139dbf4"
}
```

---

## Klaytn

Klaytn is a highly optimized, BFT-based public blockchain that aims to meet the enterprise-grade reliability.

Key design goals are:

  * Immediate finality.
  * High TPS that meets real-world use cases.
  * Lower the cost of running Blockchain Applications.
  * Lower the barriers to entry for end-users.
  * Ease the technology adoption process for industry.

Official quick links: [Website](https://www.klaytn.foundation/), [Docs](https://docs.klaytn.foundation/), [GitHub](https://github.com/klaytn)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Klaytn through Ankr's infrastructure, add a required Klaytn network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Klaytn Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Klaytn Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/klaytn/`.
      * **Chain ID**: `8217`.
      * **Currency symbol**: `KLAY`.
      * **Block explorer URL**: `https://scope.klaytn.com/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Klaytn Mainnet.

### API methods

For Klaytn, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

[//]: # (Popular methods:)

[//]: # ()
[//]: # (  `klay_encodeAccountKey`,)

[//]: # (  `klay_decodeAccountKey`,)

[//]: # (  `klay_blockNumber`,)

[//]: # (  `klay_accountCreated`,)

[//]: # (  `klay_getAccount`,)

[//]: # (  `klay_getAccountKey`,)

[//]: # (  `klay_getBalance`,)

[//]: # (  `klay_getCode`,)

[//]: # (  `klay_getTransactionCount`,)

[//]: # (  `klay_isContractAccount`,)

[//]: # (  `klay_getHeaderByNumber`,)

[//]: # (  `klay_getHeaderByHash`,)

[//]: # (  `klay_getBlockByNumber`,)

[//]: # (  `klay_getBlockByHash`,)

[//]: # (  `klay_getBlockReceipts`,)

[//]: # (  `klay_getBlockTransactionCountByNumber`,)

[//]: # (  `klay_getBlockTransactionCountByHash`,)

[//]: # (  `klay_getBlockWithConsensusInfoByNumber`,)

[//]: # (  `klay_getBlockWithConsensusInfoByHash`,)

[//]: # (  `klay_getCommittee`,)

[//]: # (  `klay_getCommitteeSize`,)

[//]: # (  `klay_getCouncil`,)

[//]: # (  `klay_getCouncilSize`,)

[//]: # (  `klay_getStorageAt`,)

[//]: # (  `klay_call`,)

[//]: # (  `klay_estimateGas`,)

[//]: # (  `klay_estimateComputationCost`,)

[//]: # (  `klay_getTransactionByBlockHashAndIndex`,)

[//]: # (  `klay_getTransactionByBlockNumberAndIndex`,)

[//]: # (  `klay_getTransactionByHash`,)

[//]: # (  `klay_getTransactionBySenderTxHash`,)

[//]: # (  `klay_getTransactionReceipt`,)

[//]: # (  `klay_getTransactionReceiptBySenderTxHash`,)

[//]: # (  `klay_getDecodedAnchoringTransactionByHash`,)

[//]: # (  `klay_chainID`,)

[//]: # (  `klay_gasPrice`,)

[//]: # (  `klay_gasPriceAt`,)

[//]: # (  `klay_feeHistory`,)

[//]: # (  `klay_maxPriorityFeePerGas`,)

[//]: # (  `klay_sha3`,)

[//]: # ()
[//]: # (  `klay_getLogs`,)

[//]: # ()
[//]: # (  `klay_accountCreated` 1,)

[//]: # (  `klay_getAccount` 1,)

[//]: # (  `klay_getAccountKey` 1,)

[//]: # (  `klay_getBalance` 1,)

[//]: # (  `klay_getCode` 1,)

[//]: # (  `klay_getTransactionCount` 1,)

[//]: # (  `klay_isContractAccount` 1,)

[//]: # (  `klay_getHeaderByNumber` 0,)

[//]: # (  `klay_getHeaderByHash`,)

[//]: # (  `klay_getBlockByNumber` 0,)

[//]: # (  `klay_getBlockByHash`,)

[//]: # (  `klay_getBlockReceipts`,)

[//]: # (  `klay_getBlockTransactionCountByNumber` 0,)

[//]: # (  `klay_getBlockTransactionCountByHash`,)

[//]: # (  `klay_getBlockWithConsensusInfoByNumber` 0,)

[//]: # (  `klay_getBlockWithConsensusInfoByHash`,)

[//]: # (  `klay_getCommittee` 0,)

[//]: # (  `klay_getCommitteeSize` 0,)

[//]: # (  `klay_getCouncil` 0,)

[//]: # (  `klay_getCouncilSize` 0,)

[//]: # (  `klay_getStorageAt` 2,)

[//]: # (  `klay_call` 1,)

[//]: # (  `klay_estimateComputationCost` 1,)

[//]: # (  `klay_getTransactionByBlockHashAndIndex`,)

[//]: # (  `klay_getTransactionByBlockNumberAndIndex` 0,)

[//]: # (  `klay_getTransactionByHash`,)

[//]: # (  `klay_getTransactionBySenderTxHash`,)

[//]: # (  `klay_getTransactionReceipt`,)

[//]: # (  `klay_getTransactionReceiptBySenderTxHash`,)

[//]: # (  `klay_getDecodedAnchoringTransactionByHash`,)

[//]: # (  `klay_gasPriceAt` 0,)

[//]: # (  `klay_feeHistory` 1,)

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`,

  `klay_sign`,
  `klay_syncing`,
  `klay_clientVersion`,
  `klay_isParallelDBWrite`,
  `klay_isSenderTxHashIndexingEnabled`,
  `klay_protocolVersion`,
  `klay_rewardbase`,
  `klay_getFilterChanges`,
  `klay_getFilterLogs`,
  `klay_newBlockFilter`,
  `klay_newFilter`,
  `klay_newPendingTransactionFilter`,
  `klay_uninstallFilter`,
  `net_listening`,
  `net_peerCount`,
  `net_peerCountByType`,
  `klay_sendTransaction`,
  `klay_sendTransactionAsFeePayer`,
  `klay_signTransaction`,
  `klay_signTransactionAsFeePayer`,

  `governance_*`,
  `mainbridge_*`,
  `subbridge_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/klaytn \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/klaytn"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/klaytn'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/klaytn'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x65aab81"
}
```

---

## Kusama

> Available for [Premium](/rpc-service/service-plans/#service-plans-comparison) users only.

Kusama is an early release of Polkadot: a scalable, multichain network for radical innovation. Kusama serves as a proving ground that allows teams and developers to build and deploy a parachain, and experiment with Polkadot’s governance and NPoS functionality in a real environment.

Official quick links: [Website](https://kusama.network/), [Docs](https://guide.kusama.network/docs/kusama-getting-started), [GitHub](https://github.com/paritytech/polkadot)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### API methods

For Kusama, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  `state_getMetadata`,
  `state_getPairs`,
  `state_traceBlock`,
  `state_trieMigrationStatus`,
  `state_subscribeStorage`,
  `state_unsubscribeStorage`,
  `state_queryStorage`,
  `sync_state_genSyncSpec`,
  `system_accountNextIndex`,
  `system_addLogFilter`,
  `system_addReservedPeer`,
  `system_health`,
  `system_localListenAddresses`,
  `system_localPeerId`,
  `system_name`,
  `system_nodeRoles`,
  `system_peers`,
  `system_properties`,
  `system_removeReservedPeer`,
  `system_reservedPeers`,
  `system_resetLogFilter`,
  `system_syncState`,
  `system_unstable_networkState`,
  `system_version`,

  `account_*`,
  `babe_*`,
  `mmr_*`,
  `dev_*`,
  `offchain_*`,
  `author_*`

---

## Moonbeam

Moonbeam is the most Ethereum compatible smart-contract parachain in the Polkadot ecosystem. It combines the best of both worlds: the familiar and easy-to-use tooling of Ethereum and the scalable, interoperable architecture of Polkadot.

Official quick links: [Website](https://moonbeam.network/), [Docs](https://docs.moonbeam.network/), [GitHub](https://github.com/PureStake/moonbeam)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Moonbeam through Ankr's infrastructure, add a required Moonbeam network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Moonbeam Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Moonbeam Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/moonbeam/`.
      * **Chain ID**: `1284`.
      * **Currency symbol**: `GLMR`.
      * **Block explorer URL**: `https://moonbeam.moonscan.io/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Moonbeam Mainnet.

### API methods

For Moonbeam, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/moonbeam \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/moonbeam"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/moonbeam'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/moonbeam'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "result":"0x23218d",
  "id":1
}
```

---

## NEAR

NEAR is a user-friendly and carbon-neutral blockchain, built from the ground up to be performant, secure, and infinitely scalable.

In technical terms, NEAR is a layer one, sharded, proof-of-stake blockchain built with usability in mind.

Official quick links: [Website](https://near.org/), [Docs](https://docs.near.org/), [GitHub](https://github.com/near)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS`)
</div>

### API methods

For Near, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  `sandbox_patch_state`,
  `status`,
  `network_info` 

---

## Nervos

Nervos blockchain, also known as Common Knowledge Base, is the rock-bottom layer of the Nervos ecosystem. As the foundation, Nervos blockchain provides trust for all the layers built on top of it. It is designed to maximize decentralization while remaining minimal, flexible, and secure. Its primary objective is to reliably preserve any data and assets stored therein.

Official quick links: [Website](https://www.nervos.org/), [CKB Docs](https://docs.nervos.org/), [Godwoken Docs](https://docs.godwoken.io/), [GitHub](https://github.com/godwokenrises/godwoken)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Standard EVM and Polyjuice API (`HTTPS`)
  * Godwoken API (`HTTPS`)
  * CKB API (`HTTPS` and `WSS`)
</div>

### API methods

For Nervos, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

[//]: # (Popular methods:)

[//]: # ()
[//]: # (  `gw_ping`,)

[//]: # (  `gw_get_node_info`,)

[//]: # (  `gw_get_block_hash`,)

[//]: # (  `gw_get_block`,)

[//]: # (  `gw_get_block_by_number`,)

[//]: # (  `gw_get_block_committed_info`,)

[//]: # (  `gw_get_balance`,)

[//]: # (  `gw_get_storage_at`,)

[//]: # (  `gw_get_account_id_by_script_hash`,)

[//]: # (  `gw_get_nonce`,)

[//]: # (  `gw_get_script`,)

[//]: # (  `gw_get_script_hash`,)

[//]: # (  `gw_get_script_hash_by_short_address`,)

[//]: # (  `gw_get_data`,)

[//]: # (  `gw_get_transaction`,)

[//]: # (  `gw_get_transaction_receipt`,)

[//]: # (  `gw_get_withdrawal`,)

[//]: # (  `gw_execute_l2transaction`,)

[//]: # (  `gw_execute_raw_l2transaction`,)

[//]: # (  `gw_compute_l2_sudt_script_hash`,)

[//]: # (  `gw_get_fee_config`,)

[//]: # (  `gw_get_last_submitted_info`,)

[//]: # ()
[//]: # (  `poly_getEthAddressByGodwokenShortAddress`,)

[//]: # (  `poly_getChainInfo`,)

[//]: # (  `poly_getDefaultFromAddress`,)

[//]: # (  `poly_getContractValidatorTypeHash`,)

[//]: # (  `poly_getRollupTypeHash`,)

[//]: # (  `poly_getRollupConfigHash`,)

[//]: # (  `poly_getEthAccountLockHash`,)

[//]: # (  `poly_getCreatorId`,)

[//]: # ()
[//]: # (  `get_block`,)

[//]: # (  `get_block_by_number`,)

[//]: # (  `get_header`,)

[//]: # (  `get_header_by_number`,)

[//]: # (  `get_transaction`,)

[//]: # (  `get_block_hash`,)

[//]: # (  `get_tip_header`,)

[//]: # (  `get_live_cell`,)

[//]: # (  `get_tip_block_number`,)

[//]: # (  `get_current_epoch`,)

[//]: # (  `get_epoch_by_number`,)

[//]: # (  `get_block_economic_state`,)

[//]: # (  `get_transaction_proof`,)

[//]: # (  `verify_transaction_proof`,)

[//]: # (  `get_fork_block`,)

[//]: # (  `get_consensus`,)

[//]: # (  `get_block_median_time`,)

[//]: # (  `dry_run_transaction`,)

[//]: # (  `calculate_dao_maximum_withdraw`,)

[//]: # (  `tx_pool_info`,)

[//]: # (  `get_raw_tx_pool`,)

[//]: # (  `tx_pool_ready`,)

[//]: # (  `get_blockchain_info`,)

[//]: # ()
[//]: # (  `poly_getDefaultFromAddress`,)

[//]: # (  `poly_getContractValidatorTypeHash`,)

[//]: # (  `poly_getRollupTypeHash`,)

[//]: # (  `poly_getRollupConfigHash`,)

[//]: # (  `poly_getEthAccountLockHash`,)

[//]: # (  `poly_getCreatorId`)

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`,

  `send_alert`,
  `process_block_without_verify`,
  `truncate`,
  `generate_block`,
  `notify_transaction`,
  `generate_block_with_template`,
  `calculate_dao_field`,
  `get_block_template`,
  `submit_block`,
  `local_node_info`,
  `get_peers`,
  `get_banned_addresses`,
  `clear_banned_addresses`,
  `set_ban`,
  `sync_state`,
  `set_network_active`,
  `add_node`,
  `remove_node`,
  `ping_peers`,
  `clear_tx_pool` 

### API querying

Below are the request examples applicable for Standard EVM and Polyjuice API.

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/nervos \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/nervos"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/nervos'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/nervos'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x37e7d"
}
```

---

## Optimism

Optimism is a low-cost and lightning-fast Ethereum L2 blockchain, but it's also so much more than that.

With the OVM 2.0 upgrade, which happened on November 11th, 2021, the Optimism protocol went through its biggest upgrade to date. The primary focus of this upgrade was EVM Equivalence (opens new window), a new design for Optimism that brought it close to 1:1 parity with Ethereum.

Official quick links: [Website](https://www.optimism.io/), [Docs](https://community.optimism.io/), [GitHub](https://github.com/ethereum-optimism)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Testnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Optimism through Ankr's infrastructure, add a required Optimism network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Optimism Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Optimism Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/optimism/`.
      * **Chain ID**: `10`.
      * **Currency symbol**: `ETH`.
      * **Block explorer URL**: `https://optimistic.etherscan.io/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Optimism Mainnet.

### API methods

For Optimism, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/optimism \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/optimism"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/optimism'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/optimism'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x249c491"
}
```

---

## Polkadot

> Available for [Premium](/rpc-service/service-plans/#service-plans-comparison) users only.

Polkadot is the first fully-sharded blockchain.

Polkadot enables scalability by allowing specialized blockchains to communicate with each other in a secure, trust-free environment.

Polkadot is built to connect and secure unique blockchains, whether they be public, permissionless networks, private consortium chains, or other Web3 technologies. It enables an internet where independent blockchains can exchange information under common security guarantees.

Official quick links: [Website](https://polkadot.network/), [Docs](https://wiki.polkadot.network/), [GitHub](https://github.com/paritytech/polkadot)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### API methods

For Polkadot, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

[//]: # (Popular methods:)

[//]: # ()
[//]: # (  `state_call`,)

[//]: # (  `state_callAt`,)

[//]: # (  `state_getRuntimeVersion`,)

[//]: # ()
[//]: # (  `payment_queryInfo`,)

[//]: # (  `payment_queryFeeDetails`,)

[//]: # ()
[//]: # (  `chain_getBlock`,)

[//]: # (  `chain_getBlockHash`,)

[//]: # (  `chain_getHeader`,)

[//]: # (  `chain_getFinalisedHead`,)

[//]: # (  `chain_getFinalizedHead`,)

[//]: # (  `chain_getHead`,)

[//]: # (  `chain_getRuntimeVersion`,)

[//]: # ()
[//]: # (  `childstate_getKeys`,)

[//]: # (  `childstate_getKeysPaged`,)

[//]: # (  `childstate_getKeysPagedAt`,)

[//]: # (  `childstate_getStorage`,)

[//]: # (  `childstate_getStorageEntries`,)

[//]: # (  `childstate_getStorageHash`,)

[//]: # (  `childstate_getStorageSize`,)

[//]: # ()
[//]: # (  `grandpa_proveFinality`,)

[//]: # (  `grandpa_roundState`,)

[//]: # ()
[//]: # (  `rpc_methods`,)

[//]: # ()
[//]: # (  `beefy_getFinalizedHead`,)

[//]: # ()
[//]: # (  `state_getReadProof`,)

[//]: # (  `state_getChildReadProof`,)

[//]: # (  `state_getKeys`,)

[//]: # (  `state_getKeysPaged`,)

[//]: # (  `state_getKeysPagedAt`,)

[//]: # (  `state_getStorage`,)

[//]: # (  `state_getStorageAt`,)

[//]: # (  `state_getStorageHash`,)

[//]: # (  `state_getStorageHashAt`,)

[//]: # (  `state_getStorageSize`,)

[//]: # (  `state_getStorageSizeAt`,)

[//]: # ()
[//]: # (  `system_chain`,)

[//]: # (  `system_chainType`)

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  `state_getMetadata`,
  `state_getPairs`,
  `state_traceBlock`,
  `state_trieMigrationStatus`,
  `state_subscribeStorage`,
  `state_unsubscribeStorage`,
  `state_queryStorage`,
  `sync_state_genSyncSpec`,
  `system_accountNextIndex`,
  `system_addLogFilter`,
  `system_addReservedPeer`,
  `system_health`,
  `system_localListenAddresses`,
  `system_localPeerId`,
  `system_name`,
  `system_nodeRoles`,
  `system_peers`,
  `system_properties`,
  `system_removeReservedPeer`,
  `system_reservedPeers`,
  `system_resetLogFilter`,
  `system_syncState`,
  `system_unstable_networkState`,
  `system_version`,

  `account_*`,
  `babe_*`,
  `mmr_*`,
  `dev_*`,
  `offchain_*`,
  `author_*` 

---

## Polygon

Polygon is a scaling solution for public blockchains that combines the best of Ethereum and sovereign blockchains to offer a full-stack scaling solution.

Official quick links: [Website](https://polygon.technology/), [Docs](https://wiki.polygon.technology/), [GitHub](https://github.com/maticnetwork/)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Testnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Polygon through Ankr's infrastructure, add a required Polygon network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Polygon Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Polygon Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/polygon/`.
      * **Chain ID**: `137`.
      * **Currency symbol**: `MATIC`.
      * **Block explorer URL**: `https://polygonscan.com/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Polygon Mainnet.

### API methods

For Polygon, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/polygon \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/polygon"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/polygon'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/polygon'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x21fbd0f"
}
```

---

[//]: # (## Secret Network)

[//]: # ()
[//]: # (> Available for [Premium]&#40;/rpc-service/service-plans/#service-plans-comparison&#41; users only.)

[//]: # ()
[//]: # (Secret Network is the first blockchain with customizable privacy. You get to choose what you share, who you share with, and how long you share it for. This protects users and empowers developers to build a better Web3.)

[//]: # ()
[//]: # (Official quick links: [Website]&#40;https://scrt.network/&#41;, [Docs]&#40;https://docs.scrt.network/secret-network-documentation/&#41;, [GitHub]&#40;https://github.com/scrtlabs/SecretNetwork&#41;)

[//]: # ()
[//]: # (### Networks)

[//]: # ()
[//]: # (<div className="list-with-custom-top-margin mt-6">)

[//]: # (  * Secret Network RPC API &#40;`HTTPS`&#41;)

[//]: # (  * Secret Network Tendermint REST API &#40;`HTTPS`&#41;)

[//]: # (  * Secret Network Cosmos REST API &#40;`HTTPS`&#41;)

[//]: # (</div>)

[//]: # ()
[//]: # (### API methods)

[//]: # ()
[//]: # (For Secret Network, we support blockchain interaction via all the applicable methods except for those listed as unsupported.)

[//]: # ()
[//]: # (#### Unsupported)

[//]: # ()
[//]: # (<Callout type="tip">)

[//]: # (There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales &#40;`sales@ankr.com`&#41; about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.)

[//]: # (</Callout>)

[//]: # ()
[//]: # (Tendermint &#40;both for REST and JSON-RPC&#41;:)

[//]: # ()
[//]: # (  `/health`,)

[//]: # (  `/status`,)

[//]: # (  `/net_info`,)

[//]: # (  `/genesis`,)

[//]: # (  `/broadcast_evidence`,)

[//]: # (  `/dial_seeds`,)

[//]: # (  `/dial_peers`,)

[//]: # ()
[//]: # (Cosmos:)

[//]: # ()
[//]: # (  `/cosmos/auth/v1beta1/address_by_id/:id`,)

[//]: # (  `/cosmos/auth/v1beta1/module_accounts`,)

[//]: # (  `/cosmos/auth/v1beta1/bech32`,)

[//]: # (  `/cosmos/auth/v1beta1/bech32/:address_bytes`,)

[//]: # (  `/cosmos/auth/v1beta1/bech32/:address_string`,)

[//]: # (  `/cosmos/bank/v1beta1/supply/by_denom`,)

[//]: # (  `/cosmos/bank/v1beta1/denom_owners/:denom`,)

[//]: # (  `/cosmos/bank/v1beta1/send_enabled`,)

[//]: # (  `/cosmos/base/reflection/v1beta1/interfaces`,)

[//]: # (  `/cosmos/base/reflection/v1beta1/interfaces/:interface_name/implementations`,)

[//]: # (  `/cosmos/base/reflection/v1beta1/app_descriptor/authn`,)

[//]: # (  `/cosmos/base/reflection/v1beta1/app_descriptor/chain`,)

[//]: # (  `/cosmos/base/reflection/v1beta1/app_descriptor/codec`,)

[//]: # (  `/cosmos/base/reflection/v1beta1/app_descriptor/configuration`,)

[//]: # (  `/cosmos/base/reflection/v1beta1/app_descriptor/query_services`,)

[//]: # (  `/cosmos/base/reflection/v1beta1/app_descriptor/tx_descriptor`,)

[//]: # (  `/cosmos/base/tendermint/v1beta1/abci_query`,)

[//]: # (  `/cosmos/feegrant/v1beta1/issued/:granter`,)

[//]: # (  `/cosmos/gov/v1/proposals/:proposal_id`,)

[//]: # (  `/cosmos/gov/v1/proposals`,)

[//]: # (  `/cosmos/gov/v1/proposals/:proposal_id/votes/:voter`,)

[//]: # (  `/cosmos/gov/v1/proposals/:proposal_id/votes`,)

[//]: # (  `/cosmos/gov/v1/params/:params_type`,)

[//]: # (  `/cosmos/gov/v1/proposals/:proposal_id/deposits/:depositor`,)

[//]: # (  `/cosmos/gov/v1/proposals/:proposal_id/deposits`,)

[//]: # (  `/cosmos/gov/v1/proposals/:proposal_id/tally`,)

[//]: # (  `/cosmos/group/v1/group_info/:group_id`,)

[//]: # (  `/cosmos/group/v1/group_policy_info/:address`,)

[//]: # (  `/cosmos/group/v1/group_members/:group_id`,)

[//]: # (  `/cosmos/group/v1/groups_by_admin/:admin`,)

[//]: # (  `/cosmos/group/v1/group_policies_by_group/:group_id`,)

[//]: # (  `/cosmos/group/v1/group_policies_by_admin/:admin`,)

[//]: # (  `/cosmos/group/v1/proposal/:proposal_id`,)

[//]: # (  `/cosmos/group/v1/proposals_by_group_policy/:address`,)

[//]: # (  `/cosmos/group/v1/vote_by_proposal_voter/:proposal_id/:voter`,)

[//]: # (  `/cosmos/group/v1/votes_by_proposal/:proposal_id`,)

[//]: # (  `/cosmos/group/v1/votes_by_voter/:voter`,)

[//]: # (  `/cosmos/group/v1/groups_by_member/:address`,)

[//]: # (  `/cosmos/group/v1/proposals/:proposal_id/tally`,)

[//]: # (  `/cosmos/nft/v1beta1/balance/:owner/:class_id`,)

[//]: # (  `/cosmos/nft/v1beta1/owner/:class_id/:id`,)

[//]: # (  `/cosmos/nft/v1beta1/supply/:class_id`,)

[//]: # (  `/cosmos/nft/v1beta1/nfts`,)

[//]: # (  `/cosmos/nft/v1beta1/nfts/:class_id/:id`,)

[//]: # (  `/cosmos/nft/v1beta1/classes/:class_id`,)

[//]: # (  `/cosmos/nft/v1beta1/classes`,)

[//]: # (  `/cosmos/params/v1beta1/subspaces`,)

[//]: # (  `/cosmos/upgrade/v1beta1/module_versions`,)

[//]: # (  `/cosmos/upgrade/v1beta1/authority`,)

[//]: # (  `/cosmos/base/tendermint/v1beta1/node_info`,)

[//]: # (  `/cosmos/base/tendermint/v1beta1/syncing`,)

[//]: # (  `/cosmos/params/v1beta1/params`,)

[//]: # ()
[//]: # (  `/syncing`,)

[//]: # (  `/blocks/latest`,)

[//]: # (  `/blocks/:height`,)

[//]: # (  `/validatorsets/latest`,)

[//]: # (  `/validatorsets/:height`,)

[//]: # ()
[//]: # (  `/wasm/code`,)

[//]: # (  `/wasm/code/:codeID`,)

[//]: # (  `/wasm/code/:codeID/contracts`,)

[//]: # (  `/wasm/contract/:contractAddress`,)

[//]: # (  `/wasm/contract/:contractAddress/code-hash`,)

[//]: # (  `/wasm/contract/:contractAddress/query/:query`,)

[//]: # (  `/wasm/code/:codeID/hash`,)

[//]: # ()
[//]: # (  `/reg/consensus-io-exch-pubkey`)

[//]: # ()
[//]: # (---)

## Solana

Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.

Official quick links: [Website](https://solana.com/), [Docs](https://docs.solana.com/), [GitHub](https://github.com/solana-labs)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
  * Devnet (`HTTPS` and `WSS`)
</div>

### API methods

For Solana, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

[//]: # (Popular methods:)

[//]: # ()
[//]: # (  `getAccountInfo`,)

[//]: # (  `getBalance`,)

[//]: # (  `getMultipleAccounts`,)

[//]: # (  `getProgramAccounts`,)

[//]: # (  `getTokenAccountBalance`,)

[//]: # (  `getBlockTime`,)

[//]: # (  `getFees`,)

[//]: # (  `getFirstAvailableBlock`,)

[//]: # (  `getLargestAccounts`,)

[//]: # (  `getTokenLargestAccounts`,)

[//]: # (  `getRecentBlockhash`,)

[//]: # (  `getSlot`,)

[//]: # (  `getVersion`,)

[//]: # (  `getClusterNodes`,)

[//]: # (  `getGenesisHash`,)

[//]: # (  `getIdentity`,)

[//]: # (  `getRecentPerformanceSamples`,)

[//]: # (  `getSnapshotSlot`,)

[//]: # ()
[//]: # (  `getBlock`,)

[//]: # (  `getBlocks`,)

[//]: # (  `getBlocksWithLimit`,)

[//]: # (  `getFeeCalculatorForBlockhash`,)

[//]: # (  `getStakeActivation`,)

[//]: # (  `getSupply`,)

[//]: # (  `getTokenSupply`,)

[//]: # (  `getTransaction`,)

[//]: # ()
[//]: # (  `getConfirmedBlock`,)

[//]: # (  `getConfirmedBlocks`,)

[//]: # (  `getConfirmedBlocksWithLimit`,)

[//]: # (  `getConfirmedTransaction`,)

[//]: # ()
[//]: # (  `getProgramAccounts`,)

[//]: # (  `getTokenLargestAccounts`,)

[//]: # (  `getTokenAccountsByDelegate`,)

[//]: # (  `getTokenAccountsByOwner`)

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

---

## Sui

Sui is the first permissionless Layer 1 blockchain designed from the ground up to enable creators and developers to build experiences that cater to the next billion users in Web3. Sui is horizontally scalable to support a wide range of application development with unrivaled speed at low cost.

Official quick links: [Website](https://sui.io/), [Docs](https://docs.sui.io/), [GitHub](https://github.com/MystenLabs)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Testnet (`HTTPS` and `WSS`)
</div>

### API methods

For Sui, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

[//]: # ()
[//]: # ([//]: # &#40;Popular methods:&#41;)
[//]: # ()
[//]: # ([//]: # &#40;&#41;)
[//]: # ([//]: # &#40;  `sui_getObjectsOwnedByAddress`,&#41;)
[//]: # ()
[//]: # ([//]: # &#40;  `sui_getObjectsOwnedByObject`,&#41;)
[//]: # ()
[//]: # ([//]: # &#40;  `sui_getObject`,&#41;)
[//]: # ()
[//]: # ([//]: # &#40;  `sui_getRawObject`,&#41;)
[//]: # ()
[//]: # ([//]: # &#40;  `sui_getRecentTransactions`,&#41;)
[//]: # ()
[//]: # ([//]: # &#40;  `sui_getTotalTransactionNumber`,&#41;)
[//]: # ()
[//]: # ([//]: # &#40;  `sui_syncAccountState`,&#41;)
[//]: # ()
[//]: # ([//]: # &#40;&#41;)
[//]: # ([//]: # &#40;  `sui_getTransactionsInRange`,&#41;)
[//]: # ()
[//]: # ([//]: # &#40;  `sui_getTransaction`&#41;)
[//]: # ()

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

None

---

## Syscoin

Syscoin is a Proof-of-Work blockchain solution merge-mined with Bitcoin. At its base is a dual-chain Layer 1: the core is the Syscoin native blockchain, and running in tandem with it is an Ethereum Virtual Machine (EVM) chain called NEVM (Network-Enhanced Virtual Machine), which provides modularity, enhanced security, and full byte-for-byte Ethereum compatibility.

Official quick links: [Website](https://syscoin.org/), [Docs](https://docs.syscoin.org/docs/intro/syscoin-what/), [GitHub](https://github.com/syscoin)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS` and `WSS`)
</div>

### Add networks to MetaMask

Using Ankr as the blockchain provider for MetaMask makes user interaction on Web3 not just easy and slick but also PRIVATE. We DON'T collect users' blockchain addresses — end of the story. Feel free to check our [terms](https://www.ankr.com/terms/
) and [privacy policy](https://www.ankr.com/privacy-policy/) to be sure.

For MetaMask to interact with Syscoin through Ankr's infrastructure, add a required Syscoin network either via RPC Service's or MetaMask's UI.

#### Via RPC Service

To be added soon.

#### Via MetaMask

To add Syscoin Mainnet, follow this steps:

  1. In MetaMask extension, click **Networks** (drop-down menu) **> Add network** to open **Settings**.
  2. In the **Add a network** pane, click **Add a network manually**, then enter the network details and click **Save**:

      * **Network name**: `Syscoin Mainnet by Ankr RPC`.
      * **New RPC URL**: `https://rpc.ankr.com/syscoin/`.
      * **Chain ID**: `57`.
      * **Currency symbol**: `SYS`.
      * **Block explorer URL**: `https://explorer.syscoin.org/`.

Congrats — you've just added Ankr as the blockchain provider for MetaMask to interact with Syscoin Mainnet.

### API methods

For Syscoin, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

`eth_newFilter`, `eth_getFilterChanges`, `eth_syncing`, `eth_coinbase`, `eth_hashrate`, `eth_mining`, `eth_getWork`,`eth_submitWork`, `eth_submitHashrate`, `net_peerCount`,

`debug_*`, `personal_*`, `admin_*`, `clique_*`, `les_*`, `miner_*`, `engine_*`, `parity_*`

### API querying

#### Request example

<Tabs
  items={[
    "cURL",
    "Golang",
    "Web3.JS",
    "Python",
  ]}
>
  <Tab>

```shell
curl -X POST https://rpc.ankr.com/syscoin \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc":"2.0",
      "method":"eth_blockNumber",
      "params": [],
      "id":1
    }'
```
  </Tab>
  <Tab>

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url = "https://rpc.ankr.com/syscoin"  // url string
    
    rpcClient,err := ethclient.Dial(url)
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
  </Tab>
  <Tab>

```js
const Web3 = require('web3');

const url = 'https://rpc.ankr.com/syscoin'  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});
```
  </Tab>
  <Tab>

```python
from web3 import Web3
          
def test_block_number(self):
    url = 'https://rpc.ankr.com/syscoin'  # url string
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
  </Tab>
</Tabs>

#### Response example

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x2fb1c"
}
```

---

## Tron

TRON is an open source public blockchain platform that supports smart contracts. TRON is compatible with Ethereum, which means that you can migrate smart contracts on Ethereum to TRON directly or with minor modifications. TRON relies on a unique consensus mechanism to realize the high TPS of the TRON network that is far beyond Ethereum, bringing developers a good experience of a faster transaction.

Official quick links: [Website](https://tron.network/), [Docs](https://developers.tron.network/), [GitHub](https://github.com/tronprotocol)

### Networks

<div className="list-with-custom-top-margin mt-6">
  * Mainnet (`HTTPS`)
</div>

### API methods

For Tron, we support blockchain interaction via all the applicable methods except for those listed as unsupported.

[//]: # (Popular methods:)

[//]: # ()
[//]: # (  `/wallet/getnowblock`,)

[//]: # (  `/wallet/getblockbynum`,)

[//]: # (  `/wallet/getblockbyid`,)

[//]: # (  `/wallet/gettransactionbyid`,)

[//]: # (  `/wallet/getaccountbalance`,)

[//]: # (  `/wallet/gettransactioncountbyblocknum`,)

[//]: # (  `/wallet/gettransactioninfobyblocknum`,)

[//]: # (  `/wallet/getaccount`,)

[//]: # (  `/wallet/getassetissuelist`,)

[//]: # (  `/wallet/getpaginatedassetissuelist`,)

[//]: # (  `/wallet/getpaginatedproposallist`,)

[//]: # (  `/wallet/getpaginatedexchangelist`,)

[//]: # (  `/wallet/getcontract`,)

[//]: # (  `/wallet/getproposalbyid`,)

[//]: # (  `/wallet/listproposals`,)

[//]: # (  `/wallet/getaccountresource`,)

[//]: # (  `/wallet/getexchangebyid`,)

[//]: # (  `/wallet/listexchanges`,)

[//]: # (  `/wallet/getchainparameters`,)

[//]: # (  `/wallet/getdelegatedresource`,)

[//]: # (  `/wallet/getdelegatedresourceaccountindex`,)

[//]: # (  `/wallet/getaccountbyid`,)

[//]: # (  `/wallet/getdeferredtransactionbyid`,)

[//]: # (  `/wallet/getdeferredtransactioninfobyid`,)

[//]: # (  `/wallet/triggerconstantcontract`,)

[//]: # (  `/wallet/getmerkletreevoucherinfo`,)

[//]: # ()
[//]: # (  `/walletsolidity/getnowblock`,)

[//]: # (  `/walletsolidity/getblockbynum`,)

[//]: # (  `/walletsolidity/getblockbyid`,)

[//]: # (  `/walletsolidity/gettransactionbyid`,)

[//]: # (  `/walletsolidity/getaccountbalance`,)

[//]: # (  `/walletsolidity/gettransactioncountbyblocknum`,)

[//]: # (  `/walletsolidity/gettransactioninfobyblocknum`,)

[//]: # (  `/walletsolidity/getaccount`,)

[//]: # (  `/walletsolidity/getassetissuelist`,)

[//]: # (  `/walletsolidity/getpaginatedassetissuelist`,)

[//]: # (  `/walletsolidity/getpaginatedproposallist`,)

[//]: # (  `/walletsolidity/getpaginatedexchangelist`,)

[//]: # (  `/walletsolidity/getcontract`,)

[//]: # (  `/walletsolidity/getproposalbyid`,)

[//]: # (  `/walletsolidity/listproposals`,)

[//]: # (  `/walletsolidity/getaccountresource`,)

[//]: # (  `/walletsolidity/getexchangebyid`,)

[//]: # (  `/walletsolidity/listexchanges`,)

[//]: # (  `/walletsolidity/getchainparameters`,)

[//]: # (  `/walletsolidity/getdelegatedresource`,)

[//]: # (  `/walletsolidity/getdelegatedresourceaccountindex`,)

[//]: # (  `/walletsolidity/getaccountbyid`,)

[//]: # (  `/walletsolidity/getdeferredtransactionbyid`,)

[//]: # (  `/walletsolidity/getdeferredtransactioninfobyid`,)

[//]: # (  `/walletsolidity/triggerconstantcontract`,)

[//]: # (  `/walletsolidity/getmerkletreevoucherinfo`,)

[//]: # ()
[//]: # (  `/wallet/getblockbylimitnext`,)

[//]: # (  `/wallet/getblockbylatestnum`,)

[//]: # ()
[//]: # (  `/some/archiveMethod`)

#### Unsupported

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  `/wallet/easytransferbyprivate`,
  `/wallet/easytransferassetbyprivate`,
  `/wallet/easytransfer`,
  `/wallet/easytransferasset`,
  `/wallet/gettransactionsign`,

And all the methods with the following segments in their path:

  `easytransferbyprivate`,
  `easytransferassetbyprivate`,
  `easytransfer`,
  `easytransferasset`,
  `gettransactionsign`,
  `createaddress`,
  `listnodes`,
  `generateaddress`,
  `getnodeinfo`,
  `addtransactionsign`,
  `getakfromask`,
  `getnkfromnsk`,
  `getspendingkey`,
  `getexpandedspendingkey`,
  `getdiversifier`,
  `getincomingviewingkey`,
  `createspendauthsig`,
  `getnewshieldedaddress`,
  `createshieldedtransaction`,
  `createshieldedcontractparameters`,
  `createshieldedcontractparameterswithoutask`,
  `scanshieldedtrc20notesbyivk`,
  `scanshieldedtrc20notesbyovk`,
  `isshieldedtrc20contractnotespent`