const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const medics = require('../models').users_medics;
const patients = require('../models').users_patients;

module.exports = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  create(req, res) {
    return patients
      .create({
        name: req.body.name,
        surname: req.body.surname,
        dni: req.body.dni,
        mail: req.body.mail,
        password: req.body.password,
      })
      .then(patients => res.status(200).send(patients))
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
    if (req.body.isMedic) {
      return medics.findAll({
        where: {
          mail: req.body.mail,
          password: req.body.password
        }
      })
        .then(medics => res.status(200).send(medics))
        .catch(error => res.status(400).send(error))
    } else {
      return patients.findAll({
        where: {
          mail: req.body.mail,
          password: req.body.password
        }
      })
        .then(patients => res.status(200).send(patients))
        .catch(error => res.status(400).send(error))
    }
  },
};