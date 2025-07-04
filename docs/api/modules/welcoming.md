---
description: Husqy API welcoming module
title: Husqy API welcoming module
sidebar_label: Welcoming
keywords:
  - docs
  - api
  - module
  - welcoming
sidebar_position: 2
toc_max_heading_level: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## General

Endpoints related to general Husqy Modules Welcoming.

<details>
  <summary>GET - `/modules/welcoming/`</summary>

Home endpoint for the module welcoming Husqy API.

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
    - Get the home message: `https://api.husqy.xyz/v1/modules/welcoming`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/modules/welcoming/settings`</summary>

This endpoints returns the settings of welcoming module.

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
      "welcome_messages_dm_enabled": false,
      "welcome_messages_enabled": false,
      "welcome_messages_randomized": false,
      "welcome_messages_channel": "string",
      "leave_messages_enabled": false,
      "leave_messages_randomized": false,
      "leave_messages_channel": "string",
      "autorole_enabled": false,
      "autorole_role_ids": "string",
      "timedroles_enabled": false,
      "welcome_messages_dm_randomized": false,
      "welcome_message_dm_response_id": "string",
      "welcome_message_response_id": "string",
      "leave_message_response_id": "string"
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get the module welcoming settings of a server: `https://api.husqy.xyz/v1/modules/welcoming/settings?guild_id={guild_id}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>PUT - `/modules/welcoming/settings`</summary>

This endpoints updates the settings of welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to update the information for |
| welcome_messages_dm_enabled | no | `boolean` | The status of the DM welcome component |
| welcome_messages_dm_randomized | no | `boolean` | If responses of the DM welcome component are randomized |
| welcome_messages_dm_randomized | no | `boolean` | If responses of the DM welcome component are randomized |
| welcome_message_dm_response_id | no | `string` | The ID of the response to send when the DM welcome message are not randomized |
| welcome_messages_randomized | no | `boolean` | If responses of the Channel welcome component are randomized |
| welcome_messages_channel | no | `integer` | The ID of the channel where messages of the Channel welcome will be send |
| welcome_message_response_id | no | `string` | The ID of the response to send when the Channel welcome message are not randomized |
| leave_messages_enabled | no | `boolean` | The status of the Channel leave component |
| leave_messages_randomized | no | `boolean` | If responses of the Channel leave component are randomized |
| leave_messages_channel | no | `integer` | The ID of the channel where messages of the Channel leave will be send |
| leave_message_response_id | no | `string` | The ID of the response to send when the Channel leave message are not randomized |
| autorole_role_ids | no | `list` | A list of role IDs to automatically give to the user who joins the server |
| autorole_enabled | no | `boolean` | The status of the autorole component |
| timedroles_enabled | no | `boolean` | The status of the timedrole component |
</TabItem>
<TabItem value="success-response" label="Success response">

```
{
  "data": {
    "settings": {
      "id": 0,
      "guild_id": "string",
      "welcome_messages_dm_enabled": false,
      "welcome_messages_enabled": false,
      "welcome_messages_randomized": false,
      "welcome_messages_channel": "string",
      "leave_messages_enabled": false,
      "leave_messages_randomized": false,
      "leave_messages_channel": "string",
      "autorole_enabled": false,
      "autorole_role_ids": "string",
      "timedroles_enabled": false,
      "welcome_messages_dm_randomized": false,
      "welcome_message_dm_response_id": "string",
      "welcome_message_response_id": "string",
      "leave_message_response_id": "string"
    }
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    - Change one of the module welcoming settings of a server: `https://api.husqy.xyz/v1/modules/welcoming/settings`:
    ```
    {
      "guild_id": {guild_id},
      "timedroles_enabled": {new_timedroles_enabled}
    }
    ```
    - Change multiple of the module welcoming settings of a server: `https://api.husqy.xyz/v1/modules/welcoming/settings`:
    ```
    {
      "guild_id": {guild_id},
      "welcome_messages_dm_enabled": {new_welcome_messages_dm_enabled},
      "welcome_messages_dm_randomized": {new_welcome_messages_dm_randomized},
      "welcome_messages_dm_response_id": {new_welcome_messages_dm_response_id}
    }
    ```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>DELETE - `/modules/welcoming/settings`</summary>

This endpoints deletes the settings of welcoming module.

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
      "welcome_messages_dm_enabled": false,
      "welcome_messages_enabled": false,
      "welcome_messages_randomized": false,
      "welcome_messages_channel": "string",
      "leave_messages_enabled": false,
      "leave_messages_randomized": false,
      "leave_messages_channel": "string",
      "autorole_enabled": false,
      "autorole_role_ids": "string",
      "timedroles_enabled": false,
      "welcome_messages_dm_randomized": false,
      "welcome_message_dm_response_id": "string",
      "welcome_message_response_id": "string",
      "leave_message_response_id": "string"
    },
    "responses": [
      {
        "id": 0,
        "guild_id": "string",
        "response_id": "string",
        "response_type": 0,
        "is_embed": false,
        "content": "string"
      }
    ],
    "timedroles": [
      {
        "id": 0,
        "guild_id": "string",
        "timedrole_id": "string",
        "role_id": "string",
        "add_after": 0
      }
    ]
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    - Delete the module welcoming settings of a server: `https://api.husqy.xyz/v1/modules/welcoming/settings`:
    ```
    {
      "guild_id": {guild_id}
    }
    ```
  </TabItem>
