## Degree fields

### Metadata on degree fields

Retrieve metadata on degree fields such as the current count.

```endpoint
HEAD /v2/degreefields
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/degreefields

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.degreefields.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test the degree field existence

Check if a degree field exists on our database.

```endpoint
HEAD /v2/degreefields/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/degreefields/2c3b0507-3115-4f2b-b5f2-c1e23917f836
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.degreefields.exists("2c3b0507-3115-4f2b-b5f2-c1e23917f836");
    console.log(doesExists);
}
```

### Get one degree field

Get infos about a specific degree field.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Degree field identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/degreefields/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/degreefields/d7271454-bd60-4c0b-8332-b8f1826ffbc6
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.degreefields.get("d7271454-bd60-4c0b-8332-b8f1826ffbc6");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "d7271454-bd60-4c0b-8332-b8f1826ffbc6",
  "name": "Assistant de manutention",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List degree fields

Lists all degree fields.

```endpoint
GET /v2/degreefields
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/degreefields
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const degreeFields = await client.degreefields.list(offset, limit);
    console.log(degreeFields);
}
```

#### Example response

```json
[
  {
    "id": "d7271454-bd60-4c0b-8332-b8f1826ffbc6",
    "name": "Assistant de manutention",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "aa8ae78e-159e-489a-8fc5-058d73c108d7",
    "name": "Commerce national",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a degree field

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
POST /v2/degreefields
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/degreefields \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Chiffres"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.degreefields.create({name: "Chiffres"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "df99ae12-f44f-467b-94e5-e8a8ef398092",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a degree field

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/degreefields/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/degreefields/df99ae12-f44f-467b-94e5-e8a8ef398092 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Lettres"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.degreefields.update("df99ae12-f44f-467b-94e5-e8a8ef398092", {
        name: "Lettres"
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

### Remove a degree field

Remove a degree field from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/degreefields/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/degreefields/df99ae12-f44f-467b-94e5-e8a8ef398092
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.degreefields.remove("df99ae12-f44f-467b-94e5-e8a8ef398092");
    console.log(isRemoved);
}
```
