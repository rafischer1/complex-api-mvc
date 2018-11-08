exports.seed = (knex, Promise) => {
  return knex('tags').del()
    .then(() => {
      return knex('tags').insert([{
            id: 1,
            name: "Outdoors"
          },
          {
            id: 2,
            name: "Indoors"
          },
          {
            id: 3,
            name: "21+"
          },
          {
            id: 4,
            name: "Beer"
          },
          {
            id: 5,
            name: "Pizza"
          },
          {
            id: 6,
            name: "Recurring"
          },
          {
            id: 7,
            name: "Ice Cream"
          },
          {
            id: 8,
            name: "Flash Event"
          },
          {
            id: 9,
            name: "College/University"
          },
        ])
        .then(() => {
          return knex.raw("SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));")
        })
    })
}
