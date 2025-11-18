import * as React from "react";
import Section from "./Section";
import { useSearchParams } from "../../../src";

const SearchParamsSectionInner: React.FC<{ index: number }> = ({ index }) => {
    const { params, setParam, clearParams } = useSearchParams<{
        time: number;
    }>();
    return (
        <Section title={`Search Params ${index}`}>
            Params: {params.time || "Not set"}
            <br />
            <button className={"btn btn-primary"} onClick={() => setParam("time", Date.now())}>
                Set time param to current time
            </button>
            <button className={"btn btn-secondary mleft-5"} onClick={() => clearParams("time")}>
                Clear time param
            </button>
        </Section>
    );
};

const SearchParamsSection = () => (
    <>
        <SearchParamsSectionInner index={1} />
        <SearchParamsSectionInner index={2} />
    </>
);

export default SearchParamsSection;
