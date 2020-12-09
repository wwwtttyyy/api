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
  // router.post('/unitLogin', controller.login.test);
  // router.post('/unitLogin/register', controller.login.register);
  // router.get('/unitLogin/getInfo', jwt, controller.login.getInfo);
  // router.post('/tools/saveavatar', controller.uploadimg.saveAvatar);
};
