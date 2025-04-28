[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / usePubSub

# Function: usePubSub()

```ts
function usePubSub<T>(): {
  usePub: () => <TName, TPayload>(event: TName, data?: TPayload) => void;
  useSub: <TName, TPayload>(event: TName, callback: (data: TPayload) => void) => () => void;
}
```

Defined in: [src/helpers/utilities.ts:262](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/helpers/utilities.ts#L262)

Hook to publish and subscribe to custom events.

## Type Parameters

• **T**

## Returns

```ts
{
  usePub: () => <TName, TPayload>(event: TName, data?: TPayload) => void;
  useSub: <TName, TPayload>(event: TName, callback: (data: TPayload) => void) => () => void;
}
```

An object containing the usePub and useSub hooks.

### usePub()

```ts
usePub: () => <TName, TPayload>(event: TName, data?: TPayload) => void;
```

Publishes a custom event with the specified name and data.

#### Returns

`Function`

##### Type Parameters

• **TName** *extends* `string` \| `number` \| `symbol`

• **TPayload**

##### Parameters

###### event

`TName`

###### data?

`TPayload`

##### Returns

`void`

### useSub()

```ts
useSub: <TName, TPayload>(event: TName, callback: (data: TPayload) => void) => () => void;
```

Subscribes to a custom event with the specified name and calls the callback when the event is triggered.

#### Type Parameters

• **TName** *extends* `string` \| `number` \| `symbol`

The type of the event name.

• **TPayload**

The type of the event payload.

#### Parameters

##### event

`TName`

The name of the event to subscribe to.

##### callback

(`data`: `TPayload`) => `void`

The function to call when the event is triggered.

#### Returns

`Function`

A function to unsubscribe from the event.

##### Returns

`void`
