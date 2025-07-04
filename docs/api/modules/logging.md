---
description: Husqy API logging module
title: Husqy API logging module
sidebar_label: Logging
keywords:
  - docs
  - api
  - module
  - logging
sidebar_position: 1
toc_max_heading_level: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## General

Endpoints related to general Husqy Modules Logging.

<details>
  <summary>GET - `/modules/logging`</summary>

Home endpoint for the module logging Husqy API.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
This endpoint does not have any parameters.
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "message": "string"
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get the home message: `https://api.husqy.xyz/v1/modules/logging`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/modules/logging/settings`</summary>

This endpoints returns the settings of logging module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to fetch information for |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "settings": {
      "id": 0,
      "guild_id": "string",
      "logs_channel_id": "string",
      "log_errors": true,
      "log_info": true,
      "log_settings_changed": true,
      "log_channel_create": true,
      "log_channel_delete": true,
      "log_channel_update": true,
      "log_clear_messages": true,
      "log_slowmode": true,
      "log_role_create": true,
      "log_role_delete": true,
      "log_role_update": true,
      "log_user_warn_create": true,
      "log_user_warn_delete": true,
      "log_kick_events": true,
      "log_ban_create": true,
      "log_ban_delete": true,
      "log_games": true,
      "log_audio_join": true,
      "log_audio_leave": true,
      "log_audio_stop": true,
      "log_audio_skip": true,
      "log_audio_pause": true,
      "log_audio_resume": true,
      "log_audio_nowplaying": true,
      "log_audio_queue": true,
      "log_music_play": true,
      "log_music_playnext": true,
      "log_music_remove": true,
      "log_music_shuffle": true,
      "log_music_search": true,
      "log_radio_play": true,
      "log_support": true,
      "log_modules": true,
      "log_tempmute": true,
      "log_temptimeout": true,
      "log_customembed_send": true,
      "log_customembed_create": true,
      "log_audio_seek": true,
      "log_music_tts": true,
      "log_vckick": true,
      "log_move": true,
      "log_channel_lock": true,
      "log_channel_unlock": true,
      "log_audio_loop": true,
      "log_channel_join": true,
      "log_channel_leave": true,
      "log_channel_move": true,
      "log_custommodal_create": true,
      "log_custommodal_preview": true,
      "log_user_server_muted": true,
      "log_user_server_unmuted": true,
      "log_user_server_deafend": true,
      "log_user_server_undeafend": true,
      "log_user_deafend": true,
      "log_user_undeafend": true,
      "log_user_muted": true,
      "log_user_unmuted": true,
      "log_user_stream_started": true,
      "log_user_stream_stopped": true,
      "log_user_camera_stream_started": true,
      "log_user_camera_stream_stopped": true,
      "log_color_viewed": true,
      "log_audio_volume": true,
      "log_audio_restart": true,
      "log_domain_validated": true,
      "log_qr_generated": true,
      "log_time_converted": true,
      "log_voice_message_transcribe": true,
      "log_meme": true,
      "log_reactionroles_panel_create": true,
      "log_reactionroles_panel_delete": true,
      "log_reactionroles_panel_edit": true,
      "log_reactionroles_panel_entry_create": true,
      "log_reactionroles_panel_entry_delete": true,
      "log_reactionroles_panel_entry_edit": true,
      "log_tag_create": true,
      "log_tag_delete": true,
      "log_tag_edit": true,
      "log_tag_send": true,
      "log_tag_preview": true,
      "log_autoresponder_trigger_created": true,
      "log_autoresponder_trigger_deleted": true,
      "log_autoresponder_trigger_edited": true,
      "log_autoresponder_trigger_hit": true,
      "log_autoresponder_response_created": true,
      "log_autoresponder_response_deleted": true,
      "log_welcoming_response_create": true,
      "log_welcoming_response_delete": true,
      "log_welcoming_timedrole_create": true,
      "log_welcoming_timedrole_delete": true,
      "log_welcoming_check_welcome_dm": true,
      "log_welcoming_check_welcome_channel": true,
      "log_welcoming_check_leave_channel": true,
      "log_welcoming_check_role_on_join": true,
      "log_welcoming_check_role_timed": true,
      "log_socials_reddit_remove": true,
      "log_socials_reddit_add": true,
      "log_socials_rss_remove": true,
      "log_socials_rss_add": true,
      "log_socials_twitch_remove": true,
      "log_socials_twitch_add": true,
      "log_socials_youtube_remove": true,
      "log_socials_youtube_add": true,
      "log_creation_channel_create": true,
      "log_creation_channel_delete": true,
      "log_creation_channel_edit": true,
      "log_tempchannel_check_create": true,
      "log_tempchannel_check_delete": true,
      "log_tempchannel_name_edited": true,
      "log_tempchannel_user_limit_edited": true,
      "log_tempchannel_slowmode_edited": true,
      "log_tempchannel_bitrate_edited": true,
      "log_tempchannel_age_restriction_edited": true,
      "log_tempchannel_region_edited": true,
      "log_tempchannel_claimed": true,
      "log_tempchannel_transferred": true,
      "log_tempchannel_deleted": true,
      "log_tempchannel_block_rule_added": true,
      "log_tempchannel_block_rule_removed": true,
      "log_tempchannel_trust_rule_added": true,
      "log_tempchannel_trust_rule_removed": true,
      "log_verifier_verification_create": true,
      "log_verifier_verification_handle": true,
      "log_rules_rule_add": true,
      "log_rules_rule_remove": true,
      "log_rules_send_check": true,
      "log_rules_interaction_check": true,
      "log_ticket_panel_create": true,
      "log_ticket_panel_edit": true,
      "log_ticket_panel_delete": true,
      "log_ticket_type_add": true,
      "log_ticket_type_delete": true,
      "log_ticket_create": true,
      "log_ticket_form_showed": true,
      "log_ticket_delete": true,
      "log_ticket_transfer": true,
      "log_ticket_reopen": true,
      "log_ticket_close": true,
      "log_ticket_claim": true,
      "log_ticket_transcribe": true,
      "log_invite_created": true,
      "log_invite_deleted": true,
      "log_invite_based_join": true,
      "log_invite_based_leave": true,
      "log_serverstats_counter_created": true,
      "log_serverstats_counter_deleted": true,
      "log_serverstats_starboard_check": true,
      "log_serverstats_counters_updated": true,
      "log_polls_created": true,
      "log_polls_edited": true,
      "log_polls_deleted": true,
      "log_polls_closed": true,
      "log_polls_closed_manually": true,
      "log_polls_vote_added": true,
      "log_polls_vote_removed": true,
      "log_reminders_created": true,
      "log_reminders_deleted": true,
      "log_reminders_send": true,
      "log_reminders_completed": true,
      "log_reminders_reminded_later": true,
      "log_giveaways_created": true,
      "log_giveaways_deleted": true,
      "log_giveaways_edited": true,
      "log_giveaways_rerolled": true,
      "log_giveaways_entered": true,
      "log_giveaways_leaves": true,
      "log_giveaways_finished": true
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get the module logging settings of a server: `https://api.husqy.xyz/v1/modules/logging/settings?guild_id={guild_id}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>PUT - `/modules/logging/settings`</summary>

This endpoints updates the settings of logging module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to update the information for |
| logs_channel_id | no | `integer` | The ID of the new logs channel |
| log_errors | no | `boolean` | The status of the log_errors |
| log_info | no | `boolean` | The status of the log_info |
| log_settings_changed | no | `boolean` | The status of the log_settings_changed |
| log_channel_create | no | `boolean` | The status of the log_channel_create |
| log_channel_delete | no | `boolean` | The status of the log_channel_delete |
| log_channel_update | no | `boolean` | The status of the log_channel_update |
| log_clear_messages | no | `boolean` | The status of the log_clear_messages |
| log_slowmode | no | `boolean` | The status of the log_slowmode |
| log_role_create | no | `boolean` | The status of the log_role_create |
| log_role_delete | no | `boolean` | The status of the log_role_delete |
| log_role_update | no | `boolean` | The status of the log_role_update |
| log_user_warn_create | no | `boolean` | The status of the log_user_warn_create |
| log_user_warn_delete | no | `boolean` | The status of the log_user_warn_delete |
| log_kick_events | no | `boolean` | The status of the log_kick_events |
| log_ban_create | no | `boolean` | The status of the log_ban_create |
| log_ban_delete | no | `boolean` | The status of the log_ban_delete |
| log_games | no | `boolean` | The status of the log_games |
| log_audio_join | no | `boolean` | The status of the log_audio_join |
| log_audio_leave | no | `boolean` | The status of the log_audio_leave |
| log_audio_stop | no | `boolean` | The status of the log_audio_stop |
| log_audio_skip | no | `boolean` | The status of the log_audio_skip |
| log_audio_pause | no | `boolean` | The status of the log_audio_pause |
| log_audio_resume | no | `boolean` | The status of the log_audio_resume |
| log_audio_nowplaying | no | `boolean` | The status of the log_audio_nowplaying |
| log_audio_queue | no | `boolean` | The status of the log_audio_queue |
| log_music_play | no | `boolean` | The status of the log_music_play |
| log_music_playnext | no | `boolean` | The status of the log_music_playnext |
| log_music_remove | no | `boolean` | The status of the log_music_remove |
| log_music_shuffle | no | `boolean` | The status of the log_music_shuffle |
| log_music_search | no | `boolean` | The status of the log_music_search |
| log_radio_play | no | `boolean` | The status of the log_radio_play |
| log_support | no | `boolean` | The status of the log_support |
| log_modules | no | `boolean` | The status of the log_modules |
| log_tempmute | no | `boolean` | The status of the log_tempmute |
| log_temptimeout | no | `boolean` | The status of the log_temptimeout |
| log_customembed_send | no | `boolean` | The status of the log_customembed_send |
| log_customembed_create | no | `boolean` | The status of the log_customembed_create |
| log_audio_seek | no | `boolean` | The status of the log_audio_seek |
| log_music_tts | no | `boolean` | The status of the log_music_tts |
| log_vckick | no | `boolean` | The status of the log_vckick |
| log_move | no | `boolean` | The status of the log_move |
| log_channel_lock | no | `boolean` | The status of the log_channel_lock |
| log_channel_unlock | no | `boolean` | The status of the log_channel_unlock |
| log_audio_loop | no | `boolean` | The status of the log_audio_loop |
| log_channel_join | no | `boolean` | The status of the log_channel_join |
| log_channel_leave | no | `boolean` | The status of the log_channel_leave |
| log_channel_move | no | `boolean` | The status of the log_channel_move |
| log_custommodal_create | no | `boolean` | The status of the log_custommodal_create |
| log_custommodal_preview | no | `boolean` | The status of the log_custommodal_preview |
| log_user_server_muted | no | `boolean` | The status of the log_user_server_muted |
| log_user_server_unmuted | no | `boolean` | The status of the log_user_server_unmuted |
| log_user_server_deafend | no | `boolean` | The status of the log_user_server_deafend |
| log_user_server_undeafend | no | `boolean` | The status of the log_user_server_undeafend |
| log_user_deafend | no | `boolean` | The status of the log_user_deafend |
| log_user_undeafend | no | `boolean` | The status of the log_user_undeafend |
| log_user_muted | no | `boolean` | The status of the log_user_muted |
| log_user_unmuted | no | `boolean` | The status of the log_user_unmuted |
| log_user_stream_started | no | `boolean` | The status of the log_user_stream_started |
| log_user_stream_stopped | no | `boolean` | The status of the log_user_stream_stopped |
| log_user_camera_stream_started | no | `boolean` | The status of the log_user_camera_stream_started |
| log_user_camera_stream_stopped | no | `boolean` | The status of the log_user_camera_stream_stopped |
| log_color_viewed | no | `boolean` | The status of the log_color_viewed |
| log_audio_volume | no | `boolean` | The status of the log_audio_volume |
| log_audio_restart | no | `boolean` | The status of the log_audio_restart |
| log_domain_validated | no | `boolean` | The status of the log_domain_validated |
| log_qr_generated | no | `boolean` | The status of the log_qr_generated |
| log_time_converted | no | `boolean` | The status of the log_time_converted |
| log_voice_message_transcribe | no | `boolean` | The status of the log_voice_message_transcribe |
| log_meme | no | `boolean` | The status of the log_meme |
| log_reactionroles_panel_create | no | `boolean` | The status of the log_reactionroles_panel_create |
| log_reactionroles_panel_delete | no | `boolean` | The status of the log_reactionroles_panel_delete |
| log_reactionroles_panel_edit | no | `boolean` | The status of the log_reactionroles_panel_edit |
| log_reactionroles_panel_entry_create | no | `boolean` | The status of the log_reactionroles_panel_entry_create |
| log_reactionroles_panel_entry_delete | no | `boolean` | The status of the log_reactionroles_panel_entry_delete |
| log_reactionroles_panel_entry_edit | no | `boolean` | The status of the log_reactionroles_panel_entry_edit |
| log_tag_create | no | `boolean` | The status of the log_tag_create |
| log_tag_delete | no | `boolean` | The status of the log_tag_delete |
| log_tag_edit | no | `boolean` | The status of the log_tag_edit |
| log_tag_send | no | `boolean` | The status of the log_tag_send |
| log_tag_preview | no | `boolean` | The status of the log_tag_preview |
| log_autoresponder_trigger_created | no | `boolean` | The status of the log_autoresponder_trigger_created |
| log_autoresponder_trigger_deleted | no | `boolean` | The status of the log_autoresponder_trigger_deleted |
| log_autoresponder_trigger_edited | no | `boolean` | The status of the log_autoresponder_trigger_edited |
| log_autoresponder_trigger_hit | no | `boolean` | The status of the log_autoresponder_trigger_hit |
| log_autoresponder_response_created | no | `boolean` | The status of the log_autoresponder_response_created |
| log_autoresponder_response_deleted | no | `boolean` | The status of the log_autoresponder_response_deleted |
| log_welcoming_response_create | no | `boolean` | The status of the log_welcoming_response_create |
| log_welcoming_response_delete | no | `boolean` | The status of the log_welcoming_response_delete |
| log_welcoming_timedrole_create | no | `boolean` | The status of the log_welcoming_timedrole_create |
| log_welcoming_timedrole_delete | no | `boolean` | The status of the log_welcoming_timedrole_delete |
| log_welcoming_check_welcome_dm | no | `boolean` | The status of the log_welcoming_check_welcome_dm |
| log_welcoming_check_welcome_channel | no | `boolean` | The status of the log_welcoming_check_welcome_channel |
| log_welcoming_check_leave_channel | no | `boolean` | The status of the log_welcoming_check_leave_channel |
| log_welcoming_check_role_on_join | no | `boolean` | The status of the log_welcoming_check_role_on_join |
| log_welcoming_check_role_timed | no | `boolean` | The status of the log_welcoming_check_role_timed |
| log_socials_reddit_remove | no | `boolean` | The status of the log_socials_reddit_remove |
| log_socials_reddit_add | no | `boolean` | The status of the log_socials_reddit_add |
| log_socials_rss_remove | no | `boolean` | The status of the log_socials_rss_remove |
| log_socials_rss_add | no | `boolean` | The status of the log_socials_rss_add |
| log_socials_twitch_remove | no | `boolean` | The status of the log_socials_twitch_remove |
| log_socials_twitch_add | no | `boolean` | The status of the log_socials_twitch_add |
| log_socials_youtube_remove | no | `boolean` | The status of the log_socials_youtube_remove |
| log_socials_youtube_add | no | `boolean` | The status of the log_socials_youtube_add |
| log_creation_channel_create | no | `boolean` | The status of the log_creation_channel_create |
| log_creation_channel_delete | no | `boolean` | The status of the log_creation_channel_delete |
| log_creation_channel_edit | no | `boolean` | The status of the log_creation_channel_edit |
| log_tempchannel_check_create | no | `boolean` | The status of the log_tempchannel_check_create |
| log_tempchannel_check_delete | no | `boolean` | The status of the log_tempchannel_check_delete |
| log_tempchannel_name_edited | no | `boolean` | The status of the log_tempchannel_name_edited |
| log_tempchannel_user_limit_edited | no | `boolean` | The status of the log_tempchannel_user_limit_edited |
| log_tempchannel_slowmode_edited | no | `boolean` | The status of the log_tempchannel_slowmode_edited |
| log_tempchannel_bitrate_edited | no | `boolean` | The status of the log_tempchannel_bitrate_edited |
| log_tempchannel_age_restriction_edited | no | `boolean` | The status of the log_tempchannel_age_restriction_edited |
| log_tempchannel_region_edited | no | `boolean` | The status of the log_tempchannel_region_edited |
| log_tempchannel_claimed | no | `boolean` | The status of the log_tempchannel_claimed |
| log_tempchannel_transferred | no | `boolean` | The status of the log_tempchannel_transferred |
| log_tempchannel_deleted | no | `boolean` | The status of the log_tempchannel_deleted |
| log_tempchannel_block_rule_added | no | `boolean` | The status of the log_tempchannel_block_rule_added |
| log_tempchannel_block_rule_removed | no | `boolean` | The status of the log_tempchannel_block_rule_removed |
| log_tempchannel_trust_rule_added | no | `boolean` | The status of the log_tempchannel_trust_rule_added |
| log_tempchannel_trust_rule_removed | no | `boolean` | The status of the log_tempchannel_trust_rule_removed |
| log_verifier_verification_create | no | `boolean` | The status of the log_verifier_verification_create |
| log_verifier_verification_handle | no | `boolean` | The status of the log_verifier_verification_handle |
| log_rules_rule_add | no | `boolean` | The status of the log_rules_rule_add |
| log_rules_rule_remove | no | `boolean` | The status of the log_rules_rule_remove |
| log_rules_send_check | no | `boolean` | The status of the log_rules_send_check |
| log_rules_interaction_check | no | `boolean` | The status of the log_rules_interaction_check |
| log_ticket_panel_create | no | `boolean` | The status of the log_ticket_panel_create |
| log_ticket_panel_edit | no | `boolean` | The status of the log_ticket_panel_edit |
| log_ticket_panel_delete | no | `boolean` | The status of the log_ticket_panel_delete |
| log_ticket_type_add | no | `boolean` | The status of the log_ticket_type_add |
| log_ticket_type_delete | no | `boolean` | The status of the log_ticket_type_delete |
| log_ticket_create | no | `boolean` | The status of the log_ticket_create |
| log_ticket_form_showed | no | `boolean` | The status of the log_ticket_form_showed |
| log_ticket_delete | no | `boolean` | The status of the log_ticket_delete |
| log_ticket_transfer | no | `boolean` | The status of the log_ticket_transfer |
| log_ticket_reopen | no | `boolean` | The status of the log_ticket_reopen |
| log_ticket_close | no | `boolean` | The status of the log_ticket_close |
| log_ticket_claim | no | `boolean` | The status of the log_ticket_claim |
| log_ticket_transcribe | no | `boolean` | The status of the log_ticket_transcribe |
| log_invite_created | no | `boolean` | The status of the log_invite_created |
| log_invite_deleted | no | `boolean` | The status of the log_invite_deleted |
| log_invite_based_join | no | `boolean` | The status of the log_invite_based_join |
| log_invite_based_leave | no | `boolean` | The status of the log_invite_based_leave |
| log_serverstats_counter_created | no | `boolean` | The status of the log_serverstats_counter_created |
| log_serverstats_counter_deleted | no | `boolean` | The status of the log_serverstats_counter_deleted |
| log_serverstats_starboard_check | no | `boolean` | The status of the log_serverstats_starboard_check |
| log_serverstats_counters_updated | no | `boolean` | The status of the log_serverstats_counters_updated |
| log_polls_created | no | `boolean` | The status of the log_polls_created |
| log_polls_edited | no | `boolean` | The status of the log_polls_edited |
| log_polls_deleted | no | `boolean` | The status of the log_polls_deleted |
| log_polls_closed | no | `boolean` | The status of the log_polls_closed |
| log_polls_closed_manually | no | `boolean` | The status of the log_polls_closed_manually |
| log_polls_vote_added | no | `boolean` | The status of the log_polls_vote_added |
| log_polls_vote_removed | no | `boolean` | The status of the log_polls_vote_removed |
| log_reminders_created | no | `boolean` | The status of the log_reminders_created |
| log_reminders_deleted | no | `boolean` | The status of the log_reminders_deleted |
| log_reminders_send | no | `boolean` | The status of the log_reminders_send |
| log_reminders_completed | no | `boolean` | The status of the log_reminders_completed |
| log_reminders_reminded_later | no | `boolean` | The status of the log_reminders_reminded_later |
| log_giveaways_created | no | `boolean` | The status of the log_giveaways_created |
| log_giveaways_deleted | no | `boolean` | The status of the log_giveaways_deleted |
| log_giveaways_edited | no | `boolean` | The status of the log_giveaways_edited |
| log_giveaways_rerolled | no | `boolean` | The status of the log_giveaways_rerolled |
| log_giveaways_entered | no | `boolean` | The status of the log_giveaways_entered |
| log_giveaways_leaves | no | `boolean` | The status of the log_giveaways_leaves |
| log_giveaways_finished | no | `boolean` | The status of the log_giveaways_finished |

</TabItem>
<TabItem value="success-response" label="Success response">

```
{
  "data": {
    "settings": {
      "id": 0,
      "guild_id": "string",
      "logs_channel_id": "string",
      "log_errors": true,
      "log_info": true,
      "log_settings_changed": true,
      "log_channel_create": true,
      "log_channel_delete": true,
      "log_channel_update": true,
      "log_clear_messages": true,
      "log_slowmode": true,
      "log_role_create": true,
      "log_role_delete": true,
      "log_role_update": true,
      "log_user_warn_create": true,
      "log_user_warn_delete": true,
      "log_kick_events": true,
      "log_ban_create": true,
      "log_ban_delete": true,
      "log_games": true,
      "log_audio_join": true,
      "log_audio_leave": true,
      "log_audio_stop": true,
      "log_audio_skip": true,
      "log_audio_pause": true,
      "log_audio_resume": true,
      "log_audio_nowplaying": true,
      "log_audio_queue": true,
      "log_music_play": true,
      "log_music_playnext": true,
      "log_music_remove": true,
      "log_music_shuffle": true,
      "log_music_search": true,
      "log_radio_play": true,
      "log_support": true,
      "log_modules": true,
      "log_tempmute": true,
      "log_temptimeout": true,
      "log_customembed_send": true,
      "log_customembed_create": true,
      "log_audio_seek": true,
      "log_music_tts": true,
      "log_vckick": true,
      "log_move": true,
      "log_channel_lock": true,
      "log_channel_unlock": true,
      "log_audio_loop": true,
      "log_channel_join": true,
      "log_channel_leave": true,
      "log_channel_move": true,
      "log_custommodal_create": true,
      "log_custommodal_preview": true,
      "log_user_server_muted": true,
      "log_user_server_unmuted": true,
      "log_user_server_deafend": true,
      "log_user_server_undeafend": true,
      "log_user_deafend": true,
      "log_user_undeafend": true,
      "log_user_muted": true,
      "log_user_unmuted": true,
      "log_user_stream_started": true,
      "log_user_stream_stopped": true,
      "log_user_camera_stream_started": true,
      "log_user_camera_stream_stopped": true,
      "log_color_viewed": true,
      "log_audio_volume": true,
      "log_audio_restart": true,
      "log_domain_validated": true,
      "log_qr_generated": true,
      "log_time_converted": true,
      "log_voice_message_transcribe": true,
      "log_meme": true,
      "log_reactionroles_panel_create": true,
      "log_reactionroles_panel_delete": true,
      "log_reactionroles_panel_edit": true,
      "log_reactionroles_panel_entry_create": true,
      "log_reactionroles_panel_entry_delete": true,
      "log_reactionroles_panel_entry_edit": true,
      "log_tag_create": true,
      "log_tag_delete": true,
      "log_tag_edit": true,
      "log_tag_send": true,
      "log_tag_preview": true,
      "log_autoresponder_trigger_created": true,
      "log_autoresponder_trigger_deleted": true,
      "log_autoresponder_trigger_edited": true,
      "log_autoresponder_trigger_hit": true,
      "log_autoresponder_response_created": true,
      "log_autoresponder_response_deleted": true,
      "log_welcoming_response_create": true,
      "log_welcoming_response_delete": true,
      "log_welcoming_timedrole_create": true,
      "log_welcoming_timedrole_delete": true,
      "log_welcoming_check_welcome_dm": true,
      "log_welcoming_check_welcome_channel": true,
      "log_welcoming_check_leave_channel": true,
      "log_welcoming_check_role_on_join": true,
      "log_welcoming_check_role_timed": true,
      "log_socials_reddit_remove": true,
      "log_socials_reddit_add": true,
      "log_socials_rss_remove": true,
      "log_socials_rss_add": true,
      "log_socials_twitch_remove": true,
      "log_socials_twitch_add": true,
      "log_socials_youtube_remove": true,
      "log_socials_youtube_add": true,
      "log_creation_channel_create": true,
      "log_creation_channel_delete": true,
      "log_creation_channel_edit": true,
      "log_tempchannel_check_create": true,
      "log_tempchannel_check_delete": true,
      "log_tempchannel_name_edited": true,
      "log_tempchannel_user_limit_edited": true,
      "log_tempchannel_slowmode_edited": true,
      "log_tempchannel_bitrate_edited": true,
      "log_tempchannel_age_restriction_edited": true,
      "log_tempchannel_region_edited": true,
      "log_tempchannel_claimed": true,
      "log_tempchannel_transferred": true,
      "log_tempchannel_deleted": true,
      "log_tempchannel_block_rule_added": true,
      "log_tempchannel_block_rule_removed": true,
      "log_tempchannel_trust_rule_added": true,
      "log_tempchannel_trust_rule_removed": true,
      "log_verifier_verification_create": true,
      "log_verifier_verification_handle": true,
      "log_rules_rule_add": true,
      "log_rules_rule_remove": true,
      "log_rules_send_check": true,
      "log_rules_interaction_check": true,
      "log_ticket_panel_create": true,
      "log_ticket_panel_edit": true,
      "log_ticket_panel_delete": true,
      "log_ticket_type_add": true,
      "log_ticket_type_delete": true,
      "log_ticket_create": true,
      "log_ticket_form_showed": true,
      "log_ticket_delete": true,
      "log_ticket_transfer": true,
      "log_ticket_reopen": true,
      "log_ticket_close": true,
      "log_ticket_claim": true,
      "log_ticket_transcribe": true,
      "log_invite_created": true,
      "log_invite_deleted": true,
      "log_invite_based_join": true,
      "log_invite_based_leave": true,
      "log_serverstats_counter_created": true,
      "log_serverstats_counter_deleted": true,
      "log_serverstats_starboard_check": true,
      "log_serverstats_counters_updated": true,
      "log_polls_created": true,
      "log_polls_edited": true,
      "log_polls_deleted": true,
      "log_polls_closed": true,
      "log_polls_closed_manually": true,
      "log_polls_vote_added": true,
      "log_polls_vote_removed": true,
      "log_reminders_created": true,
      "log_reminders_deleted": true,
      "log_reminders_send": true,
      "log_reminders_completed": true,
      "log_reminders_reminded_later": true,
      "log_giveaways_created": true,
      "log_giveaways_deleted": true,
      "log_giveaways_edited": true,
      "log_giveaways_rerolled": true,
      "log_giveaways_entered": true,
      "log_giveaways_leaves": true,
      "log_giveaways_finished": true
    }
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    - Change one of the module logging settings of a server: `https://api.husqy.xyz/v1/modules/logging/settings`:
    ```
    {
      "guild_id": {guild_id},
      "logs_channel_id": {new_logs_channel_id}
    }
    ```
    - Change multiple of the module logging settings of a server: `https://api.husqy.xyz/v1/modules/logging/settings`:
    ```
    {
      "guild_id": {guild_id},
      "logs_channel_id": {new_logs_channel_id},
      "log_errors": {new_value},
      "log_info": {new_value}
    }
    ```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>DELETE - `/modules/logging/settings`</summary>

This endpoints deletes the settings of logging module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to delete the information for |
</TabItem>
<TabItem value="success-response" label="Success response">

```
{
  "data": {
    "settings": {
      "id": 0,
      "guild_id": "string",
      "logs_channel_id": "string",
      "log_errors": true,
      "log_info": true,
      "log_settings_changed": true,
      "log_channel_create": true,
      "log_channel_delete": true,
      "log_channel_update": true,
      "log_clear_messages": true,
      "log_slowmode": true,
      "log_role_create": true,
      "log_role_delete": true,
      "log_role_update": true,
      "log_user_warn_create": true,
      "log_user_warn_delete": true,
      "log_kick_events": true,
      "log_ban_create": true,
      "log_ban_delete": true,
      "log_games": true,
      "log_audio_join": true,
      "log_audio_leave": true,
      "log_audio_stop": true,
      "log_audio_skip": true,
      "log_audio_pause": true,
      "log_audio_resume": true,
      "log_audio_nowplaying": true,
      "log_audio_queue": true,
      "log_music_play": true,
      "log_music_playnext": true,
      "log_music_remove": true,
      "log_music_shuffle": true,
      "log_music_search": true,
      "log_radio_play": true,
      "log_support": true,
      "log_modules": true,
      "log_tempmute": true,
      "log_temptimeout": true,
      "log_customembed_send": true,
      "log_customembed_create": true,
      "log_audio_seek": true,
      "log_music_tts": true,
      "log_vckick": true,
      "log_move": true,
      "log_channel_lock": true,
      "log_channel_unlock": true,
      "log_audio_loop": true,
      "log_channel_join": true,
      "log_channel_leave": true,
      "log_channel_move": true,
      "log_custommodal_create": true,
      "log_custommodal_preview": true,
      "log_user_server_muted": true,
      "log_user_server_unmuted": true,
      "log_user_server_deafend": true,
      "log_user_server_undeafend": true,
      "log_user_deafend": true,
      "log_user_undeafend": true,
      "log_user_muted": true,
      "log_user_unmuted": true,
      "log_user_stream_started": true,
      "log_user_stream_stopped": true,
      "log_user_camera_stream_started": true,
      "log_user_camera_stream_stopped": true,
      "log_color_viewed": true,
      "log_audio_volume": true,
      "log_audio_restart": true,
      "log_domain_validated": true,
      "log_qr_generated": true,
      "log_time_converted": true,
      "log_voice_message_transcribe": true,
      "log_meme": true,
      "log_reactionroles_panel_create": true,
      "log_reactionroles_panel_delete": true,
      "log_reactionroles_panel_edit": true,
      "log_reactionroles_panel_entry_create": true,
      "log_reactionroles_panel_entry_delete": true,
      "log_reactionroles_panel_entry_edit": true,
      "log_tag_create": true,
      "log_tag_delete": true,
      "log_tag_edit": true,
      "log_tag_send": true,
      "log_tag_preview": true,
      "log_autoresponder_trigger_created": true,
      "log_autoresponder_trigger_deleted": true,
      "log_autoresponder_trigger_edited": true,
      "log_autoresponder_trigger_hit": true,
      "log_autoresponder_response_created": true,
      "log_autoresponder_response_deleted": true,
      "log_welcoming_response_create": true,
      "log_welcoming_response_delete": true,
      "log_welcoming_timedrole_create": true,
      "log_welcoming_timedrole_delete": true,
      "log_welcoming_check_welcome_dm": true,
      "log_welcoming_check_welcome_channel": true,
      "log_welcoming_check_leave_channel": true,
      "log_welcoming_check_role_on_join": true,
      "log_welcoming_check_role_timed": true,
      "log_socials_reddit_remove": true,
      "log_socials_reddit_add": true,
      "log_socials_rss_remove": true,
      "log_socials_rss_add": true,
      "log_socials_twitch_remove": true,
      "log_socials_twitch_add": true,
      "log_socials_youtube_remove": true,
      "log_socials_youtube_add": true,
      "log_creation_channel_create": true,
      "log_creation_channel_delete": true,
      "log_creation_channel_edit": true,
      "log_tempchannel_check_create": true,
      "log_tempchannel_check_delete": true,
      "log_tempchannel_name_edited": true,
      "log_tempchannel_user_limit_edited": true,
      "log_tempchannel_slowmode_edited": true,
      "log_tempchannel_bitrate_edited": true,
      "log_tempchannel_age_restriction_edited": true,
      "log_tempchannel_region_edited": true,
      "log_tempchannel_claimed": true,
      "log_tempchannel_transferred": true,
      "log_tempchannel_deleted": true,
      "log_tempchannel_block_rule_added": true,
      "log_tempchannel_block_rule_removed": true,
      "log_tempchannel_trust_rule_added": true,
      "log_tempchannel_trust_rule_removed": true,
      "log_verifier_verification_create": true,
      "log_verifier_verification_handle": true,
      "log_rules_rule_add": true,
      "log_rules_rule_remove": true,
      "log_rules_send_check": true,
      "log_rules_interaction_check": true,
      "log_ticket_panel_create": true,
      "log_ticket_panel_edit": true,
      "log_ticket_panel_delete": true,
      "log_ticket_type_add": true,
      "log_ticket_type_delete": true,
      "log_ticket_create": true,
      "log_ticket_form_showed": true,
      "log_ticket_delete": true,
      "log_ticket_transfer": true,
      "log_ticket_reopen": true,
      "log_ticket_close": true,
      "log_ticket_claim": true,
      "log_ticket_transcribe": true,
      "log_invite_created": true,
      "log_invite_deleted": true,
      "log_invite_based_join": true,
      "log_invite_based_leave": true,
      "log_serverstats_counter_created": true,
      "log_serverstats_counter_deleted": true,
      "log_serverstats_starboard_check": true,
      "log_serverstats_counters_updated": true,
      "log_polls_created": true,
      "log_polls_edited": true,
      "log_polls_deleted": true,
      "log_polls_closed": true,
      "log_polls_closed_manually": true,
      "log_polls_vote_added": true,
      "log_polls_vote_removed": true,
      "log_reminders_created": true,
      "log_reminders_deleted": true,
      "log_reminders_send": true,
      "log_reminders_completed": true,
      "log_reminders_reminded_later": true,
      "log_giveaways_created": true,
      "log_giveaways_deleted": true,
      "log_giveaways_edited": true,
      "log_giveaways_rerolled": true,
      "log_giveaways_entered": true,
      "log_giveaways_leaves": true,
      "log_giveaways_finished": true
    }
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    - Delete the module logging settings of a server: `https://api.husqy.xyz/v1/modules/logging/settings`:
    ```
    {
      "guild_id": {guild_id}
    }
    ```
  </TabItem>
</Tabs>

</details>

## Status

Endpoints related to the status of the module

<details>
  <summary>GET - `/modules/logging/status`</summary>

This endpoints returns the status of the logging module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to get the information for |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "status": true
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get the status: `https://api.husqy.xyz/v1/modules/logging/status`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>POST - `/modules/logging/enable`</summary>

This endpoints enables the logging module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to enable the module for |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "settings": {
      "id": 0,
      "guild_id": "string",
      "logs_channel_id": "string",
      "log_errors": true,
      "log_info": true,
      "log_settings_changed": true,
      "log_channel_create": true,
      "log_channel_delete": true,
      "log_channel_update": true,
      "log_clear_messages": true,
      "log_slowmode": true,
      "log_role_create": true,
      "log_role_delete": true,
      "log_role_update": true,
      "log_user_warn_create": true,
      "log_user_warn_delete": true,
      "log_kick_events": true,
      "log_ban_create": true,
      "log_ban_delete": true,
      "log_games": true,
      "log_audio_join": true,
      "log_audio_leave": true,
      "log_audio_stop": true,
      "log_audio_skip": true,
      "log_audio_pause": true,
      "log_audio_resume": true,
      "log_audio_nowplaying": true,
      "log_audio_queue": true,
      "log_music_play": true,
      "log_music_playnext": true,
      "log_music_remove": true,
      "log_music_shuffle": true,
      "log_music_search": true,
      "log_radio_play": true,
      "log_support": true,
      "log_modules": true,
      "log_tempmute": true,
      "log_temptimeout": true,
      "log_customembed_send": true,
      "log_customembed_create": true,
      "log_audio_seek": true,
      "log_music_tts": true,
      "log_vckick": true,
      "log_move": true,
      "log_channel_lock": true,
      "log_channel_unlock": true,
      "log_audio_loop": true,
      "log_channel_join": true,
      "log_channel_leave": true,
      "log_channel_move": true,
      "log_custommodal_create": true,
      "log_custommodal_preview": true,
      "log_user_server_muted": true,
      "log_user_server_unmuted": true,
      "log_user_server_deafend": true,
      "log_user_server_undeafend": true,
      "log_user_deafend": true,
      "log_user_undeafend": true,
      "log_user_muted": true,
      "log_user_unmuted": true,
      "log_user_stream_started": true,
      "log_user_stream_stopped": true,
      "log_user_camera_stream_started": true,
      "log_user_camera_stream_stopped": true,
      "log_color_viewed": true,
      "log_audio_volume": true,
      "log_audio_restart": true,
      "log_domain_validated": true,
      "log_qr_generated": true,
      "log_time_converted": true,
      "log_voice_message_transcribe": true,
      "log_meme": true,
      "log_reactionroles_panel_create": true,
      "log_reactionroles_panel_delete": true,
      "log_reactionroles_panel_edit": true,
      "log_reactionroles_panel_entry_create": true,
      "log_reactionroles_panel_entry_delete": true,
      "log_reactionroles_panel_entry_edit": true,
      "log_tag_create": true,
      "log_tag_delete": true,
      "log_tag_edit": true,
      "log_tag_send": true,
      "log_tag_preview": true,
      "log_autoresponder_trigger_created": true,
      "log_autoresponder_trigger_deleted": true,
      "log_autoresponder_trigger_edited": true,
      "log_autoresponder_trigger_hit": true,
      "log_autoresponder_response_created": true,
      "log_autoresponder_response_deleted": true,
      "log_welcoming_response_create": true,
      "log_welcoming_response_delete": true,
      "log_welcoming_timedrole_create": true,
      "log_welcoming_timedrole_delete": true,
      "log_welcoming_check_welcome_dm": true,
      "log_welcoming_check_welcome_channel": true,
      "log_welcoming_check_leave_channel": true,
      "log_welcoming_check_role_on_join": true,
      "log_welcoming_check_role_timed": true,
      "log_socials_reddit_remove": true,
      "log_socials_reddit_add": true,
      "log_socials_rss_remove": true,
      "log_socials_rss_add": true,
      "log_socials_twitch_remove": true,
      "log_socials_twitch_add": true,
      "log_socials_youtube_remove": true,
      "log_socials_youtube_add": true,
      "log_creation_channel_create": true,
      "log_creation_channel_delete": true,
      "log_creation_channel_edit": true,
      "log_tempchannel_check_create": true,
      "log_tempchannel_check_delete": true,
      "log_tempchannel_name_edited": true,
      "log_tempchannel_user_limit_edited": true,
      "log_tempchannel_slowmode_edited": true,
      "log_tempchannel_bitrate_edited": true,
      "log_tempchannel_age_restriction_edited": true,
      "log_tempchannel_region_edited": true,
      "log_tempchannel_claimed": true,
      "log_tempchannel_transferred": true,
      "log_tempchannel_deleted": true,
      "log_tempchannel_block_rule_added": true,
      "log_tempchannel_block_rule_removed": true,
      "log_tempchannel_trust_rule_added": true,
      "log_tempchannel_trust_rule_removed": true,
      "log_verifier_verification_create": true,
      "log_verifier_verification_handle": true,
      "log_rules_rule_add": true,
      "log_rules_rule_remove": true,
      "log_rules_send_check": true,
      "log_rules_interaction_check": true,
      "log_ticket_panel_create": true,
      "log_ticket_panel_edit": true,
      "log_ticket_panel_delete": true,
      "log_ticket_type_add": true,
      "log_ticket_type_delete": true,
      "log_ticket_create": true,
      "log_ticket_form_showed": true,
      "log_ticket_delete": true,
      "log_ticket_transfer": true,
      "log_ticket_reopen": true,
      "log_ticket_close": true,
      "log_ticket_claim": true,
      "log_ticket_transcribe": true,
      "log_invite_created": true,
      "log_invite_deleted": true,
      "log_invite_based_join": true,
      "log_invite_based_leave": true,
      "log_serverstats_counter_created": true,
      "log_serverstats_counter_deleted": true,
      "log_serverstats_starboard_check": true,
      "log_serverstats_counters_updated": true,
      "log_polls_created": true,
      "log_polls_edited": true,
      "log_polls_deleted": true,
      "log_polls_closed": true,
      "log_polls_closed_manually": true,
      "log_polls_vote_added": true,
      "log_polls_vote_removed": true,
      "log_reminders_created": true,
      "log_reminders_deleted": true,
      "log_reminders_send": true,
      "log_reminders_completed": true,
      "log_reminders_reminded_later": true,
      "log_giveaways_created": true,
      "log_giveaways_deleted": true,
      "log_giveaways_edited": true,
      "log_giveaways_rerolled": true,
      "log_giveaways_entered": true,
      "log_giveaways_leaves": true,
      "log_giveaways_finished": true
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Enable the module: `https://api.husqy.xyz/v1/modules/logging/enable`:
    ```
    {
      "guild_id": {guild_id}
    }
    ```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>POST - `/modules/logging/disable`</summary>

This endpoints disables the logging module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to disable the module for |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "settings": {
      "id": 0,
      "guild_id": "string",
      "logs_channel_id": "string",
      "log_errors": true,
      "log_info": true,
      "log_settings_changed": true,
      "log_channel_create": true,
      "log_channel_delete": true,
      "log_channel_update": true,
      "log_clear_messages": true,
      "log_slowmode": true,
      "log_role_create": true,
      "log_role_delete": true,
      "log_role_update": true,
      "log_user_warn_create": true,
      "log_user_warn_delete": true,
      "log_kick_events": true,
      "log_ban_create": true,
      "log_ban_delete": true,
      "log_games": true,
      "log_audio_join": true,
      "log_audio_leave": true,
      "log_audio_stop": true,
      "log_audio_skip": true,
      "log_audio_pause": true,
      "log_audio_resume": true,
      "log_audio_nowplaying": true,
      "log_audio_queue": true,
      "log_music_play": true,
      "log_music_playnext": true,
      "log_music_remove": true,
      "log_music_shuffle": true,
      "log_music_search": true,
      "log_radio_play": true,
      "log_support": true,
      "log_modules": true,
      "log_tempmute": true,
      "log_temptimeout": true,
      "log_customembed_send": true,
      "log_customembed_create": true,
      "log_audio_seek": true,
      "log_music_tts": true,
      "log_vckick": true,
      "log_move": true,
      "log_channel_lock": true,
      "log_channel_unlock": true,
      "log_audio_loop": true,
      "log_channel_join": true,
      "log_channel_leave": true,
      "log_channel_move": true,
      "log_custommodal_create": true,
      "log_custommodal_preview": true,
      "log_user_server_muted": true,
      "log_user_server_unmuted": true,
      "log_user_server_deafend": true,
      "log_user_server_undeafend": true,
      "log_user_deafend": true,
      "log_user_undeafend": true,
      "log_user_muted": true,
      "log_user_unmuted": true,
      "log_user_stream_started": true,
      "log_user_stream_stopped": true,
      "log_user_camera_stream_started": true,
      "log_user_camera_stream_stopped": true,
      "log_color_viewed": true,
      "log_audio_volume": true,
      "log_audio_restart": true,
      "log_domain_validated": true,
      "log_qr_generated": true,
      "log_time_converted": true,
      "log_voice_message_transcribe": true,
      "log_meme": true,
      "log_reactionroles_panel_create": true,
      "log_reactionroles_panel_delete": true,
      "log_reactionroles_panel_edit": true,
      "log_reactionroles_panel_entry_create": true,
      "log_reactionroles_panel_entry_delete": true,
      "log_reactionroles_panel_entry_edit": true,
      "log_tag_create": true,
      "log_tag_delete": true,
      "log_tag_edit": true,
      "log_tag_send": true,
      "log_tag_preview": true,
      "log_autoresponder_trigger_created": true,
      "log_autoresponder_trigger_deleted": true,
      "log_autoresponder_trigger_edited": true,
      "log_autoresponder_trigger_hit": true,
      "log_autoresponder_response_created": true,
      "log_autoresponder_response_deleted": true,
      "log_welcoming_response_create": true,
      "log_welcoming_response_delete": true,
      "log_welcoming_timedrole_create": true,
      "log_welcoming_timedrole_delete": true,
      "log_welcoming_check_welcome_dm": true,
      "log_welcoming_check_welcome_channel": true,
      "log_welcoming_check_leave_channel": true,
      "log_welcoming_check_role_on_join": true,
      "log_welcoming_check_role_timed": true,
      "log_socials_reddit_remove": true,
      "log_socials_reddit_add": true,
      "log_socials_rss_remove": true,
      "log_socials_rss_add": true,
      "log_socials_twitch_remove": true,
      "log_socials_twitch_add": true,
      "log_socials_youtube_remove": true,
      "log_socials_youtube_add": true,
      "log_creation_channel_create": true,
      "log_creation_channel_delete": true,
      "log_creation_channel_edit": true,
      "log_tempchannel_check_create": true,
      "log_tempchannel_check_delete": true,
      "log_tempchannel_name_edited": true,
      "log_tempchannel_user_limit_edited": true,
      "log_tempchannel_slowmode_edited": true,
      "log_tempchannel_bitrate_edited": true,
      "log_tempchannel_age_restriction_edited": true,
      "log_tempchannel_region_edited": true,
      "log_tempchannel_claimed": true,
      "log_tempchannel_transferred": true,
      "log_tempchannel_deleted": true,
      "log_tempchannel_block_rule_added": true,
      "log_tempchannel_block_rule_removed": true,
      "log_tempchannel_trust_rule_added": true,
      "log_tempchannel_trust_rule_removed": true,
      "log_verifier_verification_create": true,
      "log_verifier_verification_handle": true,
      "log_rules_rule_add": true,
      "log_rules_rule_remove": true,
      "log_rules_send_check": true,
      "log_rules_interaction_check": true,
      "log_ticket_panel_create": true,
      "log_ticket_panel_edit": true,
      "log_ticket_panel_delete": true,
      "log_ticket_type_add": true,
      "log_ticket_type_delete": true,
      "log_ticket_create": true,
      "log_ticket_form_showed": true,
      "log_ticket_delete": true,
      "log_ticket_transfer": true,
      "log_ticket_reopen": true,
      "log_ticket_close": true,
      "log_ticket_claim": true,
      "log_ticket_transcribe": true,
      "log_invite_created": true,
      "log_invite_deleted": true,
      "log_invite_based_join": true,
      "log_invite_based_leave": true,
      "log_serverstats_counter_created": true,
      "log_serverstats_counter_deleted": true,
      "log_serverstats_starboard_check": true,
      "log_serverstats_counters_updated": true,
      "log_polls_created": true,
      "log_polls_edited": true,
      "log_polls_deleted": true,
      "log_polls_closed": true,
      "log_polls_closed_manually": true,
      "log_polls_vote_added": true,
      "log_polls_vote_removed": true,
      "log_reminders_created": true,
      "log_reminders_deleted": true,
      "log_reminders_send": true,
      "log_reminders_completed": true,
      "log_reminders_reminded_later": true,
      "log_giveaways_created": true,
      "log_giveaways_deleted": true,
      "log_giveaways_edited": true,
      "log_giveaways_rerolled": true,
      "log_giveaways_entered": true,
      "log_giveaways_leaves": true,
      "log_giveaways_finished": true
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Disable the module: `https://api.husqy.xyz/v1/modules/logging/disable`:
    ```
    {
      "guild_id": {guild_id}
    }
    ```
  </TabItem>
</Tabs>

</details>

## Log

Endpoints related to sending the log message

<details>
  <summary>POST - `/modules/logging/events/check`</summary>

:::danger

Do not use this endpoint yourself! Husqy will send log messages to the channel when needed.

:::

This endpoints sends a logging message to the logs channel.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to disable the module for |
| event_info | yes | `object` | The object configuration of the log message to send |

</TabItem>
<TabItem value="success-response" label="Success response">

```
{
  "data": {
    "message": "string"
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    No examples provided. Do not use this endpoint yourself!
  </TabItem>
</Tabs>

</details>

## Privacy

Endpoints related to privacy and the logging module

<details>
  <summary>GET - `/modules/logging/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references to your user in other parts of Husqy.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the user for |
| privacy_member_id | yes | `integer` | The ID of the user to check |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "username": 0,
    "display_name": 0,
    "global_name": 0,
    "nickname": 0,
    "id": 0
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    No examples provided. Do not use this endpoint yourself!
  </TabItem>
</Tabs>

</details>

<details>
  <summary>DELETE - `/modules/logging/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references to your user in other parts of Husqy.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the user for |
| privacy_member_id | yes | `integer` | The ID of the user to check |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "message": "string"
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    No examples provided. Do not use this endpoint yourself!
  </TabItem>
</Tabs>

</details>
