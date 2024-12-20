---
description: Reminders
title: Reminders
sidebar_label: Reminders
keywords:
  - docs
  - reminders
sidebar_position: 2
toc_max_heading_level: 6
---

The Husqy Reminders function is an easy built-in way to provide your server members with the ability to create reminders in your server. It allows members to create a reminder on the go with the execution of one command and allows the to, optionally, enter more details about the thing they want to be reminded about. They can choose to be reminded in DM or in a channel.

## How can I create a reminder?

There are two ways to create a reminder in your server: using slash commands or using the Husqy dashboard

### Slash commands

To create a reminder, use the `/reminder add` command. This command has several [required and optional parameters](#parameters-overview). When you run the command, Husqy will save and start the reminder for you. After the delay, Husqy will send a message with the reminder and @mention you in it.

:::note

Everybody in your Discord server can use the Husqy Reminders function.

:::

### Dashboard

The dashboard provides the option to create a reminder, this creation does differ from the slash command option. The dashboard allows the creation, on behalf of someone else, this makes that person the target user (and thus "owner") who is the only one which can interact with the reminder.

To create the reminder via the dashboard:

1. Go to the [Reminders dashboard](#additional-information);
2. On the right, click the **_Create reminder_** button and fill the options;

### Parameters overview

- _Wait duration_: The time after which the reminder should be sent;
- _Description (optional)_: The description to give to the reminder. The default is `None`;
- _Destination (optional)_: The destination of the reminder. This can either be a channel ID or a user ID (for DM reminders). Default is `Command execution channel ID`;
- _Target user (optional)_: The user who is the target of the reminder, they will be @mentioned. Default is `Command executer ID`.
- _Linked message (optional)_: A valid URL to add to the reminder. Default is `None`;

## Listing reminders

Using the `/reminder list` command you can get an overview of reminders in the server where you execute the command. You can also go to the Reminders dashboard to get a table view of all reminders in the server.

## Deleting a reminders

Deleting a reminder can be done by using the `/reminder delete` command, where you will need to select the correct reminder ID. Alternatively, you can also go to the Reminders dashboard and delete the reminder there by pressing the **_delete_** button in the column of the targeted reminder ID.

## Confirming reminders

To acknowledge a reminder you can press the "☑" interactive button on the message. The message and the reminder will be deleted.

<details>
  <summary>Images</summary>

![Reminders demo](/img/docs/functions/reminder_demo_censored.jpg)

</details>

## Additional Information

:::info

- Husqy will keep the data of the reminder stored in the database until the reminder has been acknowledged or until the reminder has been send (DM reminders only).
- To go to the reminders dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server for the reminder interaction;
  3. In the sidebar press the **_Reminders_** tab;

:::

:::warning

- All interactions done to the Husqy Reminders function check privacy settings of the users who initiated the interaction and/or the target owner in some cases.

:::