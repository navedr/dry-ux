[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / PopUpOptions

# Type Alias: PopUpOptions

```ts
type PopUpOptions = {
  actions: PopUpAction[];
  centered: boolean;
  closeBtn: boolean;
  content: Content;
  cssClass: string;
  destroyOnClose: boolean;
  footerContent: Content;
  onClose: () => void;
  title: Content;
  titleCloseBtn: boolean;
  trackingId: string;
  width: string | number;
};
```

Defined in: [src/ui-utils/UIUtil.interface.ts:124](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/ui-utils/UIUtil.interface.ts#L124)

Represents the options for a PopUp.

## Type declaration

### actions?

```ts
optional actions: PopUpAction[];
```

If true, the modal will be shown.

### centered?

```ts
optional centered: boolean;
```

If true, the modal will be centered vertically.

### closeBtn?

```ts
optional closeBtn: boolean;
```

If true, the modal will have a close button in the footer.

### content

```ts
content: Content;
```

The content of the modal.

### cssClass?

```ts
optional cssClass: string;
```

The class to apply to the modal.

### destroyOnClose?

```ts
optional destroyOnClose: boolean;
```

If true, the modal will be destroyed when it is closed.

### footerContent?

```ts
optional footerContent: Content;
```

Footer content of the modal.

### onClose()?

```ts
optional onClose: () => void;
```

Function to call when the modal is closed.

#### Returns

`void`

### title?

```ts
optional title: Content;
```

The title of the modal.

### titleCloseBtn?

```ts
optional titleCloseBtn: boolean;
```

If true, the modal will have a close button in the title bar.

### trackingId?

```ts
optional trackingId: string;
```

The tracking ID for the modal.

### width?

```ts
optional width: string | number;
```

The width of the modal.
