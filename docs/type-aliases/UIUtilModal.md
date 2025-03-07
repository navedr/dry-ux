[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / UIUtilModal

# Type Alias: UIUtilModal

> **UIUtilModal**: `object`

Defined in: [src/ui-utils/UIUtil.interface.ts:178](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/UIUtil.interface.ts#L178)

Represents a utility for managing UI modals.

## Type declaration

### create()

> **create**: (`id`, `options`) => [`PopUp`](PopUp.md)

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

> **getCurrent**: () => [`PopUp`](PopUp.md)

Gets the current modal instance.

#### Returns

[`PopUp`](PopUp.md)

The current PopUp.

### instances

> **instances**: `object`

Dictionary of modal instances in memory.

#### Index Signature

\[`id`: `string`\]: [`PopUpInstance`](PopUpInstance.md)

### show()

> **show**: (`options`) => [`PopUp`](PopUp.md)

Creates a non-unique modal.

#### Parameters

##### options

[`PopUpOptions`](PopUpOptions.md)

The options for the modal.

#### Returns

[`PopUp`](PopUp.md)

The created PopUp.

### showActions()

> **showActions**: (`options`, `actions`) => [`PopUp`](PopUp.md)

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

> **showAlert**: (`content`, `onClose`?) => [`PopUp`](PopUp.md)

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

> **showConfirm**: (`options`, `onYes`, `onNo`?) => [`PopUp`](PopUp.md)

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
