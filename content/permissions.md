## Permissions

### Metadata on permissions

Retrieve metadata on permissions such as the current count.

```endpoint
HEAD /v2/permissions
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/permissions

HTTP/1.1 200 OK
Content-Range: items */666
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.permission.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test permission existence

Check if a permission exists on our database.

```endpoint
HEAD /v2/permissions/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/permissions/388ac2b7-e737-4124-8125-d4a2d8db1585
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.permission.exists("388ac2b7-e737-4124-8125-d4a2d8db1585");
    console.log(doesExists);
}
```

### Get one permission

Get infos about a specific permission.

```endpoint
GET /v2/permissions/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/permissions/388ac2b7-e737-4124-8125-d4a2d8db1585
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const permission = await client.permission.get("388ac2b7-e737-4124-8125-d4a2d8db1585");
    console.log(permission);
}
```

#### Example response

```json
{
  "id": "388ac2b7-e737-4124-8125-d4a2d8db1585",
  "name": "identity.users.get",
  "created_at": "2018-08-10T13:37:45.903Z",
  "updated_at": "2018-08-10T13:37:45.903Z"
}
```

### List permissions

Lists all permissions.

```endpoint
GET /v2/permissions
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/permissions
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 40;
    const limit = 2;
    const permissions = await client.permission.list(offset, limit);
    console.log(permissions);
}
```

#### Example response

```json
[
  {
    "id": "388ac2b7-e737-4124-8125-d4a2d8db1585",
    "name": "identity.users.get",
    "created_at": "2018-08-10T13:37:45.903Z",
    "updated_at": "2018-08-10T13:37:45.903Z"
  },
  {
    "id": "4a27c6fe-cc7b-4ecb-ad87-ee5e599eb86e",
    "name": "identity.users.list",
    "created_at": "2018-08-11T23:37:40.000Z",
    "updated_at": "2018-08-11T23:37:40.000Z"
  }
]
```
