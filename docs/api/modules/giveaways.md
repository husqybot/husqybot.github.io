---
description: Husqy API Giveaways module
title: Husqy API Giveaways module
sidebar_label: Giveaways
keywords:
  - docs
  - api
  - module
  - giveaways
sidebar_position: 14
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules giveaways.

<details>
  <summary>GET - `/modules/giveaways/`</summary>

Home endpoint for the Modules Giveaways Husqy API. Returns only success message displaying that it is the Modules Giveaways API route.

</details>

<details>
  <summary>GET - `/modules/giveaways/settings`</summary>

Get the settings of the giveaways module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the settings of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>PUT - `/modules/giveaways/settings`</summary>

Endpoint to change the settings of the giveaways module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the giveaways module settings for |
| save_duration_timeout | yes | `integer` | The amount of seconds to wait after ending a giveaway |
| delete_ended_giveaways | yes | `boolean` | If ended giveaways should be deleted from discord channels |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/giveaways/settings/delete`</summary>

Delete all settings of the giveaways module for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the settings from |

Possible errors:

- BadRequestError

</details>

## Status

Endpoints related to the status of the module.

<details>
  <summary>GET - `/modules/giveaways/status`</summary>

Get the status of the giveaways module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/giveaways/enable`</summary>

Endpoint to enable the giveaways module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the giveaways module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/giveaways/disable`</summary>

Endpoint to disable the giveaways module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the giveaways module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Giveaways

Endpoint related to giveaways.

<details>
  <summary>GET - `/modules/giveaways/entries`</summary>

Endpoint to get the known giveaways.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known giveaways from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of giveaways to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/giveaways/entries`</summary>

Endpoint to create a new giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the giveaway in |
| channel_id | yes | `integer` | The ID of the channel to create the giveaway in |
| giveaway_owner_id | yes | `integer` | The ID of the owner of the giveaway |
| end_time | yes | `string` | The wait duration (in format `{delay}{d/h/m/s}`) or the end time in ISO format |
| prize | yes | `string` | The prize of the giveaway |
| description | yes | `string` | The description of the giveaway. Can be None. |
| winner_count | yes | `integer` | The amount of winners of the giveaway |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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
  <summary>GET - `/modules/giveaways/entry/{giveaway_id}`</summary>

Endpoint to get the specified giveaway.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the giveaway from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/giveaways/entry/{giveaway_id}`</summary>

Endpoint to delete an existing giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to remove the giveaway in |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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
  <summary>PUT - `/modules/giveaways/entry/{giveaway_id}`</summary>

Endpoint to update an existing giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to remove the giveaway in |
| new_prize | yes | `string` | The new prize of the giveaway |
| new_description | yes | `string` | The new description of the giveaway. Can be none |
| new_winner_count | yes | `integer` | The new amount of winners for the giveaway |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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
  <summary>POST - `/modules/giveaways/entry/{giveaway_id}/reroll`</summary>

Endpoint to reroll a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to reroll the giveaway in |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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
  <summary>POST - `/modules/giveaways/entry/{giveaway_id}/enter`</summary>

Endpoint to enter a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enter the giveaway in |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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
  <summary>POST - `/modules/giveaways/entry/{giveaway_id}/leave`</summary>

Endpoint to leave a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to leave the giveaway in |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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

## Handler

<details>
  <summary>GET - `/modules/giveaway/handler`</summary>

Home endpoint for the Modules Giveaway Entries Husqy API. Returns only success message displaying that it is the Modules Giveaway Entries API route.

</details>

<details>
  <summary>POST - `/modules/giveaways/handler/create`</summary>

:::danger

Do not use this endpoint yourself! To create a giveaway use the `POST - /modules/giveaways/entries` endpoint.

:::

Endpoint to create a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `string` | The ID of the giveaway to create |
| channel_id | yes | `integer` | The ID of the channel where the giveaway is located |
| message_id | yes | `integer` | The ID of the giveaway message |
| end_time | yes | `string` | The time when the giveaway is ended |
| delete_at | yes | `string` | The time when the giveaway is deleted |
| prize | yes | `string` | The prize of the giveaway |
| description | yes | `string` | The description of the giveaway. Can be None |
| winner_count | yes | `integer` | The amount of winners of the giveaway |
| owner_id | yes | `integer` | The ID of the owner of the giveaway |
| language | yes | `string` | The language of the server where the giveaway is located |
| auto_delete | yes | `integer` | The auto delete of the server where the giveaway is located |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>DELETE - `/modules/giveaways/handler/delete`</summary>

:::danger

Do not use this endpoint yourself! To delete a giveaway use the `DELETE - /modules/giveaways/entry/{giveaway_id}` endpoint.

:::

Endpoint to delete a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `string` | The ID of the giveaway to delete |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/modules/giveaways/handler/reroll`</summary>

:::danger

Do not use this endpoint yourself! To reroll a giveaway use the `POST - /modules/giveaways/entry/{giveaway_id}/reroll` endpoint.

:::

Endpoint to reroll a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `string` | The ID of the giveaway to reroll |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/modules/giveaways/handler/edit`</summary>

:::danger

Do not use this endpoint yourself! To edit a giveaway use the `PUT - /modules/giveaways/entry/{giveaway_id}` endpoint.

:::

Endpoint to edit a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `string` | The ID of the giveaway to edit |
| prize | yes | `string` | The new prize of the giveaway |
| description | yes | `string` | The new description of the giveaway |
| winner_count | yes | `integer` | The new winner count of the giveaway |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/modules/giveaways/handler/edit-winners`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy when needed.

:::

Endpoint to edit a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `string` | The ID of the giveaway to edit |
| winners | yes | `list` | The new list of winner IDs |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/modules/giveaways/handler/enter`</summary>

:::danger

Do not use this endpoint yourself! To enter a giveaway use the `POST - /modules/giveaways/entry/{giveaway_id}/enter` endpoint.

:::

Endpoint to enter a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `string` | The ID of the giveaway to edit |
| user_id | yes | `integer` | The ID of the user to enter the giveaway |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/modules/giveaways/handler/leave`</summary>

:::danger

Do not use this endpoint yourself! To enter a giveaway use the `POST - /modules/giveaways/entry/{giveaway_id}/leave` endpoint.

:::

Endpoint to leave a giveaway in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `string` | The ID of the giveaway to edit |
| user_id | yes | `integer` | The ID of the user to leave the giveaway |

Possible errors:

- BadRequestError

</details>

## Privacy

Endpoints related to privacy and the polls module

<details>
  <summary>GET - `/modules/polls/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in the polls module to your user.

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
  <summary>DELETE - `/modules/polls/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in polls module to your user.

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
