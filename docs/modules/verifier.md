---
description: Verifier
title: Verifier
sidebar_label: Verifier
keywords:
  - docs
  - modules
  - verifier
sidebar_position: 10
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `View Channel`, `Send Messages`, `Embed Links` permissions in the channel where verification messages will be send;
- Make sure Husqy has the `Manage roles` permission in the Discord server;
- Make sure the `Husqy` role is (default bot role) at the top of the roles list;

:::

:::tip Supported variables

The Husqy verifier module supports: `User variables`, `Server variables` and `Other variables` inside the verification message content and completed content that will be send to users.

:::

The Husqy verifier module is the best way to secure your Discord server and protect it from spam or bots. It is used to provide an extra user action (configurable in different types) before users get full access to your servers channels. Make users press a button to pass or have them know a passphrase before giving them permissions based on Discord roles. The verifier module also works seamlessly with the rules module!

## Enabling the module

In order to enable the verifier module you have to navigate to the [Verifier dashboard](#additional-info--commands). There you will be prompted with an option to enable the verifier module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the verifier module, navigate to the [Verifier dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Verifier settings

The verifier module gets enabled with default settings which you can change to fit your servers needs. The following settings are available:

- `Type`: The type of verification required;
- `Verifier channel`: The channel where the verification messages to users will be send, this can be a text channel in your Discord server or the users DM;
- `Passphrase`: The passphrase users will need to enter before becoming verified. This is only required when the verifier type is set to "Passphrase";
- `Message content`: The content of the message to send to users asking them to verify them self. This message can be a Husqy embed config (just make sure to toggle the "Is embed?" button);
- `Completed verification content`: The content of the message to send to users when they have successfully verified them self. This message can be a Husqy embed config (just make sure to toggle the "Is embed?" button);
- `Verified role IDs`: The roles to give to the users when the have successfully verified them self.

## About verifier types

The verifier module provides you with three different verifier types: Click-to-pass, Passphrase and Web. Each of these verifier types works differently and has a different user experience for your users so choose wisely. All options send a message to a users DM or configured channel with a button used for the interaction.

### Click-to-pass

The click-to-pass verifier type is the easiest and most user friendly option. This also makes it less secure than the other options available. It only requires users to press a button and thats is, they are now verified.

The button that will be used here is a normal message button.

### Passphrase

The passphrase verifier type is more secure than click-to-pass but also a bit less user friendly. This requires users to now and correctly enter the servers passphrase before becoming verified.

The button that will be used here is a normal message button which, when clicked will show a form to the user where they can enter the passphrase.

### Web

The most secure verifier type is web. This requires users to authenticate them self on the Husqy dashboard using Discord login. It requires a few extra steps for the user therefore making it less user friendly than click-to-pass or passphrase, but thanks to the use of Discord login, is the most secure way to verify new users.

The button that will be used here is a link button. It will link to the Husqy dashboard verify url where the rest of the verification will be handled.

## Retriggering verification

A server administrator can use the `/verifier entry retrigger` command to retrigger verification for a users. This command will only start the retriggering of the verification and handle the verification, it will NOT remove configured verified role IDs. After this command is used, the target user follows the same steps as they would when the would join the server. 

:::warning

Using this command will also trigger the rules configured in the rules module to be retriggered.

:::

## Additional info & commands

:::info

- To go to the Verifier dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Verifier_** tab;

:::

:::info Available commands

This module provides the following commands:

- `/verifier entry retrigger`;

:::