const User = require('../models/user');

exports.getFriends = (req, res) =>{
    User.findOne({username: req.user.username}).exec((err, user) =>{
      if(err){
        return res.send({status: '500', 'errorMsg': "Internal Server Error"});
      } else if(!user){
        return res.send({status: '401', 'errorMsg': "Session error!"});
      } else {
        return res.send({status: '200', friends: user.friends.reverse()});
      }
    });
}