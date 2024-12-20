---
description: Husqy API Keys
title: Husqy API Keys
sidebar_label: API Keys
keywords:
  - docs
  - api
  - keys
sidebar_position: 2
toc_max_heading_level: 6
---

## Overview

API Keys allow you to interact with the Husqy API from another (custom) program or script. API keys are linked to a server and can only be used for interactions related to that server.

In the [API Keys dashboard](#additional-information) you can find an overview of all API keys of the server. Here you can also create, delete and copy the API keys. The keys themselves are not visible in the dashboard but you are able to copy the keys.

API Keys are also integrated with the logging module to make sure the API key does not get leaked by using it to make changes to settings. Instead the logging module will show: `An API key` instead of a user mention.

:::warning

Please handle these API keys with care and store them securely.

:::

## API Endpoints

<details>
  <summary>GET - `/auth/api-key/`</summary>

Get all API keys for a specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the API keys of |

Possible errors:

- BadRequestError

</details>

<details>
  <summary>POST - `/auth/api-key/`</summary>

Create a new API key for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the API key for |

Possible errors:

- BadRequestError
- Unprocessable Entity

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 422,
        "message": "Unprocessable Entity! {reason}",
    },
},
```

</details>

<details>
  <summary>DELETE - `/auth/api-key/`</summary>

Delete an API key for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to create the API key for |
| api_key | yes | `string` | The API key to delete |

Possible errors:

- BadRequestError
- NotFoundError

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 404,
        "message": "Not Found! {reason}",
    },
},
```

- Unprocessable Entity

```
{
    "success": False,
    "data": {},
    "error": {
        "code": 422,
        "message": "Unprocessable Entity! {reason}",
    },
},
```

</details>

:::warning

API Keys are not able to get, create or delete other API keys.

:::

## Additional Information

:::info

- To go to the API keys dashboard, please do the following steps:
  1. Go to [https://dashboard.husqy.xyz/](https://dashboard.husqy.xyz/);
  2. Select the target server;
  3. In the sidebar press the **_API Keys_** tab;

:::