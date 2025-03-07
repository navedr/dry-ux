[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / Deferred

# Class: Deferred\<T\>

Defined in: [src/helpers/utilities.ts:194](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/helpers/utilities.ts#L194)

A class representing a deferred promise.

## Type Parameters

• **T**

## Constructors

### new Deferred()

```ts
new Deferred<T>(): Deferred<T>
```

Defined in: [src/helpers/utilities.ts:202](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/helpers/utilities.ts#L202)

#### Returns

[`Deferred`](Deferred.md)\<`T`\>

## Properties

### promise

```ts
readonly promise: Promise<T>;
```

Defined in: [src/helpers/utilities.ts:200](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/helpers/utilities.ts#L200)

The promise object.

## Accessors

### reject

#### Get Signature

```ts
get reject(): (error: any) => void
```

Defined in: [src/helpers/utilities.ts:219](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/helpers/utilities.ts#L219)

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

Defined in: [src/helpers/utilities.ts:212](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/helpers/utilities.ts#L212)

Resolves the promise with the given result.

##### Returns

`Function`

###### Parameters

###### result

`T`

###### Returns

`void`
