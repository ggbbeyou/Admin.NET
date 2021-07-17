using Furion.DataEncryption;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Admin.NETApp.Core.Service;

namespace Admin.NETApp.Core
{
  /// <summary>
  /// 聊天集线器
  /// </summary>
  public class ChatHub : Hub
  {
    private readonly ISysCacheService _cache;

    public ChatHub(ISysCacheService cache)
    {
      _cache = cache;
    }

    /// <summary>
    /// 连接
    /// </summary>
    /// <returns></returns>
    public override async Task OnConnectedAsync()
    {
      var token = Context.GetHttpContext().Request.Query["access_token"];
      var claims = JWTEncryption.ReadJwtToken(token)?.Claims;
      var userId = claims.FirstOrDefault(e => e.Type == ClaimConst.CLAINM_USERID)?.Value;
      var onlineUsers = await _cache.GetAsync<List<SysOnlineUser>>(CommonConst.CACHE_KEY_ONLINE_USER);
      if (onlineUsers == null)
        onlineUsers = new List<SysOnlineUser>();
      onlineUsers.Add(new SysOnlineUser()
      {
        ConnectionId = Context.ConnectionId,
        UserId = long.Parse(userId),
        LastTime = DateTime.Now
      });
      await _cache.SetAsync(CommonConst.CACHE_KEY_ONLINE_USER, onlineUsers);
    }

    /// <summary>
    /// 断开
    /// </summary>
    /// <param name="exception"></param>
    /// <returns></returns>
    public override async Task OnDisconnectedAsync(Exception exception)
    {
      if (!string.IsNullOrEmpty(Context.ConnectionId))
      {
        var onlineUsers = await _cache.GetAsync<List<SysOnlineUser>>(CommonConst.CACHE_KEY_ONLINE_USER);
        if (onlineUsers == null) return;

        onlineUsers.RemoveAll(u => u.ConnectionId == Context.ConnectionId);
        await _cache.SetAsync(CommonConst.CACHE_KEY_ONLINE_USER, onlineUsers);
      }
    }
  }
}