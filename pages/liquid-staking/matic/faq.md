### How can I set up my wallet and stake MATIC?

Check the [Stake MATIC](https://www.ankr.com/docs/staking/liquid-staking/matic/stake/) user guide.

### What is the minimum and maximum amount of MATIC I can stake?

Minimum amount:

* Staking MATIC on Ethereum, your minimum amount is 1 MATIC.

* Staking MATIC on Polygon, there is no minimum amount.

Maximum amount:

* Staking MATIC on Ethereum, there is no maximum amount.

* Staking MATIC on Polygon, your maximum amount is limited by the crosschain staking pool capacity. You will see the capacity while staking.

### What is the difference between MATIC staking on Ethereum and Polygon?

MATIC staking happens on Ethereum. You can stake/unstake any MATIC amount at once. Ethereum gas fee applies. Also, when unstaking, you receive your MATIC and rewards after the 3–4 days unbonding period.  

  

MATIC crosschain staking happens on Polygon. You may have to stake/unstake your MATIC in portions, as you’re doing it via a crosschain staking pool, which may not have the amount you need at the moment. Also, an additional fee applies. However, there is no unbonding period, so when unstaking you receive your MATIC and rewards instantly.

### How long does it take to unstake my MATIC?

If you staked on Ethereum, you’ll receive your MATIC and rewards after the unbonding period of 80+ epochs; typically, it takes 3–4 days.  

  

If you staked on Polygon via the crosschain staking pool, you’ll receive your MATIC and rewards instantly.

### How do I receive rewards?

aMATICb is not actively supported anymore. We recommend you [switch your aMATICb for ankrMATIC (ex-aMATICc)](https://www.ankr.com/staking/switch/?from=aMATICb).   

  

ankrMATIC (ex-aMATICc) is a reward-bearing token, meaning its quantity stays the same from the moment of staking. Instead, it appreciates in value in relation to MATIC, so the redemption price of 1 ankrMATIC will grow over time because of reward accumulation.

### How soon after staking will I begin to receive rewards?

aMATICb rewards arrive in your wallet with every rebase. Rebasing occurs daily.  

  

aMATICc rewards are built into the token. Effectively, your rewards accumulate daily as aMATICc grows in value to MATIC.

### Does Ankr charge for the service?

When staking on Ethereum, the user pays a gas fee (typically, 0.0005 ETH). When staking on Polygon, the user may pay a small dynamic fee. Both for staking on Ethereum and Polygon, Ankr takes 5% fees from user's Liquid Staking rewards. When unstaking on Ethereum, the user pays a fee of 0.025 ETH. When unstaking on Polygon, the user pays a fee of 0.5% from the unstaking amount.

### If I click Unstake, does my stake immediately stop accumulating rewards?

Your stake **continues** to accumulate rewards until the moment you have received them.

### Is there any risk from staking, like slashing or any penalties?

The only risk for stakers is missing out on rewards during any time a validator they staked with is slashed. Slashing is a protocol-level penalty associated with a validator failure if it validates an invalid transaction or goes offline. The delegated staked MATIC is not slashed — slashing impacts only the self-stake of the validator. Ankr only delegates to trusted and reputable validator nodes to avoid any validator that would act maliciously.

### Is there any liquidity for my Liquid Staking tokens anywhere?

You can trade them in the listed liquidity pools on ANKR DeFi:

* [ankrMATIC (ex-aMATICc)](https://www.ankr.com/staking/defi/?assets=ankrMATIC)

You can also use your Liquid Staking tokens to:

* [Add liquidity on DEXs](https://www.ankr.com/docs/staking/defi/liquidity-pools/) and earn from commissions taken when users swap tokens, using the liquidity pool you're a part of.

* [Yield farm](https://www.ankr.com/docs/staking/defi/yield-farming/) and earn additional rewards in the form of liquidity pool tokens and further farm them.

* [Put your tokens in a vault](https://www.ankr.com/docs/staking/defi/vaults/) and automatically earn additional rewards in the form of one of both assets from the pair.

### Why do I get less ankrMATIC (ex-aMATICc) for my 1 MATIC?

 ankrMATIC (ex-aMATICc) only changes in value, which is why the amount of ankrMATIC you get when staking is calculated by the formula `stake * exchange_ratio`. The exchange ratio is calculated like this: `totals_supply_of_ankrmatic / (total_staked_matic + total_rewards_for_staked_matic - total_unstaked_ankrmatic)`.

### Can I use cold wallets for staking?

Yes, you can use Ledger Nano cold wallets through MetaMask. Visit the Ledger's [guide on connecting Ledger through MetaMask](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask).
