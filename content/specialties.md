## Specialties

### Metadata on specialties

Retrieve metadata on specialties such as the current count.

```endpoint
HEAD /v2/specialties
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/specialties

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.specialties.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test specialty existence

Check if a specialty exists on our database.

```endpoint
HEAD /v2/specialties/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/specialties/325ae082-dba7-4cd1-adb3-ee78a039b36f
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.specialties.exists("325ae082-dba7-4cd1-adb3-ee78a039b36f");
    console.log(doesExists);
}
```

### Get one specialty

Get infos about a specific specialty.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Specialty identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/specialties/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/specialties/325ae082-dba7-4cd1-adb3-ee78a039b36f
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.specialties.get("325ae082-dba7-4cd1-adb3-ee78a039b36f");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "325ae082-dba7-4cd1-adb3-ee78a039b36f",
  "name": "E-Sport",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List specialties

Lists all specialties.

```endpoint
GET /v2/specialties
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/specialties
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const specialties = await client.specialties.list(offset, limit);
    console.log(specialties);
}
```

#### Example response

```json
[
  {
    "id": "325ae082-dba7-4cd1-adb3-ee78a039b36f",
    "name": "E-Sport",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "605d4a0b-86bb-4349-846b-25c005f7ff07",
    "name": "Pétanque",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create an specialty

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Specialty identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/specialties
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/specialties \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Golf"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.specialties.create({name: "Golf"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "a6a8f859-728e-4e67-80cc-a29a2e33e61a",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update an specialty

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/specialties/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/specialties/a6a8f859-728e-4e67-80cc-a29a2e33e61a \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Sieste"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.specialties.update("a6a8f859-728e-4e67-80cc-a29a2e33e61a", {
        name: "Sieste"
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

### Remove a specialty

Remove a specialty from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/specialties/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/specialties/a6a8f859-728e-4e67-80cc-a29a2e33e61a
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.specialties.remove("a6a8f859-728e-4e67-80cc-a29a2e33e61a");
    console.log(isRemoved);
}
```
