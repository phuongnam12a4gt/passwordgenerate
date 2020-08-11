'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM lowercase'
        db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM lowercase WHERE id = ?'
        db.query(sql, [req.params.lowercaseId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let lowercaseId = req.params.lowercaseId;
        let sql = 'UPDATE lowercase SET ? WHERE id = ?'
        db.query(sql, [data, lowercaseId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO lowercase SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM lowercase WHERE id = ?'
        db.query(sql, [req.params.lowercaseId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}