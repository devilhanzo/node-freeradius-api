/*
 * @Author: puck.solo 
 * @Date: 2017-10-24 15:34:04 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-24 16:25:40
 */
/*
 * @Author: puck.solo 
 * @Date: 2017-10-24 13:24:26 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-24 15:25:21
 */
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Knex = require('knex');
require('dotenv').config();
const config = require('./config.js');


const indexRoute = require('./routes/index');
const radgroupreplyRoute = require('./routes/radgroupreply');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// console.log(config.sql);
app.use((req, res, next) => {
    req.db = Knex({
        client: 'mysql',
        connection: config.sql,
        pool: {
            min: 0,
            max: 7,
            afterCreate: (conn, done) => {
                conn.query('SET NAMES utf8', (err) => {
                    done(err, conn);
                });
            }
        },
        debug: true,
        acquireConnectionTimeout: 10000
    });
    next();
});

app.use('/', indexRoute);
app.use('/radgroupreply', radgroupreplyRoute);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
      });
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {},
    });
  });
  
  module.exports = app;