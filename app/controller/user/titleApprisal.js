'use strict';

const Controller = require('egg').Controller;

class TitleApprisalController extends Controller {
  async setBasicInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setBasicInfo(body);
    console.log(result);
    if (result) {
      this.ctx.body = {
        code: '200',
        message: 'success',
      };
    } else {
      this.ctx.body = {
        code: '401',
        data: result,
        message: '无权限',
      };
    }
  }
  async getBasicInfo() {
    const { ctx } = this;
    const name = ctx.query.name;
    const certiNum = ctx.query.certiNum;
    console.log(name, certiNum);
    const { result } = await ctx.service.user.titleApprisal.getBasicInfo(name, certiNum);
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
  async updateBasicInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('basicinfo', body);
    ctx.body = this.handle(result);
  }
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

  async setEduInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('education', body);
    this.ctx.body = this.handle(result);
  }
  async getEduInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('education', certificateNum);
    ctx.body = this.handle(result);
  }
  async updateEduInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('education', body);
    ctx.body = this.handle(result);
  }
  async delEduInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('education', id);
    ctx.body = this.handle(result);
  }


  async setMainExpInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('mainexperience', body);
    this.ctx.body = this.handle(result);
  }
  async getMainExpInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('mainexperience', certificateNum);
    ctx.body = this.handle(result);
  }
  async updateMainExpInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('mainexperience', body);
    ctx.body = this.handle(result);
  }
  async delMainExpInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('mainexperience', id);
    ctx.body = this.handle(result);
  }

  async setAcademicInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('academic', body);
    this.ctx.body = this.handle(result);
  }
  async getAcademicInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('academic', certificateNum);
    ctx.body = this.handle(result);
  }
  async updateAcademicInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('academic', body);
    ctx.body = this.handle(result);
  }
  async delAcademicInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('academic', id);
    ctx.body = this.handle(result);
  }

  // 业绩成果
  async setPerforResultInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('performanceResult', body);
    this.ctx.body = this.handle(result);
  }
  async getPerforResultInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('performanceResult', certificateNum);
    ctx.body = this.handle(result);
  }
  async updatePerforResultInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('performanceResult', body);
    ctx.body = this.handle(result);
  }
  async delPerforResultInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('performanceResult', id);
    ctx.body = this.handle(result);
  }

  // 业绩奖项
  async setPerforRewardInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('performanceReward', body);
    this.ctx.body = this.handle(result);
  }
  async getPerforRewardInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('performanceReward', certificateNum);
    ctx.body = this.handle(result);
  }
  async updatePerforRewardInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('performanceReward', body);
    ctx.body = this.handle(result);
  }
  async delPerforRewardInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('performanceReward', id);
    ctx.body = this.handle(result);
  }
  // 业绩专利
  async setPerforPatentInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('performancePatent', body);
    this.ctx.body = this.handle(result);
  }
  async getPerforPatentInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('performancePatent', certificateNum);
    ctx.body = this.handle(result);
  }
  async updatePerforPatentInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('performancePatent', body);
    ctx.body = this.handle(result);
  }
  async delPerforPatentInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('performancePatent', id);
    ctx.body = this.handle(result);
  }
  // 从业资格
  async setQualificateInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('qualification', body);
    this.ctx.body = this.handle(result);
  }
  async getQualificateInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('qualification', certificateNum);
    ctx.body = this.handle(result);
  }
  async updateQualificateInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('qualification', body);
    ctx.body = this.handle(result);
  }
  async delQualificateInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('qualification', id);
    ctx.body = this.handle(result);
  }

  // 研究材料
  async setResearchMaterialInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('researchmaterial', body);
    this.ctx.body = this.handle(result);
  }
  async getResearchMaterialInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('researchmaterial', certificateNum);
    ctx.body = this.handle(result);
  }
  async updateResearchMaterialInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('researchmaterial', body);
    ctx.body = this.handle(result);
  }
  async delResearchMaterialInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('researchmaterial', id);
    ctx.body = this.handle(result);
  }

  // 人才引进
  async setTalentMaterialInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('talentmaterial', body);
    this.ctx.body = this.handle(result);
  }
  async getTalentMaterialInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('talentmaterial', certificateNum);
    ctx.body = this.handle(result);
  }
  async updateTalentMaterialInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('talentmaterial', body);
    ctx.body = this.handle(result);
  }
  async delTalentMaterialInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('talentmaterial', id);
    ctx.body = this.handle(result);
  }

  // 其他材料
  async setOtherMaterialInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('othermaterial', body);
    this.ctx.body = this.handle(result);
  }
  async getOtherMaterialInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('othermaterial', certificateNum);
    ctx.body = this.handle(result);
  }
  async updateOtherMaterialInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('othermaterial', body);
    ctx.body = this.handle(result);
  }
  async delOtherMaterialInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const { result } = await ctx.service.user.titleApprisal.deldata('othermaterial', id);
    ctx.body = this.handle(result);
  }

  // gzzj
  async setSummaryInfo() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('jobsummary', body);
    this.ctx.body = this.handle(result);
  }
  async getSummaryInfo() {
    const { ctx } = this;
    const certificateNum = ctx.query.certificateNum;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getdata('jobsummary', certificateNum);
    ctx.body = this.handle(result);
  }
  async updateSummaryInfo() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('jobsummary', body);
    ctx.body = this.handle(result);
  }
  async submit() {
    const body = this.ctx.request.body;
    const { result } = await this.ctx.service.user.titleApprisal.setdata('declare', body);
    this.ctx.body = this.handle(result);
  }
  async submitdeclare() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    const { result } = await ctx.service.user.titleApprisal.updatedata('declare', body);
    ctx.body = this.handle(result);
  }
  async getsubmit() {
    const { ctx } = this;
    const certificateNum = ctx.query.unit;
    console.log(certificateNum);
    const { result } = await ctx.service.user.titleApprisal.getAlldata('declare');
    ctx.body = this.handle(result);
  }
}

module.exports = TitleApprisalController;
