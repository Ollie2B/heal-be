/* Controllers */
const userController = require('../controllers/').user;
const loginController = require('../controllers/').login;
const medicalHistoryController = require('../controllers/').medicalHistory;
const patientMedicController = require('../controllers/').patientMedic;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Heal api is working as intended',
  }));

  /**
  * @swagger
  * components:
  *   schemas:
  *     Patient:
  *       type: object
  *       required:
  *         - name
  *         - surname
  *         - dni
  *         - mail
  *         - medicalRegistration
  *         - specialty
  *         - password
  *       properties:
  *         id:
  *           type: integer
  *           description: The auto-generated id of the patient
  *         name:
  *           type: string
  *           description: The first name of the patient
  *         surname:
  *           type: string
  *           description: The family name of the patient
  *         dni:
  *           type: string
  *           description: The national identification number of the patient
  *         mail:
  *           type: string
  *           description: The medic's email
  *         password:
  *           type: string
  *           description: The patient's password
  *       example:
  *         id: 1
  *         name: Aedes
  *         surname: Aegyptis
  *         dni: 628927297
  *         mail: mosquito@hotmail.com
  *         password: 1234
  */

  /**
  * @swagger
  * components:
  *   schemas:
  *     Medic:
  *       type: object
  *       required:
  *         - name
  *         - surname
  *         - dni
  *         - mail
  *         - medicalRegistration
  *         - specialty
  *         - password
  *         - isMedic
  *       properties:
  *         id:
  *           type: integer
  *           description: The auto-generated id of the medic
  *         name:
  *           type: string
  *           description: The first name of the medic
  *         surname:
  *           type: string
  *           description: The family name of the medic
  *         dni:
  *           type: string
  *           description: The national identification number of the medic
  *         mail:
  *           type: string
  *           description: The medic's email
  *         medicalRegistration:
  *           type: string
  *           description: The number of medical regitration provided to the medic
  *         specialty:
  *           type: string
  *           description: The medical field in which the medic has specialised
  *         password:
  *           type: string
  *           description: The medic's password
  *         isMedic:
  *           type: bool
  *           description: Has to exist to create a medic, if false then a patient is created instead
  *       example:
  *         id: 1
  *         name: Aedes
  *         surname: Aegyptis
  *         dni: 628927297
  *         mail: mosquito@hotmail.com
  *         medicalRegistration: 8282629
  *         specialty: Traumatologo
  *         password: 1234
  *         isMedic: true
  * 
  */

  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: The users managing API
   */

  /**
   * @swagger
   * /api/users/create:
   *   post:
   *     summary: Creates a new user
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Creates a user for a patient or creates a user for a medic if the isMedic flag is true
   */
  app.post('/users/create', userController.create);

  /**
   * @swagger
   * /api/users/find:
   *   post:
   *     summary: Returns user if match
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Returns all user data if the user and password combination exists
   */
  app.get('/user/find', userController.find);

  app.get('/login', loginController.login);

  app.post('/medicalHistory/create', medicalHistoryController.create);
  app.get('/medicalHistory/list', medicalHistoryController.list);

  app.post('/patientMedic/create', patientMedicController.create);
  app.get('/patientMedic/list', patientMedicController.list);
};