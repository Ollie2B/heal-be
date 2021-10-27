const user = require('../models').user;

module.exports = {
  login(req, res) {
    return user.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      },
      include: [patient, medic, userType]
    })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
};