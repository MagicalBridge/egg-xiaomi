'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
  async index() {
    this.ctx.body = '管理员列表';
  }

  async add() {
    this.ctx.body = '管理员增加';
  }

  async edit() {
    this.ctx.body = '管理员编辑';
  }
}

module.exports = ManagerController;
