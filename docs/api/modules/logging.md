---
description: Husqy API logging module
title: Husqy API logging module
sidebar_label: Logging
keywords:
  - docs
  - api
  - module
  - logging
sidebar_position: 1
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Logging.

<details>
  <summary>GET - `/modules/logging/`</summary>

Home endpoint for the Modules Logging Husqy API. Returns only success message displaying that it is the Modules Logging Husqy API route.

</details>

<details>
  <summary>GET - `/modules/logging/settings`</summary>

Return the settings for the logging module of a specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the settings from |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>PUT - `/modules/logging/settings`</summary>

Edit the settings for the logging module of a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the settings from |
| events | yes | `dict` | A dictionary of the settings to change with their new value |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>DELETE - `/modules/logging/settings/delete`</summary>

Delete all settings of the logging module for a specified guild.

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
  <summary>GET - `/modules/logging/status`</summary>

Get the status of the logging module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/logging/enable`</summary>

Endpoint to enable the logging module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the logging module for |
| logs_channel_id | yes | `integer` | The ID of the channel to use as the logs channel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/logging/disable`</summary>

Endpoint to disable the logging module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the logging module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Log

Endpoints related to sending the log message

<details>
  <summary>POST - `/modules/logging/event/check`</summary>

:::danger

Do not use this endpoint yourself! Log messages will be send by Husqy automatically.

:::

Endpoint to check the event for sending a log message to the guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the event has taken place |
| event_info | yes | `dict` | The info of the event to sent the log message for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>