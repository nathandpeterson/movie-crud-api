const knex = require('../db/db.js')


function getAllMovies(){
  return ['Blade Runner', 'A Scanner Darkly', 'Gattica']
}

module.exports = {getAllMovies}
