# Setting up

## Installation

### Install via package

  1. Download `AnkrSDK.unitypackage` from the latest [release](https://github.com/Ankr-network/game-unity-sdk/releases).
  2. Move the downloaded `AnkrSDK.unitypackage` package into your project's **Assets** folder.
  3. Select **Import all** to enable using the full scope of SDK capabilities.

    <img src="/docs/install-sdk.png" alt="Install SDK" class="responsive-pic" width="700" />

### Install via GitHub URL

Prerequisites:

  * Unity version that supports the `path` query parameter for git packages (Unity version `>= 2019.3.4f`1; Unity version `>= 2020.1a21`).

Installation flow:

  * Add the following URL to Package Manager:

    ```
    https://github.com/Ankr-network/game-unity-sdk.git?path=Assets/AnkrSDK
    ```

    <img src="/docs/package-mngr.png" alt="Package Manager" class="responsive-pic" width="700" />

OR

  * Add the following key-value pair to `Packages/manifest.json`:
    ```json
    "com.ankr.ankrsdk": "https://github.com/Ankr-network/game-unity-sdk.git?path=Assets/AnkrSDK"
    ```

### Install via OpenUPM

Install the package using [openupm-cli](https://github.com/openupm/openupm-cli) from [OpenUPM registry](https://openupm.com/packages/com.ankr.ankrsdk/):

```shell
openupm add com.ankr.ankrsdk
```

## What's inside

The SDK is designed to make it super easy to get started with game development by enabling connection and interaction across different blockchains.

• Contains a huge range of examples, scripts and plugins for a variety of use cases.

• Nethereum libraries provide support for web requests using RPC over Http.

• Ankr RPC network infrastructure provides fast and easy connection to multiple chains.

<iframe width="600" height="400" src="https://www.youtube.com/embed/nuU-OvP1p1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>