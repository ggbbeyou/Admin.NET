/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET通用权限管理平台
 * 前后端分离架构，开箱即用，紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
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
 * @interface AddRoleInput
 */
export interface AddRoleInput {
    /**
     * 名称
     * @type {string}
     * @memberof AddRoleInput
     */
    name: any;
    /**
     * 编码
     * @type {string}
     * @memberof AddRoleInput
     */
    code: any;
    /**
     * 排序
     * @type {number}
     * @memberof AddRoleInput
     */
    sort?: any;
    /**
     * 数据范围类型（字典 1全部数据 2本部门及以下数据 3本部门数据 4仅本人数据 5自定义数据）
     * @type {number}
     * @memberof AddRoleInput
     */
    dataScopeType?: any;
    /**
     * 备注
     * @type {string}
     * @memberof AddRoleInput
     */
    remark?: any | null;
}