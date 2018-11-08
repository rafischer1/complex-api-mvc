// Model
const knex = require('../../knex')
const tagsModel = require('../models/tags')

const getAll = (req, res, next) => {
  return knex('costumes_tags')
    .then(costumes_tags => {
      return costumes_tags
    })
    .catch(err => Promise.reject(err))
}

const getTagsForCostume = (id) => {
  return knex('costumes_tags')
    .where('costume_id', id)
    .then(tag_id => {    
      return knex('tags')
        .where('id', tag_id[0].tag_id)
        .then(tag => {
          return tag[0].color
        })
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
