---
title: ContractEventSubscriber
id: contract-event-subscriber
---

# ContractEventSubscriber

## Description

A class contains methods for making real-time subscriptions for contracts' events.

## Constructors

| Component                                                                                  | Description                               |
|--------------------------------------------------------------------------------------------|-------------------------------------------|
| [ContractEventSubscriber](/game/unity/api-reference/contract-event-subscriber/constructor) | Constructs a new ContractEventSubscriber. |

## Parameters

| Parameter        | Description                       |
|------------------|-----------------------------------|
| `RequestHeaders` | A dictionary of specific headers. |

## Events

| Event            | Description                              |
|------------------|------------------------------------------|
| `OnOpenHandler`  | Fires when a connection to a node opens  |
| `OnErrorHandler` | Fires when a connection fails.           |
| `OnCloseHandler` | Fires when a connection closes.          |

## Public methods

| Method                                                                                   | Description                                                   |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [ListenForEvents](/game/unity/api-reference/contract-event-subscriber/listen-for-events) | Opens a connection to a node and starts listening for events. |
| [Subscribe](/game/unity/api-reference/contract-event-subscriber/subscribe)               | Subscribes to an event with the given parameters.             |
| [Unsubscribe](/game/unity/api-reference/contract-event-subscriber/unsubscribe)           | Unsubscribes from events by a subscription ID.                |
| [StopListen](/game/unity/api-reference/contract-event-subscriber/stop-listen)            | Closes a connection to a node.                                |

## Code example

```C++
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
