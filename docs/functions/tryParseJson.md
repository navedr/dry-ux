[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / tryParseJson

# Function: tryParseJson()

```ts
function tryParseJson<T>(json: string, errorValue: {}): {}
```

Defined in: [src/helpers/utilities.ts:230](https://github.com/navedr/dry-ux/blob/e875b26275714d870ae7637bd802b35e75633e0b/src/helpers/utilities.ts#L230)

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
