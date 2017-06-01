var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');

router.route('/v1/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/v1/series')
  .post(userController.postseries)
  .get(userController.getseries)

  router.route('/v1/seasons')
  .post(userController.postseasons)
  .get(userController.getseasons);
  router.route('/v1/comics')
  .post(userController.postcomics)
  .get(userController.getcomics);
  router.route('/v1/users/check')
  .post(userController.checkuser)
  router.route('/v1/search/:reg')
  .get(userController.searchcomics)
  router.route('/v1/series/:_id')
  .put(userController.updateseries)
  .delete(userController.deleteseries)
  router.route('/v1/update')
  .put(userController.updateUsers)
  router.route('/v1/update/:_id')
  .delete(userController.deleteUsers)
  router.route('/v1/seasons/:_id')
  .put(userController.updateseasons)
  .delete(userController.deleteseasons)
  router.route('/v1/comics/:_id')
  .put(userController.updatecomics)
  .delete(userController.deletecomics)
  // router.route('/v1/comments/:_id')
  // .put(userController.addcomment)


  // router.route('/v1/upseries/:_id')
  router.route('/v1/getseason/:Series_name')
  .get(userController.getseason)
  router.route('/v1/comments')
    .post(userController.postcomment)
    .get(userController.getcomment)




module.exports = router;
