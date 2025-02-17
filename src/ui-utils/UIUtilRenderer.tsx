import * as React from "react";
import { useUIUtilContext } from "./UIUtilProvider";
import Modal, { ModalProps } from "./Modal";

export type UIUtilRendererProps = {
    modalConfig?: ModalProps["config"];
};

export const UIUtilRenderer: React.FC<UIUtilRendererProps> = React.memo(({ modalConfig = {} }) => {
    const {
        modal: { instances },
    } = useUIUtilContext();

    return (
        <>
            {Object.keys(instances).map(id => (
                <Modal key={id} id={id} instance={instances[id]} config={modalConfig} />
            ))}
        </>
    );
});
