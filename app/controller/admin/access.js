/*
 * @Author: your name
 * @Date: 2020-05-08 20:56:32
 * @LastEditTime: 2020-05-11 19:12:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/access.js
 */
'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
  async index() {
    await this.ctx.render('admin/access/index.html');
  }

  async add() {
    await this.ctx.render('admin/access/add.html');
  }

  async edit() {
    await this.ctx.render('admin/access/edit.html');
  }
}

module.exports = AccessController;
