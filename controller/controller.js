const models = require('../models/models.js')

function home (req, res, next) {
  res.status(200).send({message: 'go to /movies for movies'})
}

function getAllMovies (req, res, next) {
  const data = models.getAllMovies()
  res.status(200).json({data})
}

function getAllActors (req, res, next) {
  const data = models.getAllActors()
  .then(result => {
    res.status(200).json(result)
  })
}



module.exports = {home, getAllMovies, getAllActors}
