## Sponsor Infos

### Metadata on sponsorinfos

Retrieve metadata on sponsorinfos such as the current count.

```endpoint
HEAD /v2/sponsorinfos
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/sponsorinfos

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.sponsorinfos.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test sponsor info existence

Check if a sponsor info exists on our database.

```endpoint
HEAD /v2/sponsorinfos/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/sponsorinfos/2a74ee19-385b-4b99-aed5-2a96eb844662
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.sponsorinfos.exists("2a74ee19-385b-4b99-aed5-2a96eb844662");
    console.log(doesExists);
}
```

### Get one sponsor info

Get infos about a specific sponsor info.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | SponsorInfo identifier
`type` | string | (_obsolete_) Specify the "type" of the content ("post" by default)
`content_type` | string | Specify the purpose of the sponsor info ("sponsors" by default)
`title` | string |
`name` | string | Should be the same value as `title`
`slug` | string | The ["slug"](https://en.wikipedia.org/wiki/Clean_URL#Slug) version of `title`
`content` | string |
`secondary_content` | string | Extra content that got different purposes depending on the content type 
`excerpt` | string | This is mostly used to give an "headline" to a content
`icon` | string |
`external_link` | string | This should be a clickable link on mobile apps
`editor_access` | string | Tells whether the editor (a.k.a. teacher) can edit this content
`text_to_speech` | string | Tells if this content can be used against the "Text-to-Speech" feat. on mobile apps
`publish_state` | string | Specify the publication status. If the content is published, this should "lock" the content modification.
`publish_start` | string |
`publish_end` | string |
`template` | string | (_obsolete_)
`payload_schema` | string | (_obsolete_)
`payload` | string | (_obsolete_)
`parents_fixed_at` | string | (_obsolete_)
`filtered_by_member_fields` | string | Tells if this content is filtered using member fields (e.g. its level of education, grades, etc)
`filter_indexes` | string | (_obsolete_)
`activated_filters` | string | (_obsolete_)
`url` | string |
`messenger_url` | string |
`whatsapp_url` | string |
`brochure_activated` | boolean |
`call_activated` | boolean |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/sponsorinfos/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/sponsorinfos/2a74ee19-385b-4b99-aed5-2a96eb844662
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.sponsorinfos.get("2a74ee19-385b-4b99-aed5-2a96eb844662");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "2a74ee19-385b-4b99-aed5-2a96eb844662",
  "type": "post",
  "content_type": "sponsors",
  "title": "EFREI",
  "name": "GROUPE EFREI",
  "slug": "GROUPE-EFREI",
  "content": "<p>Efrei Paris - École d'ingénieurs généraliste du numérique.</p>",
  "secondary_content": "",
  "excerpt": "École d'ingénieurs généraliste du numérique",
  "icon": "",
  "external_link": "",
  "editor_access": false,
  "text_to_speech": false,
  "publish_state": "published",
  "template": "",
  "payload_schema": "",
  "payload": "{}",
  "filtered_by_member_fields": false,
  "filter_indexes": "{}",
  "activated_filters": 0,
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List sponsorinfos

Lists all sponsorinfos.

```endpoint
GET /v2/sponsorinfos
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/sponsorinfos
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const sponsorInfos = await client.sponsorinfos.list(offset, limit);
    console.log(sponsorInfos);
}
```

#### Example response

```json
[
  {
    "id": "2a74ee19-385b-4b99-aed5-2a96eb844662",
    "type": "post",
    "content_type": "sponsors",
    "title": "EFREI",
    "name": "GROUPE EFREI",
    "slug": "GROUPE-EFREI",
    "content": "<p>Efrei Paris - École d'ingénieurs généraliste du numérique.</p>",
    "secondary_content": "",
    "excerpt": "École d'ingénieurs généraliste du numérique",
    "icon": "",
    "external_link": "",
    "editor_access": false,
    "text_to_speech": false,
    "publish_state": "published",
    "template": "",
    "payload_schema": "",
    "payload": "{}",
    "filtered_by_member_fields": false,
    "filter_indexes": "{}",
    "activated_filters": 0,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "00b8e2c1-aff0-4221-a09f-4fe455a0b5bb",
    "type": "post",
    "content_type": "sponsors",
    "title": "EPF",
    "name": "EPF",
    "slug": "EPF",
    "content": "<p>L’EPF forme des ingénieur-e-s généralistes innovants, responsables et de dimension internationale.</p>",
    "secondary_content": "",
    "excerpt": "EPF: école d'ingénieur",
    "icon": "",
    "external_link": "",
    "editor_access": true,
    "text_to_speech": false,
    "publish_state": "draft",
    "template": "",
    "payload_schema": "",
    "payload": "{}",
    "filtered_by_member_fields": false,
    "filter_indexes": "{}",
    "activated_filters": 0,
    "url": "http://epf.fr",
    "created_at": "2018-07-11T13:59:03.656Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a sponsor info

**Request**

Property | Type | Description
---|---|---
`title` | string | (**required**) must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean | (default: `true`)
`text_to_speech` | boolean | (default: `false`)
`url` | string |
`messenger_url` | string |
`whatsapp_url` | string |
`brochure_activated` | boolean |
`call_activated` | boolean |

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | SponsorInfo identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/sponsorinfos
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/sponsorinfos \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "GIFI",
  "content": "Une école pour les génies !"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.sponsorinfos.create({
        title: "GIFI",
        content: "Une école pour les génies !"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "95885576-5887-45f6-8346-53d79164b88f",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a sponsor info

**Request**

Property | Type | Description
---|---|---
`title` | string | must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean | (default: `true`)
`text_to_speech` | boolean | (default: `false`)
`url` | string |
`messenger_url` | string |
`whatsapp_url` | string |
`brochure_activated` | boolean |
`call_activated` | boolean |
`publish_state` | string | Allow the user to set the sponsor info as "published" (or back into "draft")

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/sponsorinfos/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/sponsorinfos/95885576-5887-45f6-8346-53d79164b88f \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Foir'Fouille"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.sponsorinfos.update("95885576-5887-45f6-8346-53d79164b88f", {
        name: "Foir'Fouille"
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

### Remove a sponsor info

Remove a sponsor info from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/sponsorinfos/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/sponsorinfos/95885576-5887-45f6-8346-53d79164b88f
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.sponsorinfos.remove("95885576-5887-45f6-8346-53d79164b88f");
    console.log(isRemoved);
}
```
