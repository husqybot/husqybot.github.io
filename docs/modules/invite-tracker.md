---
description: An overview of the Husqy invite tracker module
title: Invite tracker
sidebar_label: Invite tracker
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Modules
  - Invites
  - Invite tracker
  - Tracker
sidebar_position: 12
showLastUpdateTime: true
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `View Audit Log`, `Send Messages`, `Embed Links`, `Create invites`, `Manage channels` and `Manage server` permissions;

:::

:::tip Supported variables

- The Husqy invite tracker module supports: `Invite tracker variables`, `User variables`, `Channel variables`, `Server variables` and `Other variables` inside the join message content.
- The Husqy invite tracker module supports: `Invite tracker variables`, `User variables`, `Server variables` and `Other variables` inside the leave message content.

:::

The invite tracker module is the best way to keep track of the invites in your server. See when users join and know who invited them and keep track of statistics. The invite tracker module also provides the ability for server administrator to set an invite link which all server members can request and share.

## Enabling the module

In order to enable the invite tracker module you have to navigate to the [Invite tracker dashboard](#additional-info--commands). There you will be prompted with an option to enable the invite tracker module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the invite tracker module, navigate to the [Invite tracker dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Changing the module settings

To change the settings of the invite tracker module, navigate to the [Invite tracker dashboard](#additional-info--commands). Here, different settings will be shown which can be changed. After changing press the `Save` button in the changes banner at the bottom of the screen to save the changes. The settings which can be changed are:

1. `Join messages enabled`: If the join messages are enabled;
2. `Join messages channel`: The channel where the join messages are sent;
3. `Join message is embed`: If the join message content is an Husqy embed JSON config;
4. `Join message content`: The content to use for the join messages;
5. `Leave messages enabled`: If the leave messages are enabled;
6. `Leave messages channel`: The channel where the leave messages are sent;
7. `Leave message is embed`: If the leave message content is an Husqy embed JSON config;
8. `Leave message content`: The content to use for the leave messages;
9. `Prevent own invite code`: If users joining with their own generated invite code are prevented from counting towards their chats;
10. `Server shared invite link`: The shared invite link users can request;

## Invite links

Husqy devides its logic into 2 different types of invite links, which may be used interchangeably:

1. A normal Discord invite link;
2. A known invite link. This type of link is of course a Discord invite link but one which is saved by Husqy to use for the invite tracker logic;

### Creating invite links

Creating an invite link can be done by your server members in two ways:

1. Using the standard Discord way to invite users;
2. Using the `/invite_tracker create` command;
<br />
:::note

Users must have `Administrator` or `Create invite` permissions in order to use the `/invite_tracker create` command.

:::

### Deleting invite links

Creating an invite link can be done by server administrators in two ways:

1. Using the invite links overview on channels or the server to delete the invite links;
2. Using the `/invite_tracker delete` command;
<br />
:::note

Users must have `Administrator` permissions in order to use the `/invite_tracker delete` command.

:::

### Listing known invite links

Listing invite links can be done in three ways:

1. Using the standard Discord invites overview on channels or the server;
2. Using the `/invite_tracker list` command;
2. Using the [Invite tracker dashboard](#additional-info--commands);
<br />
:::note

Users must have `Administrator` permissions in order to use [Invite tracker dashboard](#additional-info--commands).

:::

## Shared server invite link

Server administrators can set a shared invite link in the [Invite tracker dashboard](#additional-info--commands). This can be usefull for large servers with a special invite link or an invite link which does not expire and you want to prevent users from creating their own invite links.

Server members can then use the `/invite_tracker serverlink` command to get the configured shared invite link.

## Statistics

The invite tracker module keeps track of the amount of joins and leaves related to an inviter. Users can request the statistics of an inviter by using the `/invite_tracker stats` commands and providing the inviter to check the stats for.

:::warning

These statistics are retained for 31 days, after this period they are removed.

:::

## Invite tracker variables

Invite tracker variables are additional Husqy variables which can only be used in the invite tracker module. Currently the following invite tracker variables are supported:

1. `<inviter_id>`: The ID of the user who triggered the event (f.e. 868946730878632047)*;
2. `<inviter_mention>`: Will mention the user who triggered the event*;
3. `<inviter_nickname>`: The nickname of the user or No nickname if no nickname is set*;
4. `<inviter_display_name>`: The display name of the user (this will be the nickname if set. If there is no nickname set, this will return the global name. If there is no global name available it will be username of the user)*;
5. `<inviter_is_deaf>`: The deafend status of the user (this will be Deafend or Not deafend)*;
6. `<inviter_is_mute>`: The muted status of the user (this will be Muted or Not muted)*;
7. `<inviter_is_pending>`: If the user has passed the servers screening requirements (this will be Pending or Not pending)*;
8. `<inviter_joined_at>`: The date and time of when the user has joined the server based on the timezone setting set by the server. The format will be dd-mm-yyyy HH:MM:SS*;
9. `<inviter_premium_since>`: The date and time of when the user has become a premium server member based on the timezone setting set by the server. The format will be dd-mm-yyyy HH:MM:SS*;
10. `<inviter_roles>`: This will mention all roles that have been assigned to the user*;
11. `<inviter_communication_disabled_until>`: Will be None or the timeout set before this user is able to communicate again*;
12. `<inviter_avatar_url>`: The URL of the users avatar*;
13. `<current_invite_count>`: The current (or new on join event) invite count of the inviter;
14. `<invite_code>`: The invite code related to the event;
<br/>

\* User is in this case the inviter related to the event. F.e. if `user a` joins using an invite created by `user b`, `user b` will be the inviter related to that event.

## Additional info & commands

:::info

- To go to the Invite tracker dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Invite tracker_** tab;

:::

:::info Available commands

This module provides the following commands:

- `/invite_tracker create`;
- `/invite_tracker stats`;
- `/invite_tracker delete`;
- `/invite_tracker list`;
- `/invite_tracker serverlink`;

:::