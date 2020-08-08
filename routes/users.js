var express = require('express');
const dao = require('../datasource/userDao');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  dao.getUsers().then(users => {
    res.send(users);
  }).catch(err => setImmediate(() => {throw err;}));
});

router.post('/', function (req, res) {
  dao.createUser(req.body).then(user => {
    //handle fail
    if (!user) {
      res.status(500);
      res.send({
        message: "System error"
      })
    //handle success
    } else {
      res.status(201);
      res.send(user);
    }
  }).catch(err => setImmediate(() => {throw err;}));
});

router.get("/:user_id", function (req, res) {
  dao.getUserById(parseInt(req.params.user_id)).then(user => {
    if (!user) {
      res.status(404);
      res.send({
        message: "User not found"
      })
    } else {
      res.send(user);
    }
  }).catch(err => setImmediate(() => {throw err;}));
});

router.put('/:user_id', function (req, res) {
  dao.updateUser(req.body, req.params.user_id).then(user => {
    //handle fail
    if (!user) {
      res.status(500);
      res.send({
        message: "System error"
      })
      //handle success
    } else {
      res.send(user);
    }
  }).catch(err => setImmediate(() => {throw err;}));
});

router.delete('/:user_id', function (req, res) {
  dao.deleteUser(parseInt(req.params.user_id)).then(results => {
    res.send({
      message: "User deleted successfully"
    });
  }).catch(err => setImmediate(() => {throw err;}));
});

module.exports = router;
