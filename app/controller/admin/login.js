/*
 * @Author: your name
 * @Date: 2020-05-11 19:13:16
 * @LastEditTime: 2020-05-17 15:29:11
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
  }
}

module.exports = LoginController;
