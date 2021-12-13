---
title: Troubleshooting
id: troubleshooting
---

Serverless architecture - through cloudflare - to manage requests

## 403 Forbidden
- Potentially a network issue at user end.
- Some methods are not available.

## 408 Request Timeout
- Connection between client and server is slow. Please retry.

## 499 Client Closed Request 
- All the 4xx errors - maybe a parameter was inaccurate, maybe connection is slow

## 503 Errors
- If you get an Error 503: Service Temporarily Unavailable with "Cloudflare". This means you are hitting a connection limit.
- It could also mean that rate limiting is taking place. 

