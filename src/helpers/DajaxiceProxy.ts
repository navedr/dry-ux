import { fnWithAuthCheck } from "./utilities";

export type DajaxiceFnArgs<T> = {
    args?: T;
    skipAuthCheck?: boolean;
};

export type DajaxiceFn<T> = (args?: DajaxiceFnArgs<T>) => Promise<any>;

export const DajaxiceProxy = <TModule>({
    authCheckUrl,
    authRedirectUrl,
    modules,
    skipAuthCheck: skipAuthCheckGlobally = false,
}: {
    modules: TModule;
    authCheckUrl: string;
    authRedirectUrl: string;
    skipAuthCheck?: boolean;
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
                                    if (skipAuthCheck || skipAuthCheckGlobally) {
                                        fn();
                                    } else {
                                        fnWithAuthCheck(fn, authCheckUrl, authRedirectUrl).catch(reject);
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
