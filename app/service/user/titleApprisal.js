'use strict';

const Service = require('egg').Service;

class TitleApprisalService extends Service {
  async setBasicInfo(body) {
    const data = await this.app.mysql.insert('basicinfo', body);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async getBasicInfo(name, certificateNum) {
    // const psd = this.getMd5Data(password);
    const data = await this.app.mysql.get('basicinfo', { certificateNum, name });
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async setdata(table, body) {
    const data = await this.app.mysql.insert(table, body);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }

  async getdata(table, certificateNum) {
    const data = await this.app.mysql.select(
      table,
      {
        where: { certificateNum },
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
  async getAlldata(table) {
    const data = await this.app.mysql.select(
      table
    );
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    console.log(result);
    return { result };
  }

  // async setEduInfo(body) {
  //   const data = await this.app.mysql.insert('education', body);
  //   const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
  //   return { result };
  // }

  // async getEduInfo(certificateNum) {
  //   // const psd = this.getMd5Data(password);
  //   const data = await this.app.mysql.select(
  //     'education',
  //     {
  //       where: { certificateNum },
  //     }
  //   );
  //   const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
  //   return { result };
  // }
  // async updateEduInfo(body) {
  //   // const data = await this.app.mysql.query('update education set id = ?', [ id ]);
  //   const data = await this.app.mysql.update('education', body);
  //   const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
  //   console.log(result);
  //   return { result };
  // }
  // async delEduInfo(id) {
  //   // const data = await this.app.mysql.query('update education set id = ?', [ id ]);
  //   const data = await this.app.mysql.delete('education', { id });
  //   const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
  //   console.log(result);
  //   return { result };
  // }
}

module.exports = TitleApprisalService;
