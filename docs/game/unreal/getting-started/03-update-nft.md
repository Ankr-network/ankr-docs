---
title: 03 Update an NFT
id: unreal-update-nft
---

This section describes methods to get NFTs and make updates to them e.g. adding a red hat to a character.

Get NFT info
---
---

`GetNFTInfo` is used to retrieve details about an NFT.

### URL

http://45.77.189.28:5000/call/method 

### Parameters

`device_id`, 
`contract_address`, 
`abi_hash`, 
`method`, 
`args`: `"tokenId"`

### Response

A data object for the NFT specifying the following:

`tokenId`, 
`itemType`, 
`strength`, 
`level`, 
`expireTime`, 
`signature`

```cpp

void UUpdateNFTExample::GetNFTInfo(FString abi_hash, int tokenId, FAnkrDelegate Result)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			UE_LOG(LogTemp, Warning, TEXT("UpdateNFTExample - GetNFTInformation - GetContentAsString: %s"), *Response->GetContentAsString());
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				Result.ExecuteIfBound(Response->GetContentAsString());
			}
		});

	FString getTokenDetailsMethodName = "getTokenDetails";
	FString content = "{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + ContractAddress + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + getTokenDetailsMethodName + "\", \"args\": \"" + FString::FromInt(tokenId) + "\"}";
	UE_LOG(LogTemp, Warning, TEXT("UpdateNFTExample - GetNFTInformation - content: %s"), *content);

	FString url = baseUrl + "call/method";

	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
	Request->SetHeader("Content-Type", TEXT("application/json"));
	Request->SetContentAsString(content);
	Request->ProcessRequest();
}
```

Update NFT
---
---

`UpdateNFT` is used to change NFT characteristics on the blockchain.


### URL 

http://45.77.189.28:5000/send/transaction

### Parameters

`device_id`, 
`contract_address`, 
`abi_hash`, 
`method`, 
`args`: `'tokenId':int`, `'itemType':int`, `'strength':int`, `'level':int`, `'expireTime':int`, `'signature':"0x"`

### Response

A `ticket`

The session saved during a call to `Init` will be used to open metamask. Metamask will show popup to sign or confirm the transaction for that ticket.

```cpp

void UUpdateNFTExample::UpdateNFT(FString abi_hash, FItemInfoStructure _item, FAnkrDelegate Result)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Result, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				FString ticket = JsonObject->GetStringField("ticket");
				
				Result.ExecuteIfBound(ticket);

#if PLATFORM_ANDROID
				FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
			}
		});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, abi_hash, _item]()
		{
			FString url = baseUrl + "send/transaction";
			Request->SetURL(url);
			Request->SetVerb("POST");
			Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
			Request->SetHeader("Content-Type", TEXT("application/json"));

			FRequestBodyStruct requestBody{};
			requestBody.device_id = deviceId;
			requestBody.contract_address = ContractAddress;
			requestBody.abi_hash = abi_hash;
			requestBody.method = "updateTokenWithSignedMessage";

			FItemInfoStructure item = _item;
			requestBody.args.Add(item);

			Request->SetContentAsString(FRequestBodyStruct::ToJson(requestBody));
			Request->ProcessRequest();
		});
}
```