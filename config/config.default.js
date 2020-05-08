/*
 * @Author: your name
 * @Date: 2020-05-08 18:30:56
 * @LastEditTime: 2020-05-08 21:35:25
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
  config.middleware = [];

  config.view = {
    mapping: {
      // 这里有一个坑,如果这里将.html 修改成 .ejs 会报错
      '.nj': 'nunjucks',
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
