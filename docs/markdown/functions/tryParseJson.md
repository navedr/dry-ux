[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / tryParseJson

# Function: tryParseJson()

```ts
function tryParseJson<T>(json: string, errorValue: {}): {}
```

Defined in: [src/helpers/utilities.ts:230](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/helpers/utilities.ts#L230)

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
