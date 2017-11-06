'use strict';

const Hapi = require('hapi');
const Good = require('good');
const routes = require('./routes/user');

const plugins = [
  {
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            response: '*',
            log: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout']
      }
    }
  }
];
const server = new Hapi.Server();

server.connection({port: 9999, host: 'localhost'});
server.route(routes);
server.register(plugins, (err) => {
  if (err) {
    throw err;
  }
  if (!module.parent) {
    server.start((error) => {
      if (error) {
        throw error;
      }
      console.log('Hapi Server Running At', server.info.uri);
    });
  }
});