---
description: An overview of the Husqy rules module
title: Rules
sidebar_label: Rules
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Modules
  - Rules
sidebar_position: 11
showLastUpdateTime: true
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `View Channel`, `Send Messages`, `Embed Links` permissions in the channel where verification messages will be send;
- Make sure Husqy has the `Manage roles` permission in the Discord server;
- Make sure the `Husqy` role is (default bot role) at the top of the roles list;

:::

:::tip Supported variables

The Husqy rules module supports: `User variables`, `Server variables` and `Other variables` inside the different server rules.

:::

:::premium

This module provides [**Husqy+**](https://husqy.xyz/premium) benefits!

:::

Rules in a Discord server are one of the most important things to protect your members. The Husqy rules module is the best way to make sure your server members are up-to-date with your servers rules. The rules module supports two different actions: accepting and denying, more on this later. It works seamlessly with the verifier module.

## Enabling the module

In order to enable the rules module you have to navigate to the [Rules dashboard](#additional-info--commands). There you will be prompted with an option to enable the rules module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the verifier module, navigate to the [Rules dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Rules settings

When enabling the rules module, it gets enabled with some basic information which, of course, can be changed by a server administrator:

- `Rules channel`: The channel where the rules will be sent. When the rules channel is a text channel inside a server. The rules message will be sent once (and kept being updated) where users can interact with it multiple times;
- `Rules actions enabled`: If the rules actions (accept & deny) should be enabled;
- `Rules denied action`: The action that should be taken when a user denies the rules;
- `Accepted roles`: The roles that will be given to a member after accepting the rules;
- `Denied roles`: The roles that will be given to a member after denying the rules (if the rules denied action is "Add roles");

### Adding a rule

Using the dashboard, navigate to the [Rules module](#additional-info--commands) page and press the `View & configure rules` button in the top right of the screen. You will be redirected to a new page where a table overview of all rules will be shown. To add a rule, press the `Add rule` button at the top right of the screen, You will be redirected to a page with a form where the rule text can be filled

Using slash commands, run the command `/rules add` and give the rule text as the commands `text` parameter.

:::warning

- Only the server owner or server administrators can add rules. This goes for both the slash commands as the dashboard.
- The free version of Husqy has a limit of 3 rules per server.

:::

### Deleting a rule

Using the dashboard, navigate to the [Rules module](#additional-info--commands) page. Press the `View & configure rules` button in the top right of the screen. You will be redirected to a page where a table overview of all rules will be shown. Here you can press the `Remove` button in the interactions column of the target rule to remove it immediately.

Using slash commands, run the command `/rules remove` and pick the rule from the autocomplete options. The rule will then be deleted immediately.

:::warning

- You must pick from the autocomplete options, these have the ID of the rules linked to prevent accidental deletion of the wrong rule.
- Only the server owner or server administrators can remove rules. This goes for both the slash commands as the dashboard.

:::

### Listing rules

Using the dashboard, navigate to the [Rules module](#additional-info--commands) page. Press the `View & configure rules` button in the top right of the screen. You will be redirected to a page where a table overview of all rules will be shown.

Server members can also use the `/rules list` command. This command can be used by all server members and is NOT restricted to administrators. Using this command will fetch the up-to-date list of server rules configured in the server. When the rules channel is set to a text channel in a server, this message is also updated when new rules are added or existing rules are removed. Viewing this message is yet another way of listing all current server rules.

## Accepting and denying rules

When a user joins the server with the rules module enabled, they will (if configured) receive a DM message from Husqy with the rules and (if configured) the option to accept or deny the rules. If the rules channel is configured as a text channel inside the server, they will not receive a DM but can (if configured) accept or deny the rules. Accepting or denying the rules can have consequences for the user.

:::tip

Users will receive a private message (inside the servers rules channel or their DM) confirming that the action has succeeded.

:::

:::note

When accepting or denying the rules, the green "Accept" button and red "Deny" button will be removed from the message when the rules channel is the users DM. To allow users to re-evaluate their choice, retrigger the rules by using the `/rules retrigger` command.

:::

### Accepting

Accepting the rules can be done by clicking the green `Accept` button attached to the message. By accepting the rules they will receive the roles configured.

### Denying

Denying the rules can be done by clicking the red `Deny` button attached to the message. Denying the rules can have different consequences based on the configuration of the module for the server. The rules module provides you with three different denied actions: No action, Add roles and Kick.

1. `No action`: No action will be taken when the user denies the roles;
2. `Add roles`: The specified denied roles will be added to the user;
3. `Kick`: The user will be kicked from the server;
<br/>

:::note

No matter what action is configured, the opposite roles will be removed. F.e. denying the rules after earlier acceptance removes the accepted roles and vice versa.

:::

## Retriggering rules

A server administrator can use the `/rules retrigger` command to retrigger the rules for a member. This command will only start the retrigger of the rules and will NOT remove any configured accepted or denied role ids. After this command is used, the target user will follow the normal steps as they would when joining a server with the rules module enabled.

:::warning

- The `/rules retrigger` command can only be used when the rules channel is configured as a users DM.
- Opposite fo the `/verifier entry retrigger` command, this command only retriggers the sending of the rules and does not require a user to re-verify. If this is desired, use the `/verifier entry retrigger` command provided by the verifier module.

:::

## The rules module and the verifier module

The rules module works seamlessly with the verifier module. When both modules are enabled, the verifier module is handled first and a user must verify. When verification has been successful the rules module will be triggered and the rules will be sent, all based on the configuration of the rules module.

When the verifier module is not enabled, the rules will be sent when the user joins your server.

## Additional info & commands

:::info

- To go to the Rules dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Rules_** tab;

:::

:::info Available commands

This module provides the following commands:

- `/rules add`;
- `/rules remove`;
- `/rules list`;
- `/rules retrigger`;

:::