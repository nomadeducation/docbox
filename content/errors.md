## Errors

We use conventional HTTP response codes to indicate the success or failure of an API request.

In general:
- Codes in the 2xx range indicate success.
- Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a parameter was of the wrong type, etc.).
- Codes in the 5xx range indicate an error with our servers (_we hope these are rare_).

Some 4xx errors that could be handled programmatically return a JSON payload that include the following property:

Property | Type | Description
---|---|---
`code` | string | (**required**) a unique identifier to better detect what kind of errors has been returned
`message` | string | (**required**) a brief description of what went wrong while processing the request
`details` | string | further information to better debug
