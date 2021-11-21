/* Controllers */
const userController = require('../controllers/').user;
const loginController = require('../controllers/').login;
const medicalHistoryController = require('../controllers/').medicalHistory;
const patientMedicController = require('../controllers/').patientMedic;
const prescriptionController = require('../controllers/').prescription;
const appointmentController = require('../controllers/').appointment;
const uploadController = require('../controllers/').upload;
const medicalStudyController = require('../controllers/').medicalStudy;
const upload = require('../middleware/upload');

const medicalStudy = require('../models').medicalStudy;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Heal api is working as intended',
  }));

  app.post('/user/create', userController.create);

  app.post('/user/find', userController.find);

  app.post('/login', loginController.login);

  app.post('/medicalHistory/create', medicalHistoryController.create);
  app.post('/medicalHistory/list', medicalHistoryController.list);

  app.post('/prescription/create', prescriptionController.create);
  app.post('/prescription/list', prescriptionController.list);

  app.post('/appointment/create', appointmentController.create);
  app.post('/appointment/list', appointmentController.list);
  app.post('/appointment/delete', appointmentController.delete);

  app.post('/patientMedic/create', patientMedicController.create);
  app.post('/patientMedic/list', patientMedicController.list);
  app.post('/patientMedic/delete', patientMedicController.delete);

  app.post('/medicalStudy/upload', upload.single('file'), uploadController.uploadFiles);

  app.get('/medicalStudy/download', medicalStudyController.list);

  app.get('/download', async (req, res) => {
    medicalStudy.findOne(
      {
        where: {
          name: 'download.png'
        }
      }
    ).then(img => res.send(img))
  })

};