const path = require('path')
const env = process.env.NODE_ENV || 'development'
const db = path.join(__dirname, '..', 'db', `${env}.json`)
const knex = require('../db/db.js')


function getAllMovies(){
  return knex('movies')
}

function getOneMovie(id){
  return knex('movies').where({id: id}).first()
}

function getAllActors(){
  return knex('actors')
}


module.exports = {getOneMovie, getAllMovies, getAllActors}
