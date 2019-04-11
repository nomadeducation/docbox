## Sponsor Forms

### Metadata on sponsorforms

Retrieve metadata on sponsorforms such as the current count.

```endpoint
HEAD /v2/sponsorforms
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/sponsorforms

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.sponsorforms.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test sponsor form existence

Check if a sponsor form exists on our database.

```endpoint
HEAD /v2/sponsorforms/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/sponsorforms/b0d93f92-2948-47a8-8c86-33154385a340
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.sponsorforms.exists("b0d93f92-2948-47a8-8c86-33154385a340");
    console.log(doesExists);
}
```

### Get one sponsor form

Get infos about a specific sponsor form.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | SponsorForm identifier
`type` | string | (_obsolete_) Specify the "type" of the content ("sponsorform" by default)
`content_type` | string | Specify the purpose of the sponsor form ("sponsorform" by default)
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
`form` | object | Contains everything to generate the form
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/sponsorforms/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/sponsorforms/b0d93f92-2948-47a8-8c86-33154385a340
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.sponsorforms.get("b0d93f92-2948-47a8-8c86-33154385a340");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "b0d93f92-2948-47a8-8c86-33154385a340",
  "type": "sponsorform",
  "content_type": "sponsorform",
  "title": "ESUPCOM EVENT",
  "name": "ESUPCOM EVENT",
  "slug": "ESUPCOM EVENT",
  "content": "",
  "secondary_content": "",
  "excerpt": "",
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
  "form": {
      "fields": [
          {
              "name": "",
              "label": "Question du form",
              "type": "staticText",
              "validation": [
                  {
                      "pattern": "",
                      "message": ""
                  },
                  {
                      "required": false,
                      "message": ""
                  }
              ],
              "template": "default",
              "values": "<p>Intéressé(e) par cette école ? Valide ta demande pour&nbsp;<b>être contacté</b>&nbsp;!<br></p>"
          }
      ]
  },
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List sponsorforms

Lists all sponsorforms.

```endpoint
GET /v2/sponsorforms
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/sponsorforms
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const sponsorForms = await client.sponsorforms.list(offset, limit);
    console.log(sponsorForms);
}
```

#### Example response

```json
[
  {
    "id": "b0d93f92-2948-47a8-8c86-33154385a340",
    "type": "sponsorform",
    "content_type": "sponsorform",
    "title": "ESUPCOM EVENT",
    "name": "ESUPCOM EVENT",
    "slug": "ESUPCOM EVENT",
    "content": "",
    "secondary_content": "",
    "excerpt": "",
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
    "form": {
      "fields": [
          {
              "name": "",
              "label": "Question du form",
              "type": "staticText",
              "validation": [
                  {
                      "pattern": "",
                      "message": ""
                  },
                  {
                      "required": false,
                      "message": ""
                  }
              ],
              "template": "default",
              "values": "<p>Intéressé(e) par cette école ? Valide ta demande pour&nbsp;<b>être contacté</b>&nbsp;!<br></p>"
          }
      ]
    },
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "e6dd4e14-4263-4daa-9ca2-4bb7986782ef",
    "type": "sponsorform",
    "content_type": "sponsorform",
    "title": "SUP DE CREATION",
    "name": "SUP DE CREATION",
    "slug": "SUP DE CREATION",
    "content": "",
    "secondary_content": "",
    "excerpt": "",
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
    "form": {
      "fields": [
        {
            "name": "",
            "label": "Question du form",
            "type": "staticText",
            "validation": [
                {
                    "pattern": "",
                    "message": ""
                },
                {
                    "required": false,
                    "message": ""
                }
            ],
            "template": "default",
            "values": "<p>Intéressé(e) par cette école ? Valide ta demande pour&nbsp;<b style=\"color: rgba(0, 0, 0, 0.87); font-family: Roboto, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial; background-color: rgb(255, 255, 255);\">être contacté</b>&nbsp;!<br></p>"
        }
      ]
    },
    "created_at": "2018-07-11T13:59:03.656Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a sponsor form

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
`form` | object | (default: `{}`)

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | SponsorForm identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/sponsorforms
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/sponsorforms \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Super sponsor form"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.sponsorforms.create({
        title: "Super sponsor form"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "60cde10f-7803-4be0-b2ac-522868b0191c",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a sponsor form

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
`form` | object |
`publish_state` | string | Allow the user to set the sponsor form as "published" (or back into "draft")

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/sponsorforms/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/sponsorforms/60cde10f-7803-4be0-b2ac-522868b0191c \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Mega Sponsor Form"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.sponsorforms.update("60cde10f-7803-4be0-b2ac-522868b0191c", {
        title: "Mega Sponsor Form"
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

### Remove a sponsor form

Remove a sponsor form from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/sponsorforms/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/sponsorforms/60cde10f-7803-4be0-b2ac-522868b0191c
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.sponsorforms.remove("60cde10f-7803-4be0-b2ac-522868b0191c");
    console.log(isRemoved);
}
```
