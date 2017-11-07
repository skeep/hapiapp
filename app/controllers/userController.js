const models = require('../models');
const Boom = require('boom');
const read =  (request, reply) => {
  models.user.findAll().then((result) => {
    reply({'Users': result});
  })
  .catch((err) => reply(Boom.badImplementation('Error creating user:', err)));
};

const create = (request, reply) => {
  models.user.create({username: request.payload.username}).then((result) => {
    reply({'Users': result});
  })
  .catch((err) => reply(Boom.badImplementation('Error reading users:', err)));;
};

module.exports = {read, create};