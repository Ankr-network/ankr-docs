---
title: Mint NFTs
id: unreal-mint-nft
---

# Mint NFTs

This section lists the functions used to mint NFTs (new characters or wearable items). 

:::tip Write vs. Read methods

* *Write* requests change the current state of the blockchain (example: minting NFTs) and thus incur gas fees to cover smart contract operations. Those requests issue tickets you need to approve or reject in MetaMask.

* *Read* requests don't change but only show the current state of the blockchain, and don't incur any gas fees. Those requests don't issue tickets or need approval. 

:::

## Guided tutorial

<iframe width="550" height="305" src="https://www.youtube.com/embed/EtiW3Th9Mns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## MintCharacter

`MintCharacter` — mints a character specified by the body parameters to the wallet address. The transaction issues a ticket pending your approval in MetaMask. Simply put, a successful request is going to change the current state of the blockchain, that is why it sends a ticket to your MetaMask wallet that asks you to confirm or reject the ticket's transaction.

### Body Parameters

| Parameter                     | Description                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)         | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract_address` (required) | A game character contract address.                                                    |
| `abi_hash` (required)         | An ABI indicates the number of functions in the contract (represented in hash value). |
| `to` (required)               | A wallet address of the minted character's future owner.                              |

### Response

A successful request issues a ticket to come to the MetaMask wallet of the designated owner. The ticket shows a transaction that needs validation on the owner's side — either confirmation or rejection.

### Code Example

```cpp
void UWearableNFTExample::MintCharacter(FString abi_hash, FString to, FAnkrCallCompleteDynamicDelegate Result)
{
	http = &FHttpModule::Get();

#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - MintCharacter - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

		FString data = content;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			FString ticket = JsonObject->GetStringField("ticket");
			data = ticket;
		}
			
		AnkrUtility::SetLastRequest("MintCharacter");
		Result.ExecuteIfBound(content, data, "", -1, false);
	});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, to]()
	{
		FString safeMintMethodName = "safeMint";

		FString url = AnkrUtility::GetUrl() + ENDPOINT_SEND_TRANSACTION;
		Request->SetURL(url);
		Request->SetVerb("POST");
		Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
		Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + safeMintMethodName + "\", \"args\": [\"" + to + "\"]}");
		Request->ProcessRequest();

#if PLATFORM_ANDROID || PLATFORM_IOS
			FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
	});
}
```

---

## MintItems

`MintItems` — mints items in a batch to the wallet address. The transaction issues a ticket pending your approval in MetaMask. Simply put, a successful request is going to change the current state of the blockchain, that is why it sends a ticket to your MetaMask wallet that asks you to confirm or reject the ticket's transaction.

### Body Parameters

| Parameter                     | Description                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)         | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract_address` (required) | A game character contract address.                                                    |
| `abi_hash` (required)         | An ABI indicates the number of functions in the contract (represented in hash value). |
| `to` (required)               | A wallet address of the minted items' future owner.                                   |

### Response

A successful request issues a ticket to come to your MetaMask wallet. The ticket shows a transaction that needs validation on your side — either confirmation or rejection.

### Code Example

```cpp
void UWearableNFTExample::MintItems(FString abi_hash, FString to, FAnkrCallCompleteDynamicDelegate Result)
{
	http = &FHttpModule::Get();

#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - MintItems - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

		FString data = content;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			FString ticket = JsonObject->GetStringField("ticket");
			data = ticket;
		}
			
		AnkrUtility::SetLastRequest("MintItems");
		Result.ExecuteIfBound(content, data, "", -1, false);
	});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, to]()
	{
		FString mintBatchMethodName = "mintBatch";

		FString args = "[\"" + to + "\", [\"" + BlueHatAddress + "\", \"" + RedHatAddress + "\", \"" + BlueShoesAddress + "\", \"" + WhiteShoesAddress + "\", \"" + RedGlassesAddress + "\", \"" + WhiteGlassesAddress + "\"], [1, 2, 3, 4, 5, 6], \"0x\"]";
		args = args.Replace(TEXT(" "), TEXT(""));

		FString url = AnkrUtility::GetUrl() + ENDPOINT_SEND_TRANSACTION;
		Request->SetURL(url);
		Request->SetVerb("POST");
		Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
		Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameItemContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + mintBatchMethodName + "\", \"args\": " + args + "}");
		Request->ProcessRequest();

#if PLATFORM_ANDROID || PLATFORM_IOS
		FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
	});
}
```

