## Pagination

All top-level API resources have support for listing many objects in one request. We use standardized headers to handle pagination:

Header | Description | Example
---|--- | ---
`Range` | this [header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) **must** be set for pagination requests. | `Range: items=0-4`
`Content-Range` | The response always contains this [header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) to indicate the selected items range returned as well as the total amount of objects for this resource. | `Content-Range: items 0-4/10`

We prohibit the usage of `*` in the `Range` header (e.g. `Range: items=0-*`) as we want users to be explicit about the requested range. The maximum number of objects that can be requested in one request is **100**.

In practice, we'll recommend that you'll first use a `HEAD` request to retrieve the total number of objects for the resource at that time.

#### Example request

```curl
# first get the total number of objects
$ curl -X HEAD https://api.nomadeducation.com/v2/{resource}

HTTP/1.1 200 OK
Content-Range: items */1337

# then you can paginate all over the resource
$ curl -H "Range: items=0-99" https://api.nomadeducation.com/v2/{resource}

HTTP/1.1 206 Partial Content
Content-Range: items 0-99/1337
...
```
