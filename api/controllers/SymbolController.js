'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM symbol'
        db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM symbol WHERE id = ?'
        db.query(sql, [req.params.symbolId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let symbolId = req.params.symbolId;
        let sql = 'UPDATE symbol SET ? WHERE id = ?'
        db.query(sql, [data, symbolId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO symbol SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM symbol WHERE id = ?'
        db.query(sql, [req.params.symbolId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}