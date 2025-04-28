import * as React from "react";
import { useDimensions } from "../../../src";

const Section: React.FC<{
    title: string;
    children?: React.ReactNode;
    buttons?: { label: string; onClick: () => void }[];
}> = React.memo(({ title, children, buttons }) => {
    const ref = React.useRef(null);
    const { width, height } = useDimensions(ref);

    return (
        <section ref={ref}>
            <div className={"pull-right"}>
                {width}x{height}px
            </div>
            {title && <h3 className={"mb0"}>{title}</h3>}
            {buttons && (
                <table className={"table"}>
                    <tbody>
                        {buttons &&
                            Array.from({ length: Math.ceil(buttons.length / 6) }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {buttons.slice(rowIndex * 6, rowIndex * 6 + 6).map((button, index) => (
                                        <td key={index}>
                                            <button className={"btn btn-primary"} onClick={button.onClick}>
                                                {button.label}
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
            {children}
        </section>
    );
});

export default Section;
