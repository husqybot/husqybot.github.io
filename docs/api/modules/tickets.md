---
description: Husqy API tickets module
title: Husqy API tickets module
sidebar_label: Tickets
keywords:
  - docs
  - api
  - module
  - tickets
sidebar_position: 7
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Tickets.

<details>
  <summary>GET - `/modules/tickets/`</summary>

Home endpoint for the Modules Tickets Husqy API. Returns only success message displaying that it is the Modules Tickets Husqy API route.

</details>

<details>
  <summary>DELETE - `/modules/tickets/delete`</summary>

Delete all related data of the tickets module for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the data from |

Possible errors:

- BadRequestError

</details>

## Status

Endpoints related to the status of the module

<details>
  <summary>GET - `/modules/tickets/status`</summary>

Get the status of the tickets module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/tickets/enable`</summary>

Endpoint to enable the tickets module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the tickets module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/tickets/disable`</summary>

Endpoint to disable the tickets module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the tickets module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Panels

Endpoints related to the configuration of ticket panels

<details>
  <summary>GET - `/modules/tickets/panels`</summary>

Endpoint to get all ticket panels for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the panels for |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/tickets/panels`</summary>

Endpoint to create a new ticket panel for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the tickets module for |
| panel_type | yes | `string` | The type of ticket panel. Can be 'create button', 'ticket type button' or 'dropdown' |
| create_message_is_embed | yes | `boolean` | If the create message for creating a ticket is an Husqy embed config |
| create_message_content | yes | `string` | The content for the create message. Can be Husqy embed config. Can be 'default' to use the default content |
| form_enabled | yes | `boolean` | If a form should be filled in when users create a ticket |
| form_content | yes | `string` | The Husqy modal config for the form to show. Can be 'default' to use default config. Can be None if form enabled is false. |
| ticket_opened_message_is_embed | yes | `string` | If the starting message send to a new ticket is an embed |
| ticket_opened_message_content | yes | `string` | The content for the message to send when a ticket is created. Can be Husqy embed config. Can be 'default' to use the default content |
| ticket_opened_name | yes | `string` | The name to give to new tickets |
| support_engineer_role_id | yes | `integer` | The ID of the role to use for the support engineer. Can be 'create' to create a default support engineer role  |
| create_message_category_id | yes | `integer` | The ID of the category where the create_message_channel_id is located or should be created. Can also be 'create' to create a default category |
| create_message_channel_id | yes | `integer` | The ID of the channel where the ticket panel should be located. Must be in the create_message_category_id. Can be 'create' to create a default channel |
| open_tickets_categories | yes | `list` | A list of category channel IDs where open tickets should be created if threads is not enabled |
| closed_tickets_categories | yes | `list` | A list of category channel IDs where closed tickets should be moved to if threads is not enabled |
| threads_enabled | yes | `boolean` | If tickets should be created in threads instead of channels |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- InternalServerError
- ModuleDisabledError
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
  <summary>GET - `/modules/tickets/panel/{panel_id}`</summary>

Endpoint to get configuration of specified panel for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the panel config for |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError

</details>

<details>
  <summary>DELETE - `/modules/tickets/panel/{panel_id}`</summary>

Endpoint to delete a ticket panel in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the tickets module for |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- InternalServerError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/tickets/panel/{panel_id}`</summary>

Endpoint to change the configuration of a ticket panel for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the tickets module for |
| panel_type | yes | `string` | The type of ticket panel. Can be 'create button', 'ticket type button' or 'dropdown' |
| create_message_is_embed | yes | `boolean` | If the create message for creating a ticket is an Husqy embed config |
| create_message_content | yes | `string` | The content for the create message. Can be Husqy embed config. Can be 'default' to use the default content |
| form_enabled | yes | `boolean` | If a form should be filled in when users create a ticket |
| form_content | yes | `string` | The Husqy modal config for the form to show. Can be 'default' to use default config. Can be None if form enabled is false. |
| ticket_opened_message_is_embed | yes | `string` | If the starting message send to a new ticket is an embed |
| ticket_opened_message_content | yes | `string` | The content for the message to send when a ticket is created. Can be Husqy embed config. Can be 'default' to use the default content |
| ticket_opened_name | yes | `string` | The name to give to new tickets |
| support_engineer_role_id | yes | `integer` | The ID of the role to use for the support engineer. Can be 'create' to create a default support engineer role  |
| open_tickets_categories | yes | `list` | A list of category channel IDs where open tickets should be created if threads is not enabled |
| closed_tickets_categories | yes | `list` | A list of category channel IDs where closed tickets should be moved to if threads is not enabled |
| threads_enabled | yes | `boolean` | If tickets should be created in threads instead of channels |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- InternalServerError
- ModuleDisabledError
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

## Ticket types

Endpoints related to ticket types on a panel

<details>
  <summary>GET - `/modules/tickets/panel/{panel_id}/ticket-types`</summary>

