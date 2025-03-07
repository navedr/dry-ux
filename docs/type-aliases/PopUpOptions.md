[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / PopUpOptions

# Type Alias: PopUpOptions

> **PopUpOptions**: `object`

Defined in: [src/ui-utils/UIUtil.interface.ts:124](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/UIUtil.interface.ts#L124)

Represents the options for a PopUp.

## Type declaration

### actions?

> `optional` **actions**: [`PopUpAction`](PopUpAction.md)[]

If true, the modal will be shown.

### centered?

> `optional` **centered**: `boolean`

If true, the modal will be centered vertically.

### closeBtn?

> `optional` **closeBtn**: `boolean`

If true, the modal will have a close button in the footer.

### content

> **content**: [`Content`](Content.md)

The content of the modal.

### cssClass?

> `optional` **cssClass**: `string`

The class to apply to the modal.

### destroyOnClose?

> `optional` **destroyOnClose**: `boolean`

If true, the modal will be destroyed when it is closed.

### footerContent?

> `optional` **footerContent**: [`Content`](Content.md)

Footer content of the modal.

### onClose()?

> `optional` **onClose**: () => `void`

Function to call when the modal is closed.

#### Returns

`void`

### title?

> `optional` **title**: [`Content`](Content.md)

The title of the modal.

### titleCloseBtn?

> `optional` **titleCloseBtn**: `boolean`

If true, the modal will have a close button in the title bar.

### trackingId?

> `optional` **trackingId**: `string`

The tracking ID for the modal.

### width?

> `optional` **width**: `string` \| `number`

The width of the modal.
