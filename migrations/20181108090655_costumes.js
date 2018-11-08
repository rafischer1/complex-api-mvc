
exports.up = (knex, Promise) => {
  return knex.schema.createTable('costumes', (table) => {
   table.increments()   // id field, auto PK
   table.string('name').notNullable()
   table.integer('price').notNullable().defaultTo(.01)
   table.string('description')
   table.timestamps(true, true)
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('costumes')
}
