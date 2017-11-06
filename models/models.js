// const db = require('../db/db.js')
const env = process.env.NODE_ENV || 'development'
const path = require('path')
const db = path.join(__dirname, '..', 'db', `${env}.json`)
const knex = require('../db/db.js')


function getAllMovies(){

  return ['Blade Runner', 'A Scanner Darkly', 'Gattica']
}

function getAllActors(){
  return knex('actors')
}

module.exports = {getAllMovies, getAllActors}
