/*
 * @Author: your name
 * @Date: 2020-05-11 19:21:41
 * @LastEditTime: 2020-05-11 19:22:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/base.js
 */
'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success() {
    console.log('我是基础控制器');
  }
}

module.exports = BaseController;
