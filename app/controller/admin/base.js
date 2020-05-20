/*
 * @Author: your name
 * @Date: 2020-05-11 19:21:41
 * @LastEditTime: 2020-05-20 13:15:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/base.js
 */
'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(redirctUrl, msg) {
    await this.ctx.render('/admin/public/success.html', {
      redirctUrl,
      msg,
    });
  }

  // 失败方法
  async error(redirctUrl, msg) {
    await this.ctx.render('/admin/public/error.html', {
      redirctUrl,
      msg,
    });
  }

  async verify() {
    // 服务里面的方法
    const captcha = await this.service.tools.captcha();
    // 指定返回的类型
    this.ctx.response.type = 'image/svg+xml';
    // 给页面返回一张图片
    this.ctx.body = captcha.data;
  }
}

module.exports = BaseController;
