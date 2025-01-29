import * as React from "react";
import { useIsVisible } from "../helpers/utilities";

/**
 * A React component that renders its children only when they become visible in the viewport.
 * @param children The JSX element to render when visible.
 * @param onLoad An optional callback function to call when the children are loaded.
 * @param minHeight An optional minimum height for the container to ensure visibility.
 * @returns A JSX element that conditionally renders its children based on visibility.
 */
export const RenderWhenVisible: React.FC<{ children: JSX.Element; onLoad?: () => void; minHeight?: number }> =
    React.memo(({ children, minHeight, onLoad }) => {
        const [isLoaded, setIsLoaded] = React.useState(false);
        const ref = React.useRef(null);
        const isVisible = useIsVisible(ref);

        React.useEffect(() => {
            if (!isLoaded && isVisible) {
                setIsLoaded(true);
                onLoad?.();
            }
        }, [isVisible]);

        return (
            <div style={{ minHeight }} ref={ref}>
                {isLoaded && children}
            </div>
        );
    });
