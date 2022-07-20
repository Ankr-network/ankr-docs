---
title: Before Starting
id: unreal-before
---
# Before you start
## SDK walk-through

<iframe width="550" height="305" src="https://www.youtube.com/embed/lvhW_9y2lEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Components interaction

AnkrSDK enables interacting with the blockchain for the latest Unreal Engine 5+.

The interaction components are the following:

* Frontend: Unreal Engine 5+
* Backend:
  * Unreal Engine uses Ankr API to interact with the blockchain.
  * Ankr handles the Unreal Engine to blockchain communication.

## SDK's functionality

Currently, the SDK supports the following functionality for Unreal Engine:

1. Connecting a wallet (MetaMask) and authenticating a user.
2. Updating NFTs.
3. Minting NFTs.

## Prerequisites

1. Having smart contracts deployed on the blockchain.
2. Having smart contract addresses and ABI for those smart contracts deployed.

## SDK Installation

1. Download the `AnkrSDK.zip` package from the latest [release](https://github.com/Ankr-network/game-unreal-sdk/releases).
2. Unzip the `AnkrSDK.zip` package to your Unreal Project's **Plugins** folder.
3. Delete the **Binaries**, **Intermediate**, and **Saved** folders.
4. Right-click `.uproject` and then select **Generate Visual Studio project** (or **Services** > **Generate Xcode project**) to generate either of those.
5. Open the generated Visual Studio (or Xcode) project and check if the plugin is included inside the Game project.
6. Locate your `GameInstance.h` if already created. If not, add the C++ class from Content Browser in Unreal Engine, check **Show All Classes** and select **GameInstance**. Name your class **MyGameInstance**.
7. Open `MyGameInstance.h` and include the following code:
    ```
       #include "AnkrClient.h"
    
       UPROPERTY()
       UAnkrClient* ankrClient;
    
       UFUNCTION(BlueprintCallable, Category = "ANKR SDK")
       UAnkrClient* GetAnkrClient();
    ```
8. Open `MyGameInstance.cpp` and include the following code:
    ```
    UAnkrClient* UMyGameInstance::GetAnkrClient()
    {
        if (ankrClient == nullptr)
        {
            ankrClient = NewObject<UAnkrClient>();
        }
    
        return ankrClient;
    }
    ```
9. Add **AnkrSDK** to your Unreal Project/Source/Unreal `Project/Build.cs` as follows:
    ```
    PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "AnkrSDK" });
    ```
10. Click **Edit** > **Project Settings** > **Maps and Modes**, and select your newly created or already created **GameInstance** from the **GameInstance Class** dropdown.
11. Now you can call all the functions in the blueprint by getting **GetGameInstance** > **GetAnkrClient**.