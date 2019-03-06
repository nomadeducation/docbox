## Degrees

### Metadata on degrees

Retrieve metadata on degrees such as the current count.

```endpoint
HEAD /v2/degrees
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/degrees

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.degrees.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test degree existence

Check if a degree exists on our database.

```endpoint
HEAD /v2/degrees/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/degrees/2c3b0507-3115-4f2b-b5f2-c1e23917f836
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.degrees.exists("2c3b0507-3115-4f2b-b5f2-c1e23917f836");
    console.log(doesExists);
}
```

### Get one degree

Get infos about a specific degree.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Degree identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/degrees/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/degrees/2c3b0507-3115-4f2b-b5f2-c1e23917f836
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.degrees.get("2c3b0507-3115-4f2b-b5f2-c1e23917f836");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "2c3b0507-3115-4f2b-b5f2-c1e23917f836",
  "name": "Bac S",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List degrees

Lists all degrees.

```endpoint
GET /v2/degrees
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/degrees
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const degrees = await client.degrees.list(offset, limit);
    console.log(degrees);
}
```

#### Example response

```json
[
  {
    "id": "2c3b0507-3115-4f2b-b5f2-c1e23917f836",
    "name": "Bac S",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "badcdba0-eb2f-415d-b615-060ed7b57f3d",
    "name": "Bac ES",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a degree

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
POST /v2/degrees
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/degrees \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Bac STMG"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.degrees.create({name: "Bac STMG"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "73a04fa0-772f-49ca-a5a5-38c6072dcfd9",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a degree

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/degrees/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/degrees/73a04fa0-772f-49ca-a5a5-38c6072dcfd9 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Bac STAV"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.degrees.update("73a04fa0-772f-49ca-a5a5-38c6072dcfd9", {
        name: "Bac STAV"
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

### Remove a degree

Remove a degree from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/degrees/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/degrees/73a04fa0-772f-49ca-a5a5-38c6072dcfd9
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.degrees.remove("73a04fa0-772f-49ca-a5a5-38c6072dcfd9");
    console.log(isRemoved);
}
```
