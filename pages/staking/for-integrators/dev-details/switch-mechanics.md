# Ankr Switch mechanics

## Fees 

The user pays the following fees:
* 0.3% is deducted from the entered sum for using Ankr Switch.

The user must also count in the gas fees for outgoing transactions.

## Switching workflow

1. The user visits [Ankr Switch](https://www.ankr.com/staking/switch/)
2. The user grants Ankr Switch access to their wallet. If needed, the user select the correct network and clicks **Switch network** in their wallet.
3. The user chooses source and destination tokens.
4. The user enters the desired amount of tokens to switch.
5. If the token is a reward bearing token like ankrETH, the user clicks **Approve**. 
   That causes Ankr Switch to call the `approve()` function that permits the involved smart contracts to spend the specified amount of the user's tokens.
6. The `approve trasaction` remains in the pending state until it's confirmed on the network, which enables the **Switch** button for the user.  
7. The user clicks **Switch** to switch the tokens and clicks **Confirm** in their wallet.
   That causes Ankr Switch to call the `lockShares(shares)` when switching ankrETH to aETHb, or `unlockShares()` when switching aETHb to ankrETH.
8. Ankr waits until the switching transaction is confirmed on the network and displays a **Success** page.
9. The user can add the switched token to their wallet by clicking **Add ankrETH to wallet**. Alternatively, the user can click **Go to dashboard** to view their tokens there.

To sum up, the flow in any direction is the same: `approve` (if necessary) -> `lockShares`/`unlockShares`.

## Additional details

-b tokens (e.g., aETHb) can be burned or minted, and -c tokens (e.g., aETHс) can be locked or unlocked.