---
title: 02 - Read NFT Data
id: game-02
---

# Read NFT data

In this step, we want to check if the player owns any existing NFT characters. If they do, they can use them in the game. 

### 👀 Example — read NFT data for a game character

1. To start first initialize the `SDKWrapper` to store contracts for use here inside some private variables. For this example we are using the ```GameCharacterContract``` used in the ```WearableNFTExample``` Use Case.

    ```c
        var mirageSDKWrapper = MirageSDKWrapper.GetInitializedInstance(WearableNFTContractInformation.ProviderURL);
        _gameCharacterContract = mirageSDKWrapper.GetContract(WearableNFTContractInformation.GameCharacterContractAddress, WearableNFTContractInformation.GameCharacterABI);
    ```

2. To query if the player holds any NFTs, call the ```balanceOf function```. This returns the number of these Tokens in the address.

    ```js
        /**
         * @dev Returns the number of tokens in ``owner``'s account.
         */
        function balanceOf(address owner) external view returns (uint256 balance);

    ```

3. If you need to get the ID of a specific NFT you can use the ```tokenOfOwnerByIndex```

    ```solidity
        /**
        * @dev Returns a token ID owned by `owner` at a given `index` of its token list.
        * Use along with {balanceOf} to enumerate all of ``owner``'s tokens.
        */
        function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);

    ```

Once you have checked that the authenticated wallet has an NFT you can then you can grant access to it for the player. For example, let them use Hero X if they own the Hero X NFT.