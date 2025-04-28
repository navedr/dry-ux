[**dry-ux**](../README.md)

***

[dry-ux](../README.md) / ILogger

# Interface: ILogger

Defined in: [src/helpers/logger.ts:4](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/helpers/logger.ts#L4)

Interface representing a logger with various logging methods.

## Methods

### debug()

```ts
debug(...message: any[]): void
```

Defined in: [src/helpers/logger.ts:21](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/helpers/logger.ts#L21)

Logs a message with the debug level.

#### Parameters

##### message

...`any`[]

The message to log.

#### Returns

`void`

***

### error()

```ts
error(...message: any[]): void
```

Defined in: [src/helpers/logger.ts:15](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/helpers/logger.ts#L15)

Logs a message with the error level.

#### Parameters

##### message

...`any`[]

The message to log.

#### Returns

`void`

***

### log()

```ts
log(...message: any[]): void
```

Defined in: [src/helpers/logger.ts:9](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/helpers/logger.ts#L9)

Logs a message with the info level.

#### Parameters

##### message

...`any`[]

The message to log.

#### Returns

`void`

***

### warn()

```ts
warn(...message: any[]): void
```

Defined in: [src/helpers/logger.ts:27](https://github.com/navedr/dry-ux/blob/2307d10e08d1eae1fe225a5cfa75f0bf24715180/src/helpers/logger.ts#L27)

Logs a message with the warn level.

#### Parameters

##### message

...`any`[]

The message to log.

#### Returns

`void`
