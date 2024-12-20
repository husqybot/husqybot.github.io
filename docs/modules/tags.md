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

Husqy Tags module allow you to create server tags. These are a way to create default response for your users use. This can be useful for messages or responses that are very repeatable, f.e. an explanation of a function or the explanation of channel usage.

## Setting up

In order to enable the tags module you have to navigate to the [Tags dashboard](#additional-info). There you will be prompted with an option to enable the tags module. After pressing to enable the module, a sidebar will appear for validation of enabling the module.

## Disabling the tags module

To disable the tags module, go to the [Tags dashboard](#additional-info) and click the here button at the top of the page to disable the module and delete the settings.

## Adding or removing a tag

### Adding

To add a tag go to the [Tags dashboard](#additional-info). Here click the **_Create entry_**. In the sidebar fill in the name of the tag and the content of the tag.

:::tip

- Tag content support Discord's special markup. F.e. **Bold** or \`code\`.
- Tag content supports some [Husqy variables](/docs/Extra's/Variables/Overview)

:::

:::warning

Only the server owner or server administrators can add tags.

:::

### Removing

To remove a tag, go to the [Tags dashboard](#additional-info) and search for the tag to remove in the overview table. When found, press the **_Delete_** button to remove the tag.

:::warning

Only the server owner or server administrators can remove tags.

:::

## Using tags

To use tags, the tag must ofcource exist. When this is the case users can start using that tag by running the command: `/tag send` and giving the name for the tag they want to send (this supports autocomplete to make your life easier).

## Additional info

:::info

- To go to the Tags dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Tags_** tab;

:::