
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actors').del()
    .then(function () {
      // Inserts seed entries
      return knex('actors').insert([
        {first_name: 'Harrison', last_name: 'Ford'},
        {first_name: 'Keanu', last_name: 'Reeves'},
        {first_name: 'Uma', last_name: 'Thurman'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('actors_id_seq', (SELECT MAX(id) FROM actors));`
      )
    })
}
