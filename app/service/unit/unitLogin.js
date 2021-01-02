'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');

class UnitLoginService extends Service {
  getMd5Data(data) {
    return crypto.createHash('md5').update(data).digest('hex');
  }

  async login(unitName, account, password) {
    const data = await this.app.mysql.query(`SELECT * FROM unitLogin WHERE unitName='${unitName}' and password='${password}' and account='${account}'`);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async register(body) {
    // const psd = this.getMd5Data(password);
    const data = await this.app.mysql.insert('unitInfo', body);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async setLoginAccount(body) {
    // const psd = this.getMd5Data(password);
    const data = await this.app.mysql.insert('unitlogin', body);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async delLoginAccount(account) {
    // const psd = this.getMd5Data(password);
    const data = await this.app.mysql.delete('unitlogin', { account });
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

module.exports = UnitLoginService;
