---
description: Tags
title: Tags
sidebar_label: Tags
keywords:
  - docs
  - modules
  - tags
sidebar_position: 9
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `View Channel` and `Send Messages` permissions in the channel where the tag needs to be send to;

:::

:::tip Supported variables

- The Husqy tags module supports: `User variables`, `Channel variables`, `Server variables` and `Other variables`.

:::

The tags module allows your servers users to create tags. These tags are a simple way to create default responses for your users to use and can be helpful when repeating message over and over again.

## Enabling the module

In order to enable the tags module you have to navigate to the [Tags dashboard](#additional-info--commands). There you will be prompted with an option to enable the tags module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the tags module, navigate to the [Tags dashboard](#additional-info) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Tags

What are tags then exactly? Tags are essentially a message text configuration. They are linked to an owner to prevent unauthorized editing and can have a visibility setting of Public or Private. Public meaning that anybody in the server can use the tag and private meaning that only the owner can use the tag.

Interacting with a tag can be done via two ways (except for preview (dashboard only) and send (slash command only)):

1. The [Tags dashboard](#additional-info);
2. Slash commands;


:::tip

- One tag can have multiple names;
- A tag name can be used for more than 1 tag, just add it to the other tag;
- The content of the tags support the markdown styling Discord has implemented;

:::

:::warning

There is currently a limit of 20 tags per server.

:::

### Creating a tag

Using the dashboard, navigate to the [Tags module](#additional-info) page and press the `Create entry` button in the top right of the screen. You will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Names: the names used for the tag (make sure to press `Add name` to add the name to the list);
- Content: the content used for the tag;
- Owner: the owner of the tag;
- Visibility: The visibility setting of the tag;

Using slash commands, run the command `/tags create` and fill in the options listed below. You will be the owner of the tag and the tag content will be asked when running the command.

- Names: a comma seperated list of names to use for the tags (f.e. tag1,tag2)
- Visibility: the visibility setting for the tag

:::warning

- Only the server owner or server administrators can add tags via the Tags dashboard.
- Server owners and administrators cannot add or delete a tag that they are not the owner of.
- Server owners and administrators can make tags with someone else as owner.

:::

### Deleting a tag

Using the dashboard, navigate to the [Tags module](#additional-info) page and wait until the tag preview boxes are loaded. Here you can either press the `Delete tag` button to delete the tag immediately or press the `View content` button and press the `Delete tag` button in the next page.

Using slash commands, run the command `/tags delete` and pick the tag from the autocomplete options. The tag will then be deleted immediately.

:::warning

- You must pick from the autocomplete options, these have the ID of the tag linked to prevent accidental deletion of the wrong tag with the same name.

:::

### Editing a tag

Using the dashboard, navigate to the [Tags module](#additional-info) page and wait until the tag preview boxes are loaded. Here you can change some of the smaller settings like: the owner and the visibility setting. Make sure to press the `Save changes` button to save the changes made. To edit the names and the content, press the `View content` button. In the following page you can add and remove names (make sure to hit the `Add name` button) and change the content. When finished, press the `Save changes` button at the bottom of the page.

Using slash commands, run the command `/tags edit` and pick the tag from the autocomplete options, optionally, set one or more of the following options:

- new_names: a comma seperated list of the new names, all old names will be deleted. Example: tag1,tag2;
- new_owner: the new owner of the tag;
- new_visibility: the new visibility setting;
- use_new_content: wether to send a prompt to allow the user to send the new content;

:::warning

- You must pick from the autocomplete options, these have the ID of the tag linked to prevent accidental editing of the wrong tag with the same name.

:::

### Sending a tag

To send a tag, run the `/tags send` command and insert the name of the tag to send. Optionally insert a user in the user_mention_id option to allow Husqy to fill in the user variables used inside the tags content.

:::tip

- Although the name option has autocomplete options and it is heavily adviced you use these, they are not required. When not picking an autocomplete option, Husqy will pick the first entry it finds if there are multiple entries with the same name.

:::

### Listing tags

Using the dashboard, navigate to the [Tags module](#additional-info) page and wait until the tag preview boxes are loaded. Here all the tags available in the server will be listed.

To list the tags in Discord, run the `/tags list` command and provide the selection: "Servers tags" to view all public (and your private) tags in the server or "My tags" to view all of your public and private tags.

### Preview a tag

Using the dashboard, navigate to the [Tags module](#additional-info) page and wait until the tag preview boxes are loaded and press the `View content` button. In the following page when editing the tag, you have a `Preview in Discord` button to send the (edited) tag content to a discord channel of you choosing. You user will be used for the user variables and the selected channel will be used for the channel variables.

## Additional info & commands

:::info

- To go to the Tags dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Tags_** tab;

:::

:::info Availabe commands

This module provides the following commands:

- `/tags list`;
- `/tags create`;
- `/tags edit`;
- `/tags delete`;
- `/tags send`;

:::

