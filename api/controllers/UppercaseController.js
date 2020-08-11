'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM uppercase'
        db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM uppercase WHERE id = ?'
        db.query(sql, [req.params.uppercaseId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let uppercaseId = req.params.uppercaseId;
        let sql = 'UPDATE uppercase SET ? WHERE id = ?'
        db.query(sql, [data, uppercaseId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO uppercase SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM uppercase WHERE id = ?'
        db.query(sql, [req.params.uppercaseId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}