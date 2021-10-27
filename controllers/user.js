const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const medic = require('../models').medic;
const patient = require('../models').patient;
const user = require('../models').user;
const userType = require('../models').userType;

module.exports = {
  create(req, res) {
    if (req.body.isMedic) {
      return user
        .create({
          name: req.body.name,
          surname: req.body.surname,
          dni: req.body.dni,
          email: req.body.email,
          password: req.body.password,
          userTypeId: 1,
          medic: {
            medicalRegistration: req.body.medicalRegistration,
            specialty: req.body.specialty
          },
        }, {
          include: [medic, userType]
        }).then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error))
    } else {
      return user
        .create({
          name: req.body.name,
          surname: req.body.surname,
          dni: req.body.dni,
          email: req.body.email,
          password: req.body.password,
          userTypeId: 2,
          patient: {
            weight: req.body.weight,
            height: req.body.height
          },
        }, {
          include: [patient, userType]
        }).then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error))
    }
  },

  find(req, res) {
    return user.findOne({
      where: {
        email: req.body.email,
      }
    })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
};