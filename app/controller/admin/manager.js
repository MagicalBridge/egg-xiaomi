/*
 * @Author: your name
 * @Date: 2020-05-08 20:43:24
 * @LastEditTime: 2020-05-11 05:43:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/manager.js
 */
'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
  async index() {
    await this.ctx.render('admin/manager/index.html', {
      name: '我是ejs模板引擎',
    });
  }

  async add() {
    await this.ctx.render('admin/manager/add.html');
  }

  async edit() {
    await this.ctx.render('admin/manager/edit.html');
  }
}

module.exports = ManagerController;
