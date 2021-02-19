const path = require('path');
const gateway = require('express-gateway');

//https://expressjs.com/en/resources/middleware.html


gateway()
  .load(path.join(__dirname, 'config'))
  .run();
