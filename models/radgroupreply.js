/*
 * @Author: puck.solo 
 * @Date: 2017-10-24 15:39:10 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 11:58:06
 */
class RadGroupReplyModel {
    constructor() {
        this.tableName = 'radgroupreply';
        this.primaryKey = 'id';
    }
    list(knex, limit = 100, offset = 0) {
        return knex(this.tableName)
            .limit(limit)
            .offset(offset);
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

exports.RadGroupReplyModel = RadGroupReplyModel;
// exports.BudgetModel = BudgetModel;