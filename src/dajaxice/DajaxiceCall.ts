import { Deferred, fnWithAuthCheck, StorageUtils, toHashCode } from "../helpers/utilities";
import { Loader } from "../ui-utils/Loader";
import { IDajaxiceProxy, MethodArgs } from "./Proxy.interface";

export class DajaxiceCall<TModule, TReturn> {
    private readonly loader?: Loader;
    private readonly deferred: Deferred<TReturn> = new Deferred();
    private readonly cacheId: string;
    private readonly defaultCacheDuration = 15;

    constructor(
        readonly module: string,
        readonly method: string,
        readonly config: IDajaxiceProxy<TModule>,
        readonly methodArgs: MethodArgs,
    ) {
        const { skip, loader: showLoader } = this.methodArgs;
        this.loader = (this.config.loader || showLoader) && !skip?.loader ? Loader.getInstance() : undefined;
        this.cacheId =
            "dajaxice-cache-" + toHashCode(JSON.stringify({ api: `${module}.${method}`, args: this.methodArgs.args }));
    }

    public execute() {
        const { skip } = this.methodArgs;
        const { authCheck } = this.config;
        const methodName = window["Dajaxice"][this.module][this.method];
        if (methodName) {
            this.showLoader();
            if (skip?.authCheck || !authCheck) {
                this.callApi();
            } else {
                fnWithAuthCheck(this.callApi, authCheck.url, authCheck.redirectUrl).catch(
                    authCheck.onError || this.handleError,
                );
            }
        } else {
            this.deferred.reject(new Error(`The method ${this.method} does not exist in the module ${this.module}`));
        }
        return this.deferred.promise;
    }

    private hideLoader = () => {
        try {
            this.loader?.hide();
        } catch (e) {}
    };

    private showLoader = () => {
        try {
            this.loader?.show();
        } catch (e) {}
    };

    private handleError = (e: any) => {
        try {
            !this.methodArgs.skip?.errorHandler && this.config.onError?.(e, this.method, this.methodArgs);
        } catch (e) {}
        this.hideLoader();
        this.deferred.reject(e);
    };

    private handleApiCallSuccess = (result: any) => {
        this.handleResult(result);
        const { cache = false } = this.methodArgs;
        if (cache) {
            this.storeCache(result);
        }
    };

    private handleResult = (result: any) => {
        this.hideLoader();
        this.deferred.resolve(result);
    };

    private callApi = () => {
        const api = window["Dajaxice"][this.module][this.method];
        const { args, cache = false } = this.methodArgs;
        if (cache) {
            const { exists, data } = this.checkCache();
            if (exists) {
                return this.handleResult(data);
            }
        }
        return api(this.handleApiCallSuccess, args, {
            error_callback: this.handleError,
        });
    };

    private checkCache = () => {
        let exists = false,
            data = null;
        try {
            if (StorageUtils.isStorageAvailable() && sessionStorage.getItem(this.cacheId)) {
                const { cacheDuration = this.defaultCacheDuration } = this.methodArgs;
                const cacheData = JSON.parse(sessionStorage.getItem(this.cacheId));
                const timeDiff = Math.floor(
                    (new Date().getTime() - new Date(cacheData.storeTime).getTime()) / 1000 / 60,
                );
                if (timeDiff <= cacheDuration) {
                    exists = true;
                    data = cacheData.data;
                }
            }
        } catch (e) {}
        return { exists, data };
    };

    private storeCache = (data: any) => {
        try {
            if (StorageUtils.isStorageAvailable()) {
                const cacheData = JSON.stringify({ storeTime: new Date(), data: data });
                sessionStorage.setItem(this.cacheId, cacheData);
            }
        } catch (e) {}
    };
}
