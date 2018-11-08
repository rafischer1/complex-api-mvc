// Model
const knex = require('../../knex')

const getAll = (req, res, next) => {
  return knex('costumes')
    .then(costumes => {
      // console.log('model costumes:', costumes)
      return costumes
    })
    .catch(err => Promise.reject(err))
}

const getCostumeById = (id) => {
  return knex('costumes')
    .where('id', id)
    .then(tag => {
      return tag[0]
    })
    .catch(err => Promise.reject(err))
}

const create = (body) => {
  return knex('costumes')
    .insert(body)
    .returning('*')
    .then(tag => tag[0])
    .catch(err => Promise.reject(err))
}

const deleteOne = (id) => {
  return knex('costumes')
  .where('id', id)
  .del()
  .returning('*')
  .then(post => post[0])
  .catch(err => Promise.reject(err))
}

const updateOne = (id, body) => {
  console.log('int he model update:', body)
  let newPost = {}
  if (body.name) {
    newPost.name = body.name
  }
  if (body.price) {
    newPost.price = body.price
  }
  if (body.description) {
    newPost.description = body.description
  }
  return knex('costumes')
    .where('id', id)
    .then(data => {
      knex('costumes')
        .where('id', id)
        .limit(1)
        .update(newPost)
        .returning("*")
        .then(data => {
          res.json(data[0])
        })
    })
    .catch(err => {
      next(err)
    })
}

module.exports = { getAll, create, getCostumeById, deleteOne, updateOne }
