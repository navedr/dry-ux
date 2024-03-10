import { DajaxiceFn, IDajaxiceProxy, MethodArgs } from "./Proxy.interface";
import { DajaxiceCall } from "./DajaxiceCall";

/**
 * This function is used to create a type safe proxy for the Dajaxice functions.
 * @returns A type safe proxy for calling Dajaxice functions.
 * @param config
 */
export const DajaxiceProxy = <TModule>(config: IDajaxiceProxy<TModule>): TModule =>
    new Proxy(config.modules as any, {
        get(target, module: string) {
            return new Proxy(
                {},
                {
                    get(target, method: string): DajaxiceFn {
                        return <TReturn>(methodArgs: MethodArgs = {}): Promise<TReturn> =>
                            new DajaxiceCall<TModule, TReturn>(module, method, config, methodArgs).execute();
                    },
                },
            );
        },
    });
