/**
 * Interface representing a logger with various logging methods.
 */
export interface ILogger {
    /**
     * Logs a message with the info level.
     * @param {...any[]} message - The message to log.
     */
    log(...message: any[]): void;

    /**
     * Logs a message with the error level.
     * @param {...any[]} message - The message to log.
     */
    error(...message: any[]): void;

    /**
     * Logs a message with the debug level.
     * @param {...any[]} message - The message to log.
     */
    debug(...message: any[]): void;

    /**
     * Logs a message with the warn level.
     * @param {...any[]} message - The message to log.
     */
    warn(...message: any[]): void;
}

/**
 * Creates a logger instance with the specified path and name.
 *
 * @param {string} path - The endpoint to which log messages will be sent.
 * @param {string} name - The name of the logger.
 * @returns {ILogger} The logger instance with methods to log messages at different levels.
 */
const useLogger = (path: string, name: string): ILogger => {
    const convertMessage = (message: any[]) =>
        message
            .map(m => {
                try {
                    if (typeof m === "undefined") {
                        return "undefined";
                    }
                    if (m === null) {
                        return "null";
                    }
                    if (typeof m === "string" || typeof m === "number" || typeof m === "boolean") {
                        return m.toString();
                    }
                    return JSON.stringify(m);
                } catch (e) {
                    return m;
                }
            })
            .join(" ");

    const log = (level: "info" | "error" | "warn" | "debug", message: any[]) =>
        fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ logger_name: name, level, message: convertMessage(message) }),
        });

    return {
        log: (...message: any[]) => log("info", message),
        error: (...message: any[]) => log("error", message),
        debug: (...message: any[]) => log("debug", message),
        warn: (...message: any[]) => log("warn", message),
    };
};

/**
 * Initializes a logger factory with the specified path.
 *
 * @param {string} path - The endpoint to which log messages will be sent.
 * @returns {Object} An object containing a useLogger method to create logger instances.
 */
export const initLoggerFactory = (path: string) => ({
    /**
     * Creates a logger instance with the specified name.
     *
     * @param {string} name - The name of the logger.
     * @returns {ILogger} The logger instance with methods to log messages at different levels.
     */
    useLogger: (name: string): ILogger => useLogger(path, name),
});
