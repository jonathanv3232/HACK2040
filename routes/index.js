var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/write', function(req, res, next) {
  res.render('write.html', { title: 'Express' });
});

router.get('/say', function(req, res, next) {
  res.render('say.html', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test.html', { title: 'Express' });
});



module.exports = router;
