[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / useSearchParams

# Function: useSearchParams()

```ts
function useSearchParams<T>(): {
  params: T;
  setParam: <TKey, TValue>(key: TKey, value: TValue) => void;
}
```

Defined in: [src/helpers/utilities.ts:341](https://github.com/navedr/dry-ux/blob/05824901684f5086b63edd3699fcdb1704ab19f9/src/helpers/utilities.ts#L341)

Hook to get and set URL search parameters.

## Type Parameters

• **T**

The type of the URL parameters.

## Returns

```ts
{
  params: T;
  setParam: <TKey, TValue>(key: TKey, value: TValue) => void;
}
```

An object containing the current URL parameters and a function to set a parameter.

### params

```ts
params: T;
```

### setParam()

```ts
setParam: <TKey, TValue>(key: TKey, value: TValue) => void;
```

#### Type Parameters

• **TKey** *extends* `string` \| `number` \| `symbol`

• **TValue**

#### Parameters

##### key

`TKey`

##### value

`TValue`

#### Returns

`void`
