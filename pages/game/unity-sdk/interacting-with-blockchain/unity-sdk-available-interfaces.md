import Callout from "nextra-theme-docs/callout";

# Available interfaces

## IAnkrSDK

### `IContract GetContract(string contractAddress, string contractABI);`
Returns newly created Contract wrapper, using the provided address and ABI.

<Callout>
You have to provide everything listed under your contract definition's `abi` section.
<img src="/docs/interfaces-note.png" alt="abi section" class="responsive-pic" width="190" />
</Callout>

### `IEthHandler Eth { get; }`
Gets the IEthHandler instance created by the AnkrSDK instance.


### `INetworkHelper NetworkHelper { get; }`
Get the INetworkHelper instance created by the AnkrSDK instance.


### `IContractEventSubscriber CreateSubscriber(string wsUrl);`
Creates a subscriber for your contract events.

#### Parameters 

`wsUrl` — WebSocket URL which we will connect to listen to contract events. <br /><br />

#### Workflow

The usual flow is:

1. Initialise WalletConnect Session using the WalletConnect.cs script. 
   1. Attach it on your GameObject or use a Prefab. 
   2. Wait until WalletConnect establishes a connection to the blockchain bridge.
2. Use the static method below to create a new AnkrSDK Instance:
```AnkrSDKFactory.GetAnkrSDKInstance(string ProviderURL);```
3. Create and cache Contract by using IAnkrSDK initialized instance and its method below:
```IContract GetContract(string contractAddress, string contractABI);```
4. Use a contract for your needs.

#### Example
Here is an example that includes initializing AnkrSDK, setting up a contract, and caching the connected account:

```
private IContract _gameItemContract;
private string _activeSessionAccount;

public void Init()
{
	var sdkWrapper = AnkrSDKFactory.GetAnkrSDKInstance(WearableNFTContractInformation.ProviderURL);

	_gameItemContract = sdkWrapper.GetContract(WearableNFTContractInformation.GameItemContractAddress,
		WearableNFTContractInformation.GameItemABI);
	
	ActivateAsync(sdkWrapper).Forget();
}
		
private async UniTaskVoid ActivateAsync(IAnkrSDK ankrSDK)
{
	var result = await ankrSDK.Eth.GetDefaultAccount();
	_activeSessionAccount = result;
}
```
 

## IEthHandler

### `Task<string> GetDefaultAccount();`
Returns the address of the account currently logged in via the third-party wallet.


### `Task<TransactionReceipt> GetTransactionReceipt(string transactionHash);`
Returns a `TransactionReceipt` for the given `transactionHash`.


### `Task<Transaction> GetTransaction(string transactionReceipt);`
Returns a `Transaction` for the given `transactionReceipt`.


### `Task<HexBigInteger> EstimateGas(TransactionInput transactionInput);`
Returns the estimated gas cost from the given `transactionInput`.


### `Task<HexBigInteger> EstimateGas(string from, string to, string data = null, string value = null, string gas = null, string gasPrice = null, string nonce = null);`
Returns the estimated gas cost from the given parameters.


### `Task<string> Sign(string messageToSign, string address);`
Requests the `address` to sign the message passed in `messageToSign`.


### `Task<string> SendTransaction(string from, string to, string data = null, string value = null,  string gas = null, string gasPrice = null, string nonce = null);`
Sends a transaction from the given parameters. This function is used in the Contract script in both `CallMethod` and `Web3SendMethod`.


## IContract

### `Task<string> CallMethod(string methodName, object[] arguments = null, string gas = null, string gasPrice = null, string nonce = null);`
Sends a transaction using your currently active `WalletConnect` session. Creates a transaction input with provided parameters. You can specify the maximum of `gas` that can be used for this transaction.


### `Task Web3SendMethod(string methodName, object[] arguments, ITransactionEventHandler evController = null, string gas = null, string gasPrice = null, string nonce = null);`
Same as the previous function above but with the added benefit of being able to use a `TransactionEventHandler` to have access via these events to feedback during the transaction process.


### `Task<List<EventLog<TEvDto>>> GetEvents<TEvDto>(EventFilterData evFilter = null) where TEvDto : IEventDTO, new();`
Gets all events from your contract that match the specified filter requirements.

#### Parameters
`evFilter` — create an event filter to be able to specify the topics and required blocks for events. You can specify `FromBlock` or `ToBlock`. Topics are provided manually; you can specify up to 3 topics.


### `Task<List<EventLog<TEvDto>>> GetEvents<TEvDto>(EventFilterRequest<TEvDto> evFilter = null) where TEvDto : IEventDTO, new();`
Gets all events from your contract that match the specified filter requirements.

`evFilter` — create an event filter to be able to specify the topics and required blocks for events. You can specify `FromBlock` or `ToBlock`. Topics are extracted from `EventDTO` — data class with `Event` and `Parameter` attributes.

### `Task<TReturnType> GetData<TFieldData, TReturnType>(TFieldData requestData = null) where TFieldData : FunctionMessage, new();`
Gets data from your contract (functions labeled as `View`).

#### Example

Here is an example of getting the balance :

```
public async void GetBalance()
{
	var balanceOfMessage = new BalanceOfMessage
	{
		Owner = WalletConnect.ActiveSession.Accounts[0]
	};
	var balance = await _erc721Contract.GetData<BalanceOfMessage, BigInteger>(balanceOfMessage);
	Debug.Log($"Balance: {balance}");
}
``` 


### `UniTask<HexBigInteger> EstimateGas(string methodName, object[] arguments = null, string gas = null, string gasPrice = null, string nonce = null);`
Returns the estimated gas cost for calling a smart contract method with the given parameters.
 

## IContractEventSubscriber
Contract event subscription provides a list of events that you can listen to:

1. `event Action OnOpenHandler;` — event occuring On Socket Open.
2. `event Action<string> OnErrorHandler;` — event occuring if there was an error with the socket connection. After this event the socket is closed.
3. `event Action<WebSocketCloseCode> OnCloseHandler;` — event occuring if the socket is closed.

### `UniTask ListenForEvents();`
Establishes a socket connection to `wsUrl` provided during the event subscriber creation.

### `void StopListen();`
Closes the connection and clears all the subscriptions.

### `UniTask<IContractEventSubscription> Subscribe<TEventType>(EventFilterData evFilter, string contractAddress, Action<TEventType> handler) where TEventType : IEventDTO, new();`
Subscribes to a new event. 

#### Parameters 
`EventFilterData` — topics specified by you.
<Callout>
This is an async operation, as it is required to receive a response about the subscription.
</Callout>

### `UniTask<IContractEventSubscription> Subscribe<TEventType>(EventFilterRequest<TEventType> evFilter, string contractAddress, Action<TEventType> handler) where TEventType : IEventDTO, new();`
Subscribes to a new event. 

#### Parameters 
`EventFilterRequest` — automatically assembles topic from EventDTO.

<Callout>
This is an async operation, as it is required to receive a response about the subscription.
</Callout>

### `UniTask Unsubscribe(string subscriptionId);`
Sends a request to unsubscribe from an event by `subscriptionId`.

## INetworkHelper

### `Task AddAndSwitchNetwork(EthereumNetwork network);`
Calls MetaMask and:

1. Adds the `network` to the available networks on MetaMask if it is not there yet.
2. Asks the user to click to switch to the `network`.