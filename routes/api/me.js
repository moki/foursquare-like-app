var express = require('express');
var User    = require('../../models/user');
var limit   = require('../middleware/limit');
var router  = express.Router();

router.get('/me', limit, function (req, res) {
  // clean database
  // User.remove({}, function (err) {
  //   console.log('Users flushed');
  // });
  User.findById(req.user, function (err, user) {
    return res.send(user);
  });
});

router.put('/me', limit, function (req, res) {
  User.findById(req.user, function (err, user) {
    if (!user) {
      return res.status(400).send({ message : 'User not found' });
    }
    user.displayName  = req.body.displayName || user.displayName;
    user.email        = req.body.email || user.email;
    user.city         = req.body.city || user.city;
    user.info         = req.body.info || user.info;
    user.sex          = req.body.sex || user.sex;
    user.date         = new Date(req.body.date) || user.date;
    user.save(function (err) {
      res.status(200).end();
    });
  });
});

module.exports = router;
