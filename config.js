/*
 * @Author: puck.solo 
 * @Date: 2017-10-24 13:26:14 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 09:40:13
 */
module.exports = {
  sql: {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    multipleStatements: true,
  },
  sql2: {
    host: process.env.SQL2_HOST,
    port: process.env.SQL2_PORT,
    user: process.env.SQL2_USERNAME,
    password: process.env.SQL2_PASSWORD,
    database: process.env.SQL2_DATABASE,
    multipleStatements: true
  },
  secret: process.env.SECRET,
};