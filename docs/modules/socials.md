---
description: Socials
title: Socials
sidebar_label: Socials
keywords:
  - docs
  - modules
  - socials
sidebar_position: 4
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `View Channel`, `Send Messages` and `Embed Links` permissions in the channels where the updates might be send;

:::

The Husqy Socials module allows you to keep track of your favorite celebrities, websites or channels, all within your Discord server. The Husqy Socials module provides different components, these are: Reddit, Twitch, YouTube and RSS feeds.

## Enabling the module

In order to enable the socials module you have to navigate to the [Socials dashboard](#additional-info--commands). There you will be prompted with an option to enable the socials module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the socials module, navigate to the [Socials dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Changing the configuration of the socials module

The only reconfigurable items of the socials module are to enable or disable the different components. This is done in the [Socials dashboard](#additional-info--commands).

## Adding entries to component monitoring lists

### Reddit

To create a new subreddit monitoring entry. Go to the [Socials dashboard](#additional-info--commands) and click the `Go to list!` link in the Reddit component settings box (make sure it is enabled for the link to show up!). You will be redirected to the Reddit component list view where all monitored subreddits will be listed. Here click the `Add subreddit` button on the top right. When pressed, you will be redirected to a new page where a form with the information needs to be filled in. This form includes:

- Entry: The name of the subreddit to monitor;
- Target channel: The channel where new posts are being send to;
- Mention everyone: If @everyone needs to be mentions when a new post is made;

:::note

We try to get all new posts in a subreddit, however, in busy subreddits some new posts might be missed.

:::

:::warning

There is currently a limit of 3 subreddits per server.

:::

### Twitch

To create a new Twitch account monitoring entry. Go to the [Socials dashboard](#additional-info--commands) and click the `Go to list!` link in the Twitch component settings box (make sure it is enabled for the link to show up!). You will be redirected to the Twitch component list view where all monitored Twitch accounts will be listed. Here click the `Add Twitch Account` button on the top right. When pressed, you will be redirected to a new page where a form with the information needs to be filled in. This form includes:

- Entry: The name of the Twitch account to monitor;
- Target channel: The channel where updates are being send to;
- Mention everyone: If @everyone needs to be mentions when the Twitch account goes live;

:::warning

There is currently a limit of 3 Twitch accounts per server.

:::

### RSS Feeds

To create a new RSS Feed monitoring entry. Go to the [Socials dashboard](#additional-info--commands) and click the `Go to list!` link in the RSS component settings box (make sure it is enabled for the link to show up!). You will be redirected to the RSS component list view where all monitored RSS feeds will be listed. Here click the `Add RSS Feed` button on the top right. When pressed, you will be redirected to a new page where a form with the information needs to be filled in. This form includes:

- Entry: The exact URL of the RSS feed to monitor;
- Target channel: The channel where new feed entries are being send to;
- Mention everyone: If @everyone needs to be mentions when the feed has a new entry;

:::note

- It can take up to 15 minutes for new entries to be send to the channel.
- If multiple new entries are create, all new entries will be send to the updates channel.

:::

:::warning

There is currently a limit of 1 RSS Feed per server.

:::

### YouTube

To create a new YouTube channel monitoring entry. Go to the [Socials dashboard](#additional-info--commands) and click the `Go to list!` link in the YouTube component settings box (make sure it is enabled for the link to show up!). You will be redirected to the YouTube component list view where all monitored YouTube channel will be listed. Here click the `Add YouTube channel` button on the top right. When pressed, you will be redirected to a new page where a form with the information needs to be filled in. This form includes:

- Entry: The @handle of the channel to monitor;
- Target channel: The channel where new uploads are being send to;
- Mention everyone: If @everyone needs to be mentions when the YouTube channel has a new upload;

:::tip

This component also monitors YouTube shorts.

:::

:::note

- It can take up to 30 minutes for new uploads to be send to the channel.
- If multiple new videos are uploaded, up to 10 new videos will be send to the updates channel. 

:::

:::warning

There is currently a limit of 1 YouTube channel per server.

:::

## Removing entries from component monitoring lists

To remove an entry from the components monitoring list, go to the [Socials dashboard](#additional-info--commands) and click the `Go to list!` link in the target component settings box (make sure it is enabled for the link to show up!). You will be redirected to the target component list view where all monitored entries will be listed. Here click the `Delete` button on the right side of the table for the entry you want to delete, the entry will be deleted immediately.

## Additional info & commands

:::info

- To go to the Socials dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Socials_** tab;

:::

:::info Available commands

This module does not provide any commands.

:::
