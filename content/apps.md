## Apps

### Metadata on apps

Retrieve metadata on apps such as the current count.

```endpoint
HEAD /v2/apps
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/apps

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.apps.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test app existence

Check if a app exists on our database.

```endpoint
HEAD /v2/apps/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/apps/df8e17a0-4cbf-468c-af95-205d6d1b6fca
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.apps.exists("df8e17a0-4cbf-468c-af95-205d6d1b6fca");
    console.log(doesExists);
}
```

### Get one app

Get infos about a specific app.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | App identifier
`name` | string |
`is_model` | boolean | Identify the app as a template for other apps
`bundle_mode` | boolean | If `true`, this will enable the "bundle" mode which tell the app to download cached content instead of the "live" one
`degraded_mode` | boolean | If `true`, this will enable the "degraded" mode which disable some features
`android_staging_key` | string | This is the **Batch** API key for the staging env. for Android apps
`android_prod_key` | string |  This is the **Batch** API key for the prod env. for Android apps
`ios_staging_key` | string |  This is the **Batch** API key for the staging env. for iOS apps
`ios_prod_key` | string |  This is the **Batch** API key for the prod env. for iOS apps
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/apps/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/apps/df8e17a0-4cbf-468c-af95-205d6d1b6fca
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.apps.get("df8e17a0-4cbf-468c-af95-205d6d1b6fca");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "df8e17a0-4cbf-468c-af95-205d6d1b6fca",
  "name": "Bac Scientifique",
  "is_model": false,
  "bundle_mode": false,
  "degraded_mode": false,
  "android_staging_key": "",
  "android_prod_key": "",
  "ios_staging_key": "",
  "ios_prod_key": "",
  "api_key": "",
  "created_at": "2018-09-14T07:33:45.903Z",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List apps

Lists all apps.

```endpoint
GET /v2/apps
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/apps
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const apps = await client.apps.list(offset, limit);
    console.log(apps);
}
```

#### Example response

```json
[
  {
    "id": "df8e17a0-4cbf-468c-af95-205d6d1b6fca",
    "name": "Bac Scientifique",
    "is_model": false,
    "bundle_mode": false,
    "degraded_mode": false,
    "android_staging_key": "",
    "android_prod_key": "",
    "ios_staging_key": "",
    "ios_prod_key": "",
    "api_key": "",
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "e392ce86-5ff3-4469-ae62-90abc6cfdab0",
    "name": "Nouveau Bac",
    "is_model": true,
    "bundle_mode": false,
    "degraded_mode": false,
    "android_staging_key": "",
    "android_prod_key": "",
    "ios_staging_key": "",
    "ios_prod_key": "",
    "api_key": "",
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a app

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character
`is_model` | boolean | (default: `false`)
`bundle_mode` | boolean | (default: `false`)
`degraded_mode` | boolean | (default: `false`)
`android_staging_key` | string | must contains exactly **30** characters
`android_prod_key` | string | must contains exactly **30** characters
`ios_staging_key` | string | must contains exactly **30** characters
`ios_prod_key` | string | must contains exactly **30** characters

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | App identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/apps
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/apps \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Bac Littéraire"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.apps.create({name: "Bac Littéraire"});
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "a8292580-72c3-4672-bbae-5ec5aba55c35",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a app

**Request**

Property | Type | Description
---|---|---
`name` | string | must contains at least **1** character
`is_model` | boolean |
`bundle_mode` | boolean |
`degraded_mode` | boolean |
`android_staging_key` | string | must contains exactly **30** characters
`android_prod_key` | string | must contains exactly **30** characters
`ios_staging_key` | string | must contains exactly **30** characters
`ios_prod_key` | string | must contains exactly **30** characters

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/apps/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/apps/a8292580-72c3-4672-bbae-5ec5aba55c35 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Bac L"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.apps.update("a8292580-72c3-4672-bbae-5ec5aba55c35", {
        name: "Bac L"
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

### Remove a app

Remove a app from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/apps/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/apps/a8292580-72c3-4672-bbae-5ec5aba55c35
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.apps.remove("a8292580-72c3-4672-bbae-5ec5aba55c35");
    console.log(isRemoved);
}
```
