import * as React from "react";
import { useIsVisible } from "../helpers/utilities";

export const RenderWhenVisible: React.FC<{ content: string | JSX.Element }> = React.memo(({ content }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const ref = React.useRef(null);
    const isVisible = useIsVisible(ref);

    React.useEffect(() => {
        if (!isLoaded && isVisible) {
            setIsLoaded(true);
        }
    }, [isVisible]);

    return <div ref={ref}>{isLoaded && content}</div>;
});
