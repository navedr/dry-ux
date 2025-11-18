[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / importScript

# Function: importScript()

```ts
function importScript(
   resourceUrl: string, 
   singleton: boolean, 
placement: "body" | "head"): Promise<void>
```

Defined in: [src/helpers/utilities.ts:18](https://github.com/navedr/dry-ux/blob/68b33ffc82c025d784a7039e48e60acf27bc7ece/src/helpers/utilities.ts#L18)

Imports a script and returns a promise that resolves when the script is loaded.

## Parameters

### resourceUrl

`string`

The url of the script to load.

### singleton

`boolean` = `true`

If true, the script will only be loaded once.

### placement

"body" or "head" to specify where the script should be placed.

`"body"` | `"head"`

## Returns

`Promise`\<`void`\>
