export interface ILogger {
    log(...message: string[]): void;
    error(...message: string[]): void;
    debug(...message: string[]): void;
    warn(...message: string[]): void;
}

const useLogger = (path: string, name: string): ILogger => {
    const convertMessage = (message: string[]) =>
        message
            .map(m => {
                try {
                    if (typeof m === "string" || typeof m === "number" || typeof m === "boolean") {
                        return m.toString();
                    }
                    return JSON.stringify(m);
                } catch (e) {
                    return m;
                }
            })
            .join(" ");

    const log = (level: "info" | "error" | "warn" | "debug", message: string[]) =>
        fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ logger_name: name, level, message: convertMessage(message) }),
        });

    return {
        log: (...message: string[]) => log("info", message),
        error: (...message: string[]) => log("error", message),
        debug: (...message: string[]) => log("debug", message),
        warn: (...message: string[]) => log("warn", message),
    };
};

export const initLoggerFactory = (path: string) => ({
    useLogger: (name: string): ILogger => useLogger(path, name),
});
