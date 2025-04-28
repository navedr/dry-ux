/**
 * Represents the arguments for a Dajaxice function.
 * @template T The type of the arguments.
 */
export type Args<T = void> = {
    /**
     * The arguments for the Dajaxice function.
     */
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

/**
 * Represents the argument type for a Dajaxice function.
 * @template T The type of the arguments.
 */
type ArgType<T> = T extends void ? Omit<Args, "args"> | void : Args<T>;

/**
 * Represents a Dajaxice function.
 * @template TArgs The type of the arguments.
 * @template TResult The type of the result.
 */
export declare type DajaxiceFn<TArgs = void> = <TResult = any>(args: ArgType<TArgs>) => Promise<TResult>;

/**
 * Represents the method arguments for a Dajaxice function.
 */
export type MethodArgs = Partial<Args<any>>;

/**
 * Represents a Dajaxice proxy.
 * @template TModule The type of the module.
 */
export interface IDajaxiceProxy<TModule> {
    /**
     * The modules of the Dajaxice proxy.
     */
    modules: TModule;
    /**
     * The authentication check configuration.
     */
    authCheck?: {
        /**
         * The URL to check for authentication.
         */
        url: string;
        /**
         * The URL to redirect to if not authenticated.
         */
        redirectUrl: string;
        /**
         * The method to call if the authentication check fails.
         */
        onError?: (error: any) => void;
    };
    /**
     * The error handler function.
     * @param error The error object.
     * @param method The method name.
     * @param args The method arguments.
     */
    onError?: (error: any, method: string, args: any) => void;
    /**
     * If true, it will show a loader when a Dajaxice function is called. Defaults to false.
     */
    loader?: boolean;
}
