---
title: Interact with Smart Contract
id: interact-with-smart-contract
---

# Interact with smart contract

You can interact with a smart contract using these two SDK functions:

* `GetData()` — reads from the smart contract’s view functions via the public RPC. Calling view functions doesn't cost any gas.

* `CallMethod()` — writes to the contract, changing the blockchain state. Calling write function costs varying amount of gas.


## `GetData()`
Gets data from a smart contract’s view functions. `GetData()` is included in the `IContract` interface.

```
Task<TReturnType> GetData<TFieldData, TReturnType>(TFieldData requestData = null)
			where TFieldData : FunctionMessage, new();
```

### Example

Getting the balance of the `owner`'s address via `BalanceOf()` from an ERC721 `contract`.
Here `GetData()` function is combined with a `FunctionMessage` that was created specifically for this function.

```
public static UniTask<BigInteger> BalanceOf(this IContract contract, string owner)
{
	var balanceOfMessage = new BalanceOfMessage
	{
		Owner = owner
	};

	return contract.GetData<BalanceOfMessage, BigInteger>(balanceOfMessage).AsUniTask();
}
```

```
[Function("balanceOf", "uint256")]
public class BalanceOfMessage : FunctionMessage
{
	[Parameter("address", "_owner", 1)]
	public string Owner { get; set; }
}
```

## `CallMethod()`
Writes to a contract. Writing actions costs gas. `CallMethod()` is included in the `IContract` interface.

```
public async Task<string> CallMethod(string methodName, object[] arguments = null, string gas = null,
			string gasPrice = null, string nonce = null)
```

The arguments array that is passed as an argument to the function must correspond to the arguments passed to the smart contract function you effectively want to call.

### Example 

Transferring a token `from` an address `to` an address via `SafeTransferFrom()` from an ERC721 `contract`.

```
public static UniTask<string> SafeTransferFrom(this IContract contract, string from, string to,
	BigInteger tokenId, byte data)
{
	const string safeTransferFromMethodName = "safeTransferFrom";

	return contract.CallMethod(safeTransferFromMethodName, new object[]
	{
		from,
		to,
		tokenId,
		data
	}).AsUniTask();
}
```