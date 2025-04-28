[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / IValueValidation

# Interface: IValueValidation\<T\>

Defined in: [src/enhanced-inputs/interface.ts:11](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/interface.ts#L11)

Interface representing a value validation with an optional message.

## Type Parameters

• **T**

## Properties

### message?

```ts
optional message: string;
```

Defined in: [src/enhanced-inputs/interface.ts:19](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/interface.ts#L19)

Optional message to be displayed if validation fails.

***

### value

```ts
value: T;
```

Defined in: [src/enhanced-inputs/interface.ts:15](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/interface.ts#L15)

The value to be validated.
