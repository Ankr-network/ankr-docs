---
title: Setting Up
id: setting-up-unreal
---
# Setting up

Let's get started!

:::info

Ankr Unreal SDK is v5.0 ready. 

:::

## Prerequisites

You will need **Unreal Engine** to be installed on your computer. If you don’t have it yet, sign up and download the **Creator's License** from the [official website](https://www.unrealengine.com/en-US/download).

1. Install or open the **Epic Games launcher**.
2. Sign in.  
3. On the **Unreal Engine** tab, click the **Install Engine** button to download and install the latest version of **Unreal Engine**. 

## Project installation

1. Download the latest release of **AnkrSDK.zip** package from https://github.com/Ankr-network/game-unreal-sdk/releases.

2. Open your project folder **'[ProjectName].uproject'**

3. Create a folder called **'Plugins'**

3. Unzip the **AnkrSDK.zip** folder into the **Plugins** folder.

4. Delete **Binaries**, **Intermediate**, **Saved folders** and **Visual Studio Project file (.sln)** from Unreal Project (If any).

## Generate a Visual Studio Project

1. Generate a **Visual Studio Project** by right-clicking **'[ProjectName].uproject'** and selecting **Generate Visual Studio project files**

2. Open the generated **Visual Studio solution file (.sln)** and check if the plugin is included in the solution explorer.

3. Locate **GameInstance.h** if already created. If not Add C++ class from **Content Browser**, check **Show All Classes** and select **GameInstance**. Name your class **'MyGameInstance'**.
Open **MyGameInstance.h** and include the following code:

   ```cpp
      #include "AnkrClient.h"

      UPROPERTY()
      UAnkrClient* ankrClient;

      UFUNCTION(BlueprintCallable, Category = "ANKR SDK")
      UAnkrClient* GetAnkrClient();
   ```

4. Open **MyGameInstance.cpp** and include the following code:

   ```cpp
   UAnkrClient* UMyGameInstance::GetAnkrClient()
   {
      if (ankrClient == nullptr)
      {
         ankrClient = NewObject<UAnkrClient>();
      }

      return ankrClient;
   }
   ```

## Add AnkrSDK to Build.cs

Add **AnkrSDK** to your `Unreal Project/Source/Unreal Project/Build.cs` as shown below:

```cpp
PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "AnkrSDK" });
```

Click **Edit > Project Settings > Maps and Modes** and select your newly created or already created **'GameInstance'** from the **'GameInstance Class'** dropdown.

Now you can call all the functions in blueprint by getting **'GetGameInstance > GetAnkrClient'**.