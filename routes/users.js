var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com"
    }
  ]
  res.send(users);
});

router.get("/:user_id", function (req, res) {
  var user = {
    id: req.params.user_id,
    name: "John Smith",
    email: "john.smith@example.com"
  }
  res.send(user);
});

module.exports = router;
