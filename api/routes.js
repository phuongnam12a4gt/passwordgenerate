'use strict';
module.exports = function(app) {
  let lowercaseCtrl = require('./controllers/LowercaseController');
  let numberCtrl = require('./controllers/NumberController');
  let uppercaseCtrl = require('./controllers/UppercaseController');
  let symbolCtrl = require('./controllers/SymbolController');
    //lowercase
  app.route('/lowercase')
    .get(lowercaseCtrl.get)
    .post(lowercaseCtrl.store);

  app.route('/lowercase/:lowercaseId')
    .get(lowercaseCtrl.detail)
    .put(lowercaseCtrl.update)
    .delete(lowercaseCtrl.delete);
  //number
  app.route('/number')
  .get(numberCtrl.get)
  .post(numberCtrl.store);

  app.route('/number/:numberId')
  .get(numberCtrl.detail)
  .put(numberCtrl.update)
  .delete(numberCtrl.delete);
  //uppercase
  app.route('/uppercase')
  .get(uppercaseCtrl.get)
  .post(uppercaseCtrl.store);

  app.route('/uppercase/:uppercaseId')
  .get(uppercaseCtrl.detail)
  .put(uppercaseCtrl.update)
  .delete(uppercaseCtrl.delete);
  //symbol
  app.route('/symbol')
  .get(symbolCtrl.get)
  .post(symbolCtrl.store);

  app.route('/symbol/:symbolId')
  .get(symbolCtrl.detail)
  .put(symbolCtrl.update)
  .delete(symbolCtrl.delete);
};