const { asClass, asValue, asFunction, createContainer } = require('awilix');
const container = createContainer();

const db = require('../domain/dal/models');
const Server = require('./server');
const StartUp = require('./startup');

container
    .register({
        start: asClass(StartUp).singleton(),
        server: asClass(Server).singleton(),
        db: asValue(db),
    });

 module.exports = container;