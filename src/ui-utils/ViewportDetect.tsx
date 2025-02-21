import * as React from "react";
import "../styles/viewport.css";
import { useIsVisible } from "../helpers/utilities";

export enum Viewport {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
}

export class CurrentViewport {
    constructor(private _current: Viewport) {}

    get isXS() {
        return this._current === Viewport.XS;
    }

    get isSM() {
        return this._current === Viewport.SM;
    }

    get isMD() {
        return this._current === Viewport.MD;
    }

    get isLG() {
        return this._current === Viewport.LG;
    }

    get current() {
        return this._current;
    }
}

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
