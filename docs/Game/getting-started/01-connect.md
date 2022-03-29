---
title: 01 - Connect Wallet and Authenticate
id: game-01
---

## 01 - Connect MetaMask and Authenticate

Connecting to a Web3 i.e. MetaMask wallet via **WalletConnect** provides a link between a **Wallet Address** and a user's **Game Account**. 

There are two ways to get a **Session Key** from your wallet. 
Both of these methods generate a **linking url** that creates a request in a **MetaMask wallet** to connect.

1. Connect with **QRCode** using ```QRCodeImage component``` OR using ```WalletConnect.Instance.OpenMobileWallet```

2. If you agree to connect, a **Session Key** is saved in **PlayerPrefs** for future use.

3. Create an instance of a AnkrSDKWrapper class via AnkrSDKWrapper.GetSDKInstance(...) method after successful connection to your wallet.

    ```js
    var ankrSdk = AnkrSDKWrapper.GetSDKInstance("<ethereum node url>");
    ```

Inside (AnkrSDK/Examples/UseCases/LinkingAccountWallet) is an example script demonstrating how to link a Web3 wallet (MetaMask) to a player account.

### 👀 Example Connect Wallet to Account

This is an example from the SDK to link a Web3 wallet to a player account.

1. To connect a wallet, first make an instance of a `Web3` class and call `Initialize` method after login in metamask

    ```js
    string provider_url = "<ethereum node url>";
            
    Web3 web3 = new Web3(provider_url);
    web3.Initialize();
    ```

2. To prove ownership of the wallet address, the player should sign an arbitrary string > zero length. We recommend using uuid strings. The Web3 Wallet provides the sign functionality. To start this step call method `Sign`.

    ```js
    string message = "Hi I am a message !"
    string signature = await web3.Sign(message); //returns the signature.
    ```

3. The next step involves the backend serverside. You can view an example script here (https://github.com/mirage-xyz/mirage-serverside-demo/blob/main/backends/signing-go/main.go) It returns a signature if authentication is successful. Below is an ***extract*** from this script:

    ```js
    package main

    import (
        "encoding/hex"
        "encoding/json"
        "log"
        "math/big"
        "net/http"
        "strconv"

        "fmt"

        "github.com/ethereum/go-ethereum/common"
        "github.com/ethereum/go-ethereum/common/hexutil"
        "github.com/ethereum/go-ethereum/common/math"
        "github.com/ethereum/go-ethereum/crypto"
        "github.com/ethereum/go-ethereum/ethclient"
        cryptoTyped "github.com/ethersphere/bee/pkg/crypto"
        eip712 "github.com/ethersphere/bee/pkg/crypto/eip712"
        "github.com/gin-gonic/gin"
    )

    // Endpoint for evm rpc requests
    var ankr = "https://rpc.ankr.com/eth_rinkeby"
    var client, clientConnectErr = ethclient.Dial(ankr)

    // Simple ERC721 contract with methods to update nft fields and signature verification mechanism
    // For this demo use contract in "contracts/GameItem.sol"
    var contractAccount = "0x159D0A933137f3EC155f43834BDFCd534A8bfd61"

    // Private key should belong to account that deployed contract
    var privateKeyString = "a0022ef0d495da2ad7e639f9d93045661f149f31472cedf067a0712b391749df"

    // Private key on the server side For GD-3 (use case 8)
    var privateKey, _ = crypto.HexToECDSA(privateKeyString)

    // user's address associated with the hero id
    var clientAddress = common.HexToAddress("0x24d13b65bAbFc38f6eCA86D9e73C539a1e0C0196")

    }
    ```

4. To verify the user make a call using the method POST `/account/verification/address` with the payload i.e. returned signature

    ```json
    {
    "message": "Hi I am a message !", // your message
    "signature":"0x..." // result of Web3.Sign()
    }
    ```

5. This method gets the address of the user from the signature so you can write it to database.

    ```go
    ...
    sigPublicKey := getAddrFromSign(input.Signature, data)
    address := string(sigPublicKey);
    // add address to a database
    ...

    ```