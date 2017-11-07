const models = require('../models');
const Boom = require('boom');
const read = async (request, reply) => {
  try {
    const result = await models.user.findAll();
    reply({'Users': result});
  }
  catch(exception) {
    reply(Boom.badImplementation('Error reading user:', exception));
  }
};

const create = async (request, reply) => {
  try {
    const result = await models.user.create({username: request.payload.username});
    reply({'Users': result});
  }
  catch(exception) {
    reply(Boom.badImplementation('Error creating users:', err))
  }
};

module.exports = {read, create};