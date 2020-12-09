'use strict';
// const { mysql } = require('../../config/plugin');
const Service = require('egg').Service;

class demoService extends Service {
  async index() {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.query('select * from article');
    return { user };

  }
}
module.exports = demoService;

