/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 12:07:14 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 12:09:21
 */
const config = require('../config');
const jwt = require("jsonwebtoken");
class Jwt {
    constructor() {
        console.log(config.secret);
        this.secretKey = config.secret;
    }
    sign(playload) {
        let token = jwt.sign(playload, this.secretKey, {
            expiresIn: '1d'
        });
        return token;
    }
    verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.secretKey, (err, decoded) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
}
exports.Jwt = Jwt;