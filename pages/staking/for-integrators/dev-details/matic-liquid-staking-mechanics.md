# MATIC staking mechanics

MATIC Liquid Staking lets the user stake their funds through the corresponding smart contracts on the **Ethereum** network, accumulate rewards, and receive their stake and rewards when unstaking.

Ankr principles for the staking are:

* Make all staking transactions on the Ethereum network.

* Use the existing MATIC validator node owned by Ankr, thus there are no limits on staking amount and staking period.

* Use the fixed exchange rate 1:1 for aMATICb to MATIC.

* Recalculate aMATICb/MATIC-share ratio daily and update it in the aMATICb smart contract.

* Use a dynamic exchange ratio for aMATICc to MATIC.

* Recalculate aMATICc/MATIC ratio daily and update it in the aMATICc smart contract.


The following section explains staking requirements, fees, rewards, validators, smart contracts and function calls to interact with these smart contracts.


## Requirements
The requirements when staking are:

* Minimum value to stake — 1 MATIC.

* Maximum value to stake — unlimited, at the user’s discretion.

* Staking can be repeated anytime, without waiting for the current staking to complete.

The requirements when unstaking are:

* Minimum value to unstake — 0 MATIC.

* Maximum value to unstake — staked amount + % of the reward, up to the user’s balance.

* Withdrawal period after unstaking — >= 80 epochs. Typically, it’s around 1-2 days.

* aMATICb to MATIC exchange ratio is 1:1.

* aMATICc to MATIC exchange ratio is dynamic, as aMATICc grows in value to MATIC, daily.

* User can unstake a part of or all the staked MATIC anytime.


## Fees
Staking fees:
* Both for staking on Ethereum and on Polygon, Ankr takes 5% fees from user's Liquid Staking rewards. 

Unstaking fees: 
* When unstaking on Ethereum, user pays a fee of 0.025 ETH.
* When unstaking on Polygon, user pays a fee — 0.5% from the unstaking amount.

The user must also count in the gas price in ETH for outgoing transactions for staking/unstaking on Ethereum.


