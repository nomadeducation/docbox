## Users

Most of these routes are reserved to admin purposes only!

### Metadata on users

_You'll need to have the `identity.users.list` permission._

Retrieve metadata on users such as the current count.

```endpoint
HEAD /v2/users
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/users

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const {maxItemsPerPage, count} = client.user.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test user existence

_You'll need to have the `identity.users.get` permission._

Check if a user exists on our database.

```endpoint
HEAD /v2/users/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/users/2a7d6c16-c7c3-49ce-a863-c5524df7fddd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const doesExists = await client.user.exists("2a7d6c16-c7c3-49ce-a863-c5524df7fddd");
    console.log(doesExists);
}
```

### Get one user

_You'll need to have the `identity.users.get` permission._

Get infos about a specific user.

```endpoint
GET /v2/users/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/users/2a7d6c16-c7c3-49ce-a863-c5524df7fddd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const userInfos = await client.user.get("2a7d6c16-c7c3-49ce-a863-c5524df7fddd");
    console.log(userInfos);
}
```

#### Example response

```json
{
  "id": "2a7d6c16-c7c3-49ce-a863-c5524df7fddd",
  "first_name": "jack",
  "last_name": "sparrow",
  "username": "jacky",
  "email": "jack@black-pearl.com",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List users

_You'll need to have the `identity.users.list` permission._

Lists all users.

```endpoint
GET /v2/users
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/users
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const users = await client.user.list(offset, limit);
    console.log(users);
}
```

#### Example response

```json
[
  {
    "id": "d4ea00d4-0488-497e-a6a1-611c70d39c41",
    "first_name": "Joe",
    "last_name": "Smith",
    "username": "jsmith",
    "email": "joe.smith@acme.com",
    "roles": [4, 2],
    "active": true,
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "cb49bc80-fb80-40f9-9025-194a5be86307",
    "first_name": "Adam",
    "last_name": "Oldman",
    "username": "adam.old",
    "email": "adold@acme.com",
    "roles": [666],
    "active": true,
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a user

_You'll need to have the `identity.users.save` permission._

Creates a new user.

```endpoint
POST /v2/users
```

Property | Type | Description
---|---|---
`email` | string | (**required**) must be a valid email
`password` | string | (**required**) must contains at least **6** characters
`username` | string | if not set, this will contain the same value as the email
`first_name` | string | can contains at most **50** characters
`last_name` | string | can contains at most **50** characters
`roles` | array of integer | contains an array of role ids (only the "registered" role id by default)

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/users \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "email": "joe.doe@example.com",
  "password": "givemethekn1ght"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const newUser = await client.user.create({email: "joe.doe@example.com", password: "givemethekn1ght"});
    console.log(newUser);
}
```

#### Example response

```json
{
  "id": "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
  "first_name": "",
  "last_name": "",
  "email": "john.doe@example.com",
  "username": "john.doe@example.com",
  "created_at": "2018-08-07T13:47:23.077Z",
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a user

_You'll need to have the `identity.users.save` permission._

Update a user.

```endpoint
PATCH /v2/users/:id
```

Property | Type | Description
---|---|---
`email` | string | must be a valid email
`username` | string | if not set, this will contain the same value as the email
`first_name` | string | can contains at most **50** characters
`last_name` | string | can contains at most **50** characters

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/users/9916c2ae-bdc1-46e7-8543-4934f8d8ebce \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "username": "joe.doe"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const isUpdated = await client.user.update({
        id: "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
        username: "joe.doe"
    });
    console.log(isUpdated);
}
```

#### Example response

```json
{
  "id": "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
  "first_name": "",
  "last_name": "",
  "email": "john.doe@example.com",
  "username": "john.doe",
  "created_at": "2018-08-07T13:47:23.077Z",
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Enable a user

_You'll need to have the `identity.users.save` permission._

Enabling a user will allow him to have access the API (_if he was previously disabled_).

```endpoint
PATCH /v2/users/:id/enable
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/users/9916c2ae-bdc1-46e7-8543-4934f8d8ebce/enable
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const isEnabled = await client.user.enable("9916c2ae-bdc1-46e7-8543-4934f8d8ebce");
    console.log(isEnabled);
}
```

#### Example response

```json
{
  "active": true,
  "disabled_at": null
}
```

### Disable a user

_You'll need to have the `identity.users.save` permission._

Disabling a user will prevent him from having access to the API. Besides, we won't be able to have access to its personal data.

This is the **recommended** way to delete a user.

```endpoint
PATCH /v2/users/:id/disable
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/users/9916c2ae-bdc1-46e7-8543-4934f8d8ebce/disable
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const isDisabled = await client.user.disable("9916c2ae-bdc1-46e7-8543-4934f8d8ebce");
    console.log(isDisabled);
}
```

#### Example response

```json
{
  "active": false,
  "disabled_at": "2018-09-08T13:47:23.077Z"
}
```

### Remove a user

_You'll need to have the `identity.users.delete` permission._

Remove a user from our database. This is **non-recoverable** action!

```endpoint
DELETE /v2/users/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/users/9916c2ae-bdc1-46e7-8543-4934f8d8ebce
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "d6921bc91cd2470e6a265974d4d9c47a"});

async function fn () {
    const isRemoved = await client.user.remove("9916c2ae-bdc1-46e7-8543-4934f8d8ebce");
    console.log(isRemoved);
}
```
