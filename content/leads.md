## Leads

### Metadata on leads

Retrieve metadata on leads such as the current count.

```endpoint
HEAD /v2/leads
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/leads

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.leads.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test lead existence

Check if a lead exists on our database.

```endpoint
HEAD /v2/leads/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/leads/5bbdaf19-7b57-4a48-82fc-086bcca52679
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.leads.exists("5bbdaf19-7b57-4a48-82fc-086bcca52679");
    console.log(doesExists);
}
```

### Get one lead

Get infos about a specific lead.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Lead identifier
`app_name` | string |
`sponsor_name` | string |
`type` | string |
`name` | string |
`firstname` | string |
`lastname` | string |
`gender` | string |
`birthdate` | date |
`email` | string |
`phone` | string |
`address` | string |
`additional_address` | string |
`state` | string |
`zipcode` | string |
`city` | string |
`country` | string |
`specialties` | array of strings |
`optional_subjects` | array of strings |
`level_of_education` | string |
`level_of_education_absolute` | integer | Can either be negative or positive, the `0` stands for the equivalent year of our "Baccalauréat"
`branch` | string |
`major` | string |
`minor` | string |
`lv1` | string |
`obtained_degree` | string |
`current_degree` | string |
`current_degreefield` | string |
`current_exam` | string |
`current_school` | string |
`next_year_choices` | array of strings |
`study_choices` | array of objects |
`study_domains` | array of objects |
`commercial_interest` | string |
`pay_for_studies` | string |
`school_contact_acceptance` | boolean |
`job_contact_acceptance` | boolean |
`appointments` | array of objects |
`engagements` | array of objects |

```endpoint
GET /v2/leads/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/leads/c9810fb5-0a0b-40c7-97d6-d4699caf75cf
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.leads.get("5bbdaf19-7b57-4a48-82fc-086bcca52679");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "5bbdaf19-7b57-4a48-82fc-086bcca52679",
  "app_name": "Nomad Education",
  "type": "registration",
  "name": "satith@sfr.fr",
  "firstname": "Sou",
  "lastname": "Si",
  "gender": "M",
  "email": "satith@sfr.fr",
  "email_deliverable": true,
  "phone": "+33 6 11 12 21 11",
  "phone_exists": true,
  "state": "78 - Yvelines",
  "zipcode": "78280",
  "country": "France",
  "level_of_education": "Terminale",
  "branch": "ES",
  "major": "Mathématiques",
  "current_degree": "Bac général",
  "study_choices": [
      {
          "name": "Formation initiale",
          "id": "57ce6aae17ad1c922fb39cb4"
      },
      {
          "name": "À distance",
          "id": "57ce6b1e17ad1c922fb39cb5"
      }
  ],
  "study_domains": [
      {
          "name": "Commerce - Management - Marketing - RH",
          "id": "57d2d7eb9b8492a213391913",
          "studyDomainOptions": [
              {
                  "id": "57d909662c425adf3b0f13eb",
                  "name": "DUT"
              },
              {
                  "id": "57d2d761927ddc5f14fb7acf",
                  "name": "Ecole de commerce"
              }
          ]
      },
      {
          "name": "Sport - Business du Sport - STAPS",
          "id": "58048bf0133d7b5154dd3a76",
          "studyDomainOptions": [
              {
                  "id": "5b505ffd35a775751956fae2",
                  "name": "STAPS"
              }
          ]
      }
  ],
  "school_contact_acceptance": true,
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List leads

Lists all leads.

```endpoint
GET /v2/leads
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/leads
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const leads = await client.leads.list(offset, limit);
    console.log(leads);
}
```

#### Example response

