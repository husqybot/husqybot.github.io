---
description: Husqy API reactionroles module
title: Husqy API reactionroles module
sidebar_label: Reactionroles
keywords:
  - docs
  - api
  - module
  - reactionroles
sidebar_position: 5
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Reactionroles.

<details>
  <summary>GET - `/modules/reactionroles/`</summary>

Home endpoint for the Modules Reactionroles Husqy API. Returns only success message displaying that it is the Modules Reactionroles Husqy API route.

</details>

<details>
  <summary>GET - `/modules/reactionroles/settings`</summary>

Get the settings of the reactionroles module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>PUT - `/modules/reactionroles/settings`</summary>

Endpoint to change the settings of the reactionroles module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the reactionroles module settings for |
| delete_unrelated | yes | `boolean` | If unrelated reactions should be removed from the reactionrole |
| remove_role_from_users_on_delete | yes | `boolean` | If roles should be deleted from users when the reactionrole entry is removed |

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/reactionroles/settings/delete`</summary>

Delete all settings of the reactionroles module for a specified guild.

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
  <summary>GET - `/modules/reactionroles/status`</summary>

Get the status of the reactionroles module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/reactionroles/enable`</summary>

Endpoint to enable the reactionroles module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the reactionroles module for |
| delete_unrelated | yes | `boolean` | If unrelated reactions should be removed from the reactionrole |
| remove_role_from_users_on_delete | yes | `boolean` | If roles should be deleted from users when the reactionrole entry is removed |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/reactionroles/disable`</summary>

Endpoint to disable the reactionroles module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the reactionroles module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Entries

Endpoints related to reactionroles entries

<details>
  <summary>GET - `/modules/reactionroles/entries`</summary>

Returns a list of reactionrole entries for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the reactionrole entries from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/reactionroles/entries`</summary>

Endpoint to create a new reactionrole entry in a guild for a member.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the reactionrole in |
| channel_id | yes | `integer` | The ID of the channel where the target message is located |
| message_id | yes | `integer` | The ID of the message to attach the reactionrole to |
| reaction | yes | `string` | The reaction to use for the reactionrole |
| role_id | yes | `integer` | The ID of the role to give when the reactionrole is reacted to |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DiscordApiInteractionError
- DatabaseError

</details>

<details>
  <summary>GET - `/modules/reactionroles/entry/{reactionrole_entry_id}`</summary>

Returns a details of the specified reactionrole entry in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the specified reactionrole entry details from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/reactionroles/entry/{reactionrole_entry_id}`</summary>

Deletes the specified reactionrole entry from the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the specified reactionrole entry to delete is located |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Checking entries

Endpoints to check entries for adding or deleting

<details>
  <summary>POST - `/modules/reactionroles/reactionrole/check/add`</summary>

:::danger

Do not use this endpoint yourself! Roles will be added by Husqy when needed.

:::

Endpoint to check if a reactionrole is being reacted to and requires a role to be added to a member.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the specified reactionrole entry to delete is located |
| channel_id | yes | `integer` | The ID of the channel where the reacted message is located |
| message_id | yes | `integer` | The ID of the message to which is reacted |
| reaction | yes | `string` | The reaction which is given by the member |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/reactionroles/reactionrole/check/remove`</summary>

:::danger

Do not use this endpoint yourself! Roles will be removed by Husqy when needed.

:::

Endpoint to check if a reactionrole is being reacted to and requires a role to be removed from a member.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the specified reactionrole entry to delete is located |
| channel_id | yes | `integer` | The ID of the channel where the unreacted message is located |
| message_id | yes | `integer` | The ID of the message to which is unreacted |
| reaction | yes | `string` | The reaction which is removed by the member |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>