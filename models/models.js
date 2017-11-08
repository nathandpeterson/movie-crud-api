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
  //validate?
  console.log('.....in the model....', id, [data])
  return knex('movies').where({id:id}).first()
    .returning('*')
    .then(reqMovie => {
    if(data.title) reqMovie.title = data.title
    if(data.year) reqMovie.year = data.year
    if(data.plot) reqMovie.plot = data.plot
    if(data.image_url) reqMovie.image_url = data.image_url
    if(data.rating) reqMovie.rating = data.rating
    .update(reqMovie)
  })
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
