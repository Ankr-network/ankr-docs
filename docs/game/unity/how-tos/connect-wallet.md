---
title: Connect a Wallet to the SDK
id: wallet-game
---

# How to Connect a wallet to the SDK

Connecting to an Ethereum i.e. MetaMask wallet provides a link between a wallet address and a user's game account. 

* You have to connect your wallet via **WalletConnect**. 

There are a number of ways to get a session key from your wallet. Both of these methods will generate a linking url which will create a request in your wallet to connect. 

If you accept the connection, a session key will be saved in '*PlayerPrefs*' for future use.

1. Connect with QRCode using **QRCodeImage** component.
2. Connect using **WalletConnect.Instance.OpenMobileWallet**.
3. Create an instance of a ```AnkrSDKWrapper``` class via ```AnkrSDKWrapper.GetSDKInstance(...)``` method after successful connection to your wallet

    ```js
    var ankrSdk = AnkrSDKWrapper.GetSDKInstance("<ethereum node url>");
    ```

Inside (AnkrSDK/Examples/UseCases/LinkingAccountWallet) is an example script demonstrating how to link a crypto wallet (MetaMask) to a player account.