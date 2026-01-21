[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / Element

# Class: Element

Defined in: [src/enhanced-inputs/Element.ts:6](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L6)

Class representing a generic DOM element with utility methods for manipulation and validation.

## Constructors

### new Element()

```ts
new Element(native: HTMLElement): Element
```

Defined in: [src/enhanced-inputs/Element.ts:12](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L12)

Creates an instance of Element.

#### Parameters

##### native

`HTMLElement`

The native HTML element.

#### Returns

[`Element`](Element.md)

## Accessors

### native

#### Get Signature

```ts
get native(): HTMLElement
```

Defined in: [src/enhanced-inputs/Element.ts:20](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L20)

Gets the native HTML element.

##### Returns

`HTMLElement`

The native HTML element.

***

### nativeInput

#### Get Signature

```ts
get nativeInput(): InputElement
```

Defined in: [src/enhanced-inputs/Element.ts:132](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L132)

Gets the native input element.

##### Returns

[`InputElement`](../type-aliases/InputElement.md)

The native input element.

## Methods

### addClass()

```ts
addClass(className: string): void
```

Defined in: [src/enhanced-inputs/Element.ts:117](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L117)

Adds a class to the element.

#### Parameters

##### className

`string`

The class name to add.

#### Returns

`void`

***

### addEventListener()

```ts
addEventListener(
   type: string, 
   handler: (e: Event) => void, 
   once?: boolean): () => void
```

Defined in: [src/enhanced-inputs/Element.ts:143](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L143)

Adds an event listener to the element.

#### Parameters

##### type

`string`

The event type to listen for.

##### handler

(`e`: `Event`) => `void`

The event handler function.

##### once?

`boolean`

Whether the event should only fire once.

#### Returns

`Function`

A function to remove the event listener, or undefined if the element is not suitable for events.

##### Returns

`void`

***

### after()

```ts
after(html: string): void
```

Defined in: [src/enhanced-inputs/Element.ts:109](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L109)

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

Defined in: [src/enhanced-inputs/Element.ts:76](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L76)

Gets the value of an attribute.

#### Parameters

##### attribute

`string`

The attribute name.

#### Returns

`string`

The value of the attribute or null if not found.

***

### blur()

```ts
blur(handler: (e: Event) => void, once?: boolean): () => void
```

Defined in: [src/enhanced-inputs/Element.ts:192](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L192)

Adds a blur event listener to the element.

#### Parameters

##### handler

(`e`: `Event`) => `void`

The event handler function.

##### once?

`boolean`

Whether the event should only fire once.

#### Returns

`Function`

A function to remove the event listener.

##### Returns

`void`

***

### byClassName()

```ts
byClassName(className: string): Element[]
```

Defined in: [src/enhanced-inputs/Element.ts:315](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L315)

Finds all elements with the specified class name within this element's scope.

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
byId(id: string): Element
```

Defined in: [src/enhanced-inputs/Element.ts:233](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L233)

Finds an element by its ID within this element's scope.

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
bySelector(selector: string): Element
```

Defined in: [src/enhanced-inputs/Element.ts:254](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L254)

Finds the first element matching the CSS selector within this element's scope.

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
bySelectorAll(selector: string): Element[]
```

Defined in: [src/enhanced-inputs/Element.ts:275](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L275)

Finds all elements matching the CSS selector within this element's scope.

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
byTagName(tagName: string): Element[]
```

Defined in: [src/enhanced-inputs/Element.ts:295](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L295)

Finds all elements with the specified tag name within this element's scope.

#### Parameters

##### tagName

`string`

The tag name to match.

#### Returns

[`Element`](Element.md)[]

An array of Element instances.

***

### change()

```ts
change(handler: (e: Event) => void, once?: boolean): () => void
```

Defined in: [src/enhanced-inputs/Element.ts:162](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L162)

Adds a change event listener to the element.

#### Parameters

##### handler

(`e`: `Event`) => `void`

The event handler function.

##### once?

`boolean`

Whether the event should only fire once.

#### Returns

`Function`

A function to remove the event listener.

##### Returns

`void`

***

### click()

```ts
click(handler: (e: Event) => void, once?: boolean): () => void
```

Defined in: [src/enhanced-inputs/Element.ts:172](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L172)

Adds a click event listener to the element.

#### Parameters

##### handler

(`e`: `Event`) => `void`

The event handler function.

##### once?

`boolean`

Whether the event should only fire once.

#### Returns

`Function`

A function to remove the event listener.

##### Returns

`void`

***

### data()

```ts
data(attribute: string): string
```

Defined in: [src/enhanced-inputs/Element.ts:65](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L65)

Gets the value of a data attribute.

#### Parameters

##### attribute

`string`

The data attribute name.

#### Returns

`string`

The value of the data attribute.

***

### empty()

```ts
empty(): void
```

Defined in: [src/enhanced-inputs/Element.ts:39](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L39)

Clears the inner content of element by setting it to an empty string.

#### Returns

`void`

***

### focus()

```ts
focus(handler: (e: Event) => void, once?: boolean): () => void
```

Defined in: [src/enhanced-inputs/Element.ts:182](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L182)

Adds a focus event listener to the element.

#### Parameters

##### handler

(`e`: `Event`) => `void`

The event handler function.

##### once?

`boolean`

Whether the event should only fire once.

#### Returns

`Function`

A function to remove the event listener.

##### Returns

`void`

***

### hasClass()

```ts
hasClass(className: string): boolean
```

Defined in: [src/enhanced-inputs/Element.ts:48](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L48)

Checks if the element has a specific class.

#### Parameters

##### className

`string`

The class name to check.

#### Returns

`boolean`

True if the element has the class, false otherwise.

***

### keydown()

```ts
keydown(handler: (e: KeyboardEvent) => void, once?: boolean): () => void
```

Defined in: [src/enhanced-inputs/Element.ts:202](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L202)

Adds a keydown event listener to the element.

#### Parameters

##### handler

(`e`: `KeyboardEvent`) => `void`

The keyboard event handler function.

##### once?

`boolean`

Whether the event should only fire once.

#### Returns

`Function`

A function to remove the event listener.

##### Returns

`void`

***

### keyup()

```ts
keyup(handler: (e: KeyboardEvent) => void, once?: boolean): () => void
```

Defined in: [src/enhanced-inputs/Element.ts:212](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L212)

Adds a keyup event listener to the element.

#### Parameters

##### handler

(`e`: `KeyboardEvent`) => `void`

The keyboard event handler function.

##### once?

`boolean`

Whether the event should only fire once.

#### Returns

`Function`

A function to remove the event listener.

##### Returns

`void`

***

### next()

```ts
next(): Element
```

Defined in: [src/enhanced-inputs/Element.ts:101](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L101)

Gets the next sibling element.

#### Returns

[`Element`](Element.md)

The next sibling element.

***

### parents()

```ts
parents(selector: string): Element
```

Defined in: [src/enhanced-inputs/Element.ts:93](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L93)

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

Defined in: [src/enhanced-inputs/Element.ts:124](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L124)

Removes the element from the DOM.

#### Returns

`void`

***

### removeClass()

```ts
removeClass(className: string): void
```

Defined in: [src/enhanced-inputs/Element.ts:56](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L56)

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
val(value?: string): string
```

Defined in: [src/enhanced-inputs/Element.ts:32](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L32)

Gets or sets the value of the input element.

#### Parameters

##### value?

`string`

Optional value to set for the input element.
If no value is provided, it returns the current value of the input element.
If a value is provided, it sets the input element's value to that value.
This method is useful for both getting and setting the value of input elements.

#### Returns

`string`

The value of the input element.

***

### visible()

```ts
visible(): boolean
```

Defined in: [src/enhanced-inputs/Element.ts:84](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L84)

Checks if the element is visible.

#### Returns

`boolean`

True if the element is visible, false otherwise.

***

### byClassName()

```ts
static byClassName(className: string): Element[]
```

Defined in: [src/enhanced-inputs/Element.ts:306](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L306)

Finds all elements with the specified class name.
When called as static method: searches entire document.
When called as instance method: searches within this element's scope.

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

Defined in: [src/enhanced-inputs/Element.ts:223](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L223)

Finds an element by its ID.
When called as static method: searches entire document.
When called as instance method: searches within this element's scope.

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

Defined in: [src/enhanced-inputs/Element.ts:244](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L244)

Finds the first element matching the CSS selector.
When called as static method: searches entire document.
When called as instance method: searches within this element's scope.

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

Defined in: [src/enhanced-inputs/Element.ts:266](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L266)

Finds all elements matching the CSS selector.
When called as static method: searches entire document.
When called as instance method: searches within this element's scope.

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

Defined in: [src/enhanced-inputs/Element.ts:286](https://github.com/navedr/dry-ux/blob/cdfbca6e45c9f21b1dc121cf539d6ad14e9cbd46/src/enhanced-inputs/Element.ts#L286)

Finds all elements with the specified tag name.
When called as static method: searches entire document.
When called as instance method: searches within this element's scope.

#### Parameters

##### tagName

`string`

The tag name to match.

#### Returns

[`Element`](Element.md)[]

An array of Element instances.
