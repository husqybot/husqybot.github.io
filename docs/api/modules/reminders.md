---
description: Husqy API Reminders module
title: Husqy API Reminders module
sidebar_label: Reminders
keywords:
  - docs
  - api
  - module
  - reminders
sidebar_position: 13
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules reminders.

<details>
  <summary>GET - `/modules/reminders/`</summary>

Home endpoint for the Modules Reminders Husqy API. Returns only success message displaying that it is the Modules Reminders API route.

</details>

<details>
  <summary>DELETE - `/modules/reminders/delete`</summary>

Delete all settings of the reminders module for a specified guild.

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
  <summary>GET - `/modules/reminders/status`</summary>

Get the status of the reminders module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/reminders/enable`</summary>

Endpoint to enable the reminders module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the reminders module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/reminders/disable`</summary>

Endpoint to disable the reminders module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the reminders module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Reminders

Endpoint related to reminders.

<details>
  <summary>GET - `/modules/reminders/entries`</summary>

Endpoint to get the known reminders.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known polls from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of polls to return in one page (default = 10) |
| reminder_type | no | `string` | The type of reminder to filter: 'Quick', 'Repeated' or 'Scheduled' |
| user_id | no | `integer` | The ID of the user to filter for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/reminders/entries`</summary>

Endpoint to create a new reminder in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the reminder in |
| reminder_type | yes | `integer` | The type of reminder to create. 1 for 'Quick', 2 for 'Repeated' or 3 for 'Scheduled' |
| schedule_details | yes | `string` | The json configuration of the schedule |
| title | yes | `string` | The title of the reminder. Ignored when reminder_type is 2 or 3 |
| description | yes | `string` | The description of the reminder. Can be None. Ignored when reminder_type is 2 or 3 |
| owner | yes | `integer` | The owner of the reminder. Ignored when reminder_type is 2 or 3 |
| url | yes | `string` | The url to add to the reminder. Ignored when reminder_type is 2 or 3 |
| destination_id | yes | `integer` | The ID of the destination (Member DM or channel) |
| content | yes | `string` | The content of the reminder message to send. Ignored when reminder_type is 1. Supports Husqy embed config. |
| content_is_embed | yes | `boolean` | If the content is a Husqy embed configuration |
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
  <summary>GET - `/modules/reminders/entry/{reminder_id}`</summary>

Endpoint to get the specified reminder.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the reminder from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/reminders/entry/{reminder_id}`</summary>

Endpoint to delete an existing reminder in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to remove the reminder in |
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
  <summary>POST - `/modules/reminders/entry/{reminder_id}/send`</summary>

:::danger

Do not use this endpoint yourself! Husqy will automatically send the reminders based on the reminders schedule.

:::

Endpoint to send a reminder to a destination.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to edit the poll in |

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
  <summary>POST - `/modules/reminders/entry/{reminder_id}/interact`</summary>

:::danger

Do not use this endpoint yourself! Husqy will automatically handle the interaction when this takes place.

:::

Endpoint to interact a quick reminder (f.e. complete or mark as later).

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the reminder is located |
| action | yes | `string` | The action to take. Can be 'complete' or 'remind_later' |
| new_delay | yes | `string` | The new duration to wait before sending the reminder again. Ignored when action is 'complete' |
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

## Handler

<details>
  <summary>GET - `/modules/reminder/handler`</summary>

Home endpoint for the Modules Reminders Entries Husqy API. Returns only success message displaying that it is the Modules Reminders Entries API route.

</details>

<details>
  <summary>POST - `/modules/reminders/handler/create`</summary>

:::danger

Do not use this endpoint yourself! To create a reminder use the `POST - /modules/reminders/entries` endpoint.

:::

Endpoint to create a new poll in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the reminder in |
| reminder_id | yes | `string` | The ID of the reminder to create |
| reminder_type | yes | `integer` | The type of reminder to create. Can be 1 for 'Quick', 2 for 'Repeated' or 3 for 'Scheduled' |
| trigger_type | yes | `string` | The type of trigger to create. Can be 'date', 'cron' or 'interval' |
| schedule_details | yes | `string` | The schedule configuration for the reminder |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>DELETE - `/modules/reminders/handler/delete`</summary>

:::danger

Do not use this endpoint yourself! To delete a reminder use the `POST - /modules/reminders/entry/{reminder_id}` endpoint.

:::

Endpoint to delete a reminder in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the reminder in |
| reminder_id | yes | `string` | The ID of the reminder to delete |

Possible errors:

- BadRequestError

</details>

## Privacy

Endpoints related to privacy and the polls module

<details>
  <summary>GET - `/modules/polls/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in the polls module to your user.

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
  <summary>DELETE - `/modules/polls/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in polls module to your user.

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
