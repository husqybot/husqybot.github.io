---
description: Husqy API greetings module
title: Husqy API greetings module
sidebar_label: Greetings
keywords:
  - docs
  - api
  - module
  - greetings
sidebar_position: 2
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Greetings.

<details>
  <summary>GET - `/modules/greetings/`</summary>

Home endpoint for the Modules Greetings Husqy API. Returns only success message displaying that it is the Modules Greetings Husqy API route.

</details>

<details>
  <summary>GET - `/modules/greetings/settings`</summary>

Get the settings of the greetings module for the specified guild.

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
  <summary>PUT - `/modules/greetings/settings`</summary>

Endpoint to change the settings of the greetings module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the greetings module settings for |
| greetings_in_guild | yes | `boolean` | If the greetings in guild component should be enabled |
| greetings_in_guild_content | yes | `string` | (May be None) The content to send to the greetings in guild channel |
| greetings_in_guild_type | yes | `string` | (May be None) The type of response when a user joins a guild. May be "message" or "embed" |
| greetings_in_guild_channel | yes | `integer` | (May be None) The ID of the channel to use as the greetings in guild channel |
| greetings_to_user | yes | `boolean` | If the greetings to user component should be enabled |
| greetings_to_user_content | yes | `string` | (May be None) The content to send to the user |
| greetings_to_user_type | yes | `string` | (May be None) The type of response when a user joins a guild. May be "message" or "embed" |
| leave_taking_in_guild | yes | `boolean` | If the leave taking in guild component should be enabled |
| leave_taking_in_guild_content | yes | `string` | (May be None) The content to send to the leave taking in guild channel |
| leave_taking_in_guild_type | yes | `string` | (May be None) The type of response when a user leaves a guild. May be "message" or "embed" |
| leave_taking_in_guild_channel | yes | `integer` | (May be None) The ID of the channel to use as the leave taking channel |
| greetings_role_add | yes | `boolean` | If the greetings role add component should be enabled |
| greetings_role | yes | `integer` | (May be None) The ID of the role to add to a new member on join |

:::warning

(May be None) in this context means that it may be none if that component is not going to be enabled, for example, if greetings_role_add is going to be false, greetings_role may be None!

:::

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/greetings/settings/delete`</summary>

Delete all settings of the greetings module for a specified guild.

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
  <summary>GET - `/modules/greetings/status`</summary>

Get the status of the greetings module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/greetings/enable`</summary>

Endpoint to enable the greetings module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the greetings module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/greetings/disable`</summary>

Endpoint to disable the greetings module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the greetings module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Function checks

Endpoint related to triggering the checking of sending greetings messages

<details>
  <summary>POST - `/modules/greetings/greeting/join-in-guild/check`</summary>

:::danger

Do not use this endpoint yourself! Messages will be created by Husqy when needed.

:::

Endpoint to check if the join in guild message should be send.

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
  <summary>POST - `/modules/greetings/greeting/join-role/check`</summary>

:::danger

Do not use this endpoint yourself! Roles will be added by Husqy when needed.

:::

Endpoint to check if the join role, role should be added.

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
  <summary>POST - `/modules/greetings/greeting/join-to-user/check`</summary>

:::danger

Do not use this endpoint yourself! Messages will be created by Husqy when needed.

:::

Endpoint to check if the join to user messages should be send.

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
  <summary>POST - `/modules/greetings/greeting/leave-in-guild/check`</summary>

:::danger

Do not use this endpoint yourself! Messages will be created by Husqy when needed.

:::

Endpoint to check if the leave taking in guild messages should be send.

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