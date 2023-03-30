const { Router } = require('express')

module.exports = function ({ ParamController }) {
    const router = Router();

    router.get('/', ParamController.getParams.bind(ParamController));
    router.get('/:id', ParamController.getParamById.bind(ParamController));
    
    return router;
}