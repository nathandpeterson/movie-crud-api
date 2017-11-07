const path = require('path')
const env = process.env.NODE_ENV || 'development'
const db = path.join(__dirname, '..', 'db', `${env}.json`)
const knex = require('../db/db.js')


function getAllMovies(){
  return ['Blade Runner', 'A Scanner Darkly', '2001: A Space Odyssey']
}

function getAllActors(){
  return knex('actors')
}


module.exports = {getAllMovies, getAllActors}
