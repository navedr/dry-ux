import * as React from "react";
import Section from "./Section";
import { useSearchParams } from "../../../src";

const SearchParamsSection = () => {
    const { params, setParam, clearParams } = useSearchParams<{ time: number }>();
    return (
        <Section title={"Search Params"}>
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

export default SearchParamsSection;
