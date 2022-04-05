---
title: 01 Connect Wallet and Authenticate
id: unreal-connect-wallet
---

This section assumes you have already deployed the relevant smart contracts to the blockchain and have smart contract addresses and ABI.


1. Upon initialization, the client is called and a `device_id` is created.  

	```js
	deviceId = load->UniqueId;
	baseUrl = "http://45.77.189.28:5000/";
	```

2. The Connection status is queried and a `sessionId`is assigned subject to the Login Status.

	```js
	GetClient(FMirageConnectionStatus Status)
	```

	```js
	FString recievedUri = JsonObject->GetStringField("uri");
					FString sessionId = JsonObject->GetStringField("session");
					bool needLogin = JsonObject->GetBoolField("login");
					session = sessionId;
	```

2. Login via MetaMask is required to authenticate the session. A connection request is sent with the `device_id` as a parameter.

	```js
	FString url = baseUrl + "connect";
		GEngine->AddOnScreenDebugMessage(1, 2.0f, FColor::Green, url);

		Request->SetURL(url);
		Request->SetVerb("POST");
		Request->SetHeader(TEXT("User-Agent"), "X-MirageSDK-Agent");
		Request->SetHeader("Content-Type", TEXT("application/json"));
		Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\"}");
		Request->ProcessRequest();
		return true;
	```

3. If successful, a JSON object is returned with the `session_id` and `URI`. This is now a valid session and any transaction to the blockchain can be performed.  
