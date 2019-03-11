## Study minors

### Metadata on study minors

Retrieve metadata on study minors such as the current count.

```endpoint
HEAD /v2/studyminors
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/studyminors

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.studyminors.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test study minor existence

Check if a study minor exists on our database.

```endpoint
HEAD /v2/studyminors/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/studyminors/f7a67386-c43f-4143-8a23-ca752efa6908
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.studyminors.exists("f7a67386-c43f-4143-8a23-ca752efa6908");
    console.log(doesExists);
}
```

### Get one study minor

Get infos about a specific study minor.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study minor identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/studyminors/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studyminors/f7a67386-c43f-4143-8a23-ca752efa6908
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.studyminors.get("f7a67386-c43f-4143-8a23-ca752efa6908");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "f7a67386-c43f-4143-8a23-ca752efa6908",
  "name": "Paramédical",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List study minors

Lists all study minors.

```endpoint
GET /v2/studyminors
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studyminors
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const exams = await client.studyminors.list(offset, limit);
    console.log(exams);
}
```

#### Example response

```json
[
  {
    "id": "f7a67386-c43f-4143-8a23-ca752efa6908",
    "name": "Paramédical",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "53ebbf09-51e9-46d4-aa36-41ca38c45dc4",
    "name": "Social",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a study minor

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study minor identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/exams
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/studyminors \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Arts plastiques"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.studyminors.create({name: "Arts plastiques"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "c38a6486-c95d-4193-bf34-1012097ca63f",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a study minor

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/exams/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studyminors/c38a6486-c95d-4193-bf34-1012097ca63f \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Histoire des arts"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.studyminors.update("c38a6486-c95d-4193-bf34-1012097ca63f", {
        name: "Histoire des arts"
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

### Remove a study minor

Remove a study minor from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/exams/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/studyminors/c38a6486-c95d-4193-bf34-1012097ca63f
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.studyminors.remove("c38a6486-c95d-4193-bf34-1012097ca63f");
    console.log(isRemoved);
}
```
