---
description: Husqy API verifier module
title: Husqy API verifier module
sidebar_label: Verifier
keywords:
  - docs
  - api
  - module
  - verifier
sidebar_position: 10
toc_max_heading_level: 6
---

## General

Endpoints related to general Husqy Modules Verifier.

<details>
  <summary>GET - `/modules/verifier/`</summary>

Home endpoint for the Modules Verifier Husqy API. Returns only success message displaying that it is the Modules Verifier Husqy API route.

</details>

<details>
  <summary>GET - `/modules/verifier/settings`</summary>

Get the settings of the verifier module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>PUT - `/modules/verifier/settings`</summary>

Endpoint to change the settings of the verifier module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to change the verifier module settings for |
| verifier_type | yes | `integer` | The type to use for verification. 1 = Click-to-pass, 2 = Passphrase and 3 = Web. |
| verifier_channel | yes | `integer` | The ID of the channel to send verification requests in. Can be 'dm' or None to use User DM |
| verifier_verified_role_ids | yes | `list` | A list of role ID's to give to a user when they are successfully verified |
| verifier_message_is_embed | yes | `boolean` | If the message to send to users is an Husqy embed config |
| verifier_message_completed_is_embed | yes | `boolean` | If the message to send to users after successful verification is an Husqy embed config |
| verifier_message_content | yes | `string` | The message configuration to send to users when they are requested to verify. Can be a Husqy embed config is "verifier_message_is_embed" is True |
| verifier_message_content_success | yes | `string` | The message configuration to send to users when verification has been successfully completed. Can be a Husqy embed config when "verifier_message_completed_is_embed" is True |
| verifier_passphrase | yes | `string` | The passphrase to use. Can be None if verifier_type is not 2 (Passphrase) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError
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
  <summary>DELETE - `/modules/verifier/settings/delete`</summary>

Delete all settings of the verifier module for a specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the settings from |

Possible errors:

- BadRequestError

</details>

## Status

Endpoints related to the status of the module.

<details>
  <summary>GET - `/modules/verifier/status`</summary>

Get the status of the verifier module for the specified guild.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to check the status of |

Possible errors:

- BadRequestError
- SettingsError

</details>

<details>
  <summary>POST - `/modules/verifier/enable`</summary>

Endpoint to enable the verifier module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to enable the verifier module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleEnabledError
- DatabaseError

</details>

<details>
  <summary>POST - `/modules/verifier/disable`</summary>

Endpoint to disable the verifier module for the specified guild.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to disable the verifier module for |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- DatabaseError

</details>

## Entries

Endpoint related to verifier entries of the verifier module.

<details>
  <summary>GET - `/modules/verifier/entries`</summary>

Endpoint to get the entries of the verifier module.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the verifier entries from |
| page | no | `integer` | The page number to get (default = 1) |
| page_size | no | `integer` | The amount of panels to return in one page (default = 10) |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

<details>
  <summary>GET - `/modules/verifier/entry/{verifier_id}`</summary>

Endpoint to get an entry of the verifier module.

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError

</details>

## Events

Endpoint related to triggering the verification processes of the verifier module.

<details>
  <summary>POST - `/modules/verifier/event/create-verification`</summary>

:::danger

Do not use this endpoint yourself! Verifications will be created and send by Husqy when needed.

:::

Endpoint to check if a verification should be created and send.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild where the member has joined |
| application_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |
| requester | yes | `integer` | The ID of the user who ran the `/verifier entry retrigger` command. Can be None |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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
  <summary>POST - `/modules/verifier/event/handle-verification`</summary>

:::danger

Do not use this endpoint yourself! Verifications will be created and send by Husqy when needed.

:::

Endpoint to check if a verification should be created and send.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| verifier_id | yes | `string` | The ID of the verifier entry that needs to be validated |
| interaction_id | yes | `integer` | The ID of the application interaction. Can be None |
| token | yes | `string` | The token of the interaction. Can be None |
| interaction_type | yes | `string` | The type of the interaction. Can be "ComponentInteraction", "ModalInteraction", "WebLogin" or None |
| passphrase_value | yes | `string` | The value of the passphrase the member filled in |

Possible errors:

- BadRequestError
- SettingsError
- ModuleDisabledError
- InternalServerError
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

## Privacy

Endpoints related to privacy and the verifier module

<details>
  <summary>GET - `/modules/verifier/privacy/get-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to get the amount of references in verifier to your user.

Query string parameters:
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to get the specified references in |
| privacy_member_id | yes | `integer` | The ID of the member who wants to check their references |

Possible errors:

- BadRequestError
- ForbiddenError
- InternalServerError

</details>

<details>
  <summary>DELETE - `/modules/verifier/privacy/delete-user-entries`</summary>

:::danger

Do not use this endpoint yourself! This endpoint will be used by Husqy's Privacy configurator (`/privacy`) command.

:::

Endpoint to delete the references in verifier to your user.

Body data (JSON):
| field | required | type | description |
| --- | --- | --- | --- |
| guild_id | yes | `integer` | The ID of the guild to delete the specified references in |
| privacy_member_id | yes | `integer` | The ID of the member who wants to remove their references |

Possible errors:

- BadRequestError
- ForbiddenError
- InternalServerError

</details>