/*
 * @Author: your name
 * @Date: 2020-05-11 19:13:16
 * @LastEditTime: 2020-05-13 19:33:38
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
    await this.success('/admin/login');
  }
}

module.exports = LoginController;
