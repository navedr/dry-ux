import * as React from "react";
import "../styles/viewport.css";
import { useIsVisible } from "../helpers/utilities";

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

/**
 * Component that detects the visibility of a viewport element.
 * @param {Object} props - The component props.
 * @param {Viewport} props.viewport - The viewport size.
 * @param {function(boolean): void} props.onVisibilityChange - Callback function to handle visibility change.
 * @returns {JSX.Element} The detection element.
 */
const DetectionElement = ({
    viewport,
    onVisibilityChange,
}: {
    viewport: Viewport;
    onVisibilityChange: (isVisible: boolean) => void;
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);

    React.useEffect(() => {
        onVisibilityChange(isVisible);
    }, [isVisible]);

    return <div ref={ref} className={`dry-visible-${viewport}`}></div>;
};

/**
 * Component that detects the current viewport and triggers a callback on change.
 * @param {Object} props - The component props.
 * @param {function(CurrentViewport): void} props.onChange - Callback function to handle viewport change.
 * @returns {JSX.Element} The viewport detection component.
 */
export const ViewportDetect: React.FC<{ onChange: (current: CurrentViewport) => void }> = React.memo(({ onChange }) => {
    const onVisibilityChange = (viewport: Viewport, isVisible: boolean) => {
        if (isVisible) {
            onChange(new CurrentViewport(viewport));
        }
    };

    return (
        <>
            {Object.keys(Viewport)
                .map(v => Viewport[v])
                .map((viewport: Viewport) => (
                    <DetectionElement
                        key={viewport}
                        viewport={viewport}
                        onVisibilityChange={isVisible => onVisibilityChange(viewport, isVisible)}
                    />
                ))}
        </>
    );
});
