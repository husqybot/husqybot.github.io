---
description: Husqy API welcoming module
title: Husqy API welcoming module
sidebar_label: Welcoming
keywords:
  - docs
  - api
  - module
  - welcoming
sidebar_position: 2
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Welcoming.

<details>
  <summary>GET - `/modules/welcoming/`</summary>

Home endpoint for the Modules Welcoming Husqy API. Returns only success message displaying that it is the Modules Welcoming Husqy API route.

</details>

<details>
  <summary>GET - `/modules/welcoming/settings`</summary>

Get the settings of the welcoming module for the specified guild.

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
  <summary>PUT - `/modules/welcoming/settings`</summary>

Endpoint to change the settings of the welcoming module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the welcoming module settings for |
| request_welcome_messages_dm_enabled | yes | `boolean` | If the welcome messages in dm component should be enabled |
| request_welcome_messages_dm_randomized | yes | `boolean` | If the welcome messages in dm responses that are send should be randomized |
| request_welcome_message_dm_response_id | yes | `string` | The ID of the response to send. Can be none when responses are randomized |
| welcome_messages_enabled | yes | `boolean` | If the welcome messages in channel component should be enabled |
| welcome_messages_randomized | yes | `boolean` | If the welcome messages in channel responses that are send should be randomized |
| welcome_messages_channel | yes | `integer` | The ID of the channel to use as the welcome message in channel channel. Can be none when welcome messages component is disabled |
| welcome_message_response_id | yes | `string` | The ID of the response to send. Can be none when responses are randomized |
| leave_messages_enabled | yes | `boolean` | If the leave messages in channel component should be enabled |
| leave_messages_randomized | yes | `boolean` | If the leave messages in channel responses that are send should be randomized |
| leave_messages_channel | yes | `integer` | The ID of the channel to use as the leave message in channel channel. Can be none when leave messages component is disabled |
| leave_message_response_id | yes | `string` | The ID of the response to send. Can be none when responses are randomized |
| autorole_enabled | yes | `boolean` | If the autorole component should be enabled |
| autorole_role_ids | yes | `list` | A list of role IDs to give to new members |
| timedroles_enabled | yes | `boolean` | If the timedroles component should be enabled |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/welcoming/settings/delete`</summary>

Delete all settings of the welcoming module for a specified guild.

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
  <summary>GET - `/modules/welcoming/status`</summary>

Get the status of the welcoming module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/welcoming/enable`</summary>

Endpoint to enable the welcoming module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the welcoming module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/welcoming/disable`</summary>

Endpoint to disable the welcoming module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the welcoming module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Responses

Endpoint related to responses of the welcoming module.

<details>
  <summary>GET - `/modules/welcoming/responses`</summary>

Endpoint to get the responses of the welcoming module.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the welcoming responses from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of panels to return in one page (default = 10) |
| response_type | no | `integer` | The type of responses to get (1 = DM welcome messages, 2 = Channel welcome messages, 3 = Leave channel messages) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/welcoming/responses`</summary>

Endpoint to create a new welcoming response in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the response in |
| response_type | yes | `integer` | The type of response to create (1 = DM welcome messages, 2 = Channel welcome messages, 3 = Leave channel messages) |
| is_embed | yes | `boolean` | Wether the message content is an embed json config |
| content | yes | `string` | The content to use for the message. Can also be embed json config if is_embed is True |

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
  <summary>GET - `/modules/welcoming/response/{response_id}`</summary>

Endpoint to get a response of the welcoming module.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the welcoming response from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>DELETE - `/modules/welcoming/response/{response_id}`</summary>

Endpoint to delete a response of the welcoming module.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the response in |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

## Timedroles

Endpoint related to timedroles of the welcoming module.

<details>
  <summary>GET - `/modules/welcoming/timedroles`</summary>

Endpoint to get the timedroles of the welcoming module.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the welcoming timedroles from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of panels to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/welcoming/timedroles`</summary>

Endpoint to create a new timedrole in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the response in |
| role_id | yes | `integer` | The ID of the role to add to a member |
| add_after | yes | `integer` | The amount of seconds a member must be in a channel before getting a role |

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
  <summary>GET - `/modules/welcoming/timedrole/{timedrole_id}`</summary>

Endpoint to get a timedrole of the welcoming module.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the timedrole from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>DELETE - `/modules/welcoming/timedrole/{timedrole_id}`</summary>

Endpoint to delete a timedrole of the welcoming module.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the timedrole in |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

## Checks

Endpoint related to triggering the checking the components of the welcoming module.

<details>
  <summary>POST - `/modules/welcoming/check/welcome/dm`</summary>

:::danger

Do not use this endpoint yourself! Messages will be send by Husqy when needed.

:::

Endpoint to check if a message should be send to the joined users DM.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the member has joined |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/welcoming/check/welcome/channel`</summary>

:::danger

Do not use this endpoint yourself! Messages will be send by Husqy when needed.

:::

Endpoint to check if a message should be send to the welcome message channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the member has joined |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/welcoming/check/leave/channel`</summary>

:::danger

Do not use this endpoint yourself! Messages will be send by Husqy when needed.

:::

Endpoint to check if a message should be send to the leave message channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild which the member has left |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/welcoming/check/role/on-join`</summary>

:::danger

Do not use this endpoint yourself! Roles will be added by Husqy when needed.

:::

Endpoint to check if a new member should get roles from the autorole component.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the member has joined |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/welcoming/check/role/timed`</summary>

:::danger

Do not use this endpoint yourself! Roles will be added by Husqy when needed.

:::

Endpoint to check if a member should get roles from the timedroles component.

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

## Privacy

Endpoints related to privacy and the tags module

<details>
  <summary>GET - `/modules/greetings/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in greetings to your user.

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
  <summary>DELETE - `/modules/greetings/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in greetings to your user.

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