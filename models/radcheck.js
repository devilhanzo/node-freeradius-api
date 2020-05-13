/*
 * @Author: puck.solo 
 * @Date: 2017-10-24 15:39:10 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-24 16:43:08
 */
class RadCheckModel {
    constructor() {
        this.tableName = 'radcheck';
        this.primaryKey = 'id';
        this.userName = 'username';
    }
    list(knex, limit = 100, offset = 0) {
        return knex(this.tableName)
            .limit(limit)
            .offset(offset)
            .orderBy('id', 'desc');
    }
    userlist(knex, username) {
        return knex(this.tableName)
            .where(this.userName, username)
    }
    save(knex, datas) {
        return knex(this.tableName)
            .insert(datas);
    }
    update(knex, id, datas) {
        return knex(this.tableName)
            .where(this.primaryKey, id)
            .update(datas);
    }
    detail(knex, id) {
        return knex(this.tableName)
            .where(this.primaryKey, id);
    }
    remove(knex, id) {
        return knex(this.tableName)
            .where(this.primaryKey, id)
            .del();
    }
}

exports.RadCheckModel = RadCheckModel;