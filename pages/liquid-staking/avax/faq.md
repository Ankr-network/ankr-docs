### Which wallets are compatible with the ankrAVAX (ex-aAVAXc) tokens?

ankrAVAX (ex-aAVAXc) is an ERC-20 token that is compatible with Ethereum-based wallets like MetaMask.

### Are there any docs about the AVAX staking and how I set up my wallet etc.?

Yes — there is a [user guide](https://www.ankr.com/docs/staking/liquid-staking/avax/stake/).

### What is the minimum amount of AVAX I can stake?

1 AVAX.

###  Is there a maximum amount I can stake?

You can stake at your discretion, unlimited.

### How long does it take to unstake my AVAX?

You receive the unstaked AVAX after the unbonding period, which is at end of the current validating period. A validating period is 4 weeks.

### How do I receive rewards?

aAVAXb is not actively supported anymore. We recommend you [switch your aAVAXb for ankrAVAX (ex-aAVAXc)](https://www.ankr.com/staking/switch/?from=aAVAXb).   

  

ankrAVAX (ex-aAVAXc) is a reward-bearing token, meaning its quantity stays the same from the moment of staking. Instead, it appreciates in value in relation to AVAX, so the redemption price of 1 ankrAVAX will grow over time because of reward accumulation.

### How soon after staking will I begin to receive rewards?

ankrAVAX (ex-aAVAXc) rewards are built into the token. Effectively, your rewards accumulate daily as ankrAVAX grows in value to AVAX.

### Does Ankr charge for the service?

2% commission on the reward.

### If I click Unstake, does my stake immediately stop accumulating rewards?

Your stake **continues** to accumulate rewards until the moment you receive them.

### Is there any risk from staking, like slashing or any penalties?

The only risk for stakers is missing out on rewards during any time a validator they staked with is slashed. Slashing is a protocol-level penalty associated with a validator failure if it validates an invalid transaction, attacks the network, or goes offline. The delegated staked AVAX is not slashed — slashing impacts only the self-stake of the validator. Ankr only delegates to trusted and reputable validator nodes to avoid any validator that would act maliciously.

### Is there any liquidity for my Liquid Staking tokens anywhere?

You can trade them in the listed liquidity pools on ANKR DeFi:

* [ankrAVAX (ex-aAVAXc)](https://www.ankr.com/staking/defi/?assets=ankrAVAX)

You can also use your Liquid Staking tokens to:

* [Add liquidity on DEXs](https://www.ankr.com/docs/staking/defi/liquidity-pools/) and earn from commissions taken when users swap tokens, using the liquidity pool you're a part of.

* [Yield farm](https://www.ankr.com/docs/staking/defi/yield-farming/) and earn additional rewards in the form of liquidity pool tokens and further farm them.

* [Put your tokens in a vault](https://www.ankr.com/docs/staking/defi/vaults/) and automatically earn additional rewards in the form of one of both assets from the pair.

### Can I get staking metrics for my integration?

Yes, if you want to integrate Ankr Liquid Staking into your product, read [Liquid Staking Metrics](https://www.ankr.com/docs/staking/for-integrators/restful-api/staking-metrics/).

### Why do I get less ankrAVAX (ex-aAVAXc) for my 1 AVAX?

ankrAVAX (ex-aAVAXc) only changes in value, which is why the amount of ankrAVAX you get when staking is calculated by the formula `stake * exchange_ratio`. The exchange ratio is calculated like this: `totals_supply_of_ankravax / (total_staked_avax + total_rewards_for_staked_avax - total_unstaked_ankravax)`.

### Can I use cold wallets for staking?

Yes, you can use Ledger Nano cold wallets through MetaMask. Visit the Ledger's [guide on connecting Ledger through MetaMask](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask).
