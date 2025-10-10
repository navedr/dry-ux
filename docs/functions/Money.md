[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / Money

# Function: Money()

```ts
function Money(props: PropsWithChildren<{
  amount: number;
  currency: string;
  decimal_places: boolean;
}>, context?: any): ReactElement<any, any>
```

Defined in: [src/ui-utils/Money.tsx:7](https://github.com/navedr/dry-ux/blob/357842b7190c45081ec89f2dfed62dd2067eff7b/src/ui-utils/Money.tsx#L7)

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
