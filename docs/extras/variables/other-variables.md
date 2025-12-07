---
description: Other available variables that can be used in Husqy configuration
title: Other variables
sidebar_label: Other variables
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Variables
  - Other variables
  - Husqy configuration
sidebar_position: 4
showLastUpdateTime: true
toc_max_heading_level: 6
---

Other variables are variables which will be used that cannot be categorized under: Users, Channels or servers.

## All Other variables

1. `<current_date>`: The current date based on the timezone setting set by the server. The format will be dd-mm-yyyy;
2. `<current_time>`: The current time based on the timezone setting set by the server. The format will be HH:MM:SS;;
3. `<current_datetime>`: The current date and time based on the timezone setting set by the server. The format will be dd-mm-yyyy HH:MM:SS;
4. `<current_datetime_iso>`: The current date and time based on the timezone setting set by the server. The format will be the ISO format;
   <br />

:::tip

If you want to display a timestamp in a Discord embed footer, you must use the `<current_datetime_iso>` variable!

:::
