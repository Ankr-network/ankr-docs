---
title: 02 Update an NFT
id: unreal-update-nft
---

Making updates to the NFT e.g. adding a red hat to a character requires signing and sending a transaction.

### Signing Transactions

Transactions are signed via a prompt from MetaMask requiring a signature.

### Sending Transactions

Any function in the contract can be called. The following are required.

* Contract Address
* ABI 
* Method
 
If you want to call any standard function on the smart contract, use the function `SendTransaction` to get all available functions via the client.

When a call is made, the back end client sends a `Ticket` via MetaMask if the call was successful.

### Checking Status of Ticket

Check status of tickets by calling `GetTicketResult`.

For example, if the game is hanging or you are still waiting.

Returns the status of the result.

Successful or unsuccessful.

### GetData Function

Use `GetData` function to call non standard functions.

	```js
	GetData(FString contract, FString abi, FString method, FString args, FMirageDelegate Result)
	{
	```

Calls are made using the following general format:

	```js
	FString url = baseUrl + "call/method";
		Request->SetURL(url);
		Request->SetVerb("POST");
		Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
		Request->SetHeader("Content-Type", TEXT("application/json"));
	```

### SendABI Function

If you are using non-standard functions you must use the `SendABI` function.

First, get the ABI from the smart contract, then send it. 

	```js
	SendABI(FString abi, FMirageDelegate Result)
	```

The Call is as follows: 

	```js
	FString url = baseUrl + "SendABI";

	```

### SignMessage Function

This can be used to sign any data message e.g. minting.
MetaMask requests a signature, then returns a ticket.

	```js
	SignMessage(FString message, FMirageDelegate Result)
	```

A `ticketid` is returned. 

The Call is as follows:

	```js
	FString url = baseUrl + "sign/message";
	```

### GetSignature Function

Send the `ticketid` returned in the previous function to get a signature.

	```js
	GetSignature(FString ticket, FMirageDelegate Result)
	```

The following object is returned:

	```js
	{
		TSharedPtr<FJsonObject> data = JsonObject->GetObjectField("data");
		UE_LOG(LogTemp, Warning, TEXT("signature: %s"), *data->GetStringField("signature"));
		Result.ExecuteIfBound(data->GetStringField("signature"));
	}
	```
The Call is as follows:

	```js
	FString url = baseUrl + "result";
		Request->SetURL(url);
		Request->SetVerb("POST");
		Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
		Request->SetHeader("Content-Type", TEXT("application/json"));
	```

### VerifySignature Function

This function compares the `SignMessage` to the `Signature` from the ticket. 

	```js
	VerifyMessage(FString message, FString signature, FMirageDelegate Result)
	```

The Call is as follows:

	```js
	FString url = baseUrl + "verify/message";
	```

