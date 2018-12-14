## ACL

Our permission mechanism link roles to a permission list giving users access to API resources.
Each permission is composed of **3** parts that indicate the granted access level: `service.resource.action`:

- `service` maps to one of our services
- `resource` corresponds to the requested element (e.g. "users" when invoking `GET /users`)
- `action` which can be one of the following:
  - `get`: retrieve one element
  - `list`: retrieve multiple elements
  - `save`: create or update one element
  - `delete`: remove one element
  - `import` (_depending on the requested resource_): create or update multiple elements
  - `bulk_delete` (_depending on the requested resource_): remove multiple elements

For example, if a user wants to get a users list, it will make a request using `GET /users`. This user will have access to this list **only** if one of his role possesses the `identity.users.list` permission.

This allows us to have a finer granularity when we attribute **read** or **write** access to a user or a group of users.
