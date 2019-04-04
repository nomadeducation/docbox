## Optional Subjects

### Metadata on optionalsubjects

Retrieve metadata on optionalsubjects such as the current count.

```endpoint
HEAD /v2/optionalsubjects
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/optionalsubjects

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.optionalsubjects.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test optional subject existence

Check if a optional subject exists on our database.

```endpoint
HEAD /v2/optionalsubjects/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/optionalsubjects/2c5e7ba3-f665-48bc-8134-49383a263c25
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.optionalsubjects.exists("2c5e7ba3-f665-48bc-8134-49383a263c25");
    console.log(doesExists);
}
```

### Get one optional subject

Get infos about a specific optional subject.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | OptionalSubject identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/optionalsubjects/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/optionalsubjects/2c5e7ba3-f665-48bc-8134-49383a263c25
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.optionalsubjects.get("2c5e7ba3-f665-48bc-8134-49383a263c25");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "2c5e7ba3-f665-48bc-8134-49383a263c25",
  "name": "Histoire de l'informatique",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List optionalsubjects

Lists all optionalsubjects.

```endpoint
GET /v2/optionalsubjects
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/optionalsubjects
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const optionalsubjects = await client.optionalsubjects.list(offset, limit);
    console.log(optionalsubjects);
}
```

#### Example response

```json
[
  {
    "id": "2c5e7ba3-f665-48bc-8134-49383a263c25",
    "name": "Histoire de l'informatique",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "0b656bbb-85f6-42d2-bc6a-8fa950bc71ef",
    "name": "Géopolitique",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create an optional subject

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | OptionalSubject identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/optionalsubjects
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/optionalsubjects \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Conscience critique"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.optionalsubjects.create({name: "Conscience critique"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "145dea33-fc43-4fb6-aaf3-3bb833fb9a77",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update an optional subject

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/optionalsubjects/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/optionalsubjects/145dea33-fc43-4fb6-aaf3-3bb833fb9a77 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Arts Zététiques"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.optionalsubjects.update("145dea33-fc43-4fb6-aaf3-3bb833fb9a77", {
        name: "Arts Zététiques"
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

### Remove a optional subject

Remove a optional subject from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/optionalsubjects/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/optionalsubjects/145dea33-fc43-4fb6-aaf3-3bb833fb9a77
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.optionalsubjects.remove("145dea33-fc43-4fb6-aaf3-3bb833fb9a77");
    console.log(isRemoved);
}
```
