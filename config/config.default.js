/*
 * @Author: your name
 * @Date: 2020-05-08 18:30:56
 * @LastEditTime: 2020-05-18 06:24:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-xiaomi/config/config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588933737978_8085';

  // add your middleware config here
  config.middleware = ['adminauth'];

  // 对于adminauth中间件使用场景做控制
  config.adminauth = {
    match: '/admin',
  };

  config.view = {
    mapping: {
      // 这里有一个坑,如果这里将.html 修改成 .ejs 会报错
      '.nj': 'nunjucks',
      '.html': 'ejs',
    },
  };

  // 配置session 这个已经配置好了
  config.session = {
    key: 'SESSION_ID',
    maxAge: 864000,
    httpOnly: true,
    encrypt: true,
    renew: true,
  };

  // 配置mongose连接mongodb数据库
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/egg-xiaomi',
      options: {},
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
