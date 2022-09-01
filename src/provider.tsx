import * as React from "react";
import { UIUtilProvider } from "./ui-utils/UIUtilProvider";
import { UIUtilRenderer } from "./ui-utils/UIUtilRenderer";

export const DryUXProvider = React.memo(({ children }) => (
    <UIUtilProvider>
        {children}
        <UIUtilRenderer />
    </UIUtilProvider>
));
