[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / useCountdown

# Function: useCountdown()

```ts
function useCountdown(seconds: number, onExpiry: () => void): number
```

Defined in: [src/helpers/utilities.ts:64](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/helpers/utilities.ts#L64)

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
