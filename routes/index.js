/*
 * @Author: puck.solo 
 * @Date: 2017-10-24 15:33:55 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 10:45:46
 */
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send({ ok: true, message: 'Welcome to Freeradius database API' });
});
router.get('/version', (req, res, next) => {
    res.send({ ok: true, version: 'v1.0.0', build: '20171025' });
});

module.exports = router;