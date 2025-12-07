---
description: An overview of the Husqy welcoming module
title: Welcoming
sidebar_label: Welcoming
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Modules
  - Welcoming
sidebar_position: 2
showLastUpdateTime: true
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `View Channel`, `Send Messages`, `Embed Links` permissions in the channels where the responses might be send;
- Make sure Husqy has the `Manage roles` permission in the Discord server;
- Make sure the `Husqy` role is (default bot role) at the top of the roles list;

:::

:::tip Supported variables

- The Husqy welcoming module supports: `User variables`, `Channel variables`, `Server variables` and `Other variables` inside the responses of type: Channel welcome message and Channel leave message.
- The Husqy welcoming module supports: `User variables`, `Server variables` and `Other variables` inside the responses of type: DM welcome message.

:::

:::premium

This module provides [**Husqy+**](https://husqy.xyz/premium) benefits!

:::

The Husqy welcoming module is the best way to welcome new members to your server and give them the correct roles without needing any repeated actions by a server administrator. It is also the perfect way to reward members with roles when they stay in the server for a longer period of time.

## Enabling the module

In order to enable the welcoming module you have to navigate to the [Welcoming dashboard](#additional-info--commands). There you will be prompted with an option to enable the welcoming module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the welcoming module, navigate to the [Welcoming dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Components

The welcoming module consists of different component, each of these component has its own goal and features. Each component can be enabled and disabled seperatly from each other making sure the module fits your exact needs. The component settings can be directly changed in the [Welcoming dashboard](#additional-info--commands), just change the configuration and press the `Save` button in the unsaved changes banner at the bottom of the screen.

### Welcome messages in DM

The `Welcome messages in DM` component enables you to send a message to a users DM when they join your server. This component makes use of responses (more in this later) with the type: `DM welcome message`. You can randomize responses if you have multiple responses with this type.

:::warning

- The user needs to have **_Direct Messages_** enabled in their settings (under **Content & Social**) for your server or all servers.

:::

### Welcome messages in channel

The `Welcome messages in channel` component enables you to send a message to a server channel (which you can choose) when a user joins your server. This component also makes use of responses, this time with the type: `Channel welcome message`. You can randomize responses if you have multiple responses with this type.

### Leave messages

The `Leave messages` component enables you to send a message to a server channel (which you can choose) when a user leaves your server. This component also makes use of responses, this time with the type: `Channel leave message`. You can randomize responses if you have multiple responses with this type.

### Autorole

The `Autorole` component can automatically add roles to a user when they join your server. The autorole component can add one or more role to a new user.

### Timedroles

The `Timedroles` component can automatically add timedroles to a user when they are in a server for a specified period of time (linked to the timedrole). This component makes use of Timedroles (more on that later).

:::note

It can take up to 5 minutes before the timedrole gets added to a server member.

:::

## Responses

Responses are the primary interaction for three of the welcoming module components: `Welcome messages in DM`, `Welcome messages in channel` and `Leave messages in channel`. The responses are all grouped together and are separated by type. The following types are currently available:

1. **DM welcome message**: For responses targeted for the `Welcome messages in DM` component;
2. **Channel welcome message**: For responses targeted for the `Welcome messages in channel` component;
3. **Channel leave message**: For responses targeted for the `Leave messages` component;

<br/>
These responses can be an Husqy JSON embed config (when the response should be an embed) or they can be a normal message. When the responses for a component are not randomized, a response must be selected to use for sending.

:::tip

- The content of the response support the markdown styling Discord has implemented when the response is not an embed;
- The content of the response also supports Husqy variables;

:::

:::warning

The free version of Husqy has a limit of 1 response per response type per server.

:::

:::danger

When using an embed, please use the custom_embed creator Husqy provides to ensure that the embed get send correctly! Not using this may cause Husqy not to send an embed.

:::

### Creating a response

Responses can be created by server administrators using the [Welcoming dashboard](#additional-info--commands). To create a response, press the `Go to responses` button within one of the component boxes. You will be redirected to the general responses page. Here, click the `Create new response` button, you will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Response type: the type of the response;
- Is embed: if the content of the response is going to be a Husqy JSON embed config.
- Content: the content of the response. Can also be Husqy embed JSON configuration.

### Deleting a response

To delete a response, go to the [Welcoming dashboard](#additional-info--commands) and press the `Go to responses` button within one of the component boxes. You will be redirected to the general responses page. Here all responses will be loaded. Find the response you want to delete and press the `Delete response` button. The response will be deleted immediately.

## Timedroles

Timedroles are the roles that get added to server members when they are in a server for a longer period of time. The time they are in the server is checked against the configured `add_after` option on a timedrole. When the member is in the server for longer than the `add_after` option the configured role gets added.

:::warning

The free version of Husqy has a limit of 1 timedrole per server.

:::

### Creating a timedrole

Timedroles can be created by server administrators using the [Welcoming dashboard](#additional-info--commands). To create a timedrole, press the `Go to timedroles` button in the `Timedroles` component box. You will be redirected to the general timedroles page. Here, click the `Create new timedrole` button, you will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Role ID: the role you want to give to the member;
- Add after (seconds): the amount of seconds the member must be in the server before getting the role.

### Deleting a timedrole

To delete a timedrole, go to the [Welcoming dashboard](#additional-info--commands) and press the `Go to timedroles` button in the `Timedroles` component box. You will be redirected to the general timedroles page. Here all timedroles will be loaded. Find the timedrole you want to delete and press the `Delete timedrole` button. The timedrole will be deleted immediately.

## Additional info & commands

:::info

- To go to the Welcoming dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Welcoming_** tab;

:::

:::info Available commands

This module does not provide any commands.

:::