</Tabs>

</details>

## Status

Endpoints related to the status of the module.

<details>
  <summary>GET - `/modules/welcoming/status`</summary>

This endpoints returns the status of the welcoming module.

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
    - Get the status: `https://api.husqy.xyz/v1/modules/welcoming/status`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>POST - `/modules/welcoming/enable`</summary>

This endpoints enables the welcoming module.

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
      "welcome_messages_dm_enabled": false,
      "welcome_messages_enabled": false,
      "welcome_messages_randomized": false,
      "welcome_messages_channel": "string",
      "leave_messages_enabled": false,
      "leave_messages_randomized": false,
      "leave_messages_channel": "string",
      "autorole_enabled": false,
      "autorole_role_ids": "string",
      "timedroles_enabled": false,
      "welcome_messages_dm_randomized": false,
      "welcome_message_dm_response_id": "string",
      "welcome_message_response_id": "string",
      "leave_message_response_id": "string"
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Enable the module: `https://api.husqy.xyz/v1/modules/welcoming/enable`:
    ```
    {
      "guild_id": {guild_id}
    }
    ```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>POST - `/modules/welcoming/disable`</summary>

This endpoints disables the welcoming module.

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
      "welcome_messages_dm_enabled": false,
      "welcome_messages_enabled": false,
      "welcome_messages_randomized": false,
      "welcome_messages_channel": "string",
      "leave_messages_enabled": false,
      "leave_messages_randomized": false,
      "leave_messages_channel": "string",
      "autorole_enabled": false,
      "autorole_role_ids": "string",
      "timedroles_enabled": false,
      "welcome_messages_dm_randomized": false,
      "welcome_message_dm_response_id": "string",
      "welcome_message_response_id": "string",
      "leave_message_response_id": "string"
    },
    "responses": [
      {
        "id": 0,
        "guild_id": "string",
        "response_id": "string",
        "response_type": 0,
        "is_embed": false,
        "content": "string"
      }
    ],
    "timedroles": [
      {
        "id": 0,
        "guild_id": "string",
        "timedrole_id": "string",
        "role_id": "string",
        "add_after": 0
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Disable the module: `https://api.husqy.xyz/v1/modules/welcoming/disable`:
    ```
    {
      "guild_id": {guild_id}
    }
    ```
  </TabItem>
</Tabs>

</details>

## Responses

Endpoint related to responses of the welcoming module.

<details>
  <summary>GET - `/modules/welcoming/responses`</summary>

This endpoints gets the responses of the welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to disable the module for |
| response_type | no | `integer` | The response type to get (1 = DM welcome messages, 2 = Channel welcome messages, 3 = Leave channel messages) |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "responses": [
      {
        "id": 0,
        "guild_id": "string",
        "response_id": "string",
        "response_type": 0,
        "is_embed": false,
        "content": "string"
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get all responses: `https://api.husqy.xyz/v1/modules/welcoming/responses?guild_id={guild_id}`:
    - Get all responses of response type 2: `https://api.husqy.xyz/v1/modules/welcoming/responses?guild_id={guild_id}&response_type=2`:
  </TabItem>
</Tabs>

</details>

<details>
  <summary>POST - `/modules/welcoming/responses`</summary>

This endpoint creates a new response for the welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to add the response for |
| response_type | yes | `integer` | The type of the response (1 = DM welcome messages, 2 = Channel welcome messages, 3 = Leave channel messages) |
| is_embed | yes | `boolean` | If the content is a Husqy embed config |
| content | yes | `string` | The content of the response (can be Husqy embed config) |
</TabItem>
<TabItem value="success-response" label="Success response">

```
{
  "data": {
    "response": {
      "id": 0,
      "guild_id": "string",
      "response_id": "string",
      "response_type": 0,
      "is_embed": false,
      "content": "string"
    }
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    - Create a new response: `https://api.husqy.xyz/v1/modules/welcoming/responses`:
    ```
    {
      "guild_id": {guild_id},
      "response_type": {response_type},
      "is_embed": {is_embed},
      "content": "{content}"
    }
    ```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/modules/welcoming/responses/{response_id}`</summary>

This endpoints gets the specified response of the welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to get the response in |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "response": {
      "id": 0,
      "guild_id": "string",
      "response_id": "string",
      "response_type": 0,
      "is_embed": false,
      "content": "string"
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get the responses: `https://api.husqy.xyz/v1/modules/welcoming/responses/{response_id}?guild_id={guild_id}`:
  </TabItem>
</Tabs>

</details>

<details>
  <summary>DELETE - `/modules/welcoming/responses/{response_id}`</summary>

This endpoint deletes the specified response for the welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to delete the response for |
</TabItem>
<TabItem value="success-response" label="Success response">

```
{
  "data": {
    "response": {
      "id": 0,
      "guild_id": "string",
      "response_id": "string",
      "response_type": 0,
      "is_embed": false,
      "content": "string"
    }
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    - Delete a response: `https://api.husqy.xyz/v1/modules/welcoming/responses/{response_id}`:
    ```
    {
      "guild_id": {guild_id},
    }
    ```
  </TabItem>
</Tabs>

</details>

## Timedroles

Endpoint related to timedroles of the welcoming module.

<details>
  <summary>GET - `/modules/welcoming/timedroles`</summary>

This endpoints gets the timedroles of the welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to get the timedrole for |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "timedroles": [
      {
        "id": 0,
        "guild_id": "string",
        "timedrole_id": "string",
        "role_id": "string",
        "add_after": 0
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get timedroles: `https://api.husqy.xyz/v1/modules/welcoming/timedroles?guild_id={guild_id}`:
  </TabItem>
</Tabs>

</details>

<details>
  <summary>POST - `/modules/welcoming/timedroles`</summary>

This endpoint creates a new timedrole for the welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to add the response for |
| role_id | yes | `integer` | The ID of the role to add to the member |
| add_after | yes | `integer` | The duration in seconds a user must be in a server to get the role |
</TabItem>
<TabItem value="success-response" label="Success response">

```
{
  "data": {
    "timedrole": {
      "id": 0,
      "guild_id": "string",
      "timedrole_id": "string",
      "role_id": "string",
      "add_after": 0
    }
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    - Create a new timedrole: `https://api.husqy.xyz/v1/modules/welcoming/timedroles`:
    ```
    {
      "guild_id": {guild_id},
      "role_id": {role_id},
      "add_after": {add_after},
    }
    ```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/modules/welcoming/timedroles/{timedrole_id}`</summary>

This endpoints gets the specified timedrole of the welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to get the timedrole in |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "timedrole": {
      "id": 0,
      "guild_id": "string",
      "timedrole_id": "string",
      "role_id": "string",
      "add_after": 0
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get the timedroles: `https://api.husqy.xyz/v1/modules/welcoming/timedroles/{timedrole_id}?guild_id={guild_id}`:
  </TabItem>
</Tabs>

</details>

<details>
  <summary>DELETE - `/modules/welcoming/timedroles/{timedrole_id}`</summary>

This endpoint deletes the specified timedrole for the welcoming module.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to delete the timedrole for |
</TabItem>
<TabItem value="success-response" label="Success response">

```
{
  "data": {
    "timedrole": {
      "id": 0,
      "guild_id": "string",
      "timedrole_id": "string",
      "role_id": "string",
      "add_after": 0
    }
  }
}
```

  </TabItem>
  <TabItem value="examples" label="Examples">
    - Delete a timedrole: `https://api.husqy.xyz/v1/modules/welcoming/timedroles/{timedrole_id}`:
    ```
    {
      "guild_id": {guild_id},
    }
    ```
  </TabItem>
</Tabs>

</details>

## Checks

Endpoint related to triggering the checking the components of the welcoming module.

<details>
  <summary>POST - `/modules/welcoming/check/welcome/dm`</summary>

:::danger

Do not use this endpoint yourself! Messages will be send by Husqy when needed.

:::

This endpoint checks the member join event to validate the sending of a response to the members DM.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the event in |
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

<details>
  <summary>POST - `/modules/welcoming/check/welcome/channel`</summary>

:::danger

Do not use this endpoint yourself! Messages will be send by Husqy when needed.

:::

This endpoint checks the member join event to validate the sending of a response to the welcome channel.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the event in |
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

<details>
  <summary>POST - `/modules/welcoming/check/leave/channel`</summary>

:::danger

Do not use this endpoint yourself! Messages will be send by Husqy when needed.

:::

This endpoint checks the member leave event to validate the sending of a response to the leave channel.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the event in |
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

<details>
  <summary>POST - `/modules/welcoming/check/role/on-join`</summary>

:::danger

Do not use this endpoint yourself! Roles will be added by Husqy when needed.

:::

This endpoint checks the member join event to validate if a role must be added.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the event in |
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

<details>
  <summary>POST - `/modules/welcoming/check/role/timed`</summary>

:::danger

Do not use this endpoint yourself! Roles will be added by Husqy when needed.

:::

This endpoint checks if members need to get a configured timedrole.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the event in |
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

Endpoints related to privacy and the welcoming module

<details>
  <summary>GET - `/modules/welcoming/privacy/get-user-entries`</summary>

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
  <summary>DELETE - `/modules/welcoming/privacy/delete-user-entries`</summary>

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
