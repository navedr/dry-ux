[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / preventDefault

# Function: preventDefault()

```ts
function preventDefault(handler?: (event: any) => void): (event: any) => void
```

Defined in: [src/helpers/utilities.ts:7](https://github.com/navedr/dry-ux/blob/709faf84d0a46bbe07884742afd585685ac19a7a/src/helpers/utilities.ts#L7)

Returns a function that will call the given handler and prevent the default event behavior.

## Parameters

### handler?

(`event`: `any`) => `void`

The function to call when the event is triggered.

## Returns

`Function`

### Parameters

#### event

`any`

### Returns

`void`
