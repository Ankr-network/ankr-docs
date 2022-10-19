import { Callout } from "components";

# MacOS 

The following instructions are based on Monterey v12.3.1.

## Get Ready

* Ensure you have the latest version of Xcode.
* Download the Epic Games Launcher to access the Unreal Engine. [**Download**](https://www.unrealengine.com/en-US/download?sessionInvalidated=true)
* Install Unreal Engine v5. [**Download**](https://www.unrealengine.com/en-US/download?sessionInvalidated=true)


## STEP ONE - Add v5 Unreal Engine

1. Open **Epic Games Launcher** and view all versions of the **Unreal Engine** you have. 

2. Click **Library** and the **+** button to add the **v5** version

   <img src="/docs/unreal-v5.png" alt="blank" class="responsive-pic" width="600" />

   <Callout type="warning" emoji="❗">
   If you find that the + button is greyed out, then do the following:

   a. Sign out 

   b. Then from the **login box**, scroll to the bottom and click **Sign in Later**.

   <img src="/docs/game-mac-1.0.png" alt="blank" class="responsive-pic" width="200" />

   c. Inside **Epic Games Launcher**, select **Library** > **+** > **v5**

   d. Now Sign in as usual 
   </Callout>

3. You can now click to install **v5**. (This takes some time)

4. Launch **v5** (Be patient, this can take a little while)

   <Callout>
   If a pop up appears:
   "Do you want the app **UnrealEditor.app** to accept incoming network connections"
   Select **Allow**

   <img src="/docs/game-mac-1.png" alt="blank" class="responsive-pic" width="200" />
   </Callout>

## STEP TWO - Create a new project

1. Inside the **Unreal Project Browser**, select the **Games** tab and **Blank**

   <img src="/docs/game-mac-2.0.png" alt="blank" class="responsive-pic" width="600" />

2. Under **Project Defaults**, select **C++**

3. Deselect **Starter Content**

4. Give your project a memorable name e.g. BlockchainGame and then click **Create**

5. Check if your project is successfully created and opens. Then close it. Now we can do the next important step of adding the SDK. 

   <img src="/docs/game-mac-2.png" alt="create folder" class="responsive-pic" width="350" />

## STEP THREE - Download Ankr SDK

1. Download the [latest release](https://github.com/Ankr-network/game-unreal-sdk/releases) of **AnkrSDK.zip** package.

2. Create a new folder (if it doesn't already exist) inside the project you just created and call it **Plugins**.

3. Extract the downloaded **AnkrSDK.zip** contents into the **Plugins folder** you just created. 

4. Delete the **AnkrSDK.zip** file (if it is inside the **Plugins folder**). 

<img src="/docs/game-mac-3.png" alt="create folder" class="responsive-pic" width="400" />


## STEP FOUR - Generate the Xcode project

<Callout> 
These docs are written using Xcode 13.1
</Callout>

1. Open **Unreal Editor**

2. If you get a notice saying **"Missing BlockchainGame Modules Ankr SDK"**. Select **Yes** to rebuild.

3. It should now compile the project. 

4. Once the project is compiled, select **Tools** > **Generate Xcode project**

5. When this is done, select **Tools** > **Open Xcode**

## STEP FIVE - Build project

1. Inside **Xcode**, you should be able to see the **AnkrSDK** included in the **Plugins** folder.

2. Expand **Games > your_unreal_project__name > Source > your_unreal_project_name > your_unreal_project_name.Build.cs** 

   <img src="/docs/game-mac-5.png" alt="Xcode" class="responsive-pic" width="600" />

  * Add `"AnkrSDK"` at the end of the string array as shown below: 

   ```
   PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "AnkrSDK" });
   ```

3. Now from the top menu, select **Product** > **Build For** > **running**

4. You can view the Build status in the top right. 

5. You know everything has worked out when a message appears stating **'Build Succeeded'**. 

## STEP SIX - Project opens in Unreal Editor

1. Locate **GameInstance.h** if already created. If not Add C++ class from **Content Browser**, check **Show All Classes** and select **GameInstance**. Name your class **'MyGameInstance'**.

2. Open **MyGameInstance.h** and include the following code:

   ```
     #include "AnkrClient.h"

      UPROPERTY()
      UAnkrClient* ankrClient;

      UFUNCTION(BlueprintCallable, Category = "ANKR SDK")
      UAnkrClient* GetAnkrClient();
   ```

3. Open **MyGameInstance.cpp** and include the following code:

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

4. You can now add and use all the functions from the **Ankr SDK** in your game.

   <Callout>
   Nice work!! You're all set to go
   </Callout>



# Windows 10

The following instructions are based on Windows 10.

## Get Ready

* Ensure you have the latest version of **Visual Studio**
* Download the **Epic Games Launcher** to access the Unreal Engine. [Download](https://www.unrealengine.com/en-US/download?sessionInvalidated=true)
* Install **Unreal Engine v5** [Download](https://www.unrealengine.com/en-US/download?sessionInvalidated=true)

## STEP ONE - Add v5 Unreal Engine

1. Open **Epic Games Launcher** and view all versions of the **Unreal Engine** you have. 

2. Click **Library** and the **+** button to add the **v5** version

   <Callout type="warning" emoji="❗">
   If you find that the + button is greyed out, then do the following:

   a. Sign out 
   b. Then from the **login box**, scroll to the bottom and click **'Sign in Later'**. 
   c. Inside **Epic Games Launcher** > **Library** > **+** > **v5**
   d. Now Sign in as usual 
   </Callout>

3. You can now click to install **v5** (This takes some time)

4. Launch **v5** (Be patient, this can take a little while)

  <Callout>
  If a pop up appears:
  "Do you want the app **UnrealEditor.app** to accept incoming network connections"
  Select **Allow**
  </Callout>

## STEP TWO - Create a new project

1. Inside the Unreal Project Browser, select the **Games** tab and **Blank**

2. Under **Project Defaults**, select **C++**

3. Deselect **Starter Content**

4. Give your project a memorable name e.g. BlockchainGame and then click **Create**

5. Check your project opens and then close it. So we can do the next important step of adding the SDK. 

## STEP THREE - Download Ankr SDK

1. Download the [latest release](https://github.com/Ankr-network/game-unreal-sdk/releases) of **AnkrSDK.zip** package.

2. Create a new folder inside the project you just created and call it **Plugins**.

3. Extract the downloaded **AnkrSDK.zip** contents into the **Plugins folder** you just created. 

4. Delete the **AnkrSDK.zip** file if is inside the **Plugins folder**.

## STEP FOUR - Generate a Visual Studio Project

1. Open **Unreal Editor**

2. If you get a notice saying **"Missing your_unreal_project_name Modules Ankr SDK"**. Select **Yes** to rebuild.

3. It should now compile the project. 

4. From the top menu, select **Tools** > **Generate Visual Studio Project**

5. When this is done, select **Tools** > **Open Visual Studio Project**

## STEP FIVE - Build project

Inside Visual Studio project

1. Add **AnkrSDK** to **your_unreal_project_name > Source > your_unreal_project_name > your_unreal_project_name.Build.cs** as shown below:

   ```
   PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "AnkrSDK" });
   ```

2. Generate a **Visual Studio Project** by right-clicking **Your_unreal_project_name.uproject'** and selecting **Generate Visual Studio project files**

3. Open the generated **Visual Studio solution file (.sln)** and check if the plugin is included in the solution explorer.

## STEP SIX - Project opens in Unreal Editor

1. Locate **GameInstance.h** if already created. If not Add C++ class from **Content Browser**, check **Show All Classes** and select **GameInstance**. Name your class **'MyGameInstance'**.

2. Open **MyGameInstance.h** and include the following code:

   ```
      #include "AnkrClient.h"

      UPROPERTY()
      UAnkrClient* ankrClient;

      UFUNCTION(BlueprintCallable, Category = "ANKR SDK")
      UAnkrClient* GetAnkrClient();
   ```

3. Open **MyGameInstance.cpp** and include the following code:

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

4. You can now add and use all the functions from the **Ankr SDK** in your game.

   <Callout>

   Nice work!! You're all set to go

   </Callout>