// Controller
const model = require('../models/costumes')

const getAll = (req, res, next) => {
  return model.getAll()
    .then((posts) => {
      res.status(200).json(posts)
    })
}

const getCostumeById = (req, res, next) => {
  return model.getCostumesById(id)
    .catch(error => {
      return next({
        status: 404,
        message: error
      })
    })
    .then(data => {
      console.log(data)
      res.json(data)
    })
}

const create = (req, res, next) => {
  return model.create(req.body)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(errors => {
      return next({
        status: 400,
        message: `Could not create new costume`,
        errors: errors
      })
    })
}

const updateOne = (req, res, next) => {
  return model.updateOne(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      const error = new Error('Failed to update costume')
      error.status = 503
      error.caught = err
      return next(error)
    })
}

const deleteCostume = (req, res, next) => {
  return model.deleteOne(req.params.id)
    .then(post => res.status(200).json(post))
    .catch(err => {
      const error = new Error('Failed to delete post')
      error.status = 503
      error.caught = err
      return next(error)
    })
}

module.exports = {
  getAll,
  create,
  getCostumeById,
  updateOne,
  deleteCostume
}
