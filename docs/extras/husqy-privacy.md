---
description: Husqy privacy
title: Husqy privacy
sidebar_label: Husqy privacy
keywords:
  - docs
  - privacy
sidebar_position: 1
toc_max_heading_level: 6
---

Husqy cares a lot about your privacy, thats why the `/privacy` command was created. The `/privacy` command is a powerful command that gives you the ability to: 1. Prevent Husqy from collecting data in the server, 2. View the amount of data references to you in the server that Husqy has stored, 3. Delete the data references to you in the server that Husqy has stored. The messages created by the `/privacy` command are private to you and Husqy and can't be seen by other members despite being run in a server channel. Usage of this command will also NEVER be logged. Usage of the `/privacy` command does come with consquenses to the use of Husqy services.

:::note

Please read our [Privacy policy](/documents/privacy-policy) and our [Terms of service](/documents/terms-of-service) to get insights in how we handle your data.

:::

:::tip

- Server administrators can view the data collection status of server members and have a shortcut available in the [Privacy Dashboard](#additional-information) to DM that member. This can be used for checking why services may be limited or why configuration may have changed! They ARE NOT able to change this setting for a user.
- Data associated with you is based on the following: Username, User ID, Nickname, Global name and Display name.

:::

## Viewing your data

With the Husqy privacy configurator it is possible to get the amount of references to your user Husqy has saved linked to the guild where the configurator is executed. Just run the command `/privacy` and press the `Get your data` button. Doing this makes Husqy check your User ID, username, global name, display name and nickname. It returns the data in different embeds (split per module/function) which you can page through.

:::note

Your username, global name, display name and nickname may all have the same value depending on the server. So if all say 3 occurences, they could be the same occurence.

:::

## Removing your data

With the Husqy privacy configurator it is also possible to remove the non-required references to your user Husqy has saved linked to the guild where the configurator is executed. Just run the command `/privacy` and press the `Delete your data` button. Doing this navigates to a new view explaining the effects and two other buttons:

- `Cancel action`: As this option implies, cancels the actions and doesn't delete any data;
- `Delete my data`: Starts the deletion of your data and will return you to the main privacy configurator view. This action CAN NOT be reversed;

Required references are not deleted using this command. These references are needed for Husqy to provide you with some of its needed services but will not be saved longer than nessecary. Leaving the server will delete the data linked to that server.

:::warning

- Some data is not removed, this includes but is not limited to, your warnings in a server, your data collection status and the link between you and a server if you are the owner of that server!
- Removing data may have consequences for currently active functionality, f.e. an active giveaway.

:::

## Changing data collection settings

To change the status of your data collection settings, you can use the `/privacy` command and press the `Change data collection preferences` button. This will show a new privacy view where the options are explained and will give you the following options:

1. `Enable data collection`: This option will allow Husqy to gather your data to provide you with its services (in the server where the command is run);
2. `Disable data collection`: This option will prevent Husqy from gathering your data (in the server where the command is run). This action does however limit your use of Husqy and may limit functionality for other users. N.B. This option DOES NOT delete data, see [Removing your data](#removing-your-data) to accomplish this;
<br />

:::danger

Changes made to the default privacy settings will result in loss of functionality!

:::

## Getting shared servers

Because the `/privacy` command is per server, you must make changes in every server you share with Husqy if desired. To make it easier for you to get all servers you share with Husqy, you can run the `/privacy` command and press the `Get servers shared with Husqy` button. This will provide you with all server names and ID's for the servers you share with Husqy.

## Viewing server members data collection settings

A server administrator can login to the [Privacy Dashboard](#additional-information), this will show them an overview of which users have allowed and disallowed Husqy from collecting their data. Server administators CAN NOT change the data collection status of other members apart from their own data collection status!

:::tip

Other server members DO NOT have the ability to view the data collection status of other server members!

:::

## Additional Information

:::info

- To go to the Privacy dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Privacy_** tab;
- If you have any questions or something related to privacy is not working, please contact our support and let us know. We care about your privacy and want to make sure you are satisfied.

:::