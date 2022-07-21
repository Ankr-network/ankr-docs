---
title: Write/Read Requests
id: unreal-send-retrieve
---

# Write and Read requests

This page lists the functionality you can use in your game. 

:::tip Write vs. Read requests

* *Write* requests change the current state of the blockchain (example: minting NFTs) and thus incur gas fees to cover smart contract operations. Those requests issue tickets you need to approve or reject in MetaMask.

* *Read* requests don't change but only show the current state of the blockchain, and don't incur any gas fees. Those requests don't issue tickets or need approval.

:::

### Guided tutorial

<iframe width="550" height="305" src="https://www.youtube.com/embed/ikHdTSzxxQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## SendTransaction

`SendTransaction` — the function that supports sending the *Write* method requests. Those requests change a current state of the blockchain and incur gas fees to cover smart contract operations. Those requests issue the tickets pending your approval in MetaMask. Simply put, a successful request is going to change the current state of the blockchain, that is why it sends a ticket to your MetaMask wallet that asks you to confirm or reject the ticket's transaction.

### Body Parameters

| Parameter             | Description                                                                           |
|-----------------------|---------------------------------------------------------------------------------------|
| `device_id` (default) | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract` (required) | An address of the contract you perform operations by.                                 |
| `abi_hash` (required) | An ABI indicates the number of functions in the contract (represented in hash value). |
| `method` (required)   | A method to interact with the contract deployed on the blockchain.                    |
| `args` (optional)     | A destination address (a user to send a transaction to).                              |

### Response

A successful request issues a ticket to come to your MetaMask wallet. The ticket shows a transaction that needs validation on your side — either confirmation or rejection.

### Code Example

```cpp
void UAnkrClient::SendTransaction(FString contract, FString abi_hash, FString method, FString args, const FAnkrCallCompleteDynamicDelegate& Result)
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
			UE_LOG(LogTemp, Warning, TEXT("AnkrClient - SendTransaction - GetContentAsString: %s"), *content);

			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

			FString data = content;
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				FString ticketId = JsonObject->GetStringField("ticket");
				data = ticketId;

#if PLATFORM_ANDROID || PLATFORM_IOS
				AnkrUtility::SetLastRequest("SendTransaction");
				FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif
			}
			else
			{
				UE_LOG(LogTemp, Error, TEXT("AnkrClient - SendTransaction - Couldn't get a valid response:\n%s"), *content);
			}

			Result.ExecuteIfBound(content, data, "", -1, false);
		});

	AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [this, Request, contract, abi_hash, method, args]()
		{
			FString url = AnkrUtility::GetUrl() + ENDPOINT_SEND_TRANSACTION;
			Request->SetURL(url);
			Request->SetVerb("POST");
			Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
			Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + contract + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + method + "\", \"args\": \"" + args + "\"}");
			Request->ProcessRequest();
		});
}
```

---

## GetTicketResult

`GetTicketResult` — returns a status of the ticket specified by the body parameters.

### Body Parameters

| Parameter             | Description                                                                      |
|-----------------------|----------------------------------------------------------------------------------|
| `device_id` (default) | An ID of your device, generated and saved for further usage upon initialization. |
| `ticket` (required)   |                                                                                  |

### Response

Returns info on whether the ticket has been confirmed or rejected (successful or unsuccessful).

---

## CallMethod

`CallMethod` — the function that supports sending the *Read* method requests. Those requests change nothing but retrieve a current state of the blockchain. Those requests don't incur gas fees either. Simply put, they are all just requests for information.

### Body Parameters

| Parameter             | Description                                                                           |
|-----------------------|---------------------------------------------------------------------------------------|
| `device_id` (default) | An ID of your device, generated and saved for further usage upon initialization.      |
| `contract` (required) | An address of the contract you perform operations by.                                 |
| `abi_hash` (required) | An ABI indicates the number of functions in the contract (represented in hash value). |
| `method` (required)   | A method to interact with the contract deployed on the blockchain.                    |
| `args` (optional)     | A destination address (a user to send a transaction to).                              |

### Response

Retrieves the information specified by the body parameters.

### Code Example

```cpp
void UAnkrClient::CallMethod(FString contract, FString abi_hash, FString method, FString args, const FAnkrCallCompleteDynamicDelegate& Result)
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
			UE_LOG(LogTemp, Warning, TEXT("AnkrClient - CallMethod - GetContentAsString: %s"), *content);

			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

			Result.ExecuteIfBound(content, content, "", -1, false);
		});

	FString url = AnkrUtility::GetUrl() + ENDPOINT_CALL_METHOD;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"contract_address\": \"" + contract + "\", \"abi_hash\": \"" + abi_hash + "\", \"method\": \"" + method + "\", \"args\": \"" + args + "\"}");
	Request->ProcessRequest();
}
```

---

## SendABI

`SendABI` — converts the ABI string passed with the body parameters into the ABI hash that you can subsequently use with other functions requiring `abi_hash`, such as `SendTransaction` or `CallMethod`.

### Body Parameters

| Parameter        | Description                                                        |
|------------------|--------------------------------------------------------------------|
| `abi` (required) | An ABI passed as a string to convert to a hash value (`abi_hash`). |

### Response

Returns the ABI hash.

### Code Example

```cpp
void UAnkrClient::SendABI(FString abi, const FAnkrCallCompleteDynamicDelegate& Result)
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
			UE_LOG(LogTemp, Warning, TEXT("AnkrClient - SendABI - GetContentAsString: %s"), *content);

			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

			FString data = content;
			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				Result.ExecuteIfBound(content, JsonObject->GetStringField("abi"), "", -1, false);
			}
			else
			{
				UE_LOG(LogTemp, Error, TEXT("AnkrClient - SendABI - Couldn't get a valid response:\n%s"), *content);
			}
		});

	const TCHAR* find = TEXT("\"");
	const TCHAR* replace = TEXT("\\\"");
	FString body = FString("{\"abi\": \"" + abi.Replace(find, replace, ESearchCase::IgnoreCase) + "\"}");

	FString url = AnkrUtility::GetUrl() + ENDPOINT_ABI;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString(body);
	Request->ProcessRequest();
}
```

---

## SignMessage

`SignMessage` — signs a message you pass with the body parameters to be encrypted and sent. The function corresponds to the *Write* method requests, therefore it issues a ticket you need to approve or reject in MetaMask.

### Body Parameters

| Parameter             | Description                                                                      |
|-----------------------|----------------------------------------------------------------------------------|
| `device_id` (default) | An ID of your device, generated and saved for further usage upon initialization. |
| `message` (required)  | A message you'd like to send.                                                    |

### Response

Returns a ticket validation status — whether the operation has been approved, rejected (successful or unsuccessful), or any error has occurred.

### Code Example

```cpp
void UAnkrClient::SignMessage(FString message, const FAnkrCallCompleteDynamicDelegate & Result)
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
			UE_LOG(LogTemp, Warning, TEXT("AnkrClient - SignMessage - GetContentAsString: %s"), *content);

			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				FString ticketId = JsonObject->GetStringField("ticket");

