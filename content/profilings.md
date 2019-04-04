## Profilings

### Metadata on profilings

Retrieve metadata on profilings such as the current count.

```endpoint
HEAD /v2/profilings
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/profilings

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.profilings.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test profiling existence

Check if a profiling exists on our database.

```endpoint
HEAD /v2/profilings/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/profilings/06a4bd27-23ec-4a9b-97ef-9846746596b7
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.profilings.exists("c9810fb5-0a0b-40c7-97d6-d4699caf75cf");
    console.log(doesExists);
}
```

### Get one profiling

Get infos about a specific profiling.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Profiling identifier
`name` | string |
`title` | string | Should be the same value as `name`
`type` | string |
`schema` | array of objects | Contains the payload
`publish_state` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/profilings/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/profilings/c9810fb5-0a0b-40c7-97d6-d4699caf75cf
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.profilings.get("c9810fb5-0a0b-40c7-97d6-d4699caf75cf");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "06a4bd27-23ec-4a9b-97ef-9846746596b7",
  "name": "New Profiling App",
  "title": "New Profiling App",
  "type": "registration",
  "schema": "[]",
  "publish_state": "draft",
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List profilings

Lists all profilings.

```endpoint
GET /v2/profilings
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/profilings
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const profilings = await client.profilings.list(offset, limit);
    console.log(profilings);
}
```

#### Example response

```json
[
  {
    "id": "c9810fb5-0a0b-40c7-97d6-d4699caf75cf",
    "name": "New Profiling App",
    "title": "New Profiling App",
    "type": "registration",
    "schema": "[]",
    "publish_state": "draft",
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "134ca817-650a-4d95-bc1b-142fa4a614de",
    "name": "Old Profiling App",
    "title": "Old Profiling App",
    "type": "registration",
    "schema": "[]",
    "publish_state": "published",
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  }
]
```

### Create a profiling

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character
`title` | string | Should be the same value as `name`
`type` | string | Either "registration" or "situationnal"
`schema` | array of objects |
`publish_state` | string | Either "draft" or "published"

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Profiling identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/profilings
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/profilings \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Profiling De La Mort"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.profilings.create({
        name: "Profiling De La Mort"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "65d9bf51-905b-4bc9-8622-2c27d694303c",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a profiling

**Request**

Property | Type | Description
---|---|---
`name` | string | must contains at least **1** character
`title` | string |
`type` | string | Either "registration" or "situationnal"
`schema` | array of objects |
`publish_state` | string | Either "draft" or "published"

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/profilings/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/profilings/65d9bf51-905b-4bc9-8622-2c27d694303c \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Superbe profiling"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.profilings.update("65d9bf51-905b-4bc9-8622-2c27d694303c", {
        name: "Superbe profiling"
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

### Remove a profiling

Remove a profiling from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/profilings/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/profilings/65d9bf51-905b-4bc9-8622-2c27d694303c
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.profilings.remove("65d9bf51-905b-4bc9-8622-2c27d694303c");
    console.log(isRemoved);
}
```
