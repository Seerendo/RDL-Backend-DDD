const Service = require('./service');

class ProcessService extends Service {
    constructor({ ProcessBusiness }) {
        super(ProcessBusiness);
    }
}

module.exports = ProcessService;