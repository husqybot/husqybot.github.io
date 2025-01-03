---
description: Husqy API tags module
title: Husqy API tags module
sidebar_label: Tags
keywords:
  - docs
  - api
  - module
  - tags
sidebar_position: 9
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Tags.

<details>
  <summary>GET - `/modules/tags/`</summary>

Home endpoint for the Modules Tags Husqy API. Returns only success message displaying that it is the Modules Tags Husqy API route.

</details>

<details>
  <summary>DELETE - `/modules/tags/delete`</summary>

Delete all settings of the tags module for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the settings from |

Possible errors:

- BadRequestError

</details>

## Status

Endpoints related to the status of the module

<details>
  <summary>GET - `/modules/tags/status`</summary>

Get the status of the tags module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/tags/enable`</summary>

Endpoint to enable the tags module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the tags module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/tags/disable`</summary>

Endpoint to disable the tags module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the tags module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Entries

Endpoints related to tags entries

<details>
  <summary>GET - `/modules/tags/entries`</summary>

Returns a list of tag entries in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the tag entries from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/tags/entries`</summary>

Endpoint to create a new tag entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the tag in |
| owner_id | yes | `integer` | The ID of the owner of the tag |
| content | yes | `string` | The content of the tag |
| names | yes | `list` | A list of names for the tag |
| visibility | yes | `string` | The visibility setting for the tag. Can be "Public" or "Private" |
| application_id | yes | `list` | Can be None. The application to respond to |
| token | yes | `list` | Can be None. The token of the application to respond |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

<details>
  <summary>GET - `/modules/tags/entry/{tag_id}`</summary>

Returns the details of tag entry in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the tag entry details from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/tags/entry/{tag_id}`</summary>

Endpoint to delete a tag entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the tag in |
| application_id | yes | `list` | Can be None. The application to respond to |
| token | yes | `list` | Can be None. The token of the application to respond |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError
- Unprocessable Entity

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 422,
        "message": "Unprocessable Entity! {reason}",
    },
},
```

</details>

<details>
  <summary>PUT - `/modules/tags/entry/{tag_id}`</summary>

Endpoint to update a tag entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the tag in |
| names | yes | `list` | The new list of names for the tag. All other names will be deleted |
| owner_id | yes | `integer` | The new ID of the owner |
| visibility | yes | `string` | The new visibility of the tag. Can be "Public" or "Private" |
| content | yes | `string` | The new content of the tag |
| application_id | yes | `list` | Can be None. The application to respond to |
| token | yes | `list` | Can be None. The token of the application to respond |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError
- Unprocessable Entity

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 422,
        "message": "Unprocessable Entity! {reason}",
    },
},
```

</details>

<details>
  <summary>POST - `/modules/tags/entry/{tag_id}/send`</summary>

:::danger

Do not use this endpoint yourself! Husqy will send tag content automatically when the command is executed.

:::

Endpoint to post the tag to a channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the tag in |
| channel_id | yes | `integer` | The ID of the channel where the `/tags send` command is executed. This channel will also be used for the channel variables |
| user_mention_id | yes | `integer` | Can be None. The ID of the user to use for the user variables |
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- Unprocessable Entity

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 422,
        "message": "Unprocessable Entity! {reason}",
    },
},
```

</details>

<details>
  <summary>POST - `/modules/tags/entry/{tag_id}/preview`</summary>

:::danger

Do not use this endpoint yourself! Husqy will send tag content automatically when the preview button is used in the dashboard.

:::

Endpoint to post the tag to a channel to preview.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the tag in |
| channel_id | yes | `integer` | The ID of the channel where the preview message will be located. This channel will also be used for the channel variables |
| user_id | yes | `integer` | Can be None. The ID of the user to use for the user variables |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- Unprocessable Entity

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 422,
        "message": "Unprocessable Entity! {reason}",
    },
},
```

</details>

## Privacy

Endpoints related to privacy and the tags module

<details>
  <summary>GET - `/modules/tags/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in tags to your user.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the specified references in |
| privacy_member_id | yes | `integer` | The ID of the member who wants to check their references |

Possible errors:

- BadRequestError
- ForbiddenError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/tags/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in tags to your user.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the specified references in |
| privacy_member_id | yes | `integer` | The ID of the member who wants to remove their references |

Possible errors:

- BadRequestError
- ForbiddenError
- InternalServerError

</details>