import * as React from "react";
import { useUIUtilContext } from "./UIUtilProvider";
import Modal, { IModalProps } from "./Modal";

export type UIUtilRendererProps = {
    modalConfig?: IModalProps["config"];
};

export const UIUtilRenderer: React.FC<UIUtilRendererProps> = React.memo(({ modalConfig = {} }) => {
    const { modal } = useUIUtilContext();
    return (
        <>
            {Object.keys(modal.instances).map(id => {
                const { shown, options, handleClose } = modal.instances[id];
                return (
                    <Modal
                        key={id}
                        shown={shown}
                        options={options}
                        handleClose={() => handleClose(id, false, true)}
                        config={modalConfig}
                    />
                );
            })}
        </>
    );
});
