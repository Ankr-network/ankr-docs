---
title: Subscribe
id: subscribe
---

# Subscribe

## Declaration

UniTask<IContractEventSubscription> Subscribe<TEventType>(EventFilterData evFilter, string contractAddress, Action<TEventType> handler)

or

UniTask<IContractEventSubscription> Subscribe<TEventType>(EventFilterRequest<TEventType> evFilter, string contractAddress, Action<TEventType> handler)

## Parameters

| `evFilter`        | An object containing request parameters.      |
| `contractAddress` | An address of the contract that emits events. |
| `handler`         | Action that handles received events.          |

## Returns

| `IContractEventSubscription` | A subscription object. |

## Description

Subscribes to events with specific request parameters. Use it only to subscribe for events emitted after a subscription start, the method doesn’t return past events.

To find out more info on events and subscriptions, have a look at [Events and subscriptions](/game/unity/api-reference/ankr-sdk-wrapper/events-and-subscriptions).

## Code example

```
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

var subscription = await _eventSubscriber.Subscribe(
	filtersRequest,
	"0x...", 
	contractEvent => Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}")
);
```

The full code example lives [here](/game/unity/api-reference/contract-event-subscriber/contract-event-subscriber#code-example).