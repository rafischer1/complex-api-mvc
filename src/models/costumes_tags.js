// Model
const knex = require('../../knex')

const getAll = (req, res, next) => {
  return knex('costumes_tags')
    .then(costumes_tags => {
      // console.log('model costumes_tags:', costumes_tags)
      return costumes_tags
    })
    .catch(err => Promise.reject(err))
}

const getTagsForCostume = (costume_id) => {
  return knex('costumes_tags')
    .where('id', costume_id)
    .then(tag => {
      return tag[0]
    })
    .catch(err => Promise.reject(err))
}

const create = (body) => {
  return knex('costumes_tags')
    .insert(body)
    .returning('*')
    .then(tag => tag[0])
    .catch(err => Promise.reject(err))
}

module.exports = { getAll, create, getTagsForCostume }
