---
description: Husqy API socials module
title: Husqy API socials module
sidebar_label: Socials
keywords:
  - docs
  - api
  - module
  - socials
sidebar_position: 4
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Socials.

<details>
  <summary>GET - `/modules/socials/`</summary>

Home endpoint for the Modules Socials Husqy API. Returns only success message displaying that it is the Modules Socials Husqy API route.

</details>

<details>
  <summary>GET - `/modules/socials/settings`</summary>

Get the settings of the socials module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError

</details>

<details>
  <summary>PUT - `/modules/socials/settings`</summary>
  
Endpoint to change the settings of the reactionroles module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the socials module settings for |
| monitor_reddit | yes | `boolean` | If the reddit monitor component should be enabled |
| monitor_rss | yes | `boolean` | If the rss monitor component should be enabled |
| monitor_twitch | yes | `boolean` | If the twitch monitor component should be enabled |
| monitor_youtube | yes | `boolean` | If the youtube monitor component should be enabled |

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
- DatabaseError

</details>

<details>
  <summary>DELETE - `/modules/socials/settings/delete`</summary>
  
Delete all settings of the socials module for a specified guild.

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
  <summary>GET - `/modules/socials/status`</summary>
  
Get the status of the socials module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/socials/enable`</summary>
  
Endpoint to enable the socials module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the socials module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/socials/disable`</summary>
  
Endpoint to disable the socials module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the socials module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Entries

Endpoints related to socials entries to monitor

### Reddit

<details>
  <summary>GET - `/modules/socials/entries/reddit`</summary>
  
Returns a list of monitored subreddits for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the subreddits from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/socials/entries/reddit`</summary>
  
Endpoint to create a new subreddit entry in a guild to monitor.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the subreddit monitor entry in |
| subreddit | yes | `string` | The name of the subreddit to monitor |
| target_channel_id | yes | `integer` | The ID of the channel where to post updates for this entry |
| mention_everyone | yes | `boolean` | If @everyone needs to be mentioned so everyone gets a notification |

Possible errors:

- BadRequestError
- SettingsError
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

<details>
  <summary>DELETE - `/modules/socials/entries/reddit`</summary>
  
Endpoint to delete a subreddit entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the subreddit from |
| subreddit | yes | `string` | The name of the subreddit to stop monitoring |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

### Twitch

<details>
  <summary>GET - `/modules/socials/entries/twitch`</summary>
  
Returns a list of monitored twitch accounts for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the twitch accounts from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/socials/entries/twitch`</summary>
  
Endpoint to create a new twitch account entry in a guild to monitor.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the twitch account entry in |
| twitch_account | yes | `string` | The name of the twitch account to monitor |
| target_channel_id | yes | `integer` | The ID of the channel where to post updates for this entry |
| mention_everyone | yes | `boolean` | If @everyone needs to be mentioned so everyone gets a notification |

Possible errors:

- BadRequestError
- SettingsError
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

<details>
  <summary>DELETE - `/modules/socials/entries/twitch`</summary>

Endpoint to delete a twitch account entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the twitch account entry from |
| twitch_account | yes | `string` | The name of the twitch account to stop monitoring |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

### RSS

<details>
  <summary>GET - `/modules/socials/entries/rss`</summary>
  
