/*
 * @Author: your name
 * @Date: 2020-05-11 19:21:41
 * @LastEditTime: 2020-05-12 06:43:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/base.js
 */
'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(redirctUrl) {
    await this.ctx.render('/admin/public/success.html', {
      redirctUrl: redirctUrl,
    });
  }

  // 失败方法
  async error(redirctUrl) {
    await this.ctx.render('/admin/public/error.html', {
      redirctUrl,
    });
  }
}

module.exports = BaseController;
