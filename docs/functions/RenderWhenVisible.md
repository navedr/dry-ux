[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / RenderWhenVisible

# Function: RenderWhenVisible()

```ts
function RenderWhenVisible(props: PropsWithChildren<{
  children: Element;
  minHeight: number;
  onLoad: () => void;
}>, context?: any): ReactElement<any, any>
```

Defined in: [src/ui-utils/RenderWhenVisible.tsx:11](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/ui-utils/RenderWhenVisible.tsx#L11)

A React component that renders its children only when they become visible in the viewport.

## Parameters

### props

`PropsWithChildren`\<\{
  `children`: `Element`;
  `minHeight`: `number`;
  `onLoad`: () => `void`;
 \}\>

### context?

`any`

## Returns

`ReactElement`\<`any`, `any`\>

A JSX element that conditionally renders its children based on visibility.
