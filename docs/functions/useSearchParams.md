[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / useSearchParams

# Function: useSearchParams()

```ts
function useSearchParams<T>(): {
  clearParams: <TKey>(...keys: TKey[]) => void;
  params: T;
  setParam: <TKey, TValue>(key: TKey, value: TValue) => void;
}
```

Defined in: [src/helpers/utilities.ts:360](https://github.com/navedr/dry-ux/blob/fe5e7a8c63b87cc39fd5f77cac09ec0c59566f52/src/helpers/utilities.ts#L360)

Hook to get and set URL search parameters.

## Type Parameters

• **T**

The type of the URL parameters.

## Returns

```ts
{
  clearParams: <TKey>(...keys: TKey[]) => void;
  params: T;
  setParam: <TKey, TValue>(key: TKey, value: TValue) => void;
}
```

An object containing the current URL parameters and a function to set a parameter.

### clearParams()

```ts
clearParams: <TKey>(...keys: TKey[]) => void;
```

#### Type Parameters

• **TKey** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### keys

...`TKey`[]

#### Returns

`void`

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