---

## GameItemSetApproval

`GameItemSetApproval` — approves the minting of items for someone else (`callOperator`). The function serves the cases when a user has no permission to mint on his own. For example, someone is using somebody else's contract, etc. In that case, a user needs approval from the contract owner. The function issues a ticket pending your approval in MetaMask.

### Body parameters

| Parameter                     | Description                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)         | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract_address` (required) | A game character contract address.                                                    |
| `abi_hash` (required)         | An ABI indicates the number of functions in the contract (represented in hash value). |
| `callOperator` (required)     | A contract address that is going to have the minted assets.                           |
| `approved` (required)         | A status showing whether you approve the transaction or not (bool).                   |

### Response

A successful request issues a ticket to come to your MetaMask wallet. The ticket shows a transaction that needs validation on your side — either confirmation or rejection.

### Code Example

```cpp
void UWearableNFTExample::GameItemSetApproval(FString abi_hash, FString callOperator, bool approved, FAnkrCallCompleteDynamicDelegate Result)
{
	http = &FHttpModule::Get();

#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GameItemSetApproval - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);
			
		FString data = content;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			bool result = JsonObject->GetBoolField("result");
			if (result)
			{
				FString ticket = JsonObject->GetStringField("ticket");
				data = ticket;
			}
		}
			
		AnkrUtility::SetLastRequest("GameItemSetApproval");
		Result.ExecuteIfBound(content, data, "", -1, false);
	});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, callOperator, approved]()
	{
		FString setApprovalForAllMethodName = "setApprovalForAll";

		FString body = "{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameItemContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + setApprovalForAllMethodName + "\", \"args\": [\"" + GameCharacterContractAddress + "\", true ]}";
			
		FString url = AnkrUtility::GetUrl() + ENDPOINT_SEND_TRANSACTION;
		Request->SetURL(url);
		Request->SetVerb("POST");
		Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
		Request->SetContentAsString(body);
		Request->ProcessRequest();

#if PLATFORM_ANDROID || PLATFORM_IOS
			FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
	});
}
```

---

## GetCharacterBalance

`GetCharacterBalance` — retrieves a user's token balance of the MetaMask wallet. The data shows the number of tokens the user holds.

### Body Parameters

| Parameter                     | Description                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)         | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract_address` (required) | A game character contract address.                                                    |
| `abi_hash` (required)         | An ABI indicates the number of functions in the contract (represented in hash value). |
| `address` (required)          | An address of the wallet you'd like to check the balance for.                         |
| `args` (required)             | A destination address (a user to send a transaction to).                              |

### Response

The response comes as a data object specifying the number of tokens belonging to the user.

### Code example

```cpp
void UWearableNFTExample::GetCharacterBalance(FString abi_hash, FString address, FAnkrCallCompleteDynamicDelegate Result)
{
	http = &FHttpModule::Get();

#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GetCharacterBalance - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);
			
		FString data = content;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			data = JsonObject->GetStringField("data");
		}
			
		Result.ExecuteIfBound(content, data, "", -1, false);
	});

	FString balanceOfMethodName = "balanceOf";

	FString url = AnkrUtility::GetUrl() + ENDPOINT_CALL_METHOD;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + balanceOfMethodName + "\", \"args\": [\"" + address + "\"]}");
	Request->ProcessRequest();
}
```

---

## GetCharacterTokenId

`GetCharacterTokenId` — retrieves a unique ID for a token specified by the body parameters. 

### Body Parameters

