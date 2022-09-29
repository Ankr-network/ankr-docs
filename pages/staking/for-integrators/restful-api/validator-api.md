import { Callout } from "nextra-theme-docs";

# Validator API
You can get payout data for Ankr Validators.

## Ankr validators on Avalanche and Fantom

### Get unstake data from a validator
RESTful API endpoint that returns amount of pending unstakes to be release from a validator and timestamp when the amount is unlocked at a validator.

#### Host 
https://api.stkr.io

#### Endpoint
`GET /v1alpha/validation/end`

#### Params
`amount` (uint256, required) — amount of assets pending for unstake to be paid out from validators via Ankr Liquid Staking smart contracts. 

<Callout>
If the amount value passed in the request is higher than the maximum amount to be available at a validator, the returned value is equal to the maximum amount.

If the amount value passed in the request is higher than the maximum amount to be available at a validator, the returned value is equal only to the requested amount. Make sure you use the pending unstake value relevant to your unstake.  
</Callout>

#### Request
```
curl https://api.dev.stkr.io/v1alpha/validation/end?amount=24
```

#### Response data
* `validationEndTime` (Unix timestamp) — time the assets are unlocked at a validator. 
* `amountAvailable` (float64) — amount of unlocked assets pending for unstake available at a validator.

#### Response
##### 200
```
{
"avax": {
        "validationEndTime":1665104220,
        "amountAvailable":"24"
       },
"ftm":{
        "validationEndTime":1664461118,
        "amountAvailable":"24"
      }
}
```
