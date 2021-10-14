/* Controllers */
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Check /api-docs for a list of available endpoints',
  }));

  /**
   * @swagger
   * components:
   *   schemas:
   *     User:
   *       type: object
   *       required:
   *         - firstName
   *         - lastName
   *       properties:
   *         id:
   *           type: integer
   *           description: The auto-generated id of the user
   *         firstName:
   *           type: string
   *           description: The first name of the user 
   *         lastName:
   *           type: string
   *           description: The lastname of the user also know as family name
   *       example:
   *         id: 1
   *         firstName: Juan
   *         lastName: Perez
   */

  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: The users managing API
   */

  /**
   * @swagger
   * /api/users/list:
   *   get:
   *     summary: Returns the list of all users
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: The list of users
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   */
  app.get('/api/users/list', usersController.list);
  app.post('/api/users/create', usersController.create);
  app.post('/api/users/find', usersController.find);

};