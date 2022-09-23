## HTTP Error Codes

| **HTTP Error Codes**     | **Cause**                                                        | **Solution**                                        |
| ------------------------ | ---------------------------------------------------------------- | --------------------------------------------------- |
| 400 - Bad Request        | Malformed request syntax                                         | Check your JSON-RPC body is correct.                    |
| 401 - Unauthorized       | Unauthorized authentication  of request               | Check your API key is correct                     |
| 403 - Forbidden          | You may have used an unauthorized URL  | Check your **allowed list** settings
| 405 - Method not Allowed | Request method is not supported for the requested resource. |   This is an unsupported method. |   
| 429 - Too many Requests  | Exceeded rate limit on concurrent number of requests per second or per day. | Upgrade to **Premium plan** |

## JSON RPC Method Error Codes

| **code**         | **message**      | **meaning**                                                                                                        |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| -32700           | Parse error      | <p>Invalid JSON was received by the server.</p><p>An error occurred on the server while parsing the JSON text.</p> |
| -32600           | Invalid Request  | The JSON sent is not a valid Request object.                                                                       |
| -32601           | Method not found | The method does not exist / is not available.                                                                      |
| -32602           | Invalid params   | Invalid method parameter(s).                                                                                       |
| -32603           | Internal error   | Internal JSON-RPC error.                                                                                           |
| -32000 to -32099 | Server error     | Reserved for implementation-defined server-errors.                                                                 |


## Websocket Error Codes

| **Status Code** | **Meaning**                                                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1001            | Indicates that an endpoint is "going away", such as a server going down or a browser having navigated away from a page.                                                                                                          |
| 1002            | Indicates that an endpoint is terminating the connection due to a protocol error.                                                                                                                                                |
| 1003            | <p>Indicates that an endpoint is terminating the connection</p><p>because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message).</p> |
| 1004            | Reserved                                                                                                                                                                                                                         |
| 1005            | Indicates that no status code was actually present.                                                                                                                                                                              |
| 1006            | <p>Indicates that the connection was closed abnormally, e.g., without sending or</p><p>receiving a Close control frame.</p>                                                                                                      |
| 1007            | <p>Indicates that an endpoint is terminating the connection</p><p>because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 data within a text message)</p>            |
| 1008            | <p>Indicates that an endpoint is terminating the connection</p><p>because it has received a message that violates its policy.</p>                                                                                                |
| 1009            | <p>Indicates that an endpoint is terminating the connection</p><p>because it has received a message that is too big for it to process.</p>                                                                                       |
| 1010            | Indicates that the client endpoint is terminating the connection as the server did not respond.                                                                                                                                  |
| 1011            | Indicates that a server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.                                                                              |