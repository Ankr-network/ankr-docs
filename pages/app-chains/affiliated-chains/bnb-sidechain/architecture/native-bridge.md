import { Callout } from "nextra-theme-docs";

BNB Sidechain brings a native cross-chain bridge that is embedded to BNB Sidechain as a system smart contract. Here we specify interfaces for the EVM version of BNB Sidechain:

```
interface INativeAssetBridge {
  function deposit() external payable;
  function withdraw(bytes[] validatorSetSignatures, bytes transactionReceipt) external;
}
```

Native asset bridge supports next user flows:

* Deposit (BNB Sidechain -> BNB Smart Chain). When a user calls a deposit function it locks his native tokens in the smart contract and emits events. To be able to mint peg tokens in the BNB Smart Chain, the user generates proof that contains information about transaction receipt (including emitted events) with Merkle Patricia trie proof. This proof should be uploaded into the BNB Smart Chain where a BNB Sidechain Validator Hub smart contract can verify this proof and validators signatures from BNB Sidechain.
* Withdrawal (BNB Smart Chain -> BNB Sidechain). Withdrawal of the funds is opposite to deposit flow. The difference here is that the user must burn his pegged tokens in the BNB Smart Chain to use this proof to withdraw tokens from native asset bridge smart contracts. Validators in the BNB Sidechain network must verify the correctness of this operation and are responsible for preventing double-spend attacks.

BNB Sidechain developers might specify fees for inter-chain operations and cross-chain operations between BNB Sidechain and BNB Smart Chain. Such policy should be specified in the BNB Sidechain smart contract and fees or fines-related mechanisms shouldn’t be presented in BNB Smart Chain smart contracts or block verification functions.


## BNB Sidechain Validator Hub

By default, BNB Smart Chain brings only native asset cross-chain functionality to the BNB Sidechain applications. To reach this, each BNB Sidechain application must be registered in the BNB Smart Chain smart contract. This smart contract assigns chain id to the BNB Sidechain application and specifies BHVF (block header verification function). This function is used to verify the block header, but w/o state transitions. BHVF should be written in Solidity and be able to verify the block header, the correctness of the chain for N blocks, and check signatures. Since default BNB Sidechain implementation is BNB Smart Chain-based then default chain implementation is supported by BNB Sidechain Validator Hub, we define such function to allow other developers that don’t want to rely on EVM or Parlia consensus engine to write their own verification function. Of course, developers might publish malicious functions or a function with a vulnerability that allows them to skip block verification and they should provide an audition of this code to be trusted by a community.

```
interface IBlockHeaderVerificationFunction {
    function verifyBlockHeader(bytes rawBlockHeader, address[] existingValidatorSet) external pure returns (address[] newValidatorSet);
    
    function verifyCrossChainPacket(bytes rawBlockHeader, bytes receiptsProof, bytes rawReceipt) external pure returns (
        uint256 transferredAmount,
        address recipientAddress
    );
}
interface BASValidatorHub {
  function registerBAS(string projectName, address[] initialValidatorSet, IBlockHeaderVerificationFunction bhvf) external;
}
```

<Callout>
This interface is a draft and might change in the future.
</Callout>

System contract address of BNB Sidechain Validator Hub smart contract is: 

```
0x0000000000000000000000000000000000007000
```

## Block header verification

BNB Sidechain is not designed to have a BNB Smart Chain-compatible consensus or EVM execution environment, because BNB Sidechain is a technology-agnostic solution. We provide only basic functionality for the BNB Sidechain applications and help them to set up their work and be a part of the BNB Smart Chain ecosystem. We can’t verify each operation on the chain, so we fully trust the developers of each BAS. However, we must be sure that validator transition is not compromised — that is a strict requirement for the cross-chain operations for the native asset. To reach this, we’d like to introduce a block header verification function (BHVF) that must be specified by the BNB Sidechain development team. BHVF is a function in the Solidity language that is able to verify block headers from BNB Sidechain applications. This is a simplified version of the state verification function from Polkadot. BHVF is one of the required parameters to register BNB Sidechain in the BNB Smart Chain’s smart contract. Also, BHVF is responsible for verifying transaction receipt from blockchain that allows to prove the correctness of cross-chain transfer from BNB Sidechain to BNB Smart Chain.

Block header verification is not a very complicated function, but we will have to verify block headers to be sure that the validator transition is well-done. Also using BLS/BN we don’t have to pass all block headers into it, it’s enough to publish only epoch blocks that contain new validator sets and signatures from all previous validators.

If we assume that block verification consumes ~50k gas (w/ state modification), then we have the next calculations:
* Per each block: 50k gas/block, then it is ~16k gas/sec.
* Per epoch: 50k gas/epoch (epoch can be from 5 minutes up to 1 day), then it's between ~160 gas/sec (for 5 min epoch) and 0.57 gas/sec (for 1-day epoch).

Of course, gas consumption depends on the epoch length and it's not required for BNB Sidechain to have very short epochs. Epoch length of one day is recommended to be used for validator transition. It can be reduced based on application needs to 6-12 hours, but it doesn’t change gas consumption a lot.