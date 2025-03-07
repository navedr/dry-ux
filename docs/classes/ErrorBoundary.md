[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / ErrorBoundary

# Class: ErrorBoundary

Defined in: [src/error/ErrorBoundary.tsx:42](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/error/ErrorBoundary.tsx#L42)

A React component that acts as an error boundary to catch JavaScript errors anywhere in its child component tree.
It displays a fallback UI when an error is caught.

## Extends

- `PureComponent`\<`IErrorBoundaryProps`, `IErrorBoundaryInnerState`\>

## Constructors

### new ErrorBoundary()

```ts
new ErrorBoundary(props: IErrorBoundaryProps): ErrorBoundary
```

Defined in: [src/error/ErrorBoundary.tsx:43](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/error/ErrorBoundary.tsx#L43)

#### Parameters

##### props

`IErrorBoundaryProps`

#### Returns

[`ErrorBoundary`](ErrorBoundary.md)

#### Overrides

```ts
React.PureComponent<IErrorBoundaryProps, IErrorBoundaryInnerState>.constructor
```

## Methods

### componentDidCatch()

```ts
componentDidCatch(error: Error, info: ErrorInfo): void
```

Defined in: [src/error/ErrorBoundary.tsx:62](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/error/ErrorBoundary.tsx#L62)

Handles the error and updates the state.

#### Parameters

##### error

`Error`

The error that was thrown.

##### info

`ErrorInfo`

Additional information about the error.

#### Returns

`void`

#### Overrides

```ts
React.PureComponent.componentDidCatch
```

***

### render()

```ts
render(): Element
```

Defined in: [src/error/ErrorBoundary.tsx:70](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/error/ErrorBoundary.tsx#L70)

Renders the component.

#### Returns

`Element`

The rendered component.

#### Overrides

```ts
React.PureComponent.render
```

***

### getDerivedStateFromError()

```ts
static getDerivedStateFromError(error: Error): {
  error: Error;
}
```

Defined in: [src/error/ErrorBoundary.tsx:53](https://github.com/navedr/dry-ux/blob/fa9fb1e7600855fffa8e3918bf7bfc6bfd8c02b5/src/error/ErrorBoundary.tsx#L53)

Updates the state with the error.

#### Parameters

##### error

`Error`

The error that was thrown.

#### Returns

```ts
{
  error: Error;
}
```

The updated state.

##### error

```ts
error: Error;
```
