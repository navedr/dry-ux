import { fnWithAuthCheck } from "./utilities";
import { Loader } from "../ui-utils/Loader";

type Args<T = void> = {
    args: T;
    skip?: {
        authCheck?: boolean;
        errorHandler?: boolean;
        loader?: boolean;
    };
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
    onError,
    loader: showLoader,
}: {
    modules: TModule;
    authCheck?: {
        url: string;
        redirectUrl: string;
    };
    onError?: (error: any) => void;
    loader?: boolean;
}): TModule =>
    new Proxy(modules as any, {
        get(target, module: string) {
            return new Proxy(
                {},
                {
                    get(target, method: string): DajaxiceFn {
                        return function <T>({ args, skip }: Partial<Args<any>> = {}): Promise<T> {
                            return new Promise((resolve, reject) => {
                                const methodName = window["Dajaxice"][module][method];
                                const loader = showLoader && !skip?.loader ? new Loader() : undefined;
                                const hideLoader = () => {
                                    try {
                                        loader?.hide();
                                    } catch (e) {}
                                };
                                if (methodName) {
                                    const handleError = (e: any) => {
                                        try {
                                            !skip?.errorHandler && onError?.(e);
                                        } catch (e) {}
                                        hideLoader();
                                        reject(e);
                                    };
                                    const handleSuccess = (result: any) => {
                                        hideLoader();
                                        resolve(result);
                                    };
                                    const fn = () =>
                                        methodName(handleSuccess, args, {
                                            error_callback: handleError,
                                        });
                                    try {
                                        loader?.show();
                                    } catch (e) {}
                                    if (skip?.authCheck || !authCheck) {
                                        fn();
                                    } else {
                                        fnWithAuthCheck(fn, authCheck.url, authCheck.redirectUrl).catch(handleError);
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
