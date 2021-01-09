var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const users = req.app.locals.users;

  users.find().limit(3).toArray((err, recent) => {
    res.render('index', { recent } );
  });
  });
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
