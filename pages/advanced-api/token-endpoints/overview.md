# Token API

Token API serves to request token-related data (account balance, supported currencies, token holders, token price, etc.) across multiple EVM-compatible chains.

Token API uses only official on-chain data, leaving third parties behind. Ankr constantly scans for the on-chain transactions coming from DEXs, flagging transactions and aggregating data into accurate real-time token price feeds. This solution is crucial for the Web3 projects like marketplaces and exchanges looking for efficient ways to query accurate on-chain data for tokenized assets.

## Token API Endpoints Collection

_Token API Collection_ consists of the following endpoints to request token-related data across multiple chains:

  * [`ankr_getAccountBalance`](/advanced-api/token-endpoints/get-account-balance/) — retrieves the balance of a particular account.
  * [`ankr_getCurrencies`](/advanced-api/token-endpoints/get-currencies/) — retrieves info on currencies available for a particular blockchain.
  * [`ankr_getTokenPrice`](/advanced-api/token-endpoints/get-token-price/) — retrieves the price of a particular token.
  * [`ankr_getTokenHolders`](/advanced-api/token-endpoints/get-token-holders/) — retrieves info on holders of a particular token.
  * [`ankr_getTokenHoldersCount`](/advanced-api/token-endpoints/get-token-holders-count/) — retrieves the number of token holders.