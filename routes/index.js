var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/page1', function(req, res, next) {
  res.render('page1', { title: 'Karolinas Page' });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Page 2' });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'Page 3' });
});

module.exports = router;
