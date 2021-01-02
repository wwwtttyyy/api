'use strict';

const Controller = require('egg').Controller;

class AppraisalController extends Controller {
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
  async getDeclare() {
    const { ctx } = this;
    const reviewState = ctx.query.reviewState;
    const { result } = await ctx.service.unit.appraisal.getDeclare('declare', reviewState);
    this.ctx.body = this.handle(result);
  }
  async setReview() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { result } = await ctx.service.unit.appraisal.setdata('unitsubmit', body);
    this.ctx.body = this.handle(result);
  }
  async getReview() {
    const { ctx } = this;
    const declareNum = ctx.query.declareNum;
    const { result } = await ctx.service.unit.appraisal.getReview('unitsubmit', declareNum);
    this.ctx.body = this.handle(result);
  }
  async updateReview() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { result } = await ctx.service.unit.appraisal.updatedata('unitsubmit', body);
    this.ctx.body = this.handle(result);
  }
  async updatedeclarestate() {
    const { ctx } = this;
    const id = ctx.query.declareNum;
    const reviewState = ctx.query.reviewState;
    const { result } = await ctx.service.unit.appraisal.updatedeclarestate(reviewState, id);
    this.ctx.body = this.handle(result);
  }
}

module.exports = AppraisalController;
