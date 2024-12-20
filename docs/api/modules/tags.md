---
description: Husqy API tags module
title: Husqy API tags module
sidebar_label: Tags
keywords:
  - docs
  - api
  - module
  - tags
sidebar_position: 9
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Tags.

<details>
  <summary>GET - `/modules/tags/`</summary>

Home endpoint for the Modules Tags Husqy API. Returns only success message displaying that it is the Modules Tags Husqy API route.

</details>

<details>
  <summary>DELETE - `/modules/tags/settings/delete`</summary>

Delete all settings of the tags module for a specified guild.

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
  <summary>GET - `/modules/tags/status`</summary>

Get the status of the tags module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/tags/enable`</summary>

Endpoint to enable the tags module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the tags module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/tags/disable`</summary>

Endpoint to disable the tags module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the tags module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Entries

Endpoints related to tags entries

<details>
  <summary>GET - `/modules/tags/entries`</summary>

Returns a list of tag entries in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the tag entries from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/tags/entries`</summary>

Endpoint to create a new tag entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the tag in |
| name | yes | `string` | The name of the tag |
| content | yes | `string` | The content of the tag |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>GET - `/modules/tags/entry/{tag_id}`</summary>

Returns the details of tag entry in the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the tag entry details from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/tags/entry/{tag_id}`</summary>

Endpoint to delete a tag entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the tag in |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>PUT - `/modules/tags/entry/{tag_id}`</summary>

Endpoint to update a tag entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the tag in |
| content | yes | `string` | The new content of the tag |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/tags/entry/send`</summary>

:::danger

Do not use this endpoint yourself! Husqy will send tag content automatically when the command is executed.

:::

Endpoint to post the tag to a channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the tag in |
| channel_id | yes | `integer` | The ID of the channel where the `/tags send` command is executed |
| tag_name | yes | `string` | The name of the tag to send |
| application_id | yes | `integer` | The ID of the application interaction |
| token | yes | `integer` | The token of the interaction |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>