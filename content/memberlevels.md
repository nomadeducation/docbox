## Member levels

TODO

### Metadata on member levels

Retrieve metadata on member levels such as the current count.

```endpoint
HEAD /v2/memberlevels
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/memberlevels

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.memberlevels.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test member level existence

Check if a member level exists on our database.

```endpoint
HEAD /v2/memberlevels/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/memberlevels/927032e4-88bd-45ac-9e7f-c065b12a98ca
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.memberlevels.exists("927032e4-88bd-45ac-9e7f-c065b12a98ca");
    console.log(doesExists);
}
```

### Get one member level

Get infos about a specific member level.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Exam identifier
`name` | string |
`number` | integer | Gives the order between levels (e.g. "bronze" < "argent" < "or")
`minimum_points` | integer | The threshold that gives access to this level
`sync_forced` | boolean | Tells if the content must be re-synchronized
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/memberlevels/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/memberlevels/5281a508-601b-4fb4-96c3-94f5608a6257
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.memberlevels.get("927032e4-88bd-45ac-9e7f-c065b12a98ca");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "927032e4-88bd-45ac-9e7f-c065b12a98ca",
  "name": "Bronze",
  "number": 0,
  "minimum_points": 10,
  "sync_forced": true,
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List member levels

Lists all member levels.

```endpoint
GET /v2/memberlevels
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/memberlevels
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const exams = await client.memberlevels.list(offset, limit);
    console.log(exams);
}
```

#### Example response

```json
[
  {
    "id": "927032e4-88bd-45ac-9e7f-c065b12a98ca",
    "name": "Bronze",
    "number": 0,
    "minimum_points": 10,
    "sync_forced": true,
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "3409cff1-0593-479e-a4ef-4eb3da832f6c",
    "name": "Argent",
    "number": 1,
    "minimum_points": 100,
    "sync_forced": false,
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "371308a0-0fc6-49c1-a00a-5b935b16e570",
    "name": "Or",
    "number": 2,
    "minimum_points": 1000,
    "sync_forced": false,
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a member level

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character
`number` | integer | (**required**) Must be a **positive** number
`minimum_points` | integer | (**required**) Must be a **positive** number
`sync_forced` | boolean | (default: `true`)

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Exam identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/memberlevels
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/memberlevels \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Saiyan",
  "number": 9,
  "minimum_points": 9001
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.memberlevels.create({
        name: "Saiyan",
        number: 9,
        minimum_points: 9001
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "4b42f7c0-1c33-4ba2-bf5f-554561989abd",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a member level

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character
`number` | integer | (**required**) Must be a **positive** number
`minimum_points` | integer | (**required**) Must be a **positive** number
`sync_forced` | boolean | (default: `true`)

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/memberlevels/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/memberlevels/4b42f7c0-1c33-4ba2-bf5f-554561989abd \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Super Saiyan"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.memberlevels.update("4b42f7c0-1c33-4ba2-bf5f-554561989abd", {
        name: "Super Saiyan"
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

### Remove a member level

Remove a member level from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/memberlevels/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/memberlevels/4b42f7c0-1c33-4ba2-bf5f-554561989abd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.memberlevels.remove("4b42f7c0-1c33-4ba2-bf5f-554561989abd");
    console.log(isRemoved);
}
```
