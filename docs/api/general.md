---
description: Husqy API General endpoints
title: Husqy API General
sidebar_label: General
keywords:
  - docs
  - api
  - general
sidebar_position: 4
toc_max_heading_level: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## General

Endpoints related to general functionality.

<details>
  <summary>GET - `/`</summary>

Home endpoint for the General Husqy API.

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
    - Get the home message: `https://api.husqy.xyz/v1/`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/settings`</summary>

This endpoints returns the settings of a guild.

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
    "metadata": {
      "name": "string",
      "id": "string",
      "icon": "string",
      "active": true
    },
    "settings": {
      "id": 0,
      "guild_id": "string",
      "language": "string",
      "gmt": "string",
      "unit_system": "string",
      "auto_delete": "string",
      "max_warns": "string",
      "auto_kick_enabled": true,
      "auto_kick_role_id": "string",
      "module_logging": false,
      "module_tempchannel": false,
      "module_socials": false,
      "module_reactionroles": false,
      "module_autoresponder": false,
      "module_tickets": false,
      "module_serverstats": false,
      "module_tags": false,
      "module_welcoming": false,
      "module_verifier": false,
      "module_rules": false,
      "module_invite_tracker": false,
      "module_polls": false,
      "module_reminders": false
    },
    "entitlements": [
      {
        "id": 0,
        "guild_id": "string",
        "sku_id": "string",
        "entitlement_type": 0,
        "start_at": "1970-01-01T00:00:00.000Z",
        "ends_at": "1970-01-01T00:00:00.000Z",
        "deleted": false
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get the Husqy settings of a server: `https://api.husqy.xyz/v1/settings?guild_id={guild_id}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>PUT - `/settings`</summary>

This endpoints updates the settings of a guild and returns the new settings.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to update information for |
| language | no | `string` | The new language for the guild |
| gmt | no | `string` | The new timezone for the guild |
| unit_system | no | `string` | The new unit system for the guild |
| auto_delete | no | `integer` | The new auto delete for the guild |
| max_warns | no | `integer` | The new max warns for the guild |
| auto_kick_enabled | no | `boolean` | The new auto kick enabled value for the guild |
| auto_kick_role_id | no | `integer` | (May be None) The new ID for the auto kick role for the guild |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "settings": {
      "id": 0,
      "guild_id": "string",
      "language": "string",
      "gmt": "string",
      "unit_system": "string",
      "auto_delete": "string",
      "max_warns": "string",
      "auto_kick_enabled": true,
      "auto_kick_role_id": "string",
      "module_logging": false,
      "module_tempchannel": false,
      "module_socials": false,
      "module_reactionroles": false,
      "module_autoresponder": false,
      "module_tickets": false,
      "module_serverstats": false,
      "module_tags": false,
      "module_welcoming": false,
      "module_verifier": false,
      "module_rules": false,
      "module_invite_tracker": false,
      "module_polls": false,
      "module_reminders": false
    }
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Change one Husqy setting for a guild: `https://api.husqy.xyz/v1/settings`. Request body:
    ```
    {
      "guild_id": {guild_id},
      "language": {new_language}
    }
    ```  
    - Change multiple Husqy setting for a guild: `https://api.husqy.xyz/v1/settings`. Request body:
    ```
    {
      "guild_id": {guild_id},
      "language": {new_language},
      "auto_delete": {new_auto_delete},
      "max_warns": {new_max_warns}
      "auto_kick_role_id": {new_auto_kick_role_id}
    }
    ```  
    - Remove auto kick role ID for a guild: `https://api.husqy.xyz/v1/settings`. Request body:
    ```
    {
      "guild_id": {guild_id},
      "auto_kick_role_id": null
    }
    ```  
  </TabItem>
</Tabs>

</details>

## Helpers

Endpoints related to helper functionality.

<details>
  <summary>GET - `/helpers/get-husqy-for-guild`</summary>

