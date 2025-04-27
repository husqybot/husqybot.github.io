---
description: Husqy API serverstats module
title: Husqy API serverstats module
sidebar_label: Serverstats
keywords:
  - docs
  - api
  - module
  - serverstats
sidebar_position: 8
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Serverstats.

<details>
  <summary>GET - `/modules/serverstats/`</summary>

Home endpoint for the Modules Serverstats Husqy API. Returns only success message displaying that it is the Modules Serverstats Husqy API route.

</details>

<details>
  <summary>GET - `/modules/serverstats/settings`</summary>

Get the settings of the serverstats module for the specified guild.

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
  <summary>PUT - `/modules/serverstats/settings`</summary>

Endpoint to change the settings of the serverstats module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the serverstats module settings for |
| counters_enabled | yes | `boolean` | If the counters should be enabled |
| counters_category_id | yes | `integer` | The ID of the category channel where the counters will be located. Can be 'create' to create a category |
| starboard_enabled | yes | `boolean` | If the starboard should be enabled |
| starboard_channel | yes | `integer` | The ID of the channel where the starboard messages will be sent. Can be 'create' to create a channel |
| starboard_count | yes | `integer` | The amount of stars required to get into the starboard channel |
| stats_messages_enabled | yes | `boolean` | If the message statistics should be enabled |
| stats_commands_enabled | yes | `boolean` | If the commands statistics should be enabled |
| stats_members_enabled | yes | `boolean` | If the members statistics should be enabled |
| stats_activities_enabled | yes | `boolean` | If the activities statistics should be enabled |
| stats_voice_enabled | yes | `boolean` | If the voice statistics should be enabled |
| stats_modules_autoresponder_enabled | yes | `boolean` | If the module autoresponder statistics should be enabled |
| stats_modules_tags_enabled | yes | `boolean` | If the module tags statistics should be enabled |
| stats_modules_verifier_enabled | yes | `boolean` | If the module verifier statistics should be enabled |
| stats_modules_socials_enabled | yes | `boolean` | If the module socials statistics should be enabled |
| stats_modules_rules_enabled | yes | `boolean` | If the module rules statistics should be enabled |
| stats_modules_invite_tracker_enabled | yes | `boolean` | If the module invite tracker statistics should be enabled |
| stats_modules_reactionroles_enabled | yes | `boolean` | If the module reactionroles statistics should be enabled |
| stats_modules_welcoming_enabled | yes | `boolean` | If the module welcoming statistics should be enabled |
| stats_modules_tempchannels_enabled | yes | `boolean` | If the module tempchannels statistics should be enabled |
| stats_modules_tickets_enabled | yes | `boolean` | If the module tickets statistics should be enabled |
| stats_functions_reminders_enabled | yes | `boolean` | If the function reminders statistics should be enabled |
| stats_functions_giveaways_enabled | yes | `boolean` | If the function giveaways statistics should be enabled |

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/serverstats/settings/delete`</summary>

Delete all settings of the serverstats module for a specified guild.

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
  <summary>GET - `/modules/serverstats/status`</summary>

Get the status of the serverstats module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/serverstats/enable`</summary>

Endpoint to enable the serverstats module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the serverstats module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/serverstats/disable`</summary>

Endpoint to disable the serverstats module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the serverstats module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError
- InternalServerError

</details>

## Counters

Endpoints related to counters

<details>
  <summary>GET - `/modules/serverstats/counters`</summary>

Endpoint to get all active counters in the server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the counters from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of counters to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/counters`</summary>

Endpoint to create a new counters in the server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the new counters in |
| counter_type | yes | `integer` | The type of the counter to create. Can be 1 (for: Statuses), 2 (for: Online), 3 (for: Online with role), 4 (for: Offline), 5 (for: DND), 6 (for: Members), 7 (for: Members with role), 8 (for: Boost), 9 (for: Channels), 10 (for: Roles) |
| new_format | yes | `string` | The format to use for the counters |
| new_role_id | yes | `integer` | The ID for the role to use. Can be None when the type is not: 3 or 7 |
| new_goal | yes | `integer` | The goal number to count towards. Can be None. |

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
  <summary>GET - `/modules/serverstats/counter/{counter_id}`</summary>

