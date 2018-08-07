## Users

Most of these routes are reserved for admin purpose only!

### List users

_You'll need to have the `identity.users.list` permission._

Lists all users.

```endpoint
GET /v2/users
```

#### Example request

```curl
$ curl https://api.nomadeducation.com/v2/users
```

```javascript
// TODO
client.user.list(function(err, users) {
  console.log(users);
});
```

#### Example response

```json
[
  {
    "id": "d4ea00d4-0488-497e-a6a1-611c70d39c41",
    "first_name": "Joe",
    "last_name": "Smith",
    "username": "jsmith",
    "email": "joe.smith@acme.com",
    "roles": [4, 2],
    "active": true,
    "created_at": "2018-07-11T13:59:03.666Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  },
  {
    "id": "cb49bc80-fb80-40f9-9025-194a5be86307",
    "first_name": "Adam",
    "last_name": "Oldman",
    "username": "adam.old",
    "email": "adold@acme.com",
    "roles": [666],
    "active": true,
    "created_at": "2018-07-11T13:59:03.656Z",
    "updated_at": "2018-07-11T14:00:00.000Z"
  }
]
```

### Create a user

_You'll need to have the `identity.users.create` permission._

Creates a new user.

```endpoint
POST /v2/users
```

#### Example request

```curl
curl -X POST -H "Content-Type: application/json" https://api.nomadeducation.com/v2/users
```

```javascript
// TODO
client.user.create({
  email: 'john.doe@acme.com',
  password: 'givemethekn1ght'
}, function(err, newUser) {
  console.log(newUser);
});
```

#### Example request body

```json
{
  "email": "john.doe@acme.com",
  "password": "givemethekn1ght"
}
```

Property | Type | Description
---|---|---
`email` | string | (**required**) must be a valid email
`password` | string | (**required**) must contains at least **6** characters
`username` | string | (optional) not set, this will contain the same value as the email
`first_name` | string | (optional) can contains at most **50** characters
`last_name` | string | (optional) can contains at most **50** characters
`roles` | array of integer | (optional) contains an array of role ids (only the "registered" role id by default)

#### Example response

```json
{
  "id": "9916c2ae-bdc1-46e7-8543-4934f8d8ebce",
  "first_name": "",
  "last_name": "",
  "email": "john.doe@acme.com",
  "username": "john.doe@acme.com",
  "created_at": "2018-08-07T13:47:23.077Z",
  "updated_at": "2018-08-07T13:47:23.077Z"
}
```
