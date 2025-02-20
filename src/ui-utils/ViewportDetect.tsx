import * as React from "react";
import "../styles/viewport.css";
import { useIsVisible } from "../helpers/utilities";

export enum Viewport {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
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

export const ViewportDetect: React.FC<{ onChange: (viewport: Viewport) => void }> = React.memo(({ onChange }) => {
    const onVisibilityChange = (viewport: Viewport, isVisible: boolean) => {
        if (isVisible) {
            onChange(viewport);
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
