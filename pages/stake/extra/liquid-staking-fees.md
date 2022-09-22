# Liquid Staking fees
Ankr charges fees for Liquid Staking.

Here are the fees applied during staking and unstaking process.

## Staking
* AVAX — 2% fee from the staking reward.
* BNB — relayer fee for cross-chain asset transfer (0.002 BNB).
* DOT — 2% fee from the staking reward.
* FTM — no fees.
* KSM — no fees.
* MATIC — no fees.

## Unstaking
* AVAX — no fees.
* BNB — no fees.
* DOT — no fees.
* FTM — burnFee; depends on the current liquidity and amount to unstake, calculated by the `FantomPool` smart contract, deducted from the amount the user unstakes.
* KSM — no fees.
* MATIC — a fee in $ANKR that starts from 100 $ANKR; typical fee range is 500–3500 $ANKR.
