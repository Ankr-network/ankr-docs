## `ContractEventSubscriber`

A class that contains methods for making real-time subscriptions for contracts' events.

**Constructors**:

  * [`ContractEventSubscriber`](#constructor) — creates a new `ContractEventSubscriber` instance.

**Properties**:

  * `RequestHeaders` — a dictionary of specific headers.

**Events**:

  * `OnOpenHandler` — fires when a connection to a node opens.
  * `OnErrorHandler` — fires when a connection fails.
  * `OnCloseHandler` — fires when a connection closes.

### Public methods

  * [`Subscribe`](#subscribe) — subscribes to an event with the given parameters.
  * [`ListenForEvents`](#listenforevents) — opens a connection to a node and starts listening to events.
  * [`Unsubscribe`](#unsubscribe) — unsubscribes from events by a subscription ID.
  * [`StopListen`](#stoplisten) — closes a connection to a node.

### Code example

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
		
		public override void ActivateUseCase()
		{
			base.ActivateUseCase();
			

			var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("https://");
			_eth = ankrSDK.Eth;

			_eventSubscriber = ankrSDK.CreateSubscriber("wss://");
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

		public override void DeActivateUseCase()
		{
			base.DeActivateUseCase();
			_eventSubscriber.StopListen();
		}
	}
}
```

---

## `Constructor`

### Declaration

> `ContractEventSubscriber(string wsUrl)`

**Parameters**:

  * `wsUrl` (string) — an RPC endpoint for the WebSockets connection.

---

## `Subscribe`

### Declaration

> `UniTask<IContractEventSubscription> Subscribe<TEventType>(EventFilterData evFilter, string contractAddress, Action<TEventType> handler)` OR<br/>
>
> `UniTask<IContractEventSubscription> Subscribe<TEventType>(EventFilterRequest<TEventType> evFilter, string contractAddress, Action<TEventType> handler)`

**Parameters**:

  * `evFilter` (data object) — an object containing request parameters.
  * `contractAddress` (string) — an address of the contract that emits events.
  * `handler` — an action that handles received events.

### Returns

  * `IContractEventSubscription` — a subscription object.

Subscribes to events with specific request parameters. Use it only to subscribe for events emitted after a subscription start, the method doesn’t return past events.

To find out more info on events and subscriptions, have a look at [Events and subscriptions](/gaming/extra/events-and-subscriptions/).

### Code example

```c plus
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

var subscription = await _eventSubscriber.Subscribe(
	filtersRequest,
	"0x...", 
	contractEvent => Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}")
);
```

The full code example lives [here](/gaming/unity-sdk/reference/contract-event-subscriber/#code-example).

---

## `ListenForEvents`

### Declaration

> `UniTask ListenForEvents()`

Connects to a given endpoint and starts listening for events.

---

## `Unsubscribe`

### Declaration

`UniTask Unsubscribe(string subscriptionId)`

**Parameters**:

  * `subscriptionId` — an identifier of a subscription.

Unsubscribes from the events with a given identifier.

### Code example

```c plus
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

var subscription = await _eventSubscriber.Subscribe(
	filtersRequest,
	"0x...", 
	contractEvent => Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}")
);

await _eventSubscriber.Unsubscribe(subscription.SubscriptionId);
```

---

## `StopListen`

### Declaration

> `void StopListen()`

Closes the WebSockets connection, unsubscribes from all subscriptions.