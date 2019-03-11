## Schools

### Metadata on schools

Retrieve metadata on schools such as the current count.

```endpoint
HEAD /v2/schools
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/schools

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.schools.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test school existence

Check if a school exists on our database.

```endpoint
HEAD /v2/schools/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/schools/b143c421-ff5e-4dfc-9450-12d32da86bf7
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.schools.exists("b143c421-ff5e-4dfc-9450-12d32da86bf7");
    console.log(doesExists);
}
```

### Get one school

Get infos about a specific school.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | School identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/schools/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/schools/b143c421-ff5e-4dfc-9450-12d32da86bf7
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.schools.get("b143c421-ff5e-4dfc-9450-12d32da86bf7");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "b143c421-ff5e-4dfc-9450-12d32da86bf7",
  "name": "Paris",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List schools

Lists all schools.

```endpoint
GET /v2/schools
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/schools
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const schools = await client.schools.list(offset, limit);
    console.log(schools);
}
```

#### Example response

```json
[
  {
    "id": "b143c421-ff5e-4dfc-9450-12d32da86bf7",
    "name": "Paris",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "f70ce373-41af-453b-b1ec-32850502d6d0",
    "name": "Brest",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a school

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | School identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/schools
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/schools \
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
    const newResource = await client.schools.create({name: "Bordeaux"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "bd2ddd39-f752-4fb1-92b4-142f35ffefb1",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a school

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/schools/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/schools/bd2ddd39-f752-4fb1-92b4-142f35ffefb1 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Nantes"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.schools.update("bd2ddd39-f752-4fb1-92b4-142f35ffefb1", {
        name: "Nantes"
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

### Remove a school

Remove a school from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/schools/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/schools/0935ed10-b5f4-403a-b7a1-f0bd2711affb
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.schools.remove("bd2ddd39-f752-4fb1-92b4-142f35ffefb1");
    console.log(isRemoved);
}
```
