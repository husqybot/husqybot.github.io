---
description: Husqy API General endpoints
title: Husqy API General
sidebar_label: General
keywords:
  - docs
  - api
  - general
sidebar_position: 4
toc_max_heading_level: 6
---

## General

Endpoints related to general, uncategorized, functionality.

<details>
  <summary>GET - `/`</summary>

Home endpoint for the General Husqy API. Returns only success message displaying that it is the home route.

</details>

<details>
  <summary>GET - `/settings`</summary>

This endpoints returns the settings of the guild which is requested in the query string parameters of the request.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to fetch information for |

Possible errors:

- BadRequestError
- SettingsError
- InternalServerError

</details>

<details>
  <summary>PUT - `/settings`</summary>

This endpoint provides the ability to change the settings of the guild specified in the body data.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to fetch information for |
| language | yes | `string` | The new language for the guild |
| timezone | yes | `string` | The new timezone for the guild |
| auto_delete | yes | `integer` | The new auto delete for the guild |
| unit_system | yes | `string` | The new unit system for the guild |
| giveaway_save_timeout | yes | `integer` | The new giveaway save timeout for the guild |
| invite_link | yes | `string` | (May be None) The new invite link for the guild |
| max_warns | yes | `integer` | The new max warns for the guild |
| auto_kick_enabled | yes | `boolean` | The new auto kick enabled value for the guild |
| auto_kick_role_id | yes | `integer` | (May be None) The new ID for the auto kick role for the guild |

Possible errors:

- BadRequestError
- InternalServerError
- DatabaseError

</details>

## Helpers

Endpoints related to helper functionality.

<details>
  <summary>GET - `/helpers/get-husqy-for-guild`</summary>

This endpoint returns a list of guilds, depending on the guilds you give in the query parameters, confirming weather or not Husqy is in that guild or not.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_ids | yes | `list` | A comma seperated list of guild IDs to check (f.e. guild_id1,guild_id2,guild_id3) |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>GET - `/helpers/get-variable-replaced-content`</summary>

This endpoint returns a the text where the Husqy variables are replaced with the desired values.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| content | yes | `string` | The content to replace |
| language | yes | `string` | The language to use when replacing the Husqy variables, preferrably the language set in the target guild |
| timezone | yes | `string` | The timezone to use when replacing the Husqy variables, preferrably the timezone set in the target guild |
| guild_id | no | `integer` | The ID of the guild to use for Husqy variables related to guilds |
| user_id | no | `integer` | The ID of the user to use for Husqy variables related to users |
| channel_id | no | `integer` | The ID of the channel to use for Husqy variables related to channels |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>GET - `/helpers/get-supported-languages`</summary>

Endpoint to return the current supported languages by Husqy.

This endpoint will not return any errors.

</details>

<details>
  <summary>GET - `/helpers/get-supported-unit-systems`</summary>

Endpoint to return the current supported unit systems by Husqy.

This endpoint will not return any errors.

</details>

<details>
  <summary>GET - `/helpers/get-supported-timezones`</summary>

Endpoint to return the current supported timezones by Husqy.

This endpoint will not return any errors.

</details>

<details>
  <summary>GET - `/helpers/get-guild-info`</summary>

:::warning

This endpoint will not return any Husqy settings for a guild, use the GET - `/settings` endpoint for that!

:::

Returns the name (and ID) of the guild inserted in the query string parameters.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get information from |

Possible errors:

- BadRequestError
- InternalServerError
- DiscordApiInteractionError

</details>

<details>
  <summary>GET - `/helpers/get-guild-roles`</summary>

Endpoint to get a list of names and ID's of the roles available in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get roles from |

Possible errors:

- BadRequestError
- InternalServerError

</details>

<details>
  <summary>GET - `/helpers/get-guild-channels`</summary>

Endpoint to get a list of names, ID's and types of the channels available in the specified guild. There is an option to filter channels based on specified types.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get roles from |
| types | no | `list` | A comma separeted list of channel types to filter. Possible types are: text, voice, news, stage, category, forum |

Possible errors:

- BadRequestError
- InternalServerError

</details>

<details>
  <summary>GET - `/helpers/get-guild-users`</summary>

Endpoint to get a list of names and ID's of the members that are in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get members from |

Possible errors:

- BadRequestError
- InternalServerError

</details>

<details>
  <summary>GET - `/helpers/get-guild-emojis`</summary>

Endpoint to get a list of custom emojis that are available to use in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the custom emojis from |

Possible errors:

- BadRequestError
- InternalServerError

</details>

## Privacy

Endpoints related to privacy settings.

<details>
  <summary>GET - `/privacy/user-data-collection-overview`</summary>

Endpoint to get the user data collection settings overview for the members in a guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the members user data collection settings overview from |

Possible errors:

- BadRequestError
- InternalServerError

</details>

## Authentication

Endpoints related to authentication.

<details>
  <summary>POST - `/auth/authorize`</summary>

Endpoint to validate the access token used in a request.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| access_token | yes | `integer` | The access token or API key to validate |

Possible errors:

- BadRequestError
- UnauthorizedError

</details>

<details>
  <summary>POST - `/auth/validate-user-permissions`</summary>

Endpoint to validate if the user making a request to the Husqy API is authorized to do so.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the user for |

Possible errors:

- BadRequestError
- InternalServerError

</details>

## Privacy

Endpoints related to privacy and other parts of Husqy

<details>
  <summary>GET - `/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references to your user in other parts of Husqy.

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
  <summary>DELETE - `/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references to your user in other parts of Husqy.

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