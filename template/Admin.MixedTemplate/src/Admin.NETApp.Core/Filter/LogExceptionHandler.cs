﻿using Furion;
using Furion.DependencyInjection;
using Furion.FriendlyException;
using Furion.EventBridge;
using Microsoft.AspNetCore.Mvc.Filters;
using Serilog;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Admin.NETApp.Core
{
    /// <summary>
    /// 全局异常处理
    /// </summary>
    public class LogExceptionHandler : IGlobalExceptionHandler, ISingleton
    {
        public Task OnExceptionAsync(ExceptionContext context)
        {
            var userContext = App.User;
            Event.Emit("Log:CreateExLog", new SysLogEx
            {
                Account = userContext?.FindFirstValue(ClaimConst.CLAINM_ACCOUNT),
                Name = userContext?.FindFirstValue(ClaimConst.CLAINM_NAME),
                ClassName = context.Exception.TargetSite.DeclaringType?.FullName,
                MethodName = context.Exception.TargetSite.Name,
                ExceptionName = context.Exception.Message,
                ExceptionMsg = context.Exception.Message,
                ExceptionSource = context.Exception.Source,
                StackTrace = context.Exception.StackTrace,
                ParamsObj = context.Exception.TargetSite.GetParameters().ToString(),
                ExceptionTime = DateTimeOffset.Now
            });

            // 写日志文件
            Log.Error(context.Exception.ToString());

            return Task.CompletedTask;
        }
    }
}