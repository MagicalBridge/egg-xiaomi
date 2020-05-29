/*
 * @Author: your name
 * @Date: 2020-05-08 20:55:04
 * @LastEditTime: 2020-05-29 09:58:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/controller/admin/role.js
 */
'use strict';

const BaseController = require('./base.js');

class RoleController extends BaseController {
  async index() {
    // 使用model 查找响应的数据
    const result = await this.ctx.model.Role.find({});
    await this.ctx.render('admin/role/index.html', {
      list: result,
    });
  }

  async add() {
    await this.ctx.render('admin/role/add.html');
  }

  async doAdd() {

    console.log(this.ctx.request.body);

    const { title, description } = this.ctx.request.body;

    const role = new this.ctx.model.Role({
      title,
      description,
    });

    const result = await role.save();
    if (result) {
      await this.success('/admin/role', '增加角色成功');
    }
  }

  async edit() {
    await this.ctx.render('admin/role/edit.html');
  }
}

module.exports = RoleController;
