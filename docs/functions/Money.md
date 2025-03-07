[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / Money

# Function: Money()

```ts
function Money(props: PropsWithChildren<{
  amount: number;
  currency: string;
  decimal_places: boolean;
}>, context?: any): ReactElement<any, any>
```

Defined in: [src/ui-utils/Money.tsx:7](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/ui-utils/Money.tsx#L7)

Renders a formatted dollar amount with a dollar sign and parentheses if the amount is negative.

## Parameters

### props

`PropsWithChildren`\<\{
  `amount`: `number`;
  `currency`: `string`;
  `decimal_places`: `boolean`;
 \}\>

### context?

`any`

## Returns

`ReactElement`\<`any`, `any`\>
