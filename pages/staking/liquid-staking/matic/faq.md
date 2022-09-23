### How can I set up my wallet and stake MATIC?

Check the [Stake MATIC](/staking/liquid-staking/matic/stake) user guide.

### What is the minimum and maximum amount of MATIC I can stake?

Minimum amount: 
* Staking MATIC on Ethereum, your minimum amount is 1 MATIC.
* Staking MATIC on Polygon, there is no minimum amount.

Maximum amount:
* Staking MATIC on Ethereum, there is no maximum amount.
* Staking MATIC on Polygon, your maximum amount is limited by the crosschain staking pool capacity. You will see the capacity while staking.

### What is the difference between MATIC staking on Ethereum and Polygon?

MATIC staking happens on Ethereum. You can stake/unstake any MATIC amount at once. 
Ethereum gas fee applies. 
Also, when unstaking, you receive your MATIC and rewards after the 3–4 days unbonding period.

MATIC crosschain staking happens on Polygon. 
You may have to stake/unstake your MATIC in portions, as you’re doing it via a crosschain staking pool, which may not have the amount you need at the moment. 
Also, an additional fee applies. 
However, there is no unbonding period, so when unstaking you receive your MATIC and rewards instantly.


### How long does it take to unstake my MATIC?

If you staked on Ethereum, you’ll receive your MATIC and rewards after the unbonding period of 80+ epochs; typically, it takes 3–4 days. 

If you staked on Polygon via the crosschain staking pool, you’ll receive your MATIC and rewards instantly.


### How do I receive rewards? 

aMATICb is a rebasing token. When holding aMATICb, your balance will increase in proportion to your MATIC staking rewards. 
A rebase runs daily, and rewards occur each time this runs. 
So each day, you will see the quantity of your aMATICb increase by a small amount. 

aMATICc is a reward-bearing token, meaning its quantity stays the same from the moment of staking. 
Instead, it appreciates in value, as the redemption ratio grows because of reward accumulation.

### How soon after staking will I begin to receive rewards?

aMATICb rewards arrive in your wallet with every rebase. Rebasing occurs daily. 

aMATICc rewards are built into the token. Effectively, your rewards accumulate daily as aMATICc grows in value to MATIC.

### Does Ankr charge for the service?

When unstaking, the user pays a fee in ANKR that starts from 100 ANKR. Typical fee range is 500–3500 ANKR.


### What determines the amount of reward I receive each rebase of aMATICb?

Staking rewards depend mostly on the voting power of the validator node that your stake is delegated to and how much MATIC is validated on the network. 
Ankr aims to spread delegations to only the most trustworthy and reliable nodes to increase staking rewards.
 

### If I click **Unstake**, does my stake immediately stop accumulating rewards?

Your stake **continues** to accumulate rewards until the moment you receive them.


### Is there any risk from staking, like slashing or any penalties?

The only risk for stakers is missing out on rewards during any time a validator they staked with is slashed. 
Slashing is a protocol-level penalty associated with a validator failure if it validates an invalid transaction or goes offline.
The delegated staked MATIC is not slashed — slashing impacts only the self-stake of the validator. 
Ankr only delegates to trusted and reputable validator nodes to avoid any validator that would act maliciously.


### Is there any liquidity for my Liquid Staking tokens anywhere?

You can trade them in the listed liquidity pools on ANKR DeFi:

* [aMATICb](https://www.ankr.com/staking/defi/?assets=aMATICb)
* [aMATICc](https://www.ankr.com/staking/defi/?assets=aMATICc)

You can also use your Liquid Staking tokens to:
* [Add liquidity on DEXs](/staking/defi/liquidity-pools/) and earn from commissions taken when users swap tokens, using the liquidity pool you're a part of.
* [Yield farm](/staking/defi/yield-farming) and earn additional rewards in the form of liquidity pool tokens and further farm them.  
* [Put your tokens in a vault](/staking/defi/vaults) and automatically earn additional rewards in the form of one of both assets from the pair.

### Can I get staking metrics for my integration?

Yes, if you want to integrate Ankr Liquid Staking into your product, read [Liquid Staking Metrics](/staking/for-integrators/restful-api/staking-metrics/).