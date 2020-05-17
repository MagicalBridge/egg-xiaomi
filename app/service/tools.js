/*
 * @Author: your name
 * @Date: 2018-09-02 13:45:54
 * @LastEditTime: 2020-05-17 10:57:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/app/service/tools.js
 */
'use strict';

const svgCaptcha = require('svg-captcha');
const Service = require('egg').Service;
const md5 = require('md5');

class ToolsService extends Service {
  // 这个 工具方法用于生成验证码
  async captcha() {
    const captcha = svgCaptcha.create({
      size: 6,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#cc9966',
    });

    this.ctx.session.code = captcha.text;
    return captcha;
  }
  // 封装MD5方法
  async md5func(str) {
    return md5(str);
  }
}

module.exports = ToolsService;
