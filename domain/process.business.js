const Business = require("./business");
const { ProcessEntity } = require('./entities/index');

class ProcessBusiness extends Business {
    constructor({ ProcessRepository }) {
        super(ProcessRepository, ProcessEntity);
    }
}

module.exports = ProcessBusiness;