import { DajaxiceFn, DajaxiceProxy } from "./DajaxiceProxy";

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

Api.employee.getDetails<{ name: string; id: number }>({ args: { id: 1 } }).then(res => {
    console.log(res.name, res.id);
});

Api.organization.setName({ args: { name: "test" } }).then(res => {
    console.log(res);
});

Api.organization.getName<string>().then(res => {
    console.log(res);
});

Api.organization.getCity<string>().then(res => {
    console.log(res);
});
