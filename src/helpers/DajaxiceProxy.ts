import { fnWithAuthCheck, StorageUtils, toHashCode } from "./utilities";
import { Loader } from "../ui-utils/Loader";

type Args<T = void> = {
    args: T;
    /**
     * If true, it will show a loader when a Dajaxice function is called. Defaults to false.
     */
    loader?: boolean;
    /**
     * If true, it will cache the result of the Dajaxice function. Defaults to false.
     */
    cache?: boolean;
    /**
     * The duration in minutes to cache the result of the Dajaxice function. Defaults to 15 minutes.
     */
    cacheDuration?: number;
    skip?: {
        /**
         * If true, it will not check for authentication. Defaults to false.
         */
        authCheck?: boolean;
        /**
         * If true, it will not use global error handler when a Dajaxice function is called. Defaults to false.
         */
        errorHandler?: boolean;
        /**
         * If true, it will not show a loader when a Dajaxice function is called. Defaults to false.
         */
        loader?: boolean;
    };
};
type ArgType<T> = T extends void ? Omit<Args, "args"> | void : Args<T>;
export declare type DajaxiceFn<TArgs = void> = <TResult = any>(args: ArgType<TArgs>) => Promise<TResult>;

/**
 * This function is used to create a type safe proxy for the Dajaxice functions.
 * @param modules: The modules object from the Dajaxice generated file.
 * @param authCheck The auth check object. If undefined, it will not check for authentication.
 * @param onError: Default handler for error
 * @param loader: If true, it will show a loader when a Dajaxice function is called.
 * @returns A type safe proxy for calling Dajaxice functions.
 */
export const DajaxiceProxy = <TModule>({
    modules,
    authCheck,
    onError,
    loader: showLoaderGlobal,
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
                        return function <T>({
                            args,
                            skip,
                            loader: showLoader,
                            cache = false,
                            cacheDuration = 15,
                        }: Partial<Args<any>> = {}): Promise<T> {
                            return new Promise((resolve, reject) => {
                                const methodName = window["Dajaxice"][module][method];
                                const api = `${module}.${method}`;
                                const loader =
                                    (showLoaderGlobal || showLoader) && !skip?.loader
                                        ? Loader.getInstance()
                                        : undefined;
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
                                        if (cache) {
                                            storeCache(api, args, result);
                                        }
                                        resolve(result);
                                    };
                                    const fn = () => {
                                        if (cache) {
                                            const cached = checkCache(api, args, cacheDuration);
                                            if (cached.exists) {
                                                handleSuccess(cached.data);
                                                return;
                                            }
                                        }
                                        return methodName(handleSuccess, args, {
                                            error_callback: handleError,
                                        });
                                    };
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

const getCacheId = (api: string, args: any) => {
    return "dajaxice-cache-" + toHashCode(JSON.stringify({ api, args }));
};

const checkCache = (api: string, args: any, cacheDuration: number) => {
    const cacheId = getCacheId(api, args);
    let exists = false,
        data = null;
    if (StorageUtils.isStorageAvailable() && sessionStorage.getItem(cacheId)) {
        const cacheData = JSON.parse(sessionStorage.getItem(cacheId));
        const timeDiff = Math.floor((new Date().getTime() - new Date(cacheData.storeTime).getTime()) / 1000 / 60);
        if (timeDiff <= cacheDuration) {
            exists = true;
            data = cacheData.data;
        }
    }
    return { exists, data };
};

const storeCache = (api: string, args: any, data: any) => {
    const cacheId = getCacheId(api, args);
    if (StorageUtils.isStorageAvailable()) {
        try {
            const cacheData = JSON.stringify({ storeTime: new Date(), data: data });
            sessionStorage.setItem(cacheId, cacheData);
        } catch (e) {}
    }
};
