---
title: Unsubscribe
id: unsubscribe
---

# Unsubscribe

## Declaration

UniTask Unsubscribe(string subscriptionId)

## Parameters

| `subscriptionId` | An identifier of a subscription. |

## Description

Unsubscribes from events with a given identifier.

## Code example

```C++
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

var subscription = await _eventSubscriber.Subscribe(
	filtersRequest,
	"0x...", 
	contractEvent => Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}")
);

await _eventSubscriber.Unsubscribe(subscription.SubscriptionId);
```
