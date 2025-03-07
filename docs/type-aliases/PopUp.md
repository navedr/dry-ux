[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / PopUp

# Type Alias: PopUp

```ts
type PopUp = {
  hide: () => void;
  overlay: {
     hide: () => void;
     show: (content: Content) => void;
     showActions: (title: Content, content: Content, actions: Omit<PopUpAction, "confirm">[]) => void;
     showConfirm: (content: Content, onYes: () => void, onNo?: () => void) => void;
    };
  remove: () => void;
  show: () => void;
  update: (options: Partial<PopUpOptions>) => void;
};
```

Defined in: [src/ui-utils/UIUtil.interface.ts:11](https://github.com/navedr/dry-ux/blob/f464198215bbdbf8f80dadda55a7d0d7eeb0411c/src/ui-utils/UIUtil.interface.ts#L11)

Represents a PopUp with methods to control its visibility and content.

## Type declaration

### hide()

```ts
hide: () => void;
```

Hides the modal.

#### Returns

`void`

### overlay

```ts
overlay: {
  hide: () => void;
  show: (content: Content) => void;
  showActions: (title: Content, content: Content, actions: Omit<PopUpAction, "confirm">[]) => void;
  showConfirm: (content: Content, onYes: () => void, onNo?: () => void) => void;
};
```

The overlay for the modal.

#### overlay.hide()

```ts
hide: () => void;
```

Hides the overlay.

##### Returns

`void`

#### overlay.show()

```ts
show: (content: Content) => void;
```

Shows the overlay.

##### Parameters

###### content

[`Content`](Content.md)

The content to display in the overlay.

##### Returns

`void`

#### overlay.showActions()

```ts
showActions: (title: Content, content: Content, actions: Omit<PopUpAction, "confirm">[]) => void;
```

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

```ts
showConfirm: (content: Content, onYes: () => void, onNo?: () => void) => void;
```

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

```ts
remove: () => void;
```

Removes the modal.

#### Returns

`void`

### show()

```ts
show: () => void;
```

Shows the modal.

#### Returns

`void`

### update()

```ts
update: (options: Partial<PopUpOptions>) => void;
```

Updates the modal options.

#### Parameters

##### options

`Partial`\<[`PopUpOptions`](PopUpOptions.md)\>

The options to update.

#### Returns

`void`
