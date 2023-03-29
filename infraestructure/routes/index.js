const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/* const ParamRoutes = require('./param.routes'); */

module.exports = function ({
    ParamRouter,
    ProcessRouter,
    UnitRouter,
    SpecRouter,
    UserRouter,
}) {
    const apiRouter = Router();
    const router = Router();

    apiRouter
        .use(cors())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

    apiRouter.use('/param', ParamRouter);
    apiRouter.use('/process', ProcessRouter);
    apiRouter.use('/unit', UnitRouter);
    apiRouter.use('/spec', SpecRouter);
    apiRouter.use('/user', UserRouter);

    router.use('/api', apiRouter);
    return router;
}