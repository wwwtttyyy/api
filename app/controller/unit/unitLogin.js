'use strict';

const Controller = require('egg').Controller;

class UnitLoginController extends Controller {
  async login() {
    const { ctx, app } = this;
    const { account, password, unitName } = ctx.request.body;
    // console.log(name, password, enterprice);
    const { result } = await ctx.service.unit.unitLogin.login(unitName, account, password);
    console.log(result);
    ctx.body = result;
    if (result.length > 0) {
      const token = app.jwt.sign({
        userName: account, // 需要存储的 token 数据
      }, app.config.jwt.secret, { expiresIn: '1440m' }); // 2分钟token过期
      ctx.set({ token });// 设置headers
      ctx.body = {
        code: '200',
        // data: result,
        data: [{
          token,
          result,
        }],
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

  async register() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { result } = await ctx.service.unit.unitLogin.register(body);
    ctx.body = result;
    if (result) {
      ctx.body = {
        code: '200',
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
  async setLoginAccount() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { result } = await ctx.service.unit.unitLogin.setLoginAccount(body);
    ctx.body = result;
    if (result) {
      ctx.body = {
        code: '200',
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
  async delLoginAccount() {
    const { ctx } = this;
    const account = ctx.query.account;
    const { result } = await ctx.service.unit.unitLogin.delLoginAccount(account);
    ctx.body = result;
    if (result) {
      ctx.body = {
        code: '200',
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
  async getInfo() {
    const { ctx } = this;
    const account = ctx.query.account;
    const entityName = ctx.query.entityName;
    const password = ctx.query.password;
    console.log(password);
    const { result } = await ctx.service.unit.unitLogin.getInfo(entityName, account, password);
    console.log(result);
    if (JSON.stringify(result) !== '{}') {
      ctx.body = {
        code: '200',
        data: result,
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
}

module.exports = UnitLoginController;