| Parameter                     | Description                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)         | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract_address` (required) | A game character contract address.                                                    |
| `abi_hash` (required)         | An ABI indicates the number of functions in the contract (represented in hash value). |
| `tokenBalance` (required)     | A token balance retrieved by the `GetCharacterBalance` function.                      |
| `owner` (required)            | An owner of the token.                                                                |

### Response

The response comes as a data object containing the ID of the token specified by the body parameters.

### Code example

```cpp
void UWearableNFTExample::GetCharacterTokenId(FString abi_hash, int tokenBalance, FString owner, FString index, FAnkrCallCompleteDynamicDelegate Result)
{
	if (tokenBalance <= 0)
	{
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GetCharacterTokenId - You don't own any of these tokens - tokenBalance: %d"), tokenBalance);
		return;
	}

	http = &FHttpModule::Get();

#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GetCharacterTokenId - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);
			
		FString data = content;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			data = JsonObject->GetStringField("data");
		}

		Result.ExecuteIfBound(content, data, "", -1, false);
	});

	FString tokenOfOwnerByIndexMethodName = "tokenOfOwnerByIndex";

	FString url = AnkrUtility::GetUrl() + ENDPOINT_CALL_METHOD;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + tokenOfOwnerByIndexMethodName + "\", \"args\": [\"" + owner + "\", \"" + index + "\"]}");
	Request->ProcessRequest();
}
```

## ChangeHat

`ChangeHat` — changes the hat wearable to another available hat. The request issues the ticket pending your approval in MetaMask.

### Body Parameters

| Parameter                     | Description                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)         | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract_address` (required) | A game character contract address.                                                    |
| `abi_hash` (required)         | An ABI indicates the number of functions in the contract (represented in hash value). |
| `characterId` (required)      | An ID of the character you'd like to change a hat for (equals to `tokenId`).          |
| `hatAddress` (required)       | A wallet address of the hat token.                                                    |

### Response

A successful request issues a ticket to come to your MetaMask wallet. The ticket shows a transaction that needs validation on your side — either confirmation or rejection.

### Code Example

```cpp
void UWearableNFTExample::ChangeHat(FString abi_hash, int characterId, bool hasHat, FString hatAddress, FAnkrCallCompleteDynamicDelegate Result)
{
	if (!hasHat || characterId == -1)
	{
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - ChangeHat - CharacterID or HatID is null"));
		return;
	}

	http = &FHttpModule::Get();
	
#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, this, hatAddress](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - ChangeHat - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);
			
		FString ticket = content;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			ticket = JsonObject->GetStringField("ticket");
		}
			
		if		(hatAddress.Equals(BlueHatAddress)) AnkrUtility::SetLastRequest("ChangeHatBlue");
		else if (hatAddress.Equals(RedHatAddress))  AnkrUtility::SetLastRequest("ChangeHatRed");
			
		Result.ExecuteIfBound(content, ticket, "", -1, false);
	});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, characterId, hasHat, hatAddress]()
	{
		FString changeHatMethodName = "changeHat";

		FString body = "{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + changeHatMethodName + "\", \"args\": [\"" + FString::FromInt(characterId) + "\", \"" + hatAddress + "\"]}";

		FString url = AnkrUtility::GetUrl() + ENDPOINT_SEND_TRANSACTION;
		Request->SetURL(url);
		Request->SetVerb("POST");
		Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
		Request->SetContentAsString(body);
		Request->ProcessRequest();

#if PLATFORM_ANDROID || PLATFORM_IOS
		FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
	});
}
```

## GetHat

`GetHat` — retrieves the current hat of the character. The data shows the token address that the player has.

### Body Parameters

