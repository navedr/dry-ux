import * as React from "react";
import { UIUtilProvider } from "./ui-utils/UIUtilProvider";
import { UIUtilRenderer, UIUtilRendererProps } from "./ui-utils/UIUtilRenderer";

/**
 * Props for the DryUXProvider component.
 */
interface IDryUXProviderProps {
    /**
     * Does not render the renderer for this provider. If this is set to true, then the renderer needs to be mounted
     * explicitly.
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
    /**
     * The children elements to be rendered within the provider.
     */
    children: React.ReactNode;
}

/**
 * DryUXProvider component that provides UI utilities and optionally renders a UIUtilRenderer.
 *
 * @param {IDryUXProviderProps} props - The props for the DryUXProvider component.
 * @returns {JSX.Element} The DryUXProvider component.
 */
export const DryUXProvider: React.FC<IDryUXProviderProps> = React.memo(
    ({ children, noRenderer = false, rendererProps, viewportDetect }) => (
        <UIUtilProvider viewportDetect={viewportDetect}>
            {children}
            {!noRenderer && <UIUtilRenderer {...rendererProps} />}
        </UIUtilProvider>
    ),
);
