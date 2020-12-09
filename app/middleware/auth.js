'use strict';
module.exports = () => {
  return async function auth(ctx) {

    // 设置模板的全局变量

    ctx.state.csrf = ctx.csrf;
    console.log(ctx.state.csrf);
  };
};
