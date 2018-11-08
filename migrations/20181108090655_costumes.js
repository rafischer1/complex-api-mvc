
exports.up = (knex, Promise) => {
  return knex.schema.createTable('costumes', (table) => {
   table.increments()   // id field, auto PK
   table.string('name').notNullable()
   table.decimal('price').notNullable()
   table.string('description')
   table.timestamps(true, true)
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('costumes')
}
