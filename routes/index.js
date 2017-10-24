/*
 * @Author: puck.solo 
 * @Date: 2017-10-24 15:33:55 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-24 16:46:07
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;