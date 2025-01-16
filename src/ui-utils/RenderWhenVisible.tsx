import * as React from "react";
import { useIsVisible } from "../helpers/utilities";

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
