---
description: Husqy API error codes
title: Husqy API error codes
sidebar_label: Default error codes
keywords:
  - docs
  - api
  - error
  - codes
sidebar_position: 1
toc_max_heading_level: 6
---

:::note

Besides these error codes, some endpoints may raise other error codes specifically for that endpoint. These will be described at the documentation for those endpoints!

:::

<details>
  <summary>BadRequestError</summary>

Returned when a request is send that is not conform the desired query parameters or body data.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 400,
      "message": "Bad Request Error! No data found in request!",
  },
}
```

</details>

<details>
  <summary>DatabaseError</summary>

Returned when an interaction with Husqy's database failes causing the Husqy API not being able to handle the request correctly.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 802,
      "message": "Unable to edit the database for the guild!",
  },
}
```

</details>

<details>
  <summary>DiscordApiInteractionError</summary>

Returned when an interaction with the Discord API fails causing the Husqy API not being able to handle the request correctly.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 804,
      "message": "Got an error interacting with the Discord API. Does Husqy have the right permissions?",
  },
}
```

</details>

<details>
  <summary>InternalServerError</summary>

Returned when the Husqy API is not able to successfully handle the request, which is not directly known. When this error keeps occuring, please let us know!

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 500,
      "message": "Internal Server Error! Something went wrong, please retry or contact our support!",
  },
}
```

</details><details>
  <summary>ModuleDisabledError</summary>

Returns when a request is done to a Module Husqy API but the request cannot be handled because the module is disabled.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 800,
      "message": "This module is disabled for this guild!",
  },
}
```

</details>

<details>
  <summary>ModuleEnabledError</summary>

Returns when a request is done to a Module Husqy API but the request cannot be handled because the module is enabled.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 801,
      "message": "This module is enabled for this guild!",
  },
}
```

</details>

<details>
  <summary>ForbiddenError</summary>

Returns when you do not have access to the resource but are authenticated.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 403,
      "message": "Forbidden! You are not allowed to access this resource!",
  },
}
```

</details>

<details>
  <summary>NotFoundError</summary>

Returns when a page is not found.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 404,
      "message": "Not Found! The requested URL does not exist!",
  },
}
```

</details>

<details>
  <summary>SettingsError</summary>

Returns when the settings value of a fetched settings is not what the Husqy API expects its to be.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 801,
      "message": "Unable to fetch the settings of the guild!",
  },
}
```

</details>

<details>
  <summary>UnauthorizedError</summary>

Returns when the person or application making the request is not authorized to make the request.

Returns:

```
{
  "success": False,
  "data": {},
  "error": {
      "code": 401,
      "message": "Unauthorized! You are not allowed to access this endpoint",
  },
}
```

</details>