# Most Common HTTP Status Codes

| Code | Name                  | Category     | Meaning                                                                 |
|------|-----------------------|--------------|-------------------------------------------------------------------------|
| 200  | OK                    | Success      | Request succeeded and the response contains the requested data.        |
| 201  | Created               | Success      | Request succeeded and a new resource was created.                      |
| 204  | No Content            | Success      | Request succeeded but there is no response body.                       |
| 301  | Moved Permanently     | Redirection  | Resource has permanently moved to a new URL.                           |
| 302  | Found                 | Redirection  | Resource temporarily located at a different URL.                       |
| 304  | Not Modified          | Redirection  | Cached version can be used; resource has not changed.                  |
| 400  | Bad Request           | Client Error | Server cannot process the request due to client error.                 |
| 401  | Unauthorized          | Client Error | Authentication is required or has failed.                              |
| 403  | Forbidden             | Client Error | Server understood the request but refuses to authorize it.             |
| 404  | Not Found             | Client Error | Requested resource could not be found.                                 |
| 500  | Internal Server Error | Server Error | Generic server error occurred.                                         |
| 503  | Service Unavailable   | Server Error | Server is temporarily unavailable (maintenance or overload).           |


# Common but Less Frequent HTTP Status Codes

| Code | Name                   | Category        | Meaning                                                                 |
|------|------------------------|-----------------|-------------------------------------------------------------------------|
| 100  | Continue               | Informational   | Request headers received; client should continue sending the body.     |
| 101  | Switching Protocols    | Informational   | Server is switching protocols as requested by the client.              |
| 202  | Accepted               | Success         | Request accepted for processing but not yet completed.                 |
| 307  | Temporary Redirect     | Redirection     | Temporary redirect; request method must remain the same.               |
| 308  | Permanent Redirect     | Redirection     | Permanent redirect; request method must remain the same.               |
| 405  | Method Not Allowed     | Client Error    | HTTP method is not supported for the requested resource.               |
| 408  | Request Timeout        | Client Error    | Server timed out waiting for the request.                              |
| 409  | Conflict               | Client Error    | Request conflicts with the current state of the resource.              |
| 410  | Gone                   | Client Error    | Resource has been permanently removed.                                 |
| 413  | Payload Too Large      | Client Error    | Request body is larger than the server allows.                         |
| 415  | Unsupported Media Type | Client Error    | Server does not support the request’s media format.                    |
| 422  | Unprocessable Content  | Client Error    | Request syntax is correct but semantic errors prevent processing.      |
| 429  | Too Many Requests      | Client Error    | Client has sent too many requests in a given time.                     |
| 501  | Not Implemented        | Server Error    | Server does not support the requested functionality.                   |
| 502  | Bad Gateway            | Server Error    | Server received an invalid response from an upstream server.           |
| 504  | Gateway Timeout        | Server Error    | Upstream server failed to respond in time.                             |