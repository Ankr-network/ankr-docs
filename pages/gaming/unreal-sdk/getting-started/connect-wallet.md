# Connect a wallet

This section assumes you have already deployed the relevant smart contracts to the blockchain and have smart contract addresses and ABI at your disposal.

## Guided tutorial

<iframe width="600" height="400" src="https://www.youtube.com/embed/O8FAOFPvDUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## deviceId

`deviceId` — the parameter that is generated upon initialization and saved for the further usage. It will be automatically populated upon sending any requests from that particular device. This parameter serves as a kind of validator. For example, it might prevent confirming a ticket from any other device except for the one associated with the `deviceId` generated upon initialization.

```
deviceId = load->UniqueId;
```

## ConnectWallet

`ConnectWallet` — connects to the wallet app on your mobile device. On a desktop, a QR-code is to be generated upon logging in. The session is saved to a variable for the further usage.

To connect a wallet, use the following C++ code:

```c plus
void UAnkrClient::ConnectWallet(const FAnkrCallCompleteDynamicDelegate& Result);
```

<img src="/docs/gaming/connect-wallet-unreal.png" alt="Connect a wallet" class="responsive-pic" width="800" />

## GetWalletInfo

If you haven't logged in to your wallet yet, then the app on your mobile device will automatically prompt you to log in.

If you're logged in, then  `GetWalletInfo` retrieves your wallet information:

```c plus
void UAnkrClient::GetWalletInfo(const FAnkrCallCompleteDynamicDelegate& Result);
```

<img src="/docs/gaming/get-wallet-info-unreal.png" alt="'Get wallet info'" class="responsive-pic" width="800" />