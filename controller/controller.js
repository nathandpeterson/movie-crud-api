const models = require('../models/models.js')

function home (req, res, next) {
  res.status(200).send({message: 'go to /movies for movies'})
}

function getAllMovies (req, res, next) {
  const data = models.getAllMovies()
  console.log(data)
  res.status(200).send({data})
}



module.exports = {home, getAllMovies}
