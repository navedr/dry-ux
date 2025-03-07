[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / Validation

# Class: Validation

Defined in: [src/enhanced-inputs/Validaition.ts:146](https://github.com/navedr/dry-ux/blob/e875b26275714d870ae7637bd802b35e75633e0b/src/enhanced-inputs/Validaition.ts#L146)

Class representing form validation.

## Constructors

### new Validation()

```ts
new Validation(options?: ValidationOptions): Validation
```

Defined in: [src/enhanced-inputs/Validaition.ts:154](https://github.com/navedr/dry-ux/blob/e875b26275714d870ae7637bd802b35e75633e0b/src/enhanced-inputs/Validaition.ts#L154)

Creates an instance of Validation.

#### Parameters

##### options?

`ValidationOptions`

The options for configuring the validation.

#### Returns

[`Validation`](Validation.md)

## Methods

### bindToValueChanges()

```ts
bindToValueChanges(input: string | HTMLElement): void
```

Defined in: [src/enhanced-inputs/Validaition.ts:169](https://github.com/navedr/dry-ux/blob/e875b26275714d870ae7637bd802b35e75633e0b/src/enhanced-inputs/Validaition.ts#L169)

Binds the form to value changes for validation.

#### Parameters

##### input

The input element or its ID.

`string` | `HTMLElement`

#### Returns

`void`

***

### validateForm()

```ts
validateForm<T>(): {
  isValid: boolean;
  values: T;
}
```

Defined in: [src/enhanced-inputs/Validaition.ts:178](https://github.com/navedr/dry-ux/blob/e875b26275714d870ae7637bd802b35e75633e0b/src/enhanced-inputs/Validaition.ts#L178)

Validates the entire form.

#### Type Parameters

• **T** = `void`

#### Returns

```ts
{
  isValid: boolean;
  values: T;
}
```

True if the form is valid, false otherwise.

##### isValid

```ts
isValid: boolean;
```

##### values

```ts
values: T;
```

***

### validateInput()

```ts
validateInput(input: string | HTMLElement): {
  isValid: boolean;
  value: string;
}
```

Defined in: [src/enhanced-inputs/Validaition.ts:195](https://github.com/navedr/dry-ux/blob/e875b26275714d870ae7637bd802b35e75633e0b/src/enhanced-inputs/Validaition.ts#L195)

Validates a specific input element.

#### Parameters

##### input

The input element or its ID.

`string` | `HTMLElement`

#### Returns

```ts
{
  isValid: boolean;
  value: string;
}
```

True if the input is valid, false otherwise.

##### isValid

```ts
isValid: boolean;
```

##### value?

```ts
optional value: string;
```
