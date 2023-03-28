const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function ({
    ParamRoutes,
}) {
    const apiRouter = Router();
    const router = Router();

    apiRouter
        .use(cors())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

    apiRouter.use('/param', ParamRoutes);

    router.use('/api', apiRouter);
    return router;
}