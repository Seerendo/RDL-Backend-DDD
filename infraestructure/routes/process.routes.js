const { Router } = require('express')

module.exports = function ({ ProcessController }) {
    const router = Router();

    router.get('/', ProcessController.getProcesses.bind(ProcessController));
    
    return router;
}