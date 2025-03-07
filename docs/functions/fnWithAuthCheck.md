[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / fnWithAuthCheck

# Function: fnWithAuthCheck()

> **fnWithAuthCheck**(`fn`, `authCheckUrl`, `authRedirectUrl`): `Promise`\<`void`\>

Defined in: [src/helpers/utilities.ts:106](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/utilities.ts#L106)

Calls the authCheckUrl to check if the user is authenticated. The URL should return a JSON response with
just `true` or `false` to indicate if the user is authenticated. If user is authenticated, it will call the
function (fn), otherwise it will redirect to `authRedirectUrl`.

## Parameters

### fn

`Function`

The function to call if the user is authenticated.

### authCheckUrl

`string`

The URL to call to check if the user is authenticated.

### authRedirectUrl

`string`

The URL to redirect to if the user is not authenticated.

## Returns

`Promise`\<`void`\>
