import * as React from "react";
import { Content, PopUpAction } from "./UIUtil.interface";
import { Button, Omit } from "react-bootstrap";

/**
 * ActionsOverlay component that displays a title, content, and a set of actions as buttons.
 *
 * @param {Object} props - The props for the ActionsOverlay component.
 * @param {Content} props.title - The title to be displayed in the overlay.
 * @param {Content} props.content - The content to be displayed in the overlay.
 * @param {Function} props.hide - The function to hide the overlay.
 * @param {Array<Omit<PopUpAction, "confirm">>} props.actions - The actions to be displayed as buttons.
 * @returns {JSX.Element} The ActionsOverlay component.
 */
export const ActionsOverlay: React.FC<{
    title: Content;
    content: Content;
    hide: () => void;
    actions: Omit<PopUpAction, "confirm">[];
}> = ({ title, content, actions, hide }) => (
    <div style={{ minWidth: 200 }}>
        <div
            style={{
                fontWeight: "bold",
                fontSize: 18,
                paddingLeft: 5,
            }}>
            {title}
        </div>
        <hr style={{ margin: 5 }} />
        <div>
            {typeof content == "string" ? (
                <h4 className="text-center" style={{ margin: 10 }}>
                    {content}
                </h4>
            ) : (
                content
            )}
        </div>
        <hr style={{ margin: 5 }} />
        <div style={{ textAlign: "right" }}>
            {actions.map((action, index) => (
                <Button
                    key={index}
                    bsClass={`btn btn-${action.type} btn-sm`}
                    style={{ marginRight: 10 }}
                    onClick={() => {
                        action.onClick?.();
                        action.closeOnClick && hide();
                    }}>
                    {action.content}
                </Button>
            ))}
        </div>
    </div>
);
