import { Callout } from "nextra-theme-docs";

# Ethereum Liquid Staking 

[Ankr Staking](https://www.ankr.com/staking/) offers ETH holders the opportunity to stake ETH and claim two different types of ETH2 Liquid Staking tokens:

<img src="/docs/aethb-aethc-difference.jpeg" alt="Difference between aETHb and aETHc" class="responsive-pic" width="800" />

* aETHc is a reward-bearing token, meaning that the fair value of 1 aETHc token vs. ETH increases over time as staking rewards accumulate. When it will be possible to unstake ETH at phase 1.5 of Ethereum 2.0, users will have the option to redeem aETHc to Ankr StakeFi, and unstake ETH with accumulated staking rewards.

* aETHb is a reward-earning token, meaning that rewards from Ethereum staking will be distributed daily through rebasing and aETHb holders' balance in their wallet will increase on a daily basis.
 
<Callout type="warning" emoji="❗">
Currently, unstaking is not available, as this functionality is not yet supported by Ethereum.

Unstaking will be enabled after in the Shanghai upgrade that will follow The Merge in 6-12 months. 

Overall, it looks like Shanghai is going to come in ~Q2/Q3 2023.
</Callout>

## Audit details

ETH Liquid Staking smart contracts have undergone external audit by Beosin Blockchain Security. 
To learn more, view the [detailed audit report](https://assets.ankr.com/files/stkr_smart_contract_auditing_report.pdf).

## Smart contracts

Visit [ETH development details](/staking/for-integrators/dev-details/eth-liquid-staking-mechanics/#smart-contracts) for the addresses of ETH Liquid Staking smart contracts. 


## Two types of ETH2 Liquid Staking

### Ankr Reward-Bearing Staked ETH (aETHc)

aETHc (formerly aETH) is a reward-bearing token that enables instant liquidity for staked ETH. aETHc represents the staked ETH plus all future staking rewards.

Initially, at the start of ETH2 staking on December 1st 2020, aETHc was issued at a ratio of 1:1 to the amount of staked ETH.

To reflect the accumulated rewards, the ratio of aETHc to ETH changes over time, meaning that **1 aETHc becomes worth increasingly more than 1 ETH**.

The amount of aETHc you hold will not increase. Instead, the price of aETHc is expected to grow in ETH value, as your aETHc contains your principal stake plus earned staking rewards.

**At the end of the staking period (probably in 2022) you can redeem your aETHc for your original staked ETH plus your staking rewards.**


### Ankr Reward Earning Staked ETH (aETHb)

Similar to aETHc, aETHb (formerly fETH) also enables instant liquidity for staked ETH tokens in ETH 2.0 network.

The main difference between aETHb and aETHc is that it distributes staking rewards through a rebasing process on a daily basis, meaning that its fair value should be equal to ETH price, contrary to aETHc, whose fair price is ETH + staking rewards embedded in aETHc (1 aETHc represents 1.04 ETH as of August 2021).

Ankr Staking receives daily ETH rewards into the ETH2 staking pool, which are then reflected in aETHb holders’ wallets. As a result, the amount of aETHb that users hold in their wallet automatically increase with every daily rebase.

The rebase adjustment represents the staking rewards.
