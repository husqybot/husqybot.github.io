---
description: An overview of the Husqy reminders module
title: Reminders
sidebar_label: Reminders
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Modules
  - Reminders
  - Quick
  - Scheduled
  - Repeated
sidebar_position: 14
showLastUpdateTime: true
toc_max_heading_level: 6
---

:::note Permissions check

- Make sure Husqy has the `Manage channels`, `View Channel`, `Send Messages`, `Embed Links`, `Add Reactions` in the channel where the reminder will be located;

:::

:::tip Supported variables

- The Husqy reminders module supports: `User variables`, `Channel variables`, `Server variables` and `Other variables` inside title and description of quick reminders.
- The Husqy reminders module supports: `Channel variables`, `Server variables` and `Other variables` inside content of repeated and scheduled reminders.

:::

:::premium

This module provides [**Husqy+**](https://husqy.xyz/premium) benefits!

:::

The reminders module provides the best way of reminding users of upcoming events, tips or other relevant info they may need. It takes away repetitiveness by allowing server admins to schedule reminders at a specific time, interval or cron schedule. It also allows your server members to use the quick reminders feature which is a basic reminder option to make your users create quick and easy reminders they want to have for later in the day, week, etc. So wether it is a small reminder you need or you need to schedule messages in your server, the reminders module makes it possible.

## Enabling the module

In order to enable the reminders module you have to navigate to the [Reminders dashboard](#additional-info--commands). There you will be prompted with an option to enable the reminders module, a popup will appear prompting you to confirm the action.

## Disabling the module

To disable the reminders module, navigate to the [Reminders dashboard](#additional-info--commands) and turn of the switch at the top right of the screen, a popup will appear prompting you to confirm the action. All module data related to your server will be deleted.

## Reminders

Reminders are the entities that are created when using this module. Reminders are a powerful tool that, even though they are called reminders, can have different use cases. The modules differentiates three different types of reminders:

1. `Quick`: Reminders that are vey adhoc and can be created by all server members;
2. `Repeated`: Reminders that are repeated based on a schedule;
3. `Scheduled`: One time reminders that are scheduled in advance;

Reminders have a set ID, which can be used for different interactions, scheduled (time or schedule when to trigger), destination to be send to and other different properties which are depended on the type of reminder you create.

### Reminder types explained

#### Reminder type: Quick

Quick reminders are the most basic reminder. They are usable to anyone in the server and provide to following extra properties (besides the properties highlighted earlier):

- `Title`: The title of the reminder;
- `Description`: (Optional) A more extensive description for the reminder;
- `URL`: An optional URL to add to the reminder for easy access;
- `Owner`: The owner of the quick reminder, which is the only one allowed to interact with it;

Quick reminders are configurable using a duration in the format `{delay}{d/h/m/s}` (f.e. 1d, 12m or 30s) when using the `/reminders create quick` command. When using the Husqy dashboard as an administrator, you can give the specified time and date. After sending the reminder the owner gets the ability to complete the reminder or remind them later, more in these interactions later.

:::tip

- The destination of a quick reminder can be set to the DM of the owner;
- Every server member can use quick reminders to make their own adhoc reminders;

:::

:::warning

The free version of Husqy has a limit of 3 quick reminders per user per server.

:::

#### Reminder type: Repeated

Repeated reminders are the more advanced types of reminders, they can be created by server administrators using the Husqy dashboard. They provide the following extra properties:

- `Content is embed`: Wether the content is a Husqy embed configuration;
- `Content`: The content configuration of the message to send, this does support Husqy embed configuration, see [Utils custom embeds](https://husqy.xyz/docs/functions/utils#custom-embeds), make sure you set: content_is_embed to True;
- `Schedule`: The specific schedule to use, this can be a [`cron`](#trigger-type-cron) or [`interval`](#trigger-type-interval) based schedule;

As you can see, these reminder type provide more control over the message when compared to the quick reminders, things like `Title` and `Description` are not used. Although they are called "reminders" they can have different uses for different use cases. You can, for example, use these to schedule messages to channels.

:::warning

- Only administrators can create these types of reminders.
- The free version of Husqy has a limit of 1 repeated reminders per server.

:::

##### Trigger type: Cron

A cron trigger is a trigger based on `crontab`. A crontab, in IT systems, specifies when a `cronjob` needs to be executed. This is also what the cron reminder trigger enables you to do. You can specify:

- `Year`: The years to trigger, f.e. 2025 or 2025,2026;
- `Month`: The months numbers to trigger, f.e. 2 or 3,4;
- `Days`: The days of the months to trigger, f.e. 16 or 15,31;
- `Weeks`: The weeks of the year to trigger, f.e. 32 or 32,52;
- `Days of the week`: The days of the weeks to trigger, f.e. mon or mon,fri;
- `Hours`: The hours of the day to trigger, f.e. 0 or 0,19;
- `Minutes`: The minutes of the hours to trigger, f.e. 1 or 1,23;
- `Seconds`: The seconds of the minute to trigger, f.e. 3 or 3,17;

:::tip

- To learn more about crontab please read: [the crontab specification](https://man7.org/linux/man-pages/man5/crontab.5.html);
- A good source to help you find out the next run is [crontab.guru](https://crontab.guru);

:::

##### Trigger type: Interval

A interval trigger is a trigger based on `interval`. An interval, as it implies, sends the reminders of a set interval. You can specify:

- `Weeks`: The number of weeks to wait;
- `Days`: The number of days to wait;
- `Hours`: The number of hours to wait;
- `Minutes`: The number of minutes to wait;
- `Seconds`: The number of seconds to wait;

All of the values are added up, so specifying 1 week and 1 day in the same configuration, will send the reminder every 1 week and 1 day.

#### Reminder type: Scheduled

Scheduled reminders are a bit of a combination of quick reminders and repeated reminders. Scheduled reminders are a one-time reminder which can be scheduled by server administrators, they provide the option, just like quick reminders, to set a duration (or date and time when using the dashboard) and provide the `Content` and `Content is embed` option just like the repeated reminders.

:::warning

- Only administrators can create these types of reminders.
- The free version of Husqy has a limit of 1 scheduled reminders per server.

:::

### Creating a reminder

Using the dashboard, navigate to the [Reminders dashboard](#additional-info--commands) page and press the `Create reminder` button in the top right of the screen. You will be redirected to a new page where a form for the configuration of the reminder needs to be filled in, depending on the reminder type the form shows the options you can fill for that reminder type;.

Using slash commands, run the create command corresponding to the reminder type you want to create and fill in the parameters you feel the need to.

### Deleting a reminder

To delete a reminder using the dashboard, navigate to the [Reminders dashboard](#additional-info--commands) page, search for the reminder to delete in one of the tables and press the `Delete` button.

Using slash commands, run the `/reminders delete` command and select the ID of the reminder to delete.

:::note

Only the owner of a quick reminder can delete the quick reminder.

:::

### Interacting with quick reminders

Quick reminders allow owners of the reminders to interact with it after sending it. There are two options which you can choose from:

1. `Complete`: completes a reminder and deletes it from the database;
2. `Remind me later`: allows you to set a new duration and will remind you later (this essentially creates a new reminder with the same configuration and deletes the old one);

<br/>

:::note

DM reminders can only be completed and can not be rescheduled

:::

### Reminders lifecycle

#### Quick reminders

Quick reminders are active until the reminder is sent and the owner of the reminder marks it as complete or until the owner of the reminder deletes it completely, until then, the entry will keep active in the database. These entries are counted towards the per user per server limit of quick reminders.

#### Repeated reminders

Repeated reminders are active until deleted by a server administrator, they are not automatically deleted since they are based on a schedule (cron or interval).

#### Scheduled reminders

Scheduled reminders are one-time reminders and are therefore active until being send. When the scheduled reminder is sent it is automatically deleted from the database.

## Additional info & commands

:::info

- To go to the Reminders dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Reminders_** tab;

:::

:::info Available commands

This module provides the following commands:

- `/reminders create quick`;
- `/reminders create repeated_cron`;
- `/reminders create repeated_interval`;
- `/reminders create scheduled`;
- `/reminders delete`;
- `/reminders list`;

:::
