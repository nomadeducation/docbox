## Roles

### Metadata on roles

Retrieve metadata on roles such as the current count.

```endpoint
HEAD /v2/roles
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/roles

HTTP/1.1 200 OK
Content-Range: items */42
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.roles.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test role existence

Check if a role exists on our database.

```endpoint
HEAD /v2/roles/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/roles/7c8add14-a9b9-4362-8cca-a0b815645338
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.roles.exists("7c8add14-a9b9-4362-8cca-a0b815645338");
    console.log(doesExists);
}
```

### Get one role

Get infos about a specific role.

```endpoint
GET /v2/roles/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/roles/69178024-a990-464f-8989-910781d19ee5
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const role = await client.roles.get("69178024-a990-464f-8989-910781d19ee5");
    console.log(role);
}
```

#### Example response

```json
{
  "id": "69178024-a990-464f-8989-910781d19ee5",
  "name": "lazy role",
  "description": "There's not much i can do with it!",
  "created_at": "2018-08-10T13:37:45.903Z",
  "updated_at": "2018-08-10T13:37:45.903Z"
}
```

### Get permissions from one role

Get the permission list of a specific role.

```endpoint
GET /v2/roles/:id/permissions
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/roles/69178024-a990-464f-8989-910781d19ee5/permissions
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const permissions = await client.roles.listPermissions("69178024-a990-464f-8989-910781d19ee5");
    console.log(permissions);
}
```

#### Example response

```json
[
  {
    "id": "36ed52bd-673f-4b81-ba91-61f55af04bc5",
    "name": "identity.users.get",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "6fe8475b-a244-46dd-9b60-df6c33457ec3",
    "name": "identity.users.list",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  }
]

```

### List roles

Lists all roles.

```endpoint
GET /v2/roles
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/roles
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 0;
    const limit = 2;
    const roles = await client.roles.list(offset, limit);
    console.log(roles);
}
```

#### Example response

```json
[
  {
    "id": "69178024-a990-464f-8989-910781d19ee5",
    "name": "lazy role",
    "description": "There's not much i can do with it!",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "6d745350-67ef-4e8a-8e67-87f4c370671e",
    "name": "dummy role",
    "description": "It sure doesn't help...",
    "created_at": "2018-08-11T23:37:40.000Z",
    "updated_at": "2018-08-11T23:37:40.000Z"
  }
]
```

### Create a role

Creates a new role.

```endpoint
POST /v2/roles
```

Property | Type | Description
---|---|---
`name` | string | (**required**) can contains up to **500** characters
`description` | string | paragraphs describing the purpose of the role

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/roles \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "useless role",
  "description": "This will maybe give someone a purpose...\nBut i highly doubt that someone will read it!"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newRole = await client.roles.create({name: "useless role", description: "did i heard something...?"});
    console.log(newRole);
}
```

#### Example response

```json
{
  "id": "4f0b7c26-0729-42be-8f6b-4cf7384170db",
  "created_at": "2018-08-07T13:47:23.077Z",
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a role

Update a role.

```endpoint
PATCH /v2/roles/:id
```

Property | Type | Description
---|---|---
`name` | string | can contains up to **500** characters
`description` | string | paragraphs describing the purpose of the role

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/roles/4f0b7c26-0729-42be-8f6b-4cf7384170db \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "not so useless"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.roles.update({
        id: "4f0b7c26-0729-42be-8f6b-4cf7384170db",
        name: "not so useless"
    });
    console.log(isUpdated);
}
```

#### Example response

```json
{
  "id": "4f0b7c26-0729-42be-8f6b-4cf7384170db",
  "created_at": "2018-08-07T13:47:23.077Z",
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Add permissions to a role

Adding permissions to a role will allow users to gain more access to the API. You can add multiple permissions to a role in the same request.

Added permissions can be rejected if one of the following condition is reached:
- the permission identifier doesn't exist
- the role is "reserved", meaning that we can't change its permissions via the API

```endpoint
PATCH /v2/roles/:id/add-permissions
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/roles/4f0b7c26-0729-42be-8f6b-4cf7384170db/add-permissions \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "388ac2b7-e737-4124-8125-d4a2d8db1585",
  "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.roles.addPermissions(
        "4f0b7c26-0729-42be-8f6b-4cf7384170db",
        [
            "388ac2b7-e737-4124-8125-d4a2d8db1585",
            "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
{
  "accepted": [
    "388ac2b7-e737-4124-8125-d4a2d8db1585",
    "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
  ],
  "rejected": []
}
```

### Remove permissions to a role

This will restrict users which have the role from accessing the API. You can add remove multiple permissions to a role in the same request.

Removed permissions can be rejected if one of the following condition is reached:
- the permission identifier doesn't exist
- the role is "reserved", meaning that we can't change its permissions via the API

```endpoint
PATCH /v2/roles/:id/remove-permissions
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/roles/4f0b7c26-0729-42be-8f6b-4cf7384170db/remove-permissions \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "388ac2b7-e737-4124-8125-d4a2d8db1585",
  "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.roles.removePermissions(
        "4f0b7c26-0729-42be-8f6b-4cf7384170db",
        [
            "388ac2b7-e737-4124-8125-d4a2d8db1585",
            "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
{
  "accepted": [
    "388ac2b7-e737-4124-8125-d4a2d8db1585",
    "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
  ],
  "rejected": []
}
```

### Remove a role

Remove a role from our database. This is **non-recoverable** action!

```endpoint
DELETE /v2/roles/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/roles/4f0b7c26-0729-42be-8f6b-4cf7384170db
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.roles.remove("4f0b7c26-0729-42be-8f6b-4cf7384170db");
    console.log(isRemoved);
}
```
