const models = require('../models/models.js')

function home (req, res, next) {
  res.status(200).send({message: 'go to /movies for movies'})
}

function getOneMovie(req, res, next) {
  models.getOneMovie(req.params.id)
  .then(result => {
    res.status(200).json(result)
  })
}

function getAllMovies (req, res, next) {
  const data = models.getAllMovies()
  .then(result => {
    res.status(200).json(result)
  })
}

function getAllActors (req, res, next) {
  const data = models.getAllActors()
  .then(result => {
    res.status(200).json(result)
  })
}

function getOneActor (req, res, next) {
  models.getOneActor(req.params.id)
  .then(result => res.status(200).json(result))
}



module.exports = {home, getOneMovie, getAllMovies, getAllActors, getOneActor}
