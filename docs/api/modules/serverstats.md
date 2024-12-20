---
description: Husqy API serverstats module
title: Husqy API serverstats module
sidebar_label: Serverstats
keywords:
  - docs
  - api
  - module
  - serverstats
sidebar_position: 8
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Serverstats.

<details>
  <summary>GET - `/modules/serverstats/`</summary>

Home endpoint for the Modules Serverstats Husqy API. Returns only success message displaying that it is the Modules Serverstats Husqy API route.

</details>

<details>
  <summary>GET - `/modules/serverstats/settings`</summary>

Get the settings of the serverstats module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>PUT - `/modules/serverstats/settings`</summary>

Endpoint to change the settings of the serverstats module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the serverstats module settings for |
| counter_panel_enabled | yes | `boolean` | If the counter panel should be enabled |
| counter_panel_category_channel | yes | `integer` | The ID of the category channel to use for the counter panel |
| counter_panel_member_count_channel | yes | `integer` | (May be None) The ID of the channel to use for the display of current guild member count |
| counter_panel_online_member_count_channel | yes | `integer` | (May be None) The ID of the channel to use for the display of current online guild member count |
| counter_panel_custom_panels_create | yes | `list` | (May be []) A list of objects consisting of a channel_name key and role_id key to add as custom panels for online members with role |
| counter_panel_custom_panels_delete | yes | `list` | (May be []) A list of channel ID's which are a custom panels for online members with role to remove |
| counter_panel_server_boost_number_channel | yes | `integer` | (May be None) The ID of the channel to use for the display of current guild boosts |
| starboard_enabled | yes | `boolean` | If the starboard should be enabled |
| starboard_channel | yes | `integer` | (May be None) The ID of the channel to use as the channel where starred messages are highlighted |
| starboard_count | yes | `integer` | (May be None if starboard_enabled is false) The amount of stars a message should have before going on the starboard |
| stats_command_usage | yes | `boolean` | If command statistics should be enabled |
| stats_message_statistics | yes | `boolean` | If message statistics should be enabled |
| stats_track_bot_messages | yes | `boolean` | If bot messages should be tracked as part of the message statistics |
| stats_functions_reminders_statistics_enabled | yes | `boolean` | If reminders statistics should be enabled |
| stats_functions_giveaways_statistics_enabled | yes | `boolean` | If giveaways statistics should be enabled |
| stats_modules_tempchannels_statistics_enabled | yes | `boolean` | If tempchannels statistics should be enabled |
| stats_modules_autoresponder_statistics_enabled | yes | `boolean` | If autoresponder statistics should be enabled |
| stats_modules_reactionroles_statistics_enabled | yes | `boolean` | If reactionroles statistics should be enabled |
| stats_modules_tags_statistics_enabled | yes | `boolean` | If command tags should be enabled |

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/serverstats/settings/delete`</summary>

Delete all settings of the serverstats module for a specified guild.

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
  <summary>GET - `/modules/serverstats/status`</summary>

Get the status of the serverstats module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/serverstats/enable`</summary>

Endpoint to enable the serverstats module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the serverstats module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/serverstats/disable`</summary>

Endpoint to disable the serverstats module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the serverstats module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError
- InternalServerError

</details>

## Starboard

Endpoints related to starboards

<details>
  <summary>POST - `/modules/serverstats/starboard/add`</summary>

:::danger

Do not use this endpoint yourself! Starboard messages will be created by Husqy when needed.

:::

Endpoint to check a message for sending to the starboard channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the possible starboard message is located |
| channel_id | yes | `integer` | The ID of the channel where the interacted message is located |
| message_id | yes | `integer` | The ID of the message which is the interacted message |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/starboard/remove`</summary>

:::danger

Do not use this endpoint yourself! Starboard messages will be removed by Husqy when needed.

:::

Endpoint to check a message for sending to the starboard channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the possible starboard message is located |
| channel_id | yes | `integer` | The ID of the channel where the interacted message is located |
| message_id | yes | `integer` | The ID of the message which is the interacted message |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

## Statistics

Endpoints related to statistics

:::note

Statistics view endpoints will return a list of objects containing all information you need about the statistics.

:::

<details>
  <summary>POST - `/modules/serverstats/stats/counter-panel/check-deleted-channel`</summary>

:::danger

Do not use this endpoint yourself! Husqy will update the configuration when a channel that is a counter panel channel is deleted.

:::

Endpoint to check if a channel is a counter panel channel and update the configuration.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the removed channel is located |
| channel_id | yes | `integer` | The ID of the channel that is removed |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>POST - `/modules/serverstats/stats/counter-panel/update`</summary>

:::danger

Do not use this endpoint yourself! Husqy will update counter panel channels on a regular interval.

