---
description: Husqy API Giveaways
title: Husqy API Giveaways
sidebar_label: Giveaways
keywords:
  - docs
  - api
  - functions
  - giveaways
sidebar_position: 2
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Functions Giveaway functionality.

<details>
  <summary>GET - `/functions/giveaways/`</summary>

Home endpoint for the Giveaway Husqy API. Returns only success message displaying that it is the Function Giveaways Husqy API route.

</details>

## Entries

Endpoints related to entry functionality.

<details>
  <summary>DELETE - `/functions/giveaways/delete`</summary>

Deletes all known giveaways for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to remove the giveaways from |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>GET - `/functions/giveaways/entries`</summary>

Returns a list of giveaway entries for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the giveaway entries from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- DatabaseError
- InternalServerError

</details>

<details>
  <summary>POST - `/functions/giveaways/entries`</summary>

Endpoint to create a new giveaway entry in a guild for a member.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the giveaway in |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/giveaway create` command is send |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/giveaway create` command |
| giveaway_owner_id | yes | `integer` | The ID of the owner of the giveaway |
| giveaway_channel_id | yes | `integer` | The ID of the channel where the giveaway will take place |
| delay | yes | `string` | The delay before the giveaway is ended and a winner is picked |
| prize | yes | `string` | The price of the giveaway |
| description | yes | `string` | (May be None) The description of the giveaway |
| winner_count | yes | `integer` | The amount of winner for the giveaway |

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
  <summary>GET - `/functions/giveaways/entry/{giveaway_id}`</summary>

Returns the details of the specified giveaway in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the specified giveaway entry details from |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/functions/giveaways/entry/{giveaway_id}`</summary>

Deletes the specified giveaway from the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the specified giveaways entry from |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/giveaway delete` command is send |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/giveaway delete` command |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError

</details>

<details>
  <summary>PATCH - `/functions/giveaways/entry/{giveaway_id}`</summary>

Deletes the specified giveaway in the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway to reroll is located |
| channel_id | yes | `integer` | (May be None) The ID of the channel where the `/giveaway reroll` command is send |
| message_id | yes | `integer` | (May be None) The ID of the message created by the `/giveaway reroll` command |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError

</details>

<details>
  <summary>POST - `/functions/giveaways/entry/enter-giveaway`</summary>

:::danger

Do not use this endpoint yourself! Please react to the giveaway in the Discord channel to enter a giveaway.

:::

Endpoint to register the entering of a giveaway.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| channel_id | yes | `integer` | The ID of the channel where the giveaway is located |
| message_id | yes | `integer` | The ID of the message of the giveaway |

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
  <summary>POST - `/functions/giveaways/entry/leave-giveaway`</summary>

:::danger

Do not use this endpoint yourself! Please remove your reation from the giveaway in the Discord channel to leave a giveaway.

:::

Endpoint to register the leaving of a giveaway.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| message_id | yes | `integer` | The ID of the message of the giveaway |

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
  <summary>GET - `/functions/giveaways/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in giveaways to your user.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the specified giveaway entry details from |
| privacy_member_id | yes | `integer` | The ID of the member who wants to check their references |

Possible errors:

- BadRequestError
- ForbiddenError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/functions/giveaways/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to remove the references in giveaways to your user.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the references are located |
| privacy_member_id | yes | `integer` | The ID of the member who wants to remove their references |

Possible errors:

- BadRequestError
- ForbiddenError
- InternalServerError

</details>

## Giveaway handler

Endpoints related to entry handling functionality.

<details>
  <summary>POST - `/functions/giveaways/handler/create`</summary>

:::danger

Do not use this endpoint yourself! Please use the POST - `/functions/giveaways/entries` to create a new giveaway.

:::

Endpoint to add the giveaway to the giveaways entries service.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `integer` | The ID of the giveaway |
| channel_id | yes | `integer` | The ID of channel where the giveaway is located |
| message_id | yes | `integer` | The ID of the message of the giveaway |
| end_time | yes | `integer` | The time when the giveaway will end |
| delete_at | yes | `integer` | The time when the giveaway will be permanently deleted from the database |
| winner | yes | `integer` | (May be None) The winners of the giveaway |
| prize | yes | `integer` | The prize of the giveaway |
| description | yes | `integer` | (May be None) The description of the giveaway |
| winner_count | yes | `integer` | The amount of winners to choose when the giveaway has ended |
| participants | yes | `integer` | (May be None) The current participants of the giveaway. This is a comma seperated list of user ID's |
| owner_id | yes | `integer` | The ID of the owner of the giveaway |
| language | yes | `integer` | The language of the guild where the giveaway is located |
| auto_delete | yes | `integer` | The auto delete of the guild where the giveaway is located |
| winner_message_id | yes | `integer` | The ID of the message where the winners have been announced |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>DELETE - `/functions/giveaways/handler/delete`</summary>

:::danger

Do not use this endpoint yourself! Please use the DELETE - `/functions/giveaways/entry/{giveaway_id}` to delete giveaway.

:::

Endpoint to delete the giveaway from the giveaways entries service.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `integer` | The ID of the giveaway to delete |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>PATCH - `/functions/giveaways/handler/reroll`</summary>

:::danger

Do not use this endpoint yourself! Please use the PATCH - `/functions/giveaways/entry/{giveaway_id}` to reroll a giveaway.

:::

Endpoint to reroll the giveaway in the giveaways entries service.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `integer` | The ID of the giveaway to reroll |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>PUT - `/functions/giveaways/handler/enter-giveaway`</summary>

:::danger

Do not use this endpoint yourself! Please use the POST - `/functions/giveaways/entry/enter-giveaway` to enter a giveaway.

:::

Endpoint to enter the giveaway in the giveaways entries service.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `integer` | The ID of the giveaway to enter |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>PUT - `/functions/giveaways/handler/leave-giveaway`</summary>

:::danger

Do not use this endpoint yourself! Please use the POST - `/functions/giveaways/entry/leave-giveaway` to leave a giveaway.

:::

Endpoint to leave the giveaway in the giveaways entries service.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `integer` | The ID of the giveaway to leave |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>PUT - `/functions/giveaways/handler/edit`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy to edit giveaways.

:::

Endpoint to leave the giveaway in the giveaways entries service.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway is located |
| giveaway_id | yes | `integer` | The ID of the giveaway to edit |
| new_prize | no | `string` | The new prize |
| new_description | no | `string` | The new description |
| new_winners | no | `string` | The new winners |

Possible errors:

- BadRequestError

</details>