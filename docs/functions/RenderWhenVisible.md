[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / RenderWhenVisible

# Function: RenderWhenVisible()

```ts
function RenderWhenVisible(props: PropsWithChildren<{
  children: Element;
  minHeight: number;
  onLoad: () => void;
}>, context?: any): ReactElement<any, any>
```

Defined in: [src/ui-utils/RenderWhenVisible.tsx:11](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/ui-utils/RenderWhenVisible.tsx#L11)

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
