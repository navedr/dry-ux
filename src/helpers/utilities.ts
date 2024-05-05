import * as React from "react";

/**
 * Returns a function that will call the given handler and prevent the default event behavior.
 * @param handler: The handler to call.
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
            if (!$(`script[src='${resourceUrl}']`).length) {
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
        if (!$(`link[href='${resourceUrl}']`).length) {
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

export const StorageUtils = {
    isStorageAvailable: function () {
        let available = typeof Storage !== "undefined";
        try {
            if (available) sessionStorage.setItem("test", "test");
        } catch (e) {
            available = false;
        }
        return available;
    },
};

export const toHashCode = (input: string): number => {
    let hash = 0;
    if (input.length === 0) return hash;
    for (let i = 0, len = input.length; i < len; i++) {
        hash = (hash << 5) - hash + input.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

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

export const insertUrlParams = (params: { [key: string]: any }) =>
    Object.keys(params).forEach(key => insertUrlParam(key, params[key]));

export const getUrlParams = <T>() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {} as T;
    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
    }
    return params;
};

export class Deferred<T> {
    public _resolve: (result: T) => void;
    public _reject: (error: any) => void;
    public readonly promise: Promise<T>;

    constructor() {
        this.promise = new Promise<T>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    public get resolve() {
        return this._resolve;
    }

    public get reject() {
        return this._reject;
    }
}

export const tryParseJson = <T = any>(json: string, errorValue = {}) => {
    try {
        return JSON.parse(json) as T;
    } catch (e) {
        return errorValue;
    }
};
