[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / PopUpInstance

# Type Alias: PopUpInstance

```ts
type PopUpInstance = {
  handleClose: (id: string, shown: boolean, destroyOnClose?: boolean) => void;
  options: PopUpOptions;
  overlay: Content;
  shown: boolean;
  toggleOverlay: (id: string, content?: Content) => void;
};
```

Defined in: [src/ui-utils/UIUtil.interface.ts:67](https://github.com/navedr/dry-ux/blob/caab991ee97f6aeffaf134cbc4d98e0b18f2cf6b/src/ui-utils/UIUtil.interface.ts#L67)

Represents an instance of a PopUp.

## Type declaration

### handleClose()

```ts
handleClose: (id: string, shown: boolean, destroyOnClose?: boolean) => void;
```

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

```ts
options: PopUpOptions;
```

The options for the PopUp.

### overlay?

```ts
optional overlay: Content;
```

The overlay content for the PopUp.

### shown

```ts
shown: boolean;
```

Indicates whether the PopUp is shown.

### toggleOverlay()

```ts
toggleOverlay: (id: string, content?: Content) => void;
```

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
