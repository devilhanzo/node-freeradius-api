/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 12:59:12 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 13:37:13
 */
class RadiusLoginModel {
    doLogin(knex, username, password) {
        return knex('radcheck')
            .select('id','kkh_id','username')
            .where({
            attribute: 'MD5-Password',
            username: username,
            value: password
        })
            .limit(1);
    }
}
exports.RadiusLoginModel = RadiusLoginModel;