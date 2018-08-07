## Introduction

Our API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). All of our URLs are predictable and resource-oriented using HTTP response codes to indicate API errors.

All requests **must** be made over the [HTTPS](https://en.wikipedia.org/wiki/HTTPS) protocol (requests initiated over HTTP are automatically upgraded to HTTPS). We use as many built-in HTTP features as possible such as Cookies, HTTP authentication and HTTP verbs so we can be understood by off-the-shelf HTTP clients.

We also support [cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), allowing you to interact securely with us from a client-side web application.

[JSON](http://www.json.org/) encoded in [UTF-8](https://en.wikipedia.org/wiki/UTF-8) is returned by all API responses, including errors, although our libraries convert responses to appropriate language-specific objects. We're currently supporting **3** platforms:

- [**Web/Node.js**](https://github.com/nomadeducation/nomadeducation-sdk-js)
- **iOS** (TODO link)
- **Android** (TODO link)
