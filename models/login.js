/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 12:09:20 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 13:02:24
 */
class LoginModel {
    doLogin(knex, username, password) {
        return knex('users')
            // .select('id', 'fullname')
            .select('name','surname')
            .where({
            username: username,
            password: password
        })
            .limit(1);
    }
}
exports.LoginModel = LoginModel;