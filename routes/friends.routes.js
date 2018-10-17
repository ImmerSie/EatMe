var Router = require('express');
var FriendController = require('../controllers/friendController');

const router = new Router();
router.route('/getFriends').get(FriendController.getFriends);

module.exports = router;