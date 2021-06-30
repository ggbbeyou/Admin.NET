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
 * 系统应用表
 * @export
 * @interface SysApp
 */
export interface SysApp {
    /**
     * 主键Id
     * @type {number}
     * @memberof SysApp
     */
    id?: any;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysApp
     */
    createdTime?: any | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysApp
     */
    updatedTime?: any | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysApp
     */
    createdUserId?: any | null;
    /**
     * 创建者名称
     * @type {string}
     * @memberof SysApp
     */
    createdUserName?: any | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysApp
     */
    updatedUserId?: any | null;
    /**
     * 修改者名称
     * @type {string}
     * @memberof SysApp
     */
    updatedUserName?: any | null;
    /**
     * 名称
     * @type {string}
     * @memberof SysApp
     */
    name: any;
    /**
     * 编码
     * @type {string}
     * @memberof SysApp
     */
    code: any;
    /**
     * 是否默认激活（Y-是，N-否）,只能有一个系统默认激活  用户登录后默认展示此系统菜单
     * @type {string}
     * @memberof SysApp
     */
    active?: any | null;
    /**
     * 
     * @type {CommonStatus}
     * @memberof SysApp
     */
    status?: any;
    /**
     * 排序
     * @type {number}
     * @memberof SysApp
     */
    sort?: any;
}
