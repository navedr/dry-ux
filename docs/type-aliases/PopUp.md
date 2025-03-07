[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / PopUp

# Type Alias: PopUp

> **PopUp**: `object`

Defined in: [src/ui-utils/UIUtil.interface.ts:11](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/UIUtil.interface.ts#L11)

Represents a PopUp with methods to control its visibility and content.

## Type declaration

### hide()

> **hide**: () => `void`

Hides the modal.

#### Returns

`void`

### overlay

> **overlay**: `object`

The overlay for the modal.

#### overlay.hide()

> **hide**: () => `void`

Hides the overlay.

##### Returns

`void`

#### overlay.show()

> **show**: (`content`) => `void`

Shows the overlay.

##### Parameters

###### content

[`Content`](Content.md)

The content to display in the overlay.

##### Returns

`void`

#### overlay.showActions()

> **showActions**: (`title`, `content`, `actions`) => `void`

Shows the overlay with custom actions.

##### Parameters

###### title

[`Content`](Content.md)

The title of the overlay.

###### content

[`Content`](Content.md)

The content to display in the overlay.

###### actions

`Omit`\<[`PopUpAction`](PopUpAction.md), `"confirm"`\>[]

The actions to display in the overlay.

##### Returns

`void`

#### overlay.showConfirm()

> **showConfirm**: (`content`, `onYes`, `onNo`?) => `void`

Shows the overlay with yes/no buttons.

##### Parameters

###### content

[`Content`](Content.md)

The content to display in the overlay.

###### onYes

() => `void`

The function to call when the yes button is clicked.

###### onNo?

() => `void`

The function to call when the no button is clicked.

##### Returns

`void`

### remove()

> **remove**: () => `void`

Removes the modal.

#### Returns

`void`

### show()

> **show**: () => `void`

Shows the modal.

#### Returns

`void`

### update()

> **update**: (`options`) => `void`

Updates the modal options.

#### Parameters

##### options

`Partial`\<[`PopUpOptions`](PopUpOptions.md)\>

The options to update.

#### Returns

`void`
