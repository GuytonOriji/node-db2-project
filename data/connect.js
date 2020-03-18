const express = require('express')
const knex = require('knex')


const knexfile = require('../knexfile.js')

const enviorment = process.env.DB_ENV || "development"


const knexConfig = knexfile[enviorment]



module.exports = knex(knexConfig)