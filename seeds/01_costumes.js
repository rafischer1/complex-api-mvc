exports.seed = (knex, Promise) => {
  return knex('costumes').del()
    .then(() => {
      return knex('costumes').insert([{
            id: 1,
            name: "Dracula",
            price: 20.50,
            description: "'I never drink...wine' but you'll be raking in the candy with these fangs!"
          },
          {
            id: 2,
            name: "Zombie",
            price: 10,
            description: "Fast zombies get more candy! Slow and steady often wins the scary race..."
          },
          {
            id: 3,
            name: "Mummy",
            price: 3.50,
            description: "A classic! Rise from the grave to claim your candy grave gifts and curse the stingy!"
          },
          {
            id: 4,
            name: "Sleazy P",
            price: 45.35,
            description: "Unleash your shadow side and go for the costume contest gold!"
          },
          {
            id: 5,
            name: "Weird Al",
            price: 20,
            description: "An instant classic that never gets old. Dare to be stupid!"
          },
          {
            id: 6,
            name: "Jeff Goldblum",
            price: 15.50,
            description: "Because all the ladies love Jeff Goldblum for some reason and you'll positively charm the candy out of your neighbors' bowls"
          },
          {
            id: 7,
            name: "Ichabod Crane",
            price: 8.75,
            description: "The exceedingly lank schoolmaster. Oooh Ichy - you poor fool. Get spirited away by the Headless Horseman this holiday."
          },
          {
            id: 7,
            name: "Black Panther",
            price: 17.25,
            description: "The most popular costume this year. Superheroes are always rewarded with lots of candy! Wakanda forever."
          },

        ])
        .then(() => {
          return knex.raw("SELECT setval('costumes_id_seq', (SELECT MAX(id) FROM costumes));")
        })
    })
}
