import { Callout } from "components";

## Chains list

This docs section provides the list of all chains available on [RPC Service](https://www.ankr.com/rpc/). Each chain in the list contains a short overview and the networks supported. Moreover, it outlines the API methods to interact with the network and points you to the corresponding reference info. It also states clearly what methods (if any) aren't supported for a particular chain. And finally, it points you to the sections on adding a chain to MetaMask.

<img src="/docs/build/chain-info.png" alt="Chain info" class="responsive-pic" width="800" />

**Chains supported**

<table width="500">
  <tr>
    <th></th>
  </tr>
  <tr>
    <td>[Aptos](/rpc-service/chains/chains-list/#aptos)</td>
    <td>[Fantom](/rpc-service/chains/chains-list/#fantom)</td>
    <td>[Nervos](/rpc-service/chains/chains-list/#nervos)</td>
  </tr>
  <tr>
    <td>[Arbitrum](/rpc-service/chains/chains-list/#arbitrum)</td>
    <td>[Gnosis](/rpc-service/chains/chains-list/#gnosis)</td>
    <td>[Optimism](/rpc-service/chains/chains-list/#optimism)</td>
  </tr>
  <tr>
    <td>[Avalanche](/rpc-service/chains/chains-list/#avalanche)</td>
    <td>[Harmony](/rpc-service/chains/chains-list/#harmony)</td>
    <td>[Polygon](/rpc-service/chains/chains-list/#polygon)</td>
  </tr>
  <tr>
    <td>[Binance Smart Chain](/rpc-service/chains/chains-list/#binance-smart-chain)</td>
    <td>[IoTeX](/rpc-service/chains/chains-list/#iotex)</td>
    <td>[Secret Network](/rpc-service/chains/chains-list/#secret-network)</td>
  </tr>
  <tr>
    <td>[BitTorrent Chain](/rpc-service/chains/chains-list/#bittorrent-chain)</td>
    <td>[Klaytn](/rpc-service/chains/chains-list/#klaytn)</td>
    <td>[Solana](/rpc-service/chains/chains-list/#solana)</td>
  </tr>
  <tr>
    <td>[Celo](/rpc-service/chains/chains-list/#celo)</td>
    <td>[Moonbeam](/rpc-service/chains/chains-list/#moonbeam)</td>
    <td>[Syscoin](/rpc-service/chains/chains-list/#syscoin)</td>
  </tr>
  <tr>
    <td>[Ethereum](/rpc-service/chains/chains-list/#ethereum)</td>
    <td>[Near](/docs/rpc-service/chains/chains-list/#near)</td>
    <td>[Tron](/rpc-service/chains/chains-list/#tron)</td>
  </tr>
</table>


### Aptos

The Aptos blockchain, designed with scalability, safety, reliability, and upgradeability as key principles, to address blockchain challenges, such as frequent outages, high costs, low throughput limits, and security concerns. The Aptos blockchain has been developed over the past three years by over 350+ developers across the globe. It offers new and novel innovations in consensus, smart contract design, system security, performance, and decentralization. The combination of these technologies will provide a fundamental building block to bring web3 to the masses.

**Networks supported**

  * Mainnet (`HTTPS`)
  * Testnet (`HTTPS`)

**Methods supported**

The Aptos blockchain supports [Non-EVM API methods](/rpc-service/chains/chains-api-non-evm/) (except for those listed as unsupported) for interaction.

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  * `/v1/spec`
  * `/v1/-/healthy`

**Request example**

**Response example**


**Adding network to MetaMask**

---

### Arbitrum — ???

Arbitrum is a side chain that runs parallel to Ethereum Mainnet. Also known as a Layer 2 (L2) scaling solution, Arbitrum improves transaction speeds and cost compared to the mainnet, making it an excellent solution for Ethereum developers.

**Networks supported**

  * 

**Methods supported**

The Arbitrum blockchain supports [EVM API methods](/rpc-service/chains/chains-api-evm/) (except for those listed below) for interaction.

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  * `eth_newFilter`
  * `eth_getFilterChanges`
  * `eth_syncing`
  * `eth_coinbase`
  * `eth_hashrate`
  * `eth_mining`
  * `eth_getWork`
  * `eth_submitWork`
  * `eth_submitHashrate`
  * `net_peerCount`
  * `debug_*`
  * `personal_*`
  * `admin_*`
  * `clique_*`
  * `les_*`
  * `miner_*`
  * `engine_*`
  * `parity_*`

**Adding network to MetaMask**

---

### Avalanche

Avalanche is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem. Avalanche is the first decentralized smart contracts platform built for the scale of global finance, with near-instant transaction finality. Ethereum developers can quickly build on Avalanche as Solidity works out-of-the-box.

Avalanche is an ecosystem that features three built-in blockchains: [Exchange Chain (X-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform#exchange-chain-x-chain), [Platform Chain (P-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform#platform-chain-p-chain), and [Contract Chain (C-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform#contract-chain-c-chain).

**Networks supported**

  * X-Chain (`HTTPS`)
  * P-Chain (`HTTPS`)
  * C-Chain (`HTTPS`):
    * Standard EVM API (`HTTPS` and `WSS`)

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  * `eth_newFilter`
  * `eth_getFilterChanges`
  * `eth_syncing`
  * `eth_coinbase`
  * `eth_hashrate`
  * `eth_mining`
  * `eth_getWork`
  * `eth_submitWork`
  * `eth_submitHashrate`
  * `net_peerCount`
  * `debug_*`
  * `personal_*`
  * `admin_*`
  * `clique_*`
  * `les_*`
  * `miner_*`
  * `engine_*`
  * `parity_*`
  * `avm.createAddress`
  * `avm.exportKey`
  * `avm.importKey`
  * `avm.export`
  * `avm.import`
  * `avm.mint`
  * `avm.createFixedCapAsset`
  * `avm.createVariableCapAsset`
  * `avm.createNFTAsset`
  * `avm.mintNFT`
  * `avm.listAddresses`
  * `avm.send`
  * `avm.sendMultiple`
  * `avm.sendNFT`
  * `wallet.send`
  * `wallet.sendMultiple`
  * `wallet.issueTx`
  * `avax.export`
  * `avax.exportAVAX`
  * `avax.exportKey`
  * `avax.import`
  * `avax.importAVAX`
  * `avax.importKey`
  * `platform.addDelegator`
  * `platform.addValidator`
  * `platform.addSubnetValidator`
  * `platform.createAddress`
  * `platform.createBlockchain`
  * `platform.createSubnet`
  * `platform.exportAVAX`
  * `platform.exportKey`
  * `platform.importAVAX`
  * `platform.importKey`
  * `platform.listAddresses`

**Adding network to MetaMask**

---

### Binance Smart Chain — ??? (regarding its naming)

BNB Smart Chain (BSC) (previously Binance Smart Chain) is an innovative solution to bring programmability and interoperability to Beacon Chain. BNB Smart Chain relies on a system of 21 active validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality.

BNB Smart Chain supports EVM-compatible smart contracts and protocols. Cross-chain transfer and other communication are possible due to the native support of interoperability. Binance DEX remains a liquid venue of the exchange of assets on both chains. This dual-chain architecture will be ideal for users to take advantage of the fast trading on one side and build their decentralized apps on the other side. BNB Smart Chain brings the following advantages:

  * **A self-sovereign blockchain** — provides security and safety with elected validators.
  * **EVM-compatible** — supports all the existing Ethereum tooling along with faster finality and cheaper transaction fees.
  * **Interoperable** — comes with efficient native dual chain communication; optimized for scaling high-performance dApps that require a fast and smooth user experience.
  * **Distributed with on-chain governance** — Proof of Staked Authority (PoSA) brings in decentralization and community participants. As the native token, BNB will serve as both the gas of smart contract execution and tokens for staking.

**Networks supported**

  * Mainnet (`HTTPS` and `WSS`)
  * Testnet (`HTTPS` and `WSS`)

**Methods supported**

BNB Smart Chain supports [EVM API methods](/rpc-service/chains/chains-api-evm/) (except for those listed below) for interaction.

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  * 


**Adding network to MetaMask**

---

### BitTorrent Chain

Bittorrent-Chain (BTTC) is a layer 2 scaling solution, BTTC strives to solve scalability and usability issues without compromising decentralization, and can make full use of the existing Ethereum developer community and ecosystem. BTTC is fully compatible with Ethereum, and existing applications on Ethereum can be easily migrated to this BTTC. In addition to the same experience as Ethereum, users can also enjoy ultra-high throughput and extremely low fees.

Users can conduct fast, low-cost, and safe transactions on BTTC, and assets on BTTC can be easily transferred between Ethereum, TRON, and BNB Smart Chain.

**Networks supported**

  * Mainnet (`HTTPS` and `WSS`)
  * Testnet (`HTTPS` and `WSS`)

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

  * 

**Adding network to MetaMask**

---

### Celo

Celo is a mobile-first blockchain designed to make decentralized financial (DeFi) tools and services accessible to anyone with a mobile phone.

Celo is a layer 1 protocol and blockchain platform. The Celo Mainnet is entirely separate from the Ethereum network. The Celo client originated as a fork of Ethereum Go language client, [go-ethereum](https://geth.ethereum.org/docs/) (or geth). Celo has several significant differences, including a Proof-of-Stake-based Practical Byzantine Fault Tolerance (PBFT) consensus mechanism.

All the crypto assets on Celo have ERC-20 compliant interfaces, meaning that while they are not ERC-20 tokens on the Ethereum Mainnet, all familiar tooling and code that support ERC-20 tokens can be easily adapted for Celo assets, including Celo Native Asset (CELO) and Celo Dollar (cUSD).

**Networks supported**

  * 

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Ethereum

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Fantom

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Gnosis

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Harmony

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### IoTeX

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Klaytn

Klaytn is a highly optimized, BFT-based public blockchain that aims to meet the enterprise-grade reliability.

Key design goals are:

  * Immediate finality.
  * High TPS that meets real-world use cases.
  * Lower the cost of running Blockchain Applications.
  * Lower the barriers to entry for end-users.
  * Ease the technology adoption process for industry.

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Moonbeam

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Near

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Nervos

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Optimism

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Polygon

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Secret Network

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Solana

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Syscoin

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**

---

### Tron

**Networks supported**

**Methods supported**

**Methods unsupported**

<Callout type="tip">
There is a list of methods that we don't support for either _Public_ or _Premium_ service plans. If you find the required methods in that list, contact our Sales (`sales@ankr.com`) about moving to the _Enterprise_ service plan that can provide the services tailored to your specific needs.
</Callout>

**Adding network to MetaMask**