
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments()
    table.string('title').notNullable()
    table.integer('year')
    table.string('plot')
    table.string('image_url')
    table.decimal('rating', 2,1)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
