//inside the main router file, you can delegate each router into its own namespace

// apiRoutes/index.js
const router = require('express').Router();

//CHANGE THIS
// router.use('/exampleroute1', require('./exampleroute1')); // matches all requests to /api/users/
// router.use('/route2', require('./route2')); // matches all requests to  /api/puppies/
// router.use('/route3', require('./route3')); // matches all requests to  /api/kittens/

// notARoute ==> will send a 404
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
