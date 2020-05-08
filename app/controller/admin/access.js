/*
 * @Author: your name
 * @Date: 2020-05-08 20:56:32
 * @LastEditTime: 2020-05-08 20:58:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/access.js
 */
'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
  async index() {
    this.ctx.body = '权限列表';
  }

  async add() {
    this.ctx.body = '权限增加';
  }

  async edit() {
    this.ctx.body = '权限编辑';
  }
}

module.exports = AccessController;
