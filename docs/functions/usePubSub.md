[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / usePubSub

# Function: usePubSub()

> **usePubSub**\<`T`\>(): `object`

Defined in: [src/helpers/utilities.ts:262](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/utilities.ts#L262)

Hook to publish and subscribe to custom events.

## Type Parameters

• **T**

## Returns

`object`

An object containing the usePub and useSub hooks.

### usePub()

> **usePub**: () => \<`TName`, `TPayload`\>(`event`, `data`?) => `void`

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

> **useSub**: \<`TName`, `TPayload`\>(`event`, `callback`) => () => `void`

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

(`data`) => `void`

The function to call when the event is triggered.

#### Returns

`Function`

A function to unsubscribe from the event.

##### Returns

`void`
