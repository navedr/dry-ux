import * as React from "react";
import { useDimensions, useDryUxContext } from "../../../src";
import ModalSection from "./ModalSection";
import LoaderSection from "./LoaderSection";
import CustomLoaderSection from "./CustomLoaderSection";
import DajaxiceSection from "./DajaxiceSection";
import DomSection from "./DomSection";
import SearchParamsSection from "./SearchParamsSection";
import CurrencyInputSection from "./CurrencyInputSection";

const Content = React.memo(() => {
    const { modal, loader, customLoader, viewport } = useDryUxContext();
    const { width, height } = useDimensions();

    return (
        <div>
            <div className={"content-title"}>Components</div>
            <ModalSection modal={modal} />
            <LoaderSection loader={loader} />
            <CustomLoaderSection customLoader={customLoader} />
            <DajaxiceSection />
            <div className={"content-title"} style={{ marginTop: 24 }}>
                Utilities
            </div>
            <DomSection viewport={viewport} width={width} height={height} />
            <SearchParamsSection />
            <CurrencyInputSection />
        </div>
    );
});

export default Content;
