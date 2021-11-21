const medicalStudy = require('../models').medicalStudy;
const patient = require('../models').patient;
const user = require('../models').user;

module.exports = {
  list(req, res) {
    console.log(req)
    return user.findOne({
      where: {
        email: req.query.email,
      },
      include: [{ model: patient, include: [medicalStudy] }]
    })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
};