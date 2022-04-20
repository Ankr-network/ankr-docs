---
title: Deploy ERC-721 Token
id: deploy-erc721-token
---

# Deploy ERC-721 token

Deployment of ERC-721 token can be done though Remix IDE of locally using truffle. 
Since BAS has EVM & Web3 support, it is compatible with Ethereum development toolsets. 
Remix is the easiest way to deploy the ERC-721 smart contract into a BAS network.

To deploy an ERC-721 token using Remix IDE go to the [remix page](https://remix.ethereum.org/). 
In the deploy section choose `Injected Web3` and make sure your Metamask is connected to one of the BAS networks. 
To get connected to the BAS network, go to one of the BAS devnet's staking pages, for example, https://staking.dev-01.bas.ankr.com/, and it will create a new Metamask network automatically for you. 
You can also configure your Metamask manually.

Use this snippet from the ERC-721 smart contract:

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20Token is ERC20 {

    constructor() ERC20("My Test Token", "MTT") {
        _mint(msg.sender, 1000 ether);
    }
}
```

MetaData URI is a link (usually on ipfs) that returns a JSON object with information about your NFT token.

:::hint
For more information on NFT (EIP-721) metadata, visit the [official EIP page](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md).
:::