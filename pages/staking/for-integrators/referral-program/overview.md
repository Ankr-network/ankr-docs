import { Callout } from "nextra-theme-docs";

# Referral program 
Through our referral program, you can become an Ankr partner and generate more revenue attracting new users to Ankr Liquid Staking.

<Callout type="info" emoji="ℹ">
Referral program is coming first on BNB Chain and later will be enabled for other networks that feature Ankr Liquid Staking.
</Callout>

## How it works
There are two cases for partners in the program:
* Integrating Ankr Liquid Staking into your web app and inviting users to liquid-stake.
* Promoting Ankr Liquid Staking on YouTube as an influencer and giving out your referral code in the video and video description.

Either case, you'll be generating revenue from stakes made by each brand new user. 
"Brand new" stands for a user who includes your referral code in their first liquid-staking transaction from an address that has never held any Liquid Staking tokens, i.e. has never liquid-staked or bought Liquid Staking tokens on DEXs.
As we all know, new addresses are easily generated in most wallets, such as Metamask.

## How much revenue you'll generate
We plan to allocate for you from 50% to 70% of the Ankr's Liquid Staking rewards fees.

The formula and the mechanics are well-explained through this example:
1. Say, your attracted stakers have liquid-staked 100,000 BNB, using your referral code.
2. Each day, validators accumulate staking rewards and send them to Ankr's dedicated system wallet — 10 BNB daily in this example.
3. From these rewards, Ankr takes its fee — 10%, which is 1 BNB, and distributes the remaining 9 BNB among the stakers.
4. From this fee, once a month, Ankr sends all partner shares to the partner smart contract on BNB Smart Chain where you can claim yours. 
   Your share is calculated on Ankr's backend and depends on the % of TVL that came through you as a partner.
   1. Let's say, Ankr decided on 50% partner shares this month — 0.5 BNB.
   2. Ankr counts the % of TVL that came through your. Let's say, it's 1%, so for 1 day you'll get 0.5 * 0.01 = 0.005 BNB. Calculations are performed daily, and you can see your share on Referral Dashboard.
   
<Callout type="info" emoji="ℹ">
A very important aspect is **how a staker is assigned to a partner**.

We have a special staking method where one of the input arguments is the referral code that we generate for the partner.
We count only the very first staking transaction from the address. 
I means that if Alice initially staked with Bob's code and then started staking with Eve's code, we still count all TVL as coming through Bob. 

An API to see if an address is assigned to any partner is coming later for you to check which users to give out the perks you offered as incentive to.
</Callout>

## Where and how often to claim partner rewards 
You can claim your rewards once a month as we release them to the partner smart contract.
Claiming is done via [Referral Dashboard](/staking/for-integrators/referral-program/overview/#check-revenue-and-progress-on-referral-dashboard).

## Become an Ankr partner and start generating revenue
If you want to integrate Ankr Liquid Staking into your web app:
1. Drop us a line at [staking@ankr.com](mailto:staking@ankr.com).
2. Let us guide you through the registration process.
3. Receive integration instructions.
4. Integrate with Ankr Liquid Staking via Liquid Staking SDK, using instructions from #3.
5. Start attracting users and generating revenue.

If you want to promote Ankr Liquid Staking on media:
1. Drop us a line at [staking@ankr.com](mailto:staking@ankr.com).
2. Let us guide you through the registration process.
3. Receive your referral code.
4. Start attracting users and generating revenue.

## Check revenue and progress on Referral Dashboard
Once registered as partner, you can check your progress and claim your partner rewards from Referral Dashboard:
1. Visit [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/).
2. Click **Referral Program** on the right above the dashboard.
   <img src="/docs/staking/referral-program/referral-program-button-on-staking-dashboard.jpg" alt="Referral Program button on Staking Dashboard" class="responsive-pic" width="800" />
3. Check your referrals, staked amount, pending and claimable partner rewards, and claim history.
   <img src="/docs/staking/referral-program/referral-dashboard.jpg" alt="Referral Dashboard" class="responsive-pic" width="800" />
