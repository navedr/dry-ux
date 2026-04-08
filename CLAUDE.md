# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What is dry-ux?

A React utility library (npm: `dry-ux`) providing reusable components, hooks, and utilities. Targets React 16.8+ with hooks support. Uses react-bootstrap ^0.33.1 for modal/button styling.

## Build & Development Commands

```bash
npm run build          # Clean dist/, compile TypeScript, copy CSS
npm run watch          # TypeScript watch mode
npm run format         # Prettier on src/**/*.{ts,tsx}
npm run storybook      # Dev server on port 6006
npm run docs           # TypeDoc (HTML + Markdown) + build test app demo
npm run pack           # Build + create tarball in pack/
npm run prepub:npm     # format → build → bump minor version → docs
npm run publish:npm    # prepub:npm → npm publish
```

Test app lives in `/test` with its own package.json:
```bash
cd test && npm run dev           # webpack dev + watch
cd test && npm run build:test    # production build to proddist/
```

No formal test runner at root level. Storybook stories (`src/**/*.stories.tsx`) serve as visual tests.

## TypeScript Configuration

- Target: ES2015, Module: CommonJS, JSX: react
- Output: `./dist` with declarations (`.d.ts`)
- Stories excluded from compilation

## Code Style

- **Prettier**: 4-space indent, double quotes, semicolons, trailing commas, 120 char width, `arrowParens: "avoid"`, `jsxBracketSameLine: true`
- **TSLint**: strict equality (allow null check), no eval, no var, no trailing commas, 4-space indent
- Uses `var` keyword prohibition (`no-var-keyword`) and `no-require-imports`

## Architecture

### Provider Pattern (core abstraction)

Wrap your app with `<DryUXProvider>` to get access to modal, prompt, loader, and viewport APIs via `useDryUxContext()` hook (or `DryUXContext` for class components).

```
DryUXProvider (src/provider.tsx)
  └── UIUtilProvider (src/ui-utils/UIUtilProvider.tsx) — React Context + state management
       └── UIUtilRenderer (src/ui-utils/UIUtilRenderer.tsx) — renders modals/loaders from context
```

The provider exposes: `modal` (create/show/alert/confirm/actions), `prompt` (confirm/actions), `customLoader`, `loader`, and `viewport`.

### Source Organization

| Directory | Purpose |
|-----------|---------|
| `src/ui-utils/` | Modal, Spinner, Loader (singleton), RenderWhenVisible, ViewportDetect, Money, ActionsOverlay |
| `src/enhanced-inputs/` | Input/Select/TextArea with validation HOC (`withEnhancements`), `Element` DOM wrapper, `CurrencyInput` |
| `src/error/` | ErrorBoundary + ErrorScreen fallback |
| `src/dajaxice/` | Type-safe AJAX proxy for Django Dajaxice integration |
| `src/helpers/` | Utility functions (formatDollar, useCountdown, usePubSub, useSearchParams, flatten/unflatten, logger) |
| `src/styles/` | CSS files copied to dist/styles/ at build time |

### Entry Point

`src/index.ts` re-exports everything. All public API surface is defined here. New modules must be exported from this file.

### Key Patterns

- **withEnhancements HOC** (`enhanced-inputs/withEnhancements.tsx`): wraps Input/Select/TextArea to add declarative validation
- **Validation class** (`enhanced-inputs/Validaition.ts`): note the typo in filename — supports required, email, digits, number, money, date, regex, min/max
- **Loader singleton** (`ui-utils/Loader.ts`): fullscreen loader, accessed via `Loader.getInstance()`
- **Element class** (`enhanced-inputs/Element.ts`): jQuery-like DOM wrapper (val, addClass, removeClass, etc.)
