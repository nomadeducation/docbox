## Jobs

### Metadata on jobs

Retrieve metadata on jobs such as the current count.

```endpoint
HEAD /v2/jobs
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/jobs

HTTP/1.1 200 OK
Content-Range: items */1337
...
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const {maxItemsPerPage, count} = await client.jobs.metadata();
    console.log(count, maxItemsPerPage);
}
```

### Test job existence

Check if a job exists on our database.

```endpoint
HEAD /v2/jobs/:id
```

#### Example request

```curl
curl -X HEAD https://api.nomadeducation.com/v2/jobs/837f61be-93f3-41bf-b248-a460e90aa30e
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const doesExists = await client.jobs.exists("837f61be-93f3-41bf-b248-a460e90aa30e");
    console.log(doesExists);
}
```

### Get one job

Get infos about a specific job.

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Job identifier
`type` | string | (_obsolete_) Specify the "type" of the content ("job" by default)
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
`short_description` | string |
`skills` | array of objects |
`domains` | array of objects |
`created_by` | string (UUID) | User identifier of the creator
`created_at` | date string (ISO 8601) |
`updated_at` | date string (ISO 8601) |

```endpoint
GET /v2/jobs/:id
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/jobs/837f61be-93f3-41bf-b248-a460e90aa30e
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const infos = await client.jobs.get("837f61be-93f3-41bf-b248-a460e90aa30e");
    console.log(infos);
}
```

#### Example response

```json
{
  "id": "837f61be-93f3-41bf-b248-a460e90aa30e",
  "type": "job",
  "title": "Chef de rayon",
  "name": "Chef de rayon",
  "slug": "Chef-de-rayon",
  "content": "<h2><b>Missions :</b></h2><ul><li>gérer les stocks et les approvisionnements de son rayon,</li><li>gérer la mise en rayon des produits,</li><li>veiller à la propreté et l’hygiène des rayons et à l’étiquetage des produits,</li><li>suivre et analyser les résultats des ventes et mener des actions correctives,</li><li>développer le chiffre d’affaires du rayon grâce à des opérations commerciales et au merchandising,</li><li>négocier avec certains fournisseurs,</li><li>recruter, animer et former une équipe et établir les plannings.<br></li></ul><h2><b>Formation :</b></h2><ul><li>BTS MUC (Management des Unités Commerciales),</li><li>BTS NRC (Négociation et Relation Client),</li><li>DUT TC (Techniques de commercialisation),</li><li>BTEC 5 HND en marketing-ventes,</li><li>master ou diplôme de niveau I en école de commerce avec spécialisation commerciale.<br></li></ul><h2><b>Débouchés :</b></h2><ul><li>grande distribution,<br></li><li>évolution vers le poste de chef de secteur (ou chef de département) ou acheteur dans une centrale d’achats.</li></ul><h2><b>Salaire :</b></h2><ul><li>de 1 800 et 2 500 € bruts par mois + primes.<br></li></ul><h2><b>Les + :</b></h2><ul><li>capacités managériales,</li><li>dynamisme,</li><li>endurance,</li><li>sens de la négociation, du contact et du détail,</li><li>rigueur,</li><li>organisation,</li><li>esprit de compétition,</li><li>autonomie,</li><li>grande disponibilité.</li></ul>",
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
  "short_description": "",
  "skills": [
      {
          "name": "Commercial",
          "weight": 80,
          "minScore": 65,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093c",
                  "type": "question"
              }
          ],
          "text_success": "Votre fibre commerciale est un gage de réussite.",
          "text_failure": "Votre fibre commerciale, vous devrez développer !"
      },
      {
          "name": "Terrain",
          "weight": 90,
          "minScore": 65,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093d",
                  "type": "question"
              }
          ],
          "text_success": "Si vous recherchez un métier de terrain, vous l'avez trouvé.",
          "text_failure": "Si le terrain vous rebute, ce métier n'est peut-être pas fait pour vous."
      },
      {
          "name": "Challenge",
          "weight": 50,
          "minScore": 50,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093e",
                  "type": "question"
              }
          ],
          "text_success": "Votre goût du challenge fera des merveilles.",
          "text_failure": "Votre manque d'intérêt pour le challenge peut être un handicap."
      },
      {
          "name": "Pédagogie",
          "weight": 75,
          "minScore": 65,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093f",
                  "type": "question"
              }
          ],
          "text_success": "Votre sens de la pédagogie constitue un avantage.",
          "text_failure": "Votre manque de pédagogie risque de vous desservir."
      },
      {
          "name": "Dynamisme",
          "weight": 80,
          "minScore": 65,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093b",
                  "type": "question"
              }
          ],
          "text_success": "Votre dynamisme est un atout de taille.",
          "text_failure": "Sans dynamisme, point de salut !"
      }
  ],
  "domains": [
      {
          "id": "57d2d7eb9b8492a213391913",
          "name": "Commerce - Management - Entrepreneuriat - RH"
      }
  ],
  "created_at": "2018-09-14T07:33:45.903Z",
  "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
  "updated_at": "2018-09-14T07:33:45.903Z"
}
```

