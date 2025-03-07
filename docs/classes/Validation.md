[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / Validation

# Class: Validation

Defined in: [src/enhanced-inputs/Validaition.ts:146](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/Validaition.ts#L146)

Class representing form validation.

## Constructors

### new Validation()

> **new Validation**(`options`?): [`Validation`](Validation.md)

Defined in: [src/enhanced-inputs/Validaition.ts:154](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/Validaition.ts#L154)

Creates an instance of Validation.

#### Parameters

##### options?

`ValidationOptions`

The options for configuring the validation.

#### Returns

[`Validation`](Validation.md)

## Methods

### bindToValueChanges()

> **bindToValueChanges**(`input`): `void`

Defined in: [src/enhanced-inputs/Validaition.ts:169](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/Validaition.ts#L169)

Binds the form to value changes for validation.

#### Parameters

##### input

The input element or its ID.

`string` | `HTMLElement`

#### Returns

`void`

***

### validateForm()

> **validateForm**\<`T`\>(): `object`

Defined in: [src/enhanced-inputs/Validaition.ts:178](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/Validaition.ts#L178)

Validates the entire form.

#### Type Parameters

• **T** = `void`

#### Returns

`object`

True if the form is valid, false otherwise.

##### isValid

> **isValid**: `boolean`

##### values

> **values**: `T`

***

### validateInput()

> **validateInput**(`input`): `object`

Defined in: [src/enhanced-inputs/Validaition.ts:195](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/Validaition.ts#L195)

Validates a specific input element.

#### Parameters

##### input

The input element or its ID.

`string` | `HTMLElement`

#### Returns

`object`

True if the input is valid, false otherwise.

##### isValid

> **isValid**: `boolean`

##### value?

> `optional` **value**: `string`
