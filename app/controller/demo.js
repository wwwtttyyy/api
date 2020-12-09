'use strict';
const Controller = require('egg').Controller;

class demoController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    const list = await this.service.demo.index();
    ctx.body = list;
  }
}

module.exports = demoController;