## Rewards
User's aMATICb balance grows daily. It can be described as `daily rewards / total share * user's share`.

User's aMATICc balance stays the same but the value of aMATICc to MATIC grows daily.

Validators receive rewards on the regular basis at the end of each epoch.

The APY is calculated from the validators' rewards.


## Validators

There is a single [Ankr validator on Polygon](https://wallet.polygon.technology/staking/validators/31). 


## Smart contracts
Smart contracts and addresses involved in MATIC Liquid Staking are:

* [Matic](https://etherscan.io/address/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0) — contract on Ethereum that the user calls to approve the chosen MATIC amount to be sent to the PolygonPool

* [PolygonPool](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89) — contract on Ethereum where the user sends their initial staking request.

* [aMATICb](https://etherscan.io/address/0x99534Ef705Df1FFf4e4bD7bbaAF9b0dFf038EbFe) — contract on Ethereum that mints aMATICb tokens for the user in 1:1 ratio with the staked amount.

* [aMATICc](https://etherscan.io/token/0x26dcfbfa8bc267b250432c01c982eaf81cc5480c) — contract on Ethereum that mints or burns aMATICc tokens for the user. All interactions go through the Proxy part. 

Smart contract code can be viewed by following the links and selecting the *Contract* tab.


## Staking workflow
The workflow is both user and Ankr-driven. The user part is Steps 1–2, the Ankr part is Steps 3–7.

User calls `Matic::approve(address spender, uint256 amountToSpend)` to approve the chosen MATIC amount to be sent to the `PolygonPool` smart contract.

User sends a request to Ankr `PolygonPool` smart contract on Ethereum, calling `stakeAndClaimBonds(uint256 amount)` (aMATICb) or stakeAndClaimCerts(uint256 amount) (aMATICc). The request is sent via Ankr Staking and MetaMask or another wallet connected to Ethereum.

Upon receiving the stake, the `PolygonPool` smart contract calculates the equivalent amount of aMATICb or aMATICc respectively and mints them to the user’s address found in the stake transaction.

`PolygonPool` emits a `StakePending(msg.sender, amount)` event.

On the Ankr Staking Dashbaord, the user can import the received aMATICb or aMATICc tokens to MetaMask or another wallet connected to Ethereum.

Ankr backend collects the MATIC staked by users, transferring them from the smart contract to the address controlled by the platform, and makes a validator stake on the Ankr MATIC Validator node if the conditions below are met.

Ankr Staking Dashboard can call `aMATICb::balanceOf(address account)` or `aMATICc::balanceOf(address account)` to check the user’s current aMATICb or aMATICc balance.

The Ankr backend monitors blockchain events coming from the `PolygonPool` smart contract. Upon a new staking event, the backend:

1. Checks if the newly available MATIC number (*N*) is >= to the minimum threshold. If yes, the available MATIC are sent from the `PolygonPool`  smart contract to the address managed by Ankr. Else, the backend waits for the next stake event from `PolygonPool`. *N* is a config parameter.

2. At the point when MATIC tokens become available at the Ankr address, a staking transaction is issued.

3. The Ankr backend monitors staking status and rewards, and restakes the rewards when the sum of the staked MATIC reward is > threshold. The threshold is a config parameter.


## Daily exchange ratio updates

### aMATICb
To update the ratio, the Ankr backend:

1. Collects information about the total supply of aMATICb.

2. Collects information about MATIC available as stakes on the `PolygonPool` smart contract, at the addresses controlled by Ankr, MATICs staked on the Validator node, and MATICs received as reward.

3. Calculates MATIC ratio, diving the MATIC share by the MATIC involved in the staking.

4. Sends a ratio update request to `aMATICb::function updateRatioAndFee(uint256 newRatio, uint256 newFee)`.

### aMATICc
To update the ratio, the Ankr backend:

1. Collects information about the total supply of aMATICb.

2. Collects information about MATIC available as stakes on the `PolygonPool` smart contract, at the addresses controlled by Ankr, MATICs staked on the Validator node, and MATICs received as reward.

3. Calculates MATIC ratio, diving the MATIC share by the MATIC involved in the staking.

4. Sends a ratio update request to `aMATICb::function updateRatioAndFee(uint256 newRatio, uint256 newFee)`.



## Unstaking workflow

The workflow is both user and Ankr-driven. The user part is Step 1, the Ankr part is Steps 2–11.

1. User navigates to the dedicated page in Ankr Staking and unstakes their MATIC.
2. Ankr Staking Dashboard checks the user’s aMATICb or aMATICc balance and displays a form to enter the number of MATIC to unstake.
4. For aMATICb, Ankr Staking Dashboard calls `PolygonPool::unstakeBonds(uint256 amount, uint256 fee, uint256 useBeforeBlock, bytes memory signature)` to unstake the specified amount of MATIC. For aMATICc, it's `PolygonPool::unstakeCerts(uint256 amount, uint256 fee, uint256 useBeforeBlock, bytes memory signature)`.  
5. `PolygonPool` transfers the equal amount of aMATICb or aMATICc from the user to itself (technically, it locks the amount of aMATICb/aMATICc to unstake in the user’s account).
6. `PolygonPool` issues an unstake event `MaticClaimPending(msg.sender, amount)`.
7. Ankr Staking Dashboard displays a notification to the user to indicate the unstaking request has been registered.
8. Ankr backend detects the unstake event and sends an unstake request to the MATIC smart contract on the Ethereum blockchain.
9. When unstake is completed and MATIC received at the platform address, the backend sends the MATIC to the Polygon Pool smart contract: `PolygonPool::serveClaims()`.
10. `PolygonPool` sends the MATIC to the user address, burns the aMATICb or aMATICc tokens, and issues an event saying the unstake request has been completed.