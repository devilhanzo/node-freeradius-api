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
  // mongo: {
  //   // uri: 'mongodb://user:.password@host:port/dbname'
  //   uri: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`,
  // },
  // mongo2: {
  //   // uri: 'mongodb://user:.password@host:port/dbname'
  //   uri: `mongodb://${process.env.MONGO2_USER}:${process.env.MONGO2_PASSWD}@${process.env.MONGO2_HOST}:${process.env.MONGO2_PORT}/${process.env.MONGO2_DBNAME}`,
  // },
  // seedDB: false,
  // seedMongoDB: false,
  // seedDBForce: true,
  // db: process.env.DB_TYPE, // mongo,sql if you want to use any SQL change dialect above in sql config
  // cipher: 'bcrypt', // bcrypt,md5 passport password encrpt and decrype algorithm
  // sessionSecret: process.env.SESSION_SECRET,
};