This endpoints returns a list of guilds for the authenticated user and with that if Husqy is in that guild by marking active as either true or false.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
This endpoint does not have any parameters.
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "guilds": [
      {
        "name": "string",
        "id": "string",
        "icon": "string",
        "active": true
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get guilds of signed in user: `https://api.husqy.xyz/v1/helpers/get-husqy-for-guild`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/helpers/get-variable-replaced-content`</summary>

This endpoint returns a the text where the Husqy variables are replaced with the desired values.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| content | yes | `string` | The content to replace |
| language | yes | `string` | The language to use when replacing the Husqy variables, preferably the language set in the target guild |
| timezone | yes | `string` | The timezone to use when replacing the Husqy variables, preferably the timezone set in the target guild |
| guild_id | no | `integer` | The ID of the guild to use for Husqy variables related to guilds |
| user_id | no | `integer` | The ID of the user to use for Husqy variables related to users |
| channel_id | no | `integer` | The ID of the channel to use for Husqy variables related to channels |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "content": "string"
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get basic variable replaced content: `https://api.husqy.xyz/v1/helpers/get-husqy-for-guild?content={content}&language={language}&timezone={timezone}`
    - Get replace server variables replaced content: `https://api.husqy.xyz/v1/helpers/get-husqy-for-guild?content={content}&language={language}&timezone={timezone}&guild_id={guild_id}`
    - Get replace user variables replaced content: `https://api.husqy.xyz/v1/helpers/get-husqy-for-guild?content={content}&language={language}&timezone={timezone}&user_id={user_id}`
    - Get replace channel variables replaced content: `https://api.husqy.xyz/v1/helpers/get-husqy-for-guild?content={content}&language={language}&timezone={timezone}&channel_id={channel_id}`
    - Get replace multiple variables replaced content: `https://api.husqy.xyz/v1/helpers/get-husqy-for-guild?content={content}&language={language}&timezone={timezone}&guild_id={guild_id}&user_id={user_id}&channel_id={channel_id}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/helpers/get-supported-languages`</summary>

Endpoint to return the current supported languages by Husqy.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
This endpoint does not have any parameters.
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "languages": [
      {
        "full_name": "string",
        "abbreviation": "string"
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get supported languages: `https://api.husqy.xyz/v1/helpers/get-supported-languages`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/helpers/get-supported-unit-systems`</summary>

Endpoint to return the current supported unit systems by Husqy.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
This endpoint does not have any parameters.
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "unit_systems": [
      "string"
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get supported unit systems: `https://api.husqy.xyz/v1/helpers/get-supported-unit-systems`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/helpers/get-supported-timezones`</summary>

Endpoint to return the current supported timezones by Husqy.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
This endpoint does not have any parameters.
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "timezones": [
      "string"
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get supported timezones: `https://api.husqy.xyz/v1/helpers/get-supported-timezones`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/helpers/get-guild-roles`</summary>

This endpoints returns the roles in a guild.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to fetch the roles in |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "roles": [
      {
        "name": "string",
        "id": "string"
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get roles in a server: `https://api.husqy.xyz/v1/helpers/get-guild-roles?guild_id={guild_id}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/helpers/get-guild-channels`</summary>

This endpoints returns the channels in a guild.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to fetch the roles in |
| types | no | `list` | The channel types to filter for. Possible options are: text, voice, category, news, stage and forum. |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "roles": [
      {
        "name": "string",
        "id": "string"
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get channels in a server: `https://api.husqy.xyz/v1/helpers/get-guild-channels?guild_id={guild_id}`
    - Get a specific type of channel in a server: `https://api.husqy.xyz/v1/helpers/get-guild-channels?guild_id={guild_id}&types={type}`
    - Get a multiple type of channels in a server: `https://api.husqy.xyz/v1/helpers/get-guild-channels?guild_id={guild_id}&types={type}&types={type}&types={type}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/helpers/get-guild-users`</summary>

This endpoints returns the users in a guild.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to fetch the users in |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "users": [
      {
        "name": "string",
        "id": "string",
        "image": "string",
        "prevent_data_collection": true
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get users in a server: `https://api.husqy.xyz/v1/helpers/get-guild-users?guild_id={guild_id}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>GET - `/helpers/get-guild-emojis`</summary>

This endpoints returns the custom emojis in a guild.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to fetch the custom emojis in |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "emojis": [
      {
        "id": "string",
        "name": "string",
        "animated": true,
        "colons_required": true,
        "managed": true,
        "url": "string"
      }
    ]
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Get custom emojis in a server: `https://api.husqy.xyz/v1/helpers/get-guild-emojis?guild_id={guild_id}`
  </TabItem>
</Tabs>

</details>

## Authentication

Endpoints related to authentication.

<details>
  <summary>POST - `/auth/authorize`</summary>

This endpoints validates an access token or API key and returns authentication information.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| access_token | yes | `string` | The access token to authorize |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "sub": "string",
    "access_token": "string",
    "target": "string"
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Authorize a user to an endpoint and get metadata: `https://api.husqy.xyz/v1/auth/authorize`. Request body:
    ```
    {
      "access_token": {access_token}
    }
    ```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>POST - `/auth/validate-user-permissions`</summary>

Endpoint to validate if the user making a request to the Husqy API is authorized to do so.

<Tabs>
  <TabItem value="parameters" label="Paramters" default>
| field | required | type | description |
| ----- | -------- | ---- | ----------- |
| guild_id | yes | `integer` | The ID of the guild to check the user for |
| target | yes | `integer` | The ID of the user to check |
  </TabItem>
  <TabItem value="success-response" label="Success response">
```
{
  "data": {
    "has_access": true
  }
}
```
  </TabItem>
  <TabItem value="examples" label="Examples">
    - Validate if a user has permissions to a server: `https://api.husqy.xyz/v1/auth/validate-user-permissions`. Request body:
    ```
    {
      "guild_id": {guild_id},
      "target": {target}
    }
    ```
  </TabItem>
</Tabs>

</details>

## Privacy

Endpoints related to privacy and other parts of Husqy

<details>
  <summary>GET - `/privacy/get-user-entries`</summary>

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
    - Get user entries: `https://api.husqy.xyz/v1/privacy/get-user-entries?guild_id={guild_id}&privacy_member_id={privacy_member_id}`
  </TabItem>
</Tabs>

</details>

<details>
  <summary>DELETE - `/privacy/delete-user-entries`</summary>

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
    - Delete user entries: `https://api.husqy.xyz/v1/privacy/get-user-entries`. Request body:
    ```
    {
      "guild_id": {guild_id},
      "privacy_member_id": {privacy_member_id}
    }
    ```
  </TabItem>
</Tabs>

</details>
