[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / UIUtilModal

# Type Alias: UIUtilModal

```ts
type UIUtilModal = {
  create: (id: string, options: PopUpOptions) => PopUp;
  getCurrent: () => PopUp;
  instances: {};
  show: (options: PopUpOptions) => PopUp;
  showActions: (options: Omit<PopUpOptions, "actions">, actions: PopUpAction[]) => PopUp;
  showAlert: (content: Content, onClose?: PopUpOptions["onClose"]) => PopUp;
  showConfirm: (options: Omit<PopUpOptions, "actions">, onYes: () => void, onNo?: () => void) => PopUp;
};
```

Defined in: [src/ui-utils/UIUtil.interface.ts:178](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/ui-utils/UIUtil.interface.ts#L178)

Represents a utility for managing UI modals.

## Type declaration

### create()

```ts
create: (id: string, options: PopUpOptions) => PopUp;
```

Creates a unique (by id) modal.

#### Parameters

##### id

`string`

The id of the modal.

##### options

[`PopUpOptions`](PopUpOptions.md)

The options for the modal.

#### Returns

[`PopUp`](PopUp.md)

The created PopUp.

### getCurrent()

```ts
getCurrent: () => PopUp;
```

Gets the current modal instance.

#### Returns

[`PopUp`](PopUp.md)

The current PopUp.

### instances

```ts
instances: {};
```

Dictionary of modal instances in memory.

#### Index Signature

```ts
[id: string]: PopUpInstance
```

### show()

```ts
show: (options: PopUpOptions) => PopUp;
```

Creates a non-unique modal.

#### Parameters

##### options

[`PopUpOptions`](PopUpOptions.md)

The options for the modal.

#### Returns

[`PopUp`](PopUp.md)

The created PopUp.

### showActions()

```ts
showActions: (options: Omit<PopUpOptions, "actions">, actions: PopUpAction[]) => PopUp;
```

Shows a modal with custom actions.

#### Parameters

##### options

`Omit`\<[`PopUpOptions`](PopUpOptions.md), `"actions"`\>

The options for the modal.

##### actions

[`PopUpAction`](PopUpAction.md)[]

The actions to display in the modal.

#### Returns

[`PopUp`](PopUp.md)

The created PopUp.

### showAlert()

```ts
showAlert: (content: Content, onClose?: PopUpOptions["onClose"]) => PopUp;
```

Shows an alert style modal.

#### Parameters

##### content

[`Content`](Content.md)

The content to display in the modal.

##### onClose?

[`PopUpOptions`](PopUpOptions.md)\[`"onClose"`\]

Function to call when the modal is closed.

#### Returns

[`PopUp`](PopUp.md)

The created PopUp.

### showConfirm()

```ts
showConfirm: (options: Omit<PopUpOptions, "actions">, onYes: () => void, onNo?: () => void) => PopUp;
```

Shows a confirm style modal.

#### Parameters

##### options

`Omit`\<[`PopUpOptions`](PopUpOptions.md), `"actions"`\>

The options for the modal.

##### onYes

() => `void`

The function to call when the yes button is clicked.

##### onNo?

() => `void`

The function to call when the no button is clicked.

#### Returns

[`PopUp`](PopUp.md)

The created PopUp.
