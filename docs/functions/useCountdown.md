[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / useCountdown

# Function: useCountdown()

> **useCountdown**(`seconds`, `onExpiry`): `number`

Defined in: [src/helpers/utilities.ts:64](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/utilities.ts#L64)

Creates a countdown timer that will call the onExpiry function when the timer expires.

## Parameters

### seconds

`number`

The number of seconds to count down.

### onExpiry

() => `void`

The function to call when the timer expires.

## Returns

`number`

The number of seconds remaining.
