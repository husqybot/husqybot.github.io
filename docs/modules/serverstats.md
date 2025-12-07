---
description: An overview of the Husqy serverstats module
title: Serverstats
sidebar_label: Serverstats
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Modules
  - Serverstats
  - Statistics
  - Stats
  - Analytics
  - Channel counters
  - Starboard
sidebar_position: 8
showLastUpdateTime: true
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `Administrator` permissions to make sure the serverstats module works properly;
- Make sure the `Husqy` role is (default bot role) at the top of the roles list;

:::

:::tip Supported variables

- The Husqy serverstats module supports: `Serverstats variables` for the format of counter panels.

:::

:::premium

This module provides [**Husqy+**](https://husqy.xyz/premium) benefits!

:::

The serverstats module is the best way to get insides about your server, server members and other modules as well as get some extra features: the starboard and counters. Other modules and function integrate seamlessly with the serverstats module so you can customize it to fit the needs of your server.

## Enabling the module

In order to enable the serverstats module you have to navigate to the [Serverstats dashboard](#additional-info--commands). There you will be prompted with an option to enable the serverstats module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the serverstats module, navigate to the [Serverstats dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Serverstats settings

When enabling the serverstats module, it gets enabled but all different components will be disabled by default and need to be configured by a server administrator:

- `Counters enabled`: If the counters component should be enabled;
- `Counters category`: The category where the counters will be located;
- `Starboard enabled`: If the starboard component should be enabled;
- `Starboard channel`: The channel where the starboard messages should be sent to;
- `Starboard count`: The amount of ⭐️ emojis required before getting sent to the starboard channel;

Outside of the settings above, server administrators can also enable different kinds of statistics. To learn more about these statistics, please read [here](#stats)

## Counters

Counters are special channels in a discord servers channel list which can keep track of different statistics of a Discord server, like member count, online members or even channel count. Counters can have goals attached to count down towards and are updated on a regular interval to keep the statistics up-to-date with the server as it is progressing.

Currently the following counter types are supported:

- `Statuses`: Displays the current online, offline and DND member count;
- `Online`: Displays the current online member count;
- `Online with role`: Displays the online member count who have the selected role;
- `Offline`: Displays the current offline member count;
- `DND`: Displays the current do not disturb member count;
- `Members`: Displays the total amount of members;
- `Members with role`: Displays the total amount of members who have the selected role;
- `Boost`: Displays the current amount of server boosters;
- `Channels`: Displays the current amount of channels;
- `Roles`: Displays the current amount of roles;

:::note

- It can take up to 15 minutes before you see any change to counters.
- Members where the status could not be determined of are considered offline.

:::

:::warning

The free version of Husqy has a limit of 3 counters per server.

:::

### Creating counters

To create a counter, make sure the counters are enabled for the server, this can be done by switching the `Counters enabled` switch on in the [Serverstats dashboard](#additional-info--commands), selecting an option from the `Counters category channel` and saving the settings. After the save is successful, the page will reload and a new link with the text: `Go to counters!` will be shown. By pressing this link you will be redirected to an overview of all currently active counters in the server. By pressing the `Create new counter` button on this page you will be redirected to a new page with a form where you can select the settings for the counter, this form includes:

- `Counter type`: The type of the counter to create;
- `Format`: The format of the counter. When leaving this field empty, the default format will be used;
- `Goal`: The goal to count towards;
- `Role`: The role to target in the counter;

:::warning

- Not all counter types support the `Goal` and `Role` field;
- The settings cannot be changed after creation. To change, delete the counter and create a new one;

:::

#### Goal

The goal option on counters allows you to count down towards a goal for the server. The value shown in the counter (`<value>` variable) is calculated by subtracting the current value of the goal value.

F.e. the goal of members is set to 3000 and there are currently 2345 members in the server, the value displayed will be 655.

#### Format

The format of a counter has support for [Serverstats variables](#serverstats-variables) but there are some important notes:

1. When using your own format you can use the `<value>` variable for specifying where the value must be placed on all counter types except the `statuses` counter type;
2. When using the `statuses` counter type, use: - `<online>`: for online members; - `<offline>`: for offline members; - `<dnd>`: for members with a do not disturb status;
   <br />

:::tip

By using custom formats you can customize the counter to the look and feel of your server.

:::

### Deleting counters

To delete a counter, go to the [Serverstats dashboard](#additional-info--commands) and press the `Go to counters!` link. y pressing this link you will be redirected to an overview of all currently active counters in the server, in this page, search for the counter to delete and delete the `Delete counter` button. The counter will be deleted immediately.

:::tip

- Deleting a counter (by deleting the channel) from within the Discord server, will also remove the counter from the configuration;
- Deleting the counter category (by deleting the category channel) from within the Discord server, will remove all counters, and disable the counter module;

:::

## Starboard

The starboard is the ultimate, automated way to highlight messages, wether they are funny, want to show support, or any other reason. The starboard watches for reactions of the ⭐️ (`:star:` in Discord) emoji to be reacted to and, if it is reacted enough times (it must be equal to or above the configured starboard count) it will be send to the starboard channel for all users to see!

Newly created starboard messages are monitored for 31 days, after which they are deleted from the database but NOT from the channel. Meaning that ⭐️ reactions added or removed from the message will result in the starboard message being edited in the starboard channel to have the accurate count.

:::note

When a user reacts to the message again after the 31 days, it will result in a new message being created in the starboard.

:::

## Stats

Stats provide the insights to your Discord server which can be seen by server administrators using the [Statistics dashboard](#additional-info--commands). Currently the following statistics are supported:

- `Messages`: Will track the amount of sent and deleted messages;
- `Commands`: Will track the commands used by server members;
- `Members`: Will track the total amount of members, number of joined members and number of left members;
- `Activities`: Will track the statuses of members in the server and the activities server members have (incl. the amount of time they have had that activity);
- `Voice`: Will track the amount of time members are in a voice channel;
- `Module autoresponder`: Will track the amount of triggers created, deleted and hit, the amount of time it took for the triggers to be checked and also the amount of responses created and deleted;
- `Module verifier`: Will track the amount of time it took for the verification to be handled;
- `Module tags`: Will track the amount of tags created and deleted and the time it took for tags to be sent;
- `Module rules`: Will track the amount of rules added and removed and the time it took to check for the rules to be send;
- `Module invite tracker`: Will track the amount of invites that are created and deleted;
- `Module socials`: Will track the amount of entries added and removed;
- `Module reactionroles`: Will track the amount of panels created and deleted, the amount of time it took when a member reacts to a reactionrole to check a role add/remove and also the amount of reactionroles added and removed;
- `Module welcoming`: Will track the amount of responses created and deleted, the amount of time it took to check a welcoming event and also the amount of timedroles created and deleted;
- `Module tempchannels`: Will track the amount of creation channels created and deleted, the amount of time it took to create a tempchannel, the amount of time it took to remove a tempchannel and the amount of tempchannels created;
- `Module tickets`: Will track the amount of panels created and deleted, the amount of ticket types added and removed and also the amount of tickets created, deleted, closed and reopened;
- `Module polls`: Will track the amount of polls created, deleted and manually closed as well as the amount of votes added and removed;
- `Module reminders`: Will track the amount of reminders created, deleted and send as wel ass the time it took to send a reminder;
- `Module giveaways`: Will track the amount of giveaways created, deleted, rerolled, enters and leaves;

These statistics can be enabled/disabled per group (as per the grouping above) and information will be stored for 31 days, after which the information is deleted immediately.

:::note

- All bots are included in the statistics.
- For statistics where specific member information is saved, the members can enable prevent data collection to stop their information to count towards the server statistics.

:::

## Serverstats variables

Serverstats variables are additional Husqy variables which can only be used in the serverstats module. Currently the following serverstats variables are supported:

1. `<value>`: The number of members that is related to the type of counter;
2. `<online>`: The number of members that have their status as "online" in Discord;
3. `<offline>`: The number of members that have their status as "offline" in Discord;
4. `<dnd>`: The number of members that have their status as "do not disturb" in Discord;
5. `<role_name>`: The name of the role that is used in the counter;
   <br />

:::warning

- The `<online>`, `<offline>` and `<dnd>` serverstats variables can only be used on the "statuses" counter type. For other counter types, use: `<value>`
- The `<role_name>` serverstats variable can only be used on the "Online with role" and "Members with role" counter types;

:::

## Additional info & commands

:::info

- To go to the Serverstats dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Serverstats_** tab;
- To go to the Statistics dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Statistics_** tab;

:::

:::info Available commands

This module does not provide any commands.

:::
