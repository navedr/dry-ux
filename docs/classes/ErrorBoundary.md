[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / ErrorBoundary

# Class: ErrorBoundary

Defined in: [src/error/ErrorBoundary.tsx:42](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/error/ErrorBoundary.tsx#L42)

A React component that acts as an error boundary to catch JavaScript errors anywhere in its child component tree.
It displays a fallback UI when an error is caught.

## Extends

- `PureComponent`\<`IErrorBoundaryProps`, `IErrorBoundaryInnerState`\>

## Constructors

### new ErrorBoundary()

> **new ErrorBoundary**(`props`): [`ErrorBoundary`](ErrorBoundary.md)

Defined in: [src/error/ErrorBoundary.tsx:43](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/error/ErrorBoundary.tsx#L43)

#### Parameters

##### props

`IErrorBoundaryProps`

#### Returns

[`ErrorBoundary`](ErrorBoundary.md)

#### Overrides

`React.PureComponent<IErrorBoundaryProps, IErrorBoundaryInnerState>.constructor`

## Methods

### componentDidCatch()

> **componentDidCatch**(`error`, `info`): `void`

Defined in: [src/error/ErrorBoundary.tsx:62](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/error/ErrorBoundary.tsx#L62)

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

`React.PureComponent.componentDidCatch`

***

### render()

> **render**(): `Element`

Defined in: [src/error/ErrorBoundary.tsx:70](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/error/ErrorBoundary.tsx#L70)

Renders the component.

#### Returns

`Element`

The rendered component.

#### Overrides

`React.PureComponent.render`

***

### getDerivedStateFromError()

> `static` **getDerivedStateFromError**(`error`): `object`

Defined in: [src/error/ErrorBoundary.tsx:53](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/error/ErrorBoundary.tsx#L53)

Updates the state with the error.

#### Parameters

##### error

`Error`

The error that was thrown.

#### Returns

`object`

The updated state.

##### error

> **error**: `Error`
