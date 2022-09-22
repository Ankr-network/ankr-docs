# Cross-chain bridge: Relay Hub

_Relay Hub_ is a bridging solution for EVM-compatible Proof of Stake (PoS) chains that serves to trace the existence and provenance of data, verify the blocks' validity, and exchange the data across chains to move assets between them.

## How it works

### Blocks verification

The Relay Hub functionality is implemented by means of a smart contract that, through the execution layer, allows verifying the transition of validators. From the user perspective, that verification means that any changes (transactions) made on the chain have been confirmed. Now, Relay Hub has confirmed blocks, and it can check the block's header for the metadata it contains. That metadata verifies that the user possesses the particular assets, which leads us to the ability to move those assets from the source to the target chain.

### Assets movement

To move assets across chains, Relay Hub blocks those assets on the source chain and then sends the particular set of parameters on the asset movement (`fromChain` — source chain, `toChain` — target chain, `fromAddress` — sender of the funds, `toAddress` — claimer of the funds, `fromToken` — current native token, `toToken` — address of a target pegged token, `totalAmount` — funds locked in the contract) to the target chain by means of a special event. The parameters sent via the event are to be checked on the target chain to confirm that they come from the valid blocks (by checking all the signatures for the chain of blocks) and to verify that transactions on those blocks were approved by 2/3 of the validators. This can be done by Relay Hub due to the fact that it knows all the participating validators.

### Relayers

As soon as the asset movement parameters have been checked and verified on the target chain, the relayer, a node that synchronizes data across chains, mints the assets based on those parameters on the target chain and burns the blocked assets on the source chain.

The key feature of our relayer nodes is that they are fully trustless — they use a fully stateless script and rely on no databases or any other bulky stuff — so that anyone can run them. Currently, we don't support a monetization model for the relayers, therefore Ankr would need to run them first before introducing the monetization model that would collect fees for the cross-chain operations and cover the gas fees. After that, anyone can run the relayer nodes on their own.