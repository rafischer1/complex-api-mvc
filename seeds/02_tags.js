exports.seed = (knex, Promise) => {
  return knex('tags').del()
    .then(() => {
      return knex('tags').insert([{
            id: 1,
            name: "25% off",
            color: "#dfde61"
          },
          {
            id: 2,
            name: "2018 Exc",
            color: "#ae57de"
          },
          {
            id: 3,
            name: "Default",
            color: "#33a7a0"
          },
          {
            id: 4,
            name: "Bargain",
            color: "#4244d6"
          },
        ])
        .then(() => {
          return knex.raw("SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));")
        })
    })
}
