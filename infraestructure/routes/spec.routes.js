const { Router } = require('express')

module.exports = function ({ SpecController }) {
    const router = Router();

    router.get('/', SpecController.getSpecs.bind(SpecController));
    
    return router;
}