---
title: ETH Liquid Staking Mechanics
id: eth-liquid-staking-mechanics
---

# Staking Mechanics

ETH Liquid Staking lets the user stake their funds through the corresponding smart contracts on the Ethereum network, accumulate rewards for it, and receive their stake and rewards when unstaking.

It is well-described by its requirement, fees, rewards, validators, as well as smart contracts and workflow that shows the functions to call to interact with these smart contracts.


## Requirements

The requirements when staking are:

* Minimum value to stake (minimumStake) — 0.1 ETH.

* Maximum value to stake — unlimited, at the user’s discretion. 

There is not unstaking o Ethereum, so no requirements.


## Fees
When staking, the user pays 10% of their rewards to the validators.

The user must also count in the cost for outgoing transactions.


## Rewards
User's aETHb balance grows daily. It can be desribed as `total share supply / (total stake amount + rewards)`.

Validators receive rewards when Ethereum has their unstaking functionality released in their 2.0 version.

The current APY is 4.8%.


## Validators
ANKR has roughly [1700 validators on Ethereum](https://beaconcha.in/validators/eth1deposits?q=4069D8A3dE3A72EcA86CA5e0a4B94619085E7362). 


## Smart contracts
Smart contracts and addresses involved in ANKR Liquid Staking are:

[GlobalPool](https://etherscan.io/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670) — contract with the staking logic, also accumulates stakes and distibutes them across the validator.

[aETHb](https://etherscan.io/address/0xD01ef7C0A5d8c432fc2d1a85c66cF2327362E5C6) — contract that implements the ERC-20-like tokens aETHb. aETHb grows in quantity.

Smart contracts code lives by the links above, at the **Contract** tab on the page.

## Staking workflow

1. User calls the function `GlobalPool::stake()` payable on the Ethereum network. The function is payable, so the user needs to specify the amount to stake. The amount must meet the `minimumStake` requirement. 

2. If the transaction is successful, aETHb are automatically minted to the user’s address. Also event `GlobalPool::StakeConfirmed(stakerAddressIndexed, amountMinted)` is emitted. The event can later be found using the `stakerAddressIndexed` parameter.

3. User can later look up their aETHb balance in the `aETHb` contract.

4. When 32 ETH is accumulated in `GlobalPool`, ANKR creates a new validator and transfers the 32 ETH to it.

