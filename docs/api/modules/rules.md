---
description: Husqy API rules module
title: Husqy API rules module
sidebar_label: Rules
keywords:
  - docs
  - api
  - module
  - rules
sidebar_position: 11
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Rules.

<details>
  <summary>GET - `/modules/rules/`</summary>

Home endpoint for the Modules Rules Husqy API. Returns only success message displaying that it is the Modules Rules API route.

</details>

<details>
  <summary>GET - `/modules/rules/settings`</summary>

Get the settings of the rules module for the specified guild.

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
  <summary>PUT - `/modules/rules/settings`</summary>

Endpoint to change the settings of the rules module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the rules module settings for |
| rules_channel | yes | `integer` | The ID of the channel to use for sending the rules. Can be 'dm' or None for a users DM channel |
| rules_actions_enabled | yes | `boolean` | If the rules action (accept & deny) should be enabled |
| rules_accepted_role_ids | yes | `list` | A list of role ID's to give when a user accepts the rules |
| rules_denied_action | yes | `integer` | The action to take when a users denies the rules. Can be 1 for 'No action', 2 for 'Add roles' and 3 for 'kick' |
| rules_denied_role_ids | yes | `list` | A list of role ID's to give to a user when they deny the rules. Only applicable when the rules_denied_action is set to 2. |

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
  <summary>DELETE - `/modules/rules/settings/delete`</summary>

Delete all settings of the rules module for a specified guild.

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
  <summary>GET - `/modules/rules/status`</summary>

Get the status of the rules module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/rules/enable`</summary>

Endpoint to enable the rules module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the rules module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/rules/disable`</summary>

Endpoint to disable the rules module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the rules module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Entries

Endpoint related to rule entries of the rules module.

<details>
  <summary>GET - `/modules/rules/entries`</summary>

Endpoint to get the configured rules of the rules module.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the rules entries from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of panels to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/rules/entries`</summary>

Endpoint to add a new rule to the rules module.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the rules entries from |
| rule_text | yes | `string` | The text of the rule |
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
  <summary>GET - `/modules/rules/entry/{rule_id}`</summary>

Endpoint to get a rule of the rules module.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the rule is located |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/rules/entry/{rule_id}`</summary>

Endpoint to delete a rule from the rules module.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the rule is located |
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

## Checks

Endpoint related different check events of the rules module.

<details>
  <summary>POST - `/modules/rules/check/send`</summary>

:::danger

Do not use this endpoint yourself! Rules will be send by Husqy when needed.

:::

Endpoint to check if the configured rules should be send to a users DM.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the member has joined |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |
| requester | yes | `integer` | The ID of the user who ran the `/rules retrigger` command. Can be None |

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
  <summary>POST - `/modules/rules/check/interaction`</summary>

:::danger

Do not use this endpoint yourself! Interactions with the rules module message will be handled by Husqy when needed.

:::

Endpoint to check if an interaction with a rules message should be handled.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| message_id | yes | `integer` | The ID of the message that has been interacted with |
| channel_id | yes | `integer` | The ID of the channel where the interacted message is located |
| interaction_custom_id | yes | `string` | The custom ID of the interaction |
| interaction_id_token | yes | `string` | The token of the interaction. Can be None |
| application_id | yes | `string` | The ID of the application interaction. Can be None |

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

## Privacy

Endpoints related to privacy and the rules module

<details>
  <summary>GET - `/modules/rules/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in rules to your user.

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
  <summary>DELETE - `/modules/rules/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in rules to your user.

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