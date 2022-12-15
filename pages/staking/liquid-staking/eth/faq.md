### Are there any docs about the ETH staking and how I set up my wallet etc.?

Yes — there is a [user guide](https://www.ankr.com/docs/staking/liquid-staking/eth/stake/).

### What is the minimum amount of ETH I can stake?

0.5 ETH.

### What is the change interval to increase my stake?

0.5 ETH. It means you can stake 0.5, 1.0, 1.5 ETH, but cannot stake, for example, 0.55, 1.1, 1.88 ETH.

### Is there a maximum amount I can stake?

No, you can stake at your discretion, unlimited. You should know that currently staking starts once 32 ETH are accumulated, so if your stake is > 32 ETH, it’ll be divided into chunks and the rule will apply to each of them.

### When can I unstake?

Currently, unstaking is not available, as this functionality is not yet supported by Ethereum.  

  

Unstaking will be enabled after in the Shanghai upgrade that will follow The Merge in 6-12 months.  

  

Overall, it looks like Shanghai is going to come in \~Q2/Q3 2023.

### How long does it take to unstake my ETH?

Currently, there is no unbonding period, as there is no unstaking for ETH. This functionality is to be implemented by the Ethereum team in future updates.

### How do I receive rewards?

aETHb is not actively supported anymore. We recommend you [switch your aETHb for ankrETH (ex-aETHc)](https://www.ankr.com/staking/switch/?from=aETHb).   

  

ankrETH (ex-aETHc) is a reward-bearing token, meaning its quantity stays the same from the moment of staking. Instead, it appreciates in value, as the redemption ratio of 1 ankrETH (ex-aETHc) to 1 ETH grows because of reward accumulation. Mind that to pull out your rewards, you’ll need to sell ankrETH (ex-aETHc) on Ankr DeFi, as Ethereum hasn’t implemented the unstaking functionality yet.

### How soon after staking will I begin to receive rewards?

ankrETH (ex-aETHc) will increase in value only, daily. arnkETH rewards are built into the token. Effectively, your rewards accumulate daily as ankrETH grows in value to ETH.

### Does Ankr charge for the service?

Ankr does not charge any service fees for ETH Liquid Staking. However, validators charge a fee deducted from your rewards (Ankr’s validator node charges 10%), representing an indirect cost for liquid staking token holders. Ankr's income comes from running one of the several validator nodes that will be used to stake ETH.

### Is there any risk from staking, like slashing or any penalties?

The only risk for stakers is missing out on rewards during any time a validator they staked with is slashed. Slashing is a protocol-level penalty associated with a validator failure if it validates an invalid transaction or goes offline. The delegated staked ETH is not slashed — slashing impacts only the self-stake of the validator. Ankr only delegates to trusted and reputable validator nodes to avoid any validator that would act maliciously.

### Is there any liquidity for my Liquid Staking tokens anywhere?

You can trade them in the listed liquidity pools on ANKR DeFi:

* [ankrETH (ex-aETHc)](https://www.ankr.com/staking/defi/?assets=ankrETH)

You can also use your Liquid Staking tokens to:

* [Add liquidity on DEXs](https://www.ankr.com/docs/staking/defi/liquidity-pools/) and earn from commissions taken when users swap tokens, using the liquidity pool you're a part of.

* [Yield farm](https://www.ankr.com/docs/staking/defi/yield-farming/) and earn additional rewards in the form of liquidity pool tokens and further farm them.

* [Put your tokens in a vault](https://www.ankr.com/docs/staking/defi/vaults/) and automatically earn additional rewards in the form of one of both assets from the pair.

### Why do I get less ankrETH (ex-aETHc) for my 1 ETH?

ankrETH (ex-aETHc) only changes in value, which is why the amount of ankrETH you get when staking is calculated by the formula `stake * exchange_ratio`. The exchange ratio is calculated like this: `totals_supply_of_ankreth / (total_staked_eth + total_rewards_for_staked_eth - total_unstaked_ankreth)`.
