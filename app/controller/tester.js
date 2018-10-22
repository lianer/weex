'use strict';

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const Controller = require('egg').Controller;

const testerDir = '../../../weex-tester/dist'
const testerPattern = '**/*.web.js'
const testerSuffix = '.web.js'

const getTesterFiles = function () {
  return new Promise((resolve, reject) => {
    glob(testerPattern, { cwd: path.resolve(__dirname, testerDir) }, (err, _files) => {
      if (err) {
        reject(err)
      } else {
        _files = _files.map(_file => _file.replace(testerSuffix, ''))
        resolve(_files)
      }
    })
  })
}

class TesterController extends Controller {
  async page() {
    await this.ctx.render('tester/page.pug');
  }

  async index() {
    let files = await getTesterFiles()
    await this.ctx.render('tester.pug', {
      files
    })
  }
}

module.exports = TesterController;
