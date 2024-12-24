---
description: Husqy API Reminders
title: Husqy API Reminders
sidebar_label: Reminders
keywords:
  - docs
  - api
  - functions
  - reminders
sidebar_position: 1
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Functions Reminder functionality.

<details>
  <summary>GET - `/functions/reminders/`</summary>

Home endpoint for the Reminder Husqy API. Returns only success message displaying that it is the Function Reminders Husqy API route.

</details>

## Entries

Endpoints related to entry functionality.

<details>
  <summary>DELETE - `/functions/reminders/delete`</summary>

Deletes all known reminders for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to remove the reminders from |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>GET - `/functions/reminders/entries`</summary>

Returns a list of reminder entries for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the reminders entries from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- InternalServerError

</details>

<details>
  <summary>POST - `/functions/reminders/entries`</summary>

Endpoint to create a new reminders entry in a guild for a member.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the reminder in |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/reminder create` command is send |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/reminder create` command |
| wait_duration | yes | `string` | The duration to wait before sending the reminder |
| destination_id | yes | `integer` | The ID of the channel or, in case of a user DM the ID of the user, to where to send the reminder after the wait duration is over |
| description | yes | `string` | (May be None) The description of the reminder |
| target_user_id | yes | `integer` | The ID of the user who will be owner of the reminder and thus the target user (if destination is user DM the target ID MUST be that user) |
| linked_message | yes | `string` | (May be None) A link to a discord message (or any other link for that matter) to place in the reminder |

Possible errors:

- BadRequestError
- SettingsError
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
  <summary>GET - `/functions/reminders/entry/{reminder_id}`</summary>

Returns a details of the specified reminder in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the specified reminders entry details from |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/functions/reminders/entry/{reminder_id}`</summary>

Deletes the specified reminder from the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the specified reminders entry details from |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/reminder delete` command is send |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/reminder delete` command |

Possible errors:

- BadRequestError
- SettingsError
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
  <summary>POST - `/functions/reminders/entry/send`</summary>

:::danger

Do not use this endpoint yourself! Reminders will be send by Husqy automatically.

:::

Endpoint to send the specified reminder to the destination of the reminder.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the reminder is located |
| reminder_id | yes | `string` | The ID of the reminder to send |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError

</details>

<details>
  <summary>POST - `/functions/reminders/entry/interact`</summary>

Endpoint to send the specified reminder to the destination of the reminder.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the reminder that is interacted with is located |
| channel_id | yes | `integer` | The ID of the channel where the interacted to reminder is located |
| interacted_message_id | yes | `integer` | The ID of the reminder messages to which is reacted |
| action | yes | `string` | The interaction action. Possible actions: delete |

Possible errors:

- BadRequestError
- SettingsError
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

## Reminder handler

Endpoints related to entry handling functionality.

<details>
  <summary>POST - `/functions/reminders/handler/add`</summary>

:::danger

Do not use this endpoint yourself! Please use the POST - `/functions/reminders/entries` to create a new reminder.

:::

Endpoint to add a reminder to the reminder handler service.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the reminder is created |
| reminder_id | yes | `integer` | The ID of the reminder which is should be added to the reminder handler service |
| wait_duration | yes | `integer` | The duration to wait before sending the reminder |
| end_time | yes | `integer` | The planned end time of the reminder |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/functions/reminders/handler/delete`</summary>

:::danger

Do not use this endpoint yourself! Please use the DELETE - `/functions/reminders/entry/{reminder_id}` to delete an existing reminder.

:::

Endpoint to delete a reminder from the reminder handler service.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the reminder is located |
| reminder_id | yes | `integer` | The ID of the reminder which is should be deeted from the reminder handler service |

Possible errors:

- BadRequestError

</details>

## Privacy

Endpoints related to privacy and the reminders


<details>
  <summary>GET - `/functions/reminders/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in reminders to your user.

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
  <summary>DELETE - `/functions/reminders/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in reminders to your user.

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