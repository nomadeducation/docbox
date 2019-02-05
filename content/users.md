## Users

### Metadata on users

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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.users.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test user existence

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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.users.exists("2a7d6c16-c7c3-49ce-a863-c5524df7fddd");
    console.log(doesExists);
}
```

### Get one user

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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const userInfos = await client.users.get("2a7d6c16-c7c3-49ce-a863-c5524df7fddd");
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
  "roles": {
    "registered": "de866ce2-277b-437b-aa2b-85068e03c7b7",
    "super-cool": "d0850090-7523-441f-8b77-b9c3567c5d66"
  },
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List users

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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const users = await client.users.list(offset, limit);
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
    "roles": {
      "registered": "de866ce2-277b-437b-aa2b-85068e03c7b7",
      "super-cool": "d0850090-7523-441f-8b77-b9c3567c5d66"
    },
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
    "roles": {
      "registered": "de866ce2-277b-437b-aa2b-85068e03c7b7"
    },
    "active": true,
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a user

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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newUser = await client.users.create({email: "joe.doe@example.com", password: "givemethekn1ght"});
    console.log(newUser);
}
```

#### Example response

```json
{
  "id": "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
  "token": "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4",
  "created_at": "2018-08-07T13:47:23.077Z",
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a user

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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.users.update(
        "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
        {username: "joe.doe"}
    );
    console.log(isUpdated);
}
```

#### Example response

```json
{
  "id": "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
  "created_at": "2018-08-07T13:47:23.077Z",
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Add roles to a user

Adding roles to a user will give him more access to the API. You can add multiple roles to a user in the same request.

Added roles can be rejected if one of the following condition is reached:
- the role identifier doesn't exist
- the user is "reserved", meaning that we can't change its roles via the API

```endpoint
PATCH /v2/users/:id/add-roles
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/users/9916c2ae-bdc1-46e7-8543-4934f8d8ebce/add-roles \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "e0ce12f9-e74e-4cd3-aafa-a7f88190364a",
  "da37f8cd-e5c6-4caa-bd76-90b09087063f"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.users.addRoles(
        "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
        [
            "e0ce12f9-e74e-4cd3-aafa-a7f88190364a",
            "da37f8cd-e5c6-4caa-bd76-90b09087063f"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
[
  "e0ce12f9-e74e-4cd3-aafa-a7f88190364a",
  "da37f8cd-e5c6-4caa-bd76-90b09087063f"
]
}
```

### Remove roles to a user

This will restrict the access to the API. You can remove multiple roles to a user in the same request.

Removed roles can be rejected if one of the following condition is reached:
- the role identifier doesn't exist
- the user is "reserved", meaning that we can't change its roles via the API

```endpoint
PATCH /v2/users/:id/remove-roles
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/users/9916c2ae-bdc1-46e7-8543-4934f8d8ebce/remove-roles \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "e0ce12f9-e74e-4cd3-aafa-a7f88190364a",
  "da37f8cd-e5c6-4caa-bd76-90b09087063f"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.users.removeRoles(
        "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
        [
            "e0ce12f9-e74e-4cd3-aafa-a7f88190364a",
            "da37f8cd-e5c6-4caa-bd76-90b09087063f"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
[
  "e0ce12f9-e74e-4cd3-aafa-a7f88190364a",
  "da37f8cd-e5c6-4caa-bd76-90b09087063f"
]
```

### Enable a user

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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isEnabled = await client.users.enable("9916c2ae-bdc1-46e7-8543-4934f8d8ebce");
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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isDisabled = await client.users.disable("9916c2ae-bdc1-46e7-8543-4934f8d8ebce");
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
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.users.remove("9916c2ae-bdc1-46e7-8543-4934f8d8ebce");
    console.log(isRemoved);
}
```