Returns a list of monitored rss feeds for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the rss feeds from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/socials/entries/rss`</summary>
  
Endpoint to create a new rss feed entry in a guild to monitor.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the RSS feed entry in |
| rss_feed | yes | `string` | The URL of the rss feed to monitor |
| target_channel_id | yes | `integer` | The ID of the channel where to post updates for this entry |
| mention_everyone | yes | `boolean` | If @everyone needs to be mentioned so everyone gets a notification |

Possible errors:

- BadRequestError
- SettingsError
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

<details>
  <summary>DELETE - `/modules/socials/entries/rss`</summary>
  
Endpoint to delete a RSS feed entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the RSS feed from |
| rss_feed | yes | `string` | The URL of the rss feed to stop monitoring |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

### YouTube

<details>
  <summary>GET - `/modules/socials/entries/youtube`</summary>
  
Returns a list of monitored YouTube channels for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the YouTube channels from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of entries to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>POST - `/modules/socials/entries/youtube`</summary>
  
Endpoint to create a new YouTube channel entry in a guild to monitor.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the YouTube channel entry in |
| youtube_channel_handle | yes | `string` | The @handle of the channel to monitor. F.e. @dualipa |
| target_channel_id | yes | `integer` | The ID of the channel where to post updates for this entry |
| mention_everyone | yes | `boolean` | If @everyone needs to be mentioned so everyone gets a notification |

Possible errors:

- BadRequestError
- SettingsError
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

<details>
  <summary>DELETE - `/modules/socials/entries/youtube`</summary>
  
Endpoint to delete a YouTube channel entry in a guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the YouTube channel entry from |
| youtube_channel_handle | yes | `string` | The @handle of the YouTube channel to stop monitoring |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Sending Entry updates

Endpoints related to sending socials entries updates

### Reddit

<details>
  <summary>POST - `/modules/socials/entries/send/reddit`</summary>
  
:::danger

Do not use this endpoint yourself! Husqy will send updates when needed.

:::

Endpoint to make subreddit updates be sent in the channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| subreddit | yes | `string` | The name of the subreddit that has an update |
| url | yes | `string` | The URL of the post in that subreddit |

Possible errors:

- BadRequestError

</details>

### Twitch

<details>
  <summary>POST - `/modules/socials/entries/send/twitch`</summary>
  
:::danger

Do not use this endpoint yourself! Husqy will send updates when needed.

:::

Endpoint to make twitch account updates be sent in the channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| twitch_account | yes | `string` | The name of the twitch account that has gone live |

Possible errors:

- BadRequestError

</details>

### RSS

<details>
  <summary>POST - `/modules/socials/entries/send/rss`</summary>

:::danger

Do not use this endpoint yourself! Husqy will send updates when needed.

:::

Endpoint to make RSS feed updates be sent in the channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| rss_feed_url | yes | `string` | The URL of the rss feed that has an update |
| entry_title | yes | `string` | The title of the new entry in the RSS feed |
| entry_description | yes | `string` | The description of the new entry in the RSS feed |

Possible errors:

- BadRequestError

</details>

### YouTube

<details>
  <summary>POST - `/modules/socials/entries/send/youtube`</summary>
  
:::danger

Do not use this endpoint yourself! Husqy will send updates when needed.

:::

Endpoint to make YouTube channel updates be sent in the channel.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| uploads_playlist_id | yes | `string` | The ID of the uploads playlist that has been checked |
| video_id | yes | `string` | The ID of the video that has been uploaded |
| video_title | yes | `string` | The title of the video that has been uploaded |

Possible errors:

- BadRequestError

</details>

## Meme

Endpoints related to memes

<details>
  <summary>POST - `/modules/socials/meme/send`</summary>

Endpoint to send a random meme to a channel (a message needs to be present!).

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to send the meme in |
| channel_id | yes | `integer` | The ID of the channel where the message to edit is located |
| message_id | yes | `integer` | The ID of the message to edit with the random meme |

Possible errors:

- BadRequestError
- SettingsError
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

## Socials monitor handler

Endpoints related to the Socials module monitor microservice for handling socials entries

<details>
  <summary>GET - `/modules/socials/handler`</summary>

Home endpoint for the Modules Socials Monitor API. Returns only success message displaying that it is the Modules Socials Monitor Husqy API route.

</details>

### Reddit

<details>
  <summary>POST - `/modules/socials/handler/monitor/reddit/refresh-filter`</summary>

:::danger

Do not use this endpoint yourself! Husqy will refresh this automatically.

:::

Endpoint to refresh the subreddit filter.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| action_type | yes | `string` | The action to apply to the filter. Can be "add" or "remove" |
| subreddit | yes | `string` | The name of the subreddit to add or remove to/from the filter |

Possible errors:

- BadRequestError

</details>

### Twitch

<details>
  <summary>POST - `/modules/socials/handler/monitors/twitch/refresh-filter`</summary>

:::danger

Do not use this endpoint yourself! Husqy will refresh this automatically.

:::

Endpoint to refresh the twitch filter.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| action_type | yes | `string` | The action to apply to the filter. Can be "add" or "remove" |
| twitch_account | yes | `string` | The name of the twitch account to add or remove to/from the filter |

Possible errors:

- BadRequestError

</details>

### YouTube

<details>
  <summary>GET - `/modules/socials/handler/monitors/youtube/get-uploads-playlist-id`</summary>

:::danger

Do not use this endpoint yourself! Husqy will get the uploads playlist ID automatically.

:::

Endpoint to get the uploads playlist ID from a channel.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| channel_handle | yes | `string` | The @handle of the channel to get the uploads playlist ID for. F.e. @dualipa |

Possible errors:

- BadRequestError

</details>

### Memes

Endpoints related to memes

<details>
  <summary>GET - `/modules/socials/handler/meme/get`</summary>

An endpoint to get the URL and title of a random meme.

:::danger

Do not use this endpoint yourself! Please use the `/meme` command or the `/modules/socials/meme/send` endpoint.

:::

</details>

## Privacy

Endpoints related to privacy and the socials modules

<details>
  <summary>GET - `/modules/socials/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in socials to your user.

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
  <summary>DELETE - `/modules/socials/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in socials to your user.

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