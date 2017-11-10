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

function createMovie(data){
  //validate data?
  return knex('movies').insert(data)
}

function updateMovie(id, data){
  return knex('movies')
  .update(data)
  .where({id:id})
  .returning('*')
  }


function destroyMovie(id){
  return knex('movies').where({id:id}).del()
}

function getAllActors(){
  return knex('actors')
}

function getOneActor(id){
  return knex('actors').where({id: id}).first()
}


module.exports = {getOneMovie, getAllMovies, createMovie, destroyMovie, updateMovie, getAllActors, getOneActor}
