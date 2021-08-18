const express = require('express')
const router = express.Router()
const MongoController = require('../controllers/mongo.controller')
// const PostgresController = require('../controllers/postgres.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'User Spirit Animal and Favourite Plant Lookup Service' });
});

router.get('/mongodb/', MongoController)
// router.get('postgres/', PostgresController)

module.exports = router;