Endpoint to get information about a specific counter in the server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the counters from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/serverstats/counter/{counter_id}`</summary>

Endpoint to delete  a specific counter in the server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the counters from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/serverstats/counters/update`</summary>

:::danger

Do not use this endpoint yourself! Husqy will update counters automatically.

:::

Endpoint to start updating counters for all servers.

Possible errors:

- InternalServerError

</details>


<details>
  <summary>POST - `/modules/serverstats/counters/check-delete`</summary>

:::danger

Do not use this endpoint yourself! Husqy will update the configuration when a channel that is a counter panel channel is deleted.

:::

Endpoint to check if a channel is a counters channel and update the configuration.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the removed channel is located |
| channel_id | yes | `integer` | The ID of the channel that is removed |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

## Starboard

Endpoints related to starboards

<details>
  <summary>POST - `/modules/serverstats/starboard/add`</summary>

:::danger

Do not use this endpoint yourself! Starboard messages will be created by Husqy when needed.

:::

Endpoint to check a message for sending to the starboard channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the possible starboard message is located |
| channel_id | yes | `integer` | The ID of the channel where the interacted message is located |
| message_id | yes | `integer` | The ID of the message which is the interacted message |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/starboard/remove`</summary>

:::danger

Do not use this endpoint yourself! Starboard messages will be removed by Husqy when needed.

:::

Endpoint to check a message for sending to the starboard channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the possible starboard message is located |
| channel_id | yes | `integer` | The ID of the channel where the interacted message is located |
| message_id | yes | `integer` | The ID of the message which is the interacted message |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/starboard/check/delete`</summary>

:::danger

Do not use this endpoint yourself! Husqy will update the configuration when the starboard channel is deleted.

:::

Endpoint to check if a channel is the starboard channel channel and update the configuration.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the removed channel is located |
| channel_id | yes | `integer` | The ID of the channel that is removed |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/serverstats/starboard/check/deleted-message`</summary>

:::danger

Do not use this endpoint yourself! Husqy will update the configuration when the starboard message is deleted.

:::

Endpoint to check if a message is a starboard message and update the configuration.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the removed channel is located |
| message_id | yes | `integer` | The ID of the message that is removed |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

## Statistics

Endpoints related to statistics

:::note

Statistics GET endpoints will return a list of objects containing all information you need about the statistics.

::: 

### Voice

<details>
  <summary>GET - `/modules/serverstats/stats/voice`</summary>

Endpoint to get voice related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |
| channel_id | no | `integer` | The ID of the channel to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/voice`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add voice related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| joined_member_id | yes | `integer` | The ID of the member that joined a voice channel |
| channel_id | yes | `integer` | The ID of the channel that the user has joined |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>PUT - `/modules/serverstats/stats/voice`</summary>

:::danger

Do not use this endpoint yourself! Husqy will update statistical data when appropriate.

:::

Endpoint to update created (POST request) voice related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| left_member_id | yes | `integer` | The ID of the member that left a voice channel |
| channel_id | yes | `integer` | The ID of the channel that the user has left |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

### Messages

#### Deleted

<details>
  <summary>GET - `/modules/serverstats/stats/messages/deleted`</summary>

Endpoint to get message deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |
| channel_id | no | `integer` | The ID of the channel to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/messages/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add messages deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| author_id | yes | `integer` | The ID of the member that deleted a message |
| channel_id | yes | `integer` | The ID of the channel where the deleted message was located |
| message_id | yes | `integer` | The ID of the message that has been deleted |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Sent

<details>
  <summary>GET - `/modules/serverstats/stats/messages/sent`</summary>

Endpoint to get message sent related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |
| channel_id | no | `integer` | The ID of the channel to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/messages/sent`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add messages sent related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| author_id | yes | `integer` | The ID of the member that sent a message |
| channel_id | yes | `integer` | The ID of the channel where the message is sent |
| message_id | yes | `integer` | The ID of the message that has been sent |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

### Members

#### Joined

<details>
  <summary>GET - `/modules/serverstats/stats/members/joined`</summary>

Endpoint to get members joined related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/members/joined`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add members joined related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| joined_member_id | yes | `integer` | The ID of the member that joined the server |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Left

<details>
  <summary>GET - `/modules/serverstats/stats/members/left`</summary>

