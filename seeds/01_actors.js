
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actors').del()
    .then(function () {
      // Inserts seed entries
      return knex('actors').insert([
        {name: 'Harrison Ford'},
        {name: 'Keanu Reeves'},
        {name: 'Uma Thurman'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('actors_id_seq)', (SELECT MAX(id) FROM actors));`
      )
    })
}
