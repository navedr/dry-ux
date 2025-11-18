[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / Validation

# Class: Validation

Defined in: [src/enhanced-inputs/Validaition.ts:35](https://github.com/navedr/dry-ux/blob/d471fef188d66717871d62bb2d6968695a9977c6/src/enhanced-inputs/Validaition.ts#L35)

Class representing form validation.

## Constructors

### new Validation()

```ts
new Validation(options?: ValidationOptions): Validation
```

Defined in: [src/enhanced-inputs/Validaition.ts:43](https://github.com/navedr/dry-ux/blob/d471fef188d66717871d62bb2d6968695a9977c6/src/enhanced-inputs/Validaition.ts#L43)

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

Defined in: [src/enhanced-inputs/Validaition.ts:58](https://github.com/navedr/dry-ux/blob/d471fef188d66717871d62bb2d6968695a9977c6/src/enhanced-inputs/Validaition.ts#L58)

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

Defined in: [src/enhanced-inputs/Validaition.ts:67](https://github.com/navedr/dry-ux/blob/d471fef188d66717871d62bb2d6968695a9977c6/src/enhanced-inputs/Validaition.ts#L67)

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

Defined in: [src/enhanced-inputs/Validaition.ts:84](https://github.com/navedr/dry-ux/blob/d471fef188d66717871d62bb2d6968695a9977c6/src/enhanced-inputs/Validaition.ts#L84)

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
