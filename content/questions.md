## Questions

### Metadata on questions

Retrieve metadata on questions such as the current count.

```endpoint
HEAD /v2/questions
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/questions

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.questions.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test question existence

Check if a question exists on our database.

```endpoint
HEAD /v2/questions/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/questions/06a4bd27-23ec-4a9b-97ef-9846746596b7
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.questions.exists("06a4bd27-23ec-4a9b-97ef-9846746596b7");
    console.log(doesExists);
}
```

### Get one question

Get infos about a specific question.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Question identifier
`type` | string | (_obosolete_) Specify the "type" of the content ("question" by default)
`content_type` | string | Specify the purpose of the question
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
`template` | string | (_obosolete_)
`payload_schema` | string | (_obosolete_)
`payload` | string | (_obosolete_)
`parents_fixed_at` | string | (_obosolete_)
`filtered_by_member_fields` | string | Tells if this content is filtered using member fields (e.g. its level of education, grades, etc)
`filter_indexes` | string | (_obosolete_)
`activated_filters` | string | (_obosolete_)
`index` | integer | Give the position of the question during a quiz
`marking_type` | string | (_obosolete_)
`allow_multiple_responses` | boolean |
`tip` | string | Text to give a hint of the possible good response(s)
`difficulty` | integer | A scale that gives the theorical question difficulty
`value` | integer | (_obosolete_)
`valid_message` | string | Message that is displayed when the response was **correct**
`invalid_message` | string | Message that is displayed when the response was **incorrect**
`explanation` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/questions/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/questions/5c3790e5-2ef0-41e2-9729-26bacd64ced6
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.questions.get("06a4bd27-23ec-4a9b-97ef-9846746596b7");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "06a4bd27-23ec-4a9b-97ef-9846746596b7",
  "type": "question",
  "content_type": "question",
  "title": "Question 1",
  "name": "Question 1",
  "slug": "Question-1",
  "allow_multiple_responses": false,
  "content": "<p>Qui est Tierno Monénembo ?<br></p>",
  "explanation": "<p>Tierno Ménembo est un auteur francophone, né en 1947 à Poredaka, en Guinée.</p>",
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
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List questions

Lists all questions.

```endpoint
GET /v2/questions
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/questions
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const exams = await client.questions.list(offset, limit);
    console.log(exams);
}
```

#### Example response

```json
[
  {
    "id": "06a4bd27-23ec-4a9b-97ef-9846746596b7",
    "type": "question",
    "content_type": "question",
    "title": "Question 1",
    "name": "Question 1",
    "slug": "Question-1",
    "allow_multiple_responses": false,
    "content": "<p>Qui est Tierno Monénembo ?<br></p>",
    "explanation": "<p>Tierno Ménembo est un auteur francophone, né en 1947 à Poredaka, en Guinée.</p>",
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
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "134ca817-650a-4d95-bc1b-142fa4a614de",
    "type": "question",
    "content_type": "question",
    "title": "Question 2",
    "name": "Question 2",
    "slug": "Question-2",
    "allow_multiple_responses": false,
    "content": "<p>Quels sont les sujets traités par le romancier dans ses romans ?<br></p>",
    "explanation": "<p>Observateur attentif de la société en général et de l’Afrique contemporaine en particulier, l'auteur s'attache à dépeindre les maux qui accablent les sociétés actuelles.</p>",
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
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  }
]
```

### Create a question

**Request**

Property | Type | Description
---|---|---
`content_type` | string | (**required**) must be "question"
`title` | string | (**required**) must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean | (default: `true`)
`text_to_speech` | boolean | (default: `false`)
`index` | integer | must be **above** 0
`marking_type` | string |
`allow_multiple_responses` | boolean |
`tip` | string |
`difficulty` | integer | must be **between** 0 and 10
`value` | integer | must be **above** 0
`valid_message` | string |
`invalid_message` | string |
`explanation` | string |

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Question identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/questions
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/questions \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "content_type": "question",
  "title": "Question facile",
  "content": "Quel est la couleur du cheval blanc d'Henri IV ?",
  "explanation": "La réponse est dans la question ;)"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.questions.create({
        content_type: "question",
        title: "Question facile",
        content: "Quel est la couleur du cheval blanc d'Henri IV ?",
        explanation: "La réponse est dans la question ;)"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "55b0627b-864f-4315-9e5b-11b9753b1586",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a question

**Request**

Property | Type | Description
---|---|---
`content_type` | string | must be one of the following terms: "course", "news", "subject" or "correction"
`title` | string | must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean | (default: `true`)
`text_to_speech` | boolean | (default: `false`)
`text_to_speech` | boolean | (default: `false`)
`index` | integer | must be **above** 0
`marking_type` | string |
`allow_multiple_responses` | boolean |
`tip` | string |
`difficulty` | must be **between** 0 and 10
`value` | integer | must be **above** 0
`valid_message` | string |
`invalid_message` | string |
`publish_state` | string | Allow the user to set the question as "published" (or back into "draft")

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/questions/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/questions/55b0627b-864f-4315-9e5b-11b9753b1586 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Quelle question !"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.questions.update("55b0627b-864f-4315-9e5b-11b9753b1586", {
        name: "Quelle question !"
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

### Remove a question

Remove a question from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/questions/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/questions/55b0627b-864f-4315-9e5b-11b9753b1586
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.questions.remove("55b0627b-864f-4315-9e5b-11b9753b1586");
    console.log(isRemoved);
}
```
