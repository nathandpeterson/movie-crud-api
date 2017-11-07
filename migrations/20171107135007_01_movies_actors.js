
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies_actors', table => {
    table.integer('actor_id').notNullable()
    table.foreign('actor_id').references('actors.id')
    table.integer('movie_id').notNullable()
    table.foreign('movie_id').references('movies.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies_actors')
}
