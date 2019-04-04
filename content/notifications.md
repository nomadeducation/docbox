## Notifications

### Metadata on notifications

Retrieve metadata on notifications such as the current count.

```endpoint
HEAD /v2/notifications
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/notifications

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.notifications.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test notification existence

Check if a notification exists on our database.

```endpoint
HEAD /v2/notifications/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/notifications/9e5e54c6-c919-410c-b2fc-7889e4d911f2
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.notifications.exists("9e5e54c6-c919-410c-b2fc-7889e4d911f2");
    console.log(doesExists);
}
```

### Get one notification

Get infos about a specific notification.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Notification identifier
`name` | string |
`title` | string | Should be the same value as `name`
`content` | string | The message
`send_date` | date | Date when the notification will be pushed
`payload` | object | Contains most of the extra data such as the deep link or an URL
`badge` | boolean | This will display a red dot on the app icon
`priority` | string | Does the notification should wake the mobile?
`ready_for_push` | boolean |
`is_sent` | boolean |
`sent_date` | date | Real date when the notification was pushed by our service
`batch_infos` | array of objects | (_internal_)
`batch_stats` | array of objects | (_internal_)
`filtered_by_member_fields` | boolean |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/notifications/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/notifications/9e5e54c6-c919-410c-b2fc-7889e4d911f2
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.notifications.get("9e5e54c6-c919-410c-b2fc-7889e4d911f2");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "9e5e54c6-c919-410c-b2fc-7889e4d911f2",
  "name": "Crédit Agricole Normandie",
  "title": "Crédit Agricole Normandie recrute",
  "content": "Bonjour, commencez bien le mois d'avril 🐠😎 ! RDV le mercredi 3 avril 2019 pour tenter de décrocher un CDI au Crédit Agricole Normandie",
  "send_date": "2019-04-01T16:00:00.000Z",
  "payload": {
      "notification_opens_item": [],
      "notification_opens_category_slug": null,
      "notification_opens_url": "http://bit.ly/2V0ikKC"
  },
  "badge": true,
  "ready_for_push": true,
  "is_sent": false,
  "batch_infos": [
      {
          "token": "20538d4dc9df12e46e87e165196f69de",
          "appId": "577379023a5087ec3144254b",
          "env": "production",
          "platform": "android"
      },
      {
          "token": "6b9e91f3d465589d2b8dd8621f0b7bd7",
          "appId": "577379023a5087ec3144254b",
          "env": "production",
          "platform": "ios"
      }
  ],
  "filtered_by_member_fields": true,
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List notifications

Lists all notifications.

```endpoint
GET /v2/notifications
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/notifications
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const notifications = await client.notifications.list(offset, limit);
    console.log(notifications);
}
```

#### Example response

```json
[
  {
    "id": "9e5e54c6-c919-410c-b2fc-7889e4d911f2",
    "name": "Crédit Agricole Normandie",
    "title": "Crédit Agricole Normandie recrute",
    "content": "Bonjour, commencez bien le mois d'avril 🐠😎 ! RDV le mercredi 3 avril 2019 pour tenter de décrocher un CDI au Crédit Agricole Normandie",
    "send_date": "2019-04-01T16:00:00.000Z",
    "payload": {
      "notification_opens_item": [],
      "notification_opens_category_slug": null,
      "notification_opens_url": "http://bit.ly/2V0ikKC"
    },
    "badge": true,
    "ready_for_push": true,
    "is_sent": true,
    "batch_infos": [
      {
          "token": "20538d4dc9df12e46e87e165196f69de",
          "appId": "577379023a5087ec3144254b",
          "env": "production",
          "platform": "android"
      },
      {
          "token": "6b9e91f3d465589d2b8dd8621f0b7bd7",
          "appId": "577379023a5087ec3144254b",
          "env": "production",
          "platform": "ios"
      }
    ],
    "filtered_by_member_fields": true,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "4ded9f1d-2a1e-444a-8161-0555990112df",
    "name": "Réforme du Bac 3ème",
    "title": "En route vers le Bac 2021 🚀",
    "content": "On te dit tout sur la réforme du Bac 2021 dans ton App ! Bon courage 💪",
    "send_date": "2019-03-26T17:00:00.000Z",
    "payload": {},
    "badge": true,
    "ready_for_push": false,
    "is_sent": false,
    "filtered_by_member_fields": true,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  }
]
```

### Create a notification

**Request**

Property | Type | Description
---|---|---
`name` | string | (**required**) must contains at least **1** character
`title` | string | (**required**) Should be the same value as `name`
`content` | string | (**required**) The message
`send_date` | date | (**required**) Date when the notification will be pushed
`payload` | object | Contains most of the extra data such as the deep link or an URL
`badge` | boolean | This will display a red dot on the app icon
`priority` | string | Does the notification should wake the mobile?
`ready_for_push` | boolean |
`is_sent` | boolean |
`sent_date` | date | Real date when the notification was pushed by our service
`batch_infos` | array of objects | (_internal_)
`batch_stats` | array of objects | (_internal_)
`filtered_by_member_fields` | boolean |

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Notification identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/notifications
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/notifications \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "Push Le Parisien",
  "title": "🙌 Tout pour réussir ton Bac 🙌",
  "content": "📰 Le Guide "Réussir ton Bac" de Phosphore est dans les kiosques >> trouve celui près de chez toi ! ",
  "send_date": "2019-04-02T15:40:00.000Z"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.notifications.create({
        name: "Push Le Parisien",
        title: "🙌 Tout pour réussir ton Bac 🙌",
        content: "📰 Le Guide "Réussir ton Bac" de Phosphore est dans les kiosques >> trouve celui près de chez toi ! ",
        send_date: "2019-04-02T15:40:00.000Z"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "7adc7e54-a977-49fe-9f71-9460a1163400",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a notification

**Request**

Property | Type | Description
---|---|---
`name` | string | must contains at least **1** character
`title` | string |
`content` | string |
`send_date` | date |
`payload` | object |
`badge` | boolean |
`priority` | string |
`ready_for_push` | boolean |
`is_sent` | boolean |
`sent_date` | date |
`batch_infos` | array of objects | (_internal_)
`batch_stats` | array of objects | (_internal_)

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/notifications/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/notifications/7adc7e54-a977-49fe-9f71-9460a1163400 \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "name": "PN La Parisienne"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.notifications.update("7adc7e54-a977-49fe-9f71-9460a1163400", {
        name: "PN La Parisienne"
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

### Remove a notification

Remove a notification from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/notifications/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/notifications/7adc7e54-a977-49fe-9f71-9460a1163400
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.notifications.remove("7adc7e54-a977-49fe-9f71-9460a1163400");
    console.log(isRemoved);
}
```
