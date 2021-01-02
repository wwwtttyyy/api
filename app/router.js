'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.get('/demo', controller.demo.index);
  router.post('/unitLogin/register', controller.unit.unitLogin.register);
  router.get('/unitLogin/getInfo', jwt, controller.unit.unitLogin.getInfo);
  router.post('/unitLogin', controller.unit.unitLogin.login);
  router.post('/setLoginAccount', controller.unit.unitLogin.setLoginAccount);
  router.delete('/delLoginAccount', jwt, controller.unit.unitLogin.delLoginAccount);

  router.post('/userLogin', controller.user.userLogin.login);
  router.post('/userLogin/register', controller.user.userLogin.register);
  router.get('/userLogin/getInfo', jwt, controller.user.userLogin.getInfo);

  router.post('/user/setBasicInfo', jwt, controller.user.titleApprisal.setBasicInfo);
  router.get('/user/getBasicInfo', jwt, controller.user.titleApprisal.getBasicInfo);
  router.put('/user/updateBasicInfo', jwt, controller.user.titleApprisal.updateBasicInfo);

  router.post('/user/setEduInfo', jwt, controller.user.titleApprisal.setEduInfo);
  router.get('/user/getEduInfo', jwt, controller.user.titleApprisal.getEduInfo);
  router.put('/user/updateEduInfo', jwt, controller.user.titleApprisal.updateEduInfo);
  router.delete('/user/delEduInfo', jwt, controller.user.titleApprisal.delEduInfo);

  router.post('/user/setMainExpInfo', jwt, controller.user.titleApprisal.setMainExpInfo);
  router.get('/user/getMainExpInfo', jwt, controller.user.titleApprisal.getMainExpInfo);
  router.put('/user/updateMainExpInfo', jwt, controller.user.titleApprisal.updateMainExpInfo);
  router.delete('/user/delMainExpInfo', jwt, controller.user.titleApprisal.delMainExpInfo);

  router.post('/user/setAcademicInfo', jwt, controller.user.titleApprisal.setAcademicInfo);
  router.get('/user/getAcademicInfo', jwt, controller.user.titleApprisal.getAcademicInfo);
  router.put('/user/updateAcademicInfo', jwt, controller.user.titleApprisal.updateAcademicInfo);
  router.delete('/user/delAcademicInfo', jwt, controller.user.titleApprisal.delAcademicInfo);

  router.post('/user/setPerforResultInfo', jwt, controller.user.titleApprisal.setPerforResultInfo);
  router.get('/user/getPerforResultInfo', jwt, controller.user.titleApprisal.getPerforResultInfo);
  router.put('/user/updatePerforResultInfo', jwt, controller.user.titleApprisal.updatePerforResultInfo);
  router.delete('/user/delPerforResultInfo', jwt, controller.user.titleApprisal.delPerforResultInfo);

  router.post('/user/setPerforRewardInfo', jwt, controller.user.titleApprisal.setPerforRewardInfo);
  router.get('/user/getPerforRewardInfo', jwt, controller.user.titleApprisal.getPerforRewardInfo);
  router.put('/user/updatePerforRewardInfo', jwt, controller.user.titleApprisal.updatePerforRewardInfo);
  router.delete('/user/delPerforRewardInfo', jwt, controller.user.titleApprisal.delPerforRewardInfo);

  router.post('/user/setPerforPatentInfo', jwt, controller.user.titleApprisal.setPerforPatentInfo);
  router.get('/user/getPerforPatentInfo', jwt, controller.user.titleApprisal.getPerforPatentInfo);
  router.put('/user/updatePerforPatentInfo', jwt, controller.user.titleApprisal.updatePerforPatentInfo);
  router.delete('/user/delPerforPatentInfo', jwt, controller.user.titleApprisal.delPerforPatentInfo);

  router.post('/user/setQualificateInfo', jwt, controller.user.titleApprisal.setQualificateInfo);
  router.get('/user/getQualificateInfo', jwt, controller.user.titleApprisal.getQualificateInfo);
  router.put('/user/updateQualificateInfo', jwt, controller.user.titleApprisal.updateQualificateInfo);
  router.delete('/user/delQualificateInfo', jwt, controller.user.titleApprisal.delQualificateInfo);

  router.post('/user/setResearchMaterialInfo', jwt, controller.user.titleApprisal.setResearchMaterialInfo);
  router.get('/user/getResearchMaterialInfo', jwt, controller.user.titleApprisal.getResearchMaterialInfo);
  router.put('/user/updateResearchMaterialInfo', jwt, controller.user.titleApprisal.updateResearchMaterialInfo);
  router.delete('/user/delResearchMaterialInfo', jwt, controller.user.titleApprisal.delResearchMaterialInfo);

  router.post('/user/setTalentMaterialInfo', jwt, controller.user.titleApprisal.setTalentMaterialInfo);
  router.get('/user/getTalentMaterialInfo', jwt, controller.user.titleApprisal.getTalentMaterialInfo);
  router.put('/user/updateTalentMaterialInfo', jwt, controller.user.titleApprisal.updateTalentMaterialInfo);
  router.delete('/user/delTalentMaterialInfo', jwt, controller.user.titleApprisal.delTalentMaterialInfo);

  router.post('/user/setOtherMaterialInfo', jwt, controller.user.titleApprisal.setOtherMaterialInfo);
  router.get('/user/getOtherMaterialInfo', jwt, controller.user.titleApprisal.getOtherMaterialInfo);
  router.put('/user/updateOtherMaterialInfo', jwt, controller.user.titleApprisal.updateOtherMaterialInfo);
  router.delete('/user/delOtherMaterialInfo', jwt, controller.user.titleApprisal.delOtherMaterialInfo);

  router.post('/user/setSummaryInfo', jwt, controller.user.titleApprisal.setSummaryInfo);
  router.get('/user/getSummaryInfo', jwt, controller.user.titleApprisal.getSummaryInfo);
  router.put('/user/updateSummaryInfo', jwt, controller.user.titleApprisal.updateSummaryInfo);

  router.post('/user/declare', jwt, controller.user.titleApprisal.submit);
  router.put('/user/submitdeclare', jwt, controller.user.titleApprisal.submitdeclare);
  router.get('/user/getdeclare', jwt, controller.user.titleApprisal.getsubmit);

  router.get('/unit/organization/getUserInfo', jwt, controller.unit.organization.getUserInfo);
  router.post('/unit/organization/addWorker', jwt, controller.unit.organization.addWorker);
  router.get('/unit/organization/getWorker', jwt, controller.unit.organization.getWorker);
  router.put('/unit/organization/modifyWorker', jwt, controller.unit.organization.modifyWorker);
  router.delete('/unit/organization/delWorker', jwt, controller.unit.organization.delWorker);

  router.get('/unit/appraisal/getdeclare', jwt, controller.unit.appraisal.getDeclare);
  router.post('/unit/appraisal/updatedeclarestate', jwt, controller.unit.appraisal.updatedeclarestate);
  router.post('/unit/submitReview', jwt, controller.unit.appraisal.setReview);
  router.get('/unit/getsubmitReview', jwt, controller.unit.appraisal.getReview);
  router.put('/unit/updatesubmitReview', jwt, controller.unit.appraisal.updateReview);

  // router.post('/unitLogin', controller.login.test);
  // router.post('/unitLogin/register', controller.login.register);
  // router.get('/unitLogin/getInfo', jwt, controller.login.getInfo);
  // router.post('/tools/saveavatar', controller.uploadimg.saveAvatar);
};
