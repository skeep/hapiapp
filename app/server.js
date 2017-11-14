'use strict';

import Hapi from 'hapi';
import Good from 'good';
import routes from './routes';
import Inert from 'inert';
import Vision from 'vision';
import HapiSwagger from 'hapi-swagger';
import Pack from '../package';
import JsonApi from '@gar/hapi-json-api';

const hapiOptions = {
  info: {
      'title': 'Test API Documentation',
      'version': Pack.version,
      }
  };


const plugins = [
  {
    register: JsonApi,
    options: {}
  },
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: hapiOptions
  },
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
]

const server = new Hapi.Server();
server.connection({port: 9999, host: 'localhost'});
server.route(routes);
server.register(plugins, (err) => {
  if (err) {
    throw err;
  }
});

server.start(err => { 
  if (err) {
    throw err;
  }
  console.log( `Server started at ${ server.info.uri }` );
});

export default server;