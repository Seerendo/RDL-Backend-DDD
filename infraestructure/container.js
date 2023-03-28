const { asClass, asValue, asFunction, createContainer } = require('awilix');
const container = createContainer();

const db = require('../domain/dal/models');
const Server = require('./server');
const StartUp = require('./startup');
const Routes = require('./routes')

const { ParamReposiroty } = require('../domain/repositories');
const { ParamBusiness } = require('../domain/index');
const { ParamService } = require('../application/services');
const { ParamController } = require('./controllers');

const ParamRouter = require('./routes/param.routes');

container
    .register({
        start: asClass(StartUp).singleton(),
        server: asClass(Server).singleton(),
        db: asValue(db),
        router: asFunction(Routes).singleton(),
    })
    .register({
        ParamRepository: asClass(ParamReposiroty).singleton(),
        ParamBusiness: asClass(ParamBusiness).singleton(),
        ParamService: asClass(ParamService).singleton(),
        ParamController: asClass(ParamController).singleton(),
        ParamRouter: asFunction(ParamRouter).singleton(),
    });

 module.exports = container;