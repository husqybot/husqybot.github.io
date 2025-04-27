---
description: Husqy API Polls module
title: Husqy API Polls module
sidebar_label: Polls
keywords:
  - docs
  - api
  - module
  - polls
sidebar_position: 13
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules polls.

<details>
  <summary>GET - `/modules/polls/`</summary>

Home endpoint for the Modules Polls Husqy API. Returns only success message displaying that it is the Modules Polls API route.

</details>

<details>
  <summary>GET - `/modules/polls/settings`</summary>

Get the settings of the polls module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the settings of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>PUT - `/modules/polls/settings`</summary>

Endpoint to change the settings of the polls module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the polls module settings for |
| save_duration_timeout | yes | `integer` | The amount of seconds to wait after ending a poll to delete it |
| delete_ended_discord_polls | yes | `boolean` | If ended Discord polls should be deleted from discord channels |
| delete_ended_husqy_polls | yes | `boolean` | If ended Husqy polls should be deleted from discord channels |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/polls/settings/delete`</summary>

Delete all settings of the polls module for a specified guild.

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
  <summary>GET - `/modules/polls/status`</summary>

Get the status of the polls module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/polls/enable`</summary>

Endpoint to enable the polls module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the polls module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/polls/disable`</summary>

Endpoint to disable the polls module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the polls module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Polls

Endpoint related to polls.

<details>
  <summary>GET - `/modules/polls/entries`</summary>

Endpoint to get the known polls.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the known polls from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of polls to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/polls/entries`</summary>

Endpoint to create a new poll in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the poll in |
| channel_id | yes | `integer` | The ID of the channel to create the poll in |
| poll_type | yes | `integer` | The type of the poll. 1 for Discord and 2 for Husqy |
| message_id | yes | `integer` | The ID of the message that is a created Discord poll. Must be None when creating a poll of any type. Discord polls will be automatically registered |
| poll_duration | yes | `string` | The duration of the poll. Must be in format `{delay}s/m/h/d`. F.e. 20m or 1h |
| poll_answer_type | yes | `integer` | The answer type of the poll. 1 for emoji, 2 for buttons or 3 for dropdown. Ignored when poll type is 1 |
| question | yes | `string` | The question of the poll |
| description | yes | `string` | An optional description for the poll. Can be None. Ignore when poll type is 1 |
| answers | yes | `list` | A list of answer objects containing the keys: "answer_text", "label", "description", "emoji_id", "emoji_name" and optionally "votes" (has to be an empty list of votes) |
| is_multi_select | yes | `boolean` | If the poll allows more answers per user |
| is_anonymous | yes | `boolean` | If the poll is anonymous. Ignore when poll type is 1 |
| max_votes_per_answer | yes | `integer` | The amount of votes a member can add to an answer. Ignore when poll type is 1 |
| poll_owner_id | yes | `integer` | The ID of the owner of the poll |
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
  <summary>GET - `/modules/polls/entry/{poll_id}`</summary>

