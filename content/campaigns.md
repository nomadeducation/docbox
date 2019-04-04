## Campaigns

### Metadata on campaigns

Retrieve metadata on campaigns such as the current count.

```endpoint
HEAD /v2/campaigns
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/campaigns

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.campaigns.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test campaign existence

Check if a campaign exists on our database.

```endpoint
HEAD /v2/campaigns/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/campaigns/aaf747a9-3057-48b9-8608-b28a1349fe95
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.campaigns.exists("aaf747a9-3057-48b9-8608-b28a1349fe95");
    console.log(doesExists);
}
```

### Get one campaign

Get infos about a specific campaign.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Campaign identifier
`name` | string |
`start_date` | date | Beginning of the campaign as 'active'
`end_date` | date | End of the campaign
`activated_filters` | integer | (_obsolete_)
`filtered_by_member_fields` | boolean | (_obsolete_)
`filter_indexes` | string | (_obsolete_)
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/campaigns/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/campaigns/aaf747a9-3057-48b9-8608-b28a1349fe95
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.campaigns.get("aaf747a9-3057-48b9-8608-b28a1349fe95");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "aaf747a9-3057-48b9-8608-b28a1349fe95",
  "name": "GLION - MASTER FINANCE",
  "start_date": "2018-12-31T23:00:00.000Z",
  "end_date": "2019-09-29T22:00:00.000Z",
  "activated_filters": 0,
  "filter_indexes": "{}",
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List campaigns

Lists all campaigns.

```endpoint
GET /v2/campaigns
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/campaigns
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const campaigns = await client.campaigns.list(offset, limit);
    console.log(campaigns);
}
```

#### Example response

```json
[
  {
    "id": "aaf747a9-3057-48b9-8608-b28a1349fe95",
    "name": "GLION - MASTER FINANCE",
    "start_date": "2018-12-31T23:00:00.000Z",
    "end_date": "2019-09-29T22:00:00.000Z",
    "activated_filters": 0,
    "filter_indexes": "{}",
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "faa1d6a6-e5bb-4b4f-a97a-491ca90ef61e",
    "name": "C3 ALTERNANCE - BAC",
    "start_date": "2018-10-09T22:00:00.000Z",
    "activated_filters": 0,
    "filter_indexes": "{}",
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  }
]
```

### Create a campaign

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character
`start_date` | date |
`end_date` | date |

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Campaign identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/campaigns
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/campaigns \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Pain de Campagne"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.campaigns.create({
        name: "Pain de Campagne"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "914371e3-cd53-4c89-9889-92ea19534b6f",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a campaign

**Request**

Property | Type | Description
---|---|---
`name` | string | must contains at least **1** character
`start_date` | date |
`end_date` | date |

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/campaigns/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/campaigns/914371e3-cd53-4c89-9889-92ea19534b6f \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Campagne militaire"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.campaigns.update("914371e3-cd53-4c89-9889-92ea19534b6f", {
        name: "Campagne militaire"
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

### Remove a campaign

Remove a campaign from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/campaigns/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/campaigns/914371e3-cd53-4c89-9889-92ea19534b6f
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.campaigns.remove("914371e3-cd53-4c89-9889-92ea19534b6f");
    console.log(isRemoved);
}
```
