/*
 * @Author: your name
 * @Date: 2020-05-08 18:30:56
 * @LastEditTime: 2020-05-08 21:40:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index/test.nj', {
      username: 'louis',
    });
  }
}

module.exports = HomeController;