Endpoint to get the specified poll.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the poll from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/polls/entry/{poll_id}`</summary>

Endpoint to delete an existing poll in the Discord server. This can only be done on Husqy polls and Discord polls send by Husqy.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to remove the poll in |
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
  <summary>PUT - `/modules/polls/entry/{poll_id}`</summary>

Endpoint to edit an existing poll in the Discord server. This can only be done on Husqy polls.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to edit the poll in |
| question | yes | `string` | The new question of the poll |
| description | yes | `string` | The new description of the poll. Can be None to remove the description |
| max_votes_per_answer | yes | `integer` | The new amount of votes a user can add to an answer |
| is_multi_select | yes | `boolean` | The new multi select setting |
| is_anonymous | yes | `boolean` | The new anonymous setting |
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
  <summary>POST - `/modules/polls/entry/{poll_id}/close`</summary>

Endpoint to close an poll in the Discord server. Can only be done on Husqy polls and Discord polls sent by Husqy.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to close the poll in |
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
  <summary>POST - `/modules/polls/entry/vote`</summary>

:::danger

Do not use this endpoint yourself! To vote for an answer please interact with the poll message. Husqy will register the votes automatically!

:::

Endpoint to vote for an answer of a poll in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the poll is located |
| poll_id | yes | `string` | The ID of the poll that is voted for. Can be None to check based on channel_id and interacted_message_id |
| answer_id | yes | `integer` | The ID the answer to vote for. Can be None to check based on emoji_id and emoji_name |
| action | yes | `string` | The action to use. "add" for adding a vote and "remove" to remove votes |
| message_id | yes | `integer` | The ID of the message that is created by Husqy when interacting with the poll. Can be None. |
| emoji_id | yes | `integer` | The ID of the custom emoji. Can be None. |
| emoji_name | yes | `string` | The name or literal emoji that is reacted with. Can be None. |
| channel_id | yes | `integer` | The ID of the channel where the poll is located. |
| interacted_message_id | yes | `integer` | The ID of the message that is interacted with. Can be None. |
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
  <summary>DELETE - `/modules/polls/entry/delete-poll-on-message-delete`</summary>

:::danger

Do not use this endpoint yourself! Husqy will automatically check deleted messages for polls.

:::

Endpoint to delete an poll in the Discord server when a deleted message was a poll.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the poll from |
| channel_id | yes | `integer` | The ID of the channel where the deleted message was located |
| interacted_message_id | yes | `integer` | The ID of the deleted message |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

## Handler

<details>
  <summary>GET - `/modules/polls/handler`</summary>

Home endpoint for the Modules Polls Entries Husqy API. Returns only success message displaying that it is the Modules Polls Entries API route.

</details>

<details>
  <summary>POST - `/modules/polls/handler/create`</summary>

:::danger

Do not use this endpoint yourself! To create a poll use the `POST - /modules/polls/entries` endpoint.

:::

Endpoint to create a new poll in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the poll in |
| poll_id | yes | `string` | The ID of the poll to create |
| channel_id | yes | `integer` | The ID of the channel to create the poll in |
| poll_type | yes | `integer` | The type of the poll. 1 for Discord and 2 for Husqy |
| message_id | yes | `integer` | The ID of the message that is a created Discord poll. Must be None when creating a poll of any type. Discord polls will be automatically registered |
| edited_with_results | yes | `boolean` | Indicator if the poll is already edited because it is finished. |
| poll_answer_type | yes | `integer` | The answer type of the poll. 1 for emoji, 2 for buttons or 3 for dropdown. Ignored when poll type is 1 |
| question | yes | `string` | The question of the poll |
| description | yes | `string` | An optional description for the poll. Can be None. Ignore when poll type is 1 |
| end_time | yes | `integer` | The end time of the poll |
| delete_at | yes | `integer` | The time at which the poll will be deleted |
| language | yes | `string` | The language of the server |
| auto_delete | yes | `integer` | The auto delete of the server |
| answers | yes | `list` | A list of answer objects containing the keys: "answer_text", "label", "description", "emoji_id", "emoji_name" and optionally "votes" (has to be an empty list of votes) |
| is_multi_select | yes | `boolean` | If the poll allows more answers per user |
| is_anonymous | yes | `boolean` | If the poll is anonymous. Ignore when poll type is 1 |
| max_votes_per_answer | yes | `integer` | The amount of votes a member can add to an answer. Ignore when poll type is 1 |
| sent_by_husqy | yes | `boolean` | Indicator if the poll message is sent by Husqy |
| poll_owner_id | yes | `integer` | The ID of the owner of the poll |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>DELETE - `/modules/polls/handler/delete`</summary>

:::danger

Do not use this endpoint yourself! To delete a poll use the `POST - /modules/polls/entry/{poll_id}` endpoint.

:::

Endpoint to delete a poll in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the poll in |
| poll_id | yes | `string` | The ID of the poll to delete |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/modules/polls/handler/edit`</summary>

:::danger

Do not use this endpoint yourself! To edit a poll use the `PUT - /modules/polls/entry/{poll_id}` endpoint.

:::

Endpoint to edit a poll in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to edit the poll in |
| poll_id | yes | `string` | The ID of the poll to edit |
| question | yes | `string` | The new question of the poll |
| description | yes | `string` | The new description of the poll. Can be None to remove the description |
| max_votes_per_answer | yes | `integer` | The new amount of votes a user can add to an answer |
| is_multi_select | yes | `boolean` | The new multi select setting |
| is_anonymous | yes | `boolean` | The new anonymous setting |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/modules/polls/handler/close`</summary>

:::danger

Do not use this endpoint yourself! To close a poll use the `POST - /modules/polls/entry/{poll_id}/close` endpoint.

:::

Endpoint to close a poll in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to close the poll in |
| poll_id | yes | `string` | The ID of the poll to close |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/modules/polls/handler/vote`</summary>

:::danger

Do not use this endpoint yourself! To vote for a poll interact with the poll in Discord.

:::

Endpoint to vote for a poll in the Discord server.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to close the poll in |
| poll_id | yes | `string` | The ID of the poll to close |
| action | yes | `string` | The vote action. "add" or "remove" |
| answer_id | yes | `integer` | The ID of the answer to add the vote to or remove the vote from |

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
