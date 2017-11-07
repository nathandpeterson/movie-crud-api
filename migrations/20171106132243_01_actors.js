
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actors', table => {
  table.increments().notNullable()
  table.string('first_name').notNullable()
  table.string('last_name').notNullable()
  table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actors')
}