### List jobs

Lists all jobs.

```endpoint
GET /v2/jobs
```

#### Example request

```curl
curl https://api.nomadeducation.com/v2/jobs
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const offset = 42;
    const limit = 2;
    const jobs = await client.jobs.list(offset, limit);
    console.log(jobs);
}
```

#### Example response

```json
[
  {
    "id": "837f61be-93f3-41bf-b248-a460e90aa30e",
    "type": "job",
    "title": "Chef de rayon",
    "name": "Chef de rayon",
    "slug": "Chef-de-rayon",
    "content": "<h2><b>Missions :</b></h2><ul><li>gérer les stocks et les approvisionnements de son rayon,</li><li>gérer la mise en rayon des produits,</li><li>veiller à la propreté et l’hygiène des rayons et à l’étiquetage des produits,</li><li>suivre et analyser les résultats des ventes et mener des actions correctives,</li><li>développer le chiffre d’affaires du rayon grâce à des opérations commerciales et au merchandising,</li><li>négocier avec certains fournisseurs,</li><li>recruter, animer et former une équipe et établir les plannings.<br></li></ul><h2><b>Formation :</b></h2><ul><li>BTS MUC (Management des Unités Commerciales),</li><li>BTS NRC (Négociation et Relation Client),</li><li>DUT TC (Techniques de commercialisation),</li><li>BTEC 5 HND en marketing-ventes,</li><li>master ou diplôme de niveau I en école de commerce avec spécialisation commerciale.<br></li></ul><h2><b>Débouchés :</b></h2><ul><li>grande distribution,<br></li><li>évolution vers le poste de chef de secteur (ou chef de département) ou acheteur dans une centrale d’achats.</li></ul><h2><b>Salaire :</b></h2><ul><li>de 1 800 et 2 500 € bruts par mois + primes.<br></li></ul><h2><b>Les + :</b></h2><ul><li>capacités managériales,</li><li>dynamisme,</li><li>endurance,</li><li>sens de la négociation, du contact et du détail,</li><li>rigueur,</li><li>organisation,</li><li>esprit de compétition,</li><li>autonomie,</li><li>grande disponibilité.</li></ul>",
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
    "short_description": "",
    "skills": [
      {
          "name": "Commercial",
          "weight": 80,
          "minScore": 65,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093c",
                  "type": "question"
              }
          ],
          "text_success": "Votre fibre commerciale est un gage de réussite.",
          "text_failure": "Votre fibre commerciale, vous devrez développer !"
      },
      {
          "name": "Terrain",
          "weight": 90,
          "minScore": 65,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093d",
                  "type": "question"
              }
          ],
          "text_success": "Si vous recherchez un métier de terrain, vous l'avez trouvé.",
          "text_failure": "Si le terrain vous rebute, ce métier n'est peut-être pas fait pour vous."
      },
      {
          "name": "Challenge",
          "weight": 50,
          "minScore": 50,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093e",
                  "type": "question"
              }
          ],
          "text_success": "Votre goût du challenge fera des merveilles.",
          "text_failure": "Votre manque d'intérêt pour le challenge peut être un handicap."
      },
      {
          "name": "Pédagogie",
          "weight": 75,
          "minScore": 65,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093f",
                  "type": "question"
              }
          ],
          "text_success": "Votre sens de la pédagogie constitue un avantage.",
          "text_failure": "Votre manque de pédagogie risque de vous desservir."
      },
      {
          "name": "Dynamisme",
          "weight": 80,
          "minScore": 65,
          "questions": [
              {
                  "id": "56fba55bf826c52f1328093b",
                  "type": "question"
              }
          ],
          "text_success": "Votre dynamisme est un atout de taille.",
          "text_failure": "Sans dynamisme, point de salut !"
      }
    ],
    "domains": [
      {
          "id": "57d2d7eb9b8492a213391913",
          "name": "Commerce - Management - Entrepreneuriat - RH"
      }
    ],
    "created_at": "2018-09-14T07:33:45.903Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-09-14T07:33:45.903Z"
  },
  {
    "id": "08bf0e77-555e-40de-b1e4-4b2b0a3f3d4c",
    "type": "job",
    "title": "Responsable de boutique",
    "name": "Responsable de boutique",
    "slug": "Responsable-de-boutique",
    "content": "<h2><b>Missions :</b><br></h2><ul><li>développer le chiffre d'affaires d’un magasin et assurer la relation clients dans un but de fidélisation,</li><li>assurer la gestion commerciale, logistique et administrative du point de vente&nbsp;: inventaire, stocks, encaissements…,</li><li>appliquer les techniques de merchandising, de promotion et de marketing,</li><li>suivre les indicateurs de performance, et mener les actions correctives nécessaires,</li><li>recruter, manager et animer équipe.</li></ul><h2><b>Formations :</b></h2><ul><li>BTS MUC (Management des Unités Commerciales),</li><li>BTS NRC (Négociation et Relation Client),</li><li>DUT TC (Techniques de Commercialisation),</li><li>BTEC 5 HND en marketing-ventes,</li><li>DUT GEA (Gestion des Entreprises et des Administrations),</li><li>licence professionnelle en management du point de vente,</li><li>diplôme d’une école spécialisée ou de commerce (bac+3 ou bac+5)</li><li>MBA Business et management commercial.</li></ul><h2><b>Débouchés :</b></h2><ul><li>enseignes de tout secteur d'activité,</li><li>en indépendant.</li></ul><h2><b>Salaire :</b></h2><ul><li>1&nbsp;800 à 4&nbsp;000 € bruts par mois (fixe + primes + commissions).</li></ul><h2><b>Les + :</b></h2><ul><li>excellente présentation,&nbsp;</li><li>aisance relationnelle,&nbsp;</li><li>fibre commerciale,&nbsp;</li><li>sens de l’accueil et du conseil,</li><li>capacités managériales,</li><li>goût du challenge,</li><li>autonomie,&nbsp;</li><li>dynamisme,</li><li>patience,</li><li>polyvalence,</li><li>bonne résistance au stress,</li><li>organisation,</li><li>maîtrise de l’anglais et de l’outil informatique.</li></ul>",
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
    "short_description": "",
    "skills": [
    {
        "name": "Challenge",
        "weight": 90,
        "minScore": 65,
        "questions": [
            {
                "id": "56fba3bdf826c52f1328092c",
                "type": "question"
            }
        ],
        "text_success": "Votre capacité à relever des challenges sera déterminante.",
        "text_failure": "Relever des challenges est important dans bon nombre de métiers, il va falloir vous forcer."
    },
    {
        "name": "Commercial",
        "weight": 85,
        "minScore": 65,
        "questions": [
            {
                "id": "56fba3bdf826c52f1328092a",
                "type": "question"
            }
        ],
        "text_success": "Votre fibre commerciale fera des merveilles.",
        "text_failure": "Votre manque de fibre commerciale peut être rédhibitoire."
    },
    {
        "name": "Leadership",
        "weight": 85,
        "minScore": 65,
        "questions": [
            {
                "id": "56fba3bdf826c52f1328092b",
                "type": "question"
            }
        ],
        "text_success": "Votre leadership ? Un facteur-clé de réussite.",
        "text_failure": "Votre leadership, vous devrez améliorer !"
    },
    {
        "name": "Polyvalence",
        "weight": 90,
        "minScore": 65,
        "questions": [
            {
                "id": "56fba3bdf826c52f13280929",
                "type": "question"
            }
        ],
        "text_success": "Votre goût pour la polyvalence vous fera apprécier ce job.",
        "text_failure": "Si la polyvalence vous effraye, ce métier n'est peut-être pas fait pour vous."
    },
    {
        "name": "Sens du service",
        "weight": 85,
        "minScore": 65,
        "questions": [
            {
                "id": "56fba3bdf826c52f13280928",
                "type": "question"
            }
        ],
        "text_success": "Votre sens du service est un atout de taille.",
        "text_failure": "Votre faible sens du service risque de vous desservir."
    }
    ],
    "domains": [
      {
        "id": "57d2d7eb9b8492a213391913",
        "name": "Commerce - Management - Entrepreneuriat - RH"
      }
    ],
    "created_at": "2018-07-11T13:59:03.656Z",
    "created_by": "4ab4d646-1837-40b3-a64c-2658ad94624f",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a job

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
`short_description` | string |
`skills` | array of objects |
`domains` | array of objects |

**Response**

Property | Type | Description
---|---|---
`id` | string (UUID) | Job identifier
`created_at` | date string (ISO 8601) |

```endpoint
POST /v2/jobs
```

#### Example request

```curl
curl -X POST https://api.nomadeducation.com/v2/jobs \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Developer"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const newResource = await client.jobs.create({
        title: "Developer"
    });
    console.log(newResource);
}
```

#### Example response

```json
{
  "id": "1cda1399-7e16-47d1-aea1-b075318f369b",
  "created_at": "2018-08-07T13:47:23.077Z"
}
```

### Update a job

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
`short_description` | string |
`skills` | array of objects |
`domains` | array of objects |
`publish_state` | string | Allow the user to set the job as "published" (or back into "draft")

**Response**

Property | Type | Description
---|---|---
`updated_at` | date string (ISO 8601) |

```endpoint
PATCH /v2/jobs/:id
```

#### Example request

```curl
curl -X PATCH https://api.nomadeducation.com/v2/jobs/1cda1399-7e16-47d1-aea1-b075318f369b \
-H 'Content-Type: application/json' \
-d @- <<'EOF'
{
  "title": "Lead Developer"
}
EOF
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isUpdated = await client.jobs.update("1cda1399-7e16-47d1-aea1-b075318f369b", {
        name: "Lead Developer"
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

### Remove a job

Remove a job from our database. This is **non-recoverable** action!

**Response**

Property | Type | Description
---|---|---
`removed` | boolean | `true` if the resource was effectively erased from our database

```endpoint
DELETE /v2/jobs/:id
```

#### Example request

```curl
curl -X DELETE https://api.nomadeducation.com/v2/jobs/1cda1399-7e16-47d1-aea1-b075318f369b
```

```javascript
const Nomad = require("nomadeducation");
const client = new Nomad({api_key: "4fb11e3214d6e15c27a1a2ea1b7c23820c8bada4"});

async function fn () {
    const isRemoved = await client.jobs.remove("1cda1399-7e16-47d1-aea1-b075318f369b");
    console.log(isRemoved);
}
```
