const Sequelize = require('sequelize');
const users = require('../models').users;
module.exports = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  create(req, res) {
    return users
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        score: req.body.score
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  /**
   * 
   * @param {*} _ 
   * @param {*} res 
   */
  list(_, res) {
    return users.findAll({})
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  find(req, res) {
    return users.findAll({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }
    })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
};