## Media

### Metadata on media

Retrieve metadata on media such as the current count.

```endpoint
HEAD /v2/media
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/media

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.media.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test media existence

Check if a media exists on our database.

```endpoint
HEAD /v2/media/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/media/2a7d6c16-c7c3-49ce-a863-c5524df7fddd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.media.exists("2a7d6c16-c7c3-49ce-a863-c5524df7fddd");
    console.log(doesExists);
}
```

### Get one media

Get infos about a specific media.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Media identifier
`name` | string |
`description` | string |
`type` | string | Can be one of the following enum: `file`, `image`, `audio` or `video`
`mime` | string | The defined [Mime-Type](https://en.wikipedia.org/wiki/Media_type)
`url` | string | Link to the uploaded content
`width` | integer |
`height` | integer |
`sync_forced` | boolean | Tell the app if it needs to fetch this content during the synchronization process
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/media/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/media/2a7d6c16-c7c3-49ce-a863-c5524df7fddd
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.media.get("2a7d6c16-c7c3-49ce-a863-c5524df7fddd");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "2a7d6c16-c7c3-49ce-a863-c5524df7fddd",
  "name": "Best company",
  "description": "E-Corp",
  "type": "image",
  "mime": "image/png",
  "url": "https://res.cloudinary.com/nomadeducation/image/upload/v1494581566/Logos/logo_nomad_detoure.png",
  "width": 1600,
  "height": 543,
  "sync_forced": false,
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List media

Lists all media.

```endpoint
GET /v2/media
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/media
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const media = await client.media.list(offset, limit);
    console.log(media);
}
```

#### Example response

```json
[
  {
    "id": "2a7d6c16-c7c3-49ce-a863-c5524df7fddd",
    "name": "Bestest company",
    "description": "E-Corp",
    "type": "image",
    "mime": "image/png",
    "url": "https://res.cloudinary.com/nomadeducation/image/upload/v1494581566/Logos/logo_nomad_detoure.png",
    "width": 1600,
    "height": 543,
    "sync_forced": false,
    "created_at": "2018-09-14T07:33:45.903Z",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "1455d2ce-c14b-46f6-b955-83e5583cf381",
    "name": "Cool company",
    "description": "Too bad they use Ruby",
    "type": "image",
    "mime": "image/png",
    "url": "https://help.github.com/assets/images/site/invertocat.png",
    "width": 48,
    "height": 48,
    "sync_forced": false,
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a media

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character
`url` | string | (**required**)
`type` | string | (**required**) must be either **file**, **image**, **audio** or **video**
`mime` | string | corresponds to a valid mime type
`description` | string | can be empty
`width` | integer | expressed in pixel unit
`height` | integer | expressed in pixel unit
`sync_forced` | boolean | tell the app if the media must be synchronized before accessing to the content

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Media identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/media
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/media \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "New logo",
  "type": "image",
  "url": "https://nomadeducation.fr/images/logo.png"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.media.create({
        name: "New logo",
        type: "image",
        url: "https://nomadeducation.fr/images/logo.png"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a media

**Request**

[Same properties](#create-a-media) used when creating a media.

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/media/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/media/9916c2ae-bdc1-46e7-8543-4934f8d8ebce \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Best logo"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.media.update("9916c2ae-bdc1-46e7-8543-4934f8d8ebce", {
        name: "Best logo"
    });
    console.log(isUpdated);
}
```

#### Example response

```json
{
  "id": "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
  "created_at": "2018-08-07T13:47:23.077Z",
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```

### Remove a media

Remove a media from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/media/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/media/9916c2ae-bdc1-46e7-8543-4934f8d8ebce
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.media.remove("9916c2ae-bdc1-46e7-8543-4934f8d8ebce");
    console.log(isRemoved);
}
```
