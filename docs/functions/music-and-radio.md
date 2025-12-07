---
description: An overview over Husqy music, radio and other audio features
title: Music & radio
sidebar_label: Music & radio
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Music
  - Radio
  - Audio
  - Voice channel
  - Playback
  - Text-to-speech
sidebar_position: 3
showLastUpdateTime: true
toc_max_heading_level: 6
---

Husqy Music & radio function provides your server with rich music & radio playback. You can listed to different sources with friends while connected to a voice channel. It allows you to control audio playback f.e. by pausing, shuffling the queue and troll each other with text-to-speech (TTS) messages.

## What sources are supported?

Currently there are different verified sources working:

- SoundCloud;
- Spotify;
- Deezer;
- Apple Music;
- Internet sources (.mp3 URL's);
- TTS messages;
- Radio (by [TuneIn](https://tunein.com/));

:::warning

- Not all internet sources may work correctly or the same. Feel free to try!
- Other sources like TikTok, Reddit or alike are not confirmed to be working. Feel free to try!

:::

## How do I play from different sources?

### Radio

To play radio in your voice channel, make sure you or Husqy are connected to a voice channel. Then, use the command `/audio play radio` and start typing the name of the radio station you want to play in the _radiostation_ required command parameter. Make sure you are selecting one of the autocomplete results. Husqy will then play the selected radio station.

:::note

To play a radiostation, it must be available on TuneIn.

:::

:::warning

Make sure you use one of the autocomplete responses. Husqy can't play a radiostation when you do not select one of these options.

:::

### TTS

To play a TTS message, make sure you or Husqy are connected to a voice channel. Then, use the command `/audio play tts` and insert your message in the _tts_ required command parameter. Husqy will now play the requested TTS message.

#### Parameters overview

- _Position in queue_: To add the text-to-speech message in a specified position in the queue. Default is `None` and will append to the end of the queue.

:::warning

Currently only English is officialy supported. Feel free to try other languages!

:::

### Music & other sources

To play music or another source, make sure you or Husqy are connected to a voice channel. Then, use the command `/audio play music` and insert your search query in the `query` required command parameter. Husqy will now play the requested song or other audio.

#### Parameters overview

- _Auto shuffle_: If the queue should automatically be shuffled when added.
- _Position in queue_: To add the song or other audio in a specified position in the queue. Default is `None` and will append to the end of the queue.

## Searching for music

Husqy provides an easy way to search for music on a specified platform, this can be done using the `/audio search` command. Just select the platform to search and insert a search query.

## Additional info

:::info

- If you are not connected to a voice channel, you can still make Husqy play music, radio or a TTS message. Use the `/audio join` command to make Husqy join a channel first (just make sure you select a valid voice channel from the dropdown). After joining, use the command you want to use.
- Search queries may sound difficuly but they can be as easy as: "dua lipa", "levitating" or "dua lipa levitating". The more specific, the better the results will be!

:::
