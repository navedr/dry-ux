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
 */
export const importScript = (resourceUrl: string, singleton: boolean = true): Promise<void> =>
    new Promise<void>(resolve => {
        React.useEffect(() => {
            const script = document.createElement("script");
            if (!$(`script[src='${resourceUrl}']`).length) {
                script.src = resourceUrl;
                script.async = true;
                script.onload = () => resolve();
                document.body.appendChild(script);
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
