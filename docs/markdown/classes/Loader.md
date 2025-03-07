[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / Loader

# Class: Loader

Defined in: [src/ui-utils/Loader.ts:6](https://github.com/navedr/dry-ux/blob/3bb4f59fc510052cb6c7925e1f6422bb71eb4aa4/src/ui-utils/Loader.ts#L6)

A singleton class that manages the display of a fullscreen loader spinner.

## Accessors

### element

#### Get Signature

```ts
get element(): HTMLElement
```

Defined in: [src/ui-utils/Loader.ts:28](https://github.com/navedr/dry-ux/blob/3bb4f59fc510052cb6c7925e1f6422bb71eb4aa4/src/ui-utils/Loader.ts#L28)

Gets the loader element from the DOM.

##### Returns

`HTMLElement`

The loader element.

## Methods

### hide()

```ts
hide(): void
```

Defined in: [src/ui-utils/Loader.ts:43](https://github.com/navedr/dry-ux/blob/3bb4f59fc510052cb6c7925e1f6422bb71eb4aa4/src/ui-utils/Loader.ts#L43)

Hides the loader by setting its visibility to hidden.

#### Returns

`void`

***

### show()

```ts
show(): void
```

Defined in: [src/ui-utils/Loader.ts:35](https://github.com/navedr/dry-ux/blob/3bb4f59fc510052cb6c7925e1f6422bb71eb4aa4/src/ui-utils/Loader.ts#L35)

Shows the loader by setting its visibility to visible.

#### Returns

`void`

***

### getInstance()

```ts
static getInstance(): Loader
```

Defined in: [src/ui-utils/Loader.ts:17](https://github.com/navedr/dry-ux/blob/3bb4f59fc510052cb6c7925e1f6422bb71eb4aa4/src/ui-utils/Loader.ts#L17)

Returns the singleton instance of the Loader class.

#### Returns

[`Loader`](Loader.md)

The Loader instance.
