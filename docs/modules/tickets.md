---
description: Tickets
title: Tickets
sidebar_label: Tickets
keywords:
  - docs
  - modules
  - autoresponder
sidebar_position: 7
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `Administrator` permissions to make sure the tempchannels module works properly;
- Make sure the `Husqy` role is (default bot role) at the top of the roles list;

:::

:::tip Supported variables

- The panel message (or ticket create message) supports: `Channel variables`, `Server variables` and `Other variables`
- The form content supports: `Tickets variables`, `User variables`, `Server variables` and `Other variables`
- The channel name for new tickets (or ticket opened name) supports: `Tickets variables`, `User variables`, `Server variables` and `Other variables`
- The new ticket message (or ticket opened message content) supports: `Tickets variables`, `User variables`, `Channel variables`, `Server variables` and `Other variables`

:::

:::premium

This module provides [**Husqy+**](https://husqy.xyz/premium) benefits!

:::

The tickets module is the perfect way to give support to server members using your product or service. You get full control over the ticket types and configuration of a ticket panel. It allows you server member to create a ticket and get the help they need.

## Enabling the module

In order to enable the tickets module you have to navigate to the [Tickets dashboard](#additional-info--commands). There you will be prompted with an option to enable the tickets module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the tickets module, navigate to the [Tickets dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.


## Panels

A Husqy ticket panel is essentially a message in Discord where ticket type buttons or a dropdown containing ticket types are located. Server members can use the buttons or the dropdown to start the creation of a new ticket to get the help they need. Ticket panels are required to allow members to create a ticket. A ticket panel can be one of three types (which can be changed after creating a ticket panel):

1. `Create button`: The panel only consists of a generic "Create ticket" button which can not be changed or configured. Most basic but clear setup;
2. `Ticket type buttons`: The panel consists of different buttons related to a ticket type;
3. `Dropdown`: The panel consists of a dropdown with different ticket types as options;
<br />

:::tip

- Use the Husqy embed utility to create an embed message to use in some configuration of the panel.
- Use the Husqy modal utility to create an modal form to use in the form content.

:::

:::warning

The free version of Husqy has a limit of 1 panel per server.

:::

### Creating a panel

A ticket panel can be created by navigating to the [Tickets dashboard](#additional-info--commands) and pressing the `Create new panel` button. You will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Panel type: The type of the ticket panel;
- Form enabled: If a form with questions should be showed to users before creating the ticket;
- Thread mode enabled: If tickets should be created in private thread channels;
- Create message category: The category where the channel containing the ticket panel will be created/is located;
- Create message channel: The channel where the ticket panel will be created (must be in the create message category);
- Ticket opened channel name: The name to use for the channel when new tickets are created;
- Create message content: The content of the ticket panel message;
- Ticket opened message content: the content of the starting message to send when new tickets are opened;
- Support engineer role: The role to use for the support engineer for this panel;
- Form configuration (if form is enabled): The configuration to use for the form;
- Open tickets categories (if thread mode is disabled): The categories to use for creating new channels for tickets;
- Closed tickets categories (if thread mode is disabled): The categories to use for moving ticket channel when tickets are closed.

:::note

- Husqy will create private thread channels, when thread mode is enabled, under the `Create message channel` and will invite the creator of the ticket and all users with the linked support engineer role. If no one has the linked support engineer role, the server owner will be invited.
- If thread mode is disabled Husqy will create channels and add permission overwrites so no one except the creator of the ticket and people with the linked support engineer role can see the channel.

:::

:::warning

There is a limit of 50 channels per category, so make sure you have configured enough open and closed tickets categories. If not, tickets may not be created and/or moved.

:::

### Deleting a panel

A ticket panel can be deleted by navigating to the [Tickets dashboard](#additional-info--commands) and pressing the `Delete panel` button on the target panel to delete. The panels settings, linked ticket types and linked tickets will automatically be deleted.

### Edit a panel

A panel can be edited by changing the settings in the panels box and pressing the `Save changes` button. The panel settings will be changed and the panel message will be updated in Discord.

## Ticket types

Ticket types are what allow you to distinguish different tickets by a category like: billing, bug reports, etc. You get full control over these ticket types and can add them to a ticket panel to allow users to get the help they need and allow your support engineers to quickly see what support is needed.

:::warning

- Ticket types can only be used when a ticket panel type is `Ticket type buttons` or `Dropdown`.
- The free version of Husqy has a limit of 5 ticket types per server.

:::

### Adding ticket type to a panel

A ticket type can be added to a panel by navigating to the [Tickets dashboard](#additional-info--commands) and pressing the `Manage custom ticket types` button on the panel where the ticket type needs to be added. You will be redirected to a new page where an overview of current active ticket types of that panel is shown. Here press the `Add ticket type to panel` button. You will be redirected to a new page where a form with the settings needs to be filled in. This form includes:

- Emoji: The emoji to use for the ticket type;
- Label: The label to use for the ticket type;
- Description: A description of the ticket type;

:::note

- A label is required when no emoji is selected;
- The description of a ticket type can be filled in for both a `Ticket type buttons` panel and a `Dropdown` panel but will only be visible on a `Dropdown` panel.

:::

### Removing ticket type from a panel

A ticket type can be removed from a panel by navigating to the [Tickets dashboard](#additional-info--commands) and pressing the `Manage custom ticket types` button on the panel where the ticket type needs to be removed. You will be redirected to a new page where an overview of current active ticket types of that panel is shown. Here located the ticket type to remove and press the `Remove ticket type` button. The ticket type will be deleted immediately:

## Tickets

Tickets can be created by member and provide them and the support engineers with a private channel to speak about and solve this issue they are having. Tickets can be deleted by a server administrator or will automatically be deleted after 31 days since the ticket has been closed.

:::warning

The free version of Husqy has a limit of 10 active tickets per per server. An active ticket is a ticket that is not closed.

:::

### Creating a ticket

A server member can create a ticket by locating the ticket panel and:

- Clicking the `Create ticket` button on a `Create button` panel;
- Clicking the ticket type button corresponding with their problem on a `Ticket type buttons` panel;
- Selecting the ticket type corresponding with their problem on a `Dropdown` panel;

When this is done a form will be shown to the member with questions they must/can answer, if the form is enabled on that panel. After filling in the form, the ticket will be created. If the form is not enabled, the ticket will be created without showing a form.

### Ticket interactions

A ticket has several interactions, they are explained down below.

#### Claim

A ticket can be claimed by a support engineer to solve by using the `Claim ticket (support engineer)` button on the starting message of a ticket or by using the `/tickets claim` command and inserting the ID of the ticket to claim.

#### Transfer

A ticket can be transferred to another support engineer by using the `Transfer ticket (support engineer)` button on the starting message (when a ticket has been claimed) and following the provided steps or by using the `/tickets transfer` command and inserting the ID of the ticket to claim and the member to transfer it to. The target member must of course have the linked support engineer role.

#### Close

A ticket can be closed when it has been solved by using the `Close ticket` button on the starting message or by using the `/tickets close` command and inserting the ID of the ticket to close. Closing the ticket can be done by the support engineer who has claimed the ticket or by the creator of the ticket.

After a ticket has been closed, the threads channel will be closed and locked when threads is enabled. If threads is not enabled the channels permissions will be edited.

:::note

- A ticket that has been closed will be deleted after 31 days. You can reopen a ticket within these 31 days to prevent it from being deleted. 
- When it has been closed after reopening, the 31 days will begin (timer restarts).

:::

#### Reopen

A ticket can be reopened after closing by using the `/tickets reopen` command and inserting the ID of the ticket to reopen. To do this the ticket must still be available and not be deleted. Reopening the ticket can be done by the support engineer who has claimed the ticket or by the creator of the ticket.

After a ticket has been reopened, the threads channel will be opened and unlocked when threads is enabled. If threads is not enabled the channels permissions will be edited.

:::note

- A ticket which has been deleted can not be reopened;
- Closed tickets are automatically deleted after 31 days.
- A reopened ticket that has been closed will again be deleted after 31 days (timer restarts)

:::

#### Delete

A ticket can be deleted using the `Delete ticket` button on the starting message or by using the `/tickets delete` command and inserting the ID of the ticket to delete. Deleting a ticket will delete all related data immediately and can not be reverted. After a ticket has been deleted it CAN NOT be reopened.

:::warning

Only server administrators can delete tickets.

:::

#### Transcribe

A ticket can, as long as it is not deletd, be transcribed using the `/tickets transcribe` command and inserting the ID of the ticket to transcribe. Transcribing a ticket can be done for both open and closed tickets. Transcriptions for tickets currently support only button components to be visible. Some styling may vary.

:::warning

Only the current support engineer and the ticket creator can transcribe the ticket.

:::

## Ticket variables

Ticket variables are additional Husqy variables which can only be used in the tickets module. Currently the following ticket variables are supported:

1. `<ticket_id>`: The ID of the ticket that has been be created (f.e. f2708a22-5e3e-4264-a5fc-2ba495fa6ea1);
2. `<ticket_type>`: The type of the ticket that has been used to create the ticket;
3. `<ticket_type_description>`: The description of the ticket type that has been used to create the ticket;

## Additional info & commands

:::info

- To go to the Tickets dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Tickets_** tab;

:::

:::info Available commands

This module provides the following commands:

- `/tickets delete`;
- `/tickets reopen`;
- `/tickets claim`;
- `/tickets close`;
- `/tickets transfer`;
- `/tickets transcribe`;

:::