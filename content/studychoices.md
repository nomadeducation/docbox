## Study Choices

### Metadata on study choices

Retrieve metadata on study choices such as the current count.

```endpoint
HEAD /v2/studychoices
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/studychoices

HTTP/1.1 200 OK
Content-Range: items */42
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.studychoices.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test study choice existence

Check if a study choice exists on our database.

```endpoint
HEAD /v2/studychoices/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/studychoices/f65d812a-574e-4086-91a1-d7ad2c19b201
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.studychoices.exists("f65d812a-574e-4086-91a1-d7ad2c19b201");
    console.log(doesExists);
}
```

### Get one study choice

Get infos about a specific study choice.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study choice identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/studychoices/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studychoices/0db85a9b-e4b7-42dc-bf92-8631aa2da8ee
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const studyChoice = await client.studychoices.get("0db85a9b-e4b7-42dc-bf92-8631aa2da8ee");
    console.log(studyChoice);
}
```

#### Example response

```json
{
  "id": "0db85a9b-e4b7-42dc-bf92-8631aa2da8ee",
  "name": "à distance",
  "created_at": "2018-08-10T13:37:45.903Z",
  "updated_at": "2018-08-10T13:37:45.903Z"
}
```

### Get options from one study choice

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study choice option identifier
`name` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/studychoices/:id/options
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studychoices/0db85a9b-e4b7-42dc-bf92-8631aa2da8ee/options
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const options = await client.studychoices.listOptions("0db85a9b-e4b7-42dc-bf92-8631aa2da8ee");
    console.log(options);
}
```

#### Example response

```json
[
  {
    "id": "ceb556cf-c5d0-4cb2-8350-1863db762d8e",
    "name": "Europe",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "7463501d-0c3b-40bc-818b-b42f8e738950",
    "name": "Asie",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  }
]

```

### List study choices

Lists all study choices.

```endpoint
GET /v2/studychoices
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/studychoices
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 0;
    const limit = 2;
    const studychoices = await client.studychoices.list(offset, limit);
    console.log(studychoices);
}
```

#### Example response

```json
[
  {
    "id": "0db85a9b-e4b7-42dc-bf92-8631aa2da8ee",
    "name": "à distance",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "6b73f98e-4418-47e0-8fc3-c10ccd2fedb8",
    "name": "Formation initiale",
    "created_at": "2018-08-11T23:37:40.000Z",
    "updated_at": "2018-08-11T23:37:40.000Z"
  }
]
```

### Create a study choice

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) can contains up to **500** characters

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Study choice identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/studychoices
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/studychoices \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Lycée Français"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newStudyChoice = await client.studychoices.create({name: "Lycée Français"});
    console.log(newStudyChoice);
}
```

#### Example response

```json
{
  "id": "8256907c-630a-431a-91a1-12fa5d5ffb48",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a study choice

**Request**

Property | Type | Description
---|---|---
`name` | string | can contains up to **500** characters

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/studychoices/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studychoices/8256907c-630a-431a-91a1-12fa5d5ffb48 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Alternance"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.studychoices.update(
        "8256907c-630a-431a-91a1-12fa5d5ffb48",
        {name: "Alternance"}
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

### Add options to a study choice

**Request**

You can add multiple options to a study choice in the same request.

Property | Type | Description
---|---|---
`(none)` | array of strings | List of option names that must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`(none)` | array of objects (described below) |
`id` | string (UUID) | Study choice option identifier
`name` | string |
`created_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/studychoices/:id/add-options
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studychoices/a18bbf7f-27f0-4ea8-b1ec-a5e41b86efa7/add-options \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "Payantes",
  "Publiques"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.studychoices.addOptions(
        "a18bbf7f-27f0-4ea8-b1ec-a5e41b86efa7",
        [
            "Payantes",
            "Publiques"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
[
  {"id": "8aa83f91-9b8e-4305-8879-278981b791e8", "name": "Payantes"},
  {"id": "4ccd64d4-c8fd-47de-a509-b9c558498a53", "name": "Publiques"}
]
```

### Update an option of a study choice

**Request**

You can only update **one** option to a study choice in the same request.

Property | Type | Description
---|---|---
`id` | string (UUID) | Study choice option identifier
`name` | string | (**required**) must contains at least **1** character

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/studychoices/:id/update-option
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studychoices/4ccd64d4-c8fd-47de-a509-b9c558498a53/update-option \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "id": "4ccd64d4-c8fd-47de-a509-b9c558498a53",
  "name": "Semi-payantes"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.studychoices.updateOption(
        "4ccd64d4-c8fd-47de-a509-b9c558498a53",
        "4ccd64d4-c8fd-47de-a509-b9c558498a53",
        "Semi-payantes"
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

### Remove options to a study choice

**Request**

You can remove multiple options to a study choice in the same request.

Property | Type | Description
---|---|---
`(none)` | array of strings (UUID) | List of option ids

**Response**

Removed options can be rejected if the identifier doesn't exist

Property | Type | Description
---|---|---
`(none)` | array of strings (UUID) | Contains the ids of the removed options

```endpoint
PATCH /v2/studychoices/:id/remove-options
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/studychoices/4ccd64d4-c8fd-47de-a509-b9c558498a53/remove-options \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
[
  "4ccd64d4-c8fd-47de-a509-b9c558498a53"
]
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const res = await client.studychoices.removeOptions(
        "4ccd64d4-c8fd-47de-a509-b9c558498a53",
        [
            "4ccd64d4-c8fd-47de-a509-b9c558498a53"
        ]
    );
    console.log(res);
}
```

#### Example response

```json
[
  "4ccd64d4-c8fd-47de-a509-b9c558498a53"
]
```

### Remove a study choice

Remove a study choice from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/studychoices/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/studychoices/4ccd64d4-c8fd-47de-a509-b9c558498a53
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.studychoices.remove("4ccd64d4-c8fd-47de-a509-b9c558498a53");
    console.log(isRemoved);
}
```
