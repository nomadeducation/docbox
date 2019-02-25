## Authentication

All requests without authentication will fail. Therefore we provide **2** ways for our users to identify themselves into our system.

### Session

First, via a Cookie session, given after you've logged into the API. This method is reserved for users that are using our clients (web & mobile apps).

By default, sessions last no more than **a day** but can be extended to up to **5** days with the "extended session" option.

**Request**

Property | Type | Description
---|---|---
`username` | string | (**required**) must contains at least **3** characters
`password` | string | (**required**) must contains at least **6** characters
`extended_session` | boolean | if `true` this will extend your session lifetime

**Response**

Property | Type | Description
---|---|---
`message` | string | A message indicating that you're now connected!

```endpoint
POST /v2/auth/login
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/auth/login \
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
curl -X GET -H "Authorization: Bearer 4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4" https://api.nomadeducation.com/v2/users
```

```javascript
const Nomad = require("nomadeducation");

const client = new Nomad({
    api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"
});
```

### Retrieve your own user infos

Once logged in, you can still retrieve your infos by using the introspective `me` route.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Your user identifier
`token` | string | This token can be used to make requests without explicit authentication
`first_name` | string |
`last_name` | string |
`username` | string | By default, if you don't give a username, we'll use your email
`email` | string |
`roles` | array of objects (described below) | A list of roles given to your user (see properties below)
`roles.id` | string (UUID) | The role identifier
`roles.name` | string | The role name
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
POST /v2/auth/me
```

#### Example request

```curl
curl -X GET -H "Authorization: Bearer 4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4" https://api.nomadeducation.com/v2/auth/me
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
  "token": "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4",
  "first_name": "joe",
  "last_name": "doe",
  "username": "joe.doe",
  "email": "joe.doe@example.com",
  "roles": [
    {
      "id": "de866ce2-277b-437b-aa2b-85068e03c7b7",
      "name": "registered"
    },
    {
      "id": "d0850090-7523-441f-8b77-b9c3567c5d66",
      "name": "super-cool"
    }
  ],
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```
