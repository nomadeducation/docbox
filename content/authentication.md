## Authentication

All requests without authentication will fail. Therefore we provide **2** ways for our users to identify themselves into our system.

### Session

First, via a Cookie session, given after you've logged into the API. This method is reserved for users that are using our clients (web & mobile apps).

By default, sessions last no more than **a day** but can be extended to up to **5** days with the "extended session" option.

```endpoint
POST /v2/login
```

Property | Type | Description
---|---|---
`username` | string | (**required**) must contains at least **3** characters
`password` | string | (**required**) must contains at least **6** characters
`extended_session` | boolean | if `true` this will extend your session lifetime

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/login \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "username": "john.doe",
  "password": "givemethekn1ght"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad();

async function fn () {
    const extendedSession = true;
    await client.login("john.doe", "givemethekn1ght", extendedSession);
}
```

### API key

The other way is by using an API key given as a custom [Bearer token](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#Authentication_schemes). This method is specific to third party vendors as you're don't need to login and there's no expiration date. Make sure to keep them **secure** as your keys can carry many priviledges!

Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

#### Example request

```curl
curl -X GET -H "Authorization: Bearer c0ffee1b6082cd97fcd43de4ceea9bae" https://api.nomadeducation.com/v2/users
```

```javascript
const Nomad = require("nomadeducation");

const client = new Nomad({
    api_key: "d6921bc91cd2470e6a265974d4d9c47a"
});
```

### Retrieve your own user infos

Once logged in, you can still retrieve your infos by using the introspective `me` route.

```endpoint
POST /v2/me
```

#### Example request

```curl
curl -X GET -H "Authorization: Bearer c0ffee1b6082cd97fcd43de4ceea9bae" https://api.nomadeducation.com/v2/me
```

```javascript
async function fn () {
    // ...once logged in
    const ownUser = await client.me();
    console.log(ownUser);
}
```

#### Example response

```json
{
  "id": "676a14fc-5b67-4462-a1e5-dd4e3208b593",
  "first_name": "joe",
  "last_name": "doe",
  "username": "joe.doe",
  "email": "joe.doe@example.com",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```
