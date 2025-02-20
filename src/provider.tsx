import * as React from "react";
import { UIUtilProvider } from "./ui-utils/UIUtilProvider";
import { UIUtilRenderer, UIUtilRendererProps } from "./ui-utils/UIUtilRenderer";

interface IDryUXProviderProps {
    /**
     * Does not render the renderer for this provider. If this is set to true, then the renderer needs to be mounted
     * by explicitly.
     */
    noRenderer?: boolean;
    /**
     * Props to pass to the renderer.
     */
    rendererProps?: UIUtilRendererProps;
    /**
     * If true, the viewport detection will be enabled.
     */
    viewportDetect?: boolean;
    children: React.ReactNode;
}

export const DryUXProvider: React.FC<IDryUXProviderProps> = React.memo(
    ({ children, noRenderer = false, rendererProps, viewportDetect }) => (
        <UIUtilProvider viewportDetect={viewportDetect}>
            {children}
            {!noRenderer && <UIUtilRenderer {...rendererProps} />}
        </UIUtilProvider>
    ),
);
