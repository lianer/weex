'use strict';

const path = require('path')

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537326748561_1228';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'pug',
    mapping: {
      '.pug': 'pug'
    }
  };

  config.assets = {
    url: '127.0.0.1:8080',
    publicPath: '/',
    devServer: {
      command: 'npm run app',
      port: 8080,
      PORT: 8080,
      APP_ROOT: process.cwd() + '/app/assets',
      BROWSER: 'none',
      ESLINT: 'none',
      SOCKET_SERVER: 'http://127.0.0.1:8080',
      PUBLIC_PATH: 'http://127.0.0.1:8080',
      debug: true
    }
  }

  return config;
};
