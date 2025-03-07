[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / RenderWhenVisible

# Function: RenderWhenVisible()

> **RenderWhenVisible**(`props`, `context`?): `ReactElement`\<`any`, `any`\>

Defined in: [src/ui-utils/RenderWhenVisible.tsx:11](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/RenderWhenVisible.tsx#L11)

A React component that renders its children only when they become visible in the viewport.

## Parameters

### props

`PropsWithChildren`\<\{ `children`: `Element`; `minHeight`: `number`; `onLoad`: () => `void`; \}\>

### context?

`any`

## Returns

`ReactElement`\<`any`, `any`\>

A JSX element that conditionally renders its children based on visibility.
