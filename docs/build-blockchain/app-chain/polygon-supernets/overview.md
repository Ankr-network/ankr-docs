---
title: Overview
id: overview
---


[Polygon Supernets](https://polygon.technology/supernets/) are a blockchain stack powered by Polygon Edge. You can also call it an ecosystem — a set of modules that work seamlessly together and add to each other's functionality.

They allow you to create a dedicated blockchain network optimized to fit your particular needs and easily deploy your Web3 applications on it without sacrificing security or performance. 

Supernets praise themselves for higher performance, constant and predictable throughput for multiple use cases, and customization through the configuration of every aspect of the blockchain network. Over 20 Web3 projects are using them.

## Architecture

Supernets offer an open platform with a L1 blockchain network — Polygon Edge. Though, Edge is not the only building block of Supernets, it is its heart.   

There are 6 main modules in the architecture of the Edge.

* JSON-RPC — the API layer that conforms to Ethereum client standards. It ensures tools such as Remix, Metamask, Web3.js, Ethers.js, Hardhat, and so on all work with Polygon Supernets.

* TX Pool — the module that holds pending transactions and acts as the transaction pool. Transaction can be added from multiple sources and it is closely linked with other modules within the Edge in an event-driven architecture.

* Blockchain — the state database that holds information about world state, smart contract code, accounts, and more. There are two key packages. The first is the RLP serializer that puts data in an Ethereum-readable format. The second is a data aggregator that puts data in Merkle Trees for fast lookups and verifications of immutability.

* Consensus — Supernets support consensus algorithms like IBFT PoA (Proof-of-Authority) and IBFT PoS (Proof-of-Stake).

* Libp2p — up-to-date peer to peer networking stack that facilitates consensus messages, block syncing, SAM Pool gossiping, and Tx pool gossiping.

* gRPC — robust communication protocol used for issuing privileged operator commands. Commands can only be run locally on validator nodes to run online backups, fetch validator information, and query and clean the Tx pool.

<img src={require('/img/app-chains/supernets/architecture-overview.png').default} alt="Card payment email" width="700" />

## Consensus
Supernets use IBFT PoA is the default consensus option. In IBFT, validators are responsible for creating the blocks that get added to the blockchain.

All validators make a dynamic set where validators can be added or removed through a voting mechanism. To be added or removed, a validator should be voted for by the 51% of the set.
This strengthens the security and promotes unbiased decisions.

Validators take turns in proposing the next block (round-robin), and for the block to be validated/inserted in the blockchain, more than 2/3 of the validators must approve it.

## Txs propagation
Transactions only need to be sent to a single node, typically one operated either by you or a trusted operator, which will in turn broadcast it to the entire network.

## Trustless secure environment 
Supernets are designed to operate in a trustless environment. Each node independently validates every transaction by executing the smart contract. All nodes are expected to have exactly the same copy of the blockchain ledger — a merkle tree of blocks and long lists of transactions in them. Malicious attemps to change the ledger can be easily detected by mismatched hashes from the different states that do not fit in the merkle tree.

## EVM support and smart contracts 
Supernet have built-in EVM (Etehreum Virtual Machine) support, which is a widespread standard in the blockchain space. It means smart contract on a Supernet are EVM bytecode compiled from high level languages, such as Solidity. 

Solidity contracts are easily ported to Supernets without any modifications. So, any developers with Ethereum building experience can do the same on Supernets, using tools including Truffle suite, Hardhat, MetaMask, Remix, and block explorers with ease.

## Token support 
With built-in EVM support, Supernets enable you to create custom tokens based on universally recognized interface such as ERC-20. 

## Modes of operation
Supernets can operate in different modes customized to what your project needs:
* Shared-Security Chain — an L1 blockchain network validated by professional validators who stake in order to validate your Supernet.
* L2 Chain — an even more scalable solution using ZK-rollups for Web3 applications.

## What can Ankr offer your Supernet?
Ankr is the leading Web3 infrastructure company. It has to offer the fastest, most reliable services to power any Web3 project or bring a Web2 project to blockchain.

Ankr advertizes App Chains as its own wholesome ecosystem of modules with full set up, maintenance and support.

As App Chains are gaining adoption and popularity, we are partnering with other similar ecosystems to extend their functionality and improve your experience as a client. 

Today, as an official Polygon Supernets partner, we are offering critical infrastructure for building on Polygon Supernets. 

With Ankr App Chains on your Supernet, you'll gain access to:
* **Block explorer** — the custom looking module to track and analyze txs, blocks, and addresses on your Supernet.
* **Validators** — the core of any PoS blockchain. You can also request Ankr as a trusted and highly reputable validator for your project.
* **Full nodes** — dedicated throughput for requests from the Web3 applications you're developing.
* **Archive nodes** — better historical requests scalability.
* **Ankr Gaming SDK** — to integrate Web3 capabilities into your game with  as we successfully did with [Meta Apes](https://medium.com/ankr-network/web3-game-meta-apes-makes-history-as-first-launch-on-binance-sidechains-ab05f5a7fcc9). The SDK supports Unreal Engine v4/v5, Unity, and allows you to optimize Web3 for mobile. 
* **White-labeled NFT marketplace** — to tokenize in-game assets or create your own marketplace.
* **Staking UI** — to enable staking functionality and attract more DeFi users. We support Liquid Staking on major platforms (MATIC, AVAX, BNB, DOT, ETH, FTM, KSM).
* **Cross-chain bridge support** — to bridge your tokens out to other Supernets and networks or into your Supernet.
* **Exchange-readiness program** — to provide Ankr’s expertise and guidance when you're applying to get your token listed on major CEXs.

## Reasons to use Ankr App Chains for your Supernet
There are [more than several reasons](https://medium.com/ankr-network/ankr-is-pulling-ahead-in-web3-infrastructure-f14384888862), but we'll try to be humble:
* Ankr is the world’s fastest growing decentralized node infrastructure provider.
* Ankr has immense experience with EVM-compatible chains including Polygon.
* Operate more than 2,000 validators for ETH2, BNB, Polygon, Avalanche, and Fantom.
* We would be glad to be a top validator node provider to each Supernets client!

## Who Supernets and Ankr are for?
Supernets are for any company who wants a dedicated blockchain for themselves to continue to build, launch and scale their applications.
An infrastructure provider to build all of their specific blockchain infrastructure along with additional features upon request.

Ankr App Chains are for any Supernets client who wants to improve security of their Supernet and enable the required functionality not yet found in their Supernet.






