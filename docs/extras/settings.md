---
description: An overview over Husqy settings
title: Settings
sidebar_label: Settings
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Settings
sidebar_position: 3
showLastUpdateTime: true
toc_max_heading_level: 6
---

Husqy settings are different (default) settings Husqy has when joining a server. These settings are used for making the functionality of Husqy usable for most servers. These settings can be the amount of time before a message is removed or the amount of time before a finished giveaway is deleted. We do however acknowledge that these default values may not be suitable for all servers, bigger server may want a longer save time and smaller servers may not want to use auto kick. To comply with all needs, these settings can be changed using the [Settings dashboard](#additional-information). Administrators of a server can log in and change the settings to the desired values in the settings page (don’t forget to press the Save button to save the changes).

All users can view the current settings using the `/info` command and selecting the `bot info`. Administrators can also use the [Settings dashboard](#additional-information).

## Which settings are there?

Husqy has different settings that can be changed, each setting is used in its own way by Husqy. The settings which can be changed are:

- `Language`: The language in which Husqy will respond;
- `Timezone`: The timezone to use within the server;
- `Unit system`: The unit system of the server;
- `Auto delete`: The time it takes for Husqy to delete its response (for some responses, f.e. big embeds, a base auto delete will be used if the set auto delete time is lower than the `base time!`). Must be between 0 and 900 seconds;
- `Max warns`: The amount of warnings a user is allowed to get before getting auto kicked (if auto kick is enabled);
- `Auto kick role`: The role Husqy will use to kick a member (if a user is assigned this role the user will be kicked). This role will be assigned by Husqy when the max warns is exceeded - `and auto kick is enabled;
- `Auto kick`: If auto kick is enabled;
- `Invite link`: The invite link to join the server. Members can request this link to invite others;
- `Giveaway save timeout`: The time to save a giveaway before it gets permanently deleted;

:::tip

Set auto delete to 0 to disable auto delete. This will make Husqy not delete responses and make them stay visible.

:::

## Additional Information

:::info

- To go to the settings dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Settings_** tab;

:::