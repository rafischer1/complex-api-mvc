exports.seed = (knex, Promise) => {
  return knex('costumes_tags').del()
    .then(() => {
      return knex('costumes_tags').insert([{
            id: 1,
            costume_id: 1,
            tag_id: 3
          },
          {
            id: 2,
            costume_id: 5,
            tag_id: 1
          },
          {
            id: 3,
            costume_id: 2,
            tag_id: 3
          },
          {
            id: 4,
            costume_id: 8,
            tag_id: 2
          },
          {
            id: 5,
            costume_id: 8,
            tag_id: 2
          },
          {
            id: 6,
            costume_id: 6,
            tag_id: 3
          },
          {
            id: 7,
            costume_id: 7,
            tag_id: 1
          },
          {
            id: 8,
            costume_id: 4,
            tag_id: 3
          },
          {
            id: 9,
            costume_id: 3,
            tag_id: 1
          }
        ])
        .then(() => {
          return knex.raw("SELECT setval('costumes_tags_id_seq', (SELECT MAX(id) FROM costumes_tags));")
        })
    })
}
