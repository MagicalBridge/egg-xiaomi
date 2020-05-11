/*
 * @Author: your name
 * @Date: 2020-05-11 19:13:16
 * @LastEditTime: 2020-05-11 19:17:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/login.js
 */
'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    await this.ctx.render('login.html');
  }
}

module.exports = LoginController;
