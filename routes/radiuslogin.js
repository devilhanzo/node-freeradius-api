/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 13:07:22 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 13:22:05
 */
/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 11:50:59 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 12:06:56
 */
const express = require('express');
const router = express.Router();

const crypto = require("crypto");
const JWT = require("../models/jwt");
const radloginModel = require("../models/radiuslogin");
const jwt = new JWT.Jwt();
const radiuslogin = new radloginModel.RadiusLoginModel();
// router.get('/token', (req, res, next) => {
//     const payload = { fullname: 'skulchai chimrakkaeo' };
//     const token = jwt.sign(payload);
//     res.send({ ok: true, token: token });
// });
router.post('/', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        let encPassword = crypto.createHash('md5').update(password).digest('hex');
        let db = req.db;
        radiuslogin.doLogin(db, username, encPassword)
            .then((results) => {
            if (results.length) {
                const payload = { id: results[0].id, kkh_id: results[0].kkh_id, username: results[0].username };
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
