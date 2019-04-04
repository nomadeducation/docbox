## Forms

### Metadata on forms

Retrieve metadata on forms such as the current count.

```endpoint
HEAD /v2/forms
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/forms

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.forms.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test form existence

Check if a form exists on our database.

```endpoint
HEAD /v2/forms/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/forms/fe65e60f-8769-4964-a954-3e7aa140a4b1
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.forms.exists("fe65e60f-8769-4964-a954-3e7aa140a4b1");
    console.log(doesExists);
}
```

### Get one form

Get infos about a specific form.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Form identifier
`type` | string | (_obsolete_) Specify the "type" of the content ("form" by default)
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
`form_schema` | object | Complex object that is used to generate the form
`form_type` | string | Either `registration` or `sponsor`
`valid_message` | string |
`invalid_message` | string |
`submitted_message` | string |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/forms/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/forms/fe65e60f-8769-4964-a954-3e7aa140a4b1
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.forms.get("fe65e60f-8769-4964-a954-3e7aa140a4b1");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "fe65e60f-8769-4964-a954-3e7aa140a4b1",
  "type": "post",
  "title": "Formulaire d'inscription",
  "name": "Formulaire d'inscription",
  "slug": "Enregistrez-vous",
  "content": "",
  "secondary_content": "<p>n° CNIL 1851265<br>Ces informations sont nécessaires pour traiter votre demande.<span class=\"Apple-converted-space\">&nbsp;</span><br>Elles sont enregistrées dans notre fichier d'utilisateurs et peuvent donner lieu à l’exercice du droit d’accès et de rectification auprès de nos services: info@nomadeducation.fr</p><p>En soumettant ces informations, vous autorisez les partenaires de Nomad Education à vous contacter pour obtenir des informations supplémentaires. Vous acceptez la politique de confidentialité de Nomad Education et reconnaissez pouvoir recevoir des appels, sms ou emails des établissements avec possibilité de désinscription à tout moment.</p>",
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
  "submitted_message": "<h2>Votre enregistrement a bien été pris en compte</h2>",
  "form_schema": {
      "fields": [
          {
              "type": "text",
              "label": "Prénom",
              "name": "prenom",
              "required": true,
              "lead_identifier": "firstName"
          },
          {
              "type": "text",
              "label": "Nom",
              "name": "nom",
              "required": true,
              "lead_identifier": "lastName"
          },
          {
              "type": "email",
              "label": "Email",
              "name": "email",
              "required": true,
              "lead_identifier": "email",
              "options": null
          },
          {
              "type": "select_values",
              "label": "Genre",
              "name": "genre",
              "required": true,
              "lead_identifier": "gender",
              "options": [
                  {
                      "name": "M",
                      "value": "M"
                  },
                  {
                      "name": "F",
                      "value": "F"
                  }
              ]
          },
          {
              "type": "select",
              "label": "J'accepte d'être mis(e) en relation avec Concours Avenir",
              "name": "jaccepte-que-mes-donnees-soient-transmises-a-concours-avenir",
              "required": true,
              "lead_identifier": "currentSchool",
              "options": [
                  "Oui",
                  "Non"
              ]
          }
      ]
  },
  "form_type": "sponsor",
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List forms

Lists all forms.

```endpoint
GET /v2/forms
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/forms
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const forms = await client.forms.list(offset, limit);
    console.log(forms);
}
```

#### Example response

```json
[
  {
    "id": "fe65e60f-8769-4964-a954-3e7aa140a4b1",
    "type": "post",
    "title": "Formulaire d'inscription",
    "name": "Formulaire d'inscription",
    "slug": "Enregistrez-vous",
    "content": "",
    "secondary_content": "<p>n° CNIL 1851265<br>Ces informations sont nécessaires pour traiter votre demande.<span class=\"Apple-converted-space\">&nbsp;</span><br>Elles sont enregistrées dans notre fichier d'utilisateurs et peuvent donner lieu à l’exercice du droit d’accès et de rectification auprès de nos services: info@nomadeducation.fr</p><p>En soumettant ces informations, vous autorisez les partenaires de Nomad Education à vous contacter pour obtenir des informations supplémentaires. Vous acceptez la politique de confidentialité de Nomad Education et reconnaissez pouvoir recevoir des appels, sms ou emails des établissements avec possibilité de désinscription à tout moment.</p>",
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
    "submitted_message": "<h2>Votre enregistrement a bien été pris en compte</h2>",
    "form_schema": {
      "fields": [
          {
              "type": "text",
              "label": "Prénom",
              "name": "prenom",
              "required": true,
              "lead_identifier": "firstName"
          },
          {
              "type": "text",
              "label": "Nom",
              "name": "nom",
              "required": true,
              "lead_identifier": "lastName"
          },
          {
              "type": "email",
              "label": "Email",
              "name": "email",
              "required": true,
              "lead_identifier": "email",
              "options": null
          },
          {
              "type": "select_values",
              "label": "Genre",
              "name": "genre",
              "required": true,
              "lead_identifier": "gender",
              "options": [
                  {
                      "name": "M",
                      "value": "M"
                  },
                  {
                      "name": "F",
                      "value": "F"
                  }
              ]
          },
          {
              "type": "select",
              "label": "J'accepte d'être mis(e) en relation avec Concours Avenir",
              "name": "jaccepte-que-mes-donnees-soient-transmises-a-concours-avenir",
              "required": true,
              "lead_identifier": "currentSchool",
              "options": [
                  "Oui",
                  "Non"
              ]
          }
      ]
    },
    "form_type": "sponsor",
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "99a6df90-3ea6-4f64-9861-ce4acb6d15f4",
    "type": "post",
    "title": "EXCOSUP ME",
    "name": "EXCOSUP ME",
    "slug": "EXCOSUP ME",
    "content": "<p>Merci de remplir ce formulaire pour recevoir des informations sur l'école.<br></p>",
    "secondary_content": "<p>n° CNIL 1851265<br>Ces informations sont nécessaires pour traiter votre demande.<span class=\"Apple-converted-space\">&nbsp;</span><br>Elles sont enregistrées dans notre fichier d'utilisateurs et peuvent donner lieu à l’exercice du droit d’accès et de rectification auprès de nos services: info@nomadeducation.fr</p><p>En soumettant ces informations, vous autorisez les partenaires de Nomad Education à vous contacter pour obtenir des informations supplémentaires. Vous acceptez la politique de confidentialité de Nomad Education et reconnaissez pouvoir recevoir des appels, sms ou emails des établissements avec possibilité de désinscription à tout moment.</p>",
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
    "submitted_message": "<h2>Votre enregistrement a bien été pris en compte</h2>",
    "form_schema": {
        "fields": [
            {
                "type": "text",
                "label": "Prénom",
                "name": "prenom",
                "required": true,
                "lead_identifier": "firstName"
            },
            {
                "type": "text",
                "label": "Nom",
                "name": "nom",
                "required": true,
                "lead_identifier": "lastName"
            },
            {
                "type": "email",
                "label": "Email",
                "name": "email",
                "required": true,
                "lead_identifier": "email",
                "options": null
            },
            {
                "type": "country",
                "label": "Pays",
                "name": "pays",
                "required": true,
                "lead_identifier": "country",
                "options": null
            },
            {
                "type": "phone",
                "label": "Téléphone",
                "name": "telephone",
                "required": true,
                "lead_identifier": "phone",
                "options": null
            },
            {
                "type": "select_values",
                "label": "Niveau d'étude",
                "name": "niveau-detude",
                "required": true,
                "lead_identifier": "levelOfEducationAbsolute",
                "options": [
                    {
                        "name": "2nde"
                    },
                    {
                        "name": "1ère"
                    },
                    {
                        "name": "Terminale"
                    },
                    {
                        "name": "Bac +1"
                    },
                    {
                        "name": "Bac +2"
                    },
                    {
                        "name": "Bac +3"
                    },
                    {
                        "name": "Bac +4"
                    },
                    {
                        "name": "Bac +5"
                    }
                ]
            }
        ]
    },
    "form_type": "registration",
    "created_at": "2018-07-11T13:59:03.656Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a form

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
`form_schema` | object | (default: `{}`)
`form_type` | string |
`valid_message` | string |
`invalid_message` | string |
`submitted_message` | string |

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Form identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/forms
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/forms \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Form idable"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.forms.create({
        title: "Form idable"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "7a8acd7c-62bb-4bb3-9773-ec61c904770c",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a form

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
`publish_state` | string | Allow the user to set the form as "published" (or back into "draft")
`form_schema` | object |
`form_type` | string |
`valid_message` | string |
`invalid_message` | string |
`submitted_message` | string |

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/forms/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/forms/7a8acd7c-62bb-4bb3-9773-ec61c904770c \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Fort minable"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.forms.update("7a8acd7c-62bb-4bb3-9773-ec61c904770c", {
        title: "Fort minable"
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

### Remove a form

Remove a form from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/forms/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/forms/7a8acd7c-62bb-4bb3-9773-ec61c904770c
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.forms.remove("7a8acd7c-62bb-4bb3-9773-ec61c904770c");
    console.log(isRemoved);
}
```
