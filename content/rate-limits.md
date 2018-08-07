## Rate limits

We've set rate limits that cap the number of requests that can be made against the endpoint. If you exceed a rate limit, your request will be throttled and you will receive HTTP 429 Too Many Requests responses from the API.

Header | Description
---|---
`X-Ratelimit-Limit` | Maximum number of requests you may make in the current interval before reaching the limit.
`X-Ratelimit-Remaining` | Number of requests still available in the timeframe.
`X-Ratelimit-Reset` | Unix timestamp of when the current interval will end and the ratelimit counter is reset.

Here are the specific limit depending on the user priviledges:
- unregistered: **1** req/sec
- member: **10** req/sec
- admin: **100** req/sec
