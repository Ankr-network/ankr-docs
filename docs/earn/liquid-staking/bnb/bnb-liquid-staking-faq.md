---
title: FAQ
id: faq
---

### Which wallets are compatible with the aBNBb/aBNBc tokens?

aBNBb/aBNBc is an ERC-20 token that is compatible with Ethereum-based wallets like Metamask.


### Are there any docs about the BNB staking and how I set up my wallet etc.?

Yes — there is a [user guide](https://docs.binance.org/smart-chain/wallet/metamask.html).


### What is the minimum amount of BNB I can stake?
 
1.002 BNB: 1 BNB, plus the relayer fee — 0.002 BNB. You must also count in the gas fee on top for sending the transaction.


### Why do I get less aBNBc than aBNBb for my 1 BNB?

aBNBb is a rebasing token that changes in number, which is why we decided 1 aBNBb is equal to 1 BNB. 
However, aBNBc only changes in value, which is why the amount of aBNBc you get when staking is calculated by the formula `stake * exchange_ratio`. 
The exchange ratio is calculated like this: `totals_supply_of_abnbc / (total_staked_bnb + total_rewards_for_staked_bnb - total_unstaked_abnbb_and_abnbc)`. 


### Is there a maximum amount I can stake?

No, you can stake at your discretion, unlimited.  


### What is the unbonding period for aBNBb/aBNBc?

You receive the unstaked amount after the unbonding period of up to 7–15 days.


### How do I receive rewards? 

aBNBb is a rebasing token. When holding aBNBb, your balance will increase in proportion to your BNB staking rewards. 
A rebase runs daily, and rewards occur each time this runs. 
So each day, you will see the quantity of your aBNBb increase by a small amount. 

aBNBc is a reward-bearing token, meaning its quantity stays the same from the moment of staking. 
Instead, it appreciates in value, as the redemption ratio grows because of reward accumulation.


### How soon after staking will I begin to receive rewards?

aBNBb will increase in number with every rebase; rebasing occurs daily. aBNBc will increase in value, daily.


### Does Ankr charge for the service?

When staking, users pay the relayer fee — 0.02 BNB.

You must also count in the gas price for outgoing transactions.


### What determines the amount of reward I receive each rebase of aBNBb?

Staking rewards depend mostly on the voting power of the validator node that your stake is delegated to and how much BNB is validated on the network. 
The less BNB is staked on the network, the higher the rewards to incentivize more BNB to come online, and vice versa. 
Ankr aims to spread delegations to only the most trustworthy and reliable nodes to increase staking rewards. 
 

### Is there any risk from staking, like slashing or any penalties?

The only risk for stakers is missing out on rewards during any time a validator they staked with is “in jail” (slashed). 
Slashing is a protocol-level penalty associated with a validator failure if it validates an invalid transaction or goes offline. 
The delegated staked BNB is not slashed — slashing impacts only the self-stake of the validator. 
Ankr only delegates to trusted and reputable validator nodes to avoid any validator that would act maliciously.

### Is there any liquidity for aBNBb anywhere currently?

You can check all available DeFi platforms on ANKR DeFi:

* [aBNBb](https://www.ankr.com/earn/defi/trade/?from=aBNBb&to=BNB) 
* aBNBc (coming soon)