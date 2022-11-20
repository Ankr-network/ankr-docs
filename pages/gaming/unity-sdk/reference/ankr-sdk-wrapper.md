## `AnkrSDKWrapper`

`AnkrSDKWrapper` provides support for all platform-dependent features and implements `IAnkrSDK`.

**Properties**:

  * `NetworkHelper` — provides an `INetworkHelper` instance.
  * `Eth` — provides an `IEthHandler` instance.

### Public methods

  * [`GetContract`](#getcontract) — creates a contract instance for a smart contract interaction.
  * [`CreateSubscriber`](#createsubscriber) — creates subscribers for the real-time contract event subscriptions.
  * [`Disconnect`](#disconnect) — disconnects from the wallet.

### `GetContract`

#### Declaration

> `IContract GetContract(string contractAddress, string contractABI)`

**Parameters**:

  * `contractAddress` (string) — a contract address.
  * `contractABI` (string) — a contract's application binary interface (ABI).

#### Returns

  * `IContract` — returns an instance of the [Contract](/gaming/unity-sdk/reference/contract/) class.

Provides an instance of a contract with a platform-dependant provider.

#### Code example

```c plus
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using UnityEngine;

public class ContractExample : MonoBehaviour
{
	private IContract _contract;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_contract = ankrSDK.GetContract("0x...","...");
	}
}
```

### `CreateSubscriber`

#### Declaration

> `IContractEventSubscriber CreateSubscriber(string wsUrl)`

**Parameters**:

  * `wsUrl` (string) — an RPC endpoint for the WebSockets connection.

#### Returns

  * `IContractEventSubscriber` — returns a subscriber class instance.

Provides an instance of subscriber to make contract event subscriptions. See more on [Events and subscriptions](/gaming/extra/events-and-subscriptions/).

#### Code example

```c plus
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Data;
using AnkrSDK.DTO;
using AnkrSDK.Examples.ERC20Example;
using AnkrSDK.Provider;
using AnkrSDK.UseCases;
using Cysharp.Threading.Tasks;
using UnityEngine;

namespace AnkrSDK.EventListenerExample
{
	public class EventListenerExample : UseCase
	{
		private IContractEventSubscriber _eventSubscriber;
		private IContractEventSubscription _subscription;
		private IEthHandler _eth;

		private void Start()
		{			
			var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance(ERC20ContractInformation.HttpProviderURL);
			_eth = ankrSDK.Eth;

			_eventSubscriber = ankrSDK.CreateSubscriber(ERC20ContractInformation.WsProviderURL);
			_eventSubscriber.ListenForEvents().Forget();
			_eventSubscriber.OnOpenHandler += UniTask.Action(SubscribeWithRequest);
		}

		// If you know topic position then you can use EventFilterData
		public async UniTaskVoid SubscribeWithTopics()
		{
			var filters = new EventFilterData
			{
				FilterTopic2 = new object[] { await _eth.GetDefaultAccount() }
			};

			_subscription = await _eventSubscriber.Subscribe(
				filters,
				ERC20ContractInformation.ContractAddress, 
				(TransferEventDTO t) => ReceiveEvent(t)
			);
		}
		
		// If you know only topic name then you can use EventFilterRequest
		public async UniTaskVoid SubscribeWithRequest()
		{
			var filtersRequest = new EventFilterRequest<TransferEventDTO>();
			filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

			_subscription = await _eventSubscriber.Subscribe(
				filtersRequest,
				ERC20ContractInformation.ContractAddress, 
				ReceiveEvent
			);
		}

		private void ReceiveEvent(TransferEventDTO contractEvent)
		{
			Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}");
		}

		public void Unsubscribe()
		{
			_eventSubscriber.Unsubscribe(_subscription.SubscriptionId).Forget();
		}

		private void OnDestroy()
		{
			_eventSubscriber.StopListen();
		}
	}
}
```

### `Disconnect`

#### Declaration

> `UniTask Disconnect(bool waitForNewSession)`

**Parameters**:

  * `waitForNewSession` (boolean) — if `true` (by default), a connection will be reestablished upon disconnection. If `false`, connection will be closed immediately.

#### Returns

Removes a wallet connection.

#### Code example

```c plus
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using UnityEngine;

public class DisconnectExample : MonoBehaviour
{
	private IAnkrSDK _sdk;

	private void Start()
	{
		_sdk = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
	}

	private void OnDisable()
	{
		_sdk.Disconnect(false);
	}
}
```