const { asClass, asValue, asFunction, createContainer } = require('awilix');
const container = createContainer();

const db = require('../domain/dal/models');
const Server = require('./server');
const StartUp = require('./startup');
const Routes = require('./routes')

const { 
    ParamReposiroty, 
    ProcessRepository, 
    SpecRepository, 
    UnitRepository, 
    UserRepository } = require('../domain/repositories');
const { 
    ParamBusiness,
    ProcessBusiness,
    UnitBusiness,
    SpecBusiness,
    UserBusiness } = require('../domain/index');
const { 
    ParamService,
    ProcessService,
    UnitService,
    SpecService,
    UserService } = require('../application/services');
const { 
    ParamController,
    ProcessController,
    UnitController,
    SpecController,
    UserController } = require('./controllers');

const ParamRouter = require('./routes/param.routes');
const ProcessRouter = require('./routes/process.routes');
const UnitRouter = require('./routes/unit.routes');
const SpecRouter = require('./routes/spec.routes');
const UserRouter = require('./routes/user.routes');

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
    })
    .register({
        ProcessRepository: asClass(ProcessRepository).singleton(),
        ProcessBusiness: asClass(ProcessBusiness).singleton(),
        ProcessService: asClass(ProcessService).singleton(),
        ProcessController: asClass(ProcessController).singleton(),
        ProcessRouter: asFunction(ProcessRouter).singleton(),
    })
    .register({
        UnitRepository: asClass(UnitRepository).singleton(),
        UnitBusiness: asClass(UnitBusiness).singleton(),
        UnitService: asClass(UnitService).singleton(),
        UnitController: asClass(UnitController).singleton(),
        UnitRouter: asFunction(UnitRouter).singleton(),
    })
    .register({
        SpecRepository: asClass(SpecRepository).singleton(),
        SpecBusiness: asClass(SpecBusiness).singleton(),
        SpecService: asClass(SpecService).singleton(),
        SpecController: asClass(SpecController).singleton(),
        SpecRouter: asFunction(SpecRouter).singleton(),
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        UserBusiness: asClass(UserBusiness).singleton(),
        UserService: asClass(UserService).singleton(),
        UserController: asClass(UserController).singleton(),
        UserRouter: asClass(UserRouter).singleton(),
    });

 module.exports = container;