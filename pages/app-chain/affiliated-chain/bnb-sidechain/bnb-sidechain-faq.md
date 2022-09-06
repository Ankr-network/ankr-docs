### What is BNB Sidechain? 
The BNB Sidechain is an infrastructure introduced to help developers and node operators build and run their own blockchain as their internal value system for a massive number of users while still maintaining a close connection with BNB Smart Chain. Any project developer will be able to deploy their own BNB Sidechain with its unique specifications and validator set. This validator set can run with fewer validators than BNB Smart Chain, depending on the BNB Sidechain deployer. These validators can be run by the application owners or any community stakeholders, bringing more flexibility and decentralization to BNB Sidechain. The typical usage of BNB Sidechain is like the Ronin chain for the Axie Infinity.

First version will be formally announced at the end of March, 2022. For more technical details, read [this Notion article](https://golden-sloth-f7c.notion.site/BAS-Collaboration-3cea749adbc543599873919dc8a05c48).

### Do projects need permissions to set up BNB Sidechain? 
No, BNB Sidechain is permissionless. We have 3–4 games in the test pilot stage right now. Nodereal and Ankr will help them build on BNB Sidechain.

### What is the consensus mechanism for BNB Sidechain? 
TL;DR: Think of it as a "mini BNB Smart Chain".

BNB Sidechain uses Parlia consensus of BNB Smart Chain. Parlia is a Proof-of-Staked Authority (PoSA) consensus algorithm for BNB Smart Chain. It incorporates elements from both Proof-of-Stake and Proof-of-Authority. It is a BFT-like consensus where only one validator produces a block and to be sure of the correctness of this operations we must wait for the confirmation time, usually its 2/3*N+1, where N is active validators (15 blocks for the current configuration).

For more detail, read about Parlia on [Binance docs](https://docs.binance.org/smart-chain/guides/concepts/consensus.html#consensus-protocol).

### I've heard about the hack on Ronin. How does BNB Sidechain protect me from something like this?
The recent exploit discovered on Ronin illustrates the importance of having a diverse and decentralized group of validators and node operators serving the chain. Ankr will use its own token to help incentivize other node providers to support decentralization on BNB Sidechain.

### What is the cost for projects to adopt BNB Sidechain? 
Depends on whether the project wants to own their own BNB Sidechain, or they want it as a PaaS service. 

NodeReal or Ankr will provide it as PaaS, which includes validators, networks, tools, RPC service, and explorer. All that will be provided as a package, and there will be a quotation for this service.

### Will BNB Sidechain transactions and DAOs be counted towards BNB Smart Chain? Should we account for these sidechain metrics and how?
They will not be counted. In the future, BNB Smart Chain should focus mainly on non-game metrics and liquidity, while games will be on BNB Sidechain.

### When can projects start deploying on BNB Sidechain? 
BNB Sidechain Testnet will be out at the end of March, 2022.

BNB Sidechain Mainnet will be ready at least 2 months after that.

### Where can we find more docs for BNB Sidechain for our developers to read through? 
Refer to [BNB Sidechain Architecture](/build-blockchain/app-chain/bnb-sidechain/architecture/overview). 

Also, read [BNB Smart Chain 2022: Build N’ Build](https://www.bnbchain.world/en/blog/bsc-2022-build-and-build/) and [BEP100 proposal for BNB Sidechain](https://github.com/bnb-chain/BEPs/pull/132). 

### If developers have questions about BNB Sidechain deployment, where can they ask them?
We will soon set up a Discord channel for questions and organize a Twitter space to share more details. 
For now, they can read [How to Launch a BNB Sidechain](/build-blockchain/app-chain/bnb-sidechain/how-to-launch/launch-bas).

### I have read the proposal and want to take the next step toward deployment. Who can I talk to? 
For now, read [How to Launch a BNB Sidechain](/build-blockchain/app-chain/bnb-sidechain/how-to-launch/launch-bas). For other business and technical details, wait till the Discord channel is set up. You'll be able to ask your questions there.

### If a project already has its own private chain, what’s the process to integrate it as a BNB Sidechain? And what does “integrate” mean? 
Such a project will have to implement BNB Sidechain modules following our standards to align with our BNB Sidechain framework. "Integrate" means to become a BNB Sidechain-compatible blockchain that can use all the specter of BNB Sidechain products.

### What’s the process to set up a BNB Sidechain? How long does it take?
On average, it takes several hours to set up a BNB Sidechain.

### How is the validator set and rules decided? Can the application decide on all the validators? 
We propose a very flexible configuration, based on the project parameters. The minimum is 3 validators.

### Are there prerequisites for a token to be used as a BNB Sidechain sidechain token? 
There are no prerequisites. You can just issue a new token.

For example, Ankr will have its own BNB Sidechain and use its own token. 

### What are the main differences, advantages, and disadvantages when we compare BNB Sidechain with Avalanche Subnets? 
They are very similar. Where they differ is the consensus rules. 

### What maintenance is required for BNB Sidechain operations? Do we maintain it or BNB Smart Chain does it? 
If you build your own BNB Sidechain, the maintenance is fully on you.

If you use it as a PaaS at Nodereal or Ankr, they will do the maintenance. They will also do all future upgrades, 24x7 SLA support, and so on.

### What's the expected technological advancement here? In other words, what's the positive-sum net value for users and developers?
With BNB Sidechain, developers are able to set up and run a scalable blockchain solution, with smart contracts capability, in a very short time. They can also modify and upgrade their BNB Sidechain using different modules or writing their own modules. Effectively, it means faster and simpler monetization and easier user attraction.

With BNB Sidechain, users can gain access to new projects faster and use new exciting opportunities.