Endpoint to get members left related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/members/left`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add members left related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| left_member_id | yes | `integer` | The ID of the member that left the server |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Total

<details>
  <summary>GET - `/modules/serverstats/stats/members/total`</summary>

Endpoint to get members total related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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

### Activities

#### Statuses

<details>
  <summary>GET - `/modules/serverstats/stats/activities/statuses`</summary>

Endpoint to get activities statuses related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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

#### Presence

<details>
  <summary>GET - `/modules/serverstats/stats/activities/presence`</summary>

Endpoint to get activities presence related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/activities/presence`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add activities presence related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| presence_user_id | yes | `integer` | The ID of the member that has updated their status |
| activities | yes | `list` | A list of the current activities for the user (Activity is a json object containing: activity_type, name, details and state) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

### Commands

<details>
  <summary>GET - `/modules/serverstats/stats/commands/used`</summary>

Endpoint to get commands used related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/commands/used`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add commands used related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| initiator_id | yes | `integer` | The ID of the member that has used a Husqy command |
| command | yes | `string` | The command the user has used |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

### Functions

#### Reminders

<details>
  <summary>GET - `/modules/serverstats/stats/functions/reminders/created`</summary>

Endpoint to get reminders created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/functions/reminders/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add reminders created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the member that has created a reminder |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/functions/reminders/deleted`</summary>

Endpoint to get reminders deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/functions/reminders/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add reminders deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the member that has deleted a reminder |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Giveaways

<details>
  <summary>GET - `/modules/serverstats/stats/functions/giveaways/created`</summary>

Endpoint to get giveaways created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/functions/giveaways/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add giveaways created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the member that has created a giveaway |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/functions/giveaways/deleted`</summary>

Endpoint to get giveaways deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/functions/giveaways/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add giveaways deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the member that has deleted a giveaway |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/functions/giveaways/responders`</summary>

Endpoint to get giveaways responders related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/functions/giveaways/responders`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add giveaways responders related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| responding_user_id | yes | `integer` | The ID of the member that has responded to a giveaway |
| old_giveaway_id | yes | `string` | The ID of the giveaway that the user responded to |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

### Modules

#### Autoresponder

##### Responses created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/autoresponder/responses/created`</summary>

Endpoint to get autoresponder responses created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/autoresponder/responses/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add autoresponder responses created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the member that has created an autoresponder response |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Responses deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/autoresponder/responses/deleted`</summary>

Endpoint to get autoresponder responses deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/autoresponder/responses/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add autoresponder responses deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the member that has deleted an autoresponder response |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Triggers created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/autoresponder/triggers/created`</summary>

Endpoint to get autoresponder triggers created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/autoresponder/triggers/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add autoresponder triggers created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the member that has created an autoresponder trigger |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Triggers deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/autoresponder/triggers/deleted`</summary>

Endpoint to get autoresponder triggers deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/autoresponder/triggers/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add autoresponder triggers deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the member that has deleted an autoresponder trigger |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Triggers hit

<details>
  <summary>GET - `/modules/serverstats/stats/modules/autoresponder/triggers/hit`</summary>

Endpoint to get autoresponder triggers hit related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/autoresponder/triggers/hit`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add autoresponder triggers hit related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| triggering_user_id | yes | `integer` | The ID of the member that has triggered an autoresponder trigger |
| trigger_id | yes | `string` | The ID of the trigger that has been hit |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Check time

<details>
  <summary>GET - `/modules/serverstats/stats/modules/autoresponder/check-time`</summary>

Endpoint to get autoresponder check time related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/modules/autoresponder/check-time`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add autoresponder check time related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| check_time | yes | `float` | The time it took to check if a trigger is hit |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Invite tracker

##### Invites created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/invite_tracker/invite/created`</summary>

Endpoint to get invite tracker invite created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/invite_tracker/invite/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add invite tracker invite created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created the invite |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Invites deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/invite_tracker/invite/deleted`</summary>

Endpoint to get invite tracker invite deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/invite_tracker/invite/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add invite tracker invite deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted the invite |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Reactionroles

##### Panels created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/reactionroles/panels/created`</summary>

