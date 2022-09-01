import * as React from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import { ModalOptions } from "./uiUtil.interface";

interface IModalProps {
    options: ModalOptions;
    handleClose: () => void;
    shown: boolean;
}

const Modal: React.FC<
    IModalProps & {
        handleClose: () => void;
    }
> = React.memo(
    ({ handleClose, shown, options: { content, cssClass, closeBtn, title, width, onClose, titleCloseBtn = true } }) => {
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

        const contentToRender =
            typeof content == "string" ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content;

        return (
            <BootstrapModal
                onHide={hide}
                show={shown}
                animation
                autoFocus
                keyboard={false}
                className={cssClass}
                backdropStyle={{ zIndex: 1040 }}
                backdrop={"static"}>
                {!!title && (
                    <BootstrapModal.Header closeButton={titleCloseBtn} onHide={hide}>
                        <BootstrapModal.Title>{title}</BootstrapModal.Title>
                    </BootstrapModal.Header>
                )}
                <BootstrapModal.Body>{contentToRender}</BootstrapModal.Body>
                <BootstrapModal.Footer>
                    {closeBtn && (
                        <Button bsClass={"btn btn-danger"} onClick={hide}>
                            Close
                        </Button>
                    )}
                </BootstrapModal.Footer>
            </BootstrapModal>
        );
    },
);

export default Modal;
