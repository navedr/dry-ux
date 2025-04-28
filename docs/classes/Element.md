[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / Element

# Class: Element

Defined in: [src/enhanced-inputs/Validaition.ts:8](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L8)

Class representing a generic DOM element with utility methods for manipulation and validation.

## Constructors

### new Element()

```ts
new Element(native: HTMLElement): Element
```

Defined in: [src/enhanced-inputs/Validaition.ts:13](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L13)

Creates an instance of Element.

#### Parameters

##### native

`HTMLElement`

The native HTML element.

#### Returns

[`Element`](Element.md)

## Properties

### native

```ts
native: HTMLElement;
```

Defined in: [src/enhanced-inputs/Validaition.ts:13](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L13)

The native HTML element.

## Accessors

### nativeInput

#### Get Signature

```ts
get nativeInput(): InputElement
```

Defined in: [src/enhanced-inputs/Validaition.ts:111](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L111)

Gets the native input element.

##### Returns

`InputElement`

The native input element.

## Methods

### addClass()

```ts
addClass(className: string): void
```

Defined in: [src/enhanced-inputs/Validaition.ts:96](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L96)

Adds a class to the element.

#### Parameters

##### className

`string`

The class name to add.

#### Returns

`void`

***

### after()

```ts
after(html: string): void
```

Defined in: [src/enhanced-inputs/Validaition.ts:88](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L88)

Inserts HTML after the element.

#### Parameters

##### html

`string`

The HTML to insert.

#### Returns

`void`

***

### attr()

```ts
attr(attribute: string): string
```

Defined in: [src/enhanced-inputs/Validaition.ts:55](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L55)

Gets the value of an attribute.

#### Parameters

##### attribute

`string`

#### Returns

`string`

***

### data()

```ts
data(attribute: string): string
```

Defined in: [src/enhanced-inputs/Validaition.ts:45](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L45)

Gets the value of a data attribute.

#### Parameters

##### attribute

`string`

The data attribute name.

#### Returns

`string`

The value of the data attribute.

***

### hasClass()

```ts
hasClass(className: string): boolean
```

Defined in: [src/enhanced-inputs/Validaition.ts:28](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L28)

Checks if the element has a specific class.

#### Parameters

##### className

`string`

The class name to check.

#### Returns

`boolean`

True if the element has the class, false otherwise.

***

### next()

```ts
next(): Element
```

Defined in: [src/enhanced-inputs/Validaition.ts:80](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L80)

Gets the next sibling element.

#### Returns

[`Element`](Element.md)

The next sibling element.

***

### parents()

```ts
parents(selector: string): Element
```

Defined in: [src/enhanced-inputs/Validaition.ts:72](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L72)

Gets the closest ancestor element that matches the selector.

#### Parameters

##### selector

`string`

The selector to match.

#### Returns

[`Element`](Element.md)

The closest ancestor element.

***

### remove()

```ts
remove(): void
```

Defined in: [src/enhanced-inputs/Validaition.ts:103](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L103)

Removes the element from the DOM.

#### Returns

`void`

***

### removeClass()

```ts
removeClass(className: string): void
```

Defined in: [src/enhanced-inputs/Validaition.ts:36](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L36)

Removes a specific class from the element.

#### Parameters

##### className

`string`

The class name to remove.

#### Returns

`void`

***

### val()

```ts
val(): string
```

Defined in: [src/enhanced-inputs/Validaition.ts:19](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L19)

Gets the value of the input element.

#### Returns

`string`

The value of the input element.

***

### visible()

```ts
visible(): boolean
```

Defined in: [src/enhanced-inputs/Validaition.ts:63](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/enhanced-inputs/Validaition.ts#L63)

Checks if the element is visible.

#### Returns

`boolean`

True if the element is visible, false otherwise.