Endpoint to get reactionroles panels created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/reactionroles/panels/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add reactionroles panels created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created the reactionroles panel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Panels deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/reactionroles/panels/deleted`</summary>

Endpoint to get reactionroles panels deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/reactionroles/panels/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add reactionroles panels deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted the reactionroles panel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Reactionroles added

<details>
  <summary>GET - `/modules/serverstats/stats/modules/reactionroles/reactionroles/added`</summary>

Endpoint to get reactionroles reactionroles added related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/reactionroles/reactionroles/added`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add reactionroles reactionroles added related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has added the reactionrole |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Reactionroles removed

<details>
  <summary>GET - `/modules/serverstats/stats/modules/reactionroles/reactionroles/removed`</summary>

Endpoint to get reactionroles reactionroles removed related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/reactionroles/reactionroles/removed`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add reactionroles reactionroles removed related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has removed the reactionrole |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Check time

<details>
  <summary>GET - `/modules/serverstats/stats/modules/reactionroles/check-time`</summary>

Endpoint to get reactionroles check time related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/modules/reactionroles/check-time`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add reactionroles check time related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| check_time | yes | `float` | The amount of time it took to check a reactionrole reaction |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Rules

##### Rules added

<details>
  <summary>GET - `/modules/serverstats/stats/modules/rules/rule/added`</summary>

Endpoint to get rules rule added related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/rules/rule/added`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add rules rule added related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has added the rule |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Rules removed

<details>
  <summary>GET - `/modules/serverstats/stats/modules/rules/rule/removed`</summary>

Endpoint to get rules rule removed related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/rules/rule/removed`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add rules rule removed related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has removed the rule |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Check time

<details>
  <summary>GET - `/modules/serverstats/stats/modules/rules/check-time`</summary>

Endpoint to get rules check time related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/modules/rules/check-time`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add rules check time related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| check_time | yes | `float` | The amount of time it took to check a rule accepted/denied interaction |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Socials

##### Entries added

<details>
  <summary>GET - `/modules/serverstats/stats/modules/socials/entries/added`</summary>

Endpoint to get socials entries added related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/socials/entries/added`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add socials entries added related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has added the socials entry |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Entries removed

<details>
  <summary>GET - `/modules/serverstats/stats/modules/socials/entries/removed`</summary>

Endpoint to get socials entries removed related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/socials/entries/removed`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add socials entries removed related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has removed the socials entry |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Tags

##### Tag created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tags/tag/created`</summary>

Endpoint to get tags tag created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tags/tag/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tags tag created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created the tag |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Tag deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tags/tag/deleted`</summary>

Endpoint to get tags tag deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tags/tag/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tags tag deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted the tag |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Check time

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tags/check-time`</summary>

Endpoint to get tags check time related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/modules/tags/check-time`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tags check time related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| check_time | yes | `float` | The amount of time it took to check a rule accepted/denied interaction |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Tempchannels

##### Creation channel created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tempchannels/creation-channels/created`</summary>

Endpoint to get tempchannels creation channels created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tempchannels/creation-channels/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tempchannels creation channels created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created the creation channel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Creation channel deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tempchannels/creation-channels/deleted`</summary>

Endpoint to get tempchannels creation channels deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tempchannels/creation-channels/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tempchannels creation channels deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted the creation channel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Tempchannels created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tempchannels/tempchannels/created`</summary>

Endpoint to get tempchannels tempchannels created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tempchannels/tempchannels/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tempchannels tempchannels created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has triggered the creation of a tempchannel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Created check time

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tempchannels/created-check-time`</summary>

Endpoint to get tempchannels created check time related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/modules/tempchannels/created-check-time`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tempchannels created check time related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| check_time | yes | `float` | The amount of time it took to check and create a tempchannel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Deleted check time

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tempchannels/deleted-check-time`</summary>

Endpoint to get tempchannels deleted check time related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/modules/tempchannels/deleted-check-time`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tempchannels deleted check time related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| check_time | yes | `float` | The amount of time it took to check and delete a tempchannel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Tickets

##### Panels created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tickets/panels/created`</summary>

Endpoint to get tickets panels created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tickets/panels/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tickets panels created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created a tickets panel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Panels deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tickets/panels/deleted`</summary>

Endpoint to get tickets panels deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tickets/panels/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tickets panels deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted a tickets panel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Ticket type added

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tickets/types/added`</summary>

