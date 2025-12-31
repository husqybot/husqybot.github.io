---
description: An overview of the Husqy polls module
title: Polls
sidebar_label: Polls
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Modules
  - Polls
  - Husqy polls
  - Discord polls
sidebar_position: 13
showLastUpdateTime: true
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `Manage channels`, `View Channel`, `Send Messages`, `Embed Links`, `Add Reactions` in the channel where the poll will be located;

:::

:::premium

This module provides [**Husqy+**](https://husqy.xyz/premium) benefits!

:::

The polls module provides the most advanced way of asking your community important questions and getting their opinion on it. By creating polls with the polls module you provide your users with an easy way of interacting while also keeping it anonymous if desired. The polls module also integrates perfectly with the logging module, the serverstats module and Discord polls so you don't miss any polls!

## Enabling the module

In order to enable the polls module you have to navigate to the [Polls dashboard](#additional-info--commands). There you will be prompted with an option to enable the polls module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the polls module, navigate to the [Polls dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Changing the settings of the module

To change the settings of the polls module, navigate to the [Polls dashboard](#additional-info--commands). Here, different settings will be shown which can be changed. After changing press the `Save` button in the changes banner at the bottom of the screen to save the changes. The settings which can be changed are:

1. `Save duration timeout`: The amount of seconds to save polls after they have been ended;
2. `Delete ended Discord polls`: If Discord polls should be deleted after they have ended (complies with save duration timeout);
3. `Delete ended Husqy polls`: If Husqy polls should be deleted after they have ended (complies with save duration timeout);

## Polls

Polls are, like the name of the module indicated, the core of this module. Polls can be used to ask questions where users can pick from a set of answers defined by the creator of the poll. Polls can have an optional wait duration, be anonymous, allow multiple votes per answers or even multiple answers. Within the polls module we differentiate between different poll types:

1. `Discord polls`;
2. `Husqy polls`;

### Poll type: Discord

Discord polls are Discords implementation of polls in servers and are integrated with the Discord client for everybody to use, thats also why there are not limits to these polls in Husqy. You also get the ability to create Discord polls from the [Polls dashboard](#additional-info--commands). They do however, lack some features Husqy polls have which makes Husqy polls a more powerful tool to use (more on that later). Discord polls are integrated with the polls module, meaning, they are tracked by Husqy so you can still use the same commands or even the dashboard to look at the status of the poll. When a Discord poll is created, Husqy assigns it a poll ID on the Husqy backend just like with Husqy polls, this ID can then be used for interactions, but there may be some features lacking when compared to Husqy polls.

#### Limitations of Discord polls

Discord polls do lack some features when compared to Husqy polls, making Husqy polls a more powerfull and the recommended poll type to use. Some things they lack are:

- Discord polls do not support anonymous votes;
- Discord polls do not support multiple votes per answer per user;
- Discord polls can not be closed by Husqy when the poll is not sent by Husqy;
- Discord polls can not be edited after creation;

:::warning

Discord polls require a poll duration between 1 hour and 768 hours;

:::

### Poll type: Husqy

Husqy polls are a custom implementation of polls in line with other Husqy modules so you get the experience you are used to. Husqy polls provide the following features:

- Give polls a more extensive description than only the question;
- Have more answers (when using [**Husqy+**](https://husqy.xyz/premium));
- Vote based on emojis, buttons or a dropdown;
- Make voting anonymous;
- Allow multiple votes per answer;
- Allow multiple answers per user;

Alternatively Husqy polls can be time based, meaning they end after a certain period of time, or they can be manual, meaning they have to be closed by the owner of the poll. When a poll is ended, either by time or manually, the poll message will be edited to show the results and who voted for which answer. This last part is only for when the poll is not anonymous of course.

:::tip

- Husqy polls do not require a poll duration. This is useful for polls where the duration is still unknown;
- Husqy polls which are time based can be closed earlier that configured by closing it manually;

:::

:::warning

The free version of Husqy has a limit of 1 Husqy poll per server;

:::

## Poll answers

A poll answer is very straight forward, an answer which is linked to the poll that members can vote for. Answers can be based on: Emoji reactions, buttons or a dropdown for Husqy polls. Each answer will be displayed in the poll and members have the ability, by interacting with the emoji, button or dropdown, to add a vote or remove votes on that answer.

:::tip

Buttons and dropdowns send confirmation messages as ephemeral messages, meaning only the user who voted can see and interact with it. This de-clutters your channel.

:::

:::warning

- The free version of Husqy has a limit of 5 answers per Husqy poll per server;
- Emoji answers create messages for voting which everybody can see;

:::

### Closing polls

Closing a poll can be done via two ways:

- Using the `/polls close` command from within the discord server and selecting the ID of the poll;
- By using the [Polls dashboard](#additional-info--commands), searching for the poll in the table, and clicking `close`;

:::note

Closing a poll can only be done by the owner of a poll. Not even server administrators can close polls they do not own.

:::

### Editing polls

Some aspects of Husqy polls can be edited after they have been created, these aspects are:

- The question;
- The description;
- If the poll is anonymous;
- If the poll allows multi select;
- The maximum number of votes per user per answer;

Editing a poll can only be done by using the [Polls dashboard](#additional-info--commands). Here you can search for the poll in the table and click `View details`. This will take you to the details page of the poll where you can make the changes and save them. The changes will also be reflected in the message.

:::note

Editing a poll can only be done by the owner of a poll. Not even server administrators can edit polls they do not own.

:::

:::warning

- Discord polls can not be edited after creation;
- Answers to a poll can not be added or removed;

:::

### Poll details

Getting details of a poll can be useful for when you want a status update or are interested in the users who have voted (only visible when the poll is not anonymous). Getting these details can be done in two ways:

- Using the `/polls details` command from within the discord server and selecting the ID of the poll. Husqy will get the current details and send them to the channel;
- By using the [Polls dashboard](#additional-info--commands), searching for the poll in the table, and clicking `View details`;

:::tip

Everybody can view details of a poll. This does not require you to be an owner.

:::

## Voting

Voting for polls is different based on the poll type and the poll answer type. Below you can find out how voting works based on the configuration of a poll.

### Discord polls

Voting for a Discord poll is very straightforward:

1. Find the answer(s) you want to vote for;
2. Select the answer(s);
3. Press vote;

Removing a vote is also very straightforward, after voting, press the `Remove vote` button in the poll. This will remove all votes and allow you to vote again.

### Husqy polls - Emoji

Voting for Husqy emoji polls require a bit more steps but are designed to be very user friendly:

1. Find the answer you want to vote for;
2. Press the corresponding emoji;
3. Husqy will send a message asking you if you want to add a vote to that answer or remove your votes for that answer;
4. Press the `Add` button attached to the message;

Removing votes from an answer requires almost the same steps, instead of clicking the `Add` button, click the `Remove` button.

### Husqy polls - Buttons & dropdowns

Voting for Husqy buttons and dropdown polls also require a bit more steps but again, are designed to be as user friendly as possible:

1. Find the answer you want to vote for;
2. Press the corresponding button or select it from the dropdown;
3. Husqy will send an ephemeral message only you can see asking you if you want to add a vote to that answer or remove your votes for that answer;
4. Press the `Add` button attached to the message;

Removing votes from an answer requires almost the same steps, instead of clicking the `Add` button, click the `Remove` button.

## Additional info & commands

:::info

- To go to the Polls dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Polls_** tab;

:::

:::info Available commands

This module provides the following commands:

- `/polls create`;
- `/polls delete`;
- `/polls close`;
- `/polls details`;
- `/polls info`;

:::
