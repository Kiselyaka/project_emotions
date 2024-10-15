var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// страница радости
router.get('/radost', function(req, res, next) {
  res.send("<h1>Страница Радости</h1>")
});
// страница гнева
router.get('/gnev', function(req, res, next) {
  res.send("<h1>Страница Гнева</h1>")
});
// страница печали
router.get('/pechal', function(req, res, next) {
  res.send("<h1>Страница Печали</h1>")
});
// страница брезгливости
router.get('/brezglivost', function(req, res, next) {
  res.send("<h1>Страница Брезгливости</h1>")
});
// страница страха
router.get('/strah', function(req, res, next) {
  res.send("<h1>Страница Страха</h1>")
});
  
module.exports = router;
