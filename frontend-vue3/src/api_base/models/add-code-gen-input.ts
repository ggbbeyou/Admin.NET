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
 * @interface AddCodeGenInput
 */
export interface AddCodeGenInput {
    /**
     * 数据库表名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tableName: any;
    /**
     * 业务名（业务代码包名称）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    busName: any;
    /**
     * 命名空间
     * @type {string}
     * @memberof AddCodeGenInput
     */
    nameSpace: any;
    /**
     * 作者姓名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    authorName: any;
    /**
     * 生成方式
     * @type {string}
     * @memberof AddCodeGenInput
     */
    generateType: any;
    /**
     * 菜单应用分类（应用编码）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    menuApplication: any;
    /**
     * 菜单父级
     * @type {number}
     * @memberof AddCodeGenInput
     */
    menuPid: any;
    /**
     * 类名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    className?: any | null;
    /**
     * 是否移除表前缀
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tablePrefix?: any | null;
    /**
     * 功能名（数据库表名称）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tableComment?: any | null;
}
