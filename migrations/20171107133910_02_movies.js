
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments().notNullable()
    table.string('title').notNullable()
    table.integer('year')
    table.string('plot')
    table.string('image_url')
    table.integer('rating')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
