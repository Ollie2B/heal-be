const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const medic = require('../models').medic;
const patient = require('../models').patient;
const user = require('../models').user;
const prescription = require('../models').prescription;

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
        return prescription.create({
          detail: req.body.detail,
          date: req.body.date,
          patientId: foundPatient.patient.get('id'),
          medicId: foundMedic.medic.get('id')
        }
        )
      })
      .then(prescription => res.status(200).send(prescription))
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    let foundPatient;
    return user.findOne({ where: { email: req.body.email }, include: patient })
      .then(data => {
        foundPatient = data;
        return prescription.findAll({
          where: {
            patientId: foundPatient.patient.get('id'),
          },
          include: [{ model: medic, include: [user] }]
        })
      })
      .then(prescription => res.status(200).send(prescription))
      .catch(error => res.status(400).send(error))
  },
};