import * as React from "react";

export const preventDefault = (handler?: (event: any) => void) => {
    return (event: any) => {
        event.preventDefault();
        handler && handler(event);
    };
};

export const importScript = (resourceUrl: string, singleton: boolean = true) => {
    return new Promise<void>(resolve => {
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
};

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

export const useCountdown = (seconds: number, onExpiry: () => void) => {
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
