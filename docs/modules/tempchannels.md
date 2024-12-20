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

Temporary channels, or tempchannels, are channels which a server member can create by joining a specified channel. The tempchannel will be deleted automatically when the last connected user leaves the tempchannel. Husqy Tempchannels module does exactly that for you and your server. It allows your server members to join a specified channel and creates tempchannels for them.

:::tip

You can configure Husqy to, optionally, create a temporary text channel linked to the voice channel.

:::

## Setting up

In order to enable the tempchannels module you have to navigate to the [Tempchannels dashboard](#additional-info). There you will be prompted with an option to enable the tempchannels module. After pressing to enable the module, a sidebar will appear for validation of enabling the module. In this sidebar you will need to:

1. Select a voice channel category (where all temporary voice channels will be located);
2. Enter a name for the temporary voice channels;
3. Select if Husqy needs to link a text channel;
4. (Optionally) Select a text channel category (where all temporary linked text will be located);
5. (Optionally) Enter a name for the temporary linked text channels;

:::tip

The names of the tempchannels supports selected Husqy variables.

:::

## Disabling the tempchannels module

To disable the tempchannels module, navigate to the [Tempchannels dashboard](#additional-info) and click the here button at the top of the page to disable the module and delete the settings.

## Creating a tempchannels

After setting up the Tempchannels module, Husqy will have created a new voice channel called: **_Create a TempChannel_** (it will be placed in the selected category or the default category called: **_HUSQY VOICE_** if you have selected the default setup).

Users can join this channel called: **_Create a TempChannel_**. Husqy will then create the new channel(s) and move the user to their tempchannel. When the last user leaves the created tempchannel, the channel(s) will be automatically deleted by Husqy.

## Changing settings of the tempchannels module

In order to configure the different compontents, navigate to the [Tempchannels dashboard](#additional-info) and change the settings you want to change. After doing so, save the settings. The new settings will be configured and, if needed, they will be reflected in Discord!

## Additional info

:::info

- To go to the Tempchannels dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Tempchannels_** tab;

:::