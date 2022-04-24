---
title: Endpoints
id: endpoints
---

# Algorand node JSON-RPC endpoints

After successfully deploying a node on Ankr you can get the endpoint from the Application details section as seen below:

*http://app-3ca28d07-1baa-4c3b-bf46-f2ccd91a43af.cls-dec3c32b-4f06-462f-b827-dee931d39a72.ankr.com*

```
//requestcurl -X GET http://app-3a95c00b-a28c-4975-9025-8ad66f9ca142.cls-a91a7dbc-1a23-42f6-a66f-876094349f03.ankr.com/v2/status -H  "accept: application/json"//Response{   "catchpoint":"",   "catchpoint-acquired-blocks":0,   "catchpoint-processed-accounts":0,   "catchpoint-total-accounts":0,   "catchpoint-total-blocks":0,   "catchup-time":714828252684,   "last-catchpoint":"10000#PZQCLLFYLGXE6QM7A7YN7AIUUJKHYE2UTCAIHVA74QIY3M5F4BFA",   "last-round":10308,   "last-version":"https://github.com/algorandfoundation/specs/tree/5615adc36bad610c7f165fa2967f4ecfa75125f0",   "next-version":"https://github.com/algorandfoundation/specs/tree/5615adc36bad610c7f165fa2967f4ecfa75125f0",   "next-version-round":10309,   "next-version-supported":true,   "stopped-at-unsupported-round":false,   "time-since-last-round":3390170741}
```

Here's the list of provided Algorand APIs endpoints that can also be consulted in the [Algorand official documentation](https://developer.algorand.org/docs/reference/rest-apis/algod/v2/). 

## /v2/status

```
//Requestcurl -X GET http://.ankr.com/v2/status -H  "accept: application/json"//Response{   "catchpoint":"",   "catchpoint-acquired-blocks":0,   "catchpoint-processed-accounts":0,   "catchpoint-total-accounts":0,   "catchpoint-total-blocks":0,   "catchup-time":714828252684,   "last-catchpoint":"10000#PZQCLLFYLGXE6QM7A7YN7AIUUJKHYE2UTCAIHVA74QIY3M5F4BFA",   "last-round":10308,   "last-version":"https://github.com/algorandfoundation/specs/tree/5615adc36bad610c7f165fa2967f4ecfa75125f0",   "next-version":"https://github.com/algorandfoundation/specs/tree/5615adc36bad610c7f165fa2967f4ecfa75125f0",   "next-version-round":10309,   "next-version-supported":true,   "stopped-at-unsupported-round":false,   "time-since-last-round":3390170741}
```
## /v2/blocks

```
//Requestcurl -X GET http://.ankr.com/v2/blocks/{1} -H  "accept: application/json"//Response{  "block": {    "fees": "Y76M3MSY6DKBRHBL7C3NNDXGS5IIMQVQVUAB6MP4XEMMGVF2QWNPL226CA",    "frac": 20000000,    "gen": "mainnet-v1.0",    "gh": "wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=",    "prev": "blk-YJZOZDOPATE6P7GZFHTNHQRANB4RNDUNQ7EQVVPSVJ5K7T5OJXTQ",    "proto": "https://github.com/algorandfoundation/specs/tree/5615adc36bad610c7f165fa2967f4ecfa75125f0",    "rate": 20000000,    "rnd": 1,    "rwcalr": 500000,    "rwd": "737777777777777777777777777777777777777777777777777UFEJ2CI",    "seed": "cnOI2Ea8n1p7+XqS9nIFxJy2mSJj10q79NpgxNWBl9w=",    "ts": 1560211225,    "txn": "tGWqr06HVvsHC2hFmu2EhwYBSiMkvIoo5nWxAkUxsLo="  }}
```

## /v2/ledger/supply

Get the current supply reported by the ledger.

### Parameters

None.

### Returns

Supply represents the current supplies of MicroAlgos in the system.

### Example

```
//Requestcurl -X GET http://.ankr.com/v2/ledger/supply -H  "accept: application/json"//Response{   "current_round":58341,   "online-money":981165186795720,   "total-money":981165186795720}
```

## /v1/status

```
//Requestcurl -X GET http://.ankr.com/v1/blocks/{1} -H  "accept: application/json"//Response{   "lastRound":21691,   "lastConsensusVersion":"https://github.com/algorandfoundation/specs/tree/5615adc36bad610c7f165fa2967f4ecfa75125f0",   "nextConsensusVersion":"https://github.com/algorandfoundation/specs/tree/5615adc36bad610c7f165fa2967f4ecfa75125f0",   "nextConsensusVersionRound":21692,   "nextConsensusVersionSupported":true,   "timeSinceLastRound":157904459,   "catchupTime":479293819521,   "hasSyncedSinceStartup":false,   "stoppedAtUnsupportedRound":false}
```

## /v1/blocks

```
//Requestcurl -X GET http://.ankr.com/v1/blocks/{1} -H  "accept: application/json"//Response{   "hash":"43JTXDLUX4HMKHCCT7BVN2G47IANUQCKGFBFFVZ7ULOGQODP2QJA",   "previousBlockHash":"YJZOZDOPATE6P7GZFHTNHQRANB4RNDUNQ7EQVVPSVJ5K7T5OJXTQ",   "seed":"OJZYRWCGXSPVU67ZPKJPM4QFYSOLNGJCMPLUVO7U3JQMJVMBS7OA",   "proposer":"EYOZMULFFZZ5QDDMWQ64HKIMUPPNEL3WJMNGAFD43L52ZXTPESBEVJPEZU",   "round":1,   "period":0,   "txnRoot":"WRS2VL2OQ5LPWBYLNBCZV3MEQ4DACSRDES6IUKHGOWYQERJRWC5A",   "reward":0,   "rate":20000000,   "frac":20000000,   "txns":{   },   "timestamp":1560211225,   "currentProtocol":"https://github.com/algorandfoundation/specs/tree/5615adc36bad610c7f165fa2967f4ecfa75125f0",   "nextProtocol":"",   "nextProtocolApprovals":0,   "nextProtocolVoteBefore":0,   "nextProtocolSwitchOn":0,   "upgradePropose":"",   "upgradeApprove":false}
```

## Indexer - /{account-id}/transactions

Lookup account information.

### Parameters

### Example

```
//Requestcurl -X GET http://indexer-.ankr.com/v2/accounts/{account-id}/transactions -H  "accept: application/json"//Response{   "current-round":21074,   "transactions":[]}
```





