[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / PopUpAction

# Type Alias: PopUpAction

```ts
type PopUpAction = {
  closeOnClick: boolean;
  confirm: Content;
  content: Content;
  onClick: () => void;
  type: ButtonType;
};
```

Defined in: [src/ui-utils/UIUtil.interface.ts:98](https://github.com/navedr/dry-ux/blob/fe5e7a8c63b87cc39fd5f77cac09ec0c59566f52/src/ui-utils/UIUtil.interface.ts#L98)

Represents an action for a PopUp.

## Type declaration

### closeOnClick?

```ts
optional closeOnClick: boolean;
```

If true, the modal will be closed when the button is clicked.

### confirm?

```ts
optional confirm: Content;
```

If set, confirm overlay will be shown before the action is executed.

### content

```ts
content: Content;
```

The content to display in the modal.

### onClick()?

```ts
optional onClick: () => void;
```

Function to call when the button is clicked.

#### Returns

`void`

### type?

```ts
optional type: ButtonType;
```

The type of button to display.
