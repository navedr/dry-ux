[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / tryParseJson

# Function: tryParseJson()

```ts
function tryParseJson<T>(json: string, errorValue: {}): {}
```

Defined in: [src/helpers/utilities.ts:249](https://github.com/navedr/dry-ux/blob/357842b7190c45081ec89f2dfed62dd2067eff7b/src/helpers/utilities.ts#L249)

Parses a JSON string and returns the corresponding object.

## Type Parameters

• **T** = `any`

## Parameters

### json

`string`

The JSON string to parse.

### errorValue

The value to return if parsing fails.

## Returns

```ts
{}
```

The parsed object or the error value.
