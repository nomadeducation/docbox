## Categories

### Metadata on categories

Retrieve metadata on categories such as the current count.

```endpoint
HEAD /v2/categories
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/categories

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.categories.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test category existence

Check if a category exists on our database.

```endpoint
HEAD /v2/categories/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/categories/5c3790e5-2ef0-41e2-9729-26bacd64ced6
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.categories.exists("5c3790e5-2ef0-41e2-9729-26bacd64ced6");
    console.log(doesExists);
}
```

### Get one category

Get infos about a specific category.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Category identifier
`type` | string | (_obsolete_) Specify the "type" of the content ("category" by default)
`content_type` | string | Specify the purpose of the category
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
`see_all_button_text` | string | (_obsolete_)
`apply_filters_recursively` | boolean | (_obsolete_)
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/categories/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/categories/5c3790e5-2ef0-41e2-9729-26bacd64ced6
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.categories.get("5c3790e5-2ef0-41e2-9729-26bacd64ced6");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "0a903590-0141-4246-82b0-865e5c87f024",
  "type": "category",
  "content_type": "chapter",
  "title": "Quiz mixé CE1",
  "name": "Quiz mixé CE1",
  "slug": "Quiz-mixe-CE1",
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
  "see_all_button_text": "",
  "apply_filters_recursively": false,
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List categories

Lists all categories.

```endpoint
GET /v2/categories
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/categories
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const categories = await client.categories.list(offset, limit);
    console.log(categories);
}
```

#### Example response

```json
[
  {
    "id": "0a903590-0141-4246-82b0-865e5c87f024",
    "type": "category",
    "content_type": "chapter",
    "title": "Quiz mixé CE1",
    "name": "Quiz mixé CE1",
    "slug": "Quiz-mixe-CE1",
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
    "see_all_button_text": "",
    "apply_filters_recursively": false,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "e89f692f-d858-424a-886b-cf5c21c9e5f9",
    "type": "category",
    "content_type": "chapter",
    "title": "Quiz mixé CE2",
    "name": "Quiz mixé CE2",
    "slug": "Quiz-mixe-CE2",
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
    "see_all_button_text": "",
    "apply_filters_recursively": false,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  }
]
```

### Create a category

**Request**

Property | Type | Description
---|---|---
`content_type` | string | (**required**) must be one of the following terms: "home", "menu", "course&quiz", "training", "apprating", "adventure", "exam", "result", "annals", "discipline", "chapter", "secondarymenu", "header", "share", "calendar", "about", "profile", "catalog", "partners", "news", "testing", "jobTests" or "jobList"
`title` | string | (**required**) must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean | (default: `true`)
`text_to_speech` | boolean | (default: `false`)
`see_all_button_text` | string | Text contained in the "See all" button
`apply_filters_recursively` | boolean | (default: `false`) Make sure that children also have the same member filters

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Category identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/categories
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/categories \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "content_type": "menu",
  "title": "Cours"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.categories.create({
        content_type: "menu",
        title: "Cours"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "5a80c62c-6c0e-4c94-8933-5024b02a755e",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a category

**Request**

Property | Type | Description
---|---|---
`content_type` | string | must be one of the following terms: "home", "menu", "course&quiz", "training", "apprating", "adventure", "exam", "result", "annals", "discipline", "chapter", "secondarymenu", "header", "share", "calendar", "about", "profile", "catalog", "partners", "news", "testing", "jobTests" or "jobList"
`title` | string | must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean |
`text_to_speech` | boolean |
`see_all_button_text` | string | Text contained in the "See all" button
`apply_filters_recursively` | boolean |
`publish_state` | string | Allow the user to set the category as "published" (or back into "draft")

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/categories/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/categories/5a80c62c-6c0e-4c94-8933-5024b02a755e \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Cool Cat!"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.categories.update("5a80c62c-6c0e-4c94-8933-5024b02a755e", {
        name: "Cool Cat!"
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

### Remove a category

Remove a category from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/categories/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/categories/5a80c62c-6c0e-4c94-8933-5024b02a755e
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.categories.remove("5a80c62c-6c0e-4c94-8933-5024b02a755e");
    console.log(isRemoved);
}
```
