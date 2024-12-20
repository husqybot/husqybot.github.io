---
description: Giveaways
title: Giveaways
sidebar_label: Giveaways
keywords:
  - docs
  - giveaways
sidebar_position: 1
toc_max_heading_level: 6
---

The Husqy Giveaways function is an easy built-in way to provide your server members with the ability to easily organize giveaways in your server. It allows members to enter and leave the giveaway and keeps track of the members who want a change to win. When the giveaway is ended, one or multiple winners will be picked. This will all be visible in the channel where the giveaway is created. Husqy also provides the giveaway owner the option to reroll a giveaway.

:::tip

There are settings available for Giveaways. Use them to personalize your experience.

:::

## How can I create a giveaway?

There are two ways to create a giveaway in your server: using slash commands or using the Husqy dashboard.

### Slash commands

To create a giveaway, use the `/giveaway create` command. This command has several [required and optional parameters](#parameters). When you run the command, Husqy will create a giveaway message for your server members to react to, to enter the giveaway.

:::note

Everybody in your Discord server can use the Husqy Giveaways function using slash commands.

:::

### Dashboard

The dashboard provides the option to create a giveaway, this creation does differ from the slash command option. The dashboard allows the creation of giveaways on behalf of someone else, this make that person the owner.

To create a giveaway via the dashboard:

1. Go to the [Giveaways dashboard](#additional-information);
2. On the right, click the **_Create giveaway_** button and fill the options;

### Parameters overview

- _Delay_: The time the giveaway is active for. After this delay is done, the winner(s) will be picked;
- _Channel_: The channel where the giveaway will be created;
- _Prize_: The prize of the giveaway;
- _Winners (optional)_: The amount of winners will be chosen when the giveaway has ended. The default is `1`;
- _Description (optional)_: The description to give to the giveaway. The default is `None`;

## Picking a new winner

After the giveaway ended, Husqy will have automatically picked a winner and send this message in the channel where the giveaway is created. If you want to reroll this winner you can use the `/giveaway reroll` command and select the correct giveaway ID. You can also:

1. Go to the Giveaways dashboard;
2. In the giveaway's overview table, press the **_reroll_** button in the column of the targeted giveaway ID;
<br />

:::note

Server administrators can not interact or delete the giveaways they are not the owner of.

:::

## Listing giveaways

Using the `/giveaway list` command you can get an overview of giveaways in the server where you execute the command. You can also go to the Giveaways dashboard to get a table view of all giveaways in the server.

## Deleting giveaways

Deleting a giveaway can be done by using the `/giveaway delete` command, where you will also need to select the correct giveaway ID. Alternatively, you can also go the Giveaways dashboard and delete the giveaway there by pressing the **_delete_** button in the column of the targeted giveaway ID.

## Entering a giveaway

To enter a giveaway, press the "🎉" reaction on the message. The message will now update an you have successfully joined the giveaway.

<details>
  <summary>Images</summary>

![Giveaways demo](/img/docs/functions/giveaway_demo_censored.jpg)

</details>

## Additional Information

:::info

- Husqy will keep the data of the giveaway stored in the database for 7 days by default, after these 7 days this data will be deleted! This timeout can be configured in the Husqy settings.
- To go to the giveaways dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server for the giveaway interaction;
  3. In the sidebar press the **_Giveaways_** tab;

:::

:::warning

- All interactions done to the Husqy Giveaways function check privacy settings of the users who initiated the interaction and/or the target owner in some cases.

:::