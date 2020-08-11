'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM number'
        db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM number WHERE id = ?'
        db.query(sql, [req.params.numberId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let numberId = req.params.numberId;
        let sql = 'UPDATE number SET ? WHERE id = ?'
        db.query(sql, [data, numberId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO number SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM number WHERE id = ?'
        db.query(sql, [req.params.numberId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}