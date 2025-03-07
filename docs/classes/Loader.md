[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / Loader

# Class: Loader

Defined in: [src/ui-utils/Loader.ts:6](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/Loader.ts#L6)

A singleton class that manages the display of a fullscreen loader spinner.

## Accessors

### element

#### Get Signature

> **get** **element**(): `HTMLElement`

Defined in: [src/ui-utils/Loader.ts:28](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/Loader.ts#L28)

Gets the loader element from the DOM.

##### Returns

`HTMLElement`

The loader element.

## Methods

### hide()

> **hide**(): `void`

Defined in: [src/ui-utils/Loader.ts:43](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/Loader.ts#L43)

Hides the loader by setting its visibility to hidden.

#### Returns

`void`

***

### show()

> **show**(): `void`

Defined in: [src/ui-utils/Loader.ts:35](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/Loader.ts#L35)

Shows the loader by setting its visibility to visible.

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): [`Loader`](Loader.md)

Defined in: [src/ui-utils/Loader.ts:17](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/ui-utils/Loader.ts#L17)

Returns the singleton instance of the Loader class.

#### Returns

[`Loader`](Loader.md)

The Loader instance.
