
exports.up = (knex, Promise) => {
  return knex.schema.createTable('tags', (table) => {
   table.increments()   // id field, auto PK
   table.string('name').notNullable()
   table.text('bio')
   table.string('photo')
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('tags')
}
