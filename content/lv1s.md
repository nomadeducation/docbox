## LV1s

### Metadata on lv1s

Retrieve metadata on lv1s such as the current count.

```endpoint
HEAD /v2/lv1s
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/lv1s

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.lv1s.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test lv1 existence

Check if a lv1 exists on our database.

```endpoint
HEAD /v2/lv1s/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/lv1s/034198e8-b682-4c1d-a76b-78b61b437b03
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.lv1s.exists("034198e8-b682-4c1d-a76b-78b61b437b03");
    console.log(doesExists);
}
```

### Get one lv1

Get infos about a specific lv1.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | LV1 identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/lv1s/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/lv1s/034198e8-b682-4c1d-a76b-78b61b437b03
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.lv1s.get("034198e8-b682-4c1d-a76b-78b61b437b03");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "034198e8-b682-4c1d-a76b-78b61b437b03",
  "name": "Anglais",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List lv1s

Lists all lv1s.

```endpoint
GET /v2/lv1s
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/lv1s
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const lv1s = await client.lv1s.list(offset, limit);
    console.log(lv1s);
}
```

#### Example response

```json
[
  {
    "id": "034198e8-b682-4c1d-a76b-78b61b437b03",
    "name": "Anglais",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "245557ff-654e-45cf-bdf4-81a1e7902ee2",
    "name": "Espagnol",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create an lv1

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | LV1 identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/lv1s
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/lv1s \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Allemand"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.lv1s.create({name: "Allemand"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "492cd1d7-8d3a-4878-b25c-a7951e62d3c5",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update an lv1

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/lv1s/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/lv1s/492cd1d7-8d3a-4878-b25c-a7951e62d3c5 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Germanique"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.lv1s.update("492cd1d7-8d3a-4878-b25c-a7951e62d3c5", {
        name: "Germanique"
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

### Remove a lv1

Remove a lv1 from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/lv1s/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/lv1s/492cd1d7-8d3a-4878-b25c-a7951e62d3c5
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.lv1s.remove("492cd1d7-8d3a-4878-b25c-a7951e62d3c5");
    console.log(isRemoved);
}
```
