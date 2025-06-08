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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

Endpoint to get all API keys in the server.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the API keys in |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "api_keys": [
      {
        "id": 0,
        "guild_id": "string",
        "api_key": "string",
        "last_use": "1970-01-01T00:00:00.000Z"
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - List API keys: `https://api.husqy.xyz/v1/auth/api-key?guild_id={guild_id}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>POST - `/auth/api-key/`</summary>

Endpoint to create a new API key in the server.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to create the API keys in |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "api_key": {
      "id": 0,
      "guild_id": "string",
      "api_key": "string",
      "last_use": "1970-01-01T00:00:00.000Z"
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Create a new API key: `https://api.husqy.xyz/v1/auth/api-key`. Request body:
    ```
    {
      "guild_id": {guild_id},
    }
    ```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>DELETE - `/auth/api-key/`</summary>

Endpoint to delete an API key in the server.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to delete the API keys in |
| api_key | yes | `string` | The API key to delete |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "api_key": {
      "id": 0,
      "guild_id": "string",
      "api_key": "string",
      "last_use": "1970-01-01T00:00:00.000Z"
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Delete an API key: `https://api.husqy.xyz/v1/auth/api-key`. Request body:
    ```
    {
      "guild_id": {guild_id},
      "api_key": {api_key}
    }
    ```
  </TabItem>
</Tabs>

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
