# Query API

_Query API_ is an access-ready solution that enables your projects to interact with multiple blockchains in a single request. By indexing blockchain data from all eight currently supported chains, searching through large amounts of data is easier and faster than ever before. Query API can boast almost instantaneous processing speeds (due to the key-value filtering supported) for the searches that might ordinarily take hours to process. 

Query API serves to request info on the ranges of blocks (max range is 100) for a full list of block metadata.

## Query API Endpoints Collection

_Query API Methods_ serve to request info on the ranges of blocks (max range is 100) for a full list of block metadata:

  * [`ankr_getBlocks`](/advanced-api/query-endpoints/get-blocks/) — retrieves full info of a particular block.
  * [`ankr_getLogs`](/advanced-api/query-endpoints/get-logs/) — retrieves history data of a particular block range.
  * [`ankr_getTransactionsByHash`](/advanced-api/query-endpoints/get-transactions-by-hash/) — retrieves the details of a transaction specified by hash.
  * [`ankr_getInteractions`](/advanced-api/query-endpoints/get-interactions/) — retrieves blockchains interacted with a particular wallet.