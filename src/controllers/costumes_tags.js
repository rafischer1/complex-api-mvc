//Controller
const model = require('../models/costumes_tags')

const getTagsForCostume = (req, res, next) => {
  let id = req.params.costume_id
  return model.getTagsForCostume(id )
    .then((data) => {
      console.log('ctrl data: ', data)
      res.status(200).json(data)
    })
}

const create = (req, res, next) => {
  return model.create(req.body)
    .catch(errors => {
      return next({
        status: 400,
        message: `Could not create`,
        errors: errors
      })
    })
    .then(data => {
      res.status(201).json(data)
    })
}

const getAll = (req, res, next) => {
  return model.getAll()
    .then((costumes_tags) => {
      res.status(200).json(costumes_tags)
    })
}



module.exports = { getTagsForCostume , create, getAll}
