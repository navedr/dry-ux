import * as React from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import { PopUpInstance, PopUpOptions } from "./UIUtil.interface";
import "../styles/modal.css";
import { classSet } from "../helpers/classSet";
import { ActionsOverlay } from "./ActionsOverlay";

/**
 * Props for the Modal component.
 */
export type ModalProps = {
    /**
     * The id of the modal.
     */
    id: string;
    /**
     * The instance of the PopUp.
     */
    instance: PopUpInstance;
    /**
     * Configuration options for the modal.
     */
    config: {
        /**
         * Custom styles for the modal.
         */
        styles?: {
            [selector: string]: React.CSSProperties;
        };
        /**
         * If true, applies default modal styles.
         */
        defaultModalStyles?: boolean;
        /**
         * If true, centers the modal vertically.
         */
        centered?: boolean;
        /**
         * Callback function to be called when the modal is opened.
         */
        onOpen?: (modal: Pick<PopUpOptions, "title" | "trackingId">) => void;
        /**
         * Callback function to be called when the modal is closed.
         */
        onClose?: (modal: Pick<PopUpOptions, "title" | "trackingId">) => void;
    };
};

/**
 * Modal component that renders a Bootstrap modal with custom configurations.
 *
 * @param {ModalProps} props - The props for the Modal component.
 * @returns {JSX.Element} The Modal component.
 */
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
    config: { defaultModalStyles = false, styles = {}, centered: globalCentered, onOpen, onClose: globalOnClose },
}) => {
    const isCentered = centered ?? globalCentered;

    const applyStyles = React.useCallback(() => {
        document.querySelectorAll(".modal-dialog").forEach((el: HTMLDivElement) => {
            el.style.width = typeof width == "number" ? `${width}px` : width;
        });
        Object.keys(styles).forEach(selector => {
            document.querySelectorAll(selector).forEach((el: HTMLDivElement) => {
                Object.keys(styles[selector]).forEach(style => {
                    el.style[style] = styles[selector][style];
                });
            });
        });
    }, [width, styles]);

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
                }}>
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
            backdropClassName={"dry-ux-modal-backdrop"}
            backdrop={"static"}>
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
