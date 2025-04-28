import * as React from "react";
import { useDimensions, useDryUxContext } from "../../../src";
import ModalSection from "./ModalSection";
import LoaderSection from "./LoaderSection";
import CustomLoaderSection from "./CustomLoaderSection";
import DajaxiceSection from "./DajaxiceSection";
import DomSection from "./DomSection";

const Content = React.memo(() => {
    const { modal, loader, customLoader, prompt, viewport } = useDryUxContext();
    const { width, height } = useDimensions();

    return (
        <div>
            <h2 className={"text-center"}>dry-ux tests</h2>
            <ModalSection modal={modal} />
            <LoaderSection loader={loader} />
            <CustomLoaderSection customLoader={customLoader} />
            <DajaxiceSection />
            <hr />
            <DomSection viewport={viewport} width={width} height={height} />
        </div>
    );
});

export default Content;
