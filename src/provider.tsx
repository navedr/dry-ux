import * as React from "react";
import { UIUtilProvider } from "./ui-utils/UIUtilProvider";
import { UIUtilRenderer } from "./ui-utils/UIUtilRenderer";

export const DryUXProvider: React.FC<{ noRenderer?: boolean }> = React.memo(({ children, noRenderer = false }) => (
    <UIUtilProvider>
        {children}
        {!noRenderer && <UIUtilRenderer />}
    </UIUtilProvider>
));
