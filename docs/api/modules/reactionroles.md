---
description: Husqy API reactionroles module
title: Husqy API reactionroles module
sidebar_label: Reactionroles
keywords:
  - docs
  - api
  - module
  - reactionroles
sidebar_position: 5
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Reactionroles.

<details>
  <summary>GET - `/modules/reactionroles/`</summary>

Home endpoint for the Modules Reactionroles Husqy API. Returns only success message displaying that it is the Modules Reactionroles Husqy API route.

</details>

<details>
  <summary>DELETE - `/modules/reactionroles/delete`</summary>

Delete all panels and reactionrole entries for a specified guild.

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
  <summary>GET - `/modules/reactionroles/status`</summary>

Get the status of the reactionroles module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/reactionroles/enable`</summary>

Endpoint to enable the reactionroles module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the reactionroles module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/reactionroles/disable`</summary>

Endpoint to disable the reactionroles module for the specified guild.

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

## Panels

Endpoints related to reactionrole panels

<details>
  <summary>GET - `/modules/reactionroles/panels`</summary>

Returns a list of reactionrole panels for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the reactionrole panels from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of panels to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/reactionroles/panels`</summary>

Endpoint to create a new reactionrole panel in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the reactionrole in |
| is_register | yes | `boolean` | Wether the message to use for the reactionrole panel already exists. Note: when registering an existing message, panel_type can only be "emoji" |
| channel_id | yes | `integer` | The ID of the channel where the message is or will be located |
| limit_roles_to_one | yes | `boolean` | Wether the roles a member can claim via the panel is only based on one entry (entries with multiple roles will give all roles for that entry) |
| supports_remove | yes | `boolean` | Wether the panel supports removal of entries from users when reacting/removing reactions |
| remove_roles_from_users_on_entry_delete | yes | `boolean` | Wether the roles for an entry should be removed from a user when the entry gets deleted |
| panel_type | yes | `string` | The type of the panel. Can be: "emoji", "button" or "dropdown" |
| keep_counter_at_one | yes (when panel_type is "emoji") | `boolean` | Wether the emoji counter should be kept at one |
| delete_unrelated_emoji_reactions | yes (when panel_type is "emoji") | `boolean` | Wether other emojis not registered to the panel should be removed |
| register_message_id | yes (when is_register is True) | `integer` | The ID of the existing message to use as the panel |
| is_embed | yes (when is_register is False) | `boolean` | Wether the message content is an embed json config |
| content | yes (when is_register is False) | `string` | The content to use for the message. Can also be embed json config if is_embed is True |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DiscordApiInteractionError
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
  <summary>GET - `/modules/reactionroles/panel/{reactionrole_panel_id}`</summary>

Returns a details of the specified reactionrole panel in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the specified reactionrole panel details from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/reactionroles/panel/{reactionrole_panel_id}`</summary>

Deletes the specified reactionrole panel and all related reactionrole entries from the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the specified reactionrole panel to delete is located |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>PUT - `/modules/reactionroles/panel/{reactionrole_panel_id}`</summary>

Edit the settings of the specified reactionrole panel in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the specified reactionrole panel to delete is located |
| panel_type | yes | `string` | The new type of the reactionrole panel. Can be: "emoji", "button" or "dropdown" |
| limit_roles_to_one | yes | `boolean` | The new setting for limit roles to one |
| supports_remove | yes | `boolean` | The new setting for supports remove |
| remove_roles_from_users_on_entry_delete | yes | `boolean` | The new setting for remove roles from users on entry delete |
| keep_counter_at_one | yes (when panel_type is "emoji") | `boolean` | The new setting for keep counter at one |
| delete_unrelated_emoji_reactions | yes (when panel_type is "emoji") | `boolean` | The new setting for delete unrelated emoji reactions |
| message_content | yes | `string` | The new message content. Required but can be None if the message is not an Husqy created message |
| message_is_embed | yes | `boolean` | If the new message content is an embed json config. Required but will not have any effect if the message is not an Husqy created message |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError
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

## Reactionrole entries

Endpoints to check reactionrole entries for a panel.

