
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies_actors', table => {
    table.integer('actors_id')
    table.foreign('actors_id').references('id').inTable('actors')
    table.integer('movies_id')
    table.foreign('movies_id').references('id').inTable('movies')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies_actors')
}
