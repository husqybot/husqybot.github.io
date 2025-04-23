---
description: Tempchannels
title: Tempchannels
sidebar_label: Tempchannels
keywords:
  - docs
  - modules
  - tempchannels
sidebar_position: 3
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `Administrator` permissions to make sure the tempchannels module works properly;
- Make sure the `Husqy` role is (default bot role) at the top of the roles list;

:::

:::tip Supported variables

- The Husqy tempchannels module supports: `User variables`, `Server variables` and `Other variables` for the names of temporary voice and text channels.

:::

:::premium

This module provides [**Husqy+**](https://husqy.xyz/premium) benefits!

:::

Temporary channels (or also called tempchannels) are channels which server member can create by themself by joining a specified `creation channel`. Tempchannels will automatically be deleted when the last connected user leaves the temporary channel. Temporary channels can be either voice and/or text channels. This functionality is handled by the Husqy tempchannels module.

## Enabling the module

In order to enable the tempchannels module you have to navigate to the [Tempchannels dashboard](#additional-info--commands). There you will be prompted with an option to enable the tempchannels module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the tempchannels module, navigate to the [Tempchannels dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Creation channels

Creation channels are the start of the Husqy tempchannels module, they are what drive the creation of tempchannels by your server member. A creation channel can be created using the [Tempchannels dashboard](#additional-info--commands) by server administrators. A creation channel, when created, has some default configuration in Discord like a maximum amount of people who can join, etc. A server administrator can change these channel configuration using the Discord interface. Other configuration settings need to be edited using the [Tempchannels dashboard](#additional-info--commands).

:::warning

The free version of Husqy has a limit of 1 creation channel per server.

:::

### Creating creation channels

In the [Tempchannels dashboard](#additional-info--commands), click the `Add Creation channel` button on the top right of the screen. You will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Create category: the category where the creation channel will be created;
- Use a custom name for the creation channel: wether a custom name wil be used for the creation channel. When enabled, you must provide the name to use;
- Create voice channel: wether a voice channel needs to be created;
- Voice channel name: the name of the temporary voice channel when it needs to be created;
- Voice category: the category where the temporary voice channel will be created;
- Create text channel: wether a text channel needs to be created;
- Text channel name: the name of the temporary text channel when it needs to be created;
- Text category: the category where the temporary text channel will be created;

As you can see, you have full control over what channels will be created, voice only, text only, voice & text or none. Lets take a look at these scenarios and what the user will notice:

1. `Voice only`: When the creation channel is joined, a voice channel will be created and the user will be moved to their temporary voice channel;
2. `Text only`: When the creation channel is joined, a text channel will be created and the user will be disconnected;
3. `Voice & text`: When the creation channel is joined, a voice and a text channel will both be created. The user will be moved to the created temporary voice channel;
4. `None`: No channel will be created and the user will be disconnected; 

### Deleting creation channels

There are two ways to delete creation channels:

1. **(Preferred)** In the [Tempchannels dashboard](#additional-info--commands), find the creation channel to delete in the shown table. Here click `delete` in the `Interactions` column;
2. Server administrators can manually delete creation channels in Discord;
<br />

:::warning

Manually deleting a channel which is a Husqy tempchannels creation channel is possible, but not advised. When a channel (which is a creation channel) is deleted, Husqy will remove the full configuration of the creation channel.

:::

### Editing creation channels

In the [Tempchannels dashboard](#additional-info--commands), find the creation channel to delete in the shown table. Here click `Edit` in the `Interactions` column. You will be redirected to a new page where the current configuration of the creation channel is shown, here you can change most configuration. Don't forget to save after!

:::tip

The configuration edited here is only for the Husqy tempchannels module and for the channel name. Server administrators have full control over the channel in Discord to change things like visibility!

:::

## Tempchannels

Tempchannels are the real temporary channels which automatically get deleted and which allow the user to have their own space. Owners of a tempchannel gain full control over their tempchannel set in the Discord interface or via commands provided by Husqy like `/tempchannel edit add_block_rule`. 

:::note

A tempchannel set is a combination of a temporary voice and text channels that are linked together.

:::

:::warning

The free version of Husqy has a limit of 5 active tempchannels per server.

:::

### Creating a tempchannel

A tempchannel can be created by server members by joining the creation channel in the server. A new channel will automatically be created based on the configuration of the creation channel.

### Deleting a tempchannel

Deleting a tempchannel is done based on the lifetime of a temporary channel and the type of a temporary channel: 

<details>
  <summary>Voice channels</summary>

Temporary voice channels will be deleted when the last connected user leaves the temporary voice channel;

</details>

<details>
  <summary>Text channels with linked voice channels</summary>

- When the last connected user to a voice channel leaves and there HAS NOT been any activity in the linked text channel, the channel will be deleted;
- When the last connected user to a voice channel leaves and there HAS been activity in the linked text channel, the channel will be deleted 6 hours after the last activity;

</details>

<details>
  <summary>Text channels without linked voice channels</summary>

- When the text channel DOES NOT have any activity, it will be deleted within 10 minutes after creation;
- When the text channel HAS any activity, it will be deleted 6 hours after the last activity;

</details>

:::tip

By sending messages in a temporary text channel, the last activity updates even when the voice channel is already deleted! This way you can keep your chat longer if needed by just sending a message!

:::

:::warning

- Editing a channel does not count toward activity. Activity is measured using sending messages and sending messages ONLY. 
- "Witing 10 minutes after creation" is a estimate. Checking runs on a schedule and can happen quicker than 10 minutes!

:::

### Editing a tempchannel

A tempchannel set can be edited in two different ways by a tempchannel set owner:

- **(Preferred)** Using Husqy provided slash commands;
- Discord interface;

A server administrator also always has the ability to edit tempchannels, they can only use the Discord interface to make these changes.

The Husqy logging module is fully integrated with Husqy provided slash commands and is therefore the preferred way of editing a tempchannels, this can help server administrators and Husqy developers with providing support. The Discord interface is partly integrated with the Husqy logging module.

:::warning

- Some slash commands edit the tempchannel set whereas others edit the specified tempchannel only!
- Not all slash commands can be used for voice and text channels and will result in a error message.

:::


## Additional info & commands

:::info

- To go to the Tempchannels dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Tempchannels_** tab;

:::

:::info Available commands

This module provides the following commands:

- `/tempchannels list`;
- `/tempchannels edit name`;
- `/tempchannels edit age_restriction`;
- `/tempchannels edit bitrate`;
- `/tempchannels edit region`;
- `/tempchannels edit user_limit`;
- `/tempchannels edit slowmode`;
- `/tempchannels edit transfer`;
- `/tempchannels edit claim`;
- `/tempchannels edit add_block_rule_member`;
- `/tempchannels edit add_block_rule_role`;
- `/tempchannels edit remove_block_rule_member`;
- `/tempchannels edit remove_block_rule_role`;
- `/tempchannels edit add_trust_rule_member`;
- `/tempchannels edit add_trust_rule_role`;
- `/tempchannels edit remove_trust_rule_member`;
- `/tempchannels edit remove_trust_rule_role`;
- `/tempchannels edit delete`;

:::