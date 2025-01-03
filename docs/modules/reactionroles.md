---
description: Reactionroles
title: Reactionroles
sidebar_label: Reactionroles
keywords:
  - docs
  - modules
  - reactionroles
sidebar_position: 5
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `Manage roles` permission in the Discord server;
- Make sure the `Husqy` role is (default bot role) at the top of the roles list;
- Make sure Husqy has the `View Channel`, `Send Messages`, `Embed Links`, `Add Reactions` permissions in the reactionrole panels channel;

:::

The reactionroles module allows you to enable some self service to your users by making them choose the roles they want or need based on your configuration. This also allows for a more personalized way to experience your server and prevents the server members from being basted with information they don't need or want. The Husqy Reactionroles module provides you with the ability to create these reactionroles in your server and offload some of that administrator work.

## Enabling the module

In order to enable the reactionroles module you have to navigate to the [Reactionroles dashboard](#additional-info--commands). There you will be prompted with an option to enable the reactionroles module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the reactionroles module, navigate to the [Reactionroles dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Panels

A Husqy reactionrole panel is essentially a message in Discord where reactions (emojis), buttons or dropdowns can be added to which will each be linked to one or more roles in your server. A server member can then react to the reaction or interact with the buttons or dropdown and have that role added to their user. Reactionrole panels are required to create reactionrole entries and can be either a message/embed send by Husqy or can be based on an existing message.

:::tip

Use the Husqy embed utility to create an embed message for your reactionrole panels.

:::

:::warning

There is currently a limit of 1 panel per server.

:::

### Creating a panel

A reactionrole panel can be created by navigating to the [Reactionroles dashboard](#additional-info--commands) and pressing the `Create new panel` button. You will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Channel: the channel where the message will be located or is located if it is an existing message;
- Panel type: the type of the reactionrole panel;
- Existing message?: if the message already exists. If it is an existing message the message ID input box will appear else the message type and message content inputs will appear;
- Limit the roles a user can get to 1: wether a user can only have the roles linked to one reaction assigned to them;
- Supports remove: if a user can remove the roles linked to the reaction by interacting;
- Keep counter at one: for an emoji panel if the emoji counter needs to be kept at one;
- Delete unrelated emoji reactions: for an emoji panel if other emojis added need to be removed from the panel;
- Remove roles from users on entry delete: if deleted entries linked to this panel will result in those roles being removed from the users;

After deciding on the settings, press the `Add panel` button to create or register the panel.

:::warning

When registering an existing message as a panel, the type of this panel can only be emoji.

:::

### Deleting a panel

A panel can be deleted by pressing the `Delete panel` button. The panel and the entries linked to the panel will be deleted immediately. When a channel where a panel is located gets deleted or an message which is a panel gets deleted, the panels settings and linked reactionrole entries will automatically be deleted.

### Editing a panel

A panel can be edited by changing the settings in the panels box and then pressing the `Save changes` button. The panel settings will be edited and if needed the message will be changed if it is a Husqy message. 

## Reactionrole entries

A reactionrole entry is essentially an emoji reaction, button or dropdown item added to a reactionrole panel. This entry has one or more roles linked which will be added to the user when they interact with the entry.

:::tip

Husqy has support for custom server emojis to be used to further enhance the custom experience.

:::

:::warning

- A panel can have as many entries as Discord allows, for emojis this limit is 20 and for buttons and dropdown items this limit is 25.
- A button label has a maximum of 80 characters, any more will be ignored.
- A dropdown label and description have a maximum of 100 characters, any more will be ignored.

:::

### Adding an entry

Adding an entry to a panel can be done by navigating to the [Reactionroles dashboard](#additional-info--commands) and performing one of the following:

- Press the `Add reactionrole` button on the target panels overview box;
- Press the `View reactionroles` button on the target panels overview box and on the following page pressing the `Add reactionrole` button;

You will be redirected to a new page where a form with entry details needs to be filled in. This form includes:

- Roles to give: a selection of roles to give to the user when interacting with this entry;
- Emoji: the emoji to use (supports custom server emojis);
- Label: the label to use (only for buttons and dropdown items);
- Description: the description to use (only for dropdown items);

After deciding on the details, press the `Add entry` button to add the entry to the panel.

### Removing an entry

To remove an entry, navigate to the [Reactionroles dashboard](#additional-info--commands) and press the `View reactionroles` button on the target panels overview box. Here search for the reactionrole entry to remove and press the `Remove reactionrole` button. The entry will be deleted immediately.

:::note

Manually removing a emoji reaction which also is an entry will not delete it from the configuration. Do this manually via the dashboard (or have hidden reactionroles for your users to find!).

:::

### Editing an entry

To edit an entry, navigate to the [Reactionroles dashboard](#additional-info--commands) and press the `View reactionroles` button on the target panels overview box. Here search for the reactionrole entry to edit and make the changes. After making the changes press the `Save changes` button.

## Additional info & commands

:::info

- To go to the Reactionroles dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Reactionroles_** tab;

:::

:::info Availabe commands

This module does not provide any commands.

:::