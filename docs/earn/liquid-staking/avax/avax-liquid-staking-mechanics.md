---
title: Staking Mechanics
id: staking-mechanics
---

# Staking mechanics

AVAX Liquid Staking lets the user stake their funds through the Ankr deposit address on the Avalanche network, accumulate rewards, and receive their stake+rewards when unstaking.

The following section explains staking requirements, fees, rewards, validators, smart contracts and function calls to interact with these smart contracts.


## Requirements

The requirements when staking are:

* Minimum value to stake — 1 AVAX.

* Maximum value to stake — unlimited, at the user’s discretion.

The requirements when unstaking are:

* Minimum value to unstake — 0 AVAX.

* Maximum value to unstake — staked amount + % of the reward, up to the user’s balance.

* Release time — end of the current validating period, which is 4 weeks.


## Fees

The user pays 2% fee from the staking reward.

The user must also count in the gas price for outgoing transactions.


## Rewards

User's aAVAXb balance grows daily. It can be desribed as `daily rewards / total share * user's share`.

Validators that work correctly and are online at least 80% of their validating period, receive rewards at the end of the validating period.


## Validators

On Avalanche, Ankr has two validators:
* [Validator #1](https://avascan.info/staking/validator/NodeID-955GU1MqWL8yXAtoc8AsE7FNx4nGC9JyL)
* [Validator #2](https://avascan.info/staking/validator/NodeID-NcZtrWEjPY7XDT5PHgZbwXLCW3LGBjxui)
* [Validator #3](https://avascan.info/staking/validator/NodeID-9CnrQBBFSkE2Xzfcz3Tk1e8iauq8iNR88)


## Smart contracts
Smart contracts involved AVAX Liquid Staking are:

1. `aAVAXb` — keeps track of user shares and their ratio to AVAX and kKeeps track of aAVAXb supply share; aAVAXb is an ERC-20-like token.

2. `AvalanchePool` — implements staking and unstaking logic.

Addresses of these smart contracts are:

* [aAVAXb](https://snowtrace.io/address/0x6C6f910A79639dcC94b4feEF59Ff507c2E843929)

* [AvalanchePool](https://snowtrace.io/address/0x7BAa1E3bFe49db8361680785182B80BB420A836D)
  
Smart contract code can be viewed by following the links and selecting the *Contract* tab.

## Staking workflow

The workflow is both user and Ankr-driven. The user part is Step 1, the Ankr part is Steps 2–5. 

1. User sends AVAX to `AvalanchePool` on the Avalanche blockchain via the Ankr Earn Dashboard and Metamask connected to the Avalanche blockchain. The function effectively called is `AlavalchePool::stake()`. 

2. `AvalanchePool` emits an event saying the stake is received: `AlavalchePool::StakePending(address indexed staker, uint256 amount)`.

3. `AvalanchePool` calculates and stores/updates the number of aAVAXb the user can claim, equal to the staked AVAX.

4. Ankr backend collects the staked AVAX transferring them from the smart contract to the deposit address controlled by Ankr. Then it makes a delegator or validator stake on the Avalanche blockchain.

5. aAVAXb is minted automatically to the user's address.

## Ratio updates

Ankr backend updates the ratio daily and the user can see their updated aAVAXb balance.

## Unstaking workflow

The workflow is both user and Ankr-driven. The user part is Steps 1-2, the Ankr part is Steps 3–4. 

1. When the user decides to unstake some amount of aAVAXb, they input the number on the Ankr Earn Dashboard, and the frontend sends a request to the `AvalanchePool::claim(uint256 amount)` smart contract to claim the AVAX.

2. `AvalanchePool` burns aAVAXb to "convert" them to AVAX and stores the convert request.

3. When the current validation period is over, Ankr backend checks if there any aAVAXb-to-AVAX convert requests pending and requests `AvalanchePool` to serve them providing AVAX from unblocked stakes and received rewards, at the end of the current validating period.

4. `AvalanchePool` uses the AVAX received from the Ankr dedicated address to serve the pending convert requests. 