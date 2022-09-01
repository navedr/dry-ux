import * as React from "react";
import { useUIUtilContext } from "./UIUtilProvider";
import Modal from "./Modal";

export const UIUtilRenderer = React.memo(() => {
    const { modal } = useUIUtilContext();
    return (
        <>
            {Object.keys(modal.instances).map(id => {
                const { shown, options, handleClose } = modal.instances[id];
                return (
                    <Modal key={id} shown={shown} options={options} handleClose={() => handleClose(id, false, true)} />
                );
            })}
        </>
    );
});
