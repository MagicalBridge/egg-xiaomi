/*
 * @Author: your name
 * @Date: 2020-05-08 20:55:04
 * @LastEditTime: 2020-05-11 19:28:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/role.js
 */
'use strict';

const BaseController = require('./base.js');

class RoleController extends BaseController {
  async index() {
    await this.ctx.render('admin/role/index.html');
  }

  async add() {
    await this.ctx.render('admin/role/add.html');
  }

  async edit() {
    await this.ctx.render('admin/role/edit.html');
  }
}

module.exports = RoleController;
