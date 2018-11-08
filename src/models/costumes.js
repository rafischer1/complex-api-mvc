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

module.exports = { getAll, create, getCostumeById, deleteOne }
