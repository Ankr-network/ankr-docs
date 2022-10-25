import { Callout } from "nextra-theme-docs";

## `AnkrSDKFactory`

A class for SDK instance creation.

### Static methods

  * [`GetAnkrSDKInstance`](#getankrsdkinstance) — creates an SDK instance with a given argument.

### `GetAnkrSDKInstance`

#### Declaration

> `IAnkrSDK GetAnkrSDKInstance(string providerURI)` OR<br/>
> `IAnkrSDK GetAnkrSDKInstance(NetworkName networkName)`

**Parameters**:

  * `providerURI` (string) — an RPC endpoint.
  * `networkName` (enum) — a network name.

#### Returns

  * `IAnkrSDK` — an SDK provider instance. 

Creates an SDK instance with a provider URL or network name specified.

#### Code example

```c plus
using AnkrSDK.Data;
using AnkrSDK.Provider;
using UnityEngine;

public class CreateSDKExample : MonoBehaviour
{
	private void Start()
	{
		var ankrSDKByProvider = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		// or
		var ankrSDKByNetwork = AnkrSDKFactory.GetAnkrSDKInstance(NetworkName.Ethereum);
	}
}
```



