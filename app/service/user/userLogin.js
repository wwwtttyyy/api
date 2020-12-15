'use strict';

const Service = require('egg').Service;

class UserLoginService extends Service {
  async login(name, password) {
    console.log(name, password);
    const data = await this.app.mysql.query(`SELECT * FROM userInfo WHERE certificateNum='${name}' and password='${password}'`);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async register(body) {
    // const psd = this.getMd5Data(password);
    const data = await this.app.mysql.insert('userInfo', body);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async getInfo(certificateNum, password) {
    // const psd = this.getMd5Data(password);
    const data = await this.app.mysql.get('userInfo', { certificateNum, password });
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }
}

module.exports = UserLoginService;
