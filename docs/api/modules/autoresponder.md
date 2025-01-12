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
  <summary>DELETE - `/modules/autoresponder/delete`</summary>

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

## Triggers

Endpoints related to the triggers of the module

<details>
  <summary>GET - `/modules/autoresponder/triggers`</summary>

Get the list of triggers for the autoresponder module for the specified guild.

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
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/autoresponder/triggers`</summary>

Create a new trigger for the autoresponder module in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild for which to create the autoresponder trigger |
| trigger_type | yes | `integer` | The type of the trigger. Can be 1 for "Wildcard", 2 for "Contains", 3 for "Starts with" or 4 for "Ends with" |
| match_case | yes | `boolean` | Indicated if the trigger matching is case sensitive |
| trigger | yes | `string` | The trigger |
| allowed_channels | yes | `list` | The list of channel ID's to allow (may be an empty list when all channels are allowed) |
| ignored_channels | yes | `list` | The list of channel ID's to ignore |
| allowed_roles | yes | `list` | The list of role ID's to allow (may be an empty list when all roles are allowed) |
| ignored_roles | yes | `list` | The list of role ID's to ignore |
| response_ids | yes | `list` | The list of response ID's to send when the trigger has been hit |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
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
  <summary>GET - `/modules/autoresponder/trigger/{trigger_id}`</summary>

Get the details of the specified autoresponder trigger in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to return the details of the autoresponder trigger from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/autoresponder/trigger/{trigger_id}`</summary>

Delete the specified autoresponder trigger in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild for which to delete the trigger | 

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError
- InternalServerError

</details>

<details>
  <summary>PUT - `/modules/autoresponder/trigger/{trigger_id}`</summary>

Edit the specified autoresponder trigger in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild for which to edit the trigger |
trigger_type | yes | `integer` | The type of the trigger. Can be 1 for "Wildcard", 2 for "Contains", 3 for "Starts with" or 4 for "Ends with" |
| match_case | yes | `boolean` | Indicated if the trigger matching is case sensitive |
| trigger | yes | `string` | The trigger |
| allowed_channels | yes | `list` | The list of channel ID's to allow (may be an empty list when all channels are allowed) |
| ignored_channels | yes | `list` | The list of channel ID's to ignore |
| allowed_roles | yes | `list` | The list of role ID's to allow (may be an empty list when all roles are allowed) |
| ignored_roles | yes | `list` | The list of role ID's to ignore |
| response_ids | yes | `list` | The list of response ID's to send when the trigger has been hit |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/autoresponder/check`</summary>

:::danger

Do not use this endpoint yourself! Responses will be send by Husqy when needed.

:::

Endpoint to check if an autoresponder trigger has to be send for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the autoresponder entry for |
| origin_message_id | yes | `integer` | The ID of the message the member send that triggered the check |
| channel_id | yes | `integer` | The ID of the channel where the message that triggered the check is located |
| member_roles | yes | `list` | A list of the member that send the triggering message their role ID's |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

## Responses

Endpoints related to the responses of the module

<details>
  <summary>GET - `/modules/autoresponder/responses`</summary>

Get the list of responses for the autoresponder module for the specified guild.

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
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/autoresponder/responses`</summary>

Create a new response for the autoresponder module in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild for which to create the autoresponder trigger |
| response_type | yes | `integer` | The type of the response. Can be 1 for "Message", 2 for "Embed" or 3 for "Reaction" |
| response_content | yes | `string` | The content to respond with. Can also be Husqy embed configuration (JSON) or None (for Wildcard trigger type or Reaction response type) |
| emoji_name | yes | `string` | The literal emoji, f.e. 😁 or the name of the emoji when it is a custom guild emoji. Can also be None if response type is not Reaction |
| emoji_id | yes | `integer` | The ID of the custom emoji. When using a default emoji, this can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
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
  <summary>GET - `/modules/autoresponder/response/{response_id}`</summary>

Get the details of the specified autoresponder response in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to return the details of the autoresponder response from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/autoresponder/response/{response_id}`</summary>

Delete the specified autoresponder response in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild for which to delete the response |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Privacy

Endpoints related to privacy and the tags module

<details>
  <summary>GET - `/modules/autoresponder/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in autoresponder to your user.

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
  <summary>DELETE - `/modules/autoresponder/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in autoresponder to your user.

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