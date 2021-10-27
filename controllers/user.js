const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const medic = require('../models').medic;
const patient = require('../models').patient;
const user = require('../models').user;

module.exports = {

  create(req, res) {
    return user
      .create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        dni: req.body.dni,
        email: req.body.email,
        password: req.body.password,
        user_type_id: req.body.user_type_id,
        medic: {
          medicalRegistration: req.body.medicalRegistration,
          specialty: req.body.specialty
        },
        patient: {
          weight: req.body.weight,
          height: req.body.height
        }
      }, {
        include: [medic, patient]
      }).then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))

  },

  list(_, res) {
    return users.findAll({})
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },

  find(req, res) {
    return patients.findAll({
      where: {
        mail: req.body.mail,
        password: req.body.password
      }
    })
      .then(patients => res.status(200).send(patients))
      .catch(error => res.status(400).send(error))
  },
};