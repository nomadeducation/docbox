## Study Domains

### Metadata on study domains

Retrieve metadata on study domains such as the current count.

```endpoint
HEAD /v2/studydomains
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/studydomains

HTTP/1.1 200 OK
Content-Range: items */42
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.studydomains.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test study domain existence

Check if a study domain exists on our database.

```endpoint
HEAD /v2/studydomains/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/studydomains/7c8add14-a9b9-4362-8cca-a0b815645338
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.studydomains.exists("7c8add14-a9b9-4362-8cca-a0b815645338");
    console.log(doesExists);
}
```

### Get one study domain

Get infos about a specific study domain.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study domain identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/studydomains/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studydomains/69178024-a990-464f-8989-910781d19ee5
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const studyDomain = await client.studydomains.get("69178024-a990-464f-8989-910781d19ee5");
    console.log(studyDomain);
}
```

#### Example response

```json
{
  "id": "69178024-a990-464f-8989-910781d19ee5",
  "name": "Industrie - Innovation - Technologies",
  "created_at": "2018-08-10T13:37:45.903Z",
  "updated_at": "2018-08-10T13:37:45.903Z"
}
```

### Get options from one study domain

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study domain option identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/studydomains/:id/options
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studydomains/69178024-a990-464f-8989-910781d19ee5/options
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const options = await client.studydomains.listOptions("69178024-a990-464f-8989-910781d19ee5");
    console.log(options);
}
```

#### Example response

```json
[
  {
    "id": "36ed52bd-673f-4b81-ba91-61f55af04bc5",
    "name": "Histoire",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "6fe8475b-a244-46dd-9b60-df6c33457ec3",
    "name": "Géographie",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  }
]

```

### List study domains

Lists all study domains.

```endpoint
GET /v2/studydomains
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studydomains
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 0;
    const limit = 2;
    const studydomains = await client.studydomains.list(offset, limit);
    console.log(studydomains);
}
```

#### Example response

```json
[
  {
    "id": "69178024-a990-464f-8989-910781d19ee5",
    "name": "Industrie - Innovation - Technologies",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "6d745350-67ef-4e8a-8e67-87f4c370671e",
    "name": "Mode - Stylisme",
    "created_at": "2018-08-11T23:37:40.000Z",
    "updated_at": "2018-08-11T23:37:40.000Z"
  }
]
```

### Create a study domain

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) can contains up to **500** characters

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study domain identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/studydomains
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/studydomains \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Design"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newStudyDomain = await client.studydomains.create({name: "Design"});
    console.log(newStudyDomain);
}
```

#### Example response

```json
{
  "id": "4f0b7c26-0729-42be-8f6b-4cf7384170db",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a study domain

**Request**

Property | Type | Description
---|---|---
`name` | string | can contains up to **500** characters

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/studydomains/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studydomains/4f0b7c26-0729-42be-8f6b-4cf7384170db \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Histoire du cinéma"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.studydomains.update(
        "4f0b7c26-0729-42be-8f6b-4cf7384170db",
        {name: "Histoire du cinéma"}
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

### Add options to a study domain

**Request**

You can add multiple options to a study domain in the same request.

Property | Type | Description
---|---|---
`(none)` | array of strings | List of option names that must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`(none)` | array of objects (described below) |
`id` | string (UUID) | Study domain option identifier
`name` | string |
`created_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/studydomains/:id/add-options
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studydomains/4f0b7c26-0729-42be-8f6b-4cf7384170db/add-options \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "Jeux-vidéos",
  "Animation 3D"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.studydomains.addOptions(
        "4f0b7c26-0729-42be-8f6b-4cf7384170db",
        [
            "Jeux-vidéos",
            "Animation 3D"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
[
  {"id": "388ac2b7-e737-4124-8125-d4a2d8db1585", "name": "Jeux-vidéos"},
  {"id": "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e", "name": "Animation 3D"}
]
```

### Update an option of a study domain

**Request**

You can only update **one** option to a study domain in the same request.

Property | Type | Description
---|---|---
`id` | string (UUID) | Study domain option identifier
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/studydomains/:id/update-option
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studydomains/4f0b7c26-0729-42be-8f6b-4cf7384170db/update-option \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "id": "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e",
  "name": "Animation 4D"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.studydomains.updateOption(
        "4f0b7c26-0729-42be-8f6b-4cf7384170db",
        "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e",
        "Animation 4D"
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

### Remove options to a study domain

**Request**

You can remove multiple options to a study domain in the same request.

Property | Type | Description
---|---|---
`(none)` | array of strings (UUID) | List of option ids

**Response**

Removed options can be rejected if the identifier doesn't exist

Property | Type | Description
---|---|---
`(none)` | array of strings (UUID) | Contains the ids of the removed options

```endpoint
PATCH /v2/studydomains/:id/remove-options
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studydomains/4f0b7c26-0729-42be-8f6b-4cf7384170db/remove-options \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "388ac2b7-e737-4124-8125-d4a2d8db1585",
  "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.studydomains.removeOptions(
        "4f0b7c26-0729-42be-8f6b-4cf7384170db",
        [
            "388ac2b7-e737-4124-8125-d4a2d8db1585",
            "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
[
  "388ac2b7-e737-4124-8125-d4a2d8db1585",
  "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e"
]
```

### Remove a study domain

Remove a study domain from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/studydomains/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/studydomains/4f0b7c26-0729-42be-8f6b-4cf7384170db
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.studydomains.remove("4f0b7c26-0729-42be-8f6b-4cf7384170db");
    console.log(isRemoved);
}
```
