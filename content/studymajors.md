## Study majors

### Metadata on study majors

Retrieve metadata on study majors such as the current count.

```endpoint
HEAD /v2/studymajors
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/studymajors

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.studymajors.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test study major existence

Check if a study major exists on our database.

```endpoint
HEAD /v2/studymajors/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/studymajors/827dec5e-8c08-41fb-952f-bc54097190e6
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.studymajors.exists("827dec5e-8c08-41fb-952f-bc54097190e6");
    console.log(doesExists);
}
```

### Get one study major

Get infos about a specific study major.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study major identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/studymajors/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studymajors/827dec5e-8c08-41fb-952f-bc54097190e6
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.studymajors.get("827dec5e-8c08-41fb-952f-bc54097190e6");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "827dec5e-8c08-41fb-952f-bc54097190e6",
  "name": "Mathématiques",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List study majors

Lists all study majors.

```endpoint
GET /v2/studymajors
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studymajors
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const exams = await client.studymajors.list(offset, limit);
    console.log(exams);
}
```

#### Example response

```json
[
  {
    "id": "827dec5e-8c08-41fb-952f-bc54097190e6",
    "name": "Mathématiques",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "49aa46d1-37b5-4a59-aa53-3034a4387a8b",
    "name": "SVT",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a study major

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study major identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/exams
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/studymajors \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Cinéma"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.studymajors.create({name: "Cinéma"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "4f4bb303-4de6-414d-ab3c-dcc445e95456",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a study major

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
curl -X PATCH https://api.nomadeducation.com/v2/studymajors/0935ed10-b5f4-403a-b7a1-f0bd2711affb \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Cinéma & Audiovisuel"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.studymajors.update("4f4bb303-4de6-414d-ab3c-dcc445e95456", {
        name: "Cinéma & Audiovisuel"
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

### Remove a study major

Remove a study major from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/exams/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/studymajors/4f4bb303-4de6-414d-ab3c-dcc445e95456
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.studymajors.remove("4f4bb303-4de6-414d-ab3c-dcc445e95456");
    console.log(isRemoved);
}
```
