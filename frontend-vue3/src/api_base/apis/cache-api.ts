/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET通用权限管理平台
 * 前后端分离架构，开箱即用，紧随前沿技术。<br/><a href='https://gitee.com/Run2948/Admin.NET/'>https://gitee.com/Run2948/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { XnRestfulResultOfListOfString } from '../models';
import { XnRestfulResultOfString } from '../models';
/**
 * CacheApi - axios parameter creator
 * @export
 */
export const CacheApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取缓存
         * @param {string} [cacheKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysCacheDetailGet: async (cacheKey?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysCache/detail`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (cacheKey !== undefined) {
                localVarQueryParameter['cacheKey'] = cacheKey;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取所有缓存关键字
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysCacheKeyListGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysCache/keyList`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 删除指定关键字缓存
         * @param {string} [key] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysCacheRemoveGet: async (key?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysCache/remove`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CacheApi - functional programming interface
 * @export
 */
export const CacheApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取缓存
         * @param {string} [cacheKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysCacheDetailGet(cacheKey?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfString>> {
            const localVarAxiosArgs = await CacheApiAxiosParamCreator(configuration).sysCacheDetailGet(cacheKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取所有缓存关键字
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysCacheKeyListGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfListOfString>> {
            const localVarAxiosArgs = await CacheApiAxiosParamCreator(configuration).sysCacheKeyListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除指定关键字缓存
         * @param {string} [key] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysCacheRemoveGet(key?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CacheApiAxiosParamCreator(configuration).sysCacheRemoveGet(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CacheApi - factory interface
 * @export
 */
export const CacheApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 获取缓存
         * @param {string} [cacheKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysCacheDetailGet(cacheKey?: string, options?: any): AxiosPromise<XnRestfulResultOfString> {
            return CacheApiFp(configuration).sysCacheDetailGet(cacheKey, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取所有缓存关键字
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysCacheKeyListGet(options?: any): AxiosPromise<XnRestfulResultOfListOfString> {
            return CacheApiFp(configuration).sysCacheKeyListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除指定关键字缓存
         * @param {string} [key] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysCacheRemoveGet(key?: string, options?: any): AxiosPromise<void> {
            return CacheApiFp(configuration).sysCacheRemoveGet(key, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CacheApi - object-oriented interface
 * @export
 * @class CacheApi
 * @extends {BaseAPI}
 */
export class CacheApi extends BaseAPI {
    /**
     * 
     * @summary 获取缓存
     * @param {string} [cacheKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CacheApi
     */
    public sysCacheDetailGet(cacheKey?: string, options?: any) {
        return CacheApiFp(this.configuration).sysCacheDetailGet(cacheKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取所有缓存关键字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CacheApi
     */
    public sysCacheKeyListGet(options?: any) {
        return CacheApiFp(this.configuration).sysCacheKeyListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除指定关键字缓存
     * @param {string} [key] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CacheApi
     */
    public sysCacheRemoveGet(key?: string, options?: any) {
        return CacheApiFp(this.configuration).sysCacheRemoveGet(key, options).then((request) => request(this.axios, this.basePath));
    }
}
