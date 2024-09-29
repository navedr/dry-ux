export interface ILogger {
    log(...message: any[]): void;
    error(...message: any[]): void;
    debug(...message: any[]): void;
    warn(...message: any[]): void;
}

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

export const initLoggerFactory = (path: string) => ({
    useLogger: (name: string): ILogger => useLogger(path, name),
});
