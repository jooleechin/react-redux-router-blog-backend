const capitalize = require('lodash/capitalize')
const pluralize = require('pluralize')

module.exports = name => {
  const singular = name.split('_').map((e,i,a) => {
    if(i === a.length-1) return pluralize.singular(e)
    return e
  })

  const modelName = singular.reduce((acc, e) => acc + capitalize(e), '')

  const Model = require(`../models/${modelName}.model`)

  const errorHandler = next => {
    return error => {
      console.error(error)

      const status = 400
      const message = `Please check your request and try again`
      next({ status, message })
    }
  }

  class Controller {
    static exists (req, res, next) {
      const status = 404
      const message = `Could not find ${modelName} with id of ${req.params.id}`

      Model.find(req.params.id)
      .then(response => response ? next() : next({ status, message }))
    }

    static index (req, res, next) {
      Model.all()
      .then(response => res.json({ [pluralize(name)]: response }))
      .catch(errorHandler(next))
    }

    static show (req, res, next) {
      console.log(modelName)
      Model.find(req.params.id)
      .then(response => res.json({ [modelName]: response }))
      .catch(errorHandler(next))
    }

    static create (req, res, next) {
      Model.create(req.body)
      .then(response => res.status(201).json({ [modelName]: response }))
      .catch(errorHandler(next))
    }

    static update (req, res, next) {
      Model.update(req.params.id, req.body)
      .then(response => res.json({ [modelName]: response }))
      .catch(errorHandler(next))
    }

    static destroy (req, res, next) {
      Model.destroy(req.params.id)
      .then(response => res.json({ [modelName]: response }))
      .catch(errorHandler(next))
    }
  }

  return Controller
}
