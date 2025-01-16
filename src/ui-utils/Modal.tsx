import * as React from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import { PopUpOptions } from "./UIUtil.interface";

export interface IModalProps {
    options: PopUpOptions;
    handleClose: () => void;
    shown: boolean;
    config: {
        styles?: {
            [selector: string]: React.CSSProperties;
        };
        defaultModalStyles?: boolean;
        setBackdropHeight?: boolean;
    };
}

const Modal: React.FC<
    IModalProps & {
        handleClose: () => void;
    }
> = React.memo(
    ({
        handleClose,
        shown,
        options: { content, footerContent, cssClass, closeBtn, title, width, onClose, titleCloseBtn = true },
        config: { defaultModalStyles = false, styles = {}, setBackdropHeight = true },
    }) => {
        const applyStyles = React.useCallback(() => {
            document.querySelectorAll(".modal-dialog").forEach((el: HTMLDivElement) => {
                el.style.width = typeof width == "number" ? `${width}px` : width;
                if (defaultModalStyles) {
                    el.style.maxWidth = "95%";
                    el.style.marginTop = "100px";
                    el.querySelectorAll(".modal-header").forEach((el: HTMLDivElement) => (el.style.display = "block"));
                    el.querySelectorAll(".modal-title").forEach((el: HTMLDivElement) => (el.style.marginTop = "0"));
                }
            });
            document.querySelectorAll("[role=dialog]").forEach((el: HTMLDivElement) => (el.style.opacity = "1"));
            if (setBackdropHeight) {
                document
                    .querySelectorAll(".modal-backdrop")
                    .forEach((el: HTMLDivElement) => (el.style.height = `${document.body.scrollHeight}px`));
            }
            Object.keys(styles).forEach(selector => {
                document.querySelectorAll(selector).forEach((el: HTMLDivElement) => {
                    Object.keys(styles[selector]).forEach(style => {
                        el.style[style] = styles[selector][style];
                    });
                });
            });
        }, [width, defaultModalStyles]);

        React.useEffect(() => {
            if (shown) {
                applyStyles();
            }
        }, [shown, width, defaultModalStyles]);

        const hide = () => {
            handleClose();
            onClose && onClose();
        };

        const contentToRender =
            typeof content == "string" ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content;
        const showFooter = closeBtn || footerContent;

        return (
            <BootstrapModal
                onHide={hide}
                show={shown}
                animation
                autoFocus
                keyboard={false}
                className={cssClass}
                backdropStyle={{ zIndex: 1040, opacity: 0.5 }}
                backdrop={"static"}
            >
                {!!title && (
                    <BootstrapModal.Header closeButton={titleCloseBtn} onHide={hide}>
                        <BootstrapModal.Title>{title}</BootstrapModal.Title>
                    </BootstrapModal.Header>
                )}
                <BootstrapModal.Body>{contentToRender}</BootstrapModal.Body>
                {showFooter && (
                    <BootstrapModal.Footer>
                        {footerContent}
                        {closeBtn && (
                            <Button bsClass={"btn btn-danger"} onClick={hide}>
                                Close
                            </Button>
                        )}
                    </BootstrapModal.Footer>
                )}
            </BootstrapModal>
        );
    },
);

export default Modal;
