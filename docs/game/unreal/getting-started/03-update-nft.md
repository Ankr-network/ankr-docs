---
title: Update NFTs
id: unreal-update-nft
---

This section lists the requests to get NFTs and make updates to them (example: adding a hat to a character).

## Guided tutorial

<iframe width="550" height="305" src="https://www.youtube.com/embed/1-fWpeFc4tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## GetNFTInfo

`GetNFTInfo` — retrieves details on a particular NFT specified by the body parameters.

### Body Parameters

| Parameter                     | Description                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)         | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract_address` (required) | An address of the contract you perform operations by.                                 |
| `abi_hash` (required)         | An ABI indicates the number of functions in the contract (represented in hash value). |
| `tokenId` (required)          | A token ID of the NFT you'd like to retrieve the details on.                          |

### Response

A data object providing the following information on the NFT:

| Parameter     | Description                     |
|---------------|---------------------------------|
| `tokenId`     | A token ID of the NFT.          |
| `itemType`    | A type of the NFT.              |
| `strength`    | A strength property of the NFT. |
| `level`       | A level property of the NFT.    |
| `expireTime`  | Time the NFT expires in.        |
| `signature`   | Whom the NFT belongs to.        |

### Code Example

```cpp
void UUpdateNFTExample::GetNFTInfo(FString abi_hash, int tokenId, FAnkrCallCompleteDynamicDelegate Result)
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
		UE_LOG(LogTemp, Warning, TEXT("UpdateNFTExample - GetNFTInfo - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);
			
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			Result.ExecuteIfBound(content, content, "", -1, false);
		}
	});

	FString getTokenDetailsMethodName = "getTokenDetails";
	FString body = "{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + ContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + getTokenDetailsMethodName + "\", \"args\": \"" + FString::FromInt(tokenId) + "\"}";
	
	FString url = AnkrUtility::GetUrl() + ENDPOINT_CALL_METHOD;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString(body);
	Request->ProcessRequest();
}
```

---

## UpdateNFT

`UpdateNFT` — changes NFT metadata on the blockchain. This request changes a current state on the blockchain and incurs gas fees to cover smart contract operations. Therefore, the request issues a ticket to be approved or rejected on MetaMask.

### Body Parameters

| Parameter                     | Description                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------|
| `device_id` (default)         | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract_address` (required) | An address of the contract you perform operations by.                                 |
| `abi_hash` (required)         | An ABI indicates the number of functions in the contract (represented in hash value). |
| `_item` (required)            | An item structure that needs to be changed.                                           |

### Response

A successful request issues a ticket to come to your MetaMask wallet. The ticket shows a transaction that needs validation on your side — either confirmation or rejection.

### Code Example

```cpp
void UUpdateNFTExample::UpdateNFT(FString abi_hash, FItemInfoStructure _item, FAnkrCallCompleteDynamicDelegate Result)
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
		UE_LOG(LogTemp, Warning, TEXT("UpdateNFTExample - UpdateNFT - GetContentAsString: %s"), *content);

		TSharedPtr<FJsonObject> JsonObject;
		TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);
			
		if (FJsonSerializer::Deserialize(Reader, JsonObject))
		{
			FString ticket = JsonObject->GetStringField("ticket");
			Result.ExecuteIfBound(content, ticket, "", -1, false);

#if PLATFORM_ANDROID || PLATFORM_IOS
			FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
		}
	});

	AnkrUtility::SetLastRequest("UpdateNFT");

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, _item]()
	{
		FItemInfoStructure item = _item;

		FRequestBodyStruct body{};
		body.device_id		  = deviceId;
		body.contract_address = ContractAddress;
		body.abi_hash		  = abi_hash;
		body.method			  = "updateTokenWithSignedMessage";
		body.args.Add(item);

		FString url = AnkrUtility::GetUrl() + ENDPOINT_SEND_TRANSACTION;
		Request->SetURL(url);
		Request->SetVerb("POST");
		Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
		Request->SetContentAsString(FRequestBodyStruct::ToJson(body));
		Request->ProcessRequest();
	});
}
```