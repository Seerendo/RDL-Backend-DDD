const { Router } = require('express')

module.exports = function ({ ParamController }) {
    const router = Router();

    router.get('/', ParamController.getAllParams.bind(ParamController));
    router.get('/byId', ParamController.getParamById.bind(ParamController));
    router.get('/byDescription', ParamController.getParamByDescription.bind(ParamController));
    router.post('/', ParamController.createParam.bind(ParamController));
    router.put('/', ParamController.updateParam.bind(ParamController));
    
    return router;
}