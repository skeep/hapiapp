const models = require('../models');
const read =  (request, reply) => {
  models.user.findAll().then((result) => {
    reply({'Users': result});
  });
};

const create = (request, reply) => {
  models.user.create({username: request.payload.username}).then((result) => {
    reply({'Users': result});
  });
};

module.exports = {read, create};