import { fnWithAuthCheck } from "./utilities";

type DajaxiceFnArgs<T> = {
    args?: T;
    skipAuthCheck?: boolean;
};

export type DajaxiceFn<T> = (args?: DajaxiceFnArgs<T>) => Promise<any>;

/**
 * This function is used to create a type safe proxy for the Dajaxice functions.
 * @param modules: The modules object from the Dajaxice generated file.
 * @param authCheck The auth check object. If undefined, it will not check for authentication.
 * @returns A type safe proxy for calling Dajaxice functions.
 */
export const DajaxiceProxy = <TModule>({
    modules,
    authCheck,
}: {
    modules: TModule;
    authCheck?: {
        url: string;
        redirectUrl: string;
    };
}): TModule =>
    new Proxy(modules as any, {
        get(target, module: string) {
            return new Proxy(
                {},
                {
                    get(target, method: string): DajaxiceFn<any> {
                        return function ({ args, skipAuthCheck }: DajaxiceFnArgs<any> = {}): Promise<any> {
                            return new Promise((resolve, reject) => {
                                const methodName = window["Dajaxice"][module][method];
                                if (methodName) {
                                    const fn = () =>
                                        methodName(resolve, args, {
                                            error_callback: reject,
                                        });
                                    if (skipAuthCheck || !authCheck) {
                                        fn();
                                    } else {
                                        fnWithAuthCheck(fn, authCheck.url, authCheck.redirectUrl).catch(reject);
                                    }
                                } else {
                                    reject(new Error(`The method ${method} does not exist in the module ${module}`));
                                }
                            });
                        };
                    },
                },
            );
        },
    });
