## Members

### Metadata on members

Retrieve metadata on members such as the current count.

```endpoint
HEAD /v2/members
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/members

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.members.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test member existence

Check if a member exists on our database.

```endpoint
HEAD /v2/members/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/members/1da32565-5552-497a-96e8-50b99e98bdd2
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.members.exists("1da32565-5552-497a-96e8-50b99e98bdd2");
    console.log(doesExists);
}
```

### Get one member

Get infos about a specific member.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Member identifier
`points` | integer| Sum of points gained after answering correctly to quizzes
`address` | string |
`additional_address` | string |
`zipcode` | string |
`city` | string |
`phone` | string |
`lead_number` | integer | Number of generated leads for this member
`pay_for_studies` | boolean |
`school_contact_acceptance` | boolean | Used to store the member consent to re-use its personal data by third parties
`job_contact_acceptance` | boolean | Store the member consent if he wants to receive job proposals
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/members/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/members/1da32565-5552-497a-96e8-50b99e98bdd2
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.members.get("1da32565-5552-497a-96e8-50b99e98bdd2");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "fcdb59f5-76c2-47a4-8400-42b0f8e52e13",
  "points": 42,
  "address": "Rue des bois",
  "additional_address": "Appartement 101",
  "zipcode": "75008",
  "city": "Paris",
  "phone": "0692831732",
  "lead_number": 2,
  "pay_for_studies": false,
  "school_contact_acceptance": true,
  "job_contact_acceptance": false,
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List members

Lists all members.

```endpoint
GET /v2/members
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/members
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const exams = await client.members.list(offset, limit);
    console.log(exams);
}
```

#### Example response

```json
[
  {
    "id": "1da32565-5552-497a-96e8-50b99e98bdd2",
    "points": 42,
    "address": "Rue des bois",
    "additional_address": "Appartement 101",
    "zipcode": "75008",
    "city": "Paris",
    "phone": "0692831732",
    "lead_number": 2,
    "pay_for_studies": false,
    "school_contact_acceptance": true,
    "job_contact_acceptance": false,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "9704507e-cd0b-4770-8b78-68cdf5b9a135",
    "points": 42,
    "address": "Avenue jean jaurès",
    "additional_address": "",
    "zipcode": "34008",
    "city": "Les Aires",
    "phone": "0643819234",
    "lead_number": 0,
    "pay_for_studies": false,
    "school_contact_acceptance": false,
    "job_contact_acceptance": false,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  }
]
```

### Create a member

**Request**

Property | Type | Description
---|---|---
`points` | integer| (default: `0`)
`address` | string |
`additional_address` | string |
`zipcode` | string |
`city` | string |
`phone` | string |
`lead_number` | integer | (default: `0`)
`pay_for_studies` | boolean | (default: `false`)
`school_contact_acceptance` | boolean | (default: `false`)
`job_contact_acceptance` | boolean | (default: `false`)

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Member identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/members
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/members \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "address": "123 allée sous la colline",
  "city": "La comté"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.members.create({
        address: "123 allée sous la colline",
        city: "La comté"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "d8a7e160-8eca-4158-a3de-0d2756557860",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a member

**Request**

Property | Type | Description
---|---|---
`points` | integer|
`address` | string |
`additional_address` | string |
`zipcode` | string |
`city` | string |
`phone` | string |
`lead_number` | integer |
`pay_for_studies` | boolean |
`school_contact_acceptance` | boolean |
`job_contact_acceptance` | boolean |

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/members/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/members/d8a7e160-8eca-4158-a3de-0d2756557860 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "zipcode": "62150"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.members.update("d8a7e160-8eca-4158-a3de-0d2756557860", {
        zipcode: "62150"
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

### Remove a member

Remove a member from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/members/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/members/d8a7e160-8eca-4158-a3de-0d2756557860
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.members.remove("d8a7e160-8eca-4158-a3de-0d2756557860");
    console.log(isRemoved);
}
```
