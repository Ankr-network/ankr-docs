# Liquid Staking fees
Ankr charges fees for Liquid Staking.

Here are the fees applied during staking and unstaking process.

## Staking
* AVAX — 2% of the Liquid Staking rewards as a base fee.
* BNB — 10% of the Liquid Staking rewards as a base fee; a relayer fee is taken when staking for cross-chain asset transfer (0.002 BNB).
* DOT — 2% fee from the staking reward.
* FTM — no fees.
* KSM — no fees.
* MATIC — 5% of the Liquid Staking rewards as a base fee, both on for MATIC on Ethereum and Polygon.

## Unstaking
* AVAX — no fees.
* BNB — no fees.
* DOT — no fees.
* FTM — burnFee; depends on the current liquidity and amount to unstake, calculated by the `FantomPool` smart contract, deducted from the amount the user unstakes.
* KSM — no fees.
* MATIC — for MATIC Liquid Staking on Ethereum, a fee in $ANKR that starts from 100 $ANKR; typical fee range is 500–3500 $ANKR; for MATIC Liquid Staking on Polygon — 0.5% of the unstaking amount.
