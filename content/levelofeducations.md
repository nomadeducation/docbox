## Level of educations

### Metadata on level of educations

Retrieve metadata on level of educations such as the current count.

```endpoint
HEAD /v2/levelofeducations
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/levelofeducations

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.levelofeducations.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test level of education existence

Check if a level of education exists on our database.

```endpoint
HEAD /v2/levelofeducations/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/levelofeducations/5281a508-601b-4fb4-96c3-94f5608a6257
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.levelofeducations.exists("fd765647-0004-484e-9db8-993f3d040252");
    console.log(doesExists);
}
```

### Get one level of education

Get infos about a specific level of education.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Level of education identifier
`name` | string |
`value` | integer |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/levelofeducations/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/levelofeducations/fd765647-0004-484e-9db8-993f3d040252
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.levelofeducations.get("fd765647-0004-484e-9db8-993f3d040252");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "fd765647-0004-484e-9db8-993f3d040252",
  "name": "Seconde",
  "value": -2,
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List level of educations

Lists all level of educations.

```endpoint
GET /v2/levelofeducations
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/levelofeducations
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const loe = await client.levelofeducations.list(offset, limit);
    console.log(loe);
}
```

#### Example response

```json
[
  {
    "id": "fd765647-0004-484e-9db8-993f3d040252",
    "name": "Seconde",
    "value": -2,
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "07ddd199-83e9-4f39-b1f9-084969586829",
    "name": "Bac",
    "value": 0,
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a level of education

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character
`value` | integer | (**required**)

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Exam identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/levelofeducations
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/levelofeducations \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Bac+1",
  "value": 1
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.levelofeducations.create({
    name: "Bac+1",
    value: 1
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "f036cebc-9339-428f-b03b-400cffce61bb",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a level of education

**Request**

Property | Type | Description
---|---|---
`name` | string | must contains at least **1** character
`value` | integer |

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/levelofeducations/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/levelofeducations/f036cebc-9339-428f-b03b-400cffce61bb \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Bac+12"
  "value": 12
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.levelofeducations.update("f036cebc-9339-428f-b03b-400cffce61bb", {
        name: "Bac+12",
        value: 12
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

### Remove a level of education

Remove a level of education from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/levelofeducations/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/levelofeducations/f036cebc-9339-428f-b03b-400cffce61bb
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.levelofeducations.remove("f036cebc-9339-428f-b03b-400cffce61bb");
    console.log(isRemoved);
}
```
