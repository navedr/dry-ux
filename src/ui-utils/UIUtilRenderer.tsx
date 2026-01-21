import * as React from "react";
import { useUIUtilContext } from "./UIUtilProvider";
import Modal, { ModalProps } from "./Modal";

/**
 * Props for the UIUtilRenderer component.
 */
export type UIUtilRendererProps = {
    /**
     * Configuration for the modal.
     */
    modalConfig?: ModalProps["config"];
};

/**
 * UIUtilRenderer component that renders modals based on the UIUtil context.
 *
 * @param {UIUtilRendererProps} props - The props for the UIUtilRenderer component.
 * @returns {JSX.Element} The UIUtilRenderer component.
 */
export const UIUtilRenderer: React.FC<UIUtilRendererProps & { id?: string; debug?: boolean }> = React.memo(
    ({ modalConfig = {}, id: providerId, debug }) => {
        const {
            modal: { instances },
        } = useUIUtilContext();
        debug && console.log(`[UIUtilRenderer${providerId ? `:${providerId}` : ""}] Rendering modals`, instances);
        return (
            <>
                {Object.keys(instances).map(id => (
                    <Modal
                        key={id}
                        id={id}
                        instance={instances[id]}
                        config={modalConfig}
                        providerId={providerId}
                        debug={debug}
                    />
                ))}
            </>
        );
    },
);
