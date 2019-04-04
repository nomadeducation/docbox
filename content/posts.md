## Posts

### Metadata on posts

Retrieve metadata on posts such as the current count.

```endpoint
HEAD /v2/posts
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/posts

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.posts.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test post existence

Check if a post exists on our database.

```endpoint
HEAD /v2/posts/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/posts/0a903590-0141-4246-82b0-865e5c87f024
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.posts.exists("0a903590-0141-4246-82b0-865e5c87f024");
    console.log(doesExists);
}
```

### Get one post

Get infos about a specific post.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Post identifier
`type` | string | (_obsolete_) Specify the "type" of the content ("post" by default)
`content_type` | string | Specify the purpose of the post
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
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/posts/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/posts/5281a508-601b-4fb4-96c3-94f5608a6257
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.posts.get("0a903590-0141-4246-82b0-865e5c87f024");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "0a903590-0141-4246-82b0-865e5c87f024",
  "type": "post",
  "content_type": "course",
  "title": "Les polygones",
  "name": "Les polygones",
  "slug": "Les-polygones",
  "content": "<p>Un <b>polygone</b> est une figure qui a <b><u>plusieurs côtés.</u></b></p><p>C'est une ligne brisée fermée.</p><p>Un <b>triangle</b> est un polygone qui a <b><u>3 côtés et 3 sommets</u></b>.</p><p>Un <b>quadrilatère</b> est un polygone qui a <u><b>4 côtés et 4 sommets</b></u>.</p>",
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

### List posts

Lists all posts.

```endpoint
GET /v2/posts
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/posts
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const posts = await client.posts.list(offset, limit);
    console.log(posts);
}
```

#### Example response

```json
[
  {
    "id": "0a903590-0141-4246-82b0-865e5c87f024",
    "type": "post",
    "content_type": "course",
    "title": "Les polygones",
    "name": "Les polygones",
    "slug": "Les-polygones",
    "content": "<p>Un <b>polygone</b> est une figure qui a <b><u>plusieurs côtés.</u></b></p><p>C'est une ligne brisée fermée.</p><p>Un <b>triangle</b> est un polygone qui a <b><u>3 côtés et 3 sommets</u></b>.</p><p>Un <b>quadrilatère</b> est un polygone qui a <u><b>4 côtés et 4 sommets</b></u>.</p>",
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
    "id": "371308a0-0fc6-49c1-a00a-5b935b16e570",
    "type": "post",
    "content_type": "course",
    "title": "Le répertoire additif",
    "name": "Le répertoire additif",
    "slug": "Le-répertoire-additif",
    "content": "<p>Un <b>polygone</b> est une figure qui a <b><u>plusieurs côtés.</u></b></p><p>C'est une ligne brisée fermée.</p><p>Un <b>triangle</b> est un polygone qui a <b><u>3 côtés et 3 sommets</u></b>.</p><p>Un <b>quadrilatère</b> est un polygone qui a <u><b>4 côtés et 4 sommets</b></u>.</p>",
    "secondary_content": "",
    "excerpt": "",
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
    "created_at": "2018-07-11T13:59:03.656Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a post

**Request**

Property | Type | Description
---|---|---
`content_type` | string | (**required**) must be one of the following terms: "course", "news", "subject" or "correction"
`title` | string | (**required**) must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean | (default: `true`)
`text_to_speech` | boolean | (default: `false`)

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Post identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/posts
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/posts \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "content_type": "news",
  "title": "Fun Fact",
  "content": "Did you know that Ryan Reynolds loves pokémon?"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.posts.create({
        content_type: "news",
        title: "Fun Fact",
        content: "Did you know that Ryan Reynolds loves pokémon?"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "8919a27a-4285-45a9-85e6-390eedd5f776",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a post

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
`publish_state` | string | Allow the user to set the post as "published" (or back into "draft")

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/posts/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/posts/8919a27a-4285-45a9-85e6-390eedd5f776 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Cool Fact!"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.posts.update("8919a27a-4285-45a9-85e6-390eedd5f776", {
        name: "Cool Fact!"
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

### Remove a post

Remove a post from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/posts/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/posts/8919a27a-4285-45a9-85e6-390eedd5f776
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.posts.remove("8919a27a-4285-45a9-85e6-390eedd5f776");
    console.log(isRemoved);
}
```
