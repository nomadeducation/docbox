## Next year choices

### Metadata on next year choices

Retrieve metadata on next year choices such as the current count.

```endpoint
HEAD /v2/nextyearchoices
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/nextyearchoices

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.nextyearchoices.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test next year choice existence

Check if a next year choice exists on our database.

```endpoint
HEAD /v2/nextyearchoices/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/nextyearchoices/5281a508-601b-4fb4-96c3-94f5608a6257
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.nextyearchoices.exists("00187df6-6896-49ff-841c-adc362267699");
    console.log(doesExists);
}
```

### Get one next year choice

Get infos about a specific next year choice.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Next year choice identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/nextyearchoices/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/nextyearchoices/5281a508-601b-4fb4-96c3-94f5608a6257
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.nextyearchoices.get("00187df6-6896-49ff-841c-adc362267699");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "00187df6-6896-49ff-841c-adc362267699",
  "name": "Poursuivre mes études",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List next year choices

Lists all next year choices.

```endpoint
GET /v2/nextyearchoices
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/nextyearchoices
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const exams = await client.nextyearchoices.list(offset, limit);
    console.log(exams);
}
```

#### Example response

```json
[
  {
    "id": "00187df6-6896-49ff-841c-adc362267699",
    "name": "Poursuivre mes études",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "f5deca42-6abf-45e2-b070-68734da2f84b",
    "name": "Recherche d'emploi",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a next year choice

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Next year choice identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/nextyearchoices
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/nextyearchoices \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Continuer ma formation actuelle"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.nextyearchoices.create({name: "Continuer ma formation actuelle"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "4d5c8552-30d2-4d82-aea9-b53bea793608",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a next year choice

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/nextyearchoices/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/nextyearchoices/4d5c8552-30d2-4d82-aea9-b53bea793608 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Poursuivre ma formation actuelle"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.nextyearchoices.update("4d5c8552-30d2-4d82-aea9-b53bea793608", {
        name: "Poursuivre ma formation actuelle"
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

### Remove a next year choice

Remove a next year choice from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/nextyearchoices/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/nextyearchoices/4d5c8552-30d2-4d82-aea9-b53bea793608
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.nextyearchoices.remove("4d5c8552-30d2-4d82-aea9-b53bea793608");
    console.log(isRemoved);
}
```
