'use strict';

const Service = require('egg').Service;

class AppraisalService extends Service {
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

  async deldata(table, id) {
    // const data = await this.app.mysql.query('update education set id = ?', [ id ]);
    const data = await this.app.mysql.delete(table, { id });
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    console.log(result);
    return { result };
  }
  async getDeclare(table, reviewState) {
    const data = await this.app.mysql.select(
      table,
      {
        where: { reviewState },
      }
    );
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    console.log(result);
    return { result };
  }
  async getReview(table, declareNum) {
    const data = await this.app.mysql.select(
      table,
      {
        where: { declareNum },
      }
    );
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    console.log(result);
    return { result };
  }
  async updatedeclarestate(reviewState, id) {
    const info = {
      id,
      reviewState,
    };
    const data = await this.app.mysql.update('declare', info);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    console.log(result);
    return { result };
  }
}

module.exports = AppraisalService;
