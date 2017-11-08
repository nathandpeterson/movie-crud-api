
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies_actors').del()
    .then(() => knex('actors').del())
    .then(() => knex('movies').del())
}
