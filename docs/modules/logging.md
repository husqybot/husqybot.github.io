---
description: Logging
title: Logging
sidebar_label: Logging
keywords:
  - docs
  - modules
  - logging
sidebar_position: 1
toc_max_heading_level: 6
---

Husqy Logging module enables you to keep track of different activities and interactions with Husqy in your server. It allows you to select the logging options based on your servers needs and posts them in a selected channel.

:::tip

Using Discord channel permissions you can choose to make the logs open to your server members or keep the log for yourself.

:::

:::warning

Husqy needs to have the **_View channel_** and **_Send messages_** permission in the logging channel!

:::

## Setting up

In order to enable the Logging module you have to navigate to the [Logging dashboard](#additional-info). There you will be prompted with an option to enable the Logging module. After pressing to enable the module, a sidebar will appear for validation of enabling the module. In this sidebar you will have to select the channel which you want to use as the logs channel.

## Disabling the logging module

To disable the Logging module, navigate to the [Logging dashboard](#additional-info) and click the "**_here_**" button at the top of the page to disable the module and delete the settings.

## Changing the logs channel

The [Logging dashboard](#additional-info) is the place to change the settings of the logging module. When the Logging module is enabled, this page shows you all current settings categorized in the same way as in [What can be logged](#what-can-be-logged). To change settings, simply select the category, change the settings and press Save.

## What can be logged?

<details>
  <summary>General events</summary>

1. `log_errors`: Logs when an error with Husqy occurs with an Husqy interaction;
2. `log_info`: Logs when one of the info commands is used;
3. `log_settings_changed`: Logs when a Husqy setting for the server is changed;
4. `log_support`: Logs when the support command is used;
5. `log_modules`: Logs when a module is enabled/disabled or changed;

</details>

<details>
  <summary>Channel events</summary>

1. `log_channel_create`: Logs when a new channel is created;
2. `log_channel_delete`: Logs when a channel is deleted;
3. `log_channel_update`: Logs when a channel is updated;
4. `log_clear_messages`: Logs when an amount of messages in a channel is deleted using the Husqy /mod_server clear_messages command;
5. `log_slowmode`: Logs when slowmode is enabled or disabled in a channel using the Husqy /mod_server slowmode command;
6. `log_channel_lock`: Logs when a channel is locked for use;
7. `log_channel_unlock`: Logs when a channel is unlocked for use;
8. `log_channel_join`: Logs when a user joins a channel;
9. `log_channel_leave`: Logs when a user leaves a channel;
10. `log_channel_move`: Logs when a user moves from one channel to another channel;

</details>

<details>
  <summary>Role events</summary>

1. `log_role_create`: Logs when a new role is created;
2. `log_role_delete`: Logs when a role is deleted;
3. `log_role_update`: Logs when a role is updated;

</details>

<details>
  <summary>User events</summary>

1. `log_user_warn_create`: Logs when a user is warned using Husqy;
2. `log_user_warn_delete`: Logs when a warning to a user is withdrawn;
3. `log_kick_events`: Logs when a user is kicked from the server;
4. `log_vckick`: Logs when a user is kicked from the voice channel using Husqy’s /mod_user vckick command;
5. `log_move`: Logs when a user is moved to another voice chanel using Husqy’s /mod_user move command;
6. `log_ban_create`: Logs when a user is banned from the server;
7. `log_ban_delete`: Logs when a users ban is withdrawn;
8. `log_tempmute`: Logs when a user is temporarily muted using Husqy’s /mod_user tempmute command;
9. `log_temptimeout`: Logs when a user has recieved a temporary time out using Husqy’s /mod_user temptimeout command;
10. `log_user_server_muted`: Logs when a user is server muted;
11. `log_user_server_unmuted`: Logs when a users server mute is lifted;
12. `log_user_server_deafend`: Logs when a user is server deafend;
13. `log_user_server_undeafend`: Logs when a users server deafen is lifted;
14. `log_user_deafend`: Logs when a user deafens themselfs;
15. `log_user_undeafend`: Logs when a users deafen is lifted by themselves;
16. `log_user_muted`: Logs when a user muted themselves;
17. `log_user_unmuted`: Logs when a users mute is lifted by themselves;
18. `log_user_stream_started`: Logs when a user started sharing their screen;
19. `log_user_stream_stopped`: Logs when a users stops sharing their screen;
20. `log_user_camera_stream_started`: Logs when a user turns on their camera;
21. `log_user_camera_stream_stopped`: Logs when a user turns off their camera;

</details>

<details>
  <summary>Miscellaneous events</summary>

1. `log_games`: Logs when a Husqy game is played;
2. `log_voice_message_transcribe`: Logs when a Discord audio message in a text channel is transcribed to text;
3. `log_meme`: Logs when a random meme is requested;

</details>

<details>
  <summary>Audio events</summary>

1. `log_audio_join`: Logs when Husqy joins a voice channel;
2. `log_audio_leave`: Logs when Husqy leaves a voice channel;
3. `log_audio_stop`: Logs when the audio playback is stopped by a user;
4. `log_audio_skip`: Logs when the current playing song is skipped by a user;
5. `log_audio_pause`: Logs when a user requested to pause the current playing song;
6. `log_audio_resume`: Logs when the current playing song is resumed after a pause request;
7. `log_audio_nowplaying`: Logs when the current playing song is requested;
8. `log_audio_queue`: Logs when the current queue is requested;
9. `log_music_play`: Logs when a new song is added to the queue;
10. `log_music_playnext`: Logs when a new song is added to the queue directly after the current playing song;
11. `log_music_tts`: Logs when a text-to-speech message is added to the queue;
12. `log_music_remove`: Logs when a song is removed from the queue;
13. `log_music_shuffle`: Logs when the queue is shuffled;
14. `log_music_search`: Logs when a source is searched for a query;
15. `log_radio_play`: Logs when radio is played;
16. `log_audio_seek`: Logs when a user requested to seek to a specified timestamp;
17. `log_audio_loop`: Logs when the loop is enabled/disabled for the current song;
18. `log_audio_volume`: Logs when the volume is changed;
19. `log_audio_restart`: Logs when a song is requested to restart by a user;

</details>

<details>
  <summary>Utils events</summary>

1. `log_customembed_send`: Logs when a custom created embed is send to a channel using the /utils custom_embed send command;
2. `log_customembed_create`: Logs when a custom embed is created using the /utils custom_embed create command;
3. `log_custommodal_create`: Logs when a custom modal is created using the /utils custom_modal create command;
4. `log_custommodal_preview`: Logs when a custom modal is preview using the /utils custom_modal preview command;
5. `log_color_viewed`: Logs when a color is viewed using the /utils color view command;
6. `log_domain_validated`: Logs when a domain has been validated;
7. `log_qr_generated`: Logs when a QR-code has been generated;
8. `log_time_converted`: Logs when a time has been converted;

</details>

<details>
  <summary>Welcoming events</summary>

1. `log_welcoming_response_create`: Logs when a new welcoming response has been created;
2. `log_welcoming_response_delete`: Logs when a welcoming response has been deleted;
3. `log_welcoming_timedrole_create`: Logs when a new timedrole has been created;
4. `log_welcoming_timedrole_delete`: Logs when a timedrole has been deleted;
5. `log_welcoming_check_welcome_dm`: Logs when a welcome message to a DM has been checked;
6. `log_welcoming_check_welcome_channel`: Logs when a welcome message to a channel has been checked;
7. `log_welcoming_check_leave_channel`: Logs when a leave message to a channel has been checked;
8. `log_welcoming_check_role_on_join`: Logs when autorole roles have been checked;
9. `log_welcoming_check_role_timed`: Logs when a timed role is added to a member;

</details>

<details>
  <summary>Socials events</summary>

1. `log_socials_reddit_remove`: Logs when a Subreddit is removed from the monitor list;
2. `log_socials_reddit_add`: Logs when a new Subreddit is added to the monitor list;
3. `log_socials_rss_remove`: Logs when an RSS Feed is removed from the monitor list;
4. `log_socials_rss_add`: Logs when a new RSS Feed is added to the monitor list;
5. `log_socials_twitch_remove`: Logs when a Twitch account is removed from the monitor list;
6. `log_socials_twitch_add`: Logs when a new Twitch account is added to the monitor list;
7. `log_socials_youtube_remove`: Logs when a YouTube channel is removed from the monitor list;
8. `log_socials_youtube_add`: Logs when a new YouTube channel is added to the monitor list;

</details>

<details>
  <summary>Reactionroles events</summary>

1. `log_reactionroles_panel_create`: Logs when a new reactionrole panel has been created;
2. `log_reactionroles_panel_delete`: Logs when a reactionrole panel is deleted;
3. `log_reactionroles_panel_edit`: Logs when a reactionrole panel is edited;
4. `log_reactionroles_panel_entry_create`: Logs when a reactionrole entry is added to a panel;
5. `log_reactionroles_panel_entry_delete`: Logs when a reactionrole entry is deleted from a panel;
6. `log_reactionroles_panel_entry_edit`: Logs when a reactionrole entry is edited;

</details>

<details>
  <summary>Reminder events</summary>

1. `log_reminder_add`: Logs when a user created a new reminder;
2. `log_reminder_delete`: Logs when a user deleted a reminder;
3. `log_reminder_list`: Logs when a user requested the list of their reminders;

</details>

<details>
  <summary>Tags events</summary>

1. `log_tag_create`: Logs when a new tag is created;
2. `log_tag_delete`: Logs when a tag is deleted;
3. `log_tag_edit`: Logs when an existing tag is edited;
4. `log_tag_used`: Logs when a tag is used;

</details>

<details>
  <summary>Autoresponder events</summary>

1. `log_autoresponder_trigger_created`: Logs when an new autoresponder trigger is created;
2. `log_autoresponder_trigger_deleted`: Logs when an autoresponder trigger is deleted;
3. `log_autoresponder_trigger_edited`: Logs when an autoresponder trigger is edited;
4. `log_autoresponder_trigger_hit`: Logs when one or more autorsponder trigger is hit;
5. `log_autoresponder_response_created`: Logs when an new autoresponder response is created;
6. `log_autoresponder_response_deleted`: Logs when an autoresponder response is deleted;

</details>

<details>
  <summary>Tempchannels events</summary>

1. `log_creation_channel_create`: Logs when new creation channels are created;
2. `log_creation_channel_delete`: Logs when creation channels are deleted;
3. `log_creation_channel_edit`: Logs when creation channels are edited;
4. `log_tempchannel_check_create`: Logs when a join event is checked for creating a tempchannel;
5. `log_tempchannel_check_delete`: Logs when a leave event is checked for deleting a tempchannel;
6. `log_tempchannel_name_edited`: Logs when a tempchannels name is edited;
7. `log_tempchannel_user_limit_edited`: Logs when a tempchannel user limit is edited;
8. `log_tempchannel_slowmode_edited`: Logs when a tempchannels slowmode is edited;
9. `log_tempchannel_bitrate_edited`: Logs when a tempchannels bitrate is edited;
10. `log_tempchannel_age_restriction_edited`: Logs when a tempchannels age restriction setting is edited;
11. `log_tempchannel_region_edited`: Logs when a tempchannels region is edited;
12. `log_tempchannel_claimed`: Logs when a tempchannels ownership is claimed*;
13. `log_tempchannel_transferred`: Logs when a tempchannels ownership is transferred*;
14. `log_tempchannel_deleted`: Logs when a tempchannel set is deleted**;
15. `log_tempchannel_block_rule_added`: Logs when a block rule is added to a tempchannel*;
16. `log_tempchannel_block_rule_removed`: Logs when a block rule is removed from a tempchannel*;
17. `log_tempchannel_trust_rule_added`: Logs when a trust rule is added to a tempchannel*;
18. `log_tempchannel_trust_rule_removed`: Logs when a trust rule is removed from a tempchannel*;

<br />
\* This event is only logged when it is run using the corresponding Husqy command or API (if available)
<br />
\** This event is only logged when it is run using the corresponding Husqy command or API (if available). If a channel is deleted manually, the log_channel_delete event is fired.

</details>

<details>
  <summary>Giveaway events</summary>

1. `log_giveaway_create`: Logs when a giveaway has been created;
2. `log_giveaway_delete`: Logs when a giveaway has been deleted;
3. `log_giveaway_reroll`: Logs when a giveaway has been rerolled;

</details>

## Additional info

:::info

- To go to the Logging dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_Logging_** tab;

:::