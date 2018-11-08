exports.up = (knex, Promise) => {
  return knex.schema.createTable('costumes_tags', (table) => {
    table.increments('id') // id field, auto PK
    table.integer('costume_id').notNullable()
    table.integer('tag_id').notNullable()
    table.foreign('costume_id').references('costumes.id').onDelete('CASCADE')
    table.foreign('tag_id').references('tags.id').onDelete('CASCADE')
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('costumes_tags')
}
