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
    if (req.body.isMedic) {
      return medics
        .create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dni: req.body.dni,
          mail: req.body.mail,
          medicalRegistration: req.body.medicalRegistration,
          specialty: req.body.specialty,
          password: req.body.password,
        })
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error))
    } else {
      return patients
        .create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dni: req.body.dni,
          mail: req.body.mail,
          password: req.body.password,
          birthDate: req.body.birthDate,
        })
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error))
    }
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