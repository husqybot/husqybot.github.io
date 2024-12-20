---
description: User variables
title: User variables
sidebar_label: User variables
keywords:
  - docs
  - user
  - variables
sidebar_position: 1
toc_max_heading_level: 6
---

User variables are, as the name implies, variables related to the user of the event where the user variables are used.

## All User variables

1. `<user_id>`: The ID of the user who triggered the event (f.e. 868946730878632047);
2. `<user_mention>`: Will mention the user who triggered the event;
3. `<user_nickname>`: The nickname of the user or No nickname if no nickname is set;
4. `<user_display_name>`: The display name of the user (this will be the nickname if set. If there is no nickname set, this will return the global name. If there is no global name available it will be username of the user);
5. `<user_is_deaf>`: The deafend status of the user (this will be Deafend or Not deafend);
6. `<user_is_mute>`: The muted status of the user (this will be Muted or Not muted);
7. `<user_is_pending>`: If the user has passed the servers screening requirements (this will be Pending or Not pending);
8. `<user_joined_at>`: The date and time of when the user has joined the server based on the timezone setting set by the server. The format will be dd-mm-yyyy HH:MM:SS;
9. `<user_premium_since>`: The date and time of when the user has become a premium server member based on the timezone setting set by the server. The format will be dd-mm-yyyy HH:MM:SS;
10. `<user_roles>`: This will mention all roles that have been assigned to the user;
11. `<user_communication_disabled_until>`: Will be None or the timeout set before this user is able to communicate again;
12. `<user_avatar_url>`: The URL of the users avatar;
<br />

:::warning

Mention variables, can not be used in the footer of embed since they dont support mention strings!

:::