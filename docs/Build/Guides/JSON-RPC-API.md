---
title: What is JSON RPC API?
id: rpcapi
---

# Understanding JSON RPC API

JSON-RPC API is bridge that allows dApps to connect to nodes.

dApps need to interact with a blockchain to read blockchain data and/or send transactions to the network),

For this purpose web 3.0 clients implement a JSON-RPC specification with a uniform set of methods that applications can rely on.

## What is JSON RPC API?

JSON RPC API is a stateless, light-weight remote procedure call (RPC) protocol.

Primarily this specification defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over HTTP, or in many various message passing environments. It uses JSON (RFC 4627) as data format.

## RPC Calls

An RPC call is represented by sending a Request object to a Server.

### THE REQUEST OBJECT

The Request object has the following members:

`jsonrpc`: A String specifying the version of the JSON-RPC protocol. MUST be exactly “2.0”.

`method`: A String containing the name of the method to be invoked. Method names that begin with the word rpc followed by a period character (U+002E or ASCII 46) are reserved for rpc-internal methods and extensions and MUST NOT be used for anything else.

`params`: A Structured value that holds the parameter values to be used during the invocation of the method. This member MAY be omitted.

`id`: An identifier established by the Client that MUST contain a String, Number, or NULL value if included. If it is not included it is assumed to be a notification. The value SHOULD normally not be Null and Numbers SHOULD NOT contain fractional parts.

When an RPC call is made, the Server **MUST** reply with a Response object.

### THE RESPONSE OBJECT

The Response object has the following members:

`jsonrpc`: A String specifying the version of the JSON-RPC protocol. MUST be exactly “2.0”.

`result`: This member is REQUIRED on success. This member MUST NOT exist if there was an error invoking the method. The value of this member is determined by the method invoked on the Server.

`error`: This member is REQUIRED on error. This member MUST NOT exist if there was no error triggered during invocation. The value for this member MUST be an Object including code field and message field.

`id`: This member is REQUIRED. It MUST be the same as the value of the id member in the Request Object. If there was an error in detecting the id in the Request object (e.g. Parse error/Invalid Request), it MUST be Null.

