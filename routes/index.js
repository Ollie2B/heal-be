/* Controllers */
const usersController = require('../controllers').users;

module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/users/create', usersController.create);
   app.get('/api/users/list', usersController.list);
   app.post('/api/users/find', usersController.find);

};