'use strict';

const Service = require('egg').Service;

class OrganizationService extends Service {
  async getUserInfo(certificateNum) {
    const data = await this.app.mysql.select('userinfo', {
      where: { certificateNum },
    });
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async setdata(table, body) {
    const data = await this.app.mysql.insert(table, body);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }
  async getdata(table, unitName) {
    const data = await this.app.mysql.select(
      table,
      {
        where: { unitName },
      }
    );
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    console.log(result);
    return { result };
  }
  async updatedata(table, body) {
    // const data = await this.app.mysql.query('update education set id = ?', [ id ]);
    const data = await this.app.mysql.update(table, body);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    console.log(result);
    return { result };
  }
}

module.exports = OrganizationService;
