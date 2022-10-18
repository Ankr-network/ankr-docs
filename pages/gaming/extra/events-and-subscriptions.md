import { Callout } from "components";

# Events and subscriptions

One of the most efficient type of communication with the smart contract is events. 

>Solidity events give an abstraction on top of the EVM’s logging functionality. Applications can subscribe and listen to these events through the RPC interface of an Ethereum client.

We will go through preparing events to work with UnitySDK, getting past events and subscribe to event in realtime.

To prepare event for work with Unity SDK we need to create DTO with special Attributes.

## Event nature

Let's look at simple event Transfer from ERC20 standart.

```
event Transfer(address indexed from, address indexed to, uint256 value);
```

It has a name Transfer and 3 params from with type address, to with the same type and value with type value. Also, I would like to mention that from and to have identifier indexed. It means that we can make a search by that fields.

Smart contracts can emit events inside methods. Eventually Event it’s like a record in the table of database. And like in the database indexed fields means that we can search by them. EVM has a limitation of indexed fields, only 3 fields can be indexed, although Event have no limitation of the no indexed fields.

```
emit Transfer(from, to, amount);
```

Events have not indexes like database records, but they linked with the block during that they were emit. Inside one block can be many Events.

When we've understood what the Events are, let's move on to how we can use that.

To prepare DTO for request events, we need the following:

```
[Event("Transfer")]
public class TransferEventDTO : EventDTOBase
{
	[Parameter("address", "from", 1, true)]
	public string From { get; set; }

	[Parameter("address", "to", 2, true)]
	public string To { get; set; }

	[Parameter("uint256", "value", 3, false)]
	public BigInteger Value { get; set; }
}
```

1. Make class extended from EventDTOBase with the same fields as in Event. Naming of class fields have not any limitations, but we recommend giving they same names like props of Event in contract.

2. Add attribute Event to class with the name of Event like in the contract.

3. Add attribute Parameter for every field of the class and pass to it type of Event prop, name of Event prop, order of prop in event and is that prop indexed or not as boolean. Please don’t ignore none of that arguments to better result.

```
public ParameterAttribute(string type, string name, int order, bool indexed = false)
```

<Callout type="warning" emoji="❗">
Pay attention to use compatible type of fields to type of Event props.
</Callout>

| Type in C#   | Type in Solidity               |
|--------------|--------------------------------|
| `string`     | `address`                      |
| `BigInteger` | `uint8` to `uint256`           |
| `byte[]`     | `bytes`, `bytes1` to `bytes32` |
| `bool`       | `bool`                         |
| `string`     | `string`                       |

## Events request

Before we start requesting something, I would like to clarify how the requests to Ethereum node look like. Based on what I was saying before, we can conclude that we can make next request limitation:

* `fromBlock` — a block to start the search from (it can be a specific number as well as keywords like latest, earliest, pending).
* `toBlock` — a block to finish search at (the same value as for `fromBlock`).
* `topic1` — values that relevant first indexing props of event.
* `topic2` — values that relevant second indexing props of event.
* `topic3` — values that relevant second indexing props of event.

Return to Event `Transfer`. If we want to find all events from the network start until last block with props to equal our address (all transfers that we got from the start of network) then we need to create the following object:

```
var filters = new EventFilterData
{
	fromBlock = BlockParameter.CreateEarliest(),
	toBlock = BlockParameter.CreateLatest(),
	filterTopic2 = new[] { EthHandler.DefaultAccount }
};
```

Why `filterTopic2`? Because prop `to` has the second position in Event props.

If you don’t want to think about the props position, you can use the `EventFilterRequest` class.

```
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.SetFromBlock(BlockParameter.CreateEarliest());
filtersRequest.SetToBlock(BlockParameter.CreateLatest());
// topic name is Event prop name
filtersRequest.AddTopic("To", EthHandler.DefaultAccount);
// topic name is event DTO field name
filtersRequest.AddTopic("to", "0x...");
```

That code snippet has the same meaning as the last one. To add a topic, you can use Event prop name as event DTO field name.

You can add unlimited values for one topic and the request will use those values as separated with `OR` operator.

In SQL terms, our last request looks the following way:

```sql
SELECT *
FROM Transfer
WHERE
  fromBlock = 'earliest' &
  toBlock = 'latest' &
  'to' IN (EthHandler.DefaultAccount, "0x...")
```

Now, we are clear with the request, so let’s move to sending it.

To get past events, you need to instantiate class `Contract` and call the `GetEvents` method.

```
var ankrSDK = AnkrSDKWrapper.GetSDKInstance("http://...");
_erc20Contract = ankrSDK.GetContract("0x..", "{...}");
...
var events = await _erc20Contract.GetEvents<TransferEventDTO>(filtersRequest);
```

To full example see on [GitHub](https://github.com/Ankr-network/game-unity-sdk/blob/e5512440b1b5f10baec3299a8e0611ce28c2b100/Assets/AnkrSDK/Examples/Scripts/ERC20Example/ERC20Example.cs#L88)

## Subscribe to events

In addition to a direct request for past events, we can subscribe to get them right after emit.

<Callout type="warning" emoji="❗">
Subscribing works via WebSockets only. Request a relevant endpoint from your provider or activate a WebSocket connection on your Ethereum node.
</Callout>

First, instantiate a subscriber:

```
var ankrSDK = AnkrSDKWrapper.GetSDKInstance("https://...");
var _eventSubscriber = ankrSDK.CreateSubscriber("wss://...");
_eventSubscriber.ListenForEvents().Forget();
```

Then create a seamless request (the same as for the past events) without setting `fromBlock` and `toBlock` because you will get all events from the block (from starting a subscription to unsubscribing from it).

```
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.AddTopic("To", EthHandler.DefaultAccount);
```

And make a subscription:

```
var _subscription = await _eventSubscriber.Subscribe(
  filters,
  ERC20ContractInformation.ContractAddress, 
  (TransferEventDTO t) => ReceiveEvent(t)
);
```

Full example see on [GitHub](https://github.com/Ankr-network/game-unity-sdk/blob/master/Assets/AnkrSDK/Examples/Scripts/EventListenerExample/EventListenerExample.cs)
