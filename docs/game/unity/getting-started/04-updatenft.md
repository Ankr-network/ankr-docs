---
title: 04 - Update an NFT
id: game-04
---

# Update an NFT

Making updates to the NFT e.g. adding a red hat to a character requires signing and sending a transaction.

### Signing transactions
All updates are transactions that must be signed via a prompt from MetaMask.

### Sending transactions

There are two ways to make update transactions. 
Using the **GetData** method and the **CallMethod**

#### GetData method

Use the `GetData` method to retrieve information from the blockchain. (READ functions do NOT require mining.). Other non-standard `Get` functions are also available

These methods require

* Contract Address
* ABI

The following extract is an example usage of the **GetData** method to retrieve information about an NFT:

```c#
private async UniTask<BigInteger> GetHat(BigInteger tokenID)
		{
			var getHatMessage = new GetHatMessage
			{
				CharacterId = tokenID.ToString()
			};
			var hatId = await _gameCharacterContract.GetData<GetHatMessage, BigInteger>(getHatMessage);

			UpdateUILogs($"Hat Id: {hatId}");

			return hatId;
		}
```


#### CallMethod

Use the `CallMethod` to write new information to the blockchain. These methods utilize gas. 

The following extract is an example of how a `CallMethod` is used to update an NFT: 

```c#
public async void UpdateNFT()
		{
			// 1) Request nft parameters and signature for parameters
			var info = await RequestPreparedParams(0);
			// 2) Call method that check signature and update nft
			var receipt = await _contract.CallMethod("updateTokenWithSignedMessage", new object[] { info });

			Debug.Log($"Receipt: {receipt}");
		}
```

### 👀 Example — update NFT

This is an example from the SDK and illustrates how to update a GameItem NFT by user request.

1. Amend [GameItem.sol](https://github.com/mirage-xyz/mirage-smart-contract-example/blob/master/composable-nft/contracts/GameItem.sol) to your purposes and deploy it to network.

    :::info
    Ensure that the smart contract is deployed from the same account that uses the backend to sign data.
    :::

2. Create an instance of `Web3` class and call `Initialize` method after login in metamask

    ```c#
    string provider_url = "<ethereum node url>";
            
    Web3 web3 = new Web3(provider_url);
    web3.Initialize();
    ```

3. The user sends a GET request `hero/{id}` to [backend](https://github.com/mirage-xyz/mirage-go-sdk) where `id` is the index of the NFT in the contract.

    ```c#
    UnityWebRequest request = UnityWebRequest.Get(url+$"hero/{tokenId}");
    await request.Send();
    ```

4. The Backend prepares parameters for the hero NFT and signs it with [EIP-712](https://eips.ethereum.org/EIPS/eip-712) standard. The user implements this signature to prove immutability of the data in the contract.

    ```go
    hero := &ItemInfo{
        TokenId:    id,
        ItemType:   1,
        Strength:   10,
        Level:      15,
        ExpireTime: 1642739319576,
    }
        
    hero.Signature = generateSignature(*hero)
    ```

4. After getting the parameters of the NFT and Signature, the user should call contract method `updateTokenWithSignedMessage` and pass it all data from the backend as tuple.

    ```c#
    ItemInfo info = await RequestPreparedParams(0);
    string receipt = await contract.CallMethod("updateTokenWithSignedMessage", new object[] {info});
    ```

5. The Contract verifies the signature and expireTime for data and updates the NFT.

    ```solidity
    function updateTokenWithSignedMessage(ItemInfo calldata itemInfo) public {
        address signer = _verifyItemInfo(itemInfo);
        require(hasRole(UPDATER_ROLE, signer), "Signature invalid");
        require(itemInfo.expireTime > block.timestamp, "Voucher expired");
        require(tokenDetails[itemInfo.tokenId].itemType > 0, "Token does not exist");

        tokenDetails[itemInfo.tokenId] = Item(itemInfo.itemType, itemInfo.strength, itemInfo.level);
    }

    ```