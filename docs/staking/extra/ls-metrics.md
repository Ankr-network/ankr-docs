---
title: Liquid Staking Metrics API
id: staking-metrics
---


# Liquid Staking metrics API

You can get Ankr Liquid Staking metrics to integrate into your product dashboards and to use metrics like APY in yor product.

## Available metrics

The metrics you can obtain are:

* `serviceName` — name of the staked token, e.g. `eth`. 
* `totalStaked` — total tokens of a specific type, e.g. `eth`, that are currently staked.
* `stakers` — total number of stakers, i.e. unique blockchain addresses that have staked with Ankr and haven't withdrawn their stake yet.   
* `apy` — current annual percentage yield, i.e. the surplus a staker gets yearly from staking their tokens with Ankr.
* `totalStakedUsd` — total value of all staked tokens of a specific type, e.g. `eth`, expressed in USD.

## Get metrics

RESTful API endpoint that returns metrics that describe different properties of Ankr Liquid Staking.

### Host 

https://api.stkr.io

### Endpoint

`GET /v1alpha/metrics`

### Request

```
curl https://api.stkr.io/v1alpha/metrics
```

### Response

#### 200
```
{"services":[
{"serviceName":"eth","totalStaked":"55491.8","stakers":"4653","apy":"4.97","totalStakedUsd":"109650687"},
{"serviceName":"polygon","totalStaked":"784956.231630104","stakers":"480","apy":"8.821321624","totalStakedUsd":"510221.5506"},
{"serviceName":"avax","totalStaked":"11535.419443173","stakers":"950","apy":"8.127504167228558","totalStakedUsd":"328759.4541"},
{"serviceName":"bnb","totalStaked":"30053.87823877267","stakers":"4022","apy":"5.741214848742271","totalStakedUsd":"9881715.165"},
{"serviceName":"dot","totalStaked":"3253.3792788102","stakers":"64","apy":"13.0479764","totalStakedUsd":"32924.1983"},
{"serviceName":"ksm","totalStaked":"58.247912784107","stakers":"10","apy":"15.4233560","totalStakedUsd":"4782.15364"},
{"serviceName":"ftm","totalStaked":"123442.66208311735","stakers":"297","apy":"14.4010684","totalStakedUsd":"51129.95063"}
]}
```