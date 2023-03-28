const { Router } = require('express')

module.exports = function ({ ParamController }) {
    const router = Router();

    router.get('/', ParamController.getParams.bind(ParamController));
    
    return router;
}