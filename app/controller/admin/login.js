/*
 * @Author: your name
 * @Date: 2020-05-11 19:13:16
 * @LastEditTime: 2020-05-20 13:42:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/login.js
 */
'use strict';

// 引入基础的控制器
const BaseController = require('./base.js');

class LoginController extends BaseController {
  async index() {
    await this.ctx.render('login.html');
  }

  async doLogin() {
    // 因为是继承base.js 所以直接调用success方法
    console.log(this.ctx.request.body);

    // 获取用户传递过来的姓名
    const username = this.ctx.request.body.username;
    // 这里将md5 封装成了一个统一的方法
    const password = await this.service.tools.md5func(this.ctx.request.body.password);
    const code = this.ctx.request.body.verify;
    // 这里跟着老师的版本走有点坑，之前改成的 verify 这里又使用回来了code
    console.log(username, password, code);

    if (code.toUpperCase() === this.ctx.session.code.toUpperCase()) {

      // 查询数据库 找到对应的用户名和密码
      const result = await this.ctx.model.Admin.find({
        username,
        password,
      });

      if (result.length > 0) {
        // 登录成功
        // 1、保存用户信息
        this.ctx.session.userinfo = result[0];
        // 2、跳转到用户中心
        this.ctx.redirect('/admin/manager');
      } else { // 跳转到登录页面
        await this.error('/admin/login', '用户名或者密码不对');
      }
    } else {
      // 注意：异步和 await
      await this.error('/admin/login', '验证码错误');
      // console.log('验证码错误');
    }
  }

  async loginout() {
    // userinfo set null
    this.ctx.session.userinfo = null;
    // jumpto login
    this.ctx.redirect('/admin/login');
  }
}

module.exports = LoginController;
