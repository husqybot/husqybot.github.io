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
  <summary>DELETE - `/modules/tempchannels/delete`</summary>

Delete all data of the tempchannels module for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the data from |

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

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

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
- InternalServerError

</details>

## Creation channels

Endpoints related to creation channels.

<details>
  <summary>GET - `/modules/tempchannels/creation-channels`</summary>

Get the current known list of creation channels of the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known tempchannels of |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/tempchannels/creation-channels`</summary>

Get the current known list of creation channels of the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known tempchannels of |
| creation_channel_name | yes | `string` | The name to give to the creation channel. Can be "default" |
| create_voice_channel | yes | `boolean` | If a temporary voice channel should be created when the creation channel is joined |
| voice_channel_name | yes | `string` | The name to give to the temporary voice channels created by the creation channel |
| voice_channel_category_id | yes | `integer or string` | The ID of the category where temporary voice channels will be created. Can be "create" or "same as creation" |
| create_text_channel | yes | `boolean` | If a temporary text channel should be created when the creation channel is joined |
| text_channel_name | yes | `string` | The name to give to the temporary text channels created by the creation channel |
| text_channel_category_id | yes | `integer or string` | The ID of the category where temporary text channels will be created. Can be "create", "same as creation" or "same as voice" |
| tempchannel_create_category_id | yes | `integer or string` | The ID of the category where the creation channel will be created. Can be "create" |

Possible errors:

- BadRequestError
- DatabaseError
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
  <summary>GET - `/modules/tempchannels/creation-channel/{creation_channel_id}`</summary>

Get the configuration of the specified creation channel in the specified guild.

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
  <summary>DELETE - `/modules/tempchannels/creation-channel/{creation_channel_id}`</summary>

Get the current known list of creation channels of the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known tempchannels of |

Possible errors:

- BadRequestError
- DatabaseError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>PUT - `/modules/tempchannels/creation-channel/{creation_channel_id}`</summary>

Edit the configuration of the creation channel in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known tempchannels of |
| creation_channel_name | yes | `string` | The name to give to the creation channel. |
| create_voice_channel | yes | `boolean` | If a temporary voice channel should be created when the creation channel is joined |
| voice_channel_name | yes | `string` | The name to give to the temporary voice channels created by the creation channel |
| voice_channel_category_id | yes | `integer or string` | The ID of the category where temporary voice channels will be created. Can be "create" or "same as creation" |
| create_text_channel | yes | `boolean` | If a temporary text channel should be created when the creation channel is joined |
| text_channel_name | yes | `string` | The name to give to the temporary text channels created by the creation channel |
| text_channel_category_id | yes | `integer or string` | The ID of the category where temporary text channels will be created. Can be "create", "same as creation" or "same as voice" |

Possible errors:

- BadRequestError
- DatabaseError
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
  <summary>POST - `/modules/tempchannels/creation-channel/check-manual-delete`</summary>

:::danger

Do not use this endpoint yourself! Creation channels will be checked for manual delete by Husqy when needed.

:::

Endpoint to check if a manually deleted channel was is a creation channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check for the deletion of the tempchannel |
| deleted_channel_id | yes | `integer` | The ID of the channel that has been deleted manually |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- ModuleDisabledError
- InternalServerError

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
  <summary>GET - `/modules/tempchannels/tempchannel/{tempchannel_id}`</summary>

Get the information of the specified tempchannel set in the specified guild.

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
  <summary>POST - `/modules/tempchannels/tempchannel/check/create`</summary>

:::danger

Do not use this endpoint yourself! Tempchannels will be created by Husqy when needed.

:::

Endpoint to add a new tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check for the creation of the tempchannel |
| creation_channel_id | yes | `integer` | The ID of the channel the member has joined and triggered the check |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError
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
  <summary>POST - `/modules/tempchannels/tempchannel/check/delete`</summary>

:::danger

Do not use this endpoint yourself! Tempchannels will be deleted by Husqy when needed.

:::

Endpoint to delete a known tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check for the deletion of the tempchannel |
| target_tempchannel_id | yes | `integer` | (May be None) The ID of the channel the member has left and triggered the check |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/check/manual-delete`</summary>

:::danger

Do not use this endpoint yourself! Tempchannels will be checked for manual delete by Husqy when needed.

:::