Endpoint to get all ticket types configured for the specified panel in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the entries for |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/tickets/panel/{panel_id}/ticket-types`</summary>

Endpoint to add a ticket type to a panel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the panel is located |
| title | yes | `string` | The title of the ticket type |
| description | yes | `string` | The description to use when the panel type is 'dropdown'. Can be None. Can be filled when panel type is not 'dropdown' but will be ignored until panel type becomes 'dropdown' |
| emoji_name | yes | `string` | The literal emoji, f.e. 😁 or the name of the emoji when it is a custom guild emoji. Can be None. |
| emoji_id | yes | `integer` | The ID of the custom emoji. When using a default emoji, this can be None |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- InternalServerError
- ModuleDisabledError
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
  <summary>GET - `/modules/tickets/panel/{panel_id}/ticket-types/{ticket_type_id}`</summary>

Endpoint to get ticket type configuration for the specified ticket type on the specified panel in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the ticket type is located |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>DELETE - `/modules/tickets/panel/{panel_id}/ticket-types/{ticket_type_id}`</summary>

Endpoint to remove a ticket type from a panel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the ticket type is located |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- InternalServerError
- ModuleDisabledError
- DiscordApiInteractionError

</details>

## Tickets

Endpoints related to tickets

<details>
  <summary>GET - `/modules/tickets/entries`</summary>

Endpoint to get all ticket for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the entries for |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/tickets/entry/{ticket_id}`</summary>

Endpoint to information about the specified ticket for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the entries for |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError

</details>

<details>
  <summary>DELETE - `/modules/tickets/entry/{ticket_id}`</summary>

Endpoint to delete a ticket for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the entries for |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `integer` | The token of the application interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError
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
  <summary>POST - `/modules/tickets/entry/{ticket_id}/close`</summary>

Endpoint to close a ticket for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to close the ticket in |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `integer` | The token of the application interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError
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
  <summary>POST - `/modules/tickets/entry/{ticket_id}/reopen`</summary>

Endpoint to reopen an existing ticket for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to reopen the ticket in |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `integer` | The token of the application interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError
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
  <summary>POST - `/modules/tickets/entry/{ticket_id}/claim`</summary>

Endpoint to claim a ticket for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to claim the ticket in |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `integer` | The token of the application interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError
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
  <summary>POST - `/modules/tickets/entry/{ticket_id}/transfer`</summary>

Endpoint to transfer a ticket for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to transfer the ticket in |
| new_engineer | yes | `integer` | The ID of the new engineer |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `integer` | The token of the application interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError
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
  <summary>POST - `/modules/tickets/entry/{ticket_id}/transcribe`</summary>

Endpoint to transcribe a ticket for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to transfer the ticket in |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `integer` | The token of the application interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError

</details>

## Handling tickets

Endpoints related to handling tickets

<details>
  <summary>POST - `/modules/tickets/events/create-ticket`</summary>

:::danger

Do not use this endpoint yourself! Husqy will create tickets when needed.

:::

Endpoint to make Husqy create a ticket or show the ticket form.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the ticket should be created |
| panel_id | yes | `string` | The ID the panel used to start the ticket creation |
| ticket_type_id | yes | `string` | The ID of the ticket type used |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `integer` | The token of the application interaction. Can be None |
| interaction_id | yes | `integer` | The ID of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
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
  <summary>POST - `/modules/tickets/events/handle-form`</summary>

:::danger

Do not use this endpoint yourself! Husqy will create tickets when needed.

:::

Endpoint to make Husqy create a ticket after the form is used.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the ticket should be created |
| panel_id | yes | `string` | The ID the panel used to start the ticket creation |
| ticket_type_id | yes | `string` | The ID of the ticket type used |
| values | yes | `dict` | The values from the filled in form |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `integer` | The token of the application interaction. Can be None |
| interaction_id | yes | `integer` | The ID of the interaction. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
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
  <summary>GET - `/modules/tickets/entries/messages`</summary>

:::danger

Do not use this endpoint yourself! Husqy will use this endpoint when needed.

:::

Endpoint to get all messages related to a ticket.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the ticket is located |
| ticket_id | yes | `string` | The ID of the ticket to get the messages for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/tickets/entries/messages`</summary>

:::danger

Do not use this endpoint yourself! Husqy will link messages to tickets automatically.

:::

Endpoint to link a message to a ticket.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the ticket is located |
| channel_id | yes | `string` | The ID of the channel where the message is send |
| message_id | yes | `string` | The ID of the message which is send |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>DELETE - `/modules/tickets/entries/messages`</summary>

:::danger

Do not use this endpoint yourself! Husqy will unlink messages to tickets automatically.

:::

Endpoint to unlink a message to a ticket.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the ticket is located |
| channel_id | yes | `string` | The ID of the channel where the message is deleted |
| message_id | yes | `string` | The ID of the message which is deleted |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

## Privacy

Endpoints related to privacy and the tags module

<details>
  <summary>GET - `/modules/tickets/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in tickets to your user.

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
  <summary>DELETE - `/modules/tickets/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in tickets to your user.

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