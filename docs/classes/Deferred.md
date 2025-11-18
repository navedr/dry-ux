[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / Deferred

# Class: Deferred\<T\>

Defined in: [src/helpers/utilities.ts:213](https://github.com/navedr/dry-ux/blob/fe5e7a8c63b87cc39fd5f77cac09ec0c59566f52/src/helpers/utilities.ts#L213)

A class representing a deferred promise.

## Type Parameters

• **T**

## Constructors

### new Deferred()

```ts
new Deferred<T>(): Deferred<T>
```

Defined in: [src/helpers/utilities.ts:221](https://github.com/navedr/dry-ux/blob/fe5e7a8c63b87cc39fd5f77cac09ec0c59566f52/src/helpers/utilities.ts#L221)

#### Returns

[`Deferred`](Deferred.md)\<[`T`](Deferred.html#constructordeferredt)\>

## Properties

### promise

```ts
readonly promise: Promise<T>;
```

Defined in: [src/helpers/utilities.ts:219](https://github.com/navedr/dry-ux/blob/fe5e7a8c63b87cc39fd5f77cac09ec0c59566f52/src/helpers/utilities.ts#L219)

The promise object.

## Accessors

### reject

#### Get Signature

```ts
get reject(): (error: any) => void
```

Defined in: [src/helpers/utilities.ts:238](https://github.com/navedr/dry-ux/blob/fe5e7a8c63b87cc39fd5f77cac09ec0c59566f52/src/helpers/utilities.ts#L238)

Rejects the promise with the given error.

##### Returns

`Function`

###### Parameters

###### error

`any`

###### Returns

`void`

***

### resolve

#### Get Signature

```ts
get resolve(): (result: T) => void
```

Defined in: [src/helpers/utilities.ts:231](https://github.com/navedr/dry-ux/blob/fe5e7a8c63b87cc39fd5f77cac09ec0c59566f52/src/helpers/utilities.ts#L231)

Resolves the promise with the given result.

##### Returns

`Function`

###### Parameters

###### result

[`T`](Deferred.html#constructordeferredt)

###### Returns

`void`
