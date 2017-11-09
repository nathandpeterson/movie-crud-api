
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies_actors').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies_actors').insert([
        {actors_id: 1, movies_id: 1},
        {actors_id: 1, movies_id: 2}
      ])
    })
}