:::

Endpoint to check if a channel is a counter panel channel and update the configuration.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |

Possible errors:

- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

### Commands

<details>
  <summary>POST - `/modules/serverstats/stats/command/check`</summary>

Endpoint to check if a command usage has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the command has been executed |
| command | yes | `string` | The command that is executed |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/command/view`</summary>

Get the statistics of the command usage.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

### Messages

<details>
  <summary>POST - `/modules/serverstats/stats/message/check`</summary>

Endpoint to check if a message has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the message has been send |
| member_is_bot | yes | `boolean` | If the member is a bot |
| channel_id | yes | `integer` | The ID of the channel where the message is sent |
| message_id | yes | `integer` | The ID of the message that is sent |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/message/view`</summary>

Get the statistics of the messages.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |
| channel_id | no | `integer` | The ID of the channel to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

### Functions

#### Reminders

<details>
  <summary>POST - `/modules/serverstats/stats/functions/reminders/created`</summary>

Endpoint to check if a created reminder has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the reminder has been created |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/functions/reminders/created/view`</summary>

Get the statistics of the created reminders.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/stats/functions/reminders/deleted`</summary>

Endpoint to check if a deleted reminder has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the reminder has been deleted |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/functions/reminders/deleted/view`</summary>

Get the statistics of the deleted reminders.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

#### Giveaways

<details>
  <summary>POST - `/modules/serverstats/stats/functions/giveaways/responders`</summary>

Endpoint to check if a giveaway response has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway that has been responded to is located |
| old_giveaway_id | yes | `string` | The ID of the giveaway that has been responded to |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/functions/giveaways/responders/view`</summary>

Get the statistics of the responders to giveaways.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/stats/functions/giveaways/created`</summary>

Endpoint to check if a created giveaway has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway has been created |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/functions/giveaways/created/view`</summary>

Get the statistics of the created giveaway.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/stats/functions/giveaways/deleted`</summary>

Endpoint to check if a deleted giveaway has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the giveaway has been deleted |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/functions/giveaways/deleted/view`</summary>

Get the statistics of the deleted giveaway.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

### Modules

#### Tempchannels

<details>
  <summary>POST - `/modules/serverstats/stats/modules/tempchannels/created`</summary>

Endpoint to check if a created tempchannel has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the tempchannel has been created |
| initial_creator_id | yes | `integer` | The ID of the member creating the tempchannel |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tempchannels/created/view`</summary>

Get the statistics of the created tempchannels.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/stats/modules/tempchannels/creation-time`</summary>

Endpoint to check if a creation time of a tempchannel has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the tempchannel has been created |
| initial_creator_id | yes | `integer` | The ID of the member creating the tempchannel |
| creation_time_delay | yes | `integer` | The amount of time it took for the tempchannel to be created |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tempchannels/creation-time/view`</summary>

Get the statistics of the creation time of tempchannels.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/serverstats/stats/modules/tempchannels/deletion-time`</summary>

Endpoint to check if a deletion time of a tempchannel has to be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the tempchannel has been deleted |
| initial_creator_id | yes | `integer` | The ID of the member who is the initial creator of the tempchannel |
| deletion_time_delay | yes | `integer` | The amount of time it took for the tempchannel to be deleted |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tempchannels/deletion-time/view`</summary>

Get the statistics of the deletion time of tempchannels.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |
| user_id | no | `integer` | The ID of the user to filter the statistics for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

#### Reactionroles

<details>
  <summary>POST - `/modules/serverstats/stats/modules/reactionroles/check-time`</summary>

Endpoint to check if a reactionrole check time should be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the tempchannel has been deleted |
| check_time_delay | yes | `integer` | The time it took for the reactionrole to be checked |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/modules/reactionroles/check-time/view`</summary>

Get the statistics of the check time of reactionroles.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

#### Tags

<details>
  <summary>POST - `/modules/serverstats/stats/modules/tags/send-time`</summary>

Endpoint to check if a tag send time should be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the tempchannel has been deleted |
| send_time_delay | yes | `integer` | The time it took for the tag to be sent |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/modules/tags/send-time/view`</summary>

Get the statistics of the send time of tags.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

#### Autoresponder

<details>
  <summary>POST - `/modules/serverstats/stats/modules/autoresponder/response-time`</summary>

Endpoint to check if a autoresponder response time should be added to the statistics.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the tempchannel has been deleted |
| response_time_delay | yes | `integer` | The time it took for the autoresponder response to be checked |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>GET - `/modules/serverstats/stats/modules/autoresponder/response-time/view`</summary>

Get the statistics of the autoresponde response time.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |
| days | no | `integer` | The amount of days to return back (maximum is 30) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>