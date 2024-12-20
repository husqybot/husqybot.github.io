---
description: Husqy API autoresponder module
title: Husqy API autoresponder module
sidebar_label: Autoresponder
keywords:
  - docs
  - api
  - module
  - autoresponder
sidebar_position: 6
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Autoresponder.

<details>
  <summary>GET - `/modules/autoresponder/`</summary>

Home endpoint for the Modules Autoresponder Husqy API. Returns only success message displaying that it is the Modules Autoresponder Husqy API route.

</details>

<details>
  <summary>DELETE - `/modules/autoresponder/settings/delete`</summary>

Delete all settings of the autoresponder module for a specified guild.

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
  <summary>GET - `/modules/autoresponder/status`</summary>

Get the status of the autoresponder module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/autoresponder/enable`</summary>

Endpoint to enable the autoresponder module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the autoresponder module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/autoresponder/disable`</summary>

Endpoint to disable the autoresponder module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the autoresponder module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Entries

Endpoints related to the entries of the module

<details>
  <summary>GET - `/modules/autoresponder/entries`</summary>

Get the list of entries of the autoresponder module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to return the entries from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/autoresponder/entries`</summary>

Add an autoresponder module entry for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild for which to create the autoresponder entry |
| trigger | yes | `string` | The trigger for the autoresponder entry to be send |
| type | yes | `string` | The response type |
| content | yes | `string` | The response content |
| allowed_channels | yes | `list|string` | The list of channel ID's to allow (may be "all" if all channel are allowed) |
| ignored_channels | yes | `list` | The list of channel ID's to ignore |
| allowed_roles | yes | `list|string` | The list of role ID's to allow (may be "all" if all roles are allowed) |
| ignored_roles | yes | `list` | The list of role ID's to ignore |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>GET - `/modules/autoresponder/entry/{autoresponder_entry_id}`</summary>

Get the details of the specified autoresponder entry in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to return the details of the autoresponder entry from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/autoresponder/entry/{autoresponder_entry_id}`</summary>

Delete the specified autoresponder entry in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild for which to delete the autoresponder entry |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/autoresponder/entry/check`</summary>

:::danger

Do not use this endpoint yourself! Autoresponder entries will be send by Husqy when needed.

:::

Endpoint to check if an autoresponder entry has to be send for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the autoresponder entry for |
| origin_message_id | yes | `integer` | The ID of the message the member send that triggered the check |
| message_content | yes | `string` | The content of message that triggered the check |
| channel_id | yes | `integer` | The ID of the channel where the message that triggered the check is located |
| member_roles | yes | `list` | A list of the member that send the triggering message their role ID's |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>