[**dry-ux**](../README.md)

***

[dry-ux](../globals.md) / initLoggerFactory

# Function: initLoggerFactory()

> **initLoggerFactory**(`path`): `object`

Defined in: [src/helpers/logger.ts:81](https://github.com/navedr/dry-ux/blob/b8fe047776f9e9943b5ac8e30a3dd152faaba227/src/helpers/logger.ts#L81)

Initializes a logger factory with the specified path.

## Parameters

### path

`string`

The endpoint to which log messages will be sent.

## Returns

`object`

An object containing a useLogger method to create logger instances.

### useLogger()

> **useLogger**: (`name`) => [`ILogger`](../interfaces/ILogger.md)

Creates a logger instance with the specified name.

#### Parameters

##### name

`string`

The name of the logger.

#### Returns

[`ILogger`](../interfaces/ILogger.md)

The logger instance with methods to log messages at different levels.
