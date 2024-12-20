---
description: Utils
title: Utils
sidebar_label: Utils
keywords:
  - docs
  - utils
sidebar_position: 7
toc_max_heading_level: 6
---

The Husqy Utils functions are grouped functionalities which provides server members or administrators with different tools. These tools can be used for configuring Husqy, playing around or general quick help questions.

## Custom embed creator

To create a custom embed, you will need to run the command `/utils custom_embed create`. This will provide you with a message that is only visable to you. In this message is a base embed and different buttons to completely build out your embed. When you are done creating your embed, press the **_Finish_** button to retrieve the JSON of your embed.

To completely reset the embed and start over, press the **_Reset_** button!

The JSON you retrieve after finishing your embed can be used to either send the custom embed to a channel using Husqy (`/utils custom_embed send`) or can be used in different Husqy modules for configuration, f.e. the tickets module for the ticket creation message!

:::danger Important!

Whenever you need to configure an embed for Husqy, use this Custom embed creator utility. Husqy only knows how to convert the JSON output of this utility to an embed.

:::

## Custom modal creator

The custom modal utility is very similar to the custom embed utility. Run the command `/utils custom_modal create`. This will provide you with a message that is only visable to you. In this message is a base embed without any modal configuration. Using the buttons you can build out the modal to your liking, be sure to preview the modal using the **_Preview_** button. Press the Finish modal button to retrieve the JSON of your modal.

To completely reset the modal and start over, press the **_Reset_** modal button!

The JSON you retrieve after finishing your modal can be used to either preview the custom modal using Husqy (`/utils custom_modal preview`) or can be used in different Husqy modules for configuration, f.e. the tickets module for the custom ticket form!

:::tip

- When previewing the modal, the color of the embed will change, when it is green the configuration of the modal is successful and the modal will show. When the color is red, there is something wrong, most likely there is no text field created (there must be at least one to preview the modal!).
- By cancelling the preview, you go back to the modal editor, if you fill in the modal and submit, the interaction will fail and there is a change that the editor stops working!

:::
:::danger Important!

- Whenever you need to configure an modal for Husqy, use this Custom modal creator utility. Husqy only knows how to convert the JSON output of this utility to a modal.

:::

## Color previewer

To preview a color, run the command `/utils color view` and insert either a hex or an rgb value (not both). This will prompt with an embed and image of the color.

## Domain safety check

To check the safety of a domain, run the command `/utils domain validate_safety` and insert the domain name or a url. This will check the safety and reply with the results.

## QR-code generator

To generate a QR-code, run the command `/utils generate_qr` and insert the metadata of the qr-code. Husqy will send an embed with the generated qr-code.

## Converter to seconds

To convert to seconds, run the command `/utils convert_to_seconds` and insert the desired days, hours, minutes and seconds to convert. Once everything is filled in, the total amount of seconds will be returned.