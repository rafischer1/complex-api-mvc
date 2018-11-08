
exports.up = (knex, Promise) => {
  return knex.schema.createTable('costumes', (table) => {
   table.increments()   // id field, auto PK
   table.string('name').notNullable()
   table.text('bio')
   table.string('photo')
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('costumes')
}
