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
 * 职位表
 * @export
 * @interface SysPos
 */
export interface SysPos {
    /**
     * 主键Id
     * @type {number}
     * @memberof SysPos
     */
    id?: any;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysPos
     */
    createdTime?: any | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysPos
     */
    updatedTime?: any | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysPos
     */
    createdUserId?: any | null;
    /**
     * 创建者名称
     * @type {string}
     * @memberof SysPos
     */
    createdUserName?: any | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysPos
     */
    updatedUserId?: any | null;
    /**
     * 修改者名称
     * @type {string}
     * @memberof SysPos
     */
    updatedUserName?: any | null;
    /**
     * 租户id
     * @type {number}
     * @memberof SysPos
     */
    tenantId?: any | null;
    /**
     * 名称
     * @type {string}
     * @memberof SysPos
     */
    name: any;
    /**
     * 编码
     * @type {string}
     * @memberof SysPos
     */
    code: any;
    /**
     * 排序
     * @type {number}
     * @memberof SysPos
     */
    sort?: any;
    /**
     * 备注
     * @type {string}
     * @memberof SysPos
     */
    remark?: any | null;
    /**
     * 
     * @type {CommonStatus}
     * @memberof SysPos
     */
    status?: any;
    /**
     * 多对多（员工）
     * @type {Array&lt;SysEmp&gt;}
     * @memberof SysPos
     */
    sysEmps?: any | null;
    /**
     * 多对多中间表（员工职位）
     * @type {Array&lt;SysEmpPos&gt;}
     * @memberof SysPos
     */
    sysEmpPos?: any | null;
}
