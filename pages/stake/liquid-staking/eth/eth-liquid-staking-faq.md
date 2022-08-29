### Are there any docs about the ETH staking and how I set up my wallet etc.?

Yes — there is a [user guide](https://www.ankr.com/docs/staking/liquid-staking/eth/stake-eth).


### What is the minimum amount of ETH I can stake?
 
0.5 ETH.
 

### What is the change interval to increase my stake? 

0.5 ETH. It means you can stake 0.5, 1.0, 1.5 ETH, but cannot stake, for example, 0.55, 1.1, 1.88 ETH.


### Is there a maximum amount I can stake?

No, you can stake at your discretion, unlimited. You should know that currently staking starts once 32 ETH are accumulated, so if your stake is >32 ETH, it’ll be divided into chunks and the rule will apply to each of them. 


### When can I unstake?

There is no unstaking mechanism for ETH right now. We're all waiting for Ethereum 2.0 to implement it. 


### How long does it take to unstake my ETH?

Currently, there is no unbonding period, as there is no unstaking for ETH. This functionality is to be implemented by the Ethereum team in future updates.


### How do I receive rewards? 

aETHb is a rebasing token. When holding aETHb, your balance will increase in proportion to your ETH staking rewards. A rebase runs daily, and rewards occur each time this runs. So each day, you will see the quantity of your aETHb increase by a small amount. 
aETHc is a reward-bearing token, meaning its quantity stays the same from the moment of staking. 
Instead, it appreciates in value, as the redemption ratio grows because of reward accumulation.

Mind that to pull out your rewards, you’ll need to sell aETHb/aETHc on Ankr DeFi, as Ethereum hasn’t implemented the unstaking functionality yet.


### How soon after staking will I begin to receive rewards?

aETHb will increase with every rebase; rebasing occurs daily. aETHc will increase in value only, daily. 
aETHc rewards are built into the token. Effectively, your rewards accumulate daily as aETHc grows in value to ETH.

### Does Ankr charge for the service?

ANKR does not charge any service fees for ETH Liquid Staking. 
However, validators charge a fee deducted from your rewards (Ankr’s validator node charges 10%), representing an indirect cost for liquid staking token holders. 
Ankr's income comes from running one of the several validator nodes that will be used to stake ETH.


### What determines the amount of reward I receive each rebase of aETHb or appreciation of aETHc?

Staking rewards depend mostly on the voting power of the validator node that your stake is delegated to and how much ETH is validated on the network. The less ETH is staked, the higher the rewards to incentivize more ETH to come online, and vice versa. Ankr aims to spread delegations to only the most trustworthy and reliable nodes to increase staking rewards. 
View the [current amount of staked ETH](https://launchpad.ethereum.org/).


### Is there any risk from staking, like slashing or any penalties?

The only risk for stakers is missing out on rewards during any time a validator they staked with is slashed. 
Slashing is a protocol-level penalty associated with a validator failure if it validates an invalid transaction or goes offline. 
The delegated staked ETH is not slashed — slashing impacts only the self-stake of the validator. 
Ankr only delegates to trusted and reputable validator nodes to avoid any validator that would act maliciously.


### Is there any liquidity for my Liquid Staking tokens anywhere?

You can trade them in the listed liquidity pools on ANKR DeFi:

* [aETHb](https://www.ankr.com/staking/defi/?assets=aETHb)
* [aETHc](https://www.ankr.com/staking/defi/?assets=aETHc)

You can also use your Liquid Staking tokens to:
* [Add liquidity on DEXs](https://www.ankr.com/docs/staking/defi/liquidity-pools/) and earn from commissions taken when users swap tokens, using the liquidity pool you're a part of.
* [Yield farm](https://www.ankr.com/docs/staking/defi/yield-farm) and earn additional rewards in the form of liquidity pool tokens and further farm them.  
* [Put your tokens in a vault](https://www.ankr.com/docs/staking/defi/vaults) and automatically earn additional rewards in the form of one of both assets from the pair.


### Can I get staking metrics for my integration?

Yes, if you want to integrate Ankr Liquid Staking into your product, read [Liquid Staking Metrics](https://ankr.com/docs/staking/extra/staking-metrics).