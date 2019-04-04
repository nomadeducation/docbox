## Quizzes

### Metadata on quizzes

Retrieve metadata on quizzes such as the current count.

```endpoint
HEAD /v2/quizzes
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/quizzes

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.quizzes.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test quiz existence

Check if a quiz exists on our database.

```endpoint
HEAD /v2/quizzes/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/quizzes/fcdb59f5-76c2-47a4-8400-42b0f8e52e13
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.quizzes.exists("fcdb59f5-76c2-47a4-8400-42b0f8e52e13");
    console.log(doesExists);
}
```

### Get one quiz

Get infos about a specific quiz.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Quiz identifier
`type` | string | (_obsolete_) Specify the "type" of the content ("post" by default)
`content_type` | string | Specify the purpose of the quiz
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
`display_result_after_each_question` | boolean |
`apply_filters_recursively` | boolean | (_obsolete_)
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/quizzes/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/quizzes/fcdb59f5-76c2-47a4-8400-42b0f8e52e13
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.quizzes.get("fcdb59f5-76c2-47a4-8400-42b0f8e52e13");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "fcdb59f5-76c2-47a4-8400-42b0f8e52e13",
  "type": "post",
  "content_type": "quiz",
  "title": "Ordre croissant et décroissant",
  "name": "Ordre croissant et décroissant",
  "slug": "Ordre-croissant-et-decroissant",
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
  "display_result_after_each_question": false,
  "apply_filters_recursively": false,
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List quizzes

Lists all quizzes.

```endpoint
GET /v2/quizzes
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/quizzes
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const exams = await client.quizzes.list(offset, limit);
    console.log(exams);
}
```

#### Example response

```json
[
  {
    "id": "fcdb59f5-76c2-47a4-8400-42b0f8e52e13",
    "type": "post",
    "content_type": "quiz",
    "title": "Ordre croissant et décroissant",
    "name": "Ordre croissant et décroissant",
    "slug": "Ordre-croissant-et-decroissant",
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
    "display_result_after_each_question": false,
    "apply_filters_recursively": false,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "16b70f12-b985-4652-a703-e861d83ccdeb",
    "type": "post",
    "content_type": "quiz",
    "title": "Passé, présent, futur",
    "name": "Passé, présent, futur",
    "slug": "Passe-present-futur",
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
    "apply_filters_recursively": false,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  }
]
```

### Create a quiz

**Request**

Property | Type | Description
---|---|---
`content_type` | string | (**required**) must be one of the following terms: "exercise" or "secondary_exercise"
`title` | string | (**required**) must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean | (default: `true`)
`text_to_speech` | boolean | (default: `false`)
`display_result_after_each_question` | boolean | (default: `true`)
`apply_filters_recursively` | boolean | (default: `false`) Make sure that children also have the same member filters

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Quiz identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/quizzes
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/quizzes \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "content_type": "quiz",
  "title": "Les pronoms personnels"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.quizzes.create({
        content_type: "quiz",
        title: "Les pronoms personnels"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "e203dada-f1c7-4320-ad1f-49f617718101",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a quiz

**Request**

Property | Type | Description
---|---|---
`content_type` | string | must be one of the following terms: "exercise" or "secondary_exercise"
`title` | string | must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean | (default: `true`)
`text_to_speech` | boolean | (default: `false`)
`text_to_speech` | boolean | (default: `false`)
`display_result_after_each_question` | boolean | (default: `true`)
`publish_state` | string | Allow the user to set the quiz as "published" (or back into "draft")

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/quizzes/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/quizzes/e203dada-f1c7-4320-ad1f-49f617718101 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Les pronoms relatifs"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.quizzes.update("e203dada-f1c7-4320-ad1f-49f617718101", {
        name: "Les pronoms relatifs"
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

### Remove a quiz

Remove a quiz from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/quizzes/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/quizzes/5a80c62c-6c0e-4c94-8933-5024b02a755e
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.quizzes.remove("e203dada-f1c7-4320-ad1f-49f617718101");
    console.log(isRemoved);
}
```
