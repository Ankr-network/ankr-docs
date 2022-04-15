---
title: Staking Mechanics
id: staking-mechanics
---

# Staking mechanics

ETH Liquid Staking lets the user stake their funds through the corresponding smart contracts on the Ethereum network, accumulate rewards, and receive their stake and rewards when unstaking.

The following section explains staking requirements, fees, rewards, validators, smart contracts and function calls to interact with these smart contracts.


## Requirements

The requirements when staking are:

* Minimum value to stake (minimumStake) — 0.5 ETH.

* Stake change interval — 0.5 ETH. The user can stake 0.5, 1.0, 1.5 ETH, but cannot stake, for example, 0.55, 1.1, 1.88 ETH.

* Maximum value to stake — unlimited, at the user’s discretion. 

There are no unstaking requirements, as there is not unstaking on Ethereum until it implement this functionality. 


## Fees
When staking, the user pays 10% of their rewards to the validators.

The user must also count in the gas price for outgoing transactions.


## Rewards
User's aETHb balance grows daily. It can be desribed as `total share supply / (total stake amount + rewards)`.

Validators receive rewards when Ethereum has their unstaking functionality released in their 2.0 version.

The current APY is 4.97%.


## Validators
Ankr has roughly [1700 validators on Ethereum](https://beaconcha.in/validators/eth1deposits?q=4069D8A3dE3A72EcA86CA5e0a4B94619085E7362). 


## Smart contracts
Smart contracts and addresses involved in ETH Liquid Staking are:

[GlobalPool](https://etherscan.io/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670) — contract with the staking logic, also accumulates stakes and distributes them across the validator.

[aETHb](https://etherscan.io/address/0xD01ef7C0A5d8c432fc2d1a85c66cF2327362E5C6) — contract that implements the ERC-20-like token aETHb. aETHb grows in number.

[aETHc](https://etherscan.io/token/0xE95A203B1a91a908F9B9CE46459d101078c2c3cb) — contract that implements the ERC-20-like token aETHc. aETHc doesn't grow in number, but grows in value.

Smart contract code can be viewed by following the links and selecting the *Contract* tab.

## Staking workflow

The workflow is both user and Ankr-driven. The user part is Step 1, the Ankr part is Steps 2–4. 

1. The user calls the function `GlobalPool::stake()` on the Ethereum network. The function is payable, so the user needs to specify the amount to stake. The amount must meet the `minimumStake` requirement. 

2. If the transaction is successful, aETHb/aETHc are automatically minted to the user’s address. Also a `GlobalPool::StakeConfirmed(stakerAddressIndexed, amountMinted)` event is emitted. The event can later be found using the `stakerAddressIndexed` parameter.

3. The user can later look up their aETHb/aETHc balance in the `aETHb`/`aETHc` contract.

4. When 32 ETH is accumulated in `GlobalPool`, Ankr creates a new validator and transfers the 32 ETH to it.

