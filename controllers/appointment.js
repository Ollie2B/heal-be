const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const medic = require('../models').medic;
const patient = require('../models').patient;
const user = require('../models').user;
const appointment = require('../models').appointment;

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
        return appointment.create({
          place: req.body.place,
          date: req.body.date,
          hour: req.body.hour,
          patientId: foundPatient.patient.get('id'),
          medicId: foundMedic.medic.get('id')
        }
        )
      })
      .then(appointment => res.status(200).send(appointment))
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    let foundPatient;
    return user.findOne({ where: { email: req.body.email }, include: patient })
      .then(data => {
        foundPatient = data;
        return appointment.findAll({
          where: {
            patientId: foundPatient.patient.get('id'),
          },
          include: [{ model: medic, include: [user] }]
        })
      })
      .then(appointment => res.status(200).send(appointment))
      .catch(error => res.status(400).send(error))
  },

  delete(req, res) {
    return appointment.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(destroyResult => destroyResult === 0 ? res.status(404).send("appointment not found") : res.status(200).send("appointment deleted"))
      .catch(error => res.status(400).send(error))
  },
};