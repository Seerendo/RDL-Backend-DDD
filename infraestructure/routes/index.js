const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/* const ParamRoutes = require('./param.routes'); */

module.exports = function ({
    ParamRouter,
}) {
    const apiRouter = Router();
    const router = Router();

    apiRouter
        .use(cors())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

    apiRouter.use('/param', ParamRouter);

    router.use('/api', apiRouter);
    return router;
}