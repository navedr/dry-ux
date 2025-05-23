[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / DajaxiceFn

# Type Alias: DajaxiceFn()\<TArgs\>

```ts
type DajaxiceFn<TArgs> = <TResult>(args: ArgType<TArgs>) => Promise<TResult>;
```

Defined in: [src/dajaxice/Proxy.interface.ts:49](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/dajaxice/Proxy.interface.ts#L49)

Represents a Dajaxice function.

## Type Parameters

• **TArgs** = `void`

The type of the arguments.

## Type Parameters

• **TResult** = `any`

The type of the result.

## Parameters

### args

`ArgType`\<[`TArgs`](../types/DajaxiceFn.html#targs)\>

## Returns

`Promise`\<[`TResult`](../types/DajaxiceFn.html#__typetresult)\>