Endpoint to get tickets types added related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tickets/types/added`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tickets types added related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has added the ticket type |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Ticket type removed

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tickets/types/removed`</summary>

Endpoint to get tickets types removed related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tickets/types/removed`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tickets types removed related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has removed the ticket type |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Tickets created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tickets/created`</summary>

Endpoint to get tickets created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tickets/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tickets created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created a ticket |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Tickets deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tickets/deleted`</summary>

Endpoint to get tickets deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tickets/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tickets deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted a ticket |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Tickets closed

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tickets/closed`</summary>

Endpoint to get tickets closed related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tickets/closed`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tickets closed related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has closed a ticket |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Tickets reopened

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tickets/reopened`</summary>

Endpoint to get tickets reopened related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/tickets/reopened`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add tickets reopened related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has reopened a ticket |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Verifier

##### Check time

<details>
  <summary>GET - `/modules/serverstats/stats/modules/verifier/check-time`</summary>

Endpoint to get verifier check time related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/modules/verifier/check-time`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add verifier check time related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| check_time | yes | `float` | The amount of time it took to check a verification interaction |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Welcoming

##### Responses created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/welcoming/responses/created`</summary>

Endpoint to get welcoming responses created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/welcoming/responses/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add welcoming responses created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created the response |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Responses deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/welcoming/responses/deleted`</summary>

Endpoint to get welcoming responses deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/welcoming/responses/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add welcoming responses deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted the response |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Timedroles created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/welcoming/timedroles/created`</summary>

Endpoint to get welcoming timedroles created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/welcoming/timedroles/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add welcoming timedroles created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created the timedroles |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Timedroles deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/welcoming/timedroles/deleted`</summary>

Endpoint to get welcoming timedroles deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/welcoming/timedroles/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add welcoming timedroles deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted the timedroles |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Check time

<details>
  <summary>GET - `/modules/serverstats/stats/modules/welcoming/check-time`</summary>

Endpoint to get welcoming check time related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |

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
  <summary>POST - `/modules/serverstats/stats/modules/welcoming/check-time`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add welcoming check time related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| check_time | yes | `float` | The amount of time it took to check a welcoming event |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

#### Polls

##### Polls created

<details>
  <summary>GET - `/modules/serverstats/stats/modules/polls/poll/created`</summary>

Endpoint to get polls poll created related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/polls/poll/created`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add polls poll created related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has created the poll |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Polls deleted

<details>
  <summary>GET - `/modules/serverstats/stats/modules/polls/poll/deleted`</summary>

Endpoint to get polls poll deleted related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/polls/poll/deleted`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add polls poll deleted related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has deleted the poll |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Polls manually closed

<details>
  <summary>GET - `/modules/serverstats/stats/modules/polls/poll/manually_closed`</summary>

Endpoint to get polls poll manually closed related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/polls/poll/manually_closed`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add polls poll manually closed related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| closing_user_id | yes | `integer` | The ID of the user that has manually closed the poll |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Vote added

<details>
  <summary>GET - `/modules/serverstats/stats/modules/polls/vote/added`</summary>

Endpoint to get polls vote added related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/polls/vote/added`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add polls vote added related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| creating_user_id | yes | `integer` | The ID of the user that has added the vote |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

##### Vote removed

<details>
  <summary>GET - `/modules/serverstats/stats/modules/polls/vote/removed`</summary>

Endpoint to get polls vote removed related statistical data in a server.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the statistical data is related to |
| days | no | `integer` | The number of days to return. Can be between 1 and 30 |
| user_id | no | `integer` | The ID of the user to filter the statistical data for |

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
  <summary>POST - `/modules/serverstats/stats/modules/polls/vote/removed`</summary>

:::danger

Do not use this endpoint yourself! Husqy will add statistical data when appropriate.

:::

Endpoint to add polls vote removed related statistical data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| deleting_user_id | yes | `integer` | The ID of the user that has removed the vote |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

## Privacy

Endpoints related to privacy and the tags module

<details>
  <summary>GET - `/modules/serverstats/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in serverstats to your user.

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
  <summary>DELETE - `/modules/serverstats/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in serverstats to your user.

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