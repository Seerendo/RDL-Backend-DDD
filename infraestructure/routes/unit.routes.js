const { Router } = require('express')

module.exports = function ({ UnitController }) {
    const router = Router();

    router.get('/', UnitController.getUnits.bind(UnitController));
    
    return router;
}