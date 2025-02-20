import * as React from "react";

/**
 * Returns a function that will call the given handler and prevent the default event behavior.
 * @param handler The function to call when the event is triggered.
 */
export const preventDefault = (handler?: (event: any) => void) => (event: any) => {
    event.preventDefault();
    handler && handler(event);
};

/**
 * Imports a script and returns a promise that resolves when the script is loaded.
 * @param resourceUrl The url of the script to load.
 * @param singleton If true, the script will only be loaded once.
 * @param placement "body" or "head" to specify where the script should be placed.
 */
export const importScript = (
    resourceUrl: string,
    singleton: boolean = true,
    placement: "body" | "head" = "body",
): Promise<void> =>
    new Promise<void>(resolve => {
        React.useEffect(() => {
            const script = document.createElement("script");
            if (!document.querySelectorAll(`script[src='${resourceUrl}']`).length) {
                script.src = resourceUrl;
                script.async = true;
                script.onload = () => resolve();
                if (placement === "head") {
                    document.head.appendChild(script);
                } else {
                    document.body.appendChild(script);
                }
            } else {
                resolve();
            }
            return () => !singleton && script.remove();
        }, []);
    });

/**
 * Imports a stylesheet and adds it to the head.
 * @param resourceUrl The url of the stylesheet to load.
 */
export const importStyleSheet = (resourceUrl: string) => {
    React.useEffect(() => {
        if (!document.querySelectorAll(`link[href='${resourceUrl}']`).length) {
            const link = document.createElement("link");
            link.href = resourceUrl;
            link.rel = "stylesheet";
            link.type = "text/css";
            document.head.appendChild(link);
        }
    }, []);
};

/**
 * Creates a countdown timer that will call the onExpiry function when the timer expires.
 * @param seconds The number of seconds to count down.
 * @param onExpiry The function to call when the timer expires.
 * @returns The number of seconds remaining.
 */
export const useCountdown = (seconds: number, onExpiry: () => void): number => {
    const [secondsRemaining, setSecondsRemaining] = React.useState<number>(seconds);

    const interval = setInterval(() => {
        if (secondsRemaining === 1) {
            clearInterval(interval);
            onExpiry();
        }
        setSecondsRemaining(secondsRemaining - 1);
    }, 1000);

    React.useEffect(() => () => clearInterval(interval));
    return secondsRemaining;
};

/**
 * Formats a number as a dollar amount.
 * @param amount The amount to format.
 * @param decimal_places If true, the decimal places will be included.
 */
export const formatDollar = (amount: number, decimal_places?: boolean): string => {
    const p = amount.toFixed(2).split(".");
    let result = p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
            return num + (i && !(i % 3) ? "," : "") + acc;
        }, "");
    if (decimal_places) {
        result += "." + p[1];
    }
    return result;
};

/**
 * Calls the authCheckUrl to check if the user is authenticated. The URL should return a JSON response with
 * just `true` or `false` to indicate if the user is authenticated. If user is authenticated, it will call the
 * function (fn), otherwise it will redirect to `authRedirectUrl`.
 * @param fn The function to call if the user is authenticated.
 * @param authCheckUrl The URL to call to check if the user is authenticated.
 * @param authRedirectUrl The URL to redirect to if the user is not authenticated.
 */
export const fnWithAuthCheck = (fn: Function, authCheckUrl: string, authRedirectUrl: string) =>
    fetch(authCheckUrl)
        .then(response => response.json())
        .then(isAuthenticated => {
            if (isAuthenticated) {
                fn();
            } else {
                location.href = `${authRedirectUrl}?next=${encodeURIComponent(window.location.pathname)}`;
            }
        });

/**
 * Utility class for storage-related operations.
 */
export class StorageUtils {
    /**
     * Checks if the storage is available.
     * @returns A boolean indicating if the storage is available.
     */
    public static isStorageAvailable() {
        let available = typeof Storage !== "undefined";
        try {
            if (available) sessionStorage.setItem("test", "test");
        } catch (e) {
            available = false;
        }
        return available;
    }
}

/**
 * Converts a string to a hash code.
 * @param input The string to convert.
 * @returns The hash code of the input string.
 */
export const toHashCode = (input: string): number => {
    let hash = 0;
    if (input.length === 0) return hash;
    for (let i = 0, len = input.length; i < len; i++) {
        hash = (hash << 5) - hash + input.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

/**
 * Inserts a URL parameter.
 * @param key The key of the parameter.
 * @param value The value of the parameter.
 */
export const insertUrlParam = (key: string, value: any) => {
    if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newUrl =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?" +
            searchParams.toString();
        window.history.pushState({ path: newUrl }, "", newUrl);
    }
};

/**
 * Inserts multiple URL parameters.
 * @param params An object containing key-value pairs of parameters.
 */
export const insertUrlParams = (params: { [key: string]: any }) =>
    Object.keys(params).forEach(key => insertUrlParam(key, params[key]));

/**
 * Retrieves URL parameters as an object.
 * @returns An object containing the URL parameters.
 */
export const getUrlParams = <T>() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {} as T;
    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
    }
    return params;
};

/**
 * A class representing a deferred promise.
 */
export class Deferred<T> {
    private _resolve: (result: T) => void;
    private _reject: (error: any) => void;
    /**
     * The promise object.
     */
    public readonly promise: Promise<T>;

    constructor() {
        this.promise = new Promise<T>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    /**
     * Resolves the promise with the given result.
     */
    public get resolve() {
        return this._resolve;
    }

    /**
     * Rejects the promise with the given error.
     */
    public get reject() {
        return this._reject;
    }
}

/**
 * Parses a JSON string and returns the corresponding object.
 * @param json The JSON string to parse.
 * @param errorValue The value to return if parsing fails.
 * @returns The parsed object or the error value.
 */
export const tryParseJson = <T = any>(json: string, errorValue = {}) => {
    try {
        return JSON.parse(json) as T;
    } catch (e) {
        return errorValue;
    }
};

/**
 * Hook to check if an element is visible in the viewport.
 * @param ref The reference to the element.
 * @returns A boolean indicating if the element is visible.
 */
export const useIsVisible = (ref: React.MutableRefObject<any>) => {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
};

/**
 * Hook to publish and subscribe to custom events.
 * @returns An object containing the usePub and useSub hooks.
 */
export const usePubSub = <T>() => {
    const getEventName = (event: any) => `dry-ux-event-${event}`;
    /**
     * Publishes a custom event with the specified name and data.
     * @template TName The type of the event name.
     * @template TPayload The type of the event payload.
     * @param event The name of the event to publish.
     * @param data The data to include in the event payload.
     */
    const usePub =
        () =>
        <TName extends keyof T, TPayload extends T[TName]>(event: TName, data?: TPayload) => {
            document.dispatchEvent(
                new CustomEvent<TPayload>(getEventName(event), {
                    detail: data,
                }),
            );
        };

    /**
     * Subscribes to a custom event with the specified name and calls the callback when the event is triggered.
     * @template TName The type of the event name.
     * @template TPayload The type of the event payload.
     * @param event The name of the event to subscribe to.
     * @param callback The function to call when the event is triggered.
     * @returns A function to unsubscribe from the event.
     */
    const useSub = <TName extends keyof T, TPayload extends T[TName]>(
        event: TName,
        callback: (data: TPayload) => void,
    ) => {
        const controller = new AbortController();

        const unsubscribe = () => controller.abort();

        React.useEffect(() => {
            document.addEventListener(getEventName(event), (event: CustomEvent<TPayload>) => callback(event.detail), {
                signal: controller.signal,
            });
            return unsubscribe;
        }, []);

        return unsubscribe;
    };

    return { usePub, useSub };
};

export const useDimensions = (ref?: React.MutableRefObject<HTMLElement>) => {
    const [size, setSize] = React.useState<{ width: number; height: number }>({ width: 0, height: 0 });

    const element = ref?.current || document.documentElement;

    const handleResize = React.useCallback(
        () => setSize({ width: element.clientWidth, height: element.clientHeight }),
        [element],
    );

    React.useEffect(() => {
        const controller = new AbortController();
        window.addEventListener("load", handleResize, { signal: controller.signal });
        window.addEventListener("resize", handleResize, { signal: controller.signal });
        handleResize();

        return () => controller.abort();
    }, [ref, handleResize]);

    return size;
};
