const fs = require('fs');
const medicalStudy = require('../models').medicalStudy;
const patient = require('../models').patient;
const user = require('../models').user;

const uploadFiles = async (req, res) => {
  console.log(req)
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    let foundPatient;
    return user.findOne({ where: { email: req.body.email }, include: patient })
      .then(data => {
        foundPatient = data;
        return medicalStudy.create({
          type: req.file.mimetype,
          name: req.file.originalname,
          data: fs.readFileSync(
            './uploads/' + req.file.filename
          ),
          patientId: foundPatient.patient.get('id'),
          date: req.body.date,
          description: req.body.description
        })
      }).then((medicalStudy) => {
        fs.writeFileSync(
          './tmp/' + medicalStudy.name,
          medicalStudy.data
        );
        return res.send(`File has been uploaded.`);
      }).catch((error) => res.send(`Error when trying upload images: ${error}`))
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};