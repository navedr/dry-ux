[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / IValidations

# Interface: IValidations

Defined in: [src/enhanced-inputs/interface.ts:25](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L25)

Interface representing various validation rules for a field.

## Properties

### compare?

```ts
optional compare: IValueValidation<string>;
```

Defined in: [src/enhanced-inputs/interface.ts:57](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L57)

Compares the field with another field specified by its ID.

***

### date?

```ts
optional date: IValidation;
```

Defined in: [src/enhanced-inputs/interface.ts:53](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L53)

Indicates if the field should be validated as a date.

***

### digits?

```ts
optional digits: IValidation;
```

Defined in: [src/enhanced-inputs/interface.ts:49](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L49)

Indicates if the field should be validated as digits.

***

### disallowedDaysOfWeek?

```ts
optional disallowedDaysOfWeek: number[];
```

Defined in: [src/enhanced-inputs/interface.ts:85](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L85)

Disallowed days of the week for the field.

***

### email?

```ts
optional email: IValidation;
```

Defined in: [src/enhanced-inputs/interface.ts:45](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L45)

Indicates if the field should be validated as an email.

***

### errorRef?

```ts
optional errorRef: string;
```

Defined in: [src/enhanced-inputs/interface.ts:93](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L93)

JQuery selector of the element to add the error after.

***

### maxDate?

```ts
optional maxDate: IValueValidation<Date>;
```

Defined in: [src/enhanced-inputs/interface.ts:77](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L77)

Maximum date validation for the field.

***

### maxLength?

```ts
optional maxLength: IValueValidation<number>;
```

Defined in: [src/enhanced-inputs/interface.ts:69](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L69)

Maximum length validation for the field.

***

### maxValue?

```ts
optional maxValue: IValueValidation<number>;
```

Defined in: [src/enhanced-inputs/interface.ts:73](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L73)

Maximum value validation for the field.

***

### minDate?

```ts
optional minDate: IValueValidation<Date>;
```

Defined in: [src/enhanced-inputs/interface.ts:81](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L81)

Minimum date validation for the field.

***

### minDigitsLength?

```ts
optional minDigitsLength: IValueValidation<number>;
```

Defined in: [src/enhanced-inputs/interface.ts:65](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L65)

Minimum digits length validation for the field.

***

### minLength?

```ts
optional minLength: IValueValidation<number>;
```

Defined in: [src/enhanced-inputs/interface.ts:61](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L61)

Minimum length validation for the field.

***

### money?

```ts
optional money: IValidation;
```

Defined in: [src/enhanced-inputs/interface.ts:37](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L37)

Indicates if the field should be validated as a monetary value.

***

### number?

```ts
optional number: IValidation;
```

Defined in: [src/enhanced-inputs/interface.ts:33](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L33)

Indicates if the field should be validated as a number.

***

### positiveNumber?

```ts
optional positiveNumber: IValidation;
```

Defined in: [src/enhanced-inputs/interface.ts:41](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L41)

Indicates if the field should be validated as a positive number.

***

### required?

```ts
optional required: IValidation;
```

Defined in: [src/enhanced-inputs/interface.ts:29](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L29)

Indicates if the field is required.

***

### validateHidden?

```ts
optional validateHidden: boolean;
```

Defined in: [src/enhanced-inputs/interface.ts:89](https://github.com/navedr/dry-ux/blob/86c22f6b530b5213bb68b86926f9eb34d851fb9f/src/enhanced-inputs/interface.ts#L89)

Indicates if the field should be validated even if it is hidden.
