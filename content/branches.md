## Branches

### Metadata on branches

Retrieve metadata on branches such as the current count.

```endpoint
HEAD /v2/branches
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/branches

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.branches.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test branch existence

Check if a branch exists on our database.

```endpoint
HEAD /v2/branches/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/branches/2a7d6c16-c7c3-49ce-a863-c5524df7fddd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.branches.exists("2a7d6c16-c7c3-49ce-a863-c5524df7fddd");
    console.log(doesExists);
}
```

### Get one branch

Get infos about a specific branch.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Branch identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/branches/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/branches/2a7d6c16-c7c3-49ce-a863-c5524df7fddd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.branches.get("2a7d6c16-c7c3-49ce-a863-c5524df7fddd");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "2a7d6c16-c7c3-49ce-a863-c5524df7fddd",
  "name": "Git branching is the best",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List branches

Lists all branches.

```endpoint
GET /v2/branches
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/branches
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const users = await client.branches.list(offset, limit);
    console.log(users);
}
```

#### Example response

```json
[
  {
    "id": "d4ea00d4-0488-497e-a6a1-611c70d39c41",
    "name": "S",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "cb49bc80-fb80-40f9-9025-194a5be86307",
    "name": "ES",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a branch

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Branch identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/branches
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/branches \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "STMG"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.branches.create({name: "STMG"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a branch

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/branches/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/branches/9916c2ae-bdc1-46e7-8543-4934f8d8ebce \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "username": "STAV"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.branches.update("9916c2ae-bdc1-46e7-8543-4934f8d8ebce", {
        name: "STAV"
    });
    console.log(isUpdated);
}
```

#### Example response

```json
{
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Remove a branch

Remove a branch from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/branches/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/branches/9916c2ae-bdc1-46e7-8543-4934f8d8ebce
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.branches.remove("9916c2ae-bdc1-46e7-8543-4934f8d8ebce");
    console.log(isRemoved);
}
```
