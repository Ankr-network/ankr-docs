# Connect a wallet

This section assumes you have already deployed the relevant smart contracts to the blockchain and have smart contract addresses and ABI at your disposal.

## Guided tutorial

<iframe width="600" height="400" src="https://www.youtube.com/embed/O8FAOFPvDUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## deviceId

`deviceId` — the parameter that is generated upon initialization and saved for the further usage. It will be automatically populated upon sending any requests from that particular device. This parameter serves as a kind of validator. For example, it might prevent confirming a ticket from any other device except for the one associated with the `deviceId` generated upon initialization.

```
deviceId = load->UniqueId;
```

## ConnectWallet

`ConnectWallet` — connects to the wallet app on your mobile device. On a desktop, a QR-code is to be generated upon logging in. The session is saved to a variable for the further usage.

```
void UAnkrClient::ConnectWallet(const FAnkrCallCompleteDynamicDelegate& Result)
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
			UE_LOG(LogTemp, Warning, TEXT("AnkrClient - ConnectWallet - GetContentAsString: %s"), *content);

			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

			needLogin = false;
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				bool result = JsonObject->GetBoolField("result");
				if (result)
				{
					FString recievedUri = JsonObject->GetStringField("uri");
					FString sessionId = JsonObject->GetStringField("session");
					needLogin = JsonObject->GetBoolField("login");
					session = sessionId;
					walletConnectDeeplink = recievedUri;

					updateNFTExample->Init(deviceId, session);
					wearableNFTExample->Init(deviceId, session);

					if (needLogin)
					{
#if PLATFORM_ANDROID || PLATFORM_IOS
						AnkrUtility::SetLastRequest("ConnectWallet");
						FPlatformProcess::LaunchURL(recievedUri.GetCharArray().GetData(), NULL, NULL);
#endif
					}

					Result.ExecuteIfBound(content, "", "", -1, needLogin);
				}
				else
				{
					UE_LOG(LogTemp, Error, TEXT("AnkrClient - ConnectWallet - Couldn't connect, when result is false, see details:\n%s"), *content);
				}
			}
			else
			{
				UE_LOG(LogTemp, Error, TEXT("AnkrClient - ConnectWallet - Couldn't get a valid response, deserialization failed, see details:\n%s"), *content);
			}

});

	FString url = AnkrUtility::GetUrl() + ENDPOINT_CONNECT;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\"}");
	Request->ProcessRequest();
}
```

## GetWalletInfo

If you haven't logged in to your wallet yet, then the app on your mobile device will automatically prompt you to log in.

```
FPlatformProcess::LaunchURL(recievedUri.GetCharArray().GetData(), NULL, NULL);
```

If you're logged in, then  `GetWalletInfo` retrieves your wallet information.

```
void UAnkrClient::GetWalletInfo(const FAnkrCallCompleteDynamicDelegate& Result)
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
			UE_LOG(LogTemp, Warning, TEXT("AnkrClient - GetWalletInfo - GetContentAsString: %s"), *content);

			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

			FString data = content;
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				bool result = JsonObject->GetBoolField("result");
				if (result)
				{
					TArray<TSharedPtr<FJsonValue>> accountsObject = JsonObject->GetArrayField("accounts");

					if (accountsObject.Num() > 0)
					{
						for (int32 i = 0; i < accountsObject.Num(); i++)
						{
							accounts.Add(accountsObject[i]->AsString());
						}

						activeAccount = accounts[0];
						chainId = JsonObject->GetIntegerField("chainId");

						updateNFTExample->SetAccount(activeAccount, chainId);
						wearableNFTExample->SetAccount(activeAccount, chainId);

						data = FString("Active Account: ").Append(activeAccount).Append(" | Chain Id: ").Append(FString::FromInt(chainId));
					}
					else
					{
						UE_LOG(LogTemp, Error, TEXT("AnkrClient - GetWalletInfo - Couldn't get an account, wallet is not connected: %s"), *content);
					}
				}
				else
				{
					UE_LOG(LogTemp, Error, TEXT("AnkrClient - GetWalletInfo - Couldn't get a valid response: %s"), *content);
					data = JsonObject->GetStringField("msg");
				}

				Result.ExecuteIfBound(content, data, "", -1, false);
}
			else
			{
				UE_LOG(LogTemp, Error, TEXT("AnkrClient - GetWalletInfo - Couldn't get a valid response:\n%s"), *content);
			}
	});

	FString url = AnkrUtility::GetUrl() + ENDPOINT_WALLET_INFO;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\"}");
	Request->ProcessRequest();
}
```