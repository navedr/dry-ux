[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / PopUpInstance

# Type Alias: PopUpInstance

> **PopUpInstance**: `object`

Defined in: [src/ui-utils/UIUtil.interface.ts:67](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/UIUtil.interface.ts#L67)

Represents an instance of a PopUp.

## Type declaration

### handleClose()

> **handleClose**: (`id`, `shown`, `destroyOnClose`?) => `void`

Handles closing the PopUp.

#### Parameters

##### id

`string`

The id of the PopUp.

##### shown

`boolean`

Indicates whether the PopUp is shown.

##### destroyOnClose?

`boolean`

If true, the PopUp will be destroyed when closed.

#### Returns

`void`

### options

> **options**: [`PopUpOptions`](PopUpOptions.md)

The options for the PopUp.

### overlay?

> `optional` **overlay**: [`Content`](Content.md)

The overlay content for the PopUp.

### shown

> **shown**: `boolean`

Indicates whether the PopUp is shown.

### toggleOverlay()

> **toggleOverlay**: (`id`, `content`?) => `void`

Toggles the overlay content for the PopUp.

#### Parameters

##### id

`string`

The id of the PopUp.

##### content?

[`Content`](Content.md)

The content to display in the overlay.

#### Returns

`void`