<details>
  <summary>GET - `/modules/reactionroles/panel/{reactionrole_panel_id}/entries`</summary>

Returns a list of reactionrole entries added to the reactionrole panel in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the panel is located |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/reactionroles/panel/{reactionrole_panel_id}/entries`</summary>

Endpoint to create a new reactionrole entry for a panel in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the reactionrole in |
| role_ids | yes | `list` | A list of role ID's to give to the users when reacting |
| emoji_name | yes | `string` | The literal emoji, f.e. 😁 or the name of the emoji when it is a custom guild emoji |
| emoji_id | yes | `integer` | The ID of the custom emoji. When using a default emoji, this can be None |
| text | yes | `string` | The label text of the button or dropdown item. Can be None when the panel is an emoji panel or button panel. Required for a dropdown panel |
| description | yes | `string` | The description text of the dropdown item. Can be None. |

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
  <summary>GET - `/modules/reactionroles/panel/{reactionrole_panel_id}/entries/{reactionrole_entry_id}`</summary>

Returns the details of a reactionrole entry added to the reactionrole panel in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the panel is located |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/reactionroles/panel/{reactionrole_panel_id}/entries/{reactionrole_entry_id}`</summary>

Endpoint to delete the reactionrole entry from the panel in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the reactionrole in |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

<details>
  <summary>PUT - `/modules/reactionroles/panel/{reactionrole_panel_id}/entries/{reactionrole_entry_id}`</summary>

Endpoint to edit the reactionrole entry for the panel in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the reactionrole in |
| role_ids | yes | `list` | The new list of role ID's to link to the reactionrole entry |
| text | yes | `string` | The new label for the button or dropdown. Can be None when panel type is emoji or button. Required for panel type dropdown |
| description | yes | `string` | The new description to show in the dropdown for this entry. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

## Checking entries

Endpoints to check entries for adding or deleting

<details>
  <summary>POST - `/modules/reactionroles/check`</summary>

:::danger

Do not use this endpoint yourself! Roles will be added by Husqy when needed.

:::

Endpoint to handle the interaction with a reactionrole panel (entry).

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the interaction takes place |
| message_id | yes | `integer` | The ID of the message that is interacted with |
| message_id | yes | `integer` | The ID of the message to which is reacted |
| channel_id | yes | `integer` | The ID of the channel where the interacted with message is located |
| interaction_type | yes | `string` | The type of interaction. Can be: "component", "reaction_add" or "reaction_delete" |
| interaction_custom_id | yes (when interaction_type is "component") | `string` | The custom ID linked to the button or dropdown |
| interaction_id_token | yes (when interaction_type is "component") | `string` | The token of the interaction |
| application_id | yes (when interaction_type is "component") | `string` | The ID of the application |
| interaction_value | yes (when interaction_type is "component") | `string` | The value behind the dropdown item. Can be None for buttons |
| emoji_name | yes (when interaction_type is NOT "component") | `string` | The literal emoji f.e. 😁 that is being reacted with or the name of the custom emoji |
| emoji_id | yes (when interaction_type is NOT "component") | `string` | The ID of the custom emoji. Can be None for a normal emoji. |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- NotFoundError (Custom)

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

- Unprocessable Entity

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Unprocessable Entity! {reason}",
    },
},
```

</details>

<details>
  <summary>POST - `/modules/reactionroles/panel/check-delete`</summary>

:::danger

Do not use this endpoint yourself! Panels will automatically be delete by Husqy when the channel or message that is the panel get deleted.

:::

Endpoint to check if a deleted message is or a deleted channel has a reactionrole panel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the specified reactionrole entry to delete is located |
| channel_id | yes | `integer` | The ID of the channel which is deleted or where the deleted message is located |
| message_id | yes | `integer` | The ID of the message which is deleted. Can be None when a channel gets deleted |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

## Privacy

Endpoints related to privacy and the tags module

<details>
  <summary>GET - `/modules/reactionroles/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in reactionroles to your user.

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
  <summary>DELETE - `/modules/reactionroles/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in reactionroles to your user.

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