const express = require('express')
const router = express.Router()
const MongoController = require('../controllers/mongo.controller')
const PostgresController = require('../controllers/postgres.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('splash', { title: 'User Spirit Animal and Favourite Plant Lookup Service' })
})
router.get('/query', function(req, res, next) {
  res.render('query', { title: 'User Spirit Animal and Favourite Plant Lookup Service' });
});
router.get('/search', function(req, res, next){
  res.render('search');
});

/* POST */
router.post('/query', function(req, res, next) {
  res.render('query', { username: req.body.username });
});
router.post('/search', function(req, res, next){
  res.render('search', { term: req.body.search_term, database: req.body.database});
});

router.get('/mongodb/', MongoController)
router.get('postgres/', PostgresController)

module.exports = router;
