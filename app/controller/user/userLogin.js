'use strict';

const Controller = require('egg').Controller;

class UserLoginController extends Controller {
  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    console.log(username, password);
    const { result } = await ctx.service.user.userLogin.login(username, password);
    ctx.body = result;
    if (result.length > 0) {
      const token = app.jwt.sign({
        userName: username, // 需要存储的 token 数据
      }, app.config.jwt.secret, { expiresIn: '1440m' }); // 2分钟token过期
      ctx.set({ token });// 设置headers
      ctx.body = {
        code: '200',
        data: [{
          token,
          userName: result.userName,
          userId: result.userId,
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
    console.log(body);
    const { result } = await ctx.service.user.userLogin.register(body);
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
    const userName = ctx.query.username;
    const password = ctx.query.password;
    const { result } = await ctx.service.user.userLogin.getInfo(userName, password);
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

module.exports = UserLoginController;
