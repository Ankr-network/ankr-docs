### Which wallets are compatible with the ankrFTM (ex-aFTMс) tokens?

ankrFTM (ex-aFTMс) is an ERC-20 token that is compatible with Ethereum-based wallets like MetaMask.

### Are there any docs about the FTM staking and how I set up my wallet etc.?

Yes — there is a [user guide](https://www.ankr.com/docs/staking/liquid-staking/ftm/stake/).

### What is the minimum amount of FTM I can stake?

1 FTM.

### Is there a maximum amount I can stake?

You can stake at your discretion, unlimited.

### How long does it take to unstake my FTM?

If you decide to unstake, it can take varying time, depending on the amount you want to unstake.   

The unstake logic is that each time a lock-up period ends, Ankr claims all rewards for all stakes from a validator. It means if you want to unstake a small amount like 1 FTM, your request will likely fit rewards claimed at the end of the current validator's lock-up period, and you'll receive your FTM in 1 to 35 days. However, if you want to unstake 10000 FTM, this amount is unlikely to fit the current claimed rewards and will have to wait until Ankr has enough funds to fulfill the unstake request.

### How do I receive rewards?

aFTMb is not actively supported anymore. We recommend you [switch your aFTMb for ankrFTM (ex-aFTMc)](https://www.ankr.com/staking/switch/?from=aFTMb).   

  

ankrFTM (ex-aFTMc) is a reward-bearing token, meaning its quantity stays the same from the moment of staking. Instead, it appreciates in value in relation to FTM, so the redemption price of 1 ankrFTM will grow over time because of reward accumulation.

### How soon after staking will I begin to receive rewards?

ankrFTM (ex-aFTMc) rewards are built into the token. Effectively, your rewards accumulate daily as ankrFTM grows in value to FTM.

### Does Ankr charge for the service?

When unstaking, users pay a burn fee that depends on the current liquidity and amount to unstake.

### If I click Unstake, does my stake immediately stop accumulating rewards?

Until the unstaked FTM is released to your wallet, it keeps earning your staking rewards.

### Is there any risk from staking, like slashing or any penalties?

If a validator node acts maliciously, delegators will also be slashed as this is an essential part of the Fantom network’s security.  

  

Ankr only delegates to trusted and reputable validator nodes to avoid any validator that would act maliciously.

### Is there any liquidity for my Liquid Staking tokens anywhere?

You can trade them in the listed liquidity pools on ANKR DeFi:

* [ankrFTM (ex-aFTMс)](https://www.ankr.com/staking/defi/?assets=ankrFTM)

You can also use your Liquid Staking tokens to:

* [Add liquidity on DEXs](https://www.ankr.com/docs/staking/defi/liquidity-pools/) and earn from commissions taken when users swap tokens, using the liquidity pool you're a part of.

* [Yield farm](https://www.ankr.com/docs/staking/defi/yield-farming/) and earn additional rewards in the form of liquidity pool tokens and further farm them.

* [Put your tokens in a vault](https://www.ankr.com/docs/staking/defi/vaults/) and automatically earn additional rewards in the form of one of both assets from the pair.

### Can I get staking metrics for my integration?

Yes, if you want to integrate Ankr Liquid Staking into your product, read [Liquid Staking Metrics](https://www.ankr.com/docs/staking/for-integrators/restful-api/staking-metrics/).

### Why do I get less ankrFTM (ex-aFTMc) for my 1 FTM?

ankrFTM (ex-aFTMc) only changes in value, which is why the amount of ankrFTM you get when staking is calculated by the formula `stake * exchange_ratio`. The exchange ratio is calculated like this: `totals_supply_of_ankrftm / (total_staked_ftm + total_rewards_for_staked_ftm - total_unstaked_ankrftm)`.
