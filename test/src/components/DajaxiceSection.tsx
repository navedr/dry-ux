import * as React from "react";
import Section from "./Section";
import { DajaxiceFn, DajaxiceProxy } from "../../../src";

export const modules: DajaxiceModules = {};

export type DajaxiceModules = {
    employee?: {
        getDetails: DajaxiceFn<{ id: number }>;
    };
    organization?: {
        setName: DajaxiceFn<{ name: string }>;
        getName: DajaxiceFn;
        getCity: DajaxiceFn<void>;
    };
};

const Api = DajaxiceProxy<DajaxiceModules>({
    modules,
});
const DajaxiceSection = () => {
    React.useEffect(() => {
        window["Dajaxice"] = new Proxy(
            {},
            {
                get(target, module: string) {
                    return new Proxy(
                        {},
                        {
                            get(target, method: string) {
                                return (
                                    onSuccess: (result) => void,
                                    args: any,
                                    options: { error_callback: (error) => void },
                                ) =>
                                    new Promise(resolve => {
                                        onSuccess({ module, method, args });
                                        resolve({});
                                    });
                            },
                        },
                    );
                },
            },
        );
    }, []);

    return (
        <Section>
            <h3>Dajaxice</h3>
            <button
                className={"btn btn-primary"}
                onClick={() =>
                    Api.employee
                        .getDetails<{ name: string; id: number }>({ args: { id: 1 }, loader: true })
                        .then(res => {
                            console.log(res);
                        })
                }>
                Success call
            </button>
        </Section>
    );
};

export default DajaxiceSection;
