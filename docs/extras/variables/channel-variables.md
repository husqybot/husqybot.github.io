---
description: Available channel variables that can be used in Husqy configuration
title: Channel variables
sidebar_label: Channel variables
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Channels
  - Variables
  - Channel variables
  - Husqy configuration
sidebar_position: 2
showLastUpdateTime: true
toc_max_heading_level: 6
---

Channel variables are, as the name implies, variables related to the channel of the event where the channel variables are used.

## All Channel variables

1. `<channel_id>`: The ID of the channel where the variable is used (f.e. 944644872940433429);
2. `<channel_mention>`: This will mention the channel where the variable is used;
3. `<channel_name>`: The name of the channel where the variable is used (f.e. info-and-rules);
4. `<channel_type>`: The type of the channel (f.e. GUILD_TEXT, GUILD_VOICE or GUILD_FORUM);
5. `<channel_created_at>`: The date and time of when the channel was created based on the timezone setting set by the server. The format will be dd-mm-yyyy HH:MM:SS;
   <br />

:::warning

Mention variables, can not be used in the footer of embed since they dont support mention strings!

:::
