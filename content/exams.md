## Exams

### Metadata on exams

Retrieve metadata on exams such as the current count.

```endpoint
HEAD /v2/exams
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/exams

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.exams.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test exam existence

Check if a exam exists on our database.

```endpoint
HEAD /v2/exams/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/exams/5281a508-601b-4fb4-96c3-94f5608a6257
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.exams.exists("5281a508-601b-4fb4-96c3-94f5608a6257");
    console.log(doesExists);
}
```

### Get one exam

Get infos about a specific exam.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Exam identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/exams/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/exams/5281a508-601b-4fb4-96c3-94f5608a6257
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.exams.get("5281a508-601b-4fb4-96c3-94f5608a6257");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "5281a508-601b-4fb4-96c3-94f5608a6257",
  "name": "Bac",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List exams

Lists all exams.

```endpoint
GET /v2/exams
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/exams
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const exams = await client.exams.list(offset, limit);
    console.log(exams);
}
```

#### Example response

```json
[
  {
    "id": "5281a508-601b-4fb4-96c3-94f5608a6257",
    "name": "Bac",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "7a7fcd08-b9ab-4eac-8b80-7e5e3c32409d",
    "name": "Post Bac",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a exam

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Exam identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/exams
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/exams \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Tage Bac"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.exams.create({name: "Tage Bac"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "0935ed10-b5f4-403a-b7a1-f0bd2711affb",
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
PATCH /v2/exams/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/exams/0935ed10-b5f4-403a-b7a1-f0bd2711affb \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Tage Mage"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.exams.update("0935ed10-b5f4-403a-b7a1-f0bd2711affb", {
        name: "Tage Mage"
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

### Remove a exam

Remove a exam from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/exams/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/exams/0935ed10-b5f4-403a-b7a1-f0bd2711affb
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.exams.remove("0935ed10-b5f4-403a-b7a1-f0bd2711affb");
    console.log(isRemoved);
}
```
