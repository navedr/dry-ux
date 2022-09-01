import * as React from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
const Modal = React.memo(({ handleClose, shown, options: { content, cssClass, closeBtn, title, width, onClose, titleCloseBtn = true } }) => {
    React.useEffect(() => {
        if (shown) {
            $(".modal-dialog").css("width", width);
            $(".modal-backdrop").css("height", $(document).height());
        }
    }, [shown, width]);
    const hide = () => {
        handleClose();
        onClose && onClose();
    };
    const contentToRender = typeof content == "string" ? React.createElement("div", { dangerouslySetInnerHTML: { __html: content } }) : content;
    return (React.createElement(BootstrapModal, { onHide: hide, show: shown, animation: true, autoFocus: true, keyboard: false, className: cssClass, backdropStyle: { zIndex: 1040 }, backdrop: "static" },
        !!title && (React.createElement(BootstrapModal.Header, { closeButton: titleCloseBtn, onHide: hide },
            React.createElement(BootstrapModal.Title, null, title))),
        React.createElement(BootstrapModal.Body, null, contentToRender),
        React.createElement(BootstrapModal.Footer, null, closeBtn && (React.createElement(Button, { bsClass: "btn btn-danger", onClick: hide }, "Close")))));
});
export default Modal;
//# sourceMappingURL=Modal.js.map