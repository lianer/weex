'use strict';

const Service = require('egg').Service;

class UploadService extends Service {
  async upload() {
    return {
      code: 0,
      message: '',
    };
  }
}

module.exports = UploadService;
