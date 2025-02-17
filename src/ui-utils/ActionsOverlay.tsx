import * as React from "react";
import { Content, PopUpAction } from "./UIUtil.interface";
import { Button, Omit } from "react-bootstrap";

export const ActionsOverlay: React.FC<{
    title: Content;
    content: Content;
    hide: () => void;
    actions: Omit<PopUpAction, "confirm">[];
}> = ({ title, content, actions, hide }) => {
    return (
        <div style={{ minWidth: 200 }}>
            <div
                style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingLeft: 5,
                }}
            >
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
                        }}
                    >
                        {action.content}
                    </Button>
                ))}
            </div>
        </div>
    );
};
