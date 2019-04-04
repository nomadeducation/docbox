## Events

### Metadata on events

Retrieve metadata on events such as the current count.

```endpoint
HEAD /v2/events
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/events

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.events.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test event existence

Check if a event exists on our database.

```endpoint
HEAD /v2/events/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/events/d24e46ff-4bba-43de-baa4-bec6fec2f42d
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.events.exists("d24e46ff-4bba-43de-baa4-bec6fec2f42d");
    console.log(doesExists);
}
```

### Get one event

Get infos about a specific event.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Event identifier
`type` | string | (_obsolete_) Specify the "type" of the content ("event" by default)
`content_type` | string | Specify the purpose of the event
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
`start_date` | date | Beginning of the event as `active`
`end_date` | date |
`other_dates` | array of objects | Initially, it was set to store dates that are outside the [start; end] window but soon it has been also used to create notifications
`entire_days` | boolean | Is the event going on the entire day?
`address` | object | Description of the location (street name, city, etc)
`app_array` | array of strings | (_obsolete_)
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/events/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/events/d24e46ff-4bba-43de-baa4-bec6fec2f42d
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.events.get("d24e46ff-4bba-43de-baa4-bec6fec2f42d");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "d24e46ff-4bba-43de-baa4-bec6fec2f42d",
  "type": "event",
  "content_type": "event",
  "title": "Journée d'information IPMS",
  "name": "Journée d'information IPMS",
  "slug": "Journee-dinformation-IPMS",
  "content": "<h3>Journée d'information à IPMS !</h3><h4>Dates :&nbsp;</h4><p>Le 13 juin 2019</p><h4>Horaires :</h4><p>De 10h00 à 17h00</p><h4>Adresse :</h4><p>Campus de Nantes<br>17 Boulevard des Martyrs Nantais de la Résistance<br>44200 Nantes</p><h4>Programme  :</h4>Journée d'information sur rdv</ul>",
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
  "start_date": "2019-06-13T08:00:00.000Z",
  "end_date": "2019-06-13T15:00:00.000Z",
  "other_dates": [
      {
          "dateStart": "2019-06-13T08:00:00.000Z",
          "dateEnd": "2019-06-13T15:00:00.000Z",
          "entireDays": null,
          "notification": true,
          "notificationId": "5c9b466acdc0f6cf1e86891b",
          "notificationDate": "2019-06-10T15:00:00.000Z",
          "notificationTitle": "Journée d'information",
          "notificationMessage": "Journée d'information le 13 juin de 10h00 à 17h00 à Paris. Plus d'info dans ton app !"
      }
  ],
  "address": {
      "streetAddress": "17 Boulevard des Invalides",
      "zipCode": "75009",
      "cityName": "Paris"
  },
  "app_array": [],
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List events

Lists all events.

```endpoint
GET /v2/events
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/events
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const events = await client.events.list(offset, limit);
    console.log(events);
}
```

#### Example response

```json
[
  {
    "id": "d24e46ff-4bba-43de-baa4-bec6fec2f42d",
    "type": "event",
    "content_type": "event",
    "title": "Journée d'information IPMS",
    "name": "Journée d'information IPMS",
    "slug": "Journee-dinformation-IPMS",
    "content": "<h3>Journée d'information à IPMS !</h3><h4>Dates :&nbsp;</h4><p>Le 13 juin 2019</p><h4>Horaires :</h4><p>De 10h00 à 17h00</p><h4>Adresse :</h4><p>Campus de Nantes<br>17 Boulevard des Martyrs Nantais de la Résistance<br>44200 Nantes</p><h4>Programme  :</h4>Journée d'information sur rdv</ul>",
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
    "start_date": "2019-06-13T08:00:00.000Z",
    "end_date": "2019-06-13T15:00:00.000Z",
    "other_dates": [
      {
          "dateStart": "2019-06-13T08:00:00.000Z",
          "dateEnd": "2019-06-13T15:00:00.000Z",
          "entireDays": null,
          "notification": true,
          "notificationId": "5c9b466acdc0f6cf1e86891b",
          "notificationDate": "2019-06-10T15:00:00.000Z",
          "notificationTitle": "Journée d'information",
          "notificationMessage": "Journée d'information le 13 juin de 10h00 à 17h00 à Paris. Plus d'info dans ton app !"
      }
    ],
    "address": {
      "streetAddress": "17 Boulevard des Invalides",
      "zipCode": "75009",
      "cityName": "Paris"
    },
    "app_array": [],
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "d008395b-6c31-4f58-bad7-b67f2fd9d60f",
    "content_type": "event",
    "title": "Super JPO",
    "name": "Super JPO",
    "slug": "Super-JPO",
    "content": "<h3>JPO à Super U !</h3><h4>Dates :&nbsp;</h4><p>Le 33 mars 2019</p><h4>Horaires :</h4><p>De 10h00 à 9h00</p>",
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
    "start_date": "2019-03-23T09:00:00.000Z",
    "end_date": "2019-03-23T16:00:00.000Z",
    "other_dates": [],
    "address": {
      "cityName": "Melun"
    },
    "app_array": [],
    "created_at": "2018-07-11T13:59:03.656Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a event

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
`start_date` | date |
`end_date` | date |
`other_dates` | array of objects | (default: `[]`)
`entire_days` | boolean |
`address` | object | (default: `{}`)

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Event identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/events
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/events \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Fun Fact",
  "content": "Did you know that Ryan Reynolds loves pokémon?"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.events.create({
        title: "JPO",
        content: "Give us time and we will climb!"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "cb7c06a2-8a96-49fa-a81d-d52acd56400f",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a event

**Request**

Property | Type | Description
---|---|---
`title` | string | must contains at least **1** character
`content` | string |
`secondary_content` | string |
`excerpt` | string |
`external_link` | string |
`editor_access` | boolean |
`text_to_speech` | boolean |
`start_date` | date |
`end_date` | date |
`other_dates` | array of objects |
`entire_days` | boolean |
`address` | object |
`publish_state` | string | Allow the user to set the event as "published" (or back into "draft")


**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/events/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/events/cb7c06a2-8a96-49fa-a81d-d52acd56400f \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "publish_state": "published"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.events.update("cb7c06a2-8a96-49fa-a81d-d52acd56400f", {
        publish_state: "published"
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

### Remove a event

Remove a event from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/events/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/events/cb7c06a2-8a96-49fa-a81d-d52acd56400f
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.events.remove("cb7c06a2-8a96-49fa-a81d-d52acd56400f");
    console.log(isRemoved);
}
```