#if PLATFORM_ANDROID || PLATFORM_IOS
				AnkrUtility::SetLastRequest("SignMessage");
				FPlatformProcess::LaunchURL(session.GetCharArray().GetData(), NULL, NULL);
#endif

				Result.ExecuteIfBound(content, ticketId, "", -1, false);
			}
		});

	FString url = AnkrUtility::GetUrl() + ENDPOINT_SIGN_MESSAGE;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"message\":\"" + message + "\"}");
	Request->ProcessRequest();
}
```

---

## GetSignature

`GetSignature` — verifies a signature of the `ticket` passed with the body parameters. The function gets the result whether the user has signed the message or canceled signing it.

### Body Parameters

| Parameter             | Description                                                                      |
|-----------------------|----------------------------------------------------------------------------------|
| `device_id` (default) | An ID of your device, generated and saved for further usage upon initialization. |
| `ticket` (required)   | A ticket received upon performing a `SignMessage` request.                       |

### Response

Returns a `signature` data object based on the body parameters specified.

### Code Example

```cpp
void UAnkrClient::GetSignature(FString ticket, const FAnkrCallCompleteDynamicDelegate& Result)
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
			UE_LOG(LogTemp, Warning, TEXT("AnkrClient - GetSignature - GetContentAsString: %s"), *content);

			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(content);

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				TSharedPtr<FJsonObject> data = JsonObject->GetObjectField("data");

				Result.ExecuteIfBound(content, data->GetStringField("signature"), "", -1, false);
			}
		});

	FString url = AnkrUtility::GetUrl() + ENDPOINT_RESULT;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"ticket\":\"" + ticket + "\"}");
	Request->ProcessRequest();
}
```

---

## VerifyMessage

`VerifyMessage` — verifies if the connected wallet's user has signed the message.

### Body Parameters

| Parameter              | Description                                                                      |
|------------------------|----------------------------------------------------------------------------------|
| `device_id` (default)  | An ID of your device, generated and saved for further usage upon initialization. |
| `message` (required)   | A message sent in the `SignMessage` request.                                     |
| `signature` (required) | A signature object returned in the `GetSignature` request.                       |

### Response 

Returns an account address for the connected wallet's public address.

### Code Example

```cpp
void UAnkrClient::VerifyMessage(FString message, FString signature, const FAnkrCallCompleteDynamicDelegate& Result)
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
			UE_LOG(LogTemp, Warning, TEXT("AnkrClient - VerifyMessage - GetContentAsString: %s"), *content);

			TSharedPtr<FJsonObject> JsonObject;
			TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());

			if (FJsonSerializer::Deserialize(Reader, JsonObject))
			{
				Result.ExecuteIfBound(content, JsonObject->GetStringField("address"), "", -1, false);
			}
		});

	FString url = AnkrUtility::GetUrl() + ENDPOINT_VERIFY_MESSAGE;
	Request->SetURL(url);
	Request->SetVerb("POST");
	Request->SetHeader(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
	Request->SetContentAsString("{\"device_id\": \"" + deviceId + "\", \"message\":\"" + message + "\", \"signature\":\"" + signature + "\"}");
	Request->ProcessRequest();
}
```