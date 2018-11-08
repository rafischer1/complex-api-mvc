// Model
const knex = require('../../knex')


const getAll = (req, res, next) => {
  return knex('tags')
    .then(tags => {
      return tags
    })
    .catch(err => Promise.reject(err))
}

const getOneTag = (id) => {
  return knex('tags')
    .where('id', id)
    .then(tag => {
      // console.log('color data: ',tag[0].color)
      return tag[0].color
    })
    .catch(err => Promise.reject(err))
}

const create = (body) => {
  return knex('tags')
    .insert(body)
    .returning('*')
    .then(tag => tag[0])
    .catch(err => Promise.reject(err))
}

module.exports = { getAll, create, getOneTag }
