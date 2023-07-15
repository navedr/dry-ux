import { fnWithAuthCheck } from "./utilities";

type Args<T = void> = {
    args: T;
    skipAuthCheck?: boolean;
};
type ArgType<T> = T extends void ? Omit<Args, "args"> | void : Args<T>;
export declare type DajaxiceFn<TArgs = void> = <TResult = any>(args: ArgType<TArgs>) => Promise<TResult>;

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
                    get(target, method: string): DajaxiceFn {
                        return function <T>({ args, skipAuthCheck }: Partial<Args<any>> = {}): Promise<T> {
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