```json
[
  {
    "id": "5bbdaf19-7b57-4a48-82fc-086bcca52679",
    "app_name": "Nomad Education",
    "type": "registration",
    "name": "satith@sfr.fr",
    "firstname": "Sou",
    "lastname": "Si",
    "gender": "M",
    "email": "satith@sfr.fr",
    "email_deliverable": true,
    "phone": "+33 6 11 12 21 11",
    "phone_exists": true,
    "state": "78 - Yvelines",
    "zipcode": "78280",
    "country": "France",
    "level_of_education": "Terminale",
    "branch": "ES",
    "major": "Mathématiques",
    "current_degree": "Bac général",
    "study_choices": [
        {
            "name": "Formation initiale",
            "id": "57ce6aae17ad1c922fb39cb4"
        },
        {
            "name": "À distance",
            "id": "57ce6b1e17ad1c922fb39cb5"
        }
    ],
    "study_domains": [
        {
            "name": "Commerce - Management - Marketing - RH",
            "id": "57d2d7eb9b8492a213391913",
            "studyDomainOptions": [
                {
                    "id": "57d909662c425adf3b0f13eb",
                    "name": "DUT"
                },
                {
                    "id": "57d2d761927ddc5f14fb7acf",
                    "name": "Ecole de commerce"
                }
            ]
        },
        {
            "name": "Sport - Business du Sport - STAPS",
            "id": "58048bf0133d7b5154dd3a76",
            "studyDomainOptions": [
                {
                    "id": "5b505ffd35a775751956fae2",
                    "name": "STAPS"
                }
            ]
        }
    ],
    "school_contact_acceptance": true,
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "93c07a30-96ee-4264-b75a-292e74ac2c03",
    "app_name": "Bac S",
    "type": "sponsor",
    "name": "muriellombard0617@gmail.com",
    "firstname": "Muriel",
    "lastname": "Dombale",
    "gender": "M",
    "email": "muriellombard0617@gmail.com",
    "email_deliverable": true,
    "phone": "+33633563514",
    "phone_exists": false,
    "state": "42 - Loire",
    "zipcode": "42460",
    "country": "France",
    "level_of_education": "Terminale",
    "level_of_education_absolute": 0,
    "branch": "S",
    "major": "SVT",
    "minor": "SVT",
    "current_degree": "Bac général",
    "study_choices": [
        {
            "name": "Formation initiale",
            "id": "57ce6aae17ad1c922fb39cb4"
        }
    ],
    "study_domains": [
        {
            "name": "Sport - Business du Sport - STAPS",
            "id": "58048bf0133d7b5154dd3a76",
            "studyDomainOptions": [
                {
                    "id": "5b505ffd35a775751956fae2",
                    "name": "STAPS"
                }
            ]
        }
    ],
    "school_contact_acceptance": true,
    "sponsor_name": "EF",
    "engagements": [
        {
            "source": "sponsorinfo",
            "contextModel": "sponsorinfo",
            "contextId": "5a2a5dd01027faf84ef1151a",
            "contentModel": "sponsorform",
            "contentId": "58cf964ae84bbefd508c5efd",
            "mailSentToUser": true
        }
    ],
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  }
]
```

### Create a lead

**Request**

Property | Type | Description
---|---|---
`app_name` | string |
`sponsor_name` | string |
`type` | string |
`name` | string |
`firstname` | string |
`lastname` | string |
`gender` | string |
`birthdate` | date |
`email` | string |
`phone` | string |
`address` | string |
`additional_address` | string |
`state` | string |
`zipcode` | string |
`city` | string |
`country` | string |
`specialties` | array of strings |
`optional_subjects` | array of strings |
`level_of_education` | string |
`level_of_education_absolute` | integer | Can either be negative or positive, the `0` stands for the equivalent year of our "Baccalauréat"
`branch` | string |
`major` | string |
`minor` | string |
`lv1` | string |
`obtained_degree` | string |
`current_degree` | string |
`current_degreefield` | string |
`current_exam` | string |
`current_school` | string |
`next_year_choices` | array of strings |
`study_choices` | array of objects |
`study_domains` | array of objects |
`commercial_interest` | string |
`pay_for_studies` | string |
`school_contact_acceptance` | boolean |
`job_contact_acceptance` | boolean |
`appointments` | array of objects |
`engagements` | array of objects |

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Lead identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/leads
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/leads \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "email": "john.j@rambo.mil"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.leads.create({
        email: "john.j@rambo.mil"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "c7aa75eb-d9a9-459b-9545-4db9e6b38a3b",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a lead

**Request**

Property | Type | Description
---|---|---
`app_name` | string |
`sponsor_name` | string |
`type` | string |
`name` | string |
`firstname` | string |
`lastname` | string |
`gender` | string |
`birthdate` | date |
`email` | string |
`email_deliverable` | boolean |
`phone` | string |
`phone_exists` | boolean |
`address` | string |
`additional_address` | string |
`state` | string |
`zipcode` | string |
`city` | string |
`country` | string |
`specialties` | array of strings |
`optional_subjects` | array of strings |
`level_of_education` | string |
`level_of_education_absolute` | integer |
`branch` | string |
`major` | string |
`minor` | string |
`lv1` | string |
`obtained_degree` | string |
`current_degree` | string |
`current_degreefield` | string |
`current_exam` | string |
`current_school` | string |
`next_year_choices` | array of strings |
`study_choices` | array of objects |
`study_domains` | array of objects |
`commercial_interest` | string |
`pay_for_studies` | string |
`school_contact_acceptance` | boolean |
`job_contact_acceptance` | boolean |
`appointments` | array of objects |
`engagements` | array of objects |

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/leads/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/leads/c7aa75eb-d9a9-459b-9545-4db9e6b38a3b \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "email_deliverable": true
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.leads.update("c7aa75eb-d9a9-459b-9545-4db9e6b38a3b", {
        email_deliverable: true
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

### Remove a lead

Remove a lead from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/leads/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/leads/c7aa75eb-d9a9-459b-9545-4db9e6b38a3b
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.leads.remove("c7aa75eb-d9a9-459b-9545-4db9e6b38a3b");
    console.log(isRemoved);
}
```
