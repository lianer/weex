'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    await this.ctx.render('home/index.pug', {
      context: { a: 1 }
    });
  }
}

module.exports = HomeController;
