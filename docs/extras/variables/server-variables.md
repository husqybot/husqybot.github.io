---
description: Available server variables that can be used in Husqy configuration
title: Server variables
sidebar_label: Server variables
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Servers
  - Variables
  - Server variables
  - Husqy configuration
sidebar_position: 3
showLastUpdateTime: true
toc_max_heading_level: 6
---

Server variables are, as the name implies, variables related to the server where the event has been triggered.

## All Server variables

1. `<server_id>`: The ID of the server where the variable is used (f.e. 944644082502860820);
2. `<server_name>`: The name of the server (f.e. Official Husqy Support);
3. `<server_created_at>`: The date and time of when the server was created based on the timezone setting set by the server. The format will be dd-mm-yyyy HH:MM:SS;
4. `<server_description>`: The description of the server or Not in use if the server does not have a description set;
5. `<server_afk_timeout>`: The timeout set by the server after which users will be moved to the AFK Channel. The format will be H:MM:SS (f.e. 0:05:00);
6. `<server_mfa_level>`: The level of MFA (multi-factor authentication) required for the users who want to join the server (will be either NONE or ELEVATED);
7. `<server_owner>`: This will mention the owner of the server;
8. `<server_preferred_locale>`: The preferred locale of the server (f.e. en-US);
9. `<server_premium_subscription_count>`: The number of active nitro boosts;
10. `<server_premium_tier>`: The current level of premium tier active in the server (will be NONE, TIER_1, TIER_2 or TIER_3);
11. `<server_verification_level>`: The level of verification required to join the server (will be NONE, LOW, MEDIUM, HIGH or VERY_HIGH);
12. `<server_nsfw_level>`: The NSFW level set by the server (will be DEFAULT, EXPLICIT, SAFE or AGE_RESTRICTED);
13. `<server_public_updates_channel>`: This will mention the channel where admins and moderators recieve notices from Discord or will be Not in use if there is no channel set;
14. `<server_rules_channel>`: This will mention the channel where the servers rules and guidelines are displayed or will be Not in use if there is no channel set;
15. `<server_system_channel>`: This will mention the system channel or will be Not in use if there is no channel set;
16. `<server_widget_channel>`: This will mention the widget channel or will be Not in use if there is no channel set;
    <br />

:::warning

Mention variables, can not be used in the footer of embed since they dont support mention strings!

:::
