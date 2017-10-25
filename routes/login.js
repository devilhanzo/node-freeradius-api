/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 11:50:59 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 12:06:56
 */
const express = require('express');
const router = express.Router();

const crypto = require("crypto");
const jwt_1 = require("../models/jwt");
const login_1 = require("../models/login");
const jwt = new jwt_1.Jwt();
const loginModel = new login_1.LoginModel();
router.get('/token', (req, res, next) => {
    const payload = { fullname: 'skulchai chimrakkaeo' };
    const token = jwt.sign(payload);
    res.send({ ok: true, token: token });
});
router.post('/', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        let encPassword = crypto.createHash('md5').update(password).digest('hex');
        let db = req.db;
        loginModel.doLogin(db, username, encPassword)
            .then((results) => {
            if (results.length) {
                const payload = { fullname: results[0].fullname };
                const token = jwt.sign(payload);
                res.send({ ok: true, token: token });
            }
            else {
                res.send({ ok: false, message: 'ชื่อผู้ใช้งานหรือรหัสผ่าน ไม่ถูกต้อง' });
            }
        })
            .catch(err => {
            console.log(err);
            res.send({ ok: false, message: 'Server error!' });
        });
    }
    else {
        res.send({ ok: false, message: 'กรุณาระบุชื่อผู้ใช้งานและรหัสผ่าน' });
    }
});

module.exports = router;
