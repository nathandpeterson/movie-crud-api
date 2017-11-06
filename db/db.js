const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[env]
const knex = require('knex')(config)

// function test(){
//   return knex('actors')
//   .then(result => console.log(result))
// }

knex.destroy()

module.exports = knex
