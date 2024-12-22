---
description: Husqy API tempchannels module
title: Husqy API tempchannels module
sidebar_label: Tempchannels
keywords:
  - docs
  - api
  - module
  - tempchannels
sidebar_position: 3
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Tempchannels.

<details>
  <summary>GET - `/modules/tempchannels/`</summary>

Home endpoint for the Modules Tempchannels Husqy API. Returns only success message displaying that it is the Modules Tempchannels Husqy API route.

</details>

<details>
  <summary>GET - `/modules/tempchannels/settings`</summary>

Get the settings of the autoresponder module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>PUT - `/modules/tempchannels/settings`</summary>

Endpoint to change the settings of the tempchannels module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the tempchannels module settings for |
| voice_category | yes | `integer` | The ID of category channel to use for tempchannels |
| text_category | yes | `integer` | (May be None) The ID of category channel to use for temporary text channels |
| create_text | yes | `boolean` | If temporary text channels should be automatically created |
| voice_channel_name | yes | `string` | The name to give to tempchannels |
| text_channel_name | yes | `string` | (May be None) The name to give to temporary text channels |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/tempchannels/settings/delete`</summary>

Delete all settings of the tempchannels module for a specified guild.

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
  <summary>GET - `/modules/tempchannels/status`</summary>

Get the status of the tempchannels module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/tempchannels/enable`</summary>

Endpoint to enable the tempchannels module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the tempchanenls module for |
| voice_category | yes | `integer` | The ID of category channel to use for tempchannels |
| text_category | yes | `integer OR string` | (May be None) The ID of category channel to use for temporary text channels (may also be "same" if it should be the same as the voice category channel, this is only valid for this endpoint) |
| create_text | yes | `boolean` | If temporary text channels should be automatically created |
| voice_channel_name | yes | `string` | The name to give to tempchannels |
| text_channel_name | yes | `string` | (May be None) The name to give to temporary text channels |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/tempchannels/disable`</summary>

Endpoint to disable the tempchannels module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the tempchannels module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Tempchannels

Endpoints related to the (possibly) known tempchannels of the module

<details>
  <summary>GET - `/modules/tempchannels/tempchannels`</summary>

Get the current known active tempchannels of the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known tempchannels of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/check/add`</summary>

:::danger

Do not use this endpoint yourself! Tempchannels will be created by Husqy when needed.

:::

Endpoint to add a new tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check for the creation of the tempchannel |
| joined_channel_id | yes | `integer` | The ID of the channel the member has joined and triggered the check |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/check/delete`</summary>

:::danger

Do not use this endpoint yourself! Tempchannels will be deleted by Husqy when needed.

:::

Endpoint to delete a known tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check for the deletion of the tempchannel |
| member_new_channel | yes | `integer` | (May be None) The ID of the new channel the member has joined and triggered the check |
| member_old_channel | yes | `integer` | The ID of the old channel the member has left and triggered the check |
| connected_users | yes | `integer` | The amount of connected users in the left channel when the user who triggered the check had left |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

## Tempchannels settings

Endpoints related to the settings of the tempchannels

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/edit/block`</summary>

Endpoint to block users from a known tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/tempchannel edit` command has been sent |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/tempchannel edit` command |
| target_tempchannel_id | yes | `integer` | The ID of the target tempchannel |
| users_to_block | yes | `list` | A list of user ID's to block from the tempchannel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- NotFoundError

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

</details>

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/edit/claim`</summary>

Endpoint to claim a known tempchannel that doesn't have an owner.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/tempchannel edit` command has been sent |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/tempchannel edit` command |
| target_tempchannel_id | yes | `integer` | The ID of the target tempchannel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- NotFoundError

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/name`</summary>

Endpoint to rename a known tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/tempchannel edit` command has been sent |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/tempchannel edit` command |
| target_tempchannel_id | yes | `integer` | The ID of the target tempchannel |
| tempchannel_name | yes | `string` | The new name for the tempchannel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- NotFoundError

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

</details>

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/edit/onlyfor`</summary>

Endpoint to limit the access to a specified role.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/tempchannel edit` command has been sent |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/tempchannel edit` command |
| target_tempchannel_id | yes | `integer` | The ID of the target tempchannel |
| onlyfor_role | yes | `string` | The ID of the role to limit the access to the tempchannel to |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- NotFoundError

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

</details>

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/edit/slowmode`</summary>

Endpoint to set the slowmode timeout for a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/tempchannel edit` command has been sent |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/tempchannel edit` command |
| target_tempchannel_id | yes | `integer` | The ID of the target tempchannel |
| slowmode_seconds | yes | `integer` | The amound of time in seconds to use for the slowmode delay |

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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/transfer`</summary>

Endpoint to transfer ownership of a tempchannel to a new user.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/tempchannel edit` command has been sent |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/tempchannel edit` command |
| target_tempchannel_id | yes | `integer` | The ID of the target tempchannel |
| new_owner | yes | `integer` | The ID of the user who will be the new owner |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- NotFoundError

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/unblock`</summary>

Endpoint to transfer ownership of a tempchannel to a new user.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/tempchannel edit` command has been sent |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/tempchannel edit` command |
| target_tempchannel_id | yes | `integer` | The ID of the target tempchannel |
| users_to_unblock | yes | `list` | The list of user ID's to unblock |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- NotFoundError

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

</details>

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/edit/user-limit`</summary>

Endpoint to limit the amount of users who can join the tempchannel at once.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/tempchannel edit` command has been sent |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/tempchannel edit` command |
| target_tempchannel_id | yes | `integer` | The ID of the target tempchannel |
| user_limit | yes | `integer` | The number of users who can be in the tempchannel at once |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- NotFoundError

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

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
  <summary>GET - `/modules/tempchannels/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in tempchannels to your user.

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
  <summary>DELETE - `/modules/tempchannels/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in tempchannels to your user.

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