[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / ErrorBoundary

# Class: ErrorBoundary

Defined in: [src/error/ErrorBoundary.tsx:42](https://github.com/navedr/dry-ux/blob/f464198215bbdbf8f80dadda55a7d0d7eeb0411c/src/error/ErrorBoundary.tsx#L42)

A React component that acts as an error boundary to catch JavaScript errors anywhere in its child component tree.
It displays a fallback UI when an error is caught.

## Extends

- `PureComponent`\<`IErrorBoundaryProps`, `IErrorBoundaryInnerState`\>

## Constructors

### new ErrorBoundary()

```ts
new ErrorBoundary(props: IErrorBoundaryProps): ErrorBoundary
```

Defined in: [src/error/ErrorBoundary.tsx:43](https://github.com/navedr/dry-ux/blob/f464198215bbdbf8f80dadda55a7d0d7eeb0411c/src/error/ErrorBoundary.tsx#L43)

#### Parameters

##### props

`IErrorBoundaryProps`

#### Returns

[`ErrorBoundary`](ErrorBoundary.md)

#### Overrides

```ts
React.PureComponent<IErrorBoundaryProps, IErrorBoundaryInnerState>.constructor
```

## Properties

### context

```ts
context: any;
```

Defined in: node\_modules/@types/react/index.d.ts:479

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

#### See

https://react.dev/reference/react/Component#context

#### Inherited from

```ts
React.PureComponent.context
```

***

### props

```ts
readonly props: Readonly<IErrorBoundaryProps> & Readonly<{
  children: ReactNode;
}>;
```

Defined in: node\_modules/@types/react/index.d.ts:504

#### Inherited from

```ts
React.PureComponent.props
```

***

### ~~refs~~

```ts
refs: {};
```

Defined in: node\_modules/@types/react/index.d.ts:510

#### Index Signature

```ts
[key: string]: ReactInstance
```

#### Deprecated

https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Inherited from

```ts
React.PureComponent.refs
```

***

### state

```ts
state: Readonly<IErrorBoundaryInnerState>;
```

Defined in: node\_modules/@types/react/index.d.ts:505

#### Inherited from

```ts
React.PureComponent.state
```

***

### contextType?

```ts
static optional contextType: Context<any>;
```

Defined in: node\_modules/@types/react/index.d.ts:461

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

#### See

https://react.dev/reference/react/Component#static-contexttype

#### Inherited from

```ts
React.PureComponent.contextType
```

## Methods

### componentDidCatch()

```ts
componentDidCatch(error: Error, info: ErrorInfo): void
```

Defined in: [src/error/ErrorBoundary.tsx:62](https://github.com/navedr/dry-ux/blob/f464198215bbdbf8f80dadda55a7d0d7eeb0411c/src/error/ErrorBoundary.tsx#L62)

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

### componentDidMount()?

```ts
optional componentDidMount(): void
```

Defined in: node\_modules/@types/react/index.d.ts:625

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

```ts
React.PureComponent.componentDidMount
```

***

### componentDidUpdate()?

```ts
optional componentDidUpdate(
   prevProps: Readonly<IErrorBoundaryProps>, 
   prevState: Readonly<IErrorBoundaryInnerState>, 
   snapshot?: any): void
```

Defined in: node\_modules/@types/react/index.d.ts:688

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

##### prevProps

`Readonly`\<`IErrorBoundaryProps`\>

##### prevState

`Readonly`\<`IErrorBoundaryInnerState`\>

##### snapshot?

`any`

#### Returns

`void`

#### Inherited from

```ts
React.PureComponent.componentDidUpdate
```

***

### ~~componentWillMount()?~~

```ts
optional componentWillMount(): void
```

Defined in: node\_modules/@types/react/index.d.ts:703

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Returns

`void`

#### Deprecated

16.3, use componentDidMount or the constructor instead; will stop working in React 17

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

```ts
React.PureComponent.componentWillMount
```

***

### ~~componentWillReceiveProps()?~~

```ts
optional componentWillReceiveProps(nextProps: Readonly<IErrorBoundaryProps>, nextContext: any): void
```

Defined in: node\_modules/@types/react/index.d.ts:732

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

##### nextProps

`Readonly`\<`IErrorBoundaryProps`\>

##### nextContext

`any`

#### Returns

`void`

#### Deprecated

16.3, use static getDerivedStateFromProps instead; will stop working in React 17

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

```ts
React.PureComponent.componentWillReceiveProps
```

***

### componentWillUnmount()?

```ts
optional componentWillUnmount(): void
```

Defined in: node\_modules/@types/react/index.d.ts:641

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

```ts
React.PureComponent.componentWillUnmount
```

***

### ~~componentWillUpdate()?~~

```ts
optional componentWillUpdate(
   nextProps: Readonly<IErrorBoundaryProps>, 
   nextState: Readonly<IErrorBoundaryInnerState>, 
   nextContext: any): void
```

Defined in: node\_modules/@types/react/index.d.ts:762

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

##### nextProps

`Readonly`\<`IErrorBoundaryProps`\>

##### nextState

`Readonly`\<`IErrorBoundaryInnerState`\>

##### nextContext

`any`

#### Returns

`void`

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

```ts
React.PureComponent.componentWillUpdate
```

***

### forceUpdate()

```ts
forceUpdate(callback?: () => void): void
```

Defined in: node\_modules/@types/react/index.d.ts:496

#### Parameters

##### callback?

() => `void`

#### Returns

`void`

#### Inherited from

```ts
React.PureComponent.forceUpdate
```

***

### getSnapshotBeforeUpdate()?

```ts
optional getSnapshotBeforeUpdate(prevProps: Readonly<IErrorBoundaryProps>, prevState: Readonly<IErrorBoundaryInnerState>): any
```

Defined in: node\_modules/@types/react/index.d.ts:682

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

##### prevProps

`Readonly`\<`IErrorBoundaryProps`\>

##### prevState

`Readonly`\<`IErrorBoundaryInnerState`\>

#### Returns

`any`

#### Inherited from

```ts
React.PureComponent.getSnapshotBeforeUpdate
```

***

### render()

```ts
render(): Element
```

Defined in: [src/error/ErrorBoundary.tsx:70](https://github.com/navedr/dry-ux/blob/f464198215bbdbf8f80dadda55a7d0d7eeb0411c/src/error/ErrorBoundary.tsx#L70)

Renders the component.

#### Returns

`Element`

The rendered component.

#### Overrides

```ts
React.PureComponent.render
```

***

### setState()

```ts
setState<K>(state: 
  | IErrorBoundaryInnerState
  | (prevState: Readonly<IErrorBoundaryInnerState>, props: Readonly<IErrorBoundaryProps>) => 
  | IErrorBoundaryInnerState
  | Pick<IErrorBoundaryInnerState, K>
  | Pick<IErrorBoundaryInnerState, K>, callback?: () => void): void
```

Defined in: node\_modules/@types/react/index.d.ts:491

#### Type Parameters

• **K** *extends* `"error"`

#### Parameters

##### state

`IErrorBoundaryInnerState` | (`prevState`: `Readonly`\<`IErrorBoundaryInnerState`\>, `props`: `Readonly`\<`IErrorBoundaryProps`\>) =>
\| `IErrorBoundaryInnerState`
\| `Pick`\<`IErrorBoundaryInnerState`, [`K`](ErrorBoundary.html#setstatek)\> | `Pick`\<`IErrorBoundaryInnerState`, [`K`](ErrorBoundary.html#setstatek)\>

##### callback?

() => `void`

#### Returns

`void`

#### Inherited from

```ts
React.PureComponent.setState
```

***

### shouldComponentUpdate()?

```ts
optional shouldComponentUpdate(
   nextProps: Readonly<IErrorBoundaryProps>, 
   nextState: Readonly<IErrorBoundaryInnerState>, 
   nextContext: any): boolean
```

Defined in: node\_modules/@types/react/index.d.ts:636

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

##### nextProps

`Readonly`\<`IErrorBoundaryProps`\>

##### nextState

`Readonly`\<`IErrorBoundaryInnerState`\>

##### nextContext

`any`

#### Returns

`boolean`

#### Inherited from

```ts
React.PureComponent.shouldComponentUpdate
```

***

### ~~UNSAFE\_componentWillMount()?~~

```ts
optional UNSAFE_componentWillMount(): void
```

Defined in: node\_modules/@types/react/index.d.ts:717

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Returns

`void`

#### Deprecated

16.3, use componentDidMount or the constructor instead

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

```ts
React.PureComponent.UNSAFE_componentWillMount
```

***

### ~~UNSAFE\_componentWillReceiveProps()?~~

```ts
optional UNSAFE_componentWillReceiveProps(nextProps: Readonly<IErrorBoundaryProps>, nextContext: any): void
```

Defined in: node\_modules/@types/react/index.d.ts:749

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

##### nextProps

`Readonly`\<`IErrorBoundaryProps`\>

##### nextContext

`any`

#### Returns

`void`

#### Deprecated

16.3, use static getDerivedStateFromProps instead

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

```ts
React.PureComponent.UNSAFE_componentWillReceiveProps
```

***

### ~~UNSAFE\_componentWillUpdate()?~~

```ts
optional UNSAFE_componentWillUpdate(
   nextProps: Readonly<IErrorBoundaryProps>, 
   nextState: Readonly<IErrorBoundaryInnerState>, 
   nextContext: any): void
```

Defined in: node\_modules/@types/react/index.d.ts:777

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

##### nextProps

`Readonly`\<`IErrorBoundaryProps`\>

##### nextState

`Readonly`\<`IErrorBoundaryInnerState`\>

##### nextContext

`any`

#### Returns

`void`

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

```ts
React.PureComponent.UNSAFE_componentWillUpdate
```

***

### getDerivedStateFromError()

```ts
static getDerivedStateFromError(error: Error): {
  error: Error;
}
```

Defined in: [src/error/ErrorBoundary.tsx:53](https://github.com/navedr/dry-ux/blob/f464198215bbdbf8f80dadda55a7d0d7eeb0411c/src/error/ErrorBoundary.tsx#L53)

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
