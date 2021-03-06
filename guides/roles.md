# Roles

> Roles allow for grouping users and controlling their access to data within the App and API. As of now, users can only be assigned to a single role, but our system is architected to allow for the merging of multiple roles in the future.

## Default Roles

Directus by default has two core roles that are included with each install. These roles can not be removed.

### Administrators

Users with this role have full permissions for all data within the system and are the only ones with access to Admin Settings.

### Public

This special role defines what data is accessible _without_ being authenticated. By default, the public role does not have permission to any data. You can not assign users to this role.

## Creating Roles

You can create any number of additional roles to organize users or limit their access to content. A role can be created by clicking on the "New" button ("+") in the top right of the _Roles & Permissions_ page in the _Admin Settings_. Roles have the following options:

### Description

This is for internal use only. It helps your administrators understand the purpose of each role.

### IP Whitelist

A CSV of IP addresses that are allowed to connect to the API. This can be used to limit access to specific offices, for example.

### Nav Override

You can override the main navigation for a role's users. This allows you to rearrange links, curate pages, add external links, and create custom groupings. Below are details on how to configure this option.

Sections contain two fields: `title` and `links`. Instead of `links`, you can also provide a special `include` key that can have the value of `collections`, `bookmarks`, or `extensions`. This will use the 'regular' menu sections instead of relying on pure custom ones. They're acting as variables as it were.

#### Individual links have the following properties:

* `name` — Name that is displayed in the nav list
* `path` — Where to link to, supports https
* `icon` — Material Design icon name
* `color` — Directus Color Variable (`success`, `danger`, etc)

#### Example

```json
[
    {
        "title": "$t:collections",
        "include": "collections"
    },
    {
        "title": "$t:bookmarks",
        "include": "bookmarks"
    },
    {
        "title": "$t:extensions",
        "include": "extensions"
    },
    {
        "title": "Custom Links",
        "links": [
            {
                "name": "RANGER Studio",
                "path": "https://rangerstudio.com",
                "icon": "star"
            },
            {
                "name": "Movies",
                "path": "/collections/movies"
            }
        ]
    }
]
```

### Permissions

Directus extends the typical CRUD access control to add even more granularity. To learn more about defining permissions, check out our [Permissions Guide](./permissions.md).

## Deleting Roles

To delete a role, first remove all its users, then click the Delete button in the header of the Role Detail page.
