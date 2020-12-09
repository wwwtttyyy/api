'use strict';

const Service = require('egg').Service;

class loginService extends Service {
  async login(name, password, enterprice) {
    const data = await this.app.mysql.query(`SELECT * FROM unitInfo WHERE creditCode='${name}' and password='${password}' and entityName='${enterprice}'`);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async register(body) {
    // const psd = this.getMd5Data(password);
    const data = await this.app.mysql.insert('unitInfo', body);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async getInfo(entityName, creditCode, password) {
    console.log(entityName, creditCode, password);
    // const psd = this.getMd5Data(password);
    const data = await this.app.mysql.get('unitinfo', { entityName, creditCode, password });
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }
}

module.exports = loginService;
