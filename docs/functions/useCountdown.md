[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / useCountdown

# Function: useCountdown()

```ts
function useCountdown(seconds: number, onExpiry: () => void): number
```

Defined in: [src/helpers/utilities.ts:64](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/helpers/utilities.ts#L64)

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
