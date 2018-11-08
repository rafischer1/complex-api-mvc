//Controller
const model = require('../models/costumes_tags')

const getTagsForCostume = (req, res, next) => {
  return model.getTagsForCostume(req.params.id)
    .then((data) => {
      res.status(200).json(data)
    })
}

const getAll = (req, res, next) => {
  return model.getAll()
    .then((costumes_tags) => {
      res.status(200).json(costumes_tags)
    })
}

module.exports = { getTagsForCostume , getAll }