Endpoint to check if a manually deleted channel was is a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check for the deletion of the tempchannel |
| deleted_channel_id | yes | `integer` | The ID of the channel that has been deleted manually |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/check/set-last-activity`</summary>

:::danger

Do not use this endpoint yourself! Temporary text channels will be marked as active by Husqy when needed.

:::

Endpoint to update the last activity in a temporary text channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check for the deletion of the tempchannel |
| temptext_channel_id | yes | `integer` | The ID of the channel where a message has been sent in |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

## Tempchannel edits

Endpoints related to the editing the settings of a tempchannel

<details>
  <summary>POST - `/modules/tempchannels/tempchannel/edit/set-name`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit name` command instead.

:::

Endpoint to set the name of a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of the tempchannel to edit |
| name | yes | `string` | The new name to give |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit name` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/set-user-limit`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit user_limit` command instead.

:::

Endpoint to set the user limit of a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of the tempchannel to edit |
| user_limit | yes | `integer` | The new user limit. Must be between 0 and 99 |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit user_limit` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/set-slowmode`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit slowmode` command instead.

:::

Endpoint to set the slowmode timeout of a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of the tempchannel to edit |
| timeout | yes | `integer` | The new slowmode timeout |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit slowmode` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/set-bitrate`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit bitrate` command instead.

:::

Endpoint to set the bitrate of a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of the tempchannel to edit |
| bitrate | yes | `integer` | The new bitrate in kbps. Must be between 8 and 96. |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit bitrate` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/set-region`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit region` command instead.

:::

Endpoint to set the region of a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of the tempchannel to edit |
| region | yes | `integer` | The ID of the Discord region. |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit region` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/set-age-restriction`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit age_restriction` command instead.

:::

Endpoint to set the age restriction setting of a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of the tempchannel to edit |
| age_restricted | yes | `boolean` | If the channel must be age restricted. |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit age_restriction` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit transfer` command instead.

:::

Endpoint to transfer ownership of a tempchannel set.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of one of the tempchannels in the tempchannel set to edit |
| new_owner | yes | `integer` | If ID of the new owner. |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit transfer` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/claim`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit claim` command instead.

:::

Endpoint to claim ownership of a tempchannel set.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of one of the tempchannels in the tempchannel set to claim |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit claim` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/delete`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit delete` command instead.

:::

Endpoint to delete a tempchannel set.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_delete | yes | `integer` | The channel ID of one of the tempchannels in the tempchannel set to delete |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit claim` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/add-block-rule`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit add_block_rule_role` or `/tempchannel edit add_block_rule_member` command instead.

:::

Endpoint to add a block rule to a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of one of the tempchannels in the tempchannel set to edit |
| target_is_role | yes | `boolean` | If the target is a role |
| target_id | yes | `integer` | The ID of the target (member ID or role ID) |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit add_block_rule_{target}` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/remove-block-rule`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit remove_block_rule_role` or `/tempchannel edit remove_block_rule_member` command instead.

:::

Endpoint to remove a block rule from a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of one of the tempchannels in the tempchannel set to edit |
| target_is_role | yes | `boolean` | If the target is a role |
| target_id | yes | `integer` | The ID of the target (member ID or role ID) |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit remove_block_rule_{target}` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/add-trust-rule`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit add_trust_rule_role` or `/tempchannel edit add_trust_rule_member` command instead.

:::

Endpoint to add a trust rule to a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of one of the tempchannels in the tempchannel set to edit |
| target_is_role | yes | `boolean` | If the target is a role |
| target_id | yes | `integer` | The ID of the target (member ID or role ID) |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit add_trust_rule_{target}` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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
  <summary>POST - `/modules/tempchannels/tempchannel/edit/remove-trust-rule`</summary>

:::danger

Do not use this endpoint yourself! Use the `/tempchannel edit remove_trust_rule_role` or `/tempchannel edit remove_trust_rule_member` command instead.

:::

Endpoint to remove a trust rule from a tempchannel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the target tempchannel is located |
| tempchannel_id_to_edit | yes | `integer` | The channel ID of one of the tempchannels in the tempchannel set to edit |
| target_is_role | yes | `boolean` | If the target is a role |
| target_id | yes | `integer` | The ID of the target (member ID or role ID) |
| channel_id | yes | `integer` | The ID of the channel where the `/tempchannels edit remove_trust_rule_{target}` command is executed.
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- InternalServerError
- SettingsError
- ModuleDisabledError
- DiscordApiInteractionError
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