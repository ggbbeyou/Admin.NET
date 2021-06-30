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
/**
 * 
 * @export
 * @interface NoticeUserRead
 */
export interface NoticeUserRead {
    /**
     * 用户Id
     * @type {number}
     * @memberof NoticeUserRead
     */
    userId?: any;
    /**
     * 用户名称
     * @type {string}
     * @memberof NoticeUserRead
     */
    userName?: any | null;
    /**
     * 
     * @type {NoticeUserStatus}
     * @memberof NoticeUserRead
     */
    readStatus?: any;
    /**
     * 阅读时间
     * @type {Date}
     * @memberof NoticeUserRead
     */
    readTime?: any;
}
