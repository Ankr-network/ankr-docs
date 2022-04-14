---
title: 01 Connect Wallet and Authenticate
id: unreal-connect-wallet
---

# 01 Connect wallet and authenticate

This section assumes you have already deployed the relevant smart contracts to the blockchain and have smart contract addresses and ABI.

#### STEP ONE

Upon initialization, a unique `deviceId` is generated.

```js
deviceId = load->UniqueId;
baseUrl = "http://45.77.189.28:5000/";
```

#### STEP TWO

Use the `GetClient` method to send a request to http://45.77.189.28:5000/connect. 
Include the `device_id` as a parameter in the body. 
A response object is returned containing:
* `uri` deeplink to open metamask, 
* `session`
* `login` details.

The 'uri' deeplink only works for mobile devices. For desktop, a QR Code is generated at the time the login button is pressed. The session is saved to a variable for later use.

```cpp
	
bool UAnkrClient::GetClient(FAnkrConnectionStatus Status)
{
	http = &FHttpModule::Get();

	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = http->CreateRequest();
	Request->OnProcessRequestComplete().BindLambda([Status, this](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)
		{
			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
			
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				FString recievedUri = JsonObject->GetStringField("uri");
				FString sessionId	= JsonObject->GetStringField("session");
				bool needLogin		= JsonObject->GetBoolField("login");
				session				= sessionId;

				updateNFTExample->Init(deviceId, baseUrl, session);
				wearableNFTExample->Init(deviceId, baseUrl, session);

				if (needLogin) 
				{
#if PLATFORM_ANDROID
					FPlatformProcess::LaunchURL(recievedUri.GetCharArray().GetData(), NULL, NULL);
#endif
				}
				Status.ExecuteIfBound(true);
			}
			else 
			{
				Status.ExecuteIfBound(false);
			}

		});

	FString url = baseUrl + "connect";

	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
	Request->SetHeader("Content-Type", TEXT("application/json"));
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\"}");
	Request->ProcessRequest();
	return true;
}

```

#### STEP THREE

If login via MetaMask is required to authenticate the session, a connection request is sent to metamask with `uri` as a deeplink.

```cpp
FPlatformProcess::LaunchURL(recievedUri.GetCharArray().GetData(), NULL, NULL);
```

If already logged in, a JSON object is returned with the `session_id` and `URI`. This is now a valid session and any transaction to the blockchain can be performed.

---