[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / IValidations

# Interface: IValidations

Defined in: [src/enhanced-inputs/interface.ts:25](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L25)

Interface representing various validation rules for a field.

## Properties

### compare?

> `optional` **compare**: [`IValueValidation`](IValueValidation.md)\<`string`\>

Defined in: [src/enhanced-inputs/interface.ts:57](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L57)

Compares the field with another field specified by its ID.

***

### date?

> `optional` **date**: [`IValidation`](../type-aliases/IValidation.md)

Defined in: [src/enhanced-inputs/interface.ts:53](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L53)

Indicates if the field should be validated as a date.

***

### digits?

> `optional` **digits**: [`IValidation`](../type-aliases/IValidation.md)

Defined in: [src/enhanced-inputs/interface.ts:49](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L49)

Indicates if the field should be validated as digits.

***

### disallowedDaysOfWeek?

> `optional` **disallowedDaysOfWeek**: `number`[]

Defined in: [src/enhanced-inputs/interface.ts:85](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L85)

Disallowed days of the week for the field.

***

### email?

> `optional` **email**: [`IValidation`](../type-aliases/IValidation.md)

Defined in: [src/enhanced-inputs/interface.ts:45](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L45)

Indicates if the field should be validated as an email.

***

### errorRef?

> `optional` **errorRef**: `string`

Defined in: [src/enhanced-inputs/interface.ts:93](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L93)

JQuery selector of the element to add the error after.

***

### maxDate?

> `optional` **maxDate**: [`IValueValidation`](IValueValidation.md)\<`Date`\>

Defined in: [src/enhanced-inputs/interface.ts:77](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L77)

Maximum date validation for the field.

***

### maxLength?

> `optional` **maxLength**: [`IValueValidation`](IValueValidation.md)\<`number`\>

Defined in: [src/enhanced-inputs/interface.ts:69](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L69)

Maximum length validation for the field.

***

### maxValue?

> `optional` **maxValue**: [`IValueValidation`](IValueValidation.md)\<`number`\>

Defined in: [src/enhanced-inputs/interface.ts:73](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L73)

Maximum value validation for the field.

***

### minDate?

> `optional` **minDate**: [`IValueValidation`](IValueValidation.md)\<`Date`\>

Defined in: [src/enhanced-inputs/interface.ts:81](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L81)

Minimum date validation for the field.

***

### minDigitsLength?

> `optional` **minDigitsLength**: [`IValueValidation`](IValueValidation.md)\<`number`\>

Defined in: [src/enhanced-inputs/interface.ts:65](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L65)

Minimum digits length validation for the field.

***

### minLength?

> `optional` **minLength**: [`IValueValidation`](IValueValidation.md)\<`number`\>

Defined in: [src/enhanced-inputs/interface.ts:61](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L61)

Minimum length validation for the field.

***

### money?

> `optional` **money**: [`IValidation`](../type-aliases/IValidation.md)

Defined in: [src/enhanced-inputs/interface.ts:37](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L37)

Indicates if the field should be validated as a monetary value.

***

### number?

> `optional` **number**: [`IValidation`](../type-aliases/IValidation.md)

Defined in: [src/enhanced-inputs/interface.ts:33](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L33)

Indicates if the field should be validated as a number.

***

### positiveNumber?

> `optional` **positiveNumber**: [`IValidation`](../type-aliases/IValidation.md)

Defined in: [src/enhanced-inputs/interface.ts:41](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L41)

Indicates if the field should be validated as a positive number.

***

### required?

> `optional` **required**: [`IValidation`](../type-aliases/IValidation.md)

Defined in: [src/enhanced-inputs/interface.ts:29](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L29)

Indicates if the field is required.

***

### validateHidden?

> `optional` **validateHidden**: `boolean`

Defined in: [src/enhanced-inputs/interface.ts:89](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/enhanced-inputs/interface.ts#L89)

Indicates if the field should be validated even if it is hidden.
