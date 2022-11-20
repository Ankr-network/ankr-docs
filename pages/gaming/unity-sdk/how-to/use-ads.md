## Installation

To install advertisements package, you have to include the `AnkrSDK/Scripts/Ads` folder. `AnkrSDK.asmdef` is an assembly that will contain any required code for ads to work.

##  Standalone/WebGL

For now, any non-mobile platform supports only banner/raw texture advertisements. Implementation is provided via the `AnkrAds.dll` library.

## Android
Implementation is provided via the `nativeads.aar` file.

## IOS

Implementation is provided via the `AdsBridge.framework` and `ANKR_adlibrary.framework`. Device SDK only. IOS Platform 13.0+ is required.

## `AnkrAdvertisements`

Usage of advertisements inside Gaming UnitySDK comes down to interaction with the `AnkrAdvertisements` class.

### Methods

To begin your advertisements session, call the `Initialize` method. This will initialize a current user, making it possible to load and show ads.

```c plus
void Initialize(string appId, string accountAddress)
```

After initialization is finished, you can preload your ad. To do so, call either `LoadAd` or `LoadAdTexture`, whatever suits your needs best.  

If called `LoadAd`, we request to load an advertisement by `unitId` that you can get from your ads dashboard.

After request is sent, your image or video ad will be preloaded and cached.

```c plus
void LoadAd(string unitId)
```

Same as `LoadAd` but it returns only an image as we do not yet support in-game video ads.

```c plus
void ShowAd(string unitId)
```

### Events

There is a list of events that you can use to control the flow of your Advertisements usage.

  * Those events are to be called after advertisement service has finished initializing:

```c plus
event Action AdInitialized;
```

  * To be called after a requested ad has loaded. Returns `UnitId` as a parameter:

```c plus
event Action<string> AdLoaded;
```

  * If the ad fails to load, the localized error message returns as a parameter:

```c plus
event Action<string> AdFailedToLoad;
```

  * If a fullscreen ad with `unitId` has been clicked on during being shown, this event is called:

```c plus
event Action<string> AdClicked;
```

  * If the requested fullscreen ad has been successfully show to the user, this event is called:

```c plus
event Action AdOpened;
```

  * The user closes a fullscreen ad:

```c plus
event Action AdClosed;
```

  * The user has completely finished watching the ad:

```c plus
event Action AdFinished;
```

  * If the user has watched the fullscreen ad for the time required to be rewarded:

```c plus
event Action<string> AdRewarded;
```

  * To be called after you call `LoadAd`/`LoadAdTexture` and receive that the ad data belongs to an image type. In this case, the `unitId` + `texture` data are to be returned as parameters:

```c plus
event Action<string, byte[]> AdTextureReceived;
```

  * A general error type has occurred during the ad service work. A localized error message returns as a parameter:

```c plus
event Action<string> Error;
```

