'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('*', controller.home.render);
  // router.get('/tester/*', controller.tester.index)
};
