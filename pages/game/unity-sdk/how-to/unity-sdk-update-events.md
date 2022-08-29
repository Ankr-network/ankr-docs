import Callout from "nextra-theme-docs/callout";

# How to subscribe to events in Unity SDK

This section walks you through how to subscribe and listen to events as a real-time stream associated with your smart contract. Events connect your smart contract with your user interface so it can be processed.

You will learn the following:

1. Understanding Events
2. How to prepare a DTO for request events
2. How to request past events
3. How to subscribe to new events

When events in a contract are called, the arguments are stored in the transaction's log. These logs are associated with the address of the contract. They remain associated with the address of the contract on the blockchain for as long as a block is accessible. 

> Solidity events give an abstraction on top of the EVM’s logging functionality. 
> Applications can subscribe and listen to these events through the RPC interface of an Ethereum client.
> - [Solidity Docs](https://docs.soliditylang.org/en/v0.8.13/contracts.html#events)


## Understanding `Events`

Before we proceed to the steps, let's understand what `Events` are.

### The structure of an `Event`

Let's look at a simple event `Transfer` from the ERC-20 standard.

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```
The name of the event is `Transfer` and there are three parameters separated by commas:

`address indexed from` - This is the originating address
`address indexed to` - This is the destination address
`uint256 value` - This is the amount of a positive integer of 256 bits in size.

The fact that the addresses are indexed means that they are searchable. 

### What is an Event?

Smart contracts emit `Events` inside methods. An `Event` can be likened to a record in a database. This record can be indexed and is searchable. `Events` are also linked to the block during which they were emitted.

*Indexing*

The EVM restricts the number of indexed fields to three, however the `Event` itself can have any number of fields. 

```solidity
emit Transfer(from, to, amount);
```

So now we understand what `Events` are.

## How to prepare a DTO for request events

1. First we need to create a class extended from `EventDTOBase`. Add the same fields as for the `Event` itself. 

   <Callout>
   Naming Class fields: 

   We recommend naming your class fields with the same names as the props of the `Event` in the contract
   </Callout>
2. Add the attribute `Event` to the class with the same name as the `Event` in the contract e.g. `TransferEventDTO`.
3. Add the attribute `Parameter` for every field in the class and pass the types of `Event` props e.g.
specify the type and name of the `Even`t prop, the order of the prop in the `event` and whether the prop is indexed or not as a boolean. 

   ```
   public ParameterAttribute(string type, string name, int order, bool indexed = false)
   ```

   <Callout>
   Make sure you use compatible field types for types of Event props.
   </Callout>


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


Pay attention to the use of compatible field types for the type of `Event` props.

|Type in C#  |  Type in Solidity |
|------------|-------------------|
|string      |   address         |
|BigInteger  | uint8 to uint256  |
|byte[]      |bytes, bytes1 to bytes32|
|bool        |bool               |
|string      |string             |

## Understanding requests for `events`

So before we continue, let's see what requests to an Ethereum node look like and what the limitation on requests are:


* `fromBlock` - This is the block from which to start searching from (it can be a specific number as well as key words like latest, earliest, pending );

* `toBlock` - This is the block that we search up to. (The value can be the same as `fromBlock`);

* `topic1` - values that are relevant to the first indexing of event props e.g. `from address`.

* `topic2` - values that are relevant to the second indexing of event props. e.g. `to address`.

* `topic3` - values that are relevant to the third indexing of event props e.g. `value`.

<Callout>
What are Topics?

Topics are an array of values that describe what's going on in an event. 

The order is important, if you want to leave topics out use null, e.g. `[null, '0x00...']`. 

You can pass another array for each topic with options for that topic e.g. [null, ['option1', 'option2']].

All values of the array are logically connected using OR operator (example 'option1' OR 'option2' OR 'option3')
</Callout>

So if we return to our example `Event Transfer`.

Let's say we want to find all the events (or transfers) from the genesis block until the last block with the `to` address equal to our address.


This is how we create the object. 

```

var filters = new EventFilterData
{
	fromBlock = BlockParameter.CreateEarliest(),
	toBlock = BlockParameter.CreateLatest(),
	filterTopic2 = new[] { EthHandler.DefaultAccount }
};
```

Why do we use `filterTopic2`? Because the `to` address prop has second position in `Event` props and we want to filter by the `to` address. 

If you don’t want to think about the position of props, you can use the class `EventFilterRequest` to get the same results. 

```
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.SetFromBlock(BlockParameter.CreateEarliest());
filtersRequest.SetToBlock(BlockParameter.CreateLatest());
// topic name is Event prop name
filtersRequest.AddTopic("To", EthHandler.DefaultAccount);
// topic name is event DTO field name
filtersRequest.AddTopic("to", "0x...");
```

To add a topic, use an `Event` prop name that is the same as the `Event` DTO field name.

You can add unlimited values for a single topic and your request will use all values separated by the OR operator.

In SQL terms our last request looks like this:

```sql
SELECT *
FROM Transfer
WHERE
  fromBlock = 'earliest' &
  toBlock = 'latest' &
  'to' IN (EthHandler.DefaultAccount, "0x...")
```

So how do we send the request?

## How to request past events

To get past events you need to instantiate class `Contract` and call method `GetEvents`

```
var ankrSDK = AnkrSDKWrapper.GetSDKInstance("http://...");
_erc20Contract = ankrSDK.GetContract("0x..", "{...}");
...
var events = await _erc20Contract.GetEvents<TransferEventDTO>(filtersRequest);
```

To see a full example see [**game-unity-sdk/ERC20Example.cs**](https://github.com/Ankr-network/game-unity-sdk/blob/e5512440b1b5f10baec3299a8e0611ce28c2b100/Assets/AnkrSDK/Examples/Scripts/ERC20Example/ERC20Example.cs#L88)

## How to subscribe to new events

As well as past events, we can also subscribe to get real-time events immediately after they emit.

<Callout>
Websockets

This requires setting up a websocket connection. If you are using Ankr RPCs, you should sign up for the [Premium Plan](https://www.ankr.com/protocol/plan/) to get a private websocket (wss) endpoint.
</Callout>

Simply, instantiate the subscription as in the following example:

```
var ankrSDK = AnkrSDKWrapper.GetSDKInstance("https://...");
var _eventSubscriber = ankrSDK.CreateSubscriber("wss://...");
_eventSubscriber.ListenForEvents().Forget();
```

You do not need to set the parameters `fromBlock` and `toBlock` because you will receive *all* events from the block until you unsubscribe.

```
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.AddTopic("To", EthHandler.DefaultAccount);
```

And make a subscription

```
var _subscription = await _eventSubscriber.Subscribe(
  filters,
  ERC20ContractInformation.ContractAddress, 
  (TransferEventDTO t) => ReceiveEvent(t)
);
```

For a full example checkout [EventListenerExample.cs](https://github.com/Ankr-network/game-unity-sdk/blob/master/Assets/AnkrSDK/Examples/Scripts/EventListenerExample/EventListenerExample.cs)