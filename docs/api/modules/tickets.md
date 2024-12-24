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
  <summary>GET - `/modules/tickets/settings`</summary>

Get the settings of the tickets module for the specified guild.

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
  <summary>PUT - `/modules/tickets/settings`</summary>

Endpoint to change the settings of the reactionroles module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the reactionroles module settings for |
| ticket_support_role | yes | `integer OR string` | The ID of the role to use as the ticket support role (may be "create" if you want Husqy to create a support role) |
| thread_mode | yes | `boolean` | If new tickets should be created as a thread |
| ticket_post_channel | yes | `integer` | (May be None if thread_mode is True) The ID of the channel where to post new tickets (may be "create" if you want Husqy to create a ticket post channel) |
| custom_creation_content | yes | `string` | The content for the custom creation message (may be "default" if you want to use the default message) |
| custom_creation_embed | yes | `boolean` | If the custom creation content is an embed or message (set to True if you use "default" for the custom_creation_content) |
| custom_creation_modal | yes | `string` | The content for the custom creation modal (may be "default" if you want to use the default modal) |
| used_default_ticket_types_create | yes | `list` | A list of default ticket types to add as options |
| used_default_ticket_types_delete | yes | `list` | A list of default ticket types to remove as options |
| used_custom_ticket_types_create | yes | `list` | A list of custom ticket types to add as options |
| used_custom_ticket_types_delete | yes | `list` | A list of custom ticket types to remove as options |

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/tickets/settings/delete`</summary>

Delete all settings of the tickets module for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the settings from |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>GET - `/modules/tickets/available-ticket-types`</summary>

Get the currently supported default ticket types in the language of the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the default ticket types for |

Possible errors:

- BadRequestError
- SettingsError

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
| ticket_support_role | yes | `integer OR string` | The ID of the role to use as the ticket support role (may be "create" if you want Husqy to create a support role) |
| thread_mode | yes | `boolean` | If new tickets should be created as a thread |
ticket_creation_category | yes | `integer OR string` | The ID of the category channel to use as the place where users can create tickets (may be "create" if you want Husqy to create a ticket category channel) |
ticket_creation_channel | yes | `integer OR string` | The ID of the channel to use as the place where users can create tickets (may be "create" if you want Husqy to create a ticket creation channel) |
| ticket_post_channel | yes | `integer OR string` | (May be None if thread_mode is True) The ID of the channel where to post new tickets (may be "create" if you want Husqy to create a ticket post channel) |
| setup_mode | yes | `string` | The setup mode you want to use. Can be "Minimal", "Complete" or "Custom" |
| custom_creation_content | yes | `string` | (May be None if setup_mode is "Minimal") The content for the custom creation message (may be "default" if you want to use the default message) |
| custom_creation_embed | yes | `boolean` | (May be None if setup_mode is "Minimal") If the custom creation content is an embed or message (set to True if you use "default" for the custom_creation_content) |
| custom_creation_modal | yes | `string` | (May be None if setup_mode is "Minimal") The content for the custom creation modal (may be "default" if you want to use the default modal) |
| used_default_ticket_types | yes | `list` | (May be [] if setup_mode is "Minimal") A list of default ticket types to add as options |
| used_custom_ticket_types | yes | `list` | (May be [] if setup_mode is "Minimal") A list of default ticket types to add as options |

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
| guild_id | yes | `integer` | The ID of the guild to disable the reactionroles module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Handling tickets

Endpoints related to handling tickets

<details>
  <summary>POST - `/modules/tickets/ticket/show-form`</summary>

:::danger

Do not use this endpoint yourself! Forms will be showed by Husqy in Discord when needed.

:::

Endpoint to make Husqy show the ticket form.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| message_id | yes | `integer` | The ID of the message that is reacted to, in other words the ticket message |
| modal_interaction | yes | `integer` | The ID of the interaction |
| modal_interaction_token | yes | `integer` | The token of the interaction |
| ticket_type | yes | `string` | The type of the ticket |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/tickets/ticket/handle-form`</summary>

:::danger

Do not use this endpoint yourself! Forms will be handled by Husqy when needed.

:::

Endpoint to make Husqy handle the ticket form.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| message_id | yes | `integer` | The ID of the message that is reacted to, in other words the ticket message |
| interaction_custom_id | yes | `integer` | The ID of modal that is reacted to |
| modal_interaction | yes | `integer` | The ID of the interaction |
| modal_interaction_token | yes | `integer` | The token of the interaction |
| first_interaction_value | yes | `integer` | The values of the forms that is reacted to |
| second_interaction_value | yes | `integer` | The values of the forms that is reacted to |
| third_interaction_value | yes | `integer` | The values of the forms that is reacted to |
| fourth_interaction_value | yes | `integer` | The values of the forms that is reacted to |
| fifth_interaction_value | yes | `integer` | The values of the forms that is reacted to |

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