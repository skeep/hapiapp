'use strict';

const Joi = require('joi');
const {read, create} = require('../controllers/userController');
module.exports = [{
  method: 'POST',
  path: '/users',
  config: {
    description: 'Inserts one user into the system',
    handler: create,
    validate: {
      payload: {
        username: Joi.string().alphanum().min(3).max(30).required(),
      }
    }
  }
},
{
  method: 'GET',
  path: '/users',
  config: {
    description: 'Gets the List of All Users in the system',
    handler: read
  }
}
];