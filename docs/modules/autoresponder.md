---
description: Autoresponder
title: Autoresponder
sidebar_label: Autoresponder
keywords:
  - docs
  - modules
  - autoresponder
sidebar_position: 6
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `View Channel`, `Send Messages`, `Embed Links`, `Add Reactions` permissions in the channels where the responses or triggers might be send;

:::

:::tip Supported variables

- The Husqy autoresponder module supports: `User variables`, `Channel variables`, `Server variables` and `Other variables` inside the responses.

:::

The Husqy autoresponder module allows you to automatically respond to messages your server members send when they comply with a trigger. The trigger can have multiple responses associated with different types (more on that later). This module can help server administrator to offload default response based on server member messages.

## Enabling the module

In order to enable the autoresponder module you have to navigate to the [Autoresponder dashboard](#additional-info--commands). There you will be prompted with an option to enable the autoresponder module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the autoresponder module, navigate to the [Autoresponder dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Triggers

Triggers are the brains of the autoresponder module, they are what define the condition that must be met before a response is sent. They even define which response(s) must be send. Triggers can be set to all or specific channel and all or specific roles and can be made case sensitive or not.

**_Allowed and ignored channels scenarios:_**<br />

- When a trigger has all channels allowed a trigger will check if the channel where the message is send is ignored, if so, it will not send a response;
- When a trigger has specified channels to allow, the trigger will check if the channel where the message is send is in that list, if not, it will not send a response;

**_Allowed and ignored roles scenarios:_**<br />

- When a trigger has all roles allowed a trigger will check if one of the roles a user has is ignored, if one of the roles is ignored, the response will not be send;
- When a trigger has specified roles to allow, the trigger will check if one of the roles a user has is in that list, if not, the response will not be send;


:::tip

- One trigger can have multiple responses linked;
- A wildcard trigger triggers on all message contents;

:::

:::warning

There is currently a limit of 1 trigger per server.

:::

### Creating triggers

Triggers can be created by server administrators using the [Autoresponder dashboard](#additional-info--commands). To create a trigger, press the `Go to triggers` button in the triggers explanation box. On the new page, the current list of triggers will be shown and a button `Create trigger` will be present in the top right of the screen. When pressing the `Create trigger` button you will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Trigger type: the type of the trigger;
- Is case sensitive (when trigger type is not "Wildcard"): wether the trigger is a case sensitive trigger;
- Trigger (when trigger type is not "Wildcard"): the trigger;
- Allowed channels: The channels where the trigger will be checked (can be empty for all channels);
- Ignored channels (when allowed channels is not empty): the channels which will be ignored;
- Allowed roles: The roles where a user must have on of before the linked response(s) is/are send (can be empty for all roles);
- Ignored roles (when allowed roles is not empty): the roles which will be ignored;
- Response Ids: the linked responses to send when all conditions are met;

### Deleting triggers

To delete a trigger, go to the [Autoresponder dashboard](#additional-info--commands) and press the `Go to triggers` button in the triggers explanation box. You will be redirected to a page where all triggers of the server will be shown. Here, press the `Delete trigger` button on the trigger you want to delete. The trigger will be deleted immediately.

### Editing triggers

To delete a trigger, go to the [Autoresponder dashboard](#additional-info--commands) and press the `Go to triggers` button in the triggers explanation box. You will be redirected to a page where all triggers of the server will be shown. Here, change the settings of the target trigger and press the `Save changes` button on the trigger you want to edit. The trigger will be edited immediately.

## Responses

Responses are, like the name suggest, the true content configuration of the message or reaction that will be send when a trigger is met. The responses can be:

1. Normal Discord messages (which support the use of markdown);
2. Discord Embeds;
3. Reactions which will be added the the message that triggered;

<br/>

As stated earlier, each trigger can have more than 1 response defined, opening the door to other possibilities like: reacting to a message and sending the response, or splitting up the response when the responses become to large! A trigger can also have no response linked, causing the trigger to log a message (when the logging module is enabled and the `log autoresponder trigger hit` event is enabled) but not send any response, a new way to get different insights in your server.

:::tip

- The content of the response support the markdown styling Discord has implemented when the response type is "Message";
- The content of the response also supports Husqy variables;
- The response supports custom emoji's when the type is "Reaction";

:::

:::warning

There is currently a limit of 5 responses per server.

:::

### Creating responses

Responses can be created by server administrators using the [Autoresponder dashboard](#additional-info--commands). To create a response, press the `Go to responses` button in the responses explanation box. On the new page, the current list of responses will be shown and a button `Create response` will be present in the top right of the screen. When pressing the `Create response` button you will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Response type: the type of the response;
- Responce content (when response type is "Message" or "Embed"): the content of the response. Can also be Husqy embed JSON configuration.
- Emoji (when response type is "Reaction"): the emoji to attach to the message;

### Deleting responses

To delete a response, go to the [Autoresponder dashboard](#additional-info--commands) and press the `Go to responses` button in the responses explanation box. You will be redirected to a page where all responses of the server will be shown. Here, press the `Delete response` button on the response you want to delete. The response will be deleted immediately.

## Additional info

:::info

- To go to the Autoresponder dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Autoresponder_** tab;

:::

:::info Available commands

This module does not provide any commands.

:::

