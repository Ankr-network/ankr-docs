---
title: GetEvents
id: get-events
---

# GetEvents

## Declaration

Task<List<EventLog<TEvDto>>> GetEvents<TEvDto>(EventFilterRequest<TEvDto> evFilter)

Task<List<EventLog<TEvDto>>> GetEvents<TEvDto>(EventFilterData evFilter)

## Parameters

| `evFilter` | Object that contains an event request. |

## Returns

| `List<EventLog<TEvDto>>` | Returns all the events complying with the request. |

## Description

Gets a contract's past events.

Find out more on events and events requests in [Events and subscriptions](/game/unity/api-reference/ankr-sdk-wrapper/events-and-subscriptions#event-nature).

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Data;
using AnkrSDK.DTO;
using AnkrSDK.Examples.ERC20Example;
using AnkrSDK.Provider;
using AnkrSDK.UseCases;
using Cysharp.Threading.Tasks;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

public class ContractExample : MonoBehaviour
{
	private IContract _contract;
	private IEthHandler _eth;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_contract = ankrSDK.GetContract("0x...","...");
		_eth = ankrSDK.Eth;
	}

	public async UniTaskVoid GetEvents()
	{
		var filtersRequest = new EventFilterRequest<TransferEventDTO>
		{
			FromBlock = BlockParameter.CreateEarliest(),
			ToBlock = BlockParameter.CreateLatest()
		};
		filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

		var events = await _contract.GetEvents(filtersRequest);

		foreach (var ev in events)
		{
			Debug.Log(ev.Event.Value);
		}
	}
}
```

