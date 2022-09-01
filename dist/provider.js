import * as React from "react";
import { UIUtilProvider } from "./ui-utils/UIUtilProvider";
import { UIUtilRenderer } from "./ui-utils/UIUtilRenderer";
export const DryUXProvider = React.memo(({ children }) => (React.createElement(UIUtilProvider, null,
    children,
    React.createElement(UIUtilRenderer, null))));
//# sourceMappingURL=provider.js.map