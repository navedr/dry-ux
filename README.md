## dry-ux

[![npm version](https://img.shields.io/npm/v/dry-ux.svg)](https://www.npmjs.com/package/dry-ux)

**dry-ux** is a comprehensive utility library designed for React applications. It offers a collection of reusable components, hooks, and utilities aimed at enhancing the development experience. The library includes features such as deferred rendering, error boundaries, loaders, storage utilities, and validation helpers. By promoting a DRY (Don't Repeat Yourself) approach, **dry-ux** helps developers avoid redundancy and streamline their codebase.

### Installation

```bash
npm install dry-ux
```

### Quick Start

```tsx
import { DryUXProvider, useDryUxContext } from "dry-ux";

const App = () => (
    <DryUXProvider>
        <MyApp />
    </DryUXProvider>
);
```

### Key Features

- **Modal System** - Programmatic modals with alerts, confirms, actions, overlays, and draggable support
- **Deferred Rendering** - Optimize performance by rendering components only when visible
- **Error Boundaries** - Customizable error boundaries with fallback UI
- **Form Validation** - Declarative validation for inputs, selects, and textareas
- **Loaders** - Fullscreen and custom loader management
- **Storage Utilities** - Simplified local/session storage interactions
- **Currency Formatting** - Money display and currency input components
- **Viewport Detection** - Responsive breakpoint detection via context

### Usage

Access UI utilities anywhere via the `useDryUxContext` hook:

```tsx
const MyComponent = () => {
    const { modal, loader } = useDryUxContext();

    const openModal = () =>
        modal.show({
            title: "Hello",
            content: <div>Modal content here</div>,
            width: 400,
            draggable: true,
        });

    return <button onClick={openModal}>Open Modal</button>;
};
```

### Documentation

For a detailed overview of all available classes, interfaces, type aliases, variables, and functions, refer to the [API Documentation](https://navedr.github.io/dry-ux/).

Check out the [demo](https://navedr.github.io/dry-ux/demo) for live examples.

### Requirements

- React >= 16.8.0
- react-dom >= 16.8.0
