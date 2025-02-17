import * as React from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import { PopUpInstance, PopUpOptions } from "./UIUtil.interface";
import "../styles/modal.css";
import { classSet } from "../helpers/classSet";
import { ActionsOverlay } from "./ActionsOverlay";

export type ModalProps = {
    id: string;
    instance: PopUpInstance;
    config: {
        styles?: {
            [selector: string]: React.CSSProperties;
        };
        defaultModalStyles?: boolean;
        setBackdropHeight?: boolean;
        centered?: boolean;
        onOpen?: (modal: Pick<PopUpOptions, "title" | "trackingId">) => void;
        onClose?: (modal: Pick<PopUpOptions, "title" | "trackingId">) => void;
    };
};

const Modal: React.FC<ModalProps> = ({
    id,
    instance: {
        handleClose,
        toggleOverlay,
        shown,
        overlay,
        options: {
            content,
            footerContent,
            cssClass = "",
            closeBtn,
            title,
            width,
            onClose,
            titleCloseBtn = true,
            centered,
            trackingId,
            actions = [],
        },
    },
    config: {
        defaultModalStyles = false,
        styles = {},
        setBackdropHeight = true,
        centered: globalCentered,
        onOpen,
        onClose: globalOnClose,
    },
}) => {
    const isCentered = centered ?? globalCentered;

    const applyStyles = React.useCallback(() => {
        document.querySelectorAll(".modal-dialog").forEach((el: HTMLDivElement) => {
            el.style.width = typeof width == "number" ? `${width}px` : width;
        });
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
    }, [width, styles, setBackdropHeight]);

    React.useEffect(() => {
        if (shown) {
            applyStyles();
            onOpen?.({ title, trackingId });
        } else {
            globalOnClose?.({ title, trackingId });
        }
    }, [shown, width, defaultModalStyles]);

    const onHide = () => {
        handleClose(id, false, true);
        onClose && onClose();
    };

    const contentToRender =
        typeof content == "string" ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content;
    const showFooter = closeBtn || footerContent || !!actions?.length;
    const modalCssClass = classSet({
        "dry-ux-modal": true,
        centered: isCentered,
        [cssClass]: true,
        "default-styles": defaultModalStyles,
    });

    const actionsToRender = React.useMemo(() => {
        const _actions = [...(actions || [])];
        if (closeBtn) {
            _actions.push({ content: "Close", type: "danger", onClick: onHide });
        }
        return _actions.map(({ content, type = "success", closeOnClick, onClick, confirm }, index) => (
            <Button
                bsClass={`btn btn-${type} mright`}
                onClick={() => {
                    const triggerClick = () => {
                        onClick?.();
                        closeOnClick && onHide();
                    };
                    if (!!confirm) {
                        toggleOverlay(
                            id,
                            <ActionsOverlay
                                title={"Confirm"}
                                content={confirm}
                                hide={() => toggleOverlay(id)}
                                actions={[
                                    { content: "Yes", type: "success", onClick: triggerClick, closeOnClick: true },
                                    { content: "No", type: "danger", closeOnClick: true },
                                ]}
                            />,
                        );
                    } else {
                        triggerClick();
                    }
                }}
            >
                {content}
            </Button>
        ));
    }, [actions, toggleOverlay, onHide, closeBtn]);

    return (
        <BootstrapModal
            onHide={onHide}
            show={shown}
            animation
            autoFocus
            keyboard={false}
            className={modalCssClass}
            backdropStyle={{ zIndex: 1040, opacity: 0.5 }}
            backdrop={"static"}
        >
            {overlay && (
                <div className={"dry-ux-overlay"}>
                    <div className={"dry-ux-overlay-content"}>{overlay}</div>
                </div>
            )}
            {!!title && (
                <BootstrapModal.Header closeButton={titleCloseBtn} onHide={onHide}>
                    <BootstrapModal.Title>{title}</BootstrapModal.Title>
                </BootstrapModal.Header>
            )}
            <BootstrapModal.Body>{contentToRender}</BootstrapModal.Body>
            {showFooter && (
                <BootstrapModal.Footer>
                    {footerContent}
                    {actionsToRender}
                </BootstrapModal.Footer>
            )}
        </BootstrapModal>
    );
};

export default Modal;
