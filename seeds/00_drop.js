
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_actor').del()
    .then(() => knex('actors').del())
    .then(() => knex('movies').del())
}
