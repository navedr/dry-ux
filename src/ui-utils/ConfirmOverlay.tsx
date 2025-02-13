import * as React from "react";
import { Content } from "./UIUtil.interface";
import { Button } from "react-bootstrap";

export const ConfirmOverlay: React.FC<{ content: Content; onYes: () => void; onNo: () => void }> = ({
    content,
    onYes,
    onNo,
}) => {
    return (
        <div style={{ minWidth: 200 }}>
            <div
                style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingLeft: 5,
                }}
            >
                Confirm
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
                <Button bsClass={"btn btn-success"} style={{ marginRight: 10 }} onClick={onYes}>
                    Yes
                </Button>
                <Button bsClass={"btn btn-danger"} onClick={onNo}>
                    No
                </Button>
            </div>
        </div>
    );
};
