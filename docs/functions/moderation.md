---
description: Moderation
title: Moderation
sidebar_label: Moderation
keywords:
  - docs
  - moderation
sidebar_position: 4
toc_max_heading_level: 6
---

The Husqy Moderation function provides you and your server admins with a powerfull moderation tool for your server. It gives functionality like, warn, ban, kick and tempmute. In combination with the [Logging module](https://husqy.xyz/modules/logging/) ([docs](/docs/modules/logging)) it gives you complete insight with all moderation actions done by admins or insights in actions that may need to take place.

## Auto kick

Husqy Moderation Auto Kick is a functionality which, as the name implies, automatically kicks users. To do this Husqy looks at the number of warnings a user has.

### How to use it?

To use Husqy Moderation Auto Kick there is only one thing you have to do is to select a Auto Kick role in the [Settings dashboard](/docs/extra's/settings). By default Auto Kick is enabled and the maximum amount of warnings a user may have is `10`. When a member is over the maximum amount of warning, this role will be applied and Husqy will kick the user from your server and send them that they have been kicked with the reason of being warned to many times.

:::warning

- Whilst Auto Kick is enabled by default it does not have an auto kick role set. Not setting the Auto Kick role manually in the server using the [Settings dashboard](/docs/extra's/settings) will prevent Husqy from Auto Kicking members.
- Users need to have _Allow direct messages from server members_ and _Enable message requests from server members you may not know_ enabled in their Discord settings to be able to recieve DM messages from Husqy.

:::

:::tip

- You can disable Husqy Moderation Auto Kick by logging in to the [Settings dashboard](/docs/extra's/settings) and disabling it in settings.
- You can change the number of maximum warnings in the [settings dashboard](/docs/extra's/settings) as well!
- You can apply the Auto Kick role to members yourself to make Husqy kick users.

:::

## Banning, kicking and warning members

Husqy provides you and your server admins with some easy ways of banning, kicking and warning members. Husqy provides these functionalities using Slash commands:

- `/mod_user ban create`: This command allows you to ban a member by selecting the member in the `member` required command parameter. Optionally, this command provides you with the possibility to state a reason for the ban and allows you to delete up to seven days of message history of the banned user;
- `/mod_user ban delete`: This command allows you to unban a user by inserting the ID of the user you want to unban in the `user_id` required command parameter. Optionally, this command provides you with the possibility to state a reason for the unban;
- `/mod_user warn create`: This command allows you to warn a member by selecting the member in the `member` required command parameter. Optionally it allows you to set the amount of warning points to give to the user (default is `1`) and it allows you to state a reason for the warn;
- `/mod_user warn delete`: This command allows you to unwarn a member by selecting the member in the `member` required command parameter. Optionally it allows you to set the amount of warning points to remove from the user (default is `1`) and it allows you to state a reason for the unwarn;
- `/mod_user kick`: This command allows you to kick a user from the server, by selecting the user in the `user` required command parameter. Again, it optionally allows you to state a reason for the kick;

Every command used will notify the user in their DM of the activity that has been done and in combination with the [Logging module](https://husqy.xyz/modules/logging/) ([docs](/docs/modules/logging)) this allows you to keep track of all activities regarding user moderation in your server.

## Extra user moderation

Besides banning, kicking and warning a user, Husqy provides extra user moderation tools which can help you to create a safe environment for your servers community:

1. `/mod_user vckick`: This command allows you to kick a user from the voice channel they are connected to. Optionally, this command provides you with the possibility to state a reason for the voice channel kick;
2. `/mod_user move`: This command allows you to move a member from the voice channel they are connected to, to another voice channel. Optionally, this command provides you with the possibility to state a reason for the move.;
3. `/mod_user tempmute`: This command allows you to temporarily mute a member, preventing them from talking in voice channels. Optionally, this command provides you with the possibility to state a reason for the tempmute;
4. `/mod_user temptimeout`: This command allows you to temporarily timeout a member, preventing them from talking in chat and in voice channels. Optionally, this command provides you with the possibility to state a reason for the timptimeout;

## Extra server moderation

Not only does Husqy provide easy user moderation, it also provides easy server moderation:

1. `/mod_server channel clear_messages`: This command allows you to quickly delete messages in a text channel;
2. `/mod_server channel slowmode`: This command allows you to set slowmode for a channel;
3. `/mod_server channel create`: This command allows you to quickly create a channel;
4. `/mod_server channel delete`: This command allows you to quickly delete a channel;
5. `/mod_server channel lock`: This command allows you to lock a channel, preventing members from sending messages in the channel;
6. `/mod_server channel unlock`: This command allows you to unlock a channel, allowing members to send messages in the channel again;
7. `/mod_server role create`: This command allows you to quickly create a role;
8. `/mod_server role delete`: This command allows you to quickly delete a role;