| Parameter                | Description                                                                           |
|--------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)    | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract` (required)    | A game character contract address.                                                    |
| `abi_hash` (required)    | An ABI indicates the number of functions in the contract (represented in hash value). |
| `characterId` (required) | An ID of the character you'd like to change a hat for (equals to `tokenId`).          |

### Response

The response comes as a data object containing the token address that corresponds to the player's hat.

### Code Example

```cpp
void UWearableNFTExample::GetHat(FString abi_hash, int characterId, FAnkrCallCompleteDynamicDelegate Result)
{
	http = &FHttpModule::Get();

#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GetHat - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

		FString data = content;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			data = JsonObject->GetStringField("data");
		}
			
		Result.ExecuteIfBound(content, data, "", -1, false);
	});

	FString getHatMethodName = "getHat";

	FString url = AnkrUtility::GetUrl() + ENDPOINT_CALL_METHOD;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameCharacterContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + getHatMethodName + "\", \"args\": [\"" + FString::FromInt(characterId) + "\"]}");
	Request->ProcessRequest();
}
```

---

## GetTicketResult

`GetTicketResult` — retrieves the result of the ticket. The status shows whether the ticket has been successful or not (approved or rejected). The 'code' shows a code number related to a specific failure or success.
 

### Body Parameters

| Parameter             | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `ticketID` (required) | An ID of the ticket you'd like to know the resulting status for. |

### Response

The response comes as a data object containing a code value indicating a specific failure or success type.

### Code Example

```cpp
void UWearableNFTExample::GetTicketResult(FString ticketId, FAnkrCallCompleteDynamicDelegate Result)
{
#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, ticketId, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GetTicketResult - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);
			
		FString data = content;
		int code = 0;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			code = 1;

			if (AnkrUtility::GetLastRequest().Equals("ChangeHatBlue") || AnkrUtility::GetLastRequest().Equals("ChangeHatRed"))
			{
				bool result					   = JsonObject->GetBoolField("result");
				TSharedPtr<FJsonObject> object = JsonObject->GetObjectField("data");
				FString transactionHash		   = object->GetStringField("tx_hash");
				FString status				   = object->GetStringField("status");
				UE_LOG(LogTemp, Warning, TEXT("tx_hash: %s | status: %s"), *transactionHash, *status);

				if (result && status == "success")
				{
					code = 123;
				}
			}
		}

		Result.ExecuteIfBound(content, data, "", code, false);
	});

	FString url = AnkrUtility::GetUrl() + ENDPOINT_RESULT;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"ticket\": \"" + ticketId + "\" }");
	Request->ProcessRequest();
}
```

## GetItemsBalance

`GetItemsBalance` — retrieves the balance of items in a batch.

### Body Parameters

| Parameter             | Description                                                                           |
|-----------------------|---------------------------------------------------------------------------------------|
| `device_id` (default) | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract` (required) | A game character contract address.                                                    |
| `abi_hash` (required) | An ABI indicates the number of functions in the contract (represented in hash value). |
| `address` (required)  | An address of the user for which you'd like to retrieve the information.              |

### Response

The response is a data object containing an array of balances for each token. The balances for each token return in the order sent in the request.

### Code example

```cpp
void UWearableNFTExample::GetItemsBalance(FString abi_hash, FString address, FAnkrCallCompleteDynamicDelegate Result)
{
	http = &FHttpModule::Get();

#if ENGINE_MAJOR_VERSION == 5 || (ENGINE_MAJOR_VERSION == 4 && ENGINE_MINOR_VERSION >= 26)
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
#else
	TSharedRef<IHttpRequest> Request = http->CreateRequest();
#endif
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
	{
		const FString content = Response->GetContentAsString();
		UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GetItemsBalance - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

		FString data = content;
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			data = JsonObject->GetStringField("data");
			UE_LOG(LogTemp, Warning, TEXT("WearableNFTExample - GetItemsBalance - Balance: %s"), *data);
		}
			
		Result.ExecuteIfBound(content, data, "", -1, false);
	});

	FString balanceOfBatchMethodName = "balanceOfBatch";

	FString args = "[ [\"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\", \"" + activeAccount + "\"], [\"" + BlueHatAddress + "\", \"" + RedHatAddress + "\", \"" + WhiteHatAddress + "\", \"" + BlueShoesAddress + "\", \"" + RedShoesAddress + "\", \"" + WhiteShoesAddress + "\", \"" + BlueGlassesAddress + "\", \"" + RedGlassesAddress + "\", \"" + WhiteGlassesAddress + "\"]]";
	
	FString url = AnkrUtility::GetUrl() + ENDPOINT_CALL_METHOD;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + GameItemContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + balanceOfBatchMethodName + "\", \"args\": " + args + "}");
	Request->ProcessRequest();
}
```