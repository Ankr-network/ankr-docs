---
title: 04 Mint Wearables NFT
id: unreal-mint-nft
---

# 04 Mint wearables NFT

The following methods can be used to mint new characters and wearable NFTs. 

:::tip

All write method calls such as minting a character or wearable incur gas fees to cover smart contract operations. Tickets are issued for these and approval needed via MetaMask.

All read data method calls such as retrieving a balance do NOT incur gas fees.

:::

## Mint character

`MintCharacter` is used to send a request to mint a new character on the blockchain.

The following body is sent to POST http://45.77.189.28:5000/send/transaction

```json
{ 'device_id', 'contract_address', 'abi_hash', 'method', 'args': ["0xto"] }
```
The response is a 'ticket'.

The session saved during `Init` will be used to open MetaMask. MetaMask will show a popup to sign or confirm the transaction for that ticket.

```c++
void UWearableNFTExample::MintCharacter(FString abi_hash, FString to, FAnkrDelegate Result)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			FString data = Response->GetContentAsString();
			
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				FString ticket = JsonObject->GetStringField("ticket");
				data = ticket;
				
			}
			lastMethod = "MintCharacter";
			Result.ExecuteIfBound(data);
		});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, to]()
		{
			FString safeMintMethodName = "safeMint";

			FString url = baseUrl + "send/transaction";
			Request->SetURL(url);
			Request->SetVerb("POST");
			Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
			Request->SetHeader("Content-Type", TEXT("application/json"));
			Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + safeMintMethodName + "\", \"args\": [\"" + to + "\"]}");
			Request->ProcessRequest();

#if PLATFORM_ANDROID
			FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
		});
}
```

## Mint items

`MintItems` is used to send a request to mint new items on the blockchain. 

The following body is sent to POST http://45.77.189.28:5000/send/transaction

```json
{ 'device_id', 'contract_address', 'abi_hash', 'method', 'args': ["0xpubAddres", ["0xtokAddres", "0xtokAddres", "0xtokAddres", "0xtokAddres", "0xtokAddres", "0xtokAddres"],[1, 2, 3, 4, 5, 6], []] }
```
The response is a 'ticket'.

The session saved during `Init` will be used to open MetaMask. Metamask will show a popup to sign or confirm the transaction for that ticket.

```c++
void UWearableNFTExample::MintItems(FString abi_hash, FString to, FAnkrDelegate Result)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			FString data = Response->GetContentAsString();

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				FString ticket = JsonObject->GetStringField("ticket");
				data = ticket;

			}
			lastMethod = "MintItems";
			Result.ExecuteIfBound(data);
		});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, to]()
		{
			FString mintBatchMethodName = "mintBatch";

			FString json = "[\"" + to + "\", [\"" + BlueHatAddress + "\", \"" + RedHatAddress + "\", \"" + BlueShoesAddress + "\", \"" + WhiteShoesAddress + "\", \"" + RedGlassesAddress + "\", \"" + WhiteGlassesAddress + "\"], [1, 2, 3, 4, 5, 6], \"0x\"]";
			json = json.Replace(TEXT(" "), TEXT(""));

			FString url = baseUrl + "send/transaction";
			Request->SetURL(url);
			Request->SetVerb("POST");
			Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
			Request->SetHeader("Content-Type", TEXT("application/json"));
			Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameItemContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + mintBatchMethodName + "\", \"args\": " + json + "}");
			Request->ProcessRequest();

#if PLATFORM_ANDROID
			FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
		});
}
```

## Game item set approval

`GameItemSetApproval` is used to confirm an update of a game item.

The following body is sent to POST http://45.77.189.28:5000/send/transaction

```json
{ 'device_id', 'contract_address', 'abi_hash', 'method', 'args': ["0xoperatorContractAddress", true] }
```

The response is a `ticket`. 

The session saved during `Init` will be used to open MetaMask. Metamask will show a popup to sign or confirm the transaction for that ticket.

```c++
void UWearableNFTExample::GameItemSetApproval(FString abi_hash, FString callOperator, bool approved, FAnkrDelegate Result)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			FString data = Response->GetContentAsString();

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				bool result = JsonObject->GetBoolField("result");
				if (result)
				{
					FString ticket = JsonObject->GetStringField("ticket");
					data = ticket;
				}
			}
			lastMethod = "GameItemSetApproval";
			Result.ExecuteIfBound(data);
		});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, callOperator, approved]()
		{
			FString setApprovalForAllMethodName = "setApprovalForAll";

			FString url = baseUrl + "send/transaction";
			Request->SetURL(url);
			Request->SetVerb("POST");
			Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
			Request->SetHeader("Content-Type", TEXT("application/json"));
			FString body = "{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameItemContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + setApprovalForAllMethodName + "\", \"args\": [\"" + GameCharacterContractAddress + "\", true ]}";
			
			Request->SetContentAsString(body);
			Request->ProcessRequest();

#if PLATFORM_ANDROID
			FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
		});
}
```

## Get character balance

`GetCharacterBalance` is used to check whether a user holds any NFTs. 

The following body is sent to POST http://45.77.189.28:5000/call/method 

```json
{ 'device_id', 'contract_address', 'abi_hash', 'method', 'args': ["0xpubAddres"] }
``` 

The response is a 'data' object detailing the number of tokens that the user holds.

```c++
void UWearableNFTExample::GetCharacterBalance(FString abi_hash, FString address, FAnkrDelegate Result)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			FString data = Response->GetContentAsString();

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				data = JsonObject->GetStringField("data");
			}
			lastMethod = "GetCharacterBalance";
			Result.ExecuteIfBound(data);
		});

	FString balanceOfMethodName = "balanceOf";

	FString url = baseUrl + "call/method";
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
	Request->SetHeader("Content-Type", TEXT("application/json"));
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + balanceOfMethodName + "\", \"args\": [\"" + address + "\"]}");
	Request->ProcessRequest();
}
```

## Get character token Id

`GetCharacterTokenId` retrieves the unique identifier for a specific Character Token. 

The following body is sent to POST http://45.77.189.28:5000/result

```json
{ 'device_id', 'contract_address', 'abi_hash', 'method', 'args': ["0xpubAddres", "index"] }
```

The response is a 'data' object containing the id of the character.

```c++
void UWearableNFTExample::GetCharacterTokenId(FString abi_hash, int tokenBalance, FString owner, FString index, FAnkrDelegate Result)
{
	if (tokenBalance <= 0)
	{
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GetCharacterTokenId - You don't own any of these tokens - tokenBalance: %d"), tokenBalance);
		return;
	}

	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			FString data = Response->GetContentAsString();

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				data = JsonObject->GetStringField("data");
			}
			lastMethod = "GetCharacterTokenId";
			Result.ExecuteIfBound(data);
		});

	FString tokenOfOwnerByIndexMethodName = "tokenOfOwnerByIndex";

	FString url = baseUrl + "call/method";
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
	Request->SetHeader("Content-Type", TEXT("application/json"));
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + tokenOfOwnerByIndexMethodName + "\", \"args\": [\"" + owner + "\", \"" + index + "\"]}");
	Request->ProcessRequest();
}
```

## Change hat

`ChangeHat` sends a request to alter the hat wearable to red (if the hat is currently blue) or blue (if the hat is currently red).

The following body is sent to POST http://45.77.189.28:5000/send/transaction

```json
{ 'device_id', 'contract_address', 'abi_hash', 'method', 'args': ["characterId", "tokenAddress"] }
```
The session saved during `Init` will be used to open MetaMask. Metamask will show a popup to sign or confirm the transaction for that ticket.

```c++
void UWearableNFTExample::ChangeHat(FString abi_hash, int characterId, bool hasHat, FString hatAddress, FAnkrDelegate Result)
{
	if (!hasHat || characterId == -1)
	{
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - ChangeHat - CharacterID or HatID is null"));
		return;
	}

	http = &FHttpModule::Get();
	
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			FString ticket = Response->GetContentAsString();

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				ticket = JsonObject->GetStringField("ticket");
			}
			lastMethod = "ChangeHat";
			if (hat.Equals(BlueHatAddress))
			{
				lastMethod = "ChangeHatBlue";
			}
			else if (hat.Equals(RedHatAddress))
			{
				lastMethod = "ChangeHatRed";
			}
			Result.ExecuteIfBound(ticket);
		});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, characterId, hasHat, hatAddress]()
		{
			hat = hatAddress;
			FString changeHatMethodName = "changeHat";

			FString url = baseUrl + "send/transaction";
			Request->SetURL(url);
			Request->SetVerb("POST");
			Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
			Request->SetHeader("Content-Type", TEXT("application/json"));
			FString body = "{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + changeHatMethodName + "\", \"args\": [\"" + FString::FromInt(characterId) + "\", \"" + BlueHatAddress + "\"]}";
			
			Request->SetContentAsString(body);
			Request->ProcessRequest();

#if PLATFORM_ANDROID
			FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
		});
}
```

## Get hat

`GetHat` is used to retrieve the token address for a hat NFT.

The following body is sent to POST http://45.77.189.28:5000/call/method

```json
{ 'device_id', 'contract_address', 'abi_hash', 'method', 'args': ["characterId"] }
```

The response is a 'data' object containing a string for the token address that the player has.

```c++
void UWearableNFTExample::GetHat(FString abi_hash, int characterId, FAnkrDelegate Result)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			FString data = Response->GetContentAsString();

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				data = JsonObject->GetStringField("data");
			}
			lastMethod = "GetHat";
			Result.ExecuteIfBound(data);
		});

	FString getHatMethodName = "getHat";

	FString url = baseUrl + "call/method";

	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
	Request->SetHeader("Content-Type", TEXT("application/json"));
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + getHatMethodName + "\", \"args\": [\"" + FString::FromInt(characterId) + "\"]}");
	Request->ProcessRequest();
}
```

## Get ticket result

`GetTicketResult` is used to retrieve the status of a ticket and to see whether a transaction has been successful or not. 

The following body is sent to POST http://45.77.189.28:5000/result

```json
{ 'ticket' }
```

A 'data' object is returned with a 'code' number to indicate success or failure.

```c++
void UWearableNFTExample::GetTicketResult(FString ticketId, FAnkrTicketResult Result)
{
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, ticketId, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				FString data = JsonObject->GetStringField("data");
				int code = 1;
				
				if (lastMethod.Equals("ChangeHatBlue") || lastMethod.Equals("ChangeHatRed"))
				{
					bool result = JsonObject->GetBoolField("result");
					TSharedPtr<FJsonObject> object = JsonObject->GetObjectField("data");
					FString transactionHash = object->GetStringField("tx_hash");
					FString status = object->GetStringField("status");
					
					if (result && status == "success")
					{
						code = 123;
					}
				}
				Result.ExecuteIfBound(Response->GetContentAsString(), code);
			}
		});

	FString url = baseUrl + "result";
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
	Request->SetHeader("Content-Type", TEXT("application/json"));
	Request->SetContentAsString("{\"ticket\": \"" + ticketId + "\" }");
	Request->ProcessRequest();
}
```

## Get items balance

`GetItemsBalance` is used to retrieve the number of items for each item type. 

The following body is sent to POST http://45.77.189.28:5000/call/method

```json
{ 'device_id', 'contract_address', 'abi_hash', 'method', 'args': [["9 wallet address elements"], ["9 token address elements"]] }
```

The response is a 'data' object containing an array of balances for each token. The balances for each token are returned in the order in which they were sent as a request.  

```c++
void UWearableNFTExample::GetItemsBalance(FString abi_hash, FString address, FAnkrDelegate Result)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			FString data = Response->GetContentAsString();

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				data = JsonObject->GetStringField("data");
			}
			lastMethod = "GetItemsBalance";
			Result.ExecuteIfBound(data);
		});

	FString balanceOfBatchMethodName = "balanceOfBatch";

	FString body = "[ [\"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\"], [\"" + BlueHatAddress + "\", \"" + RedHatAddress + "\", \"" + WhiteHatAddress + "\", \"" + BlueShoesAddress + "\", \"" + RedShoesAddress + "\", \"" + WhiteShoesAddress + "\", \"" + BlueGlassesAddress + "\", \"" + RedGlassesAddress + "\", \"" + WhiteGlassesAddress + "\"]]";
	
	FString url = baseUrl + "call/method";

	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
	Request->SetHeader("Content-Type", TEXT("application/json"));
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameItemContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + balanceOfBatchMethodName + "\", \"args\": " + body + "}");
	Request->ProcessRequest();
}
```