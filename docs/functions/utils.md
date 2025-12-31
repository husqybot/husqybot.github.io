---
description: An overview over Husqy utility and helper features
title: Utils
sidebar_label: Utils
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - Utils
  - Husqy configuration
sidebar_position: 7
showLastUpdateTime: true
toc_max_heading_level: 6
---

The Husqy Utils functions are grouped functionalities which provides server members or administrators with different tools. These tools can be used for configuring Husqy, playing around or general quick help questions.

## Custom embeds

### Creating embeds

Some Husqy modules support the usage of custom embeds in messages, f.e. the welcoming module with channel welcomes. To create these custom embeds we recommend using [Discohook](https://discohook.app/). Discohook (or other providers) allow you to create embeds and view their layout in a browser, and most importantly copy their JSON configuration.

An example configuration is:

```
{
  "embeds": [
    {
      "title": "Embed title",
      "description": "Embed description",
      "color": 5814783,
      "fields": []
    }
  ],
}
```

:::tip

- Husqy supports sending multiple embeds (maximum 5, Discord limit) in one message.
- We try to use the default JSON format Discord uses for embeds, so any embed creator should work when they use the default JSON format.

:::

:::danger Important!

The example is the format to use, any other keys besides `embeds` (which may be added when creating embeds or messages using embed creators online like `components`) are ignored and only the embeds inside the `embeds` key are used. 

:::

### Sending embeds

To validate that Husqy and its modules can send the embeds, you can use the `/utils custom_embed send` command and provide the created embeds JSON configuration. If the configuration is send the embeds are going to be send. This command also supports setting users, channels and server variables so you can fully see what the final embed will look like.

## Custom modal creator

The custom modal utility can be used to create custom modals which can be used by Husqy and its modules. Run the command `/utils custom_modal create`. This will provide you with a message that is only visable to you. In this message is a base embed without any modal configuration. Using the buttons you can build out the modal to your liking, be sure to preview the modal using the **_Preview_** button. Press the Finish modal button to retrieve the JSON of your modal.

To completely reset the modal and start over, press the **_Reset_** modal button!

The JSON you retrieve after finishing your modal can be used to either preview the custom modal using Husqy (`/utils custom_modal preview`) or can be used in different Husqy modules for configuration, f.e. the tickets module for the custom ticket form!

:::tip

- When previewing the modal, the color of the embed will change, when it is green the configuration of the modal is successful and the modal will show. When the color is red, there is something wrong, most likely there is no text field created (there must be at least one to preview the modal!).
- By cancelling the preview, you go back to the modal editor, if you fill in the modal and submit, the interaction will fail and there is a change that the editor stops working!

:::
:::danger Important!

- Whenever you need to configure an modal for Husqy, use this Custom modal creator utility. Husqy only knows how to convert the JSON output of this utility to a modal.

:::

## QR-code generator

To generate a QR-code, run the command `/utils generate_qr` and insert the metadata of the qr-code. Husqy will send an embed with the generated qr-code.

## Converter to seconds

To convert to seconds, run the command `/utils convert_to_seconds` and insert the desired days, hours, minutes and seconds to convert. Once everything is filled in, the total amount of seconds will be returned.

## Additional info & commands

:::info Available commands

These functions provides the following commands:

- `/utils custom_embed send`;
- `/utils custom_modal create`;
- `/utils custom_modal preview`;
- `/utils convert_to_seconds`;
- `/utils generate_qr`;

:::
