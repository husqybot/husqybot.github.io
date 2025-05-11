---
description: Giveaways
title: Giveaways
sidebar_label: Giveaways
keywords:
  - docs
  - modules
  - giveaways
sidebar_position: 15
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `View Channel`, `Send Messages`, `Embed Links`, `Add Reactions` in the channel where the giveaway will be located;

:::

:::premium

This module provides [**Husqy+**](https://husqy.xyz/premium) benefits!

:::

The giveaways module allows you and your server members to organize giveaways in the server for other members to join and participate in. It allows members to enter the giveaway (or leave the giveaway) and get a change to win the prize. After the giveaway is ended it will pick an amount of winners based on the winner count and notify the servers using a message.

## Enabling the module

In order to enable the giveaways module you have to navigate to the [Giveaways dashboard](#additional-info--commands). There you will be prompted with an option to enable the giveaways module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the giveaways module, navigate to the [Giveaways dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Changing the settings of the module

To change the settings of the giveaways module, navigate to the [Giveaways dashboard](#additional-info--commands). Here, different settings will be shown which can be changed. After changing press the `Save` button in the changes banner at the bottom of the screen to save the changes. The settings which can be changed are:

1. `Save duration timeout`: The amount of seconds to save giveaways after they have been ended;
2. `Delete ended giveaways`: If giveaways should be deleted after they have ended (complies with save duration timeout);

## Giveaways

As stated earlier, giveaways are the core component of the module. Giveaways can be organized by anyone in the server and provide an easy way for users to enter/leave to get a change to win the set prize of the giveaway. Giveaways provide the following options:

- `Prize`: The prize of the giveaway;
- `Channel`: The channel where the giveaway will be located;
- `Owner`: The owner of the giveaway;
- `End time`: The time at which an giveaway will end;
- `Description`: (Optional) The description of the giveaway;
- `Winner count`: The amount of winners the giveaway will have;

When the giveaway has ended it will update the original giveaway message with the details of the finished giveaway and will send a message in the same channel notifying you and your members that the giveaway has finished.

### Creating giveaways

Using the dashboard, navigate to the [Giveaways dashboard](#additional-info--commands) page and press the `Create giveaway` button in the top right of the screen. You will be redirected to a page where a form with the giveaway details needs to be filled in.

Using slash commands, run the `/giveaways create` command and fill in the parameters. After sending the command, the giveaway will be created.

:::warning

The free version of Husqy has a limit of 2 giveaways per server;

:::

### Deleting giveaways

Using the dashboard, navigate to the [Giveaways dashboard](#additional-info--commands). In this view, search for the giveaway to delete in the table and press the `Delete` button in the interactions column corresponding to the giveaway. The giveaway will be deleted immediately.

Using slash commands, run the `/giveaways delete` command and provide it the ID of the giveaway to delete. The giveaway will be deleted immediately.

:::note

Deleting a giveaway can only be done by the owner of a giveaway. Not even server administrators can delete giveaways they do not own.

:::

### Rerolling giveaways

Using the dashboard, navigate to the [Giveaways dashboard](#additional-info--commands). In this view, search for the giveaway to reroll in the table and press the `Reroll` button in the interactions column corresponding to the giveaway. The giveaway will be rerolled immediately and the giveaway message will be updated with the new winners.

Using slash commands, run the `/giveaways reroll` command and provide it the ID of the giveaway to reroll. The giveaway will be rerolled immediately and the giveaway message will be updated with the new winners.

:::note

Rerolling a giveaway can only be done by the owner of a giveaway. Not even server administrators can reroll giveaways they do not own.

:::

### Editing giveaways

Using the dashboard, navigate to the [Giveaways dashboard](#additional-info--commands). In this view, search for the giveaway to edit in the table and press the `View details` button in the interactions column corresponding to the giveaway. You will be redirected to the details page of the giveaway where you will have the ability to edit some details of the giveaway. After clicking the `Save changes` button in the giveaway details (and the corresponding giveaway message) will be updated.

:::note

Editing a giveaway can only be done by the owner of a giveaway. Not even server administrators can edit giveaways they do not own.

:::

:::warning

Giveaways can only be edited using the giveaways dashboard.

:::

## Entering and leaving giveaways

### Entering

To enter a giveaway as a server member, go to the giveaways message and press the `🎉 Enter giveaway` button. You will get feedback messages wether the entering of the giveaway has been successful or not. The giveaway message will also be updated by adding you as an extra participant.

:::tip

Anyone can join a giveaway at any point in time while the giveaway is active.

:::

### Leaving

To leave a giveaway as a server member, go to the giveaways message and press the `Leave giveaway` button. You will get feedback messages wether the leaving of the giveaway has been successful or not. The giveaway message will also be updated by removing you as a participant.

:::tip

Anyone can leave a giveaway at any point in time while the giveaway is active.

:::

## Additional info & commands

:::info

- To go to the Giveaways dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Giveaways_** tab;

:::

:::info Available commands

This module provides the following commands:

- `/giveaways create`;
- `/giveaways delete`;
- `/giveaways reroll`;
- `/giveaways list`;

:::
