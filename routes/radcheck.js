/*
 * @Author: puck.solo 
 * @Date: 2017-10-24 15:33:48 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 09:44:57
 */
var express = require('express');
var router = express.Router();
const radcheck = require('../models/radcheck');
const model = new radcheck.RadCheckModel();
router.get('/', (req, res, next) => {
    let db = req.db;
    model.list(db)
        .then((results) => {
        res.send({ ok: true, rows: results });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    });
});
router.post('/', (req, res, next) => {
    let datas = req.body.data;
    let db = req.db;
    model.save(db, datas)
        .then((results) => {
        res.send({ ok: true });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    let datas = req.body.data;
    let db = req.db;
    if (id) {
        model.update(db, id, datas)
            .then((results) => {
            res.send({ ok: true });
        })
            .catch(error => {
            res.send({ ok: false, error: error });
        })
            .finally(() => {
            db.destroy();
        });
    }
    else {
        res.send({ ok: false, error: 'ข้อมูลไม่สมบูรณ์' });
    }
});
router.get('/detail/:id', (req, res, next) => {
    let id = req.params.id;
    let db = req.db;
    model.detail(db, id)
        .then((results) => {
        res.send({ ok: true, detail: results[0] });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    let db = req.db;
    model.remove(db, id)
        .then((results) => {
        res.send({ ok: true });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
router.get('/find/:username', (req, res, next)=> {
    let username = req.params.username;
    let db = req.db;
    model.userlist(db, username)
    .then((results) => {
        res.send({ ok: true, rows: results });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    });
});
module.exports = router;