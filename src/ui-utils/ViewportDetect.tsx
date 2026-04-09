import * as React from "react";

/**
 * Enum representing different viewport sizes.
 */
export enum Viewport {
    /** Extra small viewport size. (phones with smaller display) */
    XS = "xs",
    /** Small viewport size. (phones) */
    SM = "sm",
    /** Medium viewport size. (tablets) */
    MD = "md",
    /** Large viewport size. (desktops) */
    LG = "lg",
}
/**
 * Class representing the current viewport.
 */
export class CurrentViewport {
    /**
     * Creates an instance of CurrentViewport.
     * @param {Viewport} _current - The current viewport size.
     */
    constructor(private _current: Viewport) {}

    /**
     * Checks if the current viewport is extra small.
     * @returns {boolean} True if the current viewport is extra small, otherwise false.
     */
    get isXS() {
        return this._current === Viewport.XS;
    }

    /**
     * Checks if the current viewport is small.
     * @returns {boolean} True if the current viewport is small, otherwise false.
     */
    get isSM() {
        return this._current === Viewport.SM;
    }

    /**
     * Checks if the current viewport is medium.
     * @returns {boolean} True if the current viewport is medium, otherwise false.
     */
    get isMD() {
        return this._current === Viewport.MD;
    }

    /**
     * Checks if the current viewport is large.
     * @returns {boolean} True if the current viewport is large, otherwise false.
     */
    get isLG() {
        return this._current === Viewport.LG;
    }

    /**
     * Gets the current viewport size.
     * @returns {Viewport} The current viewport size.
     */
    get current() {
        return this._current;
    }
}

const breakpoints: { viewport: Viewport; query: string }[] = [
    { viewport: Viewport.XS, query: "(max-width: 767px)" },
    { viewport: Viewport.SM, query: "(min-width: 768px) and (max-width: 991px)" },
    { viewport: Viewport.MD, query: "(min-width: 992px) and (max-width: 1199px)" },
    { viewport: Viewport.LG, query: "(min-width: 1200px)" },
];

/**
 * Component that detects the current viewport using matchMedia and triggers a callback on change.
 * @param {Object} props - The component props.
 * @param {function(CurrentViewport): void} props.onChange - Callback function to handle viewport change.
 * @returns {null} This component renders nothing.
 */
export const ViewportDetect: React.FC<{ onChange: (current: CurrentViewport) => void }> = React.memo(({ onChange }) => {
    React.useEffect(() => {
        const listeners: { mql: MediaQueryList; handler: (e: MediaQueryListEvent | MediaQueryList) => void }[] = [];

        breakpoints.forEach(({ viewport, query }) => {
            const mql = window.matchMedia(query);
            const handler = (e: MediaQueryListEvent | MediaQueryList) => {
                if (e.matches) {
                    onChange(new CurrentViewport(viewport));
                }
            };

            // Check initial state
            handler(mql);

            // Listen for changes
            mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
            listeners.push({ mql, handler });
        });

        return () => {
            listeners.forEach(({ mql, handler }) => {
                mql.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
            });
        };
    }, [onChange]);

    return null;
});
