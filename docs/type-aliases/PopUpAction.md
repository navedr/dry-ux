[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / PopUpAction

# Type Alias: PopUpAction

> **PopUpAction**: `object`

Defined in: [src/ui-utils/UIUtil.interface.ts:98](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/UIUtil.interface.ts#L98)

Represents an action for a PopUp.

## Type declaration

### closeOnClick?

> `optional` **closeOnClick**: `boolean`

If true, the modal will be closed when the button is clicked.

### confirm?

> `optional` **confirm**: [`Content`](Content.md)

If set, confirm overlay will be shown before the action is executed.

### content

> **content**: [`Content`](Content.md)

The content to display in the modal.

### onClick()?

> `optional` **onClick**: () => `void`

Function to call when the button is clicked.

#### Returns

`void`

### type?

> `optional` **type**: [`ButtonType`](ButtonType.md)

The type of button to display.
