const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const medic = require('../models').medic;
const patient = require('../models').patient;
const user = require('../models').user;
const patientMedic = require('../models').patientMedic;

module.exports = {
  create(req, res) {
    let foundPatient;
    let foundMedic;
    return user.findOne({ where: { email: req.body.patientEmail }, include: patient })
      .then(data => {
        foundPatient = data;
        return user.findOne({ where: { email: req.body.medicEmail }, include: medic })
      }).then(data => {
        foundMedic = data;
        return patientMedic.create({
          editPermission: req.body.editPermission,
          patientId: foundPatient.patient.get('id'),
          medicId: foundMedic.medic.get('id')
        }
        )
      })
      .then(patientMedic => res.status(200).send(patientMedic))
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    return user.findOne({
      where: { email: req.body.email },
      include: [{ model: patient, include: [{ model: medic, include: [user] }] }]
    })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
};