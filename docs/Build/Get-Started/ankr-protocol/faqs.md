---
description: FAQs about Ankr Protocol
---

# FAQs

### Q. How do I resolve an error?

In general,

**50x Errors** are server errors. In the first instance, retry. If the problem persists, raise a ticket including the following details:

1. Time and timezone the issue occurred.
2. URL that resulted in the HTTP 502 or 504 response (for example: _https://www.example.com/images/icons/image1.png_)
3. Output from browsing to _www.example.com/cdn-cgi/trace_ (replace _www.example.com_ with the domain and host name that caused the HTTP 502 or 504 error)

**429 Errors** are connection errors. RPC connections are not rate-limited but there may be connection errors due to the volume of network traffic. If these are recurring, you may consider upgrading to Ankr Premium.

Websocket connections are subject to a maximum of 15.

**400-428 Errors** are commonly due to end-user formatting errors. Check the composition of your requests. See [sample requests (external)](https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest#intro) for assistance.


