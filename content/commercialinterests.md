## Commercial Interests

### Metadata on commercial interests

Retrieve metadata on commercial interests such as the current count.

```endpoint
HEAD /v2/commercialinterests
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/commercialinterests

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.commercialinterests.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test commercial interest existence

Check if a commercial interest exists on our database.

```endpoint
HEAD /v2/commercialinterests/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/commercialinterests/4e8857e8-2478-4ff0-bf6d-96870ac5cdbd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.commercialinterests.exists("4e8857e8-2478-4ff0-bf6d-96870ac5cdbd");
    console.log(doesExists);
}
```

### Get one commercial interest

Get infos about a specific commercial interest.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | CommercialInterest identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/commercialinterests/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/commercialinterests/2a7d6c16-c7c3-49ce-a863-c5524df7fddd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.commercialinterests.get("4e8857e8-2478-4ff0-bf6d-96870ac5cdbd");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "4e8857e8-2478-4ff0-bf6d-96870ac5cdbd",
  "name": "Cours de soutien",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List commercialinterests

Lists all commercialinterests.

```endpoint
GET /v2/commercialinterests
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/commercialinterests
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const commercialinterests = await client.commercialinterests.list(offset, limit);
    console.log(commercialinterests);
}
```

#### Example response

```json
[
  {
    "id": "4e8857e8-2478-4ff0-bf6d-96870ac5cdbd",
    "name": "Cours de soutien",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "a2b26aff-5256-462a-8ef0-9cee10d07500",
    "name": "Séjours linguistiques",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a commercial interest

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | CommercialInterest identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/commercialinterests
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/commercialinterests \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Prêt bancaire"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.commercialinterests.create({name: "Prêt bancaire"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "04288c96-96ef-4bfe-8e99-60b175865030",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a commercial interest

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/commercialinterests/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/commercialinterests/04288c96-96ef-4bfe-8e99-60b175865030 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Prêt à la consommation"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.commercialinterests.update("04288c96-96ef-4bfe-8e99-60b175865030", {
        name: "consommation"
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

### Remove a commercial interest

Remove a commercial interest from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/commercialinterests/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/commercialinterests/04288c96-96ef-4bfe-8e99-60b175865030
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.commercialinterests.remove("04288c96-96ef-4bfe-8e99-60b175865030");
    console.log(isRemoved);
}
```
