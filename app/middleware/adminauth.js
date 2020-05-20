/*
 * @Author: your name
 * @Date: 2020-05-16 19:03:54
 * @LastEditTime: 2020-05-20 13:38:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/middleware/adminauth.js
 */
'use strict';

const url = require('url');

module.exports = options => {
  return async function adminauth(ctx, next) {
    /**
     * 1、用户没有登录跳转到登录页面
     * 2、只有登录以后才可以访问后台管理系统
     */

    ctx.state.csrf = ctx.csrf; // 全局变量存储

    const pathname = url.parse(ctx.request.url).pathname;

    if (ctx.session.userinfo) {
      // 全局保存这个userinfo
      ctx.state.userinfo = ctx.session.userinfo;
      await next();
    } else {
      // 排除不需要权限判断的页面
      if (pathname === '/admin/login' || pathname === '/admin/doLogin' || pathname === '/admin/verify') {
        await next();
      } else {
        ctx.redirect('/admin/login');
      }
    }
  };
};
