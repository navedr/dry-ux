[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / initLoggerFactory

# Function: initLoggerFactory()

```ts
function initLoggerFactory(path: string): {
  useLogger: (name: string) => ILogger;
}
```

Defined in: [src/helpers/logger.ts:81](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/helpers/logger.ts#L81)

Initializes a logger factory with the specified path.

## Parameters

### path

`string`

The endpoint to which log messages will be sent.

## Returns

```ts
{
  useLogger: (name: string) => ILogger;
}
```

An object containing a useLogger method to create logger instances.

### useLogger()

```ts
useLogger: (name: string) => ILogger;
```

Creates a logger instance with the specified name.

#### Parameters

##### name

`string`

The name of the logger.

#### Returns

[`ILogger`](../interfaces/ILogger.md)

The logger instance with methods to log messages at different levels.
