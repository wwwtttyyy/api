'use strict';

const Controller = require('egg').Controller;

class OrganizationController extends Controller {
  handle(result) {
    // console.log(JSON.stringify(result) !== '{}');
    if (JSON.stringify(result) !== '{}') {
      const body = {
        code: '200',
        data: result,
        message: 'success',
      };
      return body;
    }
    const body = {
      code: '401',
      data: result,
      message: '无权限',
    };
    return body;
  }
  async getUserInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.unit.organization.getUserInfo(certificateNum);
    if (JSON.stringify(result) !== '{}') {
      const { name, certificateNum, phone, email, password } = result[0];
      const datas = {
        name,
        certificateNum,
        phone,
        email,
        password,
      };
      console.log(datas);
      ctx.body = {
        code: '200',
        data: datas,
        message: 'success',
      };
    } else {
      ctx.body = {
        code: '401',
        data: result,
        message: '账号或密码错误',
      };
    }
  }

  async addWorker() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { result } = await ctx.service.unit.organization.setdata('workers', body);
    this.ctx.body = this.handle(result);
  }

  async getWorker() {
    const { ctx } = this;
    const unitName = ctx.query.unitName;
    const { result } = await ctx.service.unit.organization.getdata('workers', unitName);
    this.ctx.body = this.handle(result);
  }

  async modifyWorker() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { result } = await ctx.service.unit.organization.updatedata('workers', body);
    this.ctx.body = this.handle(result);
  }

}

module.exports = OrganizationController;
