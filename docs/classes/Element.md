[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / Element

# Class: Element

Defined in: src/enhanced-inputs/Element.ts:6

Class representing a generic DOM element with utility methods for manipulation and validation.

## Constructors

### new Element()

```ts
new Element(native: HTMLElement): Element
```

Defined in: src/enhanced-inputs/Element.ts:11

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

Defined in: src/enhanced-inputs/Element.ts:11

The native HTML element.

## Accessors

### nativeInput

#### Get Signature

```ts
get nativeInput(): InputElement
```

Defined in: src/enhanced-inputs/Element.ts:110

Gets the native input element.

##### Returns

`InputElement`

The native input element.

## Methods

### addClass()

```ts
addClass(className: string): void
```

Defined in: src/enhanced-inputs/Element.ts:95

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

Defined in: src/enhanced-inputs/Element.ts:87

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

Defined in: src/enhanced-inputs/Element.ts:54

Gets the value of an attribute.

#### Parameters

##### attribute

`string`

The attribute name.

#### Returns

`string`

The value of the attribute or null if not found.

***

### data()

```ts
data(attribute: string): string
```

Defined in: src/enhanced-inputs/Element.ts:43

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

Defined in: src/enhanced-inputs/Element.ts:26

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

Defined in: src/enhanced-inputs/Element.ts:79

Gets the next sibling element.

#### Returns

[`Element`](Element.md)

The next sibling element.

***

### parents()

```ts
parents(selector: string): Element
```

Defined in: src/enhanced-inputs/Element.ts:71

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

Defined in: src/enhanced-inputs/Element.ts:102

Removes the element from the DOM.

#### Returns

`void`

***

### removeClass()

```ts
removeClass(className: string): void
```

Defined in: src/enhanced-inputs/Element.ts:34

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

Defined in: src/enhanced-inputs/Element.ts:17

Gets the value of the input element.

#### Returns

`string`

The value of the input element.

***

### visible()

```ts
visible(): boolean
```

Defined in: src/enhanced-inputs/Element.ts:62

Checks if the element is visible.

#### Returns

`boolean`

True if the element is visible, false otherwise.

***

### byClassName()

```ts
static byClassName(className: string): Element[]
```

Defined in: src/enhanced-inputs/Element.ts:157

Finds all elements with the specified class name.

#### Parameters

##### className

`string`

The class name to match.

#### Returns

[`Element`](Element.md)[]

An array of Element instances.

***

### byId()

```ts
static byId(id: string): Element
```

Defined in: src/enhanced-inputs/Element.ts:119

Finds an element by its ID.

#### Parameters

##### id

`string`

The ID of the element to find.

#### Returns

[`Element`](Element.md)

The Element instance if found, null otherwise.

***

### bySelector()

```ts
static bySelector(selector: string): Element
```

Defined in: src/enhanced-inputs/Element.ts:129

Finds the first element matching the CSS selector.

#### Parameters

##### selector

`string`

The CSS selector to match.

#### Returns

[`Element`](Element.md)

The Element instance if found, null otherwise.

***

### bySelectorAll()

```ts
static bySelectorAll(selector: string): Element[]
```

Defined in: src/enhanced-inputs/Element.ts:139

Finds all elements matching the CSS selector.

#### Parameters

##### selector

`string`

The CSS selector to match.

#### Returns

[`Element`](Element.md)[]

An array of Element instances.

***

### byTagName()

```ts
static byTagName(tagName: string): Element[]
```

Defined in: src/enhanced-inputs/Element.ts:148

Finds all elements with the specified tag name.

#### Parameters

##### tagName

`string`

The tag name to match.

#### Returns

[`Element`](Element.md)[]

An array of Element instances.
