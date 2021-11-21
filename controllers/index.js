const user = require('./user');
const login = require('./login');
const medicalHistory = require('./medicalHistory');
const patientMedic = require('./patientMedic');
const prescription = require('./prescription');
const appointment = require('./appointment');
const upload = require('./upload');
const medicalStudy = require('./medicalStudy');

module.exports = {
  user,
  login,
  medicalHistory,
  patientMedic,
  prescription,
  appointment,
  upload,
  medicalStudy
}