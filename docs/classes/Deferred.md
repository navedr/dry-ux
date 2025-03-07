[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / Deferred

# Class: Deferred\<T\>

Defined in: [src/helpers/utilities.ts:194](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/utilities.ts#L194)

A class representing a deferred promise.

## Type Parameters

• **T**

## Constructors

### new Deferred()

> **new Deferred**\<`T`\>(): [`Deferred`](Deferred.md)\<`T`\>

Defined in: [src/helpers/utilities.ts:202](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/utilities.ts#L202)

#### Returns

[`Deferred`](Deferred.md)\<`T`\>

## Properties

### promise

> `readonly` **promise**: `Promise`\<`T`\>

Defined in: [src/helpers/utilities.ts:200](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/utilities.ts#L200)

The promise object.

## Accessors

### reject

#### Get Signature

> **get** **reject**(): (`error`) => `void`

Defined in: [src/helpers/utilities.ts:219](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/utilities.ts#L219)

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

> **get** **resolve**(): (`result`) => `void`

Defined in: [src/helpers/utilities.ts:212](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/utilities.ts#L212)

Resolves the promise with the given result.

##### Returns

`Function`

###### Parameters

###### result

`T`

###### Returns

`void`
