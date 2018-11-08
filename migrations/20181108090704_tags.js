
exports.up = (knex, Promise) => {
  return knex.schema.createTable('tags', (table) => {
   table.increments()   // id field, auto PK
   table.string('name', 10).notNullable()
   table.string('color').notNullable().defaultTo('#33a7a0').comment('This is the tag color field')
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('tags')
}
