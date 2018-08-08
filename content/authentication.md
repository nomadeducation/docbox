## Authentication

We provide **2** ways for our users to identify themselves into our system.

First, via a Cookie session, given after you've logged into the API. This method is reserved for users that are using our clients (web & mobile apps). By default, sessions last no more than **a day** but can be extended to up to **5** days with the "extended session" option.

The other way is by using an API key given as a Bearer token, e.g. `-H "Authorization: Bearer c0ffee1b6082cd97fcd43de4ceea9bae"`. This method is specific to third party vendors as there's no expiration date but be careful as your keys can carry many privileges, so be sure to keep them **secure**! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

All API requests without authentication will return either a "Not Found" text message or will simply fail (4xx errors).
