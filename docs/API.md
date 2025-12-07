---
description: An overview of the available API documentation for Husqy API endpoints
title: API Docs
sidebar_label: API Docs
keywords:
  - Husqy
  - Discord
  - Discord bot
  - Documentation
  - Docs
  - API
  - REST API
sidebar_position: 5
showLastUpdateTime: true
toc_max_heading_level: 6
---

This section contains information about all Husqy API endpoints. Go to the Husqy API with the next page button or use one of the quick links.

:::warning

- Some endpoint may be described and documented but may not be available for users or API keys to use.
- Not all requested post data must be present when making a request. Some can be left out for no change.

:::

## API Reference

The Husqy API is organized around REST, it has clear resource-oriented URLS and returns JSON responses. All V1 (latest) API endpoints are located at the following base URL: `https://api.husqy.xyz/v1`. Throughout the documentation you will come across endpoints, make sure this prefix is added before the endpoints.

## Authentication

The Husqy API uses access tokens given by Discord OAuth to authenticate the user and, in combination with known information in the database, to check if a user has access to the server they are interacting with.

### API Keys

Husqy gives server administrators the ability to create API keys which can be used for authentication. API keys have the same level of access as administrators, so be careful when sharing these. API Keys allow you to interact with the Husqy API from another (custom) program or script. API keys are linked to a server and can only be used for interactions related to that server.

In the [API Keys dashboard](#additional-information) you can find an overview of all API keys of the server. Here you can also create, delete and copy the API keys. The keys themselves are not visible in the dashboard but you are able to copy the keys.

API Keys are also integrated with the logging module to make sure the API key does not get leaked by using it to make changes to settings. Instead the logging module will show: `An API key` instead of a user mention.

:::warning

Please handle these API keys with care and store them securely.

:::

## Errors

The Husqy API uses conventional HTTP response codes to indicate the success or failure of a request. The most common ranges you will encounter are `2xx` for successful requests and `4xx` for errors in the request. When errors occur (so not in the `2xx` range) Husqy makes use of the ProblemDetail response, f.e.:

```
{
  "type": "string",
  "title": "string",
  "status": 400,
  "detail": "string",
  "message": "string",
  "errors": [],
}
```

:::warning

- Codes in the `5xx` range are possible but most likely indicate in issue in the Husqy API servers.
- Both the `"message"` and `"errors"` keys in the ProblemDetails return are optional and may not be present in all error responses.

:::

## Links

- [General API](/api/general)
- [Module logging API](/api/modules/logging)
- [Module welcoming API](/api/modules/welcoming)
- [Module tempchannels API](/api/modules/tempchannels)
- [Module socials API](/api/modules/socials)
- [Module reactionroles API](/api/modules/reactionroles)
- [Module autoresponder API](/api/modules/autoresponder)
- [Module tickets API](/api/modules/tickets)
- [Module serverstats API](/api/modules/serverstats)
- [Module tags API](/api/modules/tags)
- [Module verfier API](/api/modules/verifier)
- [Module rules API](/api/modules/rules)
- [Module invite tracker API](/api/modules/invite-tracker)
- [Module polls API](/api/modules/polls)
- [Module giveaways API](/api/modules/giveaways)
- [Module reminders API](/api/modules/reminders)

## Additional Information

:::info

- To go to the API keys dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_API Keys_** tab;

:::
