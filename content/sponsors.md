## Sponsors

### Metadata on sponsors

Retrieve metadata on sponsors such as the current count.

```endpoint
HEAD /v2/sponsors
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/sponsors

HTTP/1.1 200 OK
Content-Range: items */42
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.sponsors.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test sponsor existence

Check if a sponsor exists on our database.

```endpoint
HEAD /v2/sponsors/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/sponsors/86f6870c-6eb5-44fa-83f8-fe4d254bebd1
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.sponsors.exists("86f6870c-6eb5-44fa-83f8-fe4d254bebd1");
    console.log(doesExists);
}
```

### Get one sponsor

Get infos about a specific sponsor.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Sponsor identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/sponsors/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/sponsors/86f6870c-6eb5-44fa-83f8-fe4d254bebd1
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const studyChoice = await client.sponsors.get("86f6870c-6eb5-44fa-83f8-fe4d254bebd1");
    console.log(studyChoice);
}
```

#### Example response

```json
{
  "id": "86f6870c-6eb5-44fa-83f8-fe4d254bebd1",
  "name": "ICAN EXECUTIVE",
  "created_at": "2018-08-10T13:37:45.903Z",
  "updated_at": "2018-08-10T13:37:45.903Z"
}
```

### Get options from one sponsor

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Sponsor option identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/sponsors/:id/options
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/sponsors/86f6870c-6eb5-44fa-83f8-fe4d254bebd1/options
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const options = await client.sponsors.listOptions("86f6870c-6eb5-44fa-83f8-fe4d254bebd1");
    console.log(options);
}
```

#### Example response

```json
[
  {
    "id": "f62ccc8c-582f-4761-8fbc-ba104e95ac5e",
    "name": "Paris",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "b889a04d-e265-4acd-9e97-3faae9ef30a7",
    "name": "Marseille",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  }
]

```

### List sponsors

Lists all sponsors.

```endpoint
GET /v2/sponsors
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/sponsors
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 0;
    const limit = 2;
    const sponsors = await client.sponsors.list(offset, limit);
    console.log(sponsors);
}
```

#### Example response

```json
[
  {
    "id": "86f6870c-6eb5-44fa-83f8-fe4d254bebd1",
    "name": "ICAN EXECUTIVE",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "6296fe0f-6718-468b-8607-7f947557093f",
    "name": "Institut F2I",
    "created_at": "2018-08-11T23:37:40.000Z",
    "updated_at": "2018-08-11T23:37:40.000Z"
  }
]
```

### Create a sponsor

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) can contains up to **500** characters

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Sponsor identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/sponsors
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/sponsors \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "IRCAM"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newSponsor = await client.sponsors.create({name: "IRCAM"});
    console.log(newSponsor);
}
```

#### Example response

```json
{
  "id": "6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a sponsor

**Request**

Property | Type | Description
---|---|---
`name` | string | can contains up to **500** characters

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/sponsors/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/sponsors/6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "IRCAM 3D"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.sponsors.update(
        "6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1",
        {name: "IRCAM 3D"}
    );
    console.log(isUpdated);
}
```

#### Example response

```json
{
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Add options to a sponsor

**Request**

You can add multiple options to a sponsor in the same request.

Property | Type | Description
---|---|---
`(none)` | array of strings | List of option names that must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`(none)` | array of objects (described below) |
`id` | string (UUID) | Sponsor option identifier
`name` | string |
`created_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/sponsors/:id/add-options
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/sponsors/6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1/add-options \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "Nantes",
  "Bordeaux"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.sponsors.addOptions(
        "6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1",
        [
            "Nantes",
            "Bordeaux"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
[
  {"id": "d3da5e64-2d43-405c-86ff-cc4efc653e55", "name": "Nantes"},
  {"id": "c34cffc7-bda3-4029-9960-8881aad8d7cf", "name": "Bordeaux"}
]
```

### Update an option of a sponsor

**Request**

You can only update **one** option to a sponsor in the same request.

Property | Type | Description
---|---|---
`id` | string (UUID) | Sponsor option identifier
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/sponsors/:id/update-option
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/sponsors/6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1/update-option \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "id": "8c3acef2-73d9-4ff1-bd19-fd57a9b4ba54",
  "name": "Nanterre"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.sponsors.updateOption(
        "6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1",
        "8c3acef2-73d9-4ff1-bd19-fd57a9b4ba54",
        "Nanterre"
    );
    console.log(res);
}
```

#### Example response

```json
{
  "updated_at": "2019-01-07T13:47:23.077Z"
}
```

### Remove options to a sponsor

**Request**

You can remove multiple options to a sponsor in the same request.

Property | Type | Description
---|---|---
`(none)` | array of strings (UUID) | List of option ids

**Response**

Removed options can be rejected if the identifier doesn't exist

Property | Type | Description
---|---|---
`(none)` | array of strings (UUID) | Contains the ids of the removed options

```endpoint
PATCH /v2/sponsors/:id/remove-options
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/sponsors/6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1/remove-options \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "c34cffc7-bda3-4029-9960-8881aad8d7cf"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.sponsors.removeOptions(
        "6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1",
        [
            "c34cffc7-bda3-4029-9960-8881aad8d7cf"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
[
  "c34cffc7-bda3-4029-9960-8881aad8d7cf"
]
```

### Remove a sponsor

Remove a sponsor from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/sponsors/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/sponsors/6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.sponsors.remove("6248974b-5f9a-4e38-8bd6-c2dbaf05c9c1");
    console.log(isRemoved);
}
```
