---
description: Husqy API invite tracker module
title: Husqy API invite tracker module
sidebar_label: Invite tracker
keywords:
  - docs
  - api
  - module
  - invite
  - tracker
sidebar_position: 12
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Invite Tracker.

<details>
  <summary>GET - `/modules/invite-tracker/`</summary>

Home endpoint for the Modules Invite Tracker Husqy API. Returns only success message displaying that it is the Modules Invite tracker API route.

</details>

<details>
  <summary>GET - `/modules/invite-tracker/settings`</summary>

Get the settings of the invite tracker module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the settings of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>PUT - `/modules/invite-tracker/settings`</summary>

Endpoint to change the settings of the invite tracker module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the invite tracker module settings for |
| join_messages_enabled | yes | `boolean` | If the join messages for the invite tracker module should be enabled |
| join_messages_channel | yes | `integer` | The ID of the channel where the join messages should be sent to. Can be None if join_messages_enabled is False |
| join_message_content | yes | `string` | The content of the message to send when a new user joins. Can be Husqy embed JSON config. Can be None if join_messages_enabled is False |
| join_message_is_embed | yes | `integer` | If the configured join_message_content is an Husqy embed JSON config |
| leave_messages_enabled | yes | `boolean` | If the leave messages for the invite tracker module should be enabled |
| leave_messages_channel | yes | `integer` | The ID of the channel where the leave messages should be sent to. Can be None if leave_messages_enabled is False |
| leave_message_content | yes | `string` | The content of the message to send when a new user leaves. Can be Husqy embed JSON config. Can be None if leave_messages_enabled is False |
| leave_message_is_embed | yes | `integer` | If the configured leave_message_content is an Husqy embed JSON config |
| prevent_own_invite_code | yes | `boolean` | If a user joining with their own generated invite code should be prevented from counting towards the joins stats |
| server_shared_invite_link | yes | `string` | The shared invite link for the server. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/invite-tracker/settings/delete`</summary>

Delete all settings of the invite tracker module for a specified guild.

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
  <summary>GET - `/modules/invite-tracker/status`</summary>

Get the status of the invite tracker module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/invite-tracker/enable`</summary>

Endpoint to enable the invite tracker module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the invite tracker module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/invite-tracker/disable`</summary>

Endpoint to disable the invite tracker module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the invite tracker module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Invite links

Endpoint related to invite links.

<details>
  <summary>GET - `/modules/invite-tracker/invite-links`</summary>

Endpoint to get the known invite links.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known invite links from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/invite-tracker/invite`</summary>

Endpoint to create a new invite link in the Discord server. This endpoint created a full discord invite link!

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the invite in |
| channel_id | yes | `integer` | The ID of the channel where the invite link is created |
| max_uses | yes | `integer` | The maximum amount of uses for the invite link. Must be between 0 (for infinite/no limit) and 100 |
| max_age | yes | `integer` | The amount of settings the invite link is active for |
| is_temporary | yes | `boolean` | If the invite is a temporary invite |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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
  <summary>DELETE - `/modules/invite-tracker/invite`</summary>

Endpoint to delete an existing invite link in the Discord server. This endpoint deletes a full discord invite link!

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to remove the invite in |
| invite_code | yes | `string` | The invite code of the invite to delete |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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

## Stats

Endpoints related to the statistics of the invite tracker module.

<details>
  <summary>POST - `/modules/invite-tracker/stats/uses`</summary>

Endpoint get the invite link uses for a inviter.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the invite uses are located |
| inviter_id | yes | `integer` | The ID of the inviter to check the stats for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

## Checks

Endpoint related different check events of the invite tracker module.

<details>
  <summary>POST - `/modules/invite-tracker/events/invite/create`</summary>

:::danger

Do not use this endpoint yourself! Invites will be saved by Husqy when needed.

:::

Endpoint to save an invite link.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the invite is located |
| invite_code | yes | `integer` | The invite code of the created invite |
| channel_id | yes | `integer` | The ID of the channel where the invite link is located |

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
  <summary>POST - `/modules/invite-tracker/events/invite/delete`</summary>

:::danger

Do not use this endpoint yourself! Invites will be removed by Husqy when needed.

:::

Endpoint to remove an known invite link.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the invite is located |
| invite_code | yes | `integer` | The invite code of the deleted invite |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/invite-tracker/events/join/check-invite`</summary>

:::danger

Do not use this endpoint yourself! Joins will be checked by Husqy when needed.

:::

Endpoint to register a join in the invite tracker module.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the join has been triggered |

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
  <summary>POST - `/modules/invite-tracker/events/leave/check-invite`</summary>

:::danger

Do not use this endpoint yourself! Leaves will be checked by Husqy when needed.

:::

Endpoint to register a leave in the invite tracker module.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the leave has been triggered |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

## Privacy

Endpoints related to privacy and the invite tracker module

<details>
  <summary>GET - `/modules/invite-tracker/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in the invite tracker module to your user.

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
  <summary>DELETE - `/modules/invite-tracker/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in invite tracker module to your user.

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