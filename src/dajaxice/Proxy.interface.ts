export type Args<T = void> = {
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

export type MethodArgs = Partial<Args<any>>;

export interface IDajaxiceProxy<TModule> {
    modules: TModule;
    authCheck?: {
        url: string;
        redirectUrl: string;
    };
    onError?: (error: any, method: string, args: any) => void;
    loader?: boolean;
}
