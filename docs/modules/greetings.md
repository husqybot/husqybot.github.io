---
description: Greetings
title: Greetings
sidebar_label: Greetings
keywords:
  - docs
  - modules
  - greetings
sidebar_position: 2
toc_max_heading_level: 6
---

Husqy Greetings module provides you with the ability to automate some task regarding new or left users. It enables a server to automatically greet new users (via DM and/or in a servers text channel), give one role to a new user or wave them goodbye (in a servers text channel).

:::warning

- The user needs to have **_Allow direct messages from server members_** and **_Enable message requests from server members you may not know_** enabled in their settings.
- Husqy needs to have the **_View channel_** and **_Send messages_** permissions in this channel.

:::

## Setting up

In order to enable the Greetings module you have to navigate to the [Greetings dashboard](#additional-info). There you will be prompted with an option to enable the Greetings module. After pressing to enable the module, a sidebar will appear for validation of enabling the module.

## Re-configuring the Greetings module

The [Greetings dashboard](#additional-info) is the place to change the configuration of the Greetings module.

<details>
  <summary>In server greetings</summary>

Go to the [Greetings dashboard](#additional-info) and enable or disable the greetings in server component. When enabling, you have a selection of settings to fill in:

1. The type of the welcome message;
2. The content of the welcome message;
3. The channel where to post the welcome message;

Note: When you have selected the **_embed_** type, you must insert the full JSON of the embed to use!

:::tip

The content of the message or embed supports different Husqy variables!

:::

:::warning

Husqy needs to have the **_View channel_** and **_Send messages_** permissions in this channel.

:::

:::danger

When using an embed, please use the custom_embed creator Husqy provides to ensure that the embed get send correctly! Not using this may cause Husqy not to send an embed.

:::

</details>

<details>
  <summary>User DM greetings</summary>

Go to the [Greetings dashboard](#additional-info) and enable or disable the greetings to user component. When enabling, you have a selection of settings to fill in:

1. The type of the welcome message;
2. The content of the welcome message;

Note: When you have selected the embed type, you must insert the full JSON of the embed to use!

:::tip

The content of the message or embed supports different Husqy variables!

:::

:::warning

The user needs to have **_Allow direct messages from server members_** and **_Enable message requests from server members you may not know_** enabled in their settings.

:::

:::danger

When using an embed, please use the custom_embed creator Husqy provides to ensure that the embed get send correctly! Not using this may cause Husqy not to send an embed.

:::

</details>

<details>
  <summary>Role on join</summary>

Go to the [Greetings dashboard](#additional-info) and enable or disable the greetings role add component. When enabling, you need to select the role you want to give new members when they join.

</details>

<details>
  <summary>In server leave taking</summary>

Go to the Greetings module page and enable or disable the leave taking in server component. When enabling, you have a selection of settings to fill in:

1. The type of the leave taking message;
2. The content of the leave taking message;
3. The channel where to post the leave taking message;

Note: When you have selected the embed type, you must insert the full JSON of the embed to use!

:::tip

The content of the message or embed supports different Husqy variables!

:::

:::warning

Husqy needs to have the **_View channel_** and **_Send messages_** permissions in this channel.

:::

:::danger

When using an embed, please use the custom_embed creator Husqy provides to ensure that the embed get send correctly! Not using this may cause Husqy not to send an embed.

:::

</details>

## Additional info

:::info

- To go to the Greetings dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Greetings_** tab;